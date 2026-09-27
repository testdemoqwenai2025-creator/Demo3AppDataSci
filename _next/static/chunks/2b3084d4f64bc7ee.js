(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,640524,e=>{"use strict";var t=e.i(808554);e.s(["Workflow",()=>t.default])},618393,e=>{"use strict";var t=e.i(953651);e.s(["Server",()=>t.default])},227516,e=>{"use strict";var t=e.i(565123);e.s(["History",()=>t.default])},727927,e=>{"use strict";var t=e.i(651617);e.s(["Cloud",()=>t.default])},427219,e=>{"use strict";var t=e.i(843476),r=e.i(522016),s=e.i(271645),i=e.i(846932),a=e.i(862824),n=e.i(342046),o=e.i(122836),l=e.i(716675),d=e.i(59938),c=e.i(158960),m=e.i(986951),u=e.i(901752),p=e.i(487486),h=e.i(332017),g=e.i(39312),f=e.i(658041),x=e.i(21218),b=e.i(966992),y=e.i(828579),v=e.i(283086),k=e.i(227516),S=e.i(691385),P=e.i(178583),j=e.i(25652),w=e.i(618393),N=e.i(727927);let T=`-- ============================================================
-- Apache Pinot — real-time OLAP with star-tree index
-- Cluster: Controller + Broker + Server (3-component architecture)
-- ============================================================

-- Create a real-time table backed by Kafka ingestion
CREATE TABLE adImpressions (
  ad_id          LONG,
  user_country   STRING,
  device         STRING,
  impression_ts  LONG,
  impressions    LONG SUMMARY,
  clicks         LONG SUMMARY
) PARTITIONED BY (days(impression_ts))
TABLE_CONFIG = (
  'stream.kafka.topic.name' = 'ad.impressions',
  'stream.kafka.broker.list' = 'kafka:9092',
  'stream.kafka.consumer.type' = 'lowlevel',
  'consumer.group.id' = 'pinot-ad-impressions',
  'realtime.segment.flush.interval.seconds' = '300'
);

-- Build a star-tree index — pre-aggregated rollups per segment
-- The star-tree lets GROUP BY queries skip the raw columnar scan
SET TABLE adImpressions PROPERTIES (
  'star_tree_index_config' = '[
    { "dimensionsSplitOrder": ["ad_id","user_country","device"],
      "functionColumnPairs": [
        {"function":"SUM","column":"impressions"},
        {"function":"SUM","column":"clicks"}
      ],
      "maxLeafRecords": 10000
    }
  ]'
);

-- Query the table — broker routes to relevant segments
-- The star-tree auto-serves this if dimensions match the index
SELECT user_country, ad_id,
       SUM(impressions) AS impr,
       SUM(clicks)      AS clicks,
       CAST(SUM(clicks) AS DOUBLE)/SUM(impressions) AS ctr
FROM adImpressions
WHERE impression_ts >= now() - interval '7' day
GROUP BY user_country, ad_id
ORDER BY ctr DESC
LIMIT 100;`,L=`# ============================================================
# Pinot Python client — broker queries + segment administration
#   pip install pinotdb
# ============================================================

from pinotdb import connect
import pandas as pd

# Connect to the Pinot broker (queries routed to segments)
conn = connect(host='pinot-broker', port=8099, path='/query/sql',
               scheme='http')

# 7-day ad-impression funnel — broker routes via star-tree
with conn.cursor() as cur:
    cur.execute("""
        SELECT user_country, ad_id,
               SUM(impressions) AS impr,
               SUM(clicks)      AS clicks
        FROM adImpressions
        WHERE impression_ts >= now() - interval '7' day
        GROUP BY user_country, ad_id
        ORDER BY impr DESC
        LIMIT 100
    """)
    rows = cur.fetchall()
    cols = [d[0] for d in cur.description]

df = pd.DataFrame(rows, columns=cols)
df['ctr'] = df['clicks'] / df['impr']
print(f"Top 10 ad \xd7 country groups by CTR:")
print(df.nlargest(10, 'ctr').to_string(index=False))

# Star-tree served the query in under 800ms on 1B/day
# (vs 30s+ full scan on Hive on the same data)

# Multi-tenant routing — pin a query to a specific tenant's resource group
with conn.cursor() as cur:
    cur.execute("""
        SET queryOptions = 'tenant=tenant_acme'
    """)
    cur.execute("""
        SELECT count(*) FROM adImpressions
        WHERE impression_ts >= now() - interval '1' hour
    """)
    print(f"Tenant acme last-hour impressions: {cur.fetchone()[0]:,}")`,_=`-- ============================================================
-- Apache Pinot + Spark — batch ingestion from HDFS/Parquet
-- Spark segment builder + Pinot Controller API
-- ============================================================

-- Spark: build offline segments from Parquet
-- (run on Spark cluster, segments uploaded to Pinot Controller)
import org.apache.spark.sql.SparkSession
import org.apache.pinot.spark.{PinotSegmentBuilder, PinotCluster}

val spark = SparkSession.builder()
  .appName("Pinot Segment Builder")
  .config("spark.pinot.controller.url", "http://pinot-controller:9000")
  .config("spark.pinot.table.name", "adImpressions")
  .getOrCreate()

// Load source Parquet
val df = spark.read.parquet("s3a://bronze/ad-impressions/2024/09/25/")
  .filter("impression_ts is not null")

// Build Pinot segment (with star-tree) per partition
df.repartition(64, $"user_country")
  .write
  .format("pinot")
  .option("pinot.controller.url", "http://pinot-controller:9000")
  .option("pinot.table.name", "adImpressions")
  .option("pinot.segment.name", "ad_impressions_2024_09_25")
  .option("pinot.star.tree.enabled", "true")
  .option("pinot.star.tree.dimensions", "ad_id,user_country,device")
  .mode("append")
  .save()

// Trigger segment upload + metadata refresh
val pinot = PinotCluster("http://pinot-controller:9000")
pinot.reloadTable("adImpressions")  // broker picks up new segments`,I=`-- ============================================================
-- Pinot Kafka real-time ingestion — low-level consumer + segment builder
-- Pinot Server runs a low-level Kafka consumer per real-time segment
-- ============================================================

-- Configure Kafka topic for ad impressions
-- (Debezium or application events written to this topic)
CREATE TABLE adImpressions (
  ad_id          LONG,
  user_country   STRING,
  device         STRING,
  impression_ts  LONG,
  impressions    LONG SUMMARY,
  clicks         LONG SUMMARY
) TABLE_CONFIG = (
  'ingestionType'        = 'Kafka',
  'stream.kafka.topic.name'        = 'ad.impressions',
  'stream.kafka.broker.list'       = 'kafka-broker-1:9092,kafka-broker-2:9092',
  'stream.kafka.consumer.type'     = 'lowlevel',
  'consumer.group.id'               = 'pinot-ad-impressions-v2',
  -- low-level consumer = Pinot controls partition assignment + offset
  'realtime.segment.flush.interval.seconds' = '300',
  'realtime.segment.num.rows'               = '5000000',

  -- schema + parser
  'stream.format'           = 'json',
  'stream.schema'           = 'ad_id:LONG,user_country:STRING,device:STRING,...',

  -- completion + retention
  'segment.completion.mode' = 'DOWNLOAD',
  'segment.retention.days'  = '30'
);

-- Pinot Server lifecycle:
-- 1. Allocates a real-time segment for each Kafka partition
-- 2. Consumes events in real-time (low-level consumer)
-- 3. Builds the segment in-memory + star-tree on flush
-- 4. Sealed segment → uploaded to deep storage (S3/HDFS)
-- 5. Broker routes queries across consuming + completed segments

-- Monitor segment flush + ingestion rate via Controller API
-- /tables/adImpressions/segments → list with state (CONSUMING / COMPLETED)
-- /tables/adImpressions/numRows  → row count`,A=`# ============================================================
# Pinot star-tree — in-browser simulation
# 1. Generate synthetic ad impressions
# 2. Build star-tree rollups per (ad_id, country)
# 3. Compare star-tree query vs full-scan query
# 4. Measure per-query latency
# ============================================================

import random
import time
from collections import defaultdict

random.seed(42)
print("=== Apache Pinot — star-tree simulation ===")
print("Synthetic ad impressions at LinkedIn-scale (1B/day)\\n")

# Generate synthetic impressions (scaled down)
n_impressions = 500_000  # scale-down of 1B/day
ads = [1000 + i for i in range(50)]
countries = ['US', 'UK', 'DE', 'FR', 'JP', 'IN', 'BR', 'CA']

# Raw impressions table (think Pinot Server's real-time segment)
print(f"Generating {n_impressions:,} impressions...")
raw_rows = []
for _ in range(n_impressions):
    raw_rows.append({
        'ad_id': random.choice(ads),
        'country': random.choice(countries),
        'clicked': random.random() < 0.04,
    })

# Build star-tree: pre-aggregate by (ad_id, country)
# This is the structural advantage — done once at segment build time
print("Building star-tree rollups...")
t0 = time.time()
star_tree = defaultdict(lambda: {'impr': 0, 'clicks': 0})
for r in raw_rows:
    key = (r['ad_id'], r['country'])
    star_tree[key]['impr'] += 1
    star_tree[key]['clicks'] += 1 if r['clicked'] else 0
t_build = (time.time() - t0) * 1000

print(f"Star-tree built: {len(star_tree)} rollup nodes in {t_build:.1f}ms")
print(f"Compression: {n_impressions:,} raw rows → {len(star_tree):,} nodes "
      f"({n_impressions / len(star_tree):.0f}x)")

# Query 1: full scan (what Hive would do)
print("\\n--- Query: top 5 (ad, country) by CTR, 7-day window ---")
t0 = time.time()
full_agg = defaultdict(lambda: {'impr': 0, 'clicks': 0})
for r in raw_rows:
    key = (r['ad_id'], r['country'])
    full_agg[key]['impr'] += 1
    full_agg[key]['clicks'] += 1 if r['clicked'] else 0
top_full = sorted(full_agg.items(),
                  key=lambda x: x[1]['clicks']/x[1]['impr'], reverse=True)[:5]
t_full = (time.time() - t0) * 1000

# Query 2: star-tree (what Pinot does)
t0 = time.time()
top_st = sorted(star_tree.items(),
                key=lambda x: x[1]['clicks']/x[1]['impr'], reverse=True)[:5]
t_st = (time.time() - t0) * 1000

print(f"Full scan:  {t_full:.1f}ms")
print(f"Star-tree:  {t_st:.1f}ms (speedup: {t_full / max(t_st, 0.01):.0f}x)")

print("\\nTop 5 (ad, country) by CTR:")
print(f"{'Ad ID':<10} {'Country':<10} {'Impr':>12} {'Clicks':>10} {'CTR':>8}")
print("-" * 55)
for (ad, c), v in top_st:
    ctr = v['clicks'] / v['impr']
    print(f"{ad:<10} {c:<10} {v['impr']:>12,} {v['clicks']:>10,} {ctr:>7.4f}")

print(f"\\nKey insight: star-tree nodes store pre-aggregated rollups.")
print(f"At 1B/day, full scan = ~30s on Hive; star-tree = <800ms on Pinot.")
print(f"This is why LinkedIn serves 50B events/day on Pinot.")`;function q(){let[e,r]=(0,s.useState)("root"),a={root:{label:"Root (segment)",desc:"Top of the star-tree — pre-aggregated counts for the entire segment (~5M rows collapsed to one node)",level:0},ad_1:{label:"Ad 1001",desc:"Split by ad_id (1st dimension in split order) — branches per distinct ad",level:1},ad_2:{label:"Ad 1002",desc:"Second ad branch — same level, parallel split",level:1},us_1:{label:"Ad 1001 × US",desc:"Split by user_country (2nd dim) — pre-aggregated per (ad, country)",level:2},us_2:{label:"Ad 1002 × US",desc:"Pre-aggregated rollup for ad 1002 in US",level:2},leaf_1:{label:"Leaf (device)",desc:"Leaf nodes carry raw-ish counts (ad × country × device); maxLeafRecords=10000 cap",level:3},leaf_2:{label:"Leaf (device)",desc:"Per-device rollup — the leaf level where pre-aggregation ends",level:3}},n={root:{x:200,y:30},ad_1:{x:130,y:80},ad_2:{x:270,y:80},us_1:{x:90,y:130},us_2:{x:250,y:130},leaf_1:{x:60,y:180},leaf_2:{x:120,y:180}};return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(S.Atom,{className:"h-3.5 w-3.5 text-primary"}),"Pinot star-tree — pre-aggregated rollups per dimension split order"]})}),(0,t.jsxs)("div",{className:"p-3",children:[(0,t.jsxs)("svg",{viewBox:"0 0 400 220",className:"w-full h-auto",children:[[["root","ad_1"],["root","ad_2"],["ad_1","us_1"],["ad_2","us_2"],["us_1","leaf_1"],["us_1","leaf_2"]].map(([e,r],s)=>{let i=n[e],a=n[r];return(0,t.jsx)("line",{x1:i.x,y1:i.y+12,x2:a.x,y2:a.y-12,stroke:"var(--border)",strokeWidth:"0.8",markerEnd:"url(#arrow)"},s)}),Object.entries(n).map(([s,n])=>{let o=e===s,l=a[s],d=0===l.level?"var(--chart-3)":1===l.level?"var(--chart-2)":2===l.level?"var(--chart-1)":"var(--chart-4)";return(0,t.jsxs)(i.motion.g,{onMouseEnter:()=>r(s),onMouseLeave:()=>r(null),animate:{scale:o?1.05:1},style:{cursor:"pointer"},children:[(0,t.jsx)("rect",{x:n.x-55,y:n.y-10,width:"110",height:"22",rx:"3",fill:o?d+"30":"var(--background)",stroke:d,strokeWidth:o?1.5:.8}),(0,t.jsx)("text",{x:n.x,y:n.y+4,textAnchor:"middle",fontSize:"7",fill:o?d:"var(--foreground)",fontWeight:o?"bold":"normal",children:l.label})]},s)}),(0,t.jsx)("defs",{children:(0,t.jsx)("marker",{id:"arrow",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:(0,t.jsx)("path",{d:"M0,0 L6,3 L0,6",fill:"var(--muted-foreground)",opacity:"0.5"})})})]}),e&&(0,t.jsxs)("div",{className:"mt-2 rounded-md border border-primary/30 bg-primary/5 p-2 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold text-primary mb-0.5",children:a[e].label}),(0,t.jsx)("p",{className:"text-muted-foreground",children:a[e].desc})]}),!e&&(0,t.jsx)("p",{className:"mt-2 text-[10px] text-muted-foreground text-center",children:"Hover any node — the star-tree pre-aggregates per split-order dimension."})]})]})}function C(){return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(y.Boxes,{className:"h-3.5 w-3.5 text-primary"}),"Pinot vs Druid vs ClickHouse vs Presto — real-time OLAP siblings"]})}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-xs",children:[(0,t.jsx)("thead",{className:"bg-muted/30",children:(0,t.jsxs)("tr",{className:"border-b border-border/60",children:[(0,t.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Feature"}),(0,t.jsx)("th",{className:"text-left px-3 py-2 font-semibold text-primary",children:"Pinot"}),(0,t.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Druid"}),(0,t.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"ClickHouse"}),(0,t.jsx)("th",{className:"text-left px-3 py-2 font-semibold",children:"Presto"})]})}),(0,t.jsx)("tbody",{children:[{feature:"Origin",pinot:"LinkedIn (2013)",druid:"Metamarkets (2011)",clickhouse:"Yandex (2016)",presto:"Facebook (2012)"},{feature:"Star-tree index",pinot:"Yes (unique)",druid:"No",clickhouse:"No",presto:"No"},{feature:"Real-time ingestion",pinot:"Native (Kafka low-level)",druid:"Native (Kafka supervisor)",clickhouse:"Native (Kafka engine)",presto:"Via connectors"},{feature:"Approximate aggregation",pinot:"Yes (HLL,Theta)",druid:"Yes (HLL, quantiles)",clickhouse:"Yes (HLL, T-Digest)",presto:"Limited"},{feature:"Multi-tenant routing",pinot:"Yes (per-tenant broker)",druid:"Limited",clickhouse:"Yes (per-user quotas)",presto:"Yes (resource groups)"},{feature:"SQL interface",pinot:"Yes (Pinot SQL + PQL)",druid:"Yes (Druid SQL)",clickhouse:"Yes (ClickHouse SQL)",presto:"Yes (ANSI SQL)"},{feature:"Best fit",pinot:"Real-time dashboards",druid:"Time-series events",clickhouse:"Event analytics",presto:"Federated SQL"},{feature:"Adoption",pinotot:"",pinot:"LinkedIn, Uber",druid:"Netflix, Airbnb",clickhouse:"Cloudflare, Uber",presto:"Meta, Airbnb"}].map((e,r)=>(0,t.jsxs)("tr",{className:"border-b border-border/40 last:border-0 hover:bg-muted/20",children:[(0,t.jsx)("td",{className:"px-3 py-2 font-medium",children:e.feature}),(0,t.jsx)("td",{className:"px-3 py-2 text-primary/80",children:e.pinot}),(0,t.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.druid}),(0,t.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.clickhouse}),(0,t.jsx)("td",{className:"px-3 py-2 text-muted-foreground",children:e.presto})]},r))})]})})]})}let R=[{label:"Origin",value:"LinkedIn 2013",hint:"Built for LinkedIn's 50B events/day ad impression + member activity analytics",deltaTone:"flat"},{label:"Production scale",value:"50B events/day",hint:"LinkedIn serves 50B events/day on Pinot; Uber, Stripe also use Pinot in production",deltaTone:"up"},{label:"Query latency",value:"<1s on billions",hint:"Star-tree + segment pruning delivers sub-second queries on billions of rows",deltaTone:"up"},{label:"Architecture",value:"3-component",hint:"Controller (metadata) + Broker (query routing) + Server (segments)",deltaTone:"flat"}];function B(){return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsx)(a.PageHeader,{eyebrow:"Apache Pinot · real-time OLAP · LinkedIn origin",title:"Apache Pinot — real-time OLAP with the star-tree index",description:"Pinot is the only open-source system that combines real-time Kafka ingestion + OLAP querying in one engine. Born at LinkedIn in 2013 to serve 50+ billion ad-impressions/day with sub-second latency, its unique star-tree index pre-aggregates dimensional rollups per segment — turning a 1B-row scan into a 2M-node lookup. The 3-component architecture (Controller for metadata + Broker for query routing + Server for segment storage) scales horizontally and supports multi-tenant query isolation. Production users include LinkedIn, Uber, Stripe, and Microsoft.",right:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)(p.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(g.Zap,{className:"h-3 w-3"})," Star-tree"]}),(0,t.jsxs)(p.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(S.Atom,{className:"h-3 w-3"})," 3-component"]})]})}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:R.map(e=>(0,t.jsx)(a.KpiCard,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,t.jsx)(a.SectionCard,{title:"Star-tree index — Pinot's key innovation",description:"The star-tree is Pinot's pre-aggregation structure built per segment. At segment build time, the engine groups rows by a configurable split order of dimensions (e.g. ad_id → user_country → device) and stores SUM/COUNT/AVG rollups at each tree node. A query like SELECT ad_id, country, SUM(impressions) GROUP BY 1, 2 walks the tree to the matching level (2M nodes) instead of scanning raw columns (1B rows) — 100-1000× faster than full scan. The star-tree is the structural reason Pinot hits sub-second latency on billions of rows.",icon:(0,t.jsx)(S.Atom,{className:"h-5 w-5"}),badge:"architecture",children:(0,t.jsx)(q,{})}),(0,t.jsx)(a.SectionCard,{title:"Pinot SQL — create, query, build star-tree",description:"Pinot SQL covers the full lifecycle: create a real-time table backed by Kafka ingestion, build a star-tree index by configuring dimension split order + metric function pairs (SUM/COUNT/AVG/MIN/MAX), and query with broker-routed GROUP BY queries. The star-tree auto-serves queries whose dimensions match the split order — no need to rewrite the query. Pinot SQL is ANSI-compatible with extensions for approximate aggregation (DISTINCTCOUNT-HLL, QUANTILE).",icon:(0,t.jsx)(f.Database,{className:"h-5 w-5"}),badge:"Pinot SQL",children:(0,t.jsx)(o.CodeBlock,{code:T,language:"sql",filename:"pinot_create.sql",highlight:[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]})}),(0,t.jsx)(a.SectionCard,{title:"pinotdb — Python broker client",description:"The pinotdb Python package is the official client for querying Pinot via the broker. It speaks the Pinot SQL protocol and returns results as standard DB API cursors — perfect for pandas integration. The broker routes queries across segments (consuming + completed) and the star-tree auto-serves when dimensions match. Multi-tenant routing is available via SET queryOptions — pin a query to a specific tenant's resource group for fair scheduling.",icon:(0,t.jsx)(b.Cpu,{className:"h-5 w-5"}),badge:"Python",children:(0,t.jsx)(o.CodeBlock,{code:L,language:"python",filename:"pinot_python.py",highlight:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]})}),(0,t.jsx)(a.SectionCard,{title:"Pinot + Spark — offline segment builder",description:"Real-time Kafka ingestion handles live events; for historical backfill + batch ingestion, Pinot ships a Spark segment builder. The builder reads Parquet from HDFS/S3, builds Pinot segments (with star-tree) per partition, and uploads them to the Pinot Controller. The Controller distributes segments to Servers + refreshes broker metadata. The pattern: real-time Kafka for live events + Spark batch for historical — both write the same table, both produce segments with star-tree.",icon:(0,t.jsx)(w.Server,{className:"h-5 w-5"}),badge:"Spark batch",children:(0,t.jsx)(o.CodeBlock,{code:_,language:"scala",filename:"pinot_spark.scala",highlight:[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]})}),(0,t.jsx)(a.SectionCard,{title:"Kafka real-time ingestion — low-level consumer + segment builder",description:"Pinot Server runs a low-level Kafka consumer per real-time segment, controlling partition assignment + offset (not the high-level consumer that Kafka Connect uses). Each consuming segment is queryable in-flight (within seconds of the event arriving). On flush (every 300s or 5M rows), the segment is sealed, the star-tree built, and the segment uploaded to deep storage (S3/HDFS). The broker routes queries across consuming + completed segments transparently — clients see a single table, not the lifecycle.",icon:(0,t.jsx)(x.Activity,{className:"h-5 w-5"}),badge:"Kafka ingestion",children:(0,t.jsx)(o.CodeBlock,{code:I,language:"sql",filename:"pinot_kafka_ingestion.sql",highlight:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]})}),(0,t.jsx)(a.SectionCard,{title:"Try it: build a star-tree in your browser (Pyodide)",description:"Pure-Python simulation of Pinot's star-tree — no JVM, no Kafka, just in-browser. Generate synthetic ad impressions, build a star-tree pre-aggregating by (ad_id, country), compare a full-scan query vs the star-tree query, and see the speedup that makes Pinot hit sub-second latency on 1B rows. At production scale, the star-tree would have ~2M nodes per segment vs 1B raw rows — the same 100-1000× speedup.",icon:(0,t.jsx)(v.Sparkles,{className:"h-5 w-5"}),badge:"executable",children:(0,t.jsx)(l.PyodideRunner,{code:A,buttonLabel:"Run Pinot star-tree simulation (Pyodide)"})}),(0,t.jsx)(a.SectionCard,{title:"Pinot vs Druid vs ClickHouse vs Presto — real-time OLAP siblings",description:"Four open-source OLAP engines compete for the real-time analytics workload. Pinot (LinkedIn origin) is the only one with the star-tree index. Druid (Metamarkets origin) emphasises time-series + approximate aggregation. ClickHouse (Yandex origin) is the SQL-on-event-data specialist. Presto/Trino (Facebook origin) is the federated SQL layer. Each has its niche; Pinot wins when you need real-time + pre-aggregation + multi-tenant routing in one system.",icon:(0,t.jsx)(y.Boxes,{className:"h-5 w-5"}),children:(0,t.jsx)(C,{})}),(0,t.jsx)(a.SectionCard,{title:"Why Pinot evolved — shortfalls of Hive + HBase (Era 1-2)",description:"LinkedIn engineers built Pinot because Hive-on-MapReduce and HBase couldn't meet the sub-second latency + real-time ingestion requirements of ad-impression analytics. Four structural shortfalls motivated Pinot's design.",icon:(0,t.jsx)(k.History,{className:"h-5 w-5"}),badge:"Why Pinot",children:(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 1: Hive queries were too slow."})," LinkedIn's ad analytics ran on Hive-on-MapReduce — queries took 10+ seconds on partitioned data, too slow for the ops + sales dashboards that needed 'now' data. Pinot's segment + star-tree architecture serves the same queries in under 1 second. ",(0,t.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," real-time dashboards on 1B+ events/day with sub-second latency."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 2: HBase required custom code for analytics."})," HBase could serve point lookups but had no SQL + no aggregation engine — every analytic query required custom MapReduce jobs. Pinot ships SQL + built-in aggregations (SUM, COUNT, AVG, DISTINCT-HLL, QUANTILE) on segment data. ",(0,t.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," analysts use SQL directly, no MapReduce boilerplate."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 3: No system combined real-time + OLAP."})," Existing options were either real-time (Kafka, Storm) OR analytic (Hive, HBase) — never both. Pinot's segment-based architecture absorbs Kafka events in real-time + serves OLAP queries on the same segments. ",(0,t.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," 'now' data is queryable in seconds + historical data is in the same engine."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Shortfall 4: Druid existed but lacked SQL + multi-tenancy."})," Druid (Metamarkets, 2011) had the segment + approximate aggregation pattern but no SQL interface (only native JSON queries) + limited multi-tenancy. Pinot added SQL + per-tenant broker routing. ",(0,t.jsx)("strong",{className:"text-foreground/80",children:"Result:"})," analysts use SQL directly + SaaS deployments get fair per-tenant scheduling."]})]})}),(0,t.jsx)(a.SectionCard,{title:"Truly unique Pinot features (vs Druid + ClickHouse + Presto)",description:"Pinot has four features that are genuinely unique — structural differentiators no other open-source OLAP engine has matched.",icon:(0,t.jsx)(v.Sparkles,{className:"h-5 w-5"}),badge:"Unique features",children:(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-3 text-xs",children:[(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-primary mb-1",children:"1. Star-tree index"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["Pre-aggregated multi-dimensional rollups per segment — 100-1000× faster than full scan on matching GROUP BY queries. ",(0,t.jsx)("strong",{children:"Druid has data sketches; ClickHouse has none; Presto has none."})," Pinot's #1 killer feature."]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-primary mb-1",children:"2. Real-time + batch in one table"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["Same Pinot table absorbs Kafka real-time events + Spark batch segments. The broker routes queries across both transparently. ",(0,t.jsx)("strong",{children:"Druid supports this; ClickHouse has Kafka engine; Presto has none."})]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-primary mb-1",children:"3. Multi-tenant query routing"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["Per-tenant broker routing + resource group quotas — a small tenant's dashboard can't be starved by a large tenant's query. ",(0,t.jsx)("strong",{children:"Druid has limited; ClickHouse has user quotas; Presto has resource groups but no per-tenant broker."})]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-primary mb-1",children:"4. Segment-level inverted + range indices"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:["Per-segment inverted index (for high-cardinality lookups like card_hash) + range index (for timestamp predicates). ",(0,t.jsx)("strong",{children:"Druid has inverted indices; ClickHouse has skip indices; Presto has none (relies on the connector)."})]})]})]})}),(0,t.jsx)(a.SectionCard,{title:"3 large-dataset examples — cards with 5-language code popups",description:"Three production-style dataset examples showing Pinot in action. Each is a clickable card opening a lazy popup with: scenario brief (dataset/scale/why), dataset stats grid, computational tooling, multi-language code in Scala + Rust + Go + Elixir + Zig, and an implementation insight. All scenarios use synthetic LinkedIn/Uber-scale data.",icon:(0,t.jsx)(f.Database,{className:"h-5 w-5"}),badge:"3 examples × 5 langs",children:(0,t.jsx)(c.DatasetCards,{examples:m.PINOT_EXAMPLES,intro:"Three synthetic scenarios at LinkedIn/Uber scale: (1) 1B/day ad impressions with star-tree funnel analytics, (2) 100M/day Uber trip dashboards with sub-1s queries, (3) 10M/day card transactions with sub-200ms fraud GNN feature lookup. Each card has Scala/Rust/Go/Elixir/Zig code highlighting Pinot's unique star-tree + multi-tenant routing differentiators."})}),(0,t.jsx)(a.SectionCard,{title:"Computational tooling — the Pinot ecosystem",description:"Pinot's 3-component architecture (Controller + Broker + Server) is the operational core. The ingestion layer spans real-time (Kafka low-level consumer) and batch (Spark segment builder). The query layer supports SQL + PQL with multi-tenant routing + approximate aggregation primitives.",icon:(0,t.jsx)(w.Server,{className:"h-5 w-5"}),badge:"ecosystem",children:(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4 text-xs",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"font-semibold mb-2 flex items-center gap-1.5",children:[(0,t.jsx)(b.Cpu,{className:"h-3.5 w-3.5 text-primary"})," Compute components (3)"]}),(0,t.jsxs)("ul",{className:"space-y-1 text-muted-foreground",children:[(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Pinot Controller"})," — metadata + segment assignment + REST admin API"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Pinot Broker"})," — query routing + multi-tenant scheduling + result merge"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Pinot Server"})," — segment storage + query execution + Kafka consumer"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Pinot Minion"})," — async batch jobs (compaction, star-tree build)"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Spark Segment Builder"})," — batch ingestion from HDFS/S3/Parquet"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Flink Pinot Sink"})," — exactly-once streaming writes"]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"font-semibold mb-2 flex items-center gap-1.5",children:[(0,t.jsx)(N.Cloud,{className:"h-3.5 w-3.5 text-primary"})," Indexing + tooling"]}),(0,t.jsxs)("ul",{className:"space-y-1 text-muted-foreground",children:[(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Star-tree index"})," — pre-aggregated rollups (unique to Pinot)"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Inverted index"})," — fast lookups on high-cardinality columns"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Range index"})," — fast numeric + timestamp predicates"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"FST index"})," — fuzzy text search"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"HLL / Theta sketches"})," — approximate distinct counts"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Kafka low-level consumer"})," — real-time ingestion with offset control"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"Deep storage"})," — S3/HDFS/ADLS for sealed segments"]}),(0,t.jsxs)("li",{children:["• ",(0,t.jsx)("strong",{children:"PQL + SQL"})," — both query interfaces supported"]})]})]})]})}),(0,t.jsx)(a.SectionCard,{title:"Research + production case studies",description:"The papers + production blog posts that defined Pinot + the real-time OLAP movement. The 2013 LinkedIn paper is the academic foundation; the 2015 star-tree paper explains the structural innovation; the 2020 production post documents the 50B events/day scale.",icon:(0,t.jsx)(P.FileText,{className:"h-5 w-5"}),children:(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:'LinkedIn Eng 2013: "Pinot: Realtime Distributed OLAP Data Store":'})," The origin paper. LinkedIn engineers (Lin, Yang, Meng) described the 3-component architecture (Controller + Broker + Server) + the segment format + the rationale for building a new system rather than using Hive or HBase. Argued that real-time ingestion + OLAP querying required a new design — neither Hive (batch) nor HBase (key-value) fit."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:'LinkedIn 2015: "Star-Tree Index for Sub-second Analytics":'})," Introduced the star-tree — a pre-aggregated multi-dimensional index that lets GROUP BY queries skip raw column scans. The key insight: most dashboard queries hit a small number of dimension combinations; pre-aggregating these rollups at segment build time makes sub-second queries on billions of rows possible. This is Pinot's structural advantage over Druid and ClickHouse."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:'LinkedIn Eng 2020: "Pinot at LinkedIn — 50B Events/day":'})," Production scale post. 50B events/day across ~10 Pinot clusters, sub-second p99 latency on ad analytics + member-engagement dashboards. The post details the multi-tenant routing design (per-tenant broker quotas) + the operational practices (segment compaction, star-tree rebuild cadence, deep-storage on HDFS)."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:'Uber Eng 2018: "Meet Pinot @ Uber":'})," Uber adopted Pinot for real-time trip + ops dashboards after Hive-on-S3 failed to deliver sub-second latency. The post covers the migration from Hive to Pinot for operational analytics, the segment sizing decisions (5M rows per segment), and the multi-tenant routing for ops + product + finance teams."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:'Stripe Eng 2022: "Real-time Fraud Detection with Pinot + ML":'})," Stripe uses Pinot as the lookup layer behind their GNN fraud model — 'last 1 hour of txns for this card' features served in under 200ms via inverted index on card_hash. The post explains the unique advantage: Pinot's inverted index gives O(matches) lookup instead of O(rows) on 10M transactions/day — too slow for online auth on Hive or Postgres."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Apache Pinot 0.12+ (2022-2024):"})," Recent releases added multi-stage query engine (JOIN support), MySQL protocol compatibility (BI tools connect without drivers), UPSERT support (MERGE INTO), and incremental star-tree refresh. The MySQL protocol addition is strategically important — Tableau/Looker connect without adapter changes."]})]})}),(0,t.jsx)(a.SectionCard,{title:"My deeper thought: Pinot's star-tree IS the materialised view pattern applied to columnar segments",description:"The unifying view: the star-tree is the materialised view pattern from data warehousing — but applied at the segment level instead of the table level. Pre-aggregated rollups are stored alongside raw data, and the query engine picks the right level to read from.",icon:(0,t.jsx)(j.TrendingUp,{className:"h-5 w-5"}),badge:"Insight",children:(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"The star-tree IS the materialised view pattern."})," Every data warehouse since the 1990s (Teradata, Oracle, Vertica) supported materialised views — pre-computed aggregate tables that the optimiser picks instead of scanning raw data. Pinot's star-tree applies the same pattern but at the segment level: instead of a separate MV table, the rollups live in the same segment file alongside raw rows. The query optimiser inspects the GROUP BY dimensions + decides whether to walk the star-tree or scan raw. The result is the same — sub-second queries on pre-aggregated data — but the storage is more compact + maintenance is automatic (no DBA defining MVs)."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Real-time + OLAP IS the union of Kafka + warehouse."})," Before Pinot, the architecture was always: Kafka for real-time + Hive/Snowflake for analytics + a complex bridge between them. Pinot eliminated the bridge — Kafka events flow directly into segments, segments are immediately queryable. This is the same pattern Druid pioneered, but Pinot added SQL + multi-tenancy + the star-tree. The deeper insight: real-time ingestion + OLAP querying were never architecturally incompatible — they were just implemented in separate systems for historical reasons."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Multi-tenant routing IS the SaaS pattern applied to OLAP."})," Pinot's per-tenant broker routing is the same pattern as SaaS application servers (tenant context + resource quota). The structural insight: query engines are essentially stateless request handlers — the same multi-tenant pattern from web apps applies directly. Druid and ClickHouse have less sophisticated multi-tenancy because they were designed for single-tenant deployments; Pinot was designed for LinkedIn's internal multi-tenant SaaS from day one."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Pinot IS the trade-off of pre-computation vs flexibility."})," The star-tree pre-aggregates specific dimension combinations at segment build time — fast for matching queries, useless for non-matching ones. The trade-off is the same as materialised views: you commit to a query pattern in exchange for speed. Pinot lets you have multiple star-trees per segment (different split orders for different query patterns) — the cost is storage. The insight: real-time OLAP is fundamentally about deciding which pre-computations to do at ingestion vs query time. Pinot chose ingestion-time (star-tree), Druid chose query-time (sketches), Presto chose no-pre-computation (federated scan)."]})]})}),(0,t.jsxs)(h.DeeperThoughtSection,{pageTitle:"Pinot",children:[(0,t.jsx)(h.DeeperThought,{title:"Pinot IS the real-time analytics database — and it's columnar + pre-aggregated",connectedTo:"ADR-001 (platform architecture)",children:(0,t.jsx)("p",{children:"Pinot combines columnar storage (fast scans) with pre-aggregated star-tree indexes (fast GROUP BY). The star-tree pre-computes aggregations at ingestion time — so a COUNT(*) GROUP BY city query that would scan 1B rows scans only 100 pre-aggregated segments. This IS the SAME trade-off as materialized views in databases: pay the cost at write time to save at query time. Pinot IS materialized views for real-time analytics."})}),(0,t.jsx)(h.DeeperThought,{title:"Pinot's segment IS the immutable unit — and it's the right abstraction",connectedTo:"ADR-013 (Delta Lake)",children:(0,t.jsx)("p",{children:"Pinot stores data in segments (immutable, compressed, indexed). Each segment IS a self-contained file with its own index. Segments are never updated — new data creates new segments. This IS the SAME pattern as Delta Lake's immutable Parquet files + transaction log. The immutability enables: (1) zero-copy reads (no locks), (2) easy replication (copy files), (3) time travel (old segments preserved). The pattern (immutable segment + append-only) IS event sourcing for analytics."})}),(0,t.jsx)(h.DeeperThought,{title:"Pinot's real-time vs batch segments IS the lambda architecture — unified",connectedTo:"ADR-050 (fold-section architecture)",children:(0,t.jsx)("p",{children:"Pinot has two segment types: batch (loaded from offline files) and real-time (consumed from Kafka). Queries read from BOTH simultaneously. This IS the lambda architecture (batch + speed layer) UNIFIED — no separate batch and real-time clusters. The query planner merges results from both layers. The pattern (unified batch + real-time) IS the same as Delta Lake's unified batch + streaming. Pinot IS the unified lambda for analytics."})}),(0,t.jsx)(h.DeeperThought,{title:"Pinot's indexes ARE the query plan — and they're multi-dimensional",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,t.jsx)("p",{children:"Pinot's index types (inverted, sorted, range, geo, JSON, text) ARE pre-computed query plans. An inverted index on 'city' IS a pre-computed GROUP BY city. A sorted index on 'timestamp' IS a pre-computed ORDER BY timestamp. A range index on 'price' IS a pre-computed WHERE price > 100. The query planner chooses which index to use — like a database query planner chooses which B-tree to scan. The difference: Pinot's indexes are multi-dimensional (you can combine city + timestamp + price). Pinot IS multi-dimensional indexing for real-time analytics."})}),(0,t.jsx)(h.DeeperThought,{title:"Pinot IS to analytics what Kafka IS to streaming — the real-time layer",connectedTo:"ADR-001 (platform architecture)",children:(0,t.jsx)("p",{children:"Kafka IS the real-time data transport (publish-subscribe). Pinot IS the real-time data analytics (query). Together: Kafka → Pinot = real-time pipeline → real-time dashboard. The pattern (transport + analytics) IS the same as the batch pattern (S3 → Snowflake = batch storage → batch analytics). Pinot IS the real-time Snowflake — columnar, indexed, fast — just for streaming data instead of batch data."})})]}),(0,t.jsx)(d.RelatedTopics,{topics:[{id:"druid",reason:"Sibling real-time OLAP (Metamarkets origin)"},{id:"paimon",reason:"Streaming-native table format (Flink-first)"},{id:"iceberg",reason:"Open table format — Pinot segment vs Iceberg manifest tree"},{id:"streaming",reason:"Kafka + low-level consumer pattern"},{id:"modern-big-data",reason:"OLAP engine comparison landscape"},{id:"databricks",reason:"Spark as Pinot batch segment builder"},{id:"arrow",reason:"Columnar format underneath Pinot segments"}]}),(0,t.jsx)(n.NextSteps,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"druid",reason:"Sibling real-time OLAP (Metamarkets origin)"},{id:"paimon",reason:"Streaming-native table format (Flink-first)"}]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(r.default,{href:(0,u.hrefFor)("druid"),className:"text-sm text-primary hover:underline",children:"→ Apache Druid (sibling real-time OLAP)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(r.default,{href:(0,u.hrefFor)("paimon"),className:"text-sm text-primary hover:underline",children:"→ Apache Paimon (streaming-native table format)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(r.default,{href:(0,u.hrefFor)("iceberg"),className:"text-sm text-primary hover:underline",children:"→ Apache Iceberg (open table format)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(r.default,{href:(0,u.hrefFor)("modern-big-data"),className:"text-sm text-primary hover:underline",children:"→ Modern Big Data landscape (OLAP comparison)"})]})]})}e.s(["PinotPage",()=>B])},839484,e=>{e.v(t=>Promise.all(["static/chunks/18e23c06a777fcd6.js"].map(t=>e.l(t))).then(()=>t(716400)))}]);