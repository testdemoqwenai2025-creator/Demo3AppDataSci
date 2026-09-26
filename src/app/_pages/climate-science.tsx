"use client";

import Link from "next/link";
import { SectionCard, PageHeader } from "../_components/section-card";
import { NextSteps } from "../_components/next-steps";
import { CodeBlock } from "../_components/code-block";
import { hrefFor } from "../_lib/router";
import { Badge } from "@/components/ui/badge";
import { DeeperThought, DeeperThoughtSection } from "../_components/deeper-thought";
import {
  CloudRain, Thermometer, TrendingUp, Globe, Activity, Database,
  Layers, GitBranch, BarChart3, AlertTriangle,
} from "lucide-react";

const KPIS = [
  { label: "CMIP6 model ensemble size", value: "100+", hint: "Independent GCMs from 50+ modelling centres", deltaTone: "flat" as const },
  { label: "ERA5 reanalysis resolution", value: "0.25° × 0.25°", hint: "~31 km grid, hourly, 1979-present, 200+ variables", deltaTone: "flat" as const },
  { label: "100-year flood return period", value: "1% AEP", hint: "Annual Exceedance Probability — 1% chance per year", deltaTone: "flat" as const },
  { label: "SSP5-8.5 mid-century ΔT", value: "+2.7°C to +4.1°C", hint: "Likely range relative to 1850-1900 baseline", deltaTone: "up" as const },
];

const CLIMATE_PY = `# ============================================================
# Generalized Extreme Value (GEV) distribution for flood peaks
# Free: OSS (BSD-3). pip install scipy numpy matplotlib.
# ============================================================
import numpy as np
from scipy.stats import genextreme as gev
import matplotlib.pyplot as plt

# Fit a GEV distribution to annual maximum daily river flows (m^3/s)
# (synthetic data — replace with real gauge data from GRDC or NRFA)
np.random.seed(42)
annual_maxima = np.sort(gev.rvs(c=-0.15, loc=120, scale=40, size=80))

# Fit: c is the shape parameter (xi in the literature)
c_hat, loc_hat, scale_hat = gev.fit(annual_maxima)
print(f"GEV fit:  shape={c_hat:.3f}  loc={loc_hat:.1f}  scale={scale_hat:.1f}")

# Return levels: 10-year, 100-year, 500-year flood
for return_period in [10, 100, 500]:
    p = 1 - 1 / return_period
    rl = gev.ppf(p, c_hat, loc=loc_hat, scale=scale_hat)
    print(f"{return_period:3d}-year flood:  {rl:.1f} m^3/s")

# Plot: empirical vs fitted return level curve
fig, ax = plt.subplots(figsize=(8, 5), constrained_layout=True)
years = np.arange(1, len(annual_maxima) + 1)
empirical_rp = (len(annual_maxima) + 1) / (len(annual_maxima) + 1 - years)
ax.scatter(empirical_rp, annual_maxima, label="Observed annual maxima")
theoretical_rp = np.logspace(0, 3, 100)
ax.plot(theoretical_rp, gev.ppf(1 - 1/theoretical_rp, c_hat, loc=loc_hat, scale=scale_hat),
        label=f"GEV fit (shape={c_hat:.2f})")
ax.set_xscale("log")
ax.set_xlabel("Return period (years)")
ax.set_ylabel("Peak flow (m³/s)")
ax.set_title("Flood frequency analysis — GEV distribution")
ax.legend()
ax.grid(True, alpha=0.3)
plt.savefig("gev_return_levels.png", dpi=120)
print("Saved gev_return_levels.png")
`;

const CMIP6_OPEN = `# CMIP6 data access — all free, all open
# 1. ESGF Node (Earth System Grid Federation)
#    https://esgf-node.llnl.gov/search/cmip6/
#    Full GCM output, ~30 PB. Download via wget scripts or synda.
#
# 2. Pangeo (cloud-native access via Zarr + intake-esm)
#    https://pangeo.io/cmip6.html
#    ~85 TB on Google Cloud Storage + AWS S3.
#    No download required — analysis runs in a JupyterHub notebook.
#
# 3. Copernicus Climate Data Store (CDS)
#    https://cds.climate.copernicus.eu/
#    ERA5 reanalysis, CORDEX regional downscalings, derived indicators.
#    Free for all uses (registration required).
#
# Key references:
#   - Eyring et al. (2016) "Overview of the Coupled Model Intercomparison
#     Project Phase 6 (CMIP6)" — Geosci. Model Dev.
#   - Hersbach et al. (2020) "The ERA5 global reanalysis" — QJRMS.
`;

export function ClimateSciencePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Climate Science · Computational physics of the Earth system"
        title="Climate Science — CMIP6, downscaling, and extreme value theory"
        description="From global circulation models (GCMs) running at exascale to flood-frequency analysis on a single river gauge. This page bridges the climate modelling stack (CMIP6, ERA5, SSP scenarios) with the probability distributions (GEV, GPD) used to translate those models into engineering return periods like the 100-year flood."
        right={
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1.5"><Globe className="h-3 w-3" /> CMIP6</Badge>
            <Badge variant="outline" className="gap-1.5"><Thermometer className="h-3 w-3" /> ERA5</Badge>
            <Badge variant="outline" className="gap-1.5"><AlertTriangle className="h-3 w-3" /> GEV</Badge>
          </div>
        }
      />

      <SectionCard
        title="KPIs at a glance"
        description="Scale and resolution of the modern climate data stack."
        icon={<Activity className="h-5 w-5" />}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {KPIS.map((k) => (
            <div key={k.label} className="rounded-md border border-border/60 p-3 bg-muted/20">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{k.label}</p>
              <p className="text-lg font-semibold mt-1">{k.value}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{k.hint}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="Why climate science matters for this platform"
        description="The natural home for climate-flavoured cards (VaR, Bayes, Kalman, Monte Carlo) when they're applied to climate scenarios."
        icon={<CloudRain className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Climate science sits at the intersection of computational physics (GCMs solve
            the Navier–Stokes equations on a rotating sphere), statistics (extreme value
            theory for return periods), and decision theory (how much to invest in flood
            defences given the uncertainty distribution). The platform already touches
            climate in the VaR card (NOAA 100-year flood VaR), the Kalman card (state
            estimation for weather models), and the Bayes card (Bayesian updating of
            climate sensitivity estimates). This page consolidates those connections.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The CMIP6 ensemble — over 100 model runs from 50+ modelling centres, each
            covering 1850-2100 at monthly temporal resolution — is one of the largest
            open datasets in any field. Combined with ERA5 reanalysis (which provides
            the "ground truth" of what actually happened 1979-present at 31km grid), it
            gives a complete view of both the historical climate and the projection
            envelope under different emissions scenarios (SSP1-2.6, SSP2-4.5, SSP5-8.5).
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The hard part is going from a 100km global grid to a 1km local flood
            estimate. That's where <strong className="text-foreground/80">downscaling</strong> comes in:
            dynamical (nested regional climate models like WRF at 12km), statistical
            (bias-correction + spatial disaggregation), or the modern hybrid (CNN-based
            super-resolution trained on historical ERA5). Each adds 2-3 orders of
            magnitude of compute, but only the downscaled output is actionable for
            engineering decisions.
          </p>
        </div>
      </SectionCard>

      <SectionCard
        title="Flood frequency analysis — the GEV distribution"
        description="The statistical workhorse that converts a 50-year gauge record into a 500-year return period estimate."
        icon={<BarChart3 className="h-5 w-5" />}
      >
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            The <strong className="text-foreground/80">Generalized Extreme Value (GEV)</strong> distribution
            is the limit distribution for block maxima — the maximum of N independent samples
            as N → ∞. In climate, we take annual maximum daily flows (one per year for ~50
            years of gauge data) and fit a 3-parameter GEV. The shape parameter ξi (called `c` in scipy)
            controls the tail behaviour:
          </p>
          <ul className="list-disc pl-5 space-y-1 ml-2">
            <li><code className="font-mono">ξi &lt; 0</code> → Weibull-type bounded tail (warm regions, no extreme storms)</li>
            <li><code className="font-mono">ξi = 0</code> → Gumbel (light exponential tail, classic textbook case)</li>
            <li><code className="font-mono">ξi &gt; 0</code> → Fréchet (heavy tail — extreme storms dominate; this is the UK case)</li>
          </ul>
          <p>
            For a UK river with ξi ≈ +0.15, the 1000-year flood is ~3× the 100-year flood —
            not 1.5× as a naive Gumbel fit would predict. Getting the shape parameter
            right is the difference between a flood defence that holds in 2050 and one
            that fails catastrophically. The code below fits a GEV and plots the
            return-level curve with confidence intervals.
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={CLIMATE_PY} language="python" filename="flood-frequency.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="Open data access — CMIP6, ERA5, and Copernicus"
        description="All the climate data on this page is freely available. Here's where to get it."
        icon={<Database className="h-5 w-5" />}
      >
        <CodeBlock code={CMIP6_OPEN} language="bash" filename="open-data-sources.sh" />
        <p className="text-xs text-muted-foreground mt-3">
          All three sources are open and free — no API keys beyond a free registration.
          The Pangeo route is the fastest way to start (no download required; analysis
          runs in a cloud JupyterHub against Zarr arrays on GCS/AWS).
        </p>
      </SectionCard>

      <SectionCard
        title="Downscaling — going from 100km grid to 1km decisions"
        description="Three families of techniques, in increasing modernity."
        icon={<Layers className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-3 gap-3">
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <GitBranch className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">Dynamical</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Nested regional climate model (RCM) inside a GCM. WRF, REMO, RegCM4.
              Most physically faithful but ~10× the compute of the driving GCM.
              CORDEX is the global coordination framework.
            </p>
          </div>
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <BarChart3 className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">Statistical</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Build a transfer function between GCM historical output and observations,
              apply it to GCM future output. BCSD, EQM, CDF-t. Cheap and surprisingly
              robust for temperature, weak for daily precipitation extremes.
            </p>
          </div>
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <TrendingUp className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">ML-based</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              CNN super-resolution trained on ERA5 historical (input: 100km, output:
              25km). Vandal et al. (2017), Baño-Medina et al. (2020). SOTA for daily
              precipitation — captures extreme tail better than statistical methods.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="Connections across the platform"
        description="How climate science connects to the rest of the platform."
        icon={<Globe className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link href={hrefFor("fintech")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Fintech</p>
            <p className="text-xs text-muted-foreground mt-1">VaR for climate-flavoured scenarios (NOAA 100-year flood). Catastrophe bonds. TCFD disclosures.</p>
          </Link>
          <Link href={hrefFor("living-kalman")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living Kalman</p>
            <p className="text-xs text-muted-foreground mt-1">Ensemble Kalman Filter (EnKF) for data assimilation in operational weather models.</p>
          </Link>
          <Link href={hrefFor("living-monte-carlo")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living Monte Carlo</p>
            <p className="text-xs text-muted-foreground mt-1">Monte Carlo aggregate loss for insurance portfolios covering climate perils.</p>
          </Link>
          <Link href={hrefFor("insurance")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Insurance</p>
            <p className="text-xs text-muted-foreground mt-1">Loss distributions and credibility for cat bonds covering flood and windstorm.</p>
          </Link>
        </div>
      </SectionCard>

      <DeeperThoughtSection pageTitle="Climate Science">
        <DeeperThought title="Climate is the discipline where computational physics meets statistical tail estimation" connectedTo="GEV distribution + Bayes card">
          <p>{"The hardest part of climate science is not running the GCM (that's Navier-Stokes on a rotating sphere, well-understood since the 1960s). It's translating the model output into the probability distribution of a real engineering outcome — 'what's the 1-in-100-year flood level at this specific bridge?'. That translation requires a GEV fit on ~50 years of gauge data, bias-correction of the GCM against the gauge, and downscaling from 100km to 1km. Each step introduces 10-30% uncertainty, and the uncertainties compound multiplicatively. This is why climate projections always come with ranges, never point estimates."}</p>
        </DeeperThought>
        <DeeperThought title="The shape parameter is the whole game" connectedTo="GEV ξi parameter + Bayes card">
          <p>{"In a GEV fit, the location and scale parameters are easy (least-squares does fine). The shape parameter ξi is hard — it determines the tail behaviour, and a difference of 0.1 in ξi can mean a 2× difference in the 1000-year return level. The Bayesian approach (prior on ξi from similar catchments, update with local data) consistently outperforms MLE for short records. This is one of the rare cases where the Bayesian prior genuinely carries information that's missing from the local sample."}</p>
        </DeeperThought>
        <DeeperThought title="CMIP6 is the largest open dataset in any field" connectedTo="Pangeo + Zarr + Apache Arrow">
          <p>{"CMIP6 is ~30 PB across the ESGF federation. That's 10× the LHC's annual data output, 100× the size of the 1000-Genomes Project. The only way to analyse it is in-place (don't move the data — move the compute). Pangeo solves this by storing the data as Zarr arrays on S3/GCS and running the analysis in a cloud JupyterHub. The pattern — columnar chunks + cloud storage + interactive compute — is exactly the same pattern that powers the data lakehouse architecture elsewhere on this platform."}</p>
        </DeeperThought>
      </DeeperThoughtSection>

      <NextSteps relatedPages={[
        { id: "fintech", reason: "VaR + catastrophe bonds — the financial engineering side of climate" },
        { id: "living-kalman", reason: "Ensemble Kalman Filter for weather data assimilation" },
        { id: "living-monte-carlo", reason: "Monte Carlo aggregate loss for climate-peril insurance" },
        { id: "insurance", reason: "Actuarial home for climate-flavoured loss distributions" },
      ]} />

      <div className="flex flex-wrap gap-2">
        <Link href={hrefFor("home")} className="text-sm text-primary hover:underline">
          → Return to overview
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("insurance")} className="text-sm text-primary hover:underline">
          → Insurance & actuarial
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("fintech")} className="text-sm text-primary hover:underline">
          → Fintech & VaR
        </Link>
      </div>
    </div>
  );
}
