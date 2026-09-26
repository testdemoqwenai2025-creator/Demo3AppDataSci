"use client";

import Link from "next/link";
import { SectionCard, PageHeader } from "../_components/section-card";
import { NextSteps } from "../_components/next-steps";
import { CodeBlock } from "../_components/code-block";
import { hrefFor } from "../_lib/router";
import { Badge } from "@/components/ui/badge";
import { DeeperThought, DeeperThoughtSection } from "../_components/deeper-thought";
import {
  Bot, Cpu, MapPin, Activity, Network, GitBranch, Boxes, Compass, Radar,
} from "lucide-react";

const KPIS = [
  { label: "SLAM sensor cost (Velodyne VLP-16)", value: "$4,000", hint: "16-channel LiDAR, 100m range, 300k pts/s", deltaTone: "down" as const },
  { label: "Boston Dynamics Atlas DOF", value: "28", hint: "Hydraulic actuators, custom electric drives", deltaTone: "flat" as const },
  { label: "MPC horizon (autonomous driving)", value: "5-10 s", hint: "At 60 mph, ~150-300 m of trajectory planning", deltaTone: "flat" as const },
  { label: "RRT* planning (sample complexity)", value: "O(log n)", hint: "Asymptotically optimal — solution quality improves with samples", deltaTone: "flat" as const },
];

const EKF_PY = `# ============================================================
# Extended Kalman Filter — SLAM on a 2D wheeled robot
# Free: OSS (MIT). pip install numpy.
# ============================================================
import numpy as np

# Robot state: [x, y, theta] (pose in 2D)
# Landmarks: [m_x_1, m_y_1, ..., m_x_n, m_y_n] (2D positions)

dt = 0.1  # 10 Hz control loop

def motion_model(x, u):
    """Unicycle model: u = [v, omega] (linear + angular velocity)."""
    v, omega = u
    theta = x[2]
    return np.array([
        x[0] + v * np.cos(theta) * dt,
        x[1] + v * np.sin(theta) * dt,
        x[2] + omega * dt
    ])

def jacobian_F(x, u):
    """Jacobian of motion model w.r.t. state — linearises for EKF."""
    v, omega = u
    theta = x[2]
    F = np.eye(3)
    F[0, 2] = -v * np.sin(theta) * dt
    F[1, 2] = v * np.cos(theta) * dt
    return F

def observation_model(x, m_idx, state_dim):
    """Range + bearing to landmark m_idx."""
    dx = x[state_dim + 2*m_idx] - x[0]
    dy = x[state_dim + 2*m_idx + 1] - x[1]
    q = dx**2 + dy**2
    return np.array([np.sqrt(q), np.arctan2(dy, dx) - x[2]])

# EKF predict step (robot motion)
# x = motion_model(x, u)
# F = jacobian_F(x, u)
# P[:3, :3] = F @ P[:3, :3] @ F.T + Q
#
# EKF update step (landmark observation)
# For each observed landmark, compute the Kalman gain and update
# both the robot pose and the landmark position estimate.
# This is the core of EKF-SLAM — see Thrun, Burgard, Fox (2005),
# Probabilistic Robotics, chapter 10.

print("EKF-SLAM skeleton — full implementation: github.com/PRBonn/evo")
print("Reference: Thrun et al., Probabilistic Robotics, MIT Press 2005")
`;

const MPC_PY = `# ============================================================
# Model Predictive Control — autonomous vehicle lane change
# Free: OSS (BSD-3). pip install cvxpy.
# ============================================================
import numpy as np
import cvxpy as cp

# Vehicle: bicycle model (kinematic)
# State: [x, y, v, psi] (position, speed, heading)
# Control: [a, delta] (acceleration, steering angle)

dt = 0.1
N = 20  # MPC horizon (2 seconds at 10 Hz)
L = 2.5  # wheelbase, m

# Discrete-time dynamics (linearised around operating point)
A = np.eye(4)
A[0, 2] = dt  # x += v * dt
A[1, 2] = 0; A[1, 3] = 0  # simplified

B = np.zeros((4, 2))
B[2, 0] = dt  # v += a * dt
B[3, 1] = (v_op / L) * dt  # psi += (v/L) * delta * dt

# Decision variables
x = cp.Variable((4, N + 1))
u = cp.Variable((2, N))

# Cost: stay in lane + minimise control effort + reach target speed
cost = 0
constraints = []
for t in range(N):
    cost += cp.sum_squares(x[1, t] - y_target)        # lane keeping
    cost += 0.1 * cp.sum_squares(u[:, t])             # smooth control
    cost += 10 * cp.square(x[2, t] - v_target)        # reach cruise speed
    constraints += [x[:, t + 1] == A @ x[:, t] + B @ u[:, t]]
    constraints += [cp.abs(u[1, t]) <= 0.5]            # steering limit (rad)
    constraints += [cp.abs(u[0, t]) <= 3.0]             # accel limit (m/s^2)

problem = cp.Problem(cp.Minimize(cost), constraints)
problem.solve()
print(f"MPC solved in {problem.solver_stats.solve_time:.3f}s")
print(f"Optimal first control input: a={u[0, 0].value:.2f}  delta={u[1, 0].value:.3f} rad")
`;

export function RoboticsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Robotics · SLAM, MPC, motion planning, state estimation"
        title="Robotics — SLAM, motion planning, and model predictive control"
        description="From the Extended Kalman Filter that localises a robot in an unknown map (SLAM), through the A* and RRT* algorithms that find collision-free paths, to the model predictive control that smoothly executes those paths while respecting actuator limits. This page extends the Kalman card from 'maritime, aviation, genetics' into the physical robotics domain — and is the natural home for SLAM, MPC, and the modern LiDAR-vision fusion stack."
        right={
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1.5"><MapPin className="h-3 w-3" /> SLAM</Badge>
            <Badge variant="outline" className="gap-1.5"><GitBranch className="h-3 w-3" /> MPC</Badge>
            <Badge variant="outline" className="gap-1.5"><Compass className="h-3 w-3" /> RRT*</Badge>
          </div>
        }
      />

      <SectionCard
        title="KPIs at a glance"
        description="Scale and cost of the modern robotics stack."
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
        title="SLAM — Simultaneous Localisation and Mapping"
        description="The chicken-and-egg problem of robotics: build a map of an unknown environment while simultaneously localising yourself within it."
        icon={<MapPin className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            SLAM is the foundational problem of mobile robotics. You don't know
            where the robot is, and you don't know what the map looks like — but
            you have to estimate both simultaneously from a stream of noisy sensor
            observations. The classical solution (Smith & Cheeseman 1986; Thrun,
            Burgard & Fox 2005, <em>Probabilistic Robotics</em>) is to maintain a
            joint Gaussian over robot pose + landmark positions, and update it
            via the Extended Kalman Filter (EKF) each time a landmark is observed.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Modern SLAM has moved beyond EKF. ORB-SLAM3 (Campos et al., 2021)
            uses bundle adjustment on visual features and is the SOTA for monocular
            and stereo cameras. LIO-SAM (Shan et al., 2020) fuses LiDAR + IMU via
            factor graph optimisation (GTSAM) and is the SOTA for autonomous
            driving. Both run in real-time on commodity hardware (Intel NUC + a
            modern GPU), enabling ~10cm accuracy over kilometre-scale trajectories.
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={EKF_PY} language="python" filename="ekf-slam.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="Motion planning — A*, RRT, RRT*"
        description="How a robot finds a path from A to B without hitting obstacles."
        icon={<Network className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-3 gap-3">
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <Compass className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">A* (graph search)</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Optimal on a discrete grid. Explores states in order of f = g + h
              (cost-so-far + admissible heuristic). Memory: O(b^d). Used in
              video game pathfinding and grid-world robots.
            </p>
          </div>
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <GitBranch className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">RRT (sampling)</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Randomly sample points in configuration space; grow a tree towards
              each sample if collision-free. Probabilistic completeness guarantee.
              Scales to high-D spaces (7-DOF arms, 28-DOF humanoids).
            </p>
          </div>
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <Boxes className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">RRT* (asymptotically optimal)</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Like RRT, but rewires the tree when a shorter path to an existing
              node is found. Solution quality improves as O(log n) with sample
              count. Karaman &amp; Frazzoli (2011) — the modern default.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="Model Predictive Control (MPC)"
        description="Real-time trajectory optimisation that respects actuator limits."
        icon={<Cpu className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            MPC solves a constrained optimisation problem at every control
            timestep: find the sequence of control inputs over the next N
            steps that minimises deviation from the desired trajectory,
            subject to the vehicle dynamics (linearised around the operating
            point) and actuator limits (max steering, max acceleration). Only
            the first control input is applied; the rest is discarded and the
            optimisation is re-solved at the next timestep with new state
            feedback.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The reason MPC beats classical PID is the explicit handling of
            constraints — a PID controller will happily command a 90° steering
            wheel snap that physically cannot happen; MPC will plan a trajectory
            that stays within ±30° of steering, smoothing the manoeuvre over
            the horizon. Modern solvers (OSQP, HPIPM) make 100 Hz MPC feasible
            on automotive-grade ECUs.
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={MPC_PY} language="python" filename="mpc-vehicle.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="Connections across the platform"
        description="How robotics connects to the rest of the platform."
        icon={<Bot className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link href={hrefFor("living-kalman")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living Kalman</p>
            <p className="text-xs text-muted-foreground mt-1">The EKF and UKF that power state estimation in every modern robot.</p>
          </Link>
          <Link href={hrefFor("aviation")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Aviation</p>
            <p className="text-xs text-muted-foreground mt-1">UAVs and autonomous flight — the airborne extension of these algorithms.</p>
          </Link>
          <Link href={hrefFor("living-fft")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living FFT</p>
            <p className="text-xs text-muted-foreground mt-1">Vibration analysis for predictive maintenance of robot joints.</p>
          </Link>
          <Link href={hrefFor("living-svd")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living SVD</p>
            <p className="text-xs text-muted-foreground mt-1">PCA on LiDAR point clouds for place recognition and loop closure.</p>
          </Link>
        </div>
      </SectionCard>

      <DeeperThoughtSection pageTitle="Robotics">
        <DeeperThought title="SLAM is hard because the noise is structured, not random" connectedTo="EKF + Bayes card">
          <p>{"In a textbook Kalman filter, the noise is Gaussian and independent. In SLAM, the noise is correlated across time (the same wheel encoder that's wrong now will be wrong 5 seconds later) and across landmarks (a wrong robot pose shifts every landmark estimate). The Extended Kalman Filter handles this by maintaining the full joint covariance matrix — which is O(n²) in the number of landmarks. For a 1000-landmark map that's a 2000×2000 matrix to invert at every timestep. Modern SLAM solvers (GTSAM, g2o) exploit sparsity in this matrix to bring the per-step cost down to O(n)."}</p>
        </DeeperThought>
        <DeeperThought title="MPC is the algorithm that finally made autonomous driving feel safe" connectedTo="Optimisation + Kalman card">
          <p>{"For 30 years (1970-2000), autonomous vehicles used rule-based controllers — if the lane is clear, accelerate; if there's a car ahead, decelerate. The transitions were jerky and unpredictable. MPC changed this by optimising the entire trajectory over a horizon, producing smooth, human-predictable manoeuvres. The 2007 DARPA Urban Challenge (CMU's Boss) was the first MPC-based autonomous vehicle to complete a 60-mile urban course. By 2023, every Level 2+ driving system (Tesla FSD, Waymo Driver, Mercedes Drive Pilot) uses MPC as its core motion controller."}</p>
        </DeeperThought>
        <DeeperThought title="The sensor cost curve has fallen 100× in 10 years" connectedTo="LiDAR + perception">
          <p>{"In 2014, a Velodyne HDL-64 (64-channel LiDAR) cost $80,000. In 2024, an Ouster OS0-64 (also 64-channel, same range, lower power) costs $3,500. That's a 23× reduction in a decade. Combined with the rise of solid-state LiDAR (Innoviz, Luminar) at $500-1000/unit, and the increasing capability of pure vision systems (Tesla's 8-camera stack), the hardware barrier to autonomous robotics is collapsing. The remaining hard problem is the software stack — and that's where this platform's investment in math (Kalman, SVD, FFT) pays off: the math doesn't change, only the hardware does."}</p>
        </DeeperThought>
      </DeeperThoughtSection>

      <NextSteps relatedPages={[
        { id: "living-kalman", reason: "EKF and UKF — the workhorse state estimators" },
        { id: "aviation", reason: "UAVs and the aerial extension of robotics" },
        { id: "living-svd", reason: "PCA for point cloud registration" },
        { id: "living-fft", reason: "Vibration analysis for robot joint maintenance" },
      ]} />

      <div className="flex flex-wrap gap-2">
        <Link href={hrefFor("home")} className="text-sm text-primary hover:underline">
          → Return to overview
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("living-kalman")} className="text-sm text-primary hover:underline">
          → Living Kalman
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("aviation")} className="text-sm text-primary hover:underline">
          → Aviation
        </Link>
      </div>
    </div>
  );
}
