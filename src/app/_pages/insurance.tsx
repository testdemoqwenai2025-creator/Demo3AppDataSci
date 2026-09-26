"use client";

import Link from "next/link";
import { SectionCard, PageHeader } from "../_components/section-card";
import { NextSteps } from "../_components/next-steps";
import { CodeBlock } from "../_components/code-block";
import { hrefFor } from "../_lib/router";
import { Badge } from "@/components/ui/badge";
import { DeeperThought, DeeperThoughtSection } from "../_components/deeper-thought";
import {
  Umbrella, Activity, Layers, GitBranch, BarChart3, TrendingUp, Shield,
} from "lucide-react";

const KPIS = [
  { label: "Lloyd's market premium volume", value: "£52B", hint: "2024 gross written premium across 100+ syndicates", deltaTone: "flat" as const },
  { label: "Solvency II SCR coverage", value: "≥150%", hint: "Solvency Capital Requirement — regulatory minimum", deltaTone: "flat" as const },
  { label: "Cat bond outstanding (2024)", value: "$45B", hint: "ILS market — alternative reinsurance capital", deltaTone: "up" as const },
  { label: "MC aggregate loss accuracy", value: "±2%", hint: "10M simulations on Poisson-lognormal compound loss", deltaTone: "flat" as const },
];

const COMPOUND_LOSS_PY = `# ============================================================
# Aggregate loss distribution — Poisson frequency × lognormal severity
# Free: OSS (BSD-3). pip install numpy scipy.
# ============================================================
import numpy as np
from scipy.stats import lognorm, poisson

# Portfolio: 10,000 property policies exposed to hurricane peril
# Annual frequency: Poisson(lambda=0.3) per policy
# Severity per loss: Lognormal(mu=10, sigma=1.2) — i.e., £22,000 mean, £400k tail

N_POLICIES = 10_000
LAMBDA = 0.3   # expected events per policy per year
MU = 10.0      # log-mean severity (so mean = exp(mu + sigma^2/2))
SIGMA = 1.2    # log-std severity (controls tail heaviness)

# Monte Carlo simulation: 1 million years
np.random.seed(42)
N_SIM = 1_000_000

# For each simulated year, draw the number of losses per policy, then the loss amounts
annual_losses = np.zeros(N_SIM)
for i in range(N_SIM):
    # Total events across the portfolio (Poisson compound)
    n_events = poisson.rvs(LAMBDA * N_POLICIES)
    # Severity per event
    severities = lognorm.rvs(s=SIGMA, scale=np.exp(MU), size=n_events)
    annual_losses[i] = severities.sum()

# Percentiles — the actuarial "return periods"
for p, label in [(0.50, "Median"), (0.90, "1-in-10"), (0.99, "1-in-100"), (0.995, "1-in-200"), (0.999, "1-in-1000")]:
    val = np.percentile(annual_losses, p * 100)
    print(f"{label:12s}: £{val:>14,.0f}  ({val/N_POLICIES:.0f}/policy)")

# TVaR (Tail Value at Risk) — average loss given loss > VaR
var_99 = np.percentile(annual_losses, 99)
tvar_99 = annual_losses[annual_losses > var_99].mean()
print(f"\\nTVaR @ 99%: £{tvar_99:,.0f}  (expected loss, given loss > VaR)")
`;

const CREDIBILITY_PY = `# ============================================================
# Bayesian credibility — combine prior with observed loss experience
# Free: OSS (BSD-3). pip install numpy.
# ============================================================
import numpy as np

# Bühlmann credibility: Z = n / (n + k), where k = EPV / VHM
#   EPV = Expected Process Variance (variance within a risk)
#   VHM = Variance of Hypothetical Means (variance between risks)

# Setup: 200 policies, observed over 5 years. Each policy has a true
# (unknown) loss frequency, drawn from a Gamma prior.

# Prior: Gamma(alpha=3, beta=10) → mean = 0.3, std = 0.17
# Likelihood: Poisson(lambda_i) per year per policy

np.random.seed(0)
N_POLICIES = 200
N_YEARS = 5

# Draw each policy's true frequency from the prior
true_freqs = np.random.gamma(shape=3.0, scale=1/10, size=N_POLICIES)
# Observe 5 years of loss counts per policy
observed = np.random.poisson(true_freqs[:, None] * np.ones((N_POLICIES, N_YEARS)))

# Estimate Bühlmann k:
#   EPV ≈ mean of within-policy variance (Poisson: variance ≈ mean)
#   VHM ≈ variance of between-policy means
epv = observed.mean(axis=1).mean()  # ≈ process variance
vhm = observed.mean(axis=1).var()   # between-policy variance
k = epv / vhm
print(f"EPV: {epv:.3f}   VHM: {vhm:.3f}   k = EPV/VHM = {k:.3f}")

# Credibility per policy: Z = N / (N + k)
Z = N_YEARS / (N_YEARS + k)
print(f"\\nCredibility Z = {Z:.3f}  (i.e., {Z*100:.1f}% weight on policy's own experience)")

# Credibility-weighted estimate per policy:
#   est_freq_i = Z * policy_mean_i + (1-Z) * portfolio_mean
portfolio_mean = observed.mean()
est_freqs = np.zeros(N_POLICIES)
for i in range(N_POLICIES):
    policy_mean = observed[i].mean()
    est_freqs[i] = Z * policy_mean + (1 - Z) * portfolio_mean

print(f"\\nPolicy 0:  true={true_freqs[0]:.3f}  observed_mean={observed[0].mean():.3f}  credibility_est={est_freqs[0]:.3f}")
print(f"Policy 1:  true={true_freqs[1]:.3f}  observed_mean={observed[1].mean():.3f}  credibility_est={est_freqs[1]:.3f}")

# MAE: credibility estimate beats raw experience
raw_mae = np.mean(np.abs(observed.mean(axis=1) - true_freqs))
cred_mae = np.mean(np.abs(est_freqs - true_freqs))
print(f"\\nMAE (raw experience):    {raw_mae:.3f}")
print(f"MAE (credibility-weighted): {cred_mae:.3f}  ← lower is better")
`;

export function InsurancePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Insurance & Actuarial · loss distributions, credibility, Markov chains"
        title="Insurance & Actuarial — compound loss, Bayesian credibility, and Markov transitions"
        description="From the compound Poisson-lognormal model that prices aggregate annual losses across a 10,000-policy portfolio, through the Bühlmann credibility formula that blends a single policy's experience with the portfolio mean, to the Markov chain that models credit rating transitions over a 10-year horizon. This page is the actuarial home for the VaR, Bayes, and Markov cards — the trio that defines modern insurance pricing and reserving."
        right={
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1.5"><TrendingUp className="h-3 w-3" /> VaR</Badge>
            <Badge variant="outline" className="gap-1.5"><Shield className="h-3 w-3" /> Solvency II</Badge>
            <Badge variant="outline" className="gap-1.5"><GitBranch className="h-3 w-3" /> Markov</Badge>
          </div>
        }
      />

      <SectionCard
        title="KPIs at a glance"
        description="Scale of the modern insurance and reinsurance market."
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
        title="Compound loss — Poisson frequency × lognormal severity"
        description="The fundamental model that prices aggregate annual losses for any insurance portfolio."
        icon={<BarChart3 className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every non-life insurance portfolio is priced by the same compound
            loss model: <code className="font-mono">L = Σ (from i=1 to N) X_i</code> where
            N (the number of losses in a year) is Poisson-distributed and each
            X_i (the size of an individual loss) is heavy-tailed — typically
            lognormal, gamma, or generalised Pareto for the tail. The sum of
            heavy-tailed variables is itself heavy-tailed, and the 99.5%
            percentile of L (the "1-in-200-year loss") is the Solvency II
            capital requirement.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Analytic computation of L's distribution is intractable for any
            non-trivial portfolio, so we use Monte Carlo: simulate 1 million
            years of loss experience, sort the totals, and read off the
            percentiles. The simulation below runs in &lt;5 seconds on a modern
            laptop and gives a 1-in-1000-year loss estimate with ±2% accuracy.
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={COMPOUND_LOSS_PY} language="python" filename="compound-loss-mc.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="Bayesian credibility — Bühlmann's formula"
        description="How to combine a single policy's loss history with the portfolio mean."
        icon={<Shield className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground/80">Bühlmann credibility</strong> solves
            the small-sample problem in insurance pricing: a single policy has 5 years
            of loss history (5 data points), which is too few to price the policy on
            its own experience. The credibility-weighted estimate is:
          </p>
          <pre className="bg-muted/40 p-3 rounded-md text-xs font-mono">
{`est_freq_i = Z * policy_mean_i + (1 - Z) * portfolio_mean
Z = N / (N + k)
k = EPV / VHM`}
          </pre>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Where EPV (Expected Process Variance) measures within-policy noise
            and VHM (Variance of Hypothetical Means) measures between-policy
            dispersion. When a policy is well-differentiated (high VHM), Z → 1
            and we trust its own experience. When policies are similar (low
            VHM), Z → 0 and we trust the portfolio mean. The formula is the
            closed-form Bayesian posterior for the Gamma-Poisson conjugate
            pair, and generalises to the Bühlmann-Straub credibility model for
            varying exposure.
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={CREDIBILITY_PY} language="python" filename="credibility.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="Markov credit transitions — the actuarial side of credit risk"
        description="10-year rating transition matrices power both insurance reserving and structured credit pricing."
        icon={<GitBranch className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            A credit rating transition matrix M is a Markov chain where
            M[i,j] = probability of moving from rating i to rating j in one
            year. S&amp;P, Moody's, and Fitch publish these annually from
            ~40 years of historical default data. The 1-year matrix M can
            be exponentiated: M^10 gives the 10-year transition probabilities,
            which feed directly into both insurance reserving (for credit
            insurance products like trade credit) and structured credit
            pricing (CLOs, CDOs — the latter of which was infamously
            mispriced in 2007-2008 because the model assumed stationary
            transitions through the GFC, which they weren't).
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The actuarial innovation of the last 20 years is regime-switching
            matrices: condition M on macroeconomic state (expansion vs.
            recession), and use a hidden Markov model on the macro state to
            generate term structures of transition probabilities that reflect
            current economic conditions. This is the same mathematics as the
            Kalman filter (a state-space model with hidden state) — the
            platform's <Link href={hrefFor("living-kalman")} className="text-primary hover:underline">Living Kalman</Link> page
            covers the underlying filter.
          </p>
        </div>
      </SectionCard>

      <SectionCard
        title="Connections across the platform"
        description="How insurance connects to the rest of the platform."
        icon={<Umbrella className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link href={hrefFor("fintech")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Fintech</p>
            <p className="text-xs text-muted-foreground mt-1">VaR, Black-Scholes, Monte Carlo — the quantitative finance sister domain.</p>
          </Link>
          <Link href={hrefFor("living-monte-carlo")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living Monte Carlo</p>
            <p className="text-xs text-muted-foreground mt-1">The simulation technique that powers aggregate loss estimation.</p>
          </Link>
          <Link href={hrefFor("climate-science")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Climate Science</p>
            <p className="text-xs text-muted-foreground mt-1">Climate perils — flood, storm, drought — drive insurance loss tails.</p>
          </Link>
          <Link href={hrefFor("living-black-scholes")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living Black-Scholes</p>
            <p className="text-xs text-muted-foreground mt-1">Cat bond pricing uses Black-Scholes variants for the trigger options.</p>
          </Link>
        </div>
      </SectionCard>

      <DeeperThoughtSection pageTitle="Insurance">
        <DeeperThought title="Insurance is the discipline where Bayes is taken most seriously" connectedTo="Bayes card + credibility theory">
          <p>{"Every actuarial pricing decision is a Bayesian inference. The prior is the portfolio mean; the likelihood is the policy's own loss experience; the posterior is the credibility-weighted estimate. The reason Bayes is taken seriously here — and not, say, in retail pricing — is regulatory: Solvency II mandates that 'all available information' must be used to price risk, and Bayesian updating is the mathematically correct way to combine prior and new information. Actuaries don't use Bayes because they're sophisticated; they use it because the regulator requires it."}</p>
        </DeeperThought>
        <DeeperThought title="The 1-in-200-year loss is the number that defines insurance" connectedTo="Solvency II + compound Poisson">
          <p>{"Solvency II requires every EU insurer to hold capital sufficient to survive a 1-in-200-year loss (99.5% VaR over a one-year horizon). That single number — the 99.5th percentile of the compound loss distribution — determines the capital requirement, the pricing floor, and ultimately whether a syndicate is solvent. The Monte Carlo simulation that computes it runs nightly at every major insurer, on portfolios of millions of policies. The accuracy of the tail estimate (±2% from 1M simulations) translates directly into ±2% of regulatory capital — billions of pounds at Lloyd's scale. This is why insurance is the biggest commercial user of Monte Carlo methods outside of physics."}</p>
        </DeeperThought>
        <DeeperThought title="The 2008 crisis was a Markov chain failure" connectedTo="Markov transitions + GFC">
          <p>{"The structured credit models that priced CDOs in 2006-2007 used a stationary Markov assumption: transition probabilities next year = transition probabilities last year. When the GFC hit, transition probabilities shifted dramatically — AAA-to-default probability went from 0.1% (historical average) to 18% (actual GFC outcome). The models priced the CDOs as if the GFC couldn't happen, because they had no concept of regime switching. The post-crisis fix was regime-switching Markov chains (hidden state = macro regime), but the lesson stuck: every Markov assumption carries an implicit stationarity assumption, and stationarity fails exactly when you need the model to work most. The same caveat applies to any Markov model on this platform."}</p>
        </DeeperThought>
      </DeeperThoughtSection>

      <NextSteps relatedPages={[
        { id: "fintech", reason: "VaR + Black-Scholes — the financial sister domain" },
        { id: "living-monte-carlo", reason: "The simulation that powers aggregate loss" },
        { id: "climate-science", reason: "Climate perils drive insurance loss tails" },
        { id: "living-kalman", reason: "Regime-switching models use Kalman-style state estimation" },
      ]} />

      <div className="flex flex-wrap gap-2">
        <Link href={hrefFor("home")} className="text-sm text-primary hover:underline">
          → Return to overview
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("fintech")} className="text-sm text-primary hover:underline">
          → Fintech
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("climate-science")} className="text-sm text-primary hover:underline">
          → Climate Science
        </Link>
      </div>
    </div>
  );
}
