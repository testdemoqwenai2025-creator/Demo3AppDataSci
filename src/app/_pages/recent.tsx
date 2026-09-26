"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SectionCard, PageHeader } from "../_components/section-card";
import { NextSteps } from "../_components/next-steps";
import { hrefFor, pageById } from "../_lib/router";
import { THOUGHT_COUNTS } from "../_lib/thought-counts";
import { PAGE_DATES } from "../_lib/page-dates";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "../_components/icon";
import { History, Trash2, Clock } from "lucide-react";

interface RecentEntry {
  id: import("../_lib/router").PageId;
  ts: number;
}

const STORAGE_KEY = "recent-pages-v1";
const RECENT_PAGES_MAX = 30;

function formatTimestamp(ts: number): string {
  const date = new Date(ts);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60_000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin} min ago`;
  if (diffHr < 24) return `${diffHr} hr ago`;
  if (diffDay < 7) return `${diffDay} day${diffDay === 1 ? "" : "s"} ago`;
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

export function RecentPage() {
  const [recent, setRecent] = useState<RecentEntry[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setRecent(JSON.parse(raw));
    } catch {
      /* best-effort */
    }
  }, []);

  const clearHistory = () => {
    setRecent([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* best-effort */
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Platform tools · personal navigation history"
        title="Recently visited"
        description="Your personal navigation timeline. Every page you visit on the platform is logged here (cap 30, in localStorage — no server-side tracking). Useful for the 'where was I?' loop."
        right={
          recent.length > 0 ? (
            <Button variant="outline" size="sm" onClick={clearHistory} className="gap-1.5">
              <Trash2 className="h-3.5 w-3.5" />
              Clear history
            </Button>
          ) : null
        }
      />

      <SectionCard
        title="Your timeline"
        description="Most recent first. Click any entry to revisit."
        icon={<History className="h-5 w-5" />}
      >
        {recent.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Clock className="h-10 w-10 mx-auto mb-3 opacity-50" />
            <p className="text-sm font-medium">No history yet</p>
            <p className="text-xs mt-1">Browse the platform — your navigation timeline will appear here.</p>
            <Button asChild size="sm" className="mt-4">
              <Link href={hrefFor("home")}>Start exploring →</Link>
            </Button>
          </div>
        ) : (
          <ol className="relative border-l border-border/60 ml-2 space-y-3">
            {recent.map((entry, idx) => {
              const page = pageById(entry.id);
              return (
                <li key={`${entry.id}-${idx}`} className="ml-5">
                  <span className="absolute -left-2 flex h-3 w-3 items-center justify-center rounded-full bg-primary/30 ring-2 ring-background">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                  </span>
                  <div className="flex items-start gap-3">
                    <Link
                      href={hrefFor(entry.id)}
                      className="group flex items-start gap-3 flex-1 min-w-0"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted/40 border border-border/60">
                        <Icon name={page.icon} className="h-4 w-4 text-primary/80" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                          {page.shortLabel}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          {page.group} · {formatTimestamp(entry.ts)}
                        </p>
                      </div>
                      <div className="hidden sm:flex flex-wrap gap-1.5 shrink-0">
                        {THOUGHT_COUNTS[entry.id] && (
                          <Badge variant="outline" className="text-[10px]">{THOUGHT_COUNTS[entry.id]} thoughts</Badge>
                        )}
                        {PAGE_DATES[entry.id] && (
                          <Badge variant="outline" className="text-[10px] font-mono">{PAGE_DATES[entry.id]}</Badge>
                        )}
                      </div>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </SectionCard>

      <NextSteps relatedPages={[
        { id: "favorites", reason: "Starred pages — your curated collection" },
        { id: "constellation", reason: "See all topics as an interactive graph" },
        { id: "home", reason: "Return to the platform overview" },
      ]} />

      <div className="flex flex-wrap gap-2">
        <Link href={hrefFor("home")} className="text-sm text-primary hover:underline">
          → Return to overview
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("favorites")} className="text-sm text-primary hover:underline">
          → Favorites
        </Link>
      </div>
    </div>
  );
}
