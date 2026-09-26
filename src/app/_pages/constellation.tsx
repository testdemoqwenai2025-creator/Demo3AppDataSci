"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import Link from "next/link";
import { SectionCard, PageHeader } from "../_components/section-card";
import { NextSteps } from "../_components/next-steps";
import { hrefFor, PAGES, type PageId } from "../_lib/router";
import { THOUGHT_COUNTS } from "../_lib/thought-counts";
import { PAGE_DATES } from "../_lib/page-dates";
import { THOUGHT_QUALITY } from "../_lib/thought-quality";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Activity, Network, Search, Compass, Activity as ActivityIcon, Layers } from "lucide-react";

/**
 * ConstellationPage — Tier 3 Skill Constellation Explorer
 *
 * Interactive D3 force-directed graph of every page on the platform.
 * Nodes colour-coded by topic group, sized by thought count.
 * Edges derived from shared topic groups (intra-group) + a few
 * hand-picked cross-domain edges (e.g., SVD -> FFT).
 *
 * Click any node to navigate to that page.
 * Hover any node for a preview card.
 * Type in the search box to highlight matching nodes.
 */

// Cross-domain edges — manually curated based on shared math/concepts
// across pages that live in different topic groups.
const CROSS_DOMAIN_EDGES: Array<[PageId, PageId]> = [
  ["fintech", "insurance"],
  ["fintech", "climate-science"],
  ["insurance", "climate-science"],
  ["insurance", "living-monte-carlo"],
  ["fintech", "living-black-scholes"],
  ["fintech", "living-monte-carlo"],
  ["aviation", "living-haversine"],
  ["aviation", "living-kalman"],
  ["robotics", "living-kalman"],
  ["robotics", "aviation"],
  ["audio-signal", "living-fft"],
  ["audio-signal", "living-svd"],
  ["audio-signal", "transformer-deep-dive"],
  ["rlhf", "fine-tuning-deep-dive"],
  ["rlhf", "rl-agentic"],
  ["rlhf", "transformer-deep-dive"],
  ["rlhf", "living-entropy"],
  ["causal-inference", "rl-agentic"],
  ["causal-inference", "model-monitoring"],
  ["causal-inference", "fintech"],
  ["causal-inference", "living-monte-carlo"],
  ["living-svd", "living-fft"],
  ["living-svd", "living-attention"],
  ["living-fft", "living-attention"],
  ["living-kalman", "living-poisson"],
  ["living-monte-carlo", "living-gbm"],
  ["living-monte-carlo", "living-black-scholes"],
  ["living-gbm", "living-black-scholes"],
  ["climate-science", "living-kalman"],
  ["climate-science", "living-monte-carlo"],
];

// Group → colour (oklch). Aligned with the platform's accent palette.
const GROUP_COLORS: Record<string, string> = {
  "Overview": "oklch(0.65 0.16 250)",
  "Ingestion": "oklch(0.65 0.16 280)",
  "Storage & Compute": "oklch(0.65 0.16 200)",
  "Transformation": "oklch(0.65 0.16 180)",
  "Analytics": "oklch(0.65 0.16 160)",
  "Governance": "oklch(0.65 0.16 140)",
  "Delivery": "oklch(0.65 0.16 100)",
  "About": "oklch(0.65 0.16 60)",
  "Knowledge Loop": "oklch(0.65 0.16 30)",
  "Living Equations": "oklch(0.65 0.16 350)",
  "Machine Learning": "oklch(0.65 0.16 320)",
  "Deep Learning": "oklch(0.65 0.16 290)",
  "Fintech": "oklch(0.65 0.16 140)",
  "Climate Science": "oklch(0.65 0.16 200)",
  "Aviation": "oklch(0.65 0.16 220)",
  "Robotics": "oklch(0.65 0.16 30)",
  "Audio Signal": "oklch(0.65 0.16 340)",
  "Insurance": "oklch(0.65 0.16 120)",
  "Causal Inference": "oklch(0.65 0.16 0)",
  "RLHF": "oklch(0.65 0.16 300)",
  "Platform Tools": "oklch(0.55 0.05 250)",
};

const DEFAULT_COLOR = "oklch(0.5 0.10 250)";

interface ConstNode extends d3.SimulationNodeDatum {
  id: PageId;
  label: string;
  group: string;
  thoughtCount: number;
  quality: string;
  lastUpdated: string;
  description: string;
}

interface ConstLink extends d3.SimulationLinkDatum<ConstNode> {
  source: string | ConstNode;
  target: string | ConstNode;
  kind: "intra-group" | "cross-domain";
}

export function ConstellationPage() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(900);
  const [height, setHeight] = useState(620);
  const [hovered, setHovered] = useState<ConstNode | null>(null);
  const [search, setSearch] = useState("");

  // Track container size for responsiveness
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const e of entries) {
        setWidth(Math.max(320, e.contentRect.width));
        setHeight(Math.max(400, Math.min(700, e.contentRect.width * 0.65)));
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Build nodes from PAGES
  const nodes: ConstNode[] = useMemo(() => {
    return PAGES.filter((p) => p.id !== "home").map((p) => ({
      id: p.id,
      label: p.shortLabel,
      group: p.group,
      thoughtCount: THOUGHT_COUNTS[p.id] ?? 0,
      quality: THOUGHT_QUALITY[p.id] ?? "general",
      lastUpdated: PAGE_DATES[p.id] ?? "—",
      description: p.description,
    }));
  }, []);

  // Build edges: intra-group (every 3rd pair, to avoid clutter) + cross-domain
  const links: ConstLink[] = useMemo(() => {
    const out: ConstLink[] = [];
    const byGroup: Record<string, PageId[]> = {};
    for (const p of PAGES) {
      if (p.id === "home" || p.id === "constellation" || p.id === "recent" || p.id === "favorites") continue;
      if (!byGroup[p.group]) byGroup[p.group] = [];
      byGroup[p.group].push(p.id);
    }
    // Within each group, connect adjacent pairs (avoid n² explosion)
    for (const ids of Object.values(byGroup)) {
      for (let i = 1; i < ids.length; i++) {
        out.push({ source: ids[i - 1], target: ids[i], kind: "intra-group" });
      }
    }
    // Cross-domain edges (curated above)
    for (const [a, b] of CROSS_DOMAIN_EDGES) {
      out.push({ source: a, target: b, kind: "cross-domain" });
    }
    return out;
  }, []);

  // Render the simulation
  useEffect(() => {
    if (!svgRef.current || width < 320) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const filteredNodes = search.trim()
      ? nodes.filter((n) =>
          n.label.toLowerCase().includes(search.toLowerCase()) ||
          n.group.toLowerCase().includes(search.toLowerCase()) ||
          n.description.toLowerCase().includes(search.toLowerCase())
        )
      : nodes;
    const filteredIds = new Set<PageId>(filteredNodes.map((n) => n.id));
    const filteredLinks = links.filter(
      (l) => filteredIds.has(l.source as PageId) && filteredIds.has(l.target as PageId)
    );

    // Make copies so d3 can mutate them
    const simNodes: ConstNode[] = filteredNodes.map((n) => ({ ...n }));
    const simLinks: ConstLink[] = filteredLinks.map((l) => ({ ...l }));

    const sim = d3.forceSimulation(simNodes)
      .force("link", d3.forceLink<ConstNode, ConstLink>(simLinks)
        .id((d) => d.id)
        .distance((d) => d.kind === "cross-domain" ? 120 : 50)
        .strength((d) => d.kind === "cross-domain" ? 0.3 : 0.6))
      .force("charge", d3.forceManyBody().strength(-60))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d) => {
        const n = d as ConstNode;
        return 6 + Math.min(10, n.thoughtCount * 0.5);
      }));

    // Draw links first (under nodes)
    const linkSel = svg.append("g")
      .attr("stroke", "currentColor")
      .attr("stroke-opacity", (d: any) => d.kind === "cross-domain" ? 0.35 : 0.12)
      .attr("stroke-width", (d: any) => d.kind === "cross-domain" ? 1.2 : 0.6)
      .selectAll("line")
      .data(simLinks)
      .join("line");

    // Drag behaviour
    const drag = d3.drag<SVGGElement, ConstNode>()
      .on("start", (event, d) => {
        if (!event.active) sim.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x; d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) sim.alphaTarget(0);
        d.fx = null; d.fy = null;
      });

    // Draw nodes
    const nodeSel = svg.append("g")
      .selectAll("g")
      .data(simNodes)
      .join("g")
      .attr("cursor", "pointer")
      .call(drag as any);

    nodeSel.append("circle")
      .attr("r", (d) => 4 + Math.min(8, d.thoughtCount * 0.4))
      .attr("fill", (d) => GROUP_COLORS[d.group] ?? DEFAULT_COLOR)
      .attr("stroke", "var(--background)")
      .attr("stroke-width", 1.5)
      .attr("opacity", (d) => {
        if (!search.trim()) return 1;
        return d.label.toLowerCase().includes(search.toLowerCase()) ? 1 : 0.25;
      });

    // Node labels — only show on larger nodes or when hovered/searched
    nodeSel.append("text")
      .text((d) => d.label)
      .attr("x", 0)
      .attr("y", (d) => -8 - Math.min(8, d.thoughtCount * 0.4))
      .attr("text-anchor", "middle")
      .attr("font-size", 8)
      .attr("font-family", "ui-monospace, monospace")
      .attr("fill", "currentColor")
      .attr("fill-opacity", 0.7)
      .style("pointer-events", "none");

    // Hover behaviour
    nodeSel.on("mouseenter", (_e, d) => setHovered(d as ConstNode))
           .on("mouseleave", () => setHovered(null));

    // Click → navigate
    nodeSel.on("click", (_e, d) => {
      if (typeof window !== "undefined") {
        window.location.href = hrefFor((d as ConstNode).id);
      }
    });

    // Tick: update positions
    sim.on("tick", () => {
      linkSel
        .attr("x1", (d: any) => (d.source as ConstNode).x ?? 0)
        .attr("y1", (d: any) => (d.source as ConstNode).y ?? 0)
        .attr("x2", (d: any) => (d.target as ConstNode).x ?? 0)
        .attr("y2", (d: any) => (d.target as ConstNode).y ?? 0);
      nodeSel.attr("transform", (d) => `translate(${d.x ?? 0}, ${d.y ?? 0})`);
    });

    return () => {
      sim.stop();
    };
  }, [nodes, links, width, height, search]);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Tier 3 flagship · interactive graph of all platform topics"
        title="Skill Constellation Explorer"
        description="Every page on the platform as a node in an interactive graph. Nodes are colour-coded by topic group, sized by thought count, and linked by both intra-group adjacency (light) and curated cross-domain edges (heavier). Click any node to navigate. Drag to reposition. Search to filter."
        right={
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1.5"><Network className="h-3 w-3" /> {nodes.length} nodes</Badge>
            <Badge variant="outline" className="gap-1.5"><Compass className="h-3 w-3" /> {links.length} edges</Badge>
            <Badge variant="outline" className="gap-1.5"><ActivityIcon className="h-3 w-3" /> d3-force</Badge>
          </div>
        }
      />

      <SectionCard
        title="The constellation"
        description="Drag any node to reposition. Click to navigate. Hover for details."
        icon={<Network className="h-5 w-5" />}
        contentClassName="p-0"
      >
        <div className="p-3 border-b border-border/60 bg-muted/20">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Filter nodes by label, group, or description…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-md text-sm"
            />
            <span className="ml-auto text-xs text-muted-foreground font-mono">
              {search.trim() ? `matched ${nodes.filter(n => n.label.toLowerCase().includes(search.toLowerCase()) || n.group.toLowerCase().includes(search.toLowerCase())).length}/${nodes.length}` : `${nodes.length} nodes total`}
            </span>
          </div>
        </div>

        <div ref={containerRef} className="relative w-full h-[620px] overflow-hidden">
          <svg
            ref={svgRef}
            width={width}
            height={height}
            className="block text-foreground"
            role="img"
            aria-label="Interactive constellation graph of all platform topics"
          />
          {hovered && (
            <div className="absolute top-3 left-3 max-w-xs rounded-md border border-border/60 bg-background/95 backdrop-blur p-3 shadow-md pointer-events-none">
              <p className="text-sm font-semibold">{hovered.label}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{hovered.group}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-3">{hovered.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <Badge variant="outline" className="text-[10px]">{hovered.thoughtCount} thoughts</Badge>
                <Badge variant="outline" className="text-[10px]">{hovered.quality}</Badge>
                <Badge variant="outline" className="text-[10px] font-mono">{hovered.lastUpdated}</Badge>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">Click to navigate →</p>
            </div>
          )}
        </div>
      </SectionCard>

      <SectionCard
        title="How to read the constellation"
        description="Three things the graph tells you at a glance."
        icon={<Layers className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold text-sm mb-1">Cluster topology</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Pages in the same topic group (e.g. "Apache Flink" and "Apache Kafka")
              cluster together. The shape of the cluster reveals the structure
              of the platform — the data-engineering cluster is huge, the
              computational-biology cluster is dense but compact.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm mb-1">Cross-domain edges</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Heavier lines connect pages from different topic groups that
              share math or concepts. Aviation ↔ Living Kalman (state
              estimation), Insurance ↔ Climate Science (loss distributions),
              RLHF ↔ Living Entropy (KL divergence).
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm mb-1">Node size = depth</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Larger nodes have more "thoughts" (deeper-thought content).
              Hover any node to see the count + quality rating. The
              constellation surfaces which pages the platform has invested
              the most thinking in.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="Colour legend"
        description="Each topic group gets its own hue. Hover any node to see which group it belongs to."
        icon={<Activity className="h-5 w-5" />}
      >
        <div className="flex flex-wrap gap-2">
          {Object.entries(GROUP_COLORS).slice(0, 20).map(([group, color]) => (
            <span
              key={group}
              className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full border border-border/60"
            >
              <span className="h-2.5 w-2.5 rounded-full inline-block" style={{ background: color }} />
              {group}
            </span>
          ))}
        </div>
      </SectionCard>

      <NextSteps relatedPages={[
        { id: "connections", reason: "View the elegant-code card graph (focused on math connections)" },
        { id: "genealogy", reason: "Topic-level timeline — same math, different era" },
        { id: "elegant-code", reason: "20 cards that bridge the constellations" },
        { id: "home", reason: "Return to the platform overview" },
      ]} />

      <div className="flex flex-wrap gap-2">
        <Link href={hrefFor("home")} className="text-sm text-primary hover:underline">
          → Return to overview
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("connections")} className="text-sm text-primary hover:underline">
          → Connections (elegant-code graph)
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("genealogy")} className="text-sm text-primary hover:underline">
          → Genealogy timeline
        </Link>
      </div>
    </div>
  );
}
