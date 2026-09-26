"use client";

import Link from "next/link";
import { SectionCard, PageHeader } from "../_components/section-card";
import { NextSteps } from "../_components/next-steps";
import { CodeBlock } from "../_components/code-block";
import { hrefFor } from "../_lib/router";
import { Badge } from "@/components/ui/badge";
import { DeeperThought, DeeperThoughtSection } from "../_components/deeper-thought";
import {
  MessageSquareHeart, Activity, GitBranch, Cpu, Layers, Network, TrendingUp,
} from "lucide-react";

const KPIS = [
  { label: "InstructGPT (RLHF) release", value: "Jan 2022", hint: "GPT-3 base → 1.3B SFT → 6B RLHF — alignment launched", deltaTone: "flat" as const },
  { label: "PPO clip range (standard)", value: "ε = 0.2", hint: "Conservative policy update — keeps new policy close to old", deltaTone: "flat" as const },
  { label: "DPO paper (Rafailov et al.)", value: "May 2023", hint: "NeurIPS Outstanding Paper — eliminates the reward model", deltaTone: "flat" as const },
  { label: "Llama-3.1-405B human eval win rate", value: "~58%", hint: "vs GPT-4-0314 baseline, post-RLHF on LMSYS Chatbot Arena", deltaTone: "up" as const },
];

const PPO_RLHF_PY = `# ============================================================
# RLHF simplified — PPO on a language model reward
# Free: OSS (Apache-2.0). pip install torch transformers.
# ============================================================
import torch
import torch.nn as nn
import torch.nn.functional as F

# Setup: we have a language model pi_theta (the policy being trained).
# We have a reward model r (trained on human preference comparisons).
# We have a reference model pi_ref (the SFT model — usually pi_theta at init).
#
# Goal: maximise E[ r(y) ] - beta * KL( pi_theta(.|x) || pi_ref(.|x) )
#       (reward - KL penalty to keep pi_theta close to pi_ref)
#
# PPO update: for each prompt x, sample y ~ pi_theta(.|x), compute:
#   advantage = r(y) - V(x)        (value function baseline)
#   ratio = pi_theta(y|x) / pi_old(y|x)
#   loss = -min( ratio * adv, clip(ratio, 1-eps, 1+eps) * adv )

class RewardModel(nn.Module):
    """Reward model — same architecture as policy, but outputs a scalar."""
    def __init__(self, base_model):
        super().__init__()
        self.base = base_model
        self.head = nn.Linear(base_model.config.hidden_size, 1)

    def forward(self, input_ids, attention_mask):
        hidden = self.base(input_ids, attention_mask=attention_mask).last_hidden_state
        return self.head(hidden[:, -1, :]).squeeze(-1)  # reward on last token

def ppo_loss(logprobs_new, logprobs_old, advantages, eps=0.2):
    """Standard PPO clipped objective."""
    ratio = (logprobs_new - logprobs_old).exp()
    clipped = torch.clamp(ratio, 1 - eps, 1 + eps)
    return -(torch.min(ratio * advantages, clipped * advantages)).mean()

def kl_penalty(logprobs_policy, logprobs_ref):
    """Per-token KL divergence — keeps policy close to reference."""
    return (logprobs_policy - logprobs_ref).mean()

# Training loop sketch:
# for prompt_batch in prompts:
#     # 1. Generate responses from current policy
#     responses = policy.generate(prompt_batch, do_sample=True)
#     # 2. Compute rewards from reward model
#     rewards = reward_model(prompt_batch, responses)
#     # 3. Compute log-probs under current + reference policy
#     logp_new = policy.log_prob(prompt_batch, responses)
#     logp_old = logp_new.detach()  # snapshot for ratio
#     logp_ref = ref_model.log_prob(prompt_batch, responses)
#     # 4. Advantages = (reward - baseline), with GAE for variance reduction
#     advantages = rewards - value_model(prompt_batch)
#     # 5. PPO update
#     loss = ppo_loss(logp_new, logp_old, advantages) + beta * kl_penalty(logp_new, logp_ref)
#     loss.backward(); optimizer.step()

print("RLHF training loop — full implementation: github.com/lvwerra/trl")
print("Reference: Schulman et al., 'Proximal Policy Optimization Algorithms' (2017)")
print("Reference: Christiano et al., 'Deep RL from Human Preferences' (2017)")
`;

const DPO_PY = `# ============================================================
# DPO (Direct Preference Optimization) — eliminate the reward model
# Free: OSS (MIT). pip install torch.
# ============================================================
import torch
import torch.nn as nn
import torch.nn.functional as F

# Insight: instead of training a reward model and then PPO, you can derive
# a closed-form loss that directly optimizes the policy from preference pairs.
#
# Loss: L_DPO = -log σ( β * ( log( pi(y_w|x)/pi_ref(y_w|x) )
#                          - log( pi(y_l|x)/pi_ref(y_l|x) ) ) )
#
# where (x, y_w, y_l) is a triple of (prompt, preferred response, dispreferred).
# beta controls the KL penalty to the reference policy.

def dpo_loss(logp_w_new, logp_w_ref, logp_l_new, logp_l_ref, beta=0.1):
    """DPO loss from a preference pair (y_w > y_l).

    Args:
        logp_w_new: log p_theta(y_w | x)
        logp_w_ref: log p_ref(y_w | x)
        logp_l_new: log p_theta(y_l | x)
        logp_l_ref: log p_ref(y_l | x)
        beta: KL penalty strength
    """
    # The 'implicit reward' is: r_hat(y, x) = beta * log( pi(y|x) / pi_ref(y|x) )
    # The DPO loss is just a Bradley-Terry likelihood on the implicit rewards.
    reward_diff = beta * ((logp_w_new - logp_w_ref) - (logp_l_new - logp_l_ref))
    return -F.logsigmoid(reward_diff).mean()

# Why DPO wins:
#   - No reward model to train (saves one full training run)
#   - No PPO inner loop (saves the on-policy sampling + value function)
#   - No KL coefficient tuning (beta is a single hyperparameter)
#   - ~6x faster than RLHF, often with comparable final quality
#   - Llama-3, Mistral, Zephyr all use DPO in their alignment stage

# Reference: Rafailov et al. (2023), "Direct Preference Optimization:
# Your Language Model is Secretly a Reward Model". NeurIPS Outstanding Paper.
print("DPO loss — see github.com/eric-mitchell/direct-preference-optimization")
`;

export function RlhfPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="RLHF & DPO · aligning LLMs with human preferences"
        title="RLHF & DPO — aligning LLMs with human preferences"
        description="From Christiano et al.'s 2017 'Deep RL from Human Preferences' through InstructGPT (Jan 2022), through the Proximal Policy Optimization (PPO) that powered GPT-3.5, to Rafailov et al.'s 2023 Direct Preference Optimization (DPO) that eliminates the reward model entirely. This page covers the modern LLM alignment stack — mentioned in the fine-tuning deep-dive but warranting standalone treatment given how central alignment is to production LLMs."
        right={
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1.5"><MessageSquareHeart className="h-3 w-3" /> RLHF</Badge>
            <Badge variant="outline" className="gap-1.5"><Cpu className="h-3 w-3" /> PPO</Badge>
            <Badge variant="outline" className="gap-1.5"><Network className="h-3 w-3" /> DPO</Badge>
          </div>
        }
      />

      <SectionCard
        title="KPIs at a glance"
        description="Scale and timeline of modern LLM alignment."
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
        title="The three-stage alignment pipeline"
        description="SFT → Reward model → PPO. The InstructGPT recipe that powers ChatGPT."
        icon={<Layers className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-3 gap-3">
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <GitBranch className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">Stage 1: SFT</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Supervised fine-tuning on ~13K demonstrations of human-written
              responses to prompts. Teaches the model the style/tone of
              aligned behaviour. Gives a starting point for the RL stage.
            </p>
          </div>
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <MessageSquareHeart className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">Stage 2: Reward model</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Train a separate model to predict which of two responses a
              human would prefer. Trained on ~33K comparisons (response A
              preferred over B). The reward model becomes the 'judge' for
              the RL stage.
            </p>
          </div>
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <Cpu className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">Stage 3: PPO</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Reinforcement learning on the SFT model, with the reward
              model providing the reward signal. KL penalty keeps the
              policy close to the SFT model — prevents 'reward hacking'
              where the model exploits reward-model blind spots.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="PPO — Proximal Policy Optimization"
        description="The RL algorithm that powered InstructGPT, ChatGPT, and most production LLMs pre-DPO."
        icon={<Cpu className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            PPO (Schulman et al. 2017) is a policy gradient method with a
            clipped objective that prevents destructive policy updates.
            The trick is the ratio <code className="font-mono">r = π_θ(y|x) / π_old(y|x)</code> —
            PPO clips this ratio to <code className="font-mono">[1-ε, 1+ε]</code> with ε = 0.2, so
            the policy can only move a small step from its previous version
            per gradient update. This makes training stable without the
            second-order optimisation cost of TRPO (PPO's predecessor).
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            For RLHF specifically, PPO is run on the language model itself
            (the policy) using the reward model's score as the reward signal.
            A KL-divergence penalty to the SFT reference model is added to
            the loss to prevent the model from drifting too far from its
            supervised initialisation — without this, PPO would happily
            find adversarial responses that maximise the reward model's
            output while being nonsense to humans (the classic 'reward
            hacking' failure mode).
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={PPO_RLHF_PY} language="python" filename="ppo-rlhf.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="DPO — Direct Preference Optimization (2023)"
        description="The NeurIPS Outstanding Paper that eliminates the reward model — and is now the default alignment method."
        icon={<Network className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Rafailov et al.'s 2023 breakthrough was to derive a closed-form
            loss that directly optimises the policy from preference pairs,
            without training a separate reward model and without running
            PPO. The key insight: under the Bradley-Terry model of
            preferences, the optimal policy has a closed-form solution
            in terms of the reward, so you can substitute and get a loss
            that depends only on the policy and reference model.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The DPO loss is a single Bradley-Terry likelihood: given a
            preference pair (y_w preferred over y_l for prompt x), maximise
            the probability that the implicit reward of y_w exceeds that of
            y_l. That's it — no PPO inner loop, no value function, no reward
            model training, no KL coefficient. Beta (the KL strength)
            becomes the only hyperparameter.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Empirically, DPO matches or beats PPO-based RLHF on most benchmarks
            (Anthropic HH-RLHF, LMSYS Chatbot Arena) at ~6× the training speed.
            Llama-3, Mistral, and Zephyr all use DPO in their post-training
            alignment stage. PPO-based RLHF is now mostly used for cases where
            you have online feedback (the user is in the loop) rather than
            pre-collected preference data.
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={DPO_PY} language="python" filename="dpo.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="Connections across the platform"
        description="How RLHF connects to the rest of the platform."
        icon={<MessageSquareHeart className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link href={hrefFor("fine-tuning-deep-dive")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Fine-Tuning Deep Dive</p>
            <p className="text-xs text-muted-foreground mt-1">The host page for all LLM fine-tuning techniques — RLHF is the alignment stage.</p>
          </Link>
          <Link href={hrefFor("rl-agentic")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ RL Agentic</p>
            <p className="text-xs text-muted-foreground mt-1">PPO is a general RL algorithm — also used outside LLMs in game-playing and robotics.</p>
          </Link>
          <Link href={hrefFor("transformer-deep-dive")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Transformer Deep Dive</p>
            <p className="text-xs text-muted-foreground mt-1">The architecture being aligned — RLHF operates on the same transformer.</p>
          </Link>
          <Link href={hrefFor("living-entropy")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living Entropy</p>
            <p className="text-xs text-muted-foreground mt-1">The KL penalty in RLHF is cross-entropy — same entropy that powers compression.</p>
          </Link>
        </div>
      </SectionCard>

      <DeeperThoughtSection pageTitle="RLHF">
        <DeeperThought title="The reward model is the whole game in RLHF" connectedTo="Reward model quality + Sycophancy">
          <p>{"In RLHF, the policy is only as aligned as the reward model. If the reward model gives high scores to responses that are confident but wrong (sycophancy), the policy will learn to be confidently wrong. If the reward model is biased toward verbose responses, the policy will become verbose. The post-InstructGPT literature is mostly about fixing reward model pathologies: Constitutional AI (Anthropic, 2022) replaces human raters with a constitution + AI feedback, RLAIF uses a strong LLM as the reward model, and KTO (Kahneman-Tversky Optimization) drops pairwise comparisons entirely in favour of binary 'is this response good?'. Each addresses a specific failure mode of vanilla RLHF — but the core insight remains: the policy optimises the reward, so the reward model's biases become the policy's biases."}</p>
        </DeeperThought>
        <DeeperThought title="DPO's elegance is that the optimal policy has a closed form" connectedTo="Bradley-Terry + KL-constrained RL">
          <p>{"The reason DPO works is that the KL-constrained RL problem 'maximise E[r(y)] subject to KL(π||π_ref) ≤ ε' has a known closed-form solution: π*(y|x) ∝ π_ref(y|x) * exp(r(y,x) / β). Substitute this back into the Bradley-Terry preference likelihood and the reward cancels out — you're left with a loss that depends only on the policy and reference. This is the kind of derivation that looks obvious in hindsight but took 6 years (2017-2023) to find. The lesson: when an RL problem has a known optimal solution form, see if you can substitute it out and train directly on observations."}</p>
        </DeeperThought>
        <DeeperThought title="Alignment is the moat — not the base model" connectedTo="GPT-4 vs Claude vs Gemini">
          <p>{"In 2024, the gap between frontier base models (GPT-4, Claude 3.5, Gemini 1.5, Llama 3.1 405B) on raw capability benchmarks is small — typically within 5-10 points on MMLU/GPQA/HumanEval. But users strongly prefer some models over others (LMSYS Arena shows clear preferences), and the preference is driven almost entirely by alignment. The same base model can be aligned to be helpful (ChatGPT), safe (Claude), or witty (Grok) — and each alignment produces a distinct product. This is why OpenAI, Anthropic, and Google all keep their alignment data and methods proprietary even when they open-source base models (Llama). The alignment IS the product differentiation."}</p>
        </DeeperThought>
      </DeeperThoughtSection>

      <NextSteps relatedPages={[
        { id: "fine-tuning-deep-dive", reason: "The host page for all LLM fine-tuning" },
        { id: "rl-agentic", reason: "PPO is a general RL algorithm — see its broader use" },
        { id: "transformer-deep-dive", reason: "The architecture being aligned" },
        { id: "living-entropy", reason: "KL divergence is cross-entropy — see the connection" },
      ]} />

      <div className="flex flex-wrap gap-2">
        <Link href={hrefFor("home")} className="text-sm text-primary hover:underline">
          → Return to overview
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("fine-tuning-deep-dive")} className="text-sm text-primary hover:underline">
          → Fine-Tuning Deep Dive
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("rl-agentic")} className="text-sm text-primary hover:underline">
          → RL Agentic
        </Link>
      </div>
    </div>
  );
}
