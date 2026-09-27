(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,852008,e=>{"use strict";var t=e.i(113625);e.s(["Layers",()=>t.default])},63209,e=>{"use strict";var t=e.i(361653);e.s(["AlertCircle",()=>t.default])},431343,595468,e=>{"use strict";var t=e.i(451477);e.s(["Play",()=>t.default],431343);var a=e.i(123287);e.s(["CheckCircle2",()=>a.default],595468)},862824,515288,e=>{"use strict";var t=e.i(843476),a=e.i(975157);function s({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,a.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...s})}function r({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,a.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...s})}function i({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,a.cn)("leading-none font-semibold",e),...s})}function o({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,a.cn)("text-muted-foreground text-sm",e),...s})}function n({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,a.cn)("px-6",e),...s})}e.s(["Card",()=>s,"CardContent",()=>n,"CardDescription",()=>o,"CardHeader",()=>r,"CardTitle",()=>i],515288);var l=e.i(487486);function c({title:e,description:a,icon:c,badge:d,badgeVariant:m="outline",children:u,className:h,contentClassName:p}){return(0,t.jsxs)(s,{className:["border-border/60",h].filter(Boolean).join(" "),children:[(e||a)&&(0,t.jsxs)(r,{className:"flex flex-row items-start gap-3 space-y-0 border-b border-border/60 bg-muted/30",children:[c&&(0,t.jsx)("div",{className:"mt-0.5 text-primary",children:c}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[e&&(0,t.jsx)(i,{className:"text-base",children:e}),d&&(0,t.jsx)(l.Badge,{variant:m,className:"text-[10px]",children:d})]}),a&&(0,t.jsx)(o,{className:"mt-1 text-xs",children:a})]})]}),(0,t.jsx)(n,{className:["p-4 md:p-5",p].filter(Boolean).join(" "),children:u})]})}function d({eyebrow:e,title:a,description:s,right:r}){return(0,t.jsxs)("div",{className:"mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4",children:[(0,t.jsxs)("div",{children:[e&&(0,t.jsx)("p",{className:"text-[11px] font-semibold uppercase tracking-widest text-primary/80 mb-1.5",children:e}),(0,t.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold tracking-tight text-balance",children:a}),s&&(0,t.jsx)("p",{className:"mt-2 text-sm md:text-base text-muted-foreground max-w-3xl text-pretty",children:s})]}),r&&(0,t.jsx)("div",{className:"shrink-0",children:r})]})}function m({label:e,value:a,delta:r,deltaTone:i="flat",hint:o}){return(0,t.jsx)(s,{className:"border-border/60",children:(0,t.jsxs)(n,{className:"p-4",children:[(0,t.jsx)("p",{className:"text-[11px] uppercase tracking-wider text-muted-foreground",children:e}),(0,t.jsx)("p",{className:"mt-1 text-2xl font-semibold tabular-nums",children:a}),(0,t.jsxs)("div",{className:"mt-1 flex items-center gap-2",children:[r&&(0,t.jsx)("span",{className:`text-xs ${"up"===i?"text-emerald-600 dark:text-emerald-400":"down"===i?"text-rose-600 dark:text-rose-400":"text-muted-foreground"}`,children:r}),o&&(0,t.jsx)("span",{className:"text-[11px] text-muted-foreground",children:o})]})]})})}e.s(["KpiCard",()=>m,"PageHeader",()=>d,"SectionCard",()=>c],862824)},342046,518550,e=>{"use strict";var t=e.i(843476),a=e.i(271645),s=e.i(522016),r=e.i(901752);let i=[{cardIndex:0,name:"SVD",equation:"A = UΣV^T",sciences:["genomics","audio","finance"],insightShort:"SVD IS the Fourier transform for data",hostPages:["numpy-scipy"],hostReasons:["SVD IS NumPy's universal decomposer — np.linalg.svd → PCA for genomics, audio compression, Fama-French risk factors."]},{cardIndex:1,name:"Attention",equation:"softmax(QK^T/√d_k) × V",sciences:["protein folding","NLP"],insightShort:"Attention IS natural selection",hostPages:["transformer-deep-dive"],hostReasons:["DNA IS a language — softmax(QK^T/√d_k)×V parses both proteins (AlphaFold2) and English (GPT-4) because both are correlation detection."]},{cardIndex:2,name:"Poisson",equation:"P(k) = λ^k e^(-λ) / k!",sciences:["sequencing","networks","decay"],insightShort:"Poisson IS the law of rare events",hostPages:["bioinformatics-pipelines"],hostReasons:["GATK variant calling depth IS Poisson(λ=mean coverage) — same distribution that sizes server clusters and radioactive sources."]},{cardIndex:3,name:"FFT",equation:"X[k] = Σ x[n] e^(-2πikn/N)",sciences:["mass spec","audio","cryo-EM"],insightShort:"FFT IS the change of basis",hostPages:["numpy-scipy"],hostReasons:["np.fft.fft is the SAME operation whether you're finding the m/z of a compound, the C-note in a chord, or the 3D structure of a ribosome."]},{cardIndex:4,name:"Verlet",equation:"r(t+Δt) = 2r(t) - r(t-Δt) + F/m·Δt²",sciences:["MD","games","orbits"],insightShort:"Verlet IS time-reversal symmetry",hostPages:["computational-biology"],hostReasons:["AMBER, Havok, and NASA JPL all call this exact integrator — symplectic, energy-conserving, time-reversible. The MD integrator IS the game physics integrator."]},{cardIndex:5,name:"Navier-Stokes",equation:"∂u/∂t + u·∇u = -∇p/ρ + ν∇²u",sciences:["weather","blood","turbulence"],insightShort:"Navier-Stokes IS the universe's flow equation",hostPages:["computational-physics"],hostReasons:["CFD on this PDE predicts hurricanes, aneurysm risk, and wing stall — the SAME nonlinearity makes weather unpredictable and turbulence beautiful."]},{cardIndex:6,name:"Gradient Descent",equation:"θ(t+1) = θ(t) - η∇L(θ)",sciences:["ML","evolution","thermodynamics"],insightShort:"Gradient Descent IS the learning rule",hostPages:["tabular"],hostReasons:["Gradient boosting = gradient descent on trees; GPT-4 training, natural selection, and protein folding all minimise a landscape with the SAME update rule."]},{cardIndex:7,name:"Bayes",equation:"P(H|D) = P(D|H)P(H) / P(D)",sciences:["genetics","spam","quantum"],insightShort:"Bayes IS the belief updater",hostPages:["alphamissense"],hostReasons:["AlphaMissense classifying a VUS IS Gmail classifying spam IS a Stern–Gerlach measurement — all three update P(H) given D."]},{cardIndex:8,name:"Euler's Method",equation:"y(t+Δt) = y(t) + f(t,y)·Δt",sciences:["orbital mechanics","games","finance"],insightShort:"Euler IS the seed of all simulation",hostPages:["space-science"],hostReasons:["Satellite trajectory propagation (NASA GMAT), game-engine fixed-step physics (Unity), and Black-Scholes Monte Carlo all START from this one-line integrator."]},{cardIndex:9,name:"Entropy",equation:"H = -Σ p log p",sciences:["information","thermodynamics","genetics"],insightShort:"Entropy IS the universal currency of disorder",hostPages:["systems-biology"],hostReasons:["Shannon measured message information, Boltzmann gas disorder, Haldane population heterozygosity — the SAME formula because all three quantify how spread out a distribution is."]},{cardIndex:10,name:"Black-Scholes",equation:"C = S·N(d1) − K·e^(−rT)·N(d2)",sciences:["fintech","maritime","genetics"],insightShort:"Black-Scholes IS the universal option-pricing equation",hostPages:["fintech"],hostReasons:["A Lloyd's underwriter pricing a 90-day cargo option, a CME quant pricing an SPX call, and a Fisher geneticist pricing an allele-substitution option all evaluate the SAME formula — the right-but-not-obligation to act on a stochastic payoff."]},{cardIndex:11,name:"Haversine",equation:"d = 2R·arcsin(√(...))",sciences:["maritime","aviation","astronomy"],insightShort:"Haversine IS the universal great-circle distance",hostPages:["global-shipping"],hostReasons:["Rotterdam→Singapore sailing distance, LHR→JFK flight distance, and Sirius→Canopus angular separation all use the SAME formula — shortest-path distance on a sphere, invented 1805 (Bowring)."]},{cardIndex:12,name:"Kelly Criterion",equation:"f* = (bp − q)/b = μ/σ²",sciences:["fintech","genetics","RL"],insightShort:"Kelly IS the universal bet-sizing equation",hostPages:["fintech"],hostReasons:["Ed Thorp's blackjack team (1960s), Jim Simons' Medallion Fund (1989-2024, 65% CAGR), Haldane's allele fixation (1927), and Thompson sampling (RL) all derive the SAME optimal bet size f* = μ/σ² because they all maximize expected log-growth."]},{cardIndex:13,name:"Markov Chain",equation:"π(t+1) = π(t)·P",sciences:["genetics","fintech","maritime"],insightShort:"Markov IS the universal state-transition equation",hostPages:["global-shipping","bioinformatics"],hostReasons:["Jukes-Cantor DNA substitution (1969), Moody's credit transitions (10⁶ bonds), and AIS port-state transitions (100K vessels) all use the SAME matrix update — the memoryless property is universal."]},{cardIndex:14,name:"Value at Risk",equation:"VaR_α = −(μ + z_α·σ)",sciences:["fintech","maritime","climate"],insightShort:"VaR IS the universal tail-risk equation",hostPages:["fintech","global-shipping"],hostReasons:["JPMorgan's 1-day 99% VaR ($4T balance, Basel III), Lloyd's 7-day 95% VaR ($50B hull, Solvency II), and NOAA 100-year flood VaR (FEMA FIRMs) all use the SAME quantile — every loss distribution has an inverse CDF."]},{cardIndex:15,name:"PageRank",equation:"PR(p) = (1-d) + d·Σ(PR(q)/L(q))",sciences:["fintech","maritime","genetics"],insightShort:"PageRank IS the universal centrality equation",hostPages:["global-shipping","systems-biology"],hostReasons:["BIS systemic risk (Lehman PR ≈ 0.012), UN COMTRADE port chokepoint (Rotterdam PR ≈ 0.020), and STRING gene essentiality (TP53 PR ≈ 0.025) all use the SAME eigenvector — Brin & Page 1998 for the web, now spanning banking, trade, and genomics."]},{cardIndex:16,name:"Kalman Filter",equation:"x̂(t+1) = x̂(t) + K·(z − H·x̂(t))",sciences:["maritime","aviation","genetics"],insightShort:"Kalman IS the universal state-estimation equation",hostPages:["global-shipping"],hostReasons:["AIS vessel tracking (100K vessels × 60s), ADS-B flight tracking (100K flights × 1s), and 1000-Genomes allele frequency tracking all use the SAME Bayesian update — Kalman 1960 invented this for Apollo navigation."]},{cardIndex:17,name:"Monte Carlo",equation:"E[f(X)] ≈ (1/N)·Σ f(X_i)",sciences:["fintech","maritime","genetics"],insightShort:"Monte Carlo IS the universal estimation equation",hostPages:["fintech","global-shipping","monte-carlo"],hostReasons:["Option pricing (10⁶ GBM paths), port congestion (10⁵ vessel sims), and rare-variant permutation tests (10⁶ permutations) all use the SAME averaging — Metropolis 1946 invented this at Los Alamos for neutron transport."]},{cardIndex:18,name:"Geometric Brownian Motion",equation:"dS = μS·dt + σS·dW",sciences:["fintech","maritime","genetics"],insightShort:"GBM IS the universal multiplicative-noise equation",hostPages:["fintech","global-shipping"],hostReasons:["SPX daily returns (Black-Scholes foundation), Rotterdam container dwell times, and Wright-Fisher allele drift all use the SAME SDE — multiplicative noise keeps S positive with log-normal stationarity."]},{cardIndex:19,name:"Lloyd's Algorithm",equation:"μ_k ← mean({x : argmin_k ‖x − μ_k‖²})",sciences:["maritime","genetics","ML"],insightShort:"Lloyd IS the universal clustering equation",hostPages:["global-shipping","systems-biology"],hostReasons:["50K ports clustered by trade flows (UN COMTRADE), 2504 individuals clustered by SNP PCA (1000-Genomes), and 1.4M images clustered by ResNet-50 (ImageNet) all use the SAME iterate — Lloyd 1957 invented this at Bell Labs for PCM."]},{cardIndex:20,name:"HyperLogLog",equation:"E = α_m m² (Σ 2^(-M_j))^(-1)",sciences:["data engineering","genomics","network security"],insightShort:"HLL IS the universal counter — 33M× memory compression with <1% error",hostPages:["big-data-ingestion"],hostReasons:["COUNT(DISTINCT user_id) in Snowflake/Spark, unique k-mers in Jellyfish (genome assembler), unique source IPs in Redis PFCOUNT (DDoS monitor) — all run the SAME hash→bucket→max-zeros→harmonic-mean algorithm. 12 KB vs 400 GB for exact counting."]},{cardIndex:21,name:"Bloom Filter",equation:"P(fp) = (1 - e^(-kn/m))^k",sciences:["network security","genomics","databases"],insightShort:"Bloom filter IS the universal membership test — 23× compression with 0.1% false positives",hostPages:["kafka-connect","delta-lake"],hostReasons:["Chrome Safe Browsing (malware URL check), genome assembler read dedup, RocksDB SSTable key lookup — all use the SAME k-hash→bit-set→AND-check. 175 MB vs 4 GB for exact hash set."]},{cardIndex:22,name:"Consistent Hashing",equation:"θ = hash(key) mod 2^256",sciences:["streaming","CDN","databases"],insightShort:"Consistent hashing IS the universal partitioner — K/n keys move, not all K",hostPages:["kafka","schema-registry"],hostReasons:["Kafka partition assignment across brokers, Akamai CDN edge routing, Cassandra shard assignment — all use the SAME hash ring. Adding a node moves 8% of data, not 50%."]},{cardIndex:23,name:"LSM-Tree Compaction",equation:"WA = (L+1)/L",sciences:["data engineering","databases","distributed storage"],insightShort:"LSM compaction IS the universal write amplifier — 1.25× vs B-tree's 4-10×",hostPages:["delta-lake","big-data-ingestion"],hostReasons:["Delta Lake Auto Compaction (18,400→12 files), RocksDB level compaction (L0→L1→L2→L3), Cassandra size-tiered compaction — all use the SAME merge-sort. Write amplification 1.25× vs B-tree's 4-10×."]},{cardIndex:24,name:"Count-Min Sketch",equation:"ê_i = min_j count[j][h_j(i)]",sciences:["streaming","genomics","networking"],insightShort:"CMS IS the universal frequency estimator — 4M× compression, bounded over-estimation",hostPages:["spark-streaming","flink"],hostReasons:["Spark Structured Streaming top-K, genome k-mer frequency counting (repeat detection), network heavy-hitter detection (DDoS) — all use the SAME d×w matrix. 20 KB vs 80 GB for exact hash map."]},{cardIndex:25,name:"Reservoir Sampling",equation:"P(item_i in sample) = k/N",sciences:["streaming","A/B testing","genomics"],insightShort:"Reservoir IS the universal sampler — O(k) memory, uniform sampling from unbounded stream",hostPages:["spark-streaming","streaming-sql"],hostReasons:["Kafka stream event sampling, A/B test cohort selection from live users, GWAS variant subsampling — all use the SAME k/N replace-probability algorithm. O(k) memory regardless of stream length."]},{cardIndex:26,name:"T-Digest",equation:"q̂(p) = merge(centroids)",sciences:["streaming","finance","observability"],insightShort:"T-Digest IS the universal quantile estimator — 80M× compression at the tails",hostPages:["spark-streaming","fintech"],hostReasons:["p99 latency in Spark, p99 VaR in Basel III Monte Carlo, p99 response time in Datadog — all use the SAME centroid-merging algorithm. 1 KB vs 80 GB for exact sorted array."]},{cardIndex:27,name:"Cuckoo Filter",equation:"i2 = i1 XOR hash(fingerprint)",sciences:["databases","networking","caching"],insightShort:"Cuckoo Filter IS Bloom's successor — same membership test, PLUS deletion support",hostPages:["delta-lake"],hostReasons:["Cassandra SSTable with dynamic keys, routing table add/remove, Redis cache invalidation — all need membership test WITH deletion. Bloom can't delete; Cuckoo can."]},{cardIndex:28,name:"Skip List",equation:"P(level L) = (1/2)^L",sciences:["databases","storage","compilers"],insightShort:"Skip List IS the universal ordered structure — O(log n) without tree rebalancing",hostPages:["duckdb"],hostReasons:["Redis ZSET (leaderboard), LevelDB/RocksDB memtable (sorted KV before SSTable flush), LLVM instruction scheduler — all use the SAME probabilistic linking. No rebalancing needed."]}];function o(e){return i.filter(t=>t.hostPages.includes(e))}let n={0:[3,9,19],1:[0,6,7],2:[7,9,13],3:[0,2,8],4:[8,5,16],5:[4,18,8],6:[7,12,1],7:[6,2,16],8:[4,18,16],9:[0,2,19],10:[18,14,12],11:[15,16,17],12:[6,10,7],13:[2,16,15],14:[10,18,17],15:[13,0,11],16:[13,4,7],17:[18,14,9],18:[10,8,17],19:[0,9,6]};function l(e){return n[e]??[]}e.s(["ELEGANT_CODE_MAP",0,i,"cardsOnHostPage",()=>o,"recommendedCards",()=>l],518550);var c=e.i(487486),d=e.i(394908),m=e.i(972520);let u="discovery-path-visited";function h({relatedPages:e=[]}){let[o,n]=(0,a.useState)(()=>{try{let e=localStorage.getItem(u);return e?JSON.parse(e):[]}catch{return[]}});(0,a.useEffect)(()=>{try{let e=localStorage.getItem(u);if(e){let t=JSON.parse(e);setTimeout(()=>n(t),0)}}catch{}},[]);let h=(0,a.useMemo)(()=>{let t=[];if(o.length>0){let e={};for(let t of o)for(let a of l(t))o.includes(a)||(e[a]=(e[a]??0)+1);for(let[a,s]of Object.entries(e).sort((e,t)=>t[1]-e[1]).slice(0,3)){let e=i[Number(a)];e&&t.push({id:"elegant-code",reason:`Explore ${e.name} — recommended by ${s} of your visited cards`,isCousin:!0})}}for(let a of e){if(t.length>=3)break;t.find(e=>e.id===a.id)||t.push({...a,isCousin:!1})}return 0===t.length&&(t.push({id:"elegant-code",reason:"Start with the 20 elegant-code cards",isCousin:!1}),t.push({id:"connections",reason:"See the card → card graph",isCousin:!1}),t.push({id:"resources",reason:"Browse datasets, papers, libraries",isCousin:!1})),t.slice(0,3)},[o,e]);return 0===h.length?null:(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsxs)("p",{className:"text-xs font-semibold text-primary mb-2 flex items-center gap-1.5",children:[(0,t.jsx)(d.Compass,{className:"h-3.5 w-3.5"}),"Next steps — where to go from here",o.length>0&&(0,t.jsxs)("span",{className:"text-[9px] text-muted-foreground ml-1",children:["(",o.length," cards explored)"]})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:h.map((e,a)=>(0,t.jsxs)(s.default,{href:(0,r.hrefFor)(e.id),className:"text-xs text-primary hover:underline flex items-center gap-1",children:[(0,t.jsx)(m.ArrowRight,{className:"h-3 w-3"}),e.reason,e.isCousin&&(0,t.jsx)(c.Badge,{variant:"outline",className:"text-[8px] px-1 py-0 ml-1",children:"cousin"})]},a))})]})}e.s(["NextSteps",()=>h],342046)},332017,e=>{"use strict";var t=e.i(843476),a=e.i(522016),s=e.i(25652),r=e.i(810980),i=e.i(901752);function o({title:e,connectedTo:o,researchHref:n,children:l}){return(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-start gap-2",children:[(0,t.jsx)(s.TrendingUp,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),o&&(0,t.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,t.jsx)(r.BookOpen,{className:"h-3 w-3 text-muted-foreground"}),(0,t.jsxs)(a.default,{href:n??(0,i.hrefFor)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",o," →"]})]})]})]}),(0,t.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:l})]})}function n({pageTitle:e,children:a}){return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,t.jsx)(s.TrendingUp,{className:"h-5 w-5 text-primary"}),(0,t.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,t.jsx)("div",{className:"space-y-3",children:a})]})}e.s(["DeeperThought",()=>o,"DeeperThoughtSection",()=>n])},122836,e=>{"use strict";var t=e.i(843476),a=e.i(271645),s=e.i(678745),s=s,r=e.i(991124),r=r,i=e.i(519455);function o({code:e,language:o="sql",filename:n,highlight:l=[]}){let[c,d]=(0,a.useState)(!1),m=e.replace(/\n$/,"").split("\n"),u=async()=>{try{await navigator.clipboard.writeText(e),d(!0),setTimeout(()=>d(!1),1500)}catch{}};return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,t.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:o}),n&&(0,t.jsxs)("span",{className:"text-white/40",children:["· ",n]})]}),(0,t.jsxs)(i.Button,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:u,"aria-label":"Copy code",children:[c?(0,t.jsx)(s.default,{className:"h-3 w-3 mr-1"}):(0,t.jsx)(r.default,{className:"h-3 w-3 mr-1"}),c?"Copied":"Copy"]})]}),(0,t.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,t.jsx)("code",{children:m.map((e,a)=>{let s=a+1,r=l.includes(s);return(0,t.jsxs)("div",{className:["flex",r?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,t.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:s}),(0,t.jsx)("span",{className:"whitespace-pre",children:e||" "})]},s)})})})]})}function n({children:e}){return(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}e.s(["CodeBlock",()=>o,"InlineCode",()=>n],122836)},868054,e=>{"use strict";var t=e.i(249988);e.s(["Terminal",()=>t.default])},716675,e=>{"use strict";var t=e.i(843476),a=e.i(271645),s=e.i(846932),r=e.i(88653),i=e.i(519455),o=e.i(487486),n=e.i(431343),l=e.i(531278),c=e.i(63209),d=e.i(595468),m=e.i(868054);let u=null,h="0.26.2",p=`https://cdn.jsdelivr.net/pyodide/v${h}/full/`;async function g(){return u||(u=(async()=>(await new Promise((e,t)=>{if(window.loadPyodide)return void e();let a=document.createElement("script");a.src=`${p}pyodide.js`,a.onload=()=>e(),a.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(a)}),await window.loadPyodide({indexURL:p})))())}function x({code:e,buttonLabel:u="Run in browser",preamble:p,compact:x=!1,onOutput:f,hideTextOutput:b=!1}){let[S,v]=(0,a.useState)("idle"),[y,_]=(0,a.useState)(""),[w,N]=(0,a.useState)(null),[k,j]=(0,a.useState)(null),C=(0,a.useRef)(null),E=(0,a.useCallback)(async()=>{v("loading"),N(null),_("Loading Pyodide runtime (~10MB)…\n");let t=performance.now();try{let a=await g(),s=Math.round(performance.now()-t);j(s);let r=[],i=e=>{r.push(e)};try{a.setStdout({batched:i}),a.setStderr({batched:i})}catch{try{a.setStdout(i),a.setStderr(i)}catch{}}if(/\bnumpy\b|\bnp\./.test(e)||p&&/\bnumpy\b/.test(p))try{await a.loadPackage("numpy")}catch{}v("running"),_(`Pyodide loaded in ${s}ms. Running…

`),p&&await a.runPythonAsync(p),await a.runPythonAsync(e);let o=r.join("");_(e=>e+(o||"(no output)")),v("done"),f&&f(o)}catch(t){let e=t instanceof Error?t.message:String(t);N(e),v("error"),_(t=>t+`
Error: ${e}`)}},[e,p,f]);return(0,a.useEffect)(()=>{C.current&&(C.current.scrollTop=C.current.scrollHeight)},[y]),(0,t.jsxs)("div",{className:`mt-3 ${x?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)(i.Button,{size:x?"sm":"default",variant:"running"===S||"loading"===S?"outline":"default",className:"gap-1.5",onClick:E,disabled:"loading"===S||"running"===S,children:["loading"===S||"running"===S?(0,t.jsx)(l.Loader2,{className:"h-3.5 w-3.5 animate-spin"}):"done"===S?(0,t.jsx)(d.CheckCircle2,{className:"h-3.5 w-3.5"}):"error"===S?(0,t.jsx)(c.AlertCircle,{className:"h-3.5 w-3.5"}):(0,t.jsx)(n.Play,{className:"h-3.5 w-3.5"}),u]}),!x&&(0,t.jsxs)(o.Badge,{variant:"outline",className:"text-[10px] gap-1",children:[(0,t.jsx)(m.Terminal,{className:"h-2.5 w-2.5"}),"Pyodide v",h]}),null!==k&&"done"===S&&(0,t.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",k,"ms load + execution"]})]}),(0,t.jsx)(r.AnimatePresence,{children:("idle"!==S||y)&&!b&&(0,t.jsx)(s.motion.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,t.jsx)("div",{ref:C,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${w?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,t.jsx)("pre",{className:"whitespace-pre-wrap",children:y})})})})]})}e.s(["PyodideRunner",()=>x])},640524,e=>{"use strict";var t=e.i(808554);e.s(["Workflow",()=>t.default])},366101,763639,e=>{"use strict";var t=e.i(843476),a=e.i(271645),s=e.i(980376),r=e.i(122836),i=e.i(487486),o=e.i(519455),n=e.i(444609);e.s(["Languages",()=>n.default],763639);var n=n,l=e.i(463059);let c={python:"Python",scala:"Scala",go:"Go",rust:"Rust",java:"Java",sql:"SQL",yaml:"YAML",hcl:"Terraform",bash:"Bash",elixir:"Elixir",c:"C",typescript:"TypeScript"};function d({samples:e}){let[s,i]=(0,a.useState)(0),o=e[s];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"flex flex-wrap gap-1 border-b border-border/60 bg-muted/20 px-2 py-2",children:e.map((e,a)=>(0,t.jsx)("button",{onClick:()=>i(a),className:`text-[11px] px-2.5 py-1 rounded border transition-colors font-mono ${a===s?"bg-primary text-primary-foreground border-primary":"border-border/60 hover:bg-accent"}`,children:c[e.language]??e.language},e.language+e.filename))}),(0,t.jsxs)("div",{className:"p-3 bg-card",children:[o.note&&(0,t.jsx)("p",{className:"text-xs text-muted-foreground mb-2 italic",children:o.note}),(0,t.jsx)(r.CodeBlock,{code:o.code,language:o.language,filename:o.filename,highlight:o.highlight})]})]})}function m({title:e,description:a,samples:r,drawerMode:c=!1,drawerButtonLabel:m}){return c?(0,t.jsxs)(s.Sheet,{children:[(0,t.jsx)(s.SheetTrigger,{asChild:!0,children:(0,t.jsxs)(o.Button,{variant:"outline",className:"gap-2 w-full justify-between h-auto py-3",children:[(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsx)(n.default,{className:"h-4 w-4 text-primary"}),(0,t.jsx)("span",{className:"font-semibold text-sm",children:m??e}),(0,t.jsxs)(i.Badge,{variant:"outline",className:"text-[10px]",children:[r.length," languages"]})]}),(0,t.jsx)(l.ChevronRight,{className:"h-4 w-4 text-muted-foreground"})]})}),(0,t.jsxs)(s.SheetContent,{side:"right",className:"w-[min(680px,100vw)] sm:max-w-[680px] p-0 overflow-y-auto",children:[(0,t.jsxs)(s.SheetHeader,{className:"px-5 pt-5 pb-3 border-b border-border/60 bg-muted/30",children:[(0,t.jsxs)(s.SheetTitle,{className:"text-base flex items-center gap-2",children:[(0,t.jsx)(n.default,{className:"h-4 w-4 text-primary"}),e]}),a&&(0,t.jsx)(s.SheetDescription,{className:"text-xs",children:a})]}),(0,t.jsx)("div",{className:"border-b border-border/60",children:(0,t.jsx)(d,{samples:r})}),(0,t.jsx)("div",{className:"px-5 py-3 border-t border-border/60 bg-muted/20 text-[11px] text-muted-foreground",children:(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"File types commonly deployed:"})," ",Array.from(new Set(r.map(e=>e.filename.split(".").pop()||""))).join(", ")," — each compiles to a portable artefact (binary, .so, .beam, .jar, or interpreter-bound source)."]})})]})]}):(0,t.jsxs)("div",{className:"rounded-md border border-border/60 overflow-hidden",children:[(0,t.jsxs)("div",{className:"bg-muted/30 px-4 py-3 border-b border-border/60",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(n.default,{className:"h-4 w-4 text-primary"}),(0,t.jsx)("p",{className:"text-sm font-semibold",children:e}),(0,t.jsxs)(i.Badge,{variant:"outline",className:"ml-auto text-[10px]",children:[r.length," languages"]})]}),a&&(0,t.jsx)("p",{className:"text-xs text-muted-foreground mt-1",children:a})]}),(0,t.jsx)(d,{samples:r})]})}e.s(["MultiLangSamples",()=>m],366101)},42561,e=>{"use strict";var t=e.i(843476),a=e.i(271645),s=e.i(846932),r=e.i(88653),i=e.i(519455),o=e.i(487486),n=e.i(431343),l=e.i(531278),c=e.i(63209),d=e.i(595468),m=e.i(966992);let u=new Uint8Array([0,97,115,109,1,0,0,0,1,7,1,96,2,127,127,1,127,3,2,1,0,7,7,1,3,97,100,100,0,0,10,9,1,7,0,32,0,32,1,106,11]);function h({buttonLabel:e="Run in browser (Wasm)",description:h="Loads a hand-assembled WebAssembly binary (41 bytes) and calls the exported `add(i32, i32) -> i32` function. In production, this would be a Rust/C binary compiled via `cargo build --target wasm32-wasi` or `emcc`.",sourceLanguage:p="Rust/C"}){let[g,x]=(0,a.useState)("idle"),[f,b]=(0,a.useState)(""),[S,v]=(0,a.useState)(null),y=(0,a.useCallback)(async()=>{x("running"),b("Instantiating WebAssembly module (41 bytes)…\n");let e=performance.now();try{let{instance:t}=await WebAssembly.instantiate(u),a=t.exports.add;if(!a)throw Error("Exported function 'add' not found in Wasm module");let s=Math.round(performance.now()-e);v(s);let r=[];for(let[e,t]of(r.push(`✓ Wasm module instantiated in ${s}ms (41 bytes)`),r.push(`  Source language: ${p} (compiled to wasm32)`),r.push("  Exported function: add(i32, i32) -> i32"),r.push(""),r.push("Test cases:"),[[2,3],[100,200],[42,58],[-10,20],[1e6,1]])){let s=a(e,t);r.push(`  add(${e}, ${t}) = ${s}`)}r.push(""),r.push("✓ All calls successful. The same .wasm binary would run in"),r.push("  any browser, any OS, any Wasm runtime — portable native code."),b(r.join("\n")),x("done")}catch(t){let e=t instanceof Error?t.message:String(t);b(t=>t+`
Error: ${e}`),x("error")}},[p]);return(0,t.jsxs)("div",{className:"mt-3 rounded-md border border-primary/30 bg-primary/3 p-3",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)(i.Button,{size:"sm",variant:"running"===g?"outline":"default",className:"gap-1.5",onClick:y,disabled:"running"===g,children:["running"===g?(0,t.jsx)(l.Loader2,{className:"h-3.5 w-3.5 animate-spin"}):"done"===g?(0,t.jsx)(d.CheckCircle2,{className:"h-3.5 w-3.5"}):"error"===g?(0,t.jsx)(c.AlertCircle,{className:"h-3.5 w-3.5"}):(0,t.jsx)(n.Play,{className:"h-3.5 w-3.5"}),e]}),(0,t.jsxs)(o.Badge,{variant:"outline",className:"text-[10px] gap-1",children:[(0,t.jsx)(m.Cpu,{className:"h-2.5 w-2.5"}),"WebAssembly · 41 bytes"]}),null!==S&&"done"===g&&(0,t.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Instantiated in ",S,"ms"]})]}),h&&(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-2 leading-relaxed",children:h}),(0,t.jsx)(r.AnimatePresence,{children:"idle"!==g&&f&&(0,t.jsx)(s.motion.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,t.jsx)("div",{className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${"error"===g?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,t.jsx)("pre",{className:"whitespace-pre-wrap",children:f})})})})]})}e.s(["WasmRunner",()=>h])},912207,e=>{"use strict";var t=e.i(843476),a=e.i(522016),s=e.i(862824),r=e.i(342046),i=e.i(122836),o=e.i(366101),n=e.i(90441),l=e.i(901752),c=e.i(487486),d=e.i(716675),m=e.i(42561),u=e.i(868054),h=e.i(828579),p=e.i(966992),g=e.i(852008),x=e.i(640524),f=e.i(658041),b=e.i(283086),S=e.i(955716),v=e.i(581418),y=e.i(21218),_=e.i(763639),w=e.i(332017);let N=`# ============================================================
# bronze/silver/customer_conform.py
# Idempotent Silver conformance using Delta MERGE
# ============================================================
import dlt
from pyspark.sql.functions import (
    col, lit, current_timestamp, md5, concat_ws, when, coalesce,
)
from pyspark.sql.types import StringType

@dlt.view
def bronze_customer_raw():
    return (
        spark.readStream
        .format("delta")
        .load("/mnt/bronze/salesforce/account")
        .unionByName(spark.read.table("bronze.shopify.customer"))
    )

@dlt.table(
    name="silver.customer",
    comment="Conformed customer across Salesforce + Shopify, deduplicated by email hash",
    table_properties={
        "quality": "silver",
        "delta.enableChangeDataFeed": "true",
        "pipelines.reset.allowed": "false",
    },
    partition_cols=["region_code"],
)
@dlt.expect_or_drop("email_not_null", "customer_email IS NOT NULL")
@dlt.expect_or_quarantine(
    "email_format",
    r"customer_email RLIKE '^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,})$'"
)
def silver_customer():
    src = dlt.read("bronze_customer_raw")
    return (
        src
        .withColumn("customer_email_hash", md5(lower(trim(col("customer_email")))))
        .withColumn("customer_sk", md5(concat_ws("||",
            col("customer_email_hash"), col("loaded_at"))))
        .withColumn("full_name", concat_ws(" ", col("first_name"), col("last_name")))
        .withColumn("is_active", when(col("status") == "ACTIVE", lit(True)).otherwise(lit(False)))
        .withColumn("region_code", coalesce(col("region"), lit("UNKNOWN")))
        .withColumn("loaded_at", current_timestamp())
        .dropDuplicates(["customer_email_hash", "loaded_at"])
        .select(
            "customer_sk", "customer_id", "customer_email_hash", "full_name",
            "segment", "region_code", "loyalty_tier", "is_active", "loaded_at",
        )
    )

# Idempotent MERGE into the curated Delta table — runs after DLT materialisation
@dlt.table(name="silver.customer_curated")
def silver_customer_curated():
    src = dlt.read("silver.customer")
    target = spark.read.table("silver.customer_curated")
    (
        target.alias("t")
        .merge(src.alias("s"), "t.customer_sk = s.customer_sk")
        .whenMatchedUpdateAll()
        .whenNotMatchedInsertAll()
        .execute()
    )
    return target
`,k=`-- ============================================================
-- Bronze → Silver conformance using Delta Lake + Spark SQL
-- Run inside Databricks SQL warehouse for ad-hoc investigations
-- ============================================================
-- Optimise for predicate pushdown on hot columns
CREATE TABLE IF NOT EXISTS silver.order_line
USING DELTA
LOCATION 's3://moderndatascieng-silver/sales/order_line'
PARTITIONED BY (order_date_sk)
CLUSTERED BY (customer_sk, product_sk)
TBLPROPERTIES (
  'delta.enableChangeDataFeed'   = true,
  'delta.logRetentionDuration'   = 'interval 30 days',
  'delta.deletedFileRetentionDuration' = 'interval 7 days',
  'delta.dataSkippingNumIndexedCols' = 32,
  'quality' = 'silver',
  'owner'   = 'data_platform'
);

-- Idempotent MERGE — safe to re-run
MERGE INTO silver.order_line AS t
USING (
  SELECT
    o.order_id,
    o.order_line_id,
    o.customer_sk,
    o.product_sk,
    o.store_sk,
    o.order_date_sk,
    o.qty,
    o.gross_amount,
    o.discount_amount,
    o.net_amount,
    o.loaded_at
  FROM bronze.shopify.order_line_raw
  WHERE o.loaded_at > (SELECT COALESCE(MAX(loaded_at), '1970-01-01') FROM silver.order_line)
) AS s
ON t.order_line_id = s.order_line_id
WHEN MATCHED AND s.loaded_at > t.loaded_at THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;

-- Z-ORDER hot Silver tables nightly — 6x scan reduction on customer_sk
OPTIMIZE silver.order_line ZORDER BY (customer_sk, product_sk);
VACUUM silver.order_line RETAIN 168 HOURS;

-- Time travel — point-in-time audit
SELECT count(*) FROM silver.order_line VERSION AS OF 42
WHERE customer_sk = 'c5a9f1...';
`,j=`# cluster policy: "transform_gold" — used by dbt + PySpark DLT
# Managed via Databricks asset bundles (databricks.yml)
cluster_type: "all-purpose"
spark_version: "14.3.x-scala2.12"
node_type_id: "Standard_E16ds_v4"
autoscale:
  min_workers: 4
  max_workers: 24
  mode: "ENHANCED"            # photon + enhanced autoscaler
driver_node_type_id: "Standard_E16ds_v4"
autotermination_minutes: 30
spark_conf:
  "spark.databricks.delta.optimizeWrite.enabled": "true"
  "spark.databricks.delta.autoCompact.enabled": "true"
  "spark.sql.adaptive.coalescePartitions.enabled": "true"
  "spark.sql.parquet.compression.codec": "snappy"
  "spark.databricks.cluster.profile": "singleNode"
init_scripts:
  - workspace: /Shared/init/install_unity_driver.sh
aws_attributes:
  instance_profile_arn: "arn:aws:iam::123456789012:instance-profile/databricks-s3"
  zone_id: "auto"
`,C=[{label:"Bronze tables",value:String(n.MEDALLION_LAYERS[0].tables)},{label:"Bronze volume / mo",value:n.MEDALLION_LAYERS[0].volume},{label:"Silver tables",value:String(n.MEDALLION_LAYERS[1].tables)},{label:"Silver volume / mo",value:n.MEDALLION_LAYERS[1].volume},{label:"Gold tables",value:String(n.MEDALLION_LAYERS[2].tables)},{label:"Gold volume / mo",value:n.MEDALLION_LAYERS[2].volume}],E=[{metric:"Photon vs legacy runtime",value:"2.4x",note:"Silver conformance job"},{metric:"Z-ORDER scan reduction",value:"6.1x",note:"On customer_sk predicate"},{metric:"Cluster pool warm-start",value:"92%",note:"No cold-start on dbt run"},{metric:"Photon cost / task",value:"-31%",note:"vs non-Photon FY24"}];function A(){return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsx)(s.PageHeader,{eyebrow:"Lakehouse — storage & compute",title:"Databricks · Spark · Delta Lake · Medallion",description:"Databricks is the engine room of the platform: PySpark + Spark SQL workloads, Delta Lake for ACID + time travel, and the Bronze→Silver→Gold medallion pattern as the canonical data flow. Photon runtime, cluster pools and Unity Catalogue keep it fast, cheap and governed.",right:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)(c.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(b.Sparkles,{className:"h-3 w-3"})," Photon"]}),(0,t.jsxs)(c.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(h.Boxes,{className:"h-3 w-3"})," Medallion"]})]})}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3",children:C.map(e=>(0,t.jsx)(s.KpiCard,{label:e.label,value:e.value},e.label))}),(0,t.jsx)(s.SectionCard,{title:"Medallion architecture — Bronze · Silver · Gold",description:"Each layer has a single responsibility. The flow is unidirectional and idempotent — re-running a Silver job for a date partition never rewrites history unless explicitly versioned.",icon:(0,t.jsx)(g.Layers,{className:"h-5 w-5"}),contentClassName:"p-0",children:(0,t.jsx)("div",{className:"grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/60",children:n.MEDALLION_LAYERS.map(e=>{let a="Bronze"===e.layer?"border-amber-500/40 bg-amber-500/6":"Silver"===e.layer?"border-violet-500/40 bg-violet-500/6":"border-emerald-500/40 bg-emerald-500/6";return(0,t.jsxs)("div",{className:`p-5 ${a}`,children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-3",children:[(0,t.jsx)("span",{className:"h-3 w-3 rounded-full",style:{background:"Bronze"===e.layer?"var(--chart-2)":"Silver"===e.layer?"var(--chart-3)":"var(--chart-1)"}}),(0,t.jsx)("p",{className:"text-lg font-semibold",children:e.layer}),(0,t.jsxs)(c.Badge,{variant:"outline",className:"ml-auto text-[10px]",children:[e.tables," tables"]})]}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground mb-3",children:e.purpose}),(0,t.jsxs)("dl",{className:"text-xs space-y-1.5",children:[(0,t.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Location"}),(0,t.jsx)("dd",{className:"font-mono break-all text-right",children:e.location})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Format"}),(0,t.jsx)("dd",{className:"font-mono",children:e.format})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Volume"}),(0,t.jsx)("dd",{className:"font-mono",children:e.volume})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Pipeline"}),(0,t.jsx)("dd",{className:"font-mono text-right",children:e.pipelines})]})]})]},e.layer)})})}),(0,t.jsxs)("div",{className:"grid lg:grid-cols-2 gap-4",children:[(0,t.jsx)(s.SectionCard,{title:"PySpark DLT — Silver customer conformance",description:"Delta Live Tables with expectations. PII rows go to a quarantine table; non-PII conformance is reproducible and idempotent.",icon:(0,t.jsx)(x.Workflow,{className:"h-5 w-5"}),badge:"PySpark + DLT",children:(0,t.jsx)(i.CodeBlock,{code:N,language:"python",filename:"silver/customer_conform.py",highlight:[15,16,17,18,19,20,21,22,23,30,31,32,33,34,35,36,37,38,39,40,41,42,43]})}),(0,t.jsx)(s.SectionCard,{title:"Delta Lake + Spark SQL — Bronze→Silver",description:"Plain SQL for ad-hoc investigations and to materialise hot Silver tables with Z-ORDER + CDF + retention.",icon:(0,t.jsx)(f.Database,{className:"h-5 w-5"}),badge:"Spark SQL",children:(0,t.jsx)(i.CodeBlock,{code:k,language:"sql",filename:"silver_order_line.sql",highlight:[6,7,8,9,10,11,12,13,14,15,16,17,18,25,26,27,28,29,30,31,32,33,34,36,37,40,41]})})]}),(0,t.jsxs)("div",{className:"grid lg:grid-cols-2 gap-4",children:[(0,t.jsx)(s.SectionCard,{title:"Cluster policy — transform_gold",description:"Provisioned via Databricks asset bundles from Git. Photon + enhanced autoscaler + cluster pools keep startup latency under 30s and cost predictable.",icon:(0,t.jsx)(p.Cpu,{className:"h-5 w-5"}),badge:"Asset bundle",children:(0,t.jsx)(i.CodeBlock,{code:j,language:"yaml",filename:"databricks.yml",highlight:[7,8,9,10,13,14,15,16,17,18,19,20]})}),(0,t.jsx)(s.SectionCard,{title:"Performance lift (synthetic)",description:"Photon + Z-ORDER + cluster pools combined drove a 2.4× runtime reduction and 31% cost-per-task reduction YoY.",icon:(0,t.jsx)(y.Activity,{className:"h-5 w-5"}),badge:"Synthetic",contentClassName:"p-0",children:(0,t.jsxs)("table",{className:"w-full text-sm",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-border/60 bg-muted/40",children:[(0,t.jsx)("th",{className:"text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground",children:"Metric"}),(0,t.jsx)("th",{className:"text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground",children:"Lift"}),(0,t.jsx)("th",{className:"text-left px-4 py-2.5 text-xs uppercase tracking-wider text-muted-foreground",children:"Note"})]})}),(0,t.jsx)("tbody",{children:E.map(e=>(0,t.jsxs)("tr",{className:"border-b border-border/40 last:border-0",children:[(0,t.jsx)("td",{className:"px-4 py-2.5",children:e.metric}),(0,t.jsx)("td",{className:"px-4 py-2.5 font-mono font-semibold text-emerald-600 dark:text-emerald-400",children:e.value}),(0,t.jsx)("td",{className:"px-4 py-2.5 text-xs text-muted-foreground",children:e.note})]},e.metric))})]})})]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-3 gap-4",children:[(0,t.jsx)(s.SectionCard,{title:"Integrations",icon:(0,t.jsx)(S.GitBranch,{className:"h-5 w-5"}),children:(0,t.jsxs)("ul",{className:"text-sm space-y-1.5 text-muted-foreground",children:[(0,t.jsx)("li",{children:"• Snowflake: Delta → Snowflake auto-ingest via manifest"}),(0,t.jsx)("li",{children:"• dbt: runs on Databricks SQL warehouse for Gold transforms"}),(0,t.jsxs)("li",{children:["• Airflow: ",(0,t.jsx)(i.InlineCode,{children:"DatabricksSubmitRunOperator"})]}),(0,t.jsx)("li",{children:"• Power BI: Direct Lake connector to Silver/Gold Delta"}),(0,t.jsx)("li",{children:"• MLflow + Feature Store for offline + online features"})]})}),(0,t.jsx)(s.SectionCard,{title:"Governance",icon:(0,t.jsx)(v.ShieldCheck,{className:"h-5 w-5"}),children:(0,t.jsxs)("ul",{className:"text-sm space-y-1.5 text-muted-foreground",children:[(0,t.jsx)("li",{children:"• Unity Catalogue: column-level RBAC"}),(0,t.jsx)("li",{children:"• PII tags auto-applied from dbt YAML"}),(0,t.jsx)("li",{children:"• Dynamic view redaction for sensitive columns"}),(0,t.jsx)("li",{children:"• Audit log streamed to Datadog"}),(0,t.jsx)("li",{children:"• Immuta policy enforcement layer"})]})}),(0,t.jsx)(s.SectionCard,{title:"Operational excellence",icon:(0,t.jsx)(p.Cpu,{className:"h-5 w-5"}),children:(0,t.jsxs)("ul",{className:"text-sm space-y-1.5 text-muted-foreground",children:[(0,t.jsx)("li",{children:"• DLT pipelines: declared quality (bronze/silver/gold)"}),(0,t.jsx)("li",{children:"• Cluster pools reuse executor nodes (warm-start)"}),(0,t.jsx)("li",{children:"• Z-ORDER nightly on top-10 hot Silver tables"}),(0,t.jsx)("li",{children:"• VACUUM + retention scheduled via Airflow"}),(0,t.jsx)("li",{children:"• Cost-per-task tagged in cluster policy"})]})})]}),(0,t.jsx)(s.SectionCard,{title:"Multi-language: 5 idioms for Silver customer conformance",description:"PySpark (default) · Scala (type-safe performant) · Rust (vectorised UDF) · Elixir (real-time streaming) · C (Arrow native). Click to open the drawer — keeps the page lightweight.",icon:(0,t.jsx)(_.Languages,{className:"h-5 w-5"}),badge:"5 languages · drawer",children:(0,t.jsx)(o.MultiLangSamples,{drawerMode:!0,drawerButtonLabel:"View 5-language Silver conformance implementations",title:"Silver customer conformance — 5 idiomatic implementations",description:"The same MERGE logic in 5 languages. PySpark = analytics default. Scala = type-safe performant. Rust = vectorised UDF. Elixir = real-time streaming via Broadway + BEAM. C = Arrow native UDF.",samples:[{language:"python",filename:"silver_customer.py",note:"PySpark DLT — the default for analytics engineers. Reads from streams, MERGEs on customer_sk. Compiles to JVM bytecode via Py4J bridge.",code:`import dlt
from pyspark.sql.functions import col, md5, concat_ws, when, lit, current_timestamp

@dlt.table(name="silver.customer", partition_cols=["region_code"])
@dlt.expect_or_drop("email_not_null", "customer_email IS NOT NULL")
def silver_customer():
    return (
        spark.readStream.format("delta")
        .load("/mnt/bronze/salesforce/account")
        .withColumn("customer_email_hash", md5(col("customer_email")))
        .withColumn("customer_sk", md5(concat_ws("||", col("customer_email_hash"), col("loaded_at"))))
        .withColumn("is_active", when(col("status") == "ACTIVE", lit(True)).otherwise(lit(False)))
    )`,highlight:[4,5,6,7,8,9,10,11]},{language:"scala",filename:"SilverCustomerConformance.scala",note:"Scala Spark — type-safe, ~15% faster than PySpark on the same cluster. JVM-native; compiles to bytecode. Used for performance-critical batch jobs.",code:`package com.moderndatascieng.silver

import org.apache.spark.sql.functions._
import org.apache.spark.sql.expressions.Window
import org.apache.spark.sql.{DataFrame, SaveMode, SparkSession}

object SilverCustomerConformance {
  def transform(src: DataFrame)(implicit spark: SparkSession): DataFrame = {
    import spark.implicits._
    src
      .withColumn("customer_email_hash", md5(lower($"customer_email")))
      .withColumn("customer_sk", md5(concat_ws("||", $"customer_email_hash", $"loaded_at")))
      .withColumn("is_active", when($"status" === "ACTIVE", lit(true)).otherwise(lit(false)))
      .withColumn("loaded_at", current_timestamp())
      .dropDuplicates("customer_email_hash", $"loaded_at")
  }

  def merge(target: String, src: DataFrame)(implicit spark: SparkSession): Unit = {
    spark.sql(s"""
      MERGE INTO $target AS t
      USING src AS s
        ON t.customer_sk = s.customer_sk
      WHEN MATCHED AND s.loaded_at > t.loaded_at THEN UPDATE SET *
      WHEN NOT MATCHED THEN INSERT *
    """)
  }
}`,highlight:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]},{language:"rust",filename:"pii_redact_udf.rs",note:"Rust UDF — vectorised regex PII redaction. ~10× faster than SQL UDFs, ~3× faster than Python UDFs. Compiles to Wasm for portability + native for max perf.",code:`// Snowflake external function — Rust implementation
// Reads a column of strings, redacts PII patterns (SSN, card, email)

use regex::Regex;

#[no_mangle]
pub extern "C" fn redact_pii(input: &str) -> String {
    let ssn = Regex::new(r"\bd{3}-d{2}-d{4}\b").unwrap();
    let card = Regex::new(r"\bd{16,19}\b").unwrap();
    let email = Regex::new(r"\b[A-Z][a-z]+@[a-z]+.(com|org|net)\b").unwrap();

    let mut out = input.to_string();
    out = ssn.replace_all(&out, "[REDACTED-SSN]").to_string();
    out = card.replace_all(&out, "[REDACTED-CARD]").to_string();
    out = email.replace_all(&out, "[REDACTED-EMAIL]").to_string();
    out
}

// Compile: cargo build --release --target wasm32-wasi
// Deploy: Snowflake External Function via API Gateway + Lambda
`,highlight:[7,8,9,12,13,14,15,16,17]},{language:"elixir",filename:"silver_customer_conform.ex",note:"Elixir + BroadwayKafka — real-time streaming with back-pressure via the BEAM VM. Discord + WhatsApp use this for high-concurrency pipelines. Compiles to .beam bytecode.",code:`defmodule ModernDataSciEng.SilverCustomerConform do
  @moduledoc """
  Broadway pipeline: Kafka Bronze events -> Silver conformed table.
  Uses BroadwayKafka for back-pressure + concurrent processing.
  The BEAM VM gives us ~1M concurrent lightweight processes per node.
  """
  use Broadway

  alias BroadwayKafka.Producer
  alias ModernDataSciEng.{Customer, Repo}

  @impl true
  def start_link(opts \\\\ []) do
    Broadway.start_link(__MODULE__,
      name: __MODULE__,
      producer: [
        module: {Producer, [
          hosts: [{"broker-1", 9092}],
          group_id: "silver-conform-service",
          topics: ["bronze.customer"],
        ]},
        concurrency: 4,
      ],
      processors: [
        default: [concurrency: 100, max_demand: 50],
      ],
      batchers: [
        default: [concurrency: 10, batch_size: 1000, batch_timeout: 5000],
      ],
    )
  end

  @impl true
  def handle_message(_, message, _) do
    # Decode Avro payload
    {:ok, customer_event} = :avro.decode(message.data, schema_name: "Customer")

    # Conform: generate surrogate key, normalise, dedupe
    customer_sk =
      :crypto.hash(:md5, "#{customer_event.email_hash}|#{customer_event.loaded_at}")
      |> Base.encode16(case: :lower)

    conformed = %{
      customer_sk: customer_sk,
      customer_id: customer_event.customer_id,
      email_hash: customer_event.email_hash,
      is_active: customer_event.status == "ACTIVE",
      region_code: customer_event.region || "UNKNOWN",
      loaded_at: DateTime.utc_now(),
    }

    # Idempotent upsert via Ecto (Postgres wire)
    Repo.insert_all(Customer, [conformed],
      on_conflict: {:replace, [:is_active, :region_code, :loaded_at]},
      conflict_target: :customer_sk,
    )

    message
  end

  @impl true
  def handle_batch(_, messages, _, _) do
    # Batch write to Delta via JDBC
    rows = Enum.map(messages, & &1.data)
    :delta_writer.write("s3://silver/customer", rows)
    :ok
  end
end

# File types: .ex (source), .beam (compiled bytecode), .ez (release archive)
# Run: mix run -e ModernDataSciEng.SilverCustomerConform.start_link()`,highlight:[11,12,13,14,15,16,17,18,19,28,29,30,31,32,33,47,48,49,50,51]},{language:"c",filename:"vectorised_email_hash.c",note:"C + Apache Arrow C++ — vectorised column processing at the native layer. Most high-level APIs (DuckDB, Polars, Pandas) eventually call into C/C++ here. Compiles to .so shared library.",code:`// ============================================================
// Apache Arrow C UDF — vectorised email hashing for PII redaction
// Process a whole column at once (vectorised) — 10x faster than row-by-row
// Compiles to a shared lib loadable by DuckDB / Postgres / Polars
// ============================================================
#include <arrow/c/abi.h>
#include <openssl/md5.h>
#include <string.h>
#include <stdint.h>

// Arrow C Data Interface (ABI-stable across languages)
// The same function is callable from Python, Rust, Go, Java via Arrow C-ABI
int vectorised_email_hash(
    struct ArrowArray* input_column,   // input: strings
    struct ArrowArray* output_column,  // output: fixed-size binary (16 bytes MD5)
    int64_t length
) {
    if (input_column->n_buffers < 3) return -1;

    const int32_t* offsets = (const int32_t*) input_column->buffers[1];
    const char* data = (const char*) input_column->buffers[2];

    // Allocate output buffer (16 bytes per row for MD5)
    uint8_t* out = (uint8_t*) output_column->buffers[1];

    for (int64_t i = 0; i < length; i++) {
        int32_t start = offsets[i];
        int32_t end = offsets[i + 1];
        size_t len = (size_t)(end - start);

        // Compute MD5 of the email string (OpenSSL)
        MD5((const unsigned char*)(data + start), len, out + (i * 16));
    }

    return 0;  // success
}

// Compile: gcc -O3 -shared -fPIC -o email_hash_udf.so email_hash_udf.c \\
//          -I/usr/include/arrow -lcrypto
// Load in DuckDB:  INSTALL 'email_hash_udf.so';
//                  CREATE MACRO email_hash(col) AS udf_vectorised_email_hash(col);
// Load in Postgres: CREATE FUNCTION email_hash(text) RETURNS bytea \\
//                   AS 'email_hash_udf.so', 'vectorised_email_hash' LANGUAGE C;`,highlight:[9,10,11,12,13,15,16,17,20,21,22,23,28,29,30,31,32]}]})}),(0,t.jsx)(s.SectionCard,{title:"Try it: Delta MERGE syntax validator (Pyodide)",description:"Validates that a MERGE statement has all required clauses (MERGE INTO, USING, ON, WHEN MATCHED, WHEN NOT MATCHED). Pure Python regex — runs in browser.",icon:(0,t.jsx)(u.Terminal,{className:"h-5 w-5"}),badge:"executable",children:(0,t.jsx)(d.PyodideRunner,{code:`import re

merge_sql = """
MERGE INTO silver.order_line AS t
USING (
  SELECT order_id, customer_sk, product_sk, order_date_sk, qty, net_amount
  FROM bronze.shopify.order_line_raw
  WHERE loaded_at > (SELECT COALESCE(MAX(loaded_at), '1970-01-01') FROM silver.order_line)
) AS s
ON t.order_line_id = s.order_line_id
WHEN MATCHED AND s.loaded_at > t.loaded_at THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *
"""

required_clauses = {
    "MERGE INTO": "target table",
    "USING": "source data",
    "ON": "join condition",
    "WHEN MATCHED": "update clause",
    "WHEN NOT MATCHED": "insert clause",
}

issues = []
for clause, desc in required_clauses.items():
    if clause in merge_sql:
        print(f"\\u2713 Found '{clause}' \u2014 {desc}")
    else:
        issues.append(f"\\u26a0 Missing '{clause}' \u2014 {desc}")

if re.search(r'\\bAS \\w+', merge_sql):
    print("\\u2713 Table aliases found (AS t / AS s)")
if "UPDATE SET" in merge_sql:
    print("\\u2713 UPDATE SET found")
if "INSERT" in merge_sql:
    print("\\u2713 INSERT found")

print()
print("=" * 60)
if issues:
    print("MERGE SYNTAX ISSUES:")
    for i in issues: print(f"  {i}")
    print(f"\\\\n{len(issues)} issue(s) found.")
else:
    print("\\u2713 MERGE statement is valid \u2014 all required clauses present.")
    print("  Safe to deploy as idempotent Silver conformance.")
print("=" * 60)`,buttonLabel:"Run MERGE validator (Pyodide)"})}),(0,t.jsx)(s.SectionCard,{title:"Try it: Rust/C code compiled to WebAssembly",description:"The Rust UDF + C Arrow UDF above, compiled to Wasm, would run in your browser. This demo uses a hand-assembled 41-byte Wasm binary that exports an `add` function — the pattern is the same for real Rust/C code compiled via `cargo build --target wasm32-wasi` or `emcc`.",icon:(0,t.jsx)(u.Terminal,{className:"h-5 w-5"}),badge:"Wasm · ADR-016",children:(0,t.jsx)(m.WasmRunner,{sourceLanguage:"Rust/C → wasm32-wasi",buttonLabel:"Run Wasm module (41 bytes)",description:"In production: compile the Rust UDF above with `cargo build --target wasm32-wasi` and host the .wasm binary. The WasmRunner loads it via WebAssembly.instantiate() and calls the exported function — same pattern regardless of source language (Rust, C, Go, Elixir all compile to Wasm)."})}),(0,t.jsxs)(w.DeeperThoughtSection,{pageTitle:"Databricks",children:[(0,t.jsx)(w.DeeperThought,{title:"Databricks IS Spark-as-a-service — and Spark IS functional programming at scale",connectedTo:"ADR-001 (platform architecture)",children:(0,t.jsx)("p",{children:"Spark's RDD/DataFrame model is functional: map, filter, reduce, groupBy — the SAME operations as Haskell/Scala collections. The difference: Spark distributes them across a cluster. A DataFrame IS a distributed collection. A groupBy IS a distributed hash-partition. The functional paradigm (immutability, lazy evaluation) IS the reason Spark is fault-tolerant: if a partition fails, recompute from the lineage DAG. Databricks wraps this in a managed service — but the math IS functional programming, distributed."})}),(0,t.jsx)(w.DeeperThought,{title:"Photon IS Databricks' C++ rewrite of the Spark SQL engine — 10× faster",connectedTo:"ADR-050 (fold-section architecture)",children:(0,t.jsx)("p",{children:"Spark's original SQL engine was written in Scala (JVM). Photon (2021) rewrites it in C++ for vectorised execution — 10× faster on the same hardware. The SQL IS the same; the execution engine is different. This IS the 'production patterns' fold in action: the tool (Spark SQL → Photon) changes, the math (relational algebra, Codd 1970) stays. When Photon is replaced by a GPU-native SQL engine in 2030, the SQL stays. The fold absorbs the change."})}),(0,t.jsx)(w.DeeperThought,{title:"Delta Lake IS ACID transactions on Parquet — and it's open",connectedTo:"ADR-013 (Delta Lake)",children:(0,t.jsx)("p",{children:"Delta Lake adds a transaction log (_delta_log/) on top of Parquet files. The log IS an append-only sequence of JSON actions (Add, Remove, Commit). This IS the same event-sourcing pattern as Kafka's log — just for files instead of messages. The ACID guarantee comes from the log: read the log → determine which Parquet files are 'current' → read those files. The log IS the source of truth; the files are materialised views. Delta IS event-sourcing for data lakes."})}),(0,t.jsx)(w.DeeperThought,{title:"The cluster park IS Databricks' cost-aware autoscaling — and it saves 19% YoY",connectedTo:"ADR-001 (platform architecture)",children:(0,t.jsx)("p",{children:"Databricks' cluster parks maintain a pool of pre-warmed clusters that autoscale based on workload. When a job starts, it grabs a pre-warmed cluster (no startup latency). When the job ends, the cluster returns to the pool (no teardown). This IS the same pattern as connection pooling in databases — but for Spark clusters. The 19% YoY cost reduction comes from avoiding cluster startup/teardown overhead. The pool IS the amortisation of cold-start cost."})}),(0,t.jsx)(w.DeeperThought,{title:"Unity Catalog IS Databricks' answer to Snowflake's governance — and it's open",connectedTo:"ADR-050 (fold-section architecture)",children:(0,t.jsx)("p",{children:"Unity Catalog centralises governance (ACLs, column-level masking, row-level filters) across all Databricks workspaces. This IS the same pattern as Snowflake's GRANT/REVOKE — but for Delta tables instead of Snowflake tables. The governance model IS RBAC (role-based access control) — the same model that every database since Oracle 7 (1992) has used. Unity Catalog IS the 'Production patterns' fold for governance — the pattern (RBAC) stays, the implementation (Unity vs Snowflake vs Lake Formation) changes."})})]}),(0,t.jsx)(r.NextSteps,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"snowflake",reason:"Continue to snowflake — see also from this page"},{id:"orchestration",reason:"Continue to orchestration — see also from this page"}]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(a.default,{href:(0,l.hrefFor)("snowflake"),className:"text-sm text-primary hover:underline",children:"→ Continue to Snowflake serving"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(a.default,{href:(0,l.hrefFor)("orchestration"),className:"text-sm text-primary hover:underline",children:"→ or jump to Orchestration"})]})]})}e.s(["DatabricksPage",()=>A])}]);