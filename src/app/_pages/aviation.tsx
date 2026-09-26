"use client";

import Link from "next/link";
import { SectionCard, PageHeader } from "../_components/section-card";
import { NextSteps } from "../_components/next-steps";
import { CodeBlock } from "../_components/code-block";
import { hrefFor } from "../_lib/router";
import { Badge } from "@/components/ui/badge";
import { DeeperThought, DeeperThoughtSection } from "../_components/deeper-thought";
import {
  Plane, Radar, Activity, MapPin, Network, GitBranch,
  BarChart3, Compass, Radio,
} from "lucide-react";

const KPIS = [
  { label: "ADS-B messages/sec (global)", value: "~250k", hint: "1090 MHz Extended Squitter + UAT", deltaTone: "flat" as const },
  { label: "FAA NextGen mandate deadline", value: "Jan 1, 2020", hint: "ADS-B Out required below 18,000 ft + Class B/C airspace", deltaTone: "flat" as const },
  { label: "Great-circle LHR→JFK", value: "5,541 km", hint: "Bearings: LHR 287° outbound, JFK 073° inbound", deltaTone: "flat" as const },
  { label: "Trajectory Kalman update rate", value: "1 Hz", hint: "ADS-B position report per second, ±25 m 95% bound", deltaTone: "flat" as const },
];

const HAVERSINE_PY = `# ============================================================
# Great-circle distance between two airports (Haversine formula)
# Free: OSS (MIT). pip install numpy.
# ============================================================
import numpy as np

def haversine_km(lat1, lon1, lat2, lon2):
    """
    Great-circle distance between two points on a sphere
    with given latitude/longitude in decimal degrees.
    Returns distance in km (Earth radius = 6371 km).
    """
    R = 6371.0  # mean Earth radius, km
    lat1_r, lat2_r = np.radians(lat1), np.radians(lat2)
    dlat = np.radians(lat2 - lat1)
    dlon = np.radians(lon2 - lon1)

    a = np.sin(dlat / 2) ** 2 + np.cos(lat1_r) * np.cos(lat2_r) * np.sin(dlon / 2) ** 2
    return 2 * R * np.arcsin(np.sqrt(a))

# London Heathrow → New York JFK
lhr = (51.4700, -0.4543)
jfk = (40.6413, -73.7781)
d = haversine_km(*lhr, *jfk)
print(f"LHR -> JFK great-circle distance: {d:.1f} km")

# London Heathrow → Singapore Changi
sin = (1.3644, 103.9915)
d2 = haversine_km(*lhr, *sin)
print(f"LHR -> SIN great-circle distance: {d2:.1f} km")

# Initial bearing (forward azimuth) — useful for ATC route design
def initial_bearing(lat1, lon1, lat2, lon2):
    lat1_r, lat2_r = np.radians(lat1), np.radians(lat2)
    dlon = np.radians(lon2 - lon1)
    y = np.sin(dlon) * np.cos(lat2_r)
    x = np.cos(lat1_r) * np.sin(lat2_r) - np.sin(lat1_r) * np.cos(lat2_r) * np.cos(dlon)
    return (np.degrees(np.arctan2(y, x)) + 360) % 360

b = initial_bearing(*lhr, *jfk)
print(f"LHR -> JFK initial bearing: {b:.0f}° (true)")
`;

const ADS_B_PY = `# ============================================================
# Kalman filter on ADS-B trajectory — track a flight in real time
# Free: OSS (MIT). pip install numpy. Open data: OpenSky Network.
# ============================================================
import numpy as np

# State: [lat, lon, alt, v_lat, v_lon, v_alt]
# Measurement: [lat, lon, alt] from ADS-B

dt = 1.0  # ADS-B emits at 1 Hz

# State transition (constant-velocity model)
F = np.eye(6)
F[0, 3] = dt; F[1, 4] = dt; F[2, 5] = dt

# Observation matrix (we only measure position, not velocity)
H = np.zeros((3, 6))
H[0, 0] = 1; H[1, 1] = 1; H[2, 2] = 1

# Process noise — tuned empirically for commercial jets
# (~10 m/s^2 random acceleration in each axis)
q = 10.0
Q = np.eye(6) * q
Q[3:, 3:] = np.eye(3) * (q * 0.5)

# Measurement noise — ADS-B spec guarantees ±25 m 95% bound
R = np.diag([0.00025, 0.00025, 25.0])  # lat/lon in degrees, alt in m

# Initial state — assume we're somewhere over the Atlantic at FL350
x = np.array([50.0, -30.0, 10668.0, 0.0, 0.0, 0.0])  # 35,000 ft = 10,668 m
P = np.eye(6) * 1000.0

def kalman_step(z):
    """Update state estimate with a new ADS-B measurement."""
    global x, P
    # Predict
    x = F @ x
    P = F @ P @ F.T + Q
    # Update
    y = z - H @ x                      # innovation
    S = H @ P @ H.T + R                # innovation covariance
    K = P @ H.T @ np.linalg.inv(S)     # Kalman gain
    x = x + K @ y
    P = (np.eye(6) - K @ H) @ P
    return x.copy()

# Simulate 30 seconds of ADS-B reports
np.random.seed(0)
true_pos = np.array([50.0, -30.0, 10668.0])
true_vel = np.array([0.0014, 0.0056, 0.0])  # ~300 knots eastbound at FL350
for t in range(30):
    true_pos = true_pos + true_vel
    z = true_pos + np.array([np.random.normal(0, 0.005),  # ±25m / 111km = 0.000045°
                              np.random.normal(0, 0.005),
                              np.random.normal(0, 25.0)])
    x_est = kalman_step(z)
    print(f"t={t:3d}s  est_lat={x_est[0]:.4f}  est_lon={x_est[1]:.4f}  est_alt={x_est[2]:.0f} m")
`;

export function AviationPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Aviation · ADS-B + Kalman + great-circle routing"
        title="Aviation — flight tracking, trajectory estimation, and ATC"
        description="From the Haversine formula that defines the shortest path between two airports, through the Kalman filter that turns noisy ADS-B position reports into a smooth 4D trajectory, to the linear programming that resolves conflicts between crossing flights. This page is the aviation home for the Haversine and Kalman living-equation cards."
        right={
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1.5"><Radio className="h-3 w-3" /> ADS-B</Badge>
            <Badge variant="outline" className="gap-1.5"><Compass className="h-3 w-3" /> Haversine</Badge>
            <Badge variant="outline" className="gap-1.5"><Radar className="h-3 w-3" /> NextGen</Badge>
          </div>
        }
      />

      <SectionCard
        title="KPIs at a glance"
        description="Scale and resolution of the modern aviation data stack."
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
        title="Great-circle routing — the Haversine formula"
        description="The shortest path on a sphere between two airports, and how to compute it."
        icon={<Compass className="h-5 w-5" />}
      >
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            Flights don't follow straight lines on a Mercator projection — they follow
            great circles, the intersection of the sphere with a plane through its centre.
            The Haversine formula is numerically stable for small distances (unlike the
            spherical law of cosines, which suffers cancellation for distances under
            ~10m) and is the standard implementation in every GIS library on Earth.
          </p>
          <p>
            Real flight routes deviate from pure great-circles by 5-15% due to:
            jet stream routing (transatlantic eastbound saves ~30 min by riding the
            polar jet), airspace restrictions (Russian overflight closures added
            ~2 hours to Finnair's Helsinki-Tokyo route in 2022), and ETOPS
            constraints (twin-engine aircraft must stay within 180 min of a diversion
            airport). Airlines optimise these with proprietary routing engines that
            combine the Haversine baseline with wind forecasts and regulatory costs.
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={HAVERSINE_PY} language="python" filename="haversine-routing.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="ADS-B and the FAA NextGen mandate"
        description="The radio protocol that turned every commercial aircraft into a flying beacon."
        icon={<Radio className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground/80">Automatic Dependent Surveillance–Broadcast (ADS-B)</strong>{" "}
            is a protocol where aircraft broadcast their GPS-derived position, altitude,
            velocity, and identity twice per second on 1090 MHz. The ground stations
            (and any other aircraft with ADS-B In) receive these messages, giving
            ATC a 1 Hz update rate — far better than the 4-12 second sweep of
            traditional secondary surveillance radar.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The FAA mandated ADS-B Out for all aircraft operating below 18,000 ft
            and in Class B/C airspace from January 1, 2020 (NextGen programme).
            EASA followed with a similar mandate for European airspace. The result:
            the global airspace is now a streaming data source — anyone with a
            $30 USB software-defined radio can receive ADS-B and build their own
            flight tracker. Sites like Flightradar24 and ADS-B Exchange aggregate
            ~30,000 volunteer receivers worldwide, achieving &gt;99% coverage
            of commercial IFR traffic.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The OpenSky Network (opensky-network.org) is the academic open-data
            tier — a research project at TU Kaiserslautern that archives every
            ADS-B message they receive, back to 2014. Free for non-commercial
            use; the dataset has been used in 1000+ papers on trajectory prediction,
            conflict detection, and emissions modelling.
          </p>
        </div>
      </SectionCard>

      <SectionCard
        title="Kalman filter on ADS-B trajectories"
        description="How to turn 1 Hz position reports into a smooth 4D trajectory estimate."
        icon={<GitBranch className="h-5 w-5" />}
      >
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            ADS-B gives you a noisy position every second. To predict where the
            aircraft will be 60 seconds from now (for conflict detection) or to
            estimate its true ground speed (for fuel modelling), you need a state
            estimator. The Extended Kalman Filter (EKF) on a constant-velocity
            model in lat/lon/alt space is the textbook solution — and is exactly
            what ATC systems like Eurocontrol's ARTAS and the FAA's STARS-Build 9
            run in production.
          </p>
          <p>
            The code below implements a 6-state Kalman filter (position + velocity
            in 3 axes) on simulated ADS-B reports. Watch how the filter's velocity
            estimates converge within 5-10 seconds even though velocity is never
            measured directly — it's inferred from the sequence of position fixes.
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={ADS_B_PY} language="python" filename="kalman-adsb.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="ATC conflict resolution — linear programming at scale"
        description="How air traffic control detects and resolves crossing trajectories."
        icon={<Network className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Once you have 4D trajectory estimates for all ~10,000 commercial flights
            in the air at any moment, the next problem is detecting conflicts: pairs
            of aircraft that will pass within 5 nm horizontally and 1,000 ft vertically
            of each other in the next 15 minutes. This is solved by a simple O(N²)
            pairwise check on the predicted positions, with spatial hashing to prune
            the search (only check pairs whose current positions are within ~30 nm).
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Resolving conflicts is harder. Each aircraft has a desired trajectory
            (its filed flight plan + cruise altitude) and a set of feasible
            manoeuvres (heading change ±30°, altitude change ±2,000 ft, speed
            change ±0.05 Mach). The conflict resolution problem is then a large
            mixed-integer linear programme: minimise the deviation from the
            desired trajectory subject to (a) maintaining separation ≥5 nm
            horizontally and ≥1,000 ft vertically, (b) each aircraft staying
            within its manoeuvre envelope, (c) respecting airspace sector
            boundaries. Solvers like Gurobi and CPLEX handle this in seconds.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The FAA's Traffic Flow Management System (TFMS) and Eurocontrol's
            Network Manager run these optimisations continuously — typically
            resolving ~50 conflicts per minute across the European and US
            airspace respectively. The Deep Blue paper (Bayen et al., 2004) is
            the seminal reference for the LP formulation.
          </p>
        </div>
      </SectionCard>

      <SectionCard
        title="Connections across the platform"
        description="How aviation connects to the rest of the platform."
        icon={<MapPin className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link href={hrefFor("living-haversine")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living Haversine</p>
            <p className="text-xs text-muted-foreground mt-1">Interactive demo of the great-circle formula that underpins all flight routing.</p>
          </Link>
          <Link href={hrefFor("living-kalman")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living Kalman</p>
            <p className="text-xs text-muted-foreground mt-1">The filter that turns ADS-B noise into smooth trajectories.</p>
          </Link>
          <Link href={hrefFor("global-shipping")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Global Shipping</p>
            <p className="text-xs text-muted-foreground mt-1">Maritime AIS — the sibling protocol to ADS-B for vessels at sea.</p>
          </Link>
          <Link href={hrefFor("robotics")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Robotics</p>
            <p className="text-xs text-muted-foreground mt-1">Kalman filter + motion planning — drones and unmanned aerial vehicles.</p>
          </Link>
        </div>
      </SectionCard>

      <DeeperThoughtSection pageTitle="Aviation">
        <DeeperThought title="ADS-B is the cheapest data source in any physical domain" connectedTo="OpenSky Network + global-shipping card">
          <p>{"$30 of hardware (RTL-SDR USB stick + mag-mount antenna) gets you real-time positions of every commercial aircraft within 400km of your roof. There is no other physical-domain dataset (maritime, seismic, weather, genomics) with a comparable cost-to-coverage ratio. The reason is regulatory: every commercial aircraft above 18,000 ft must broadcast position twice a second, so the data is already in the air — you just have to listen. This asymmetric openness is why aviation ML research has progressed faster than maritime ML: the data is universally available."}</p>
        </DeeperThought>
        <DeeperThought title="The Haversine formula assumes a sphere; the Earth is an oblate spheroid" connectedTo="Vincenty's formulae + WGS-84">
          <p>{"Haversine is accurate to ~0.5% over long distances, which is fine for ATC routing. For surveying and GPS, you need Vincenty's formulae (1975), which use the WGS-84 ellipsoid and are accurate to ~1mm. The lesson: every formula in this platform has a domain of validity. SVD is exact for matrices, approximate for tensors. Haversine is exact for spheres, approximate for ellipsoids. The skill is knowing when 'approximate' is good enough — which is almost always, for engineering decisions, and almost never, for scientific measurements."}</p>
        </DeeperThought>
        <DeeperThought title="ATC conflict resolution is one of the largest continuously-running optimisation problems in the world" connectedTo="Linear Programming + OR">
          <p>{"Every minute of every day, somewhere in the world, an LP is being solved that prevents two aircraft from occupying the same volume of sky. The scale — 10,000+ aircraft, ~50 conflicts per minute, 15-minute prediction horizon, real-time deadlines — puts ATC conflict resolution in the same class as ad auction optimisation and high-frequency trading: optimisation problems where 'good enough fast' beats 'optimal slow'. The dual-simplex method and interior-point solvers that power these systems are direct descendants of Dantzig's 1947 simplex algorithm — a 78-year-old idea still running at planetary scale."}</p>
        </DeeperThought>
      </DeeperThoughtSection>

      <NextSteps relatedPages={[
        { id: "living-haversine", reason: "Interactive demo of the great-circle formula" },
        { id: "living-kalman", reason: "The filter that powers trajectory estimation" },
        { id: "global-shipping", reason: "Maritime AIS — ADS-B's sibling protocol" },
        { id: "robotics", reason: "UAVs and autonomous flight" },
      ]} />

      <div className="flex flex-wrap gap-2">
        <Link href={hrefFor("home")} className="text-sm text-primary hover:underline">
          → Return to overview
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("living-haversine")} className="text-sm text-primary hover:underline">
          → Living Haversine
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("living-kalman")} className="text-sm text-primary hover:underline">
          → Living Kalman
        </Link>
      </div>
    </div>
  );
}
