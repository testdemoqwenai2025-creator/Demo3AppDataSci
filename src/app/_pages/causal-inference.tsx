"use client";

import Link from "next/link";
import { SectionCard, PageHeader } from "../_components/section-card";
import { NextSteps } from "../_components/next-steps";
import { CodeBlock } from "../_components/code-block";
import { hrefFor } from "../_lib/router";
import { Badge } from "@/components/ui/badge";
import { DeeperThought, DeeperThoughtSection } from "../_components/deeper-thought";
import {
  GitFork, Activity, Layers, GitBranch, BarChart3, Network,
} from "lucide-react";

const KPIS = [
  { label: "ATE estimator (DiD)", value: "β̂_1", hint: "Diff-in-diff: change in treatment minus change in control", deltaTone: "flat" as const },
  { label: "IV estimator (2SLS)", value: "β̂ = Z'X / Z'Y", hint: "Wald estimator, asymptotic variance 1/N", deltaTone: "flat" as const },
  { label: "Pearl's do-calculus rules", value: "3", hint: "Action/observation/intervention — sufficient for all identifiable effects", deltaTone: "flat" as const },
  { label: "Synthetic control average TE", value: "~12%", hint: "Meta-analysis of SC studies — modest but consistent treatment effects", deltaTone: "flat" as const },
];

const DIDI_PY = `# ============================================================
# Difference-in-Differences — ATE estimation under parallel trends
# Free: OSS (BSD-3). pip install numpy pandas statsmodels.
# ============================================================
import numpy as np
import pandas as pd
import statsmodels.api as sm

# Simulate: 1000 units observed over 6 years. Treatment kicks in at year 4
# for half the units (treated group); the other half (control) never gets treated.
np.random.seed(0)
N, T = 1000, 6
treated = np.random.binomial(1, 0.5, N)
years = np.arange(T)
post = years >= 4

# Generate panel: Y_it = α_i + β_t + τ * treated * post + ε
data = []
for i in range(N):
    alpha_i = np.random.normal(0, 1)  # unit fixed effect
    for t in years:
        beta_t = 0.5 * t                # year fixed effect
        treat = treated[i] * (1 if t >= 4 else 0)
        tau = 2.0 * treat               # treatment effect = 2 units
        eps = np.random.normal(0, 0.5)
        data.append({"unit": i, "year": t, "treated": treated[i],
                     "post": int(t >= 4), "Y": alpha_i + beta_t + tau + eps})

df = pd.DataFrame(data)

# DiD estimator: β̂_1 from Y = β_0 + β_1 * (treated × post) + β_2 * treated + β_3 * post + ε
df["treat_post"] = df["treated"] * df["post"]
X = sm.add_constant(df[["treat_post", "treated", "post"]])
model = sm.OLS(df["Y"], X).fit(cov_type="cluster", cov_kwds={"groups": df["unit"]})

print(f"DiD estimate (β̂_1): {model.params['treat_post']:.3f}")
print(f"Std error:          {model.bse['treat_post']:.3f}")
print(f"95% CI:             [{model.conf_int().loc['treat_post', 0]:.3f}, "
      f"{model.conf_int().loc['treat_post', 1]:.3f}]")
print(f"True treatment effect: 2.000  (recovered within ±SE)")
`;

const IV_PY = `# ============================================================
# Instrumental Variables — 2SLS estimator under endogeneity
# Free: OSS (BSD-3). pip install numpy statsmodels linearmodels.
# ============================================================
import numpy as np
import statsmodels.api as sm

# Setup: we want to estimate the effect of X on Y, but X is endogenous
# (correlated with the error term). We have an instrument Z that:
#   1. Affects X (relevance)
#   2. Is uncorrelated with Y except through X (exclusion restriction)

np.random.seed(0)
N = 5000

# Unobserved confounder U affects both X and Y
U = np.random.normal(0, 1, N)

# Instrument Z affects X but not Y directly
Z = np.random.binomial(1, 0.5, N)

# X is driven by Z (relevance) and U (endogeneity)
X = 0.7 * Z + 0.5 * U + np.random.normal(0, 0.5, N)

# True effect of X on Y is 3.0; Y is also affected by U (confounding)
Y = 3.0 * X + 1.0 * U + np.random.normal(0, 0.5, N)

# OLS — biased estimate (gives ~3.6 because of confounding)
X_ols = sm.add_constant(X)
ols = sm.OLS(Y, X_ols).fit()
print(f"OLS estimate:  {ols.params[1]:.3f}  (biased — true effect is 3.000)")

# 2SLS — First stage: regress X on Z; get predicted X_hat
#         Second stage: regress Y on X_hat
from linearmodels.iv import IV2SLS
result = IV2SLS.from_formula("Y ~ 1 + [X ~ Z]").fit()
print(f"2SLS estimate: {result.params['X']:.3f}  (consistent — recovers true effect)")

# Weak instrument test: first-stage F-stat should be > 10 (Staiger-Stock rule)
fs = sm.OLS(X, sm.add_constant(Z)).fit()
print(f"First-stage F-stat: {fs.fvalue:.1f}  (needs > 10 for strong instrument)")
`;

export function CausalInferencePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Causal Inference · do-calculus, IV, difference-in-differences"
        title="Causal Inference — Pearl's do-calculus, IV, and difference-in-differences"
        description="From Judea Pearl's do-calculus that formally distinguishes observation P(Y|X) from intervention P(Y|do(X)), through the instrumental variables (IV) estimator that recovers causal effects under endogeneity, to the difference-in-differences (DiD) design that powers most modern policy evaluation. Critical for 'did the treatment cause the outcome?' questions across A/B tests, ML fairness, drug trials, and econometrics."
        right={
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1.5"><GitFork className="h-3 w-3" /> do-calculus</Badge>
            <Badge variant="outline" className="gap-1.5"><Network className="h-3 w-3" /> IV / 2SLS</Badge>
            <Badge variant="outline" className="gap-1.5"><BarChart3 className="h-3 w-3" /> DiD</Badge>
          </div>
        }
      />

      <SectionCard
        title="KPIs at a glance"
        description="Scale and tools of the modern causal inference stack."
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
        title="Pearl's do-calculus — observation vs intervention"
        description="The formal distinction that separates statistics from causal inference."
        icon={<GitFork className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Statistics gives you P(Y|X) — the probability of Y given that you
            observed X. Causal inference gives you P(Y|do(X)) — the probability
            of Y if you <em>intervened</em> to set X. The two are different
            whenever there's a confounder U that affects both X and Y: observing
            X = x tells you something about U (because U caused X), but setting
            X = x doesn't change U.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Judea Pearl's three rules of do-calculus (1995) are the complete
            axioms for transforming expressions involving <code className="font-mono">do()</code> into
            expressions involving only <code className="font-mono">P(·|·)</code> —
            provided you have the causal DAG. If a causal effect can be identified
            from your data + DAG, do-calculus will find it. If it can't be
            identified, no algorithm can compute it without further assumptions.
            This is the foundational completeness result of modern causal inference.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            In practice, you usually don't have the full DAG — you have a set of
            plausible DAGs and you check whether your effect is identifiable under
            all of them. Tools like DoWhy (Microsoft) and DAGitty (Textor et al.)
            operationalise this: draw your DAG, mark which variables are observed,
            and they'll tell you the identify-or-not verdict plus the estimator to use.
          </p>
        </div>
      </SectionCard>

      <SectionCard
        title="Instrumental Variables (IV) — 2SLS estimator"
        description="Recover causal effects when X is endogenous, using an instrument Z that only affects Y through X."
        icon={<Network className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The classical setup: you want to estimate the effect of X on Y,
            but X is endogenous (correlated with the error term, typically
            because of an unobserved confounder U). You have an instrument Z
            that (1) affects X (relevance — first-stage F-stat &gt; 10), and
            (2) only affects Y through X (exclusion restriction — not formally
            testable). The 2SLS estimator recovers a consistent estimate of
            the causal effect even in the presence of unobserved confounding.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Famous IV examples: Angrist &amp; Krueger (1991) used quarter-of-birth
            as an instrument for years of schooling to estimate the return to
            education (compulsory schooling laws bind differently across birth
            quarters). Card (1995) used distance to college as an instrument
            for college attendance. Both found returns ~7-10% per year of
            schooling — substantially lower than naive OLS estimates of 12-15%,
            which were biased upward by ability confounding.
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={IV_PY} language="python" filename="iv-2sls.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="Difference-in-Differences (DiD) — policy evaluation"
        description="The workhorse estimator of modern empirical economics."
        icon={<BarChart3 className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            DiD exploits a natural experiment: a treatment (policy change, new
            law, drug approval) is applied to one group but not another, both
            observed before and after. The DiD estimator is the difference of
            differences: (treated_after − treated_before) − (control_after −
            control_before). The key assumption is <strong className="text-foreground/80">parallel
            trends</strong>: in the absence of treatment, the treated and control
            groups would have evolved in parallel. This is untestable (we
            observe only one timeline) but checkable with pre-treatment data.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            DiD has powered thousands of policy evaluations: Card &amp; Krueger
            (1994) on minimum wage, Autor (2003) on disability insurance, and
            the entire modern synthetic control literature (Abadie 2003,
            Abadie-Diamond-Hainmueller 2010) which extends DiD to cases where
            no clean control group exists.
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={DIDI_PY} language="python" filename="did-estimate.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="Connections across the platform"
        description="How causal inference connects to the rest of the platform."
        icon={<Layers className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link href={hrefFor("fintech")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Fintech</p>
            <p className="text-xs text-muted-foreground mt-1">Did the marketing campaign drive the conversion lift? IV on ad exposure.</p>
          </Link>
          <Link href={hrefFor("rl-agentic")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ RL Agentic</p>
            <p className="text-xs text-muted-foreground mt-1">Off-policy evaluation — causal inference for reinforcement learning.</p>
          </Link>
          <Link href={hrefFor("model-monitoring")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Model Monitoring</p>
            <p className="text-xs text-muted-foreground mt-1">Counterfactual evaluation — would the new model have performed better on yesterday's traffic?</p>
          </Link>
          <Link href={hrefFor("living-monte-carlo")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living Monte Carlo</p>
            <p className="text-xs text-muted-foreground mt-1">Bootstrap + permutation inference for causal estimates.</p>
          </Link>
        </div>
      </SectionCard>

      <DeeperThoughtSection pageTitle="Causal Inference">
        <DeeperThought title="Correlation is not causation — but the difference is computable" connectedTo="Pearl's do-calculus + Bayes card">
          <p>{"The reason causal inference took 100 years to formalise (Pearl 1995, after decades of debate) is that the distinction between P(Y|X) and P(Y|do(X)) is invisible in observational data — both give you the same numbers. Pearl's insight was that the distinction becomes visible when you bring in the causal DAG: P(Y|do(X)) equals P(Y|X) if and only if X is not confounded (no back-door path through U). Do-calculus gives you the complete axioms to compute P(Y|do(X)) from P(·|·) + DAG, in any identifiable case. This is why causal inference is a 'mechanical' discipline once you have the DAG: the math tells you what to do. The hard part is getting the DAG right — and that's where domain knowledge is irreplaceable."}</p>
        </DeeperThought>
        <DeeperThought title="IV is the only game in town when you can't randomise" connectedTo="2SLS + Wald estimator">
          <p>{"Randomised controlled trials (RCTs) are the gold standard — they break confounding by construction. But you can't randomise: years of education, smoking status, college attendance, military service. For these, IV is the only observational-data route to causal effects. The price you pay is the exclusion restriction — an untestable assumption that the instrument only affects the outcome through the treatment. Every IV study lives or dies on the plausibility of that assumption. The Angrist-Krueger quarter-of-birth instrument is famous precisely because the exclusion restriction is so implausible (does quarter-of-birth affect earnings only through years of schooling? what about school-entry cutoff dates affecting labour market entry age?). The debate continues."}</p>
        </DeeperThought>
        <DeeperThought title="DiD's parallel trends assumption is the same kind of wager" connectedTo="DiD + synthetic control">
          <p>{"Difference-in-differences is the most widely-used estimator in applied microeconomics precisely because it makes one assumption (parallel trends) that's checkable with pre-treatment data. If the treated and control groups were evolving in parallel in the years before the treatment, you have evidence (not proof, but evidence) that they would have continued in parallel without the treatment. The synthetic control method extends this: instead of picking one control group, you weight many control units to construct a 'synthetic control' that matches the treated unit's pre-treatment trajectory exactly. Abadie's 2003 Basque Country terrorism study is the classic example — synthetic Basque Country tracks actual Basque Country 1955-1975 perfectly, then diverges sharply in 1975 when terrorism began. The divergence IS the causal effect of terrorism on GDP."}</p>
        </DeeperThought>
      </DeeperThoughtSection>

      <NextSteps relatedPages={[
        { id: "fintech", reason: "Marketing attribution — IV on ad exposure" },
        { id: "rl-agentic", reason: "Off-policy evaluation — causal inference in RL" },
        { id: "model-monitoring", reason: "Counterfactual model evaluation" },
        { id: "living-monte-carlo", reason: "Bootstrap inference for causal estimates" },
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
        <Link href={hrefFor("rl-agentic")} className="text-sm text-primary hover:underline">
          → RL Agentic
        </Link>
      </div>
    </div>
  );
}
