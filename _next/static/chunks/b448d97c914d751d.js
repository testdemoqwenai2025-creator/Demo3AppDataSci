(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63209,e=>{"use strict";var t=e.i(361653);e.s(["AlertCircle",()=>t.default])},431343,595468,e=>{"use strict";var t=e.i(451477);e.s(["Play",()=>t.default],431343);var s=e.i(123287);e.s(["CheckCircle2",()=>s.default],595468)},862824,515288,e=>{"use strict";var t=e.i(843476),s=e.i(975157);function a({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,s.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...a})}function i({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,s.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...a})}function n({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,s.cn)("leading-none font-semibold",e),...a})}function r({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,s.cn)("text-muted-foreground text-sm",e),...a})}function o({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,s.cn)("px-6",e),...a})}e.s(["Card",()=>a,"CardContent",()=>o,"CardDescription",()=>r,"CardHeader",()=>i,"CardTitle",()=>n],515288);var l=e.i(487486);function d({title:e,description:s,icon:d,badge:c,badgeVariant:m="outline",children:p,className:h,contentClassName:u}){return(0,t.jsxs)(a,{className:["border-border/60",h].filter(Boolean).join(" "),children:[(e||s)&&(0,t.jsxs)(i,{className:"flex flex-row items-start gap-3 space-y-0 border-b border-border/60 bg-muted/30",children:[d&&(0,t.jsx)("div",{className:"mt-0.5 text-primary",children:d}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[e&&(0,t.jsx)(n,{className:"text-base",children:e}),c&&(0,t.jsx)(l.Badge,{variant:m,className:"text-[10px]",children:c})]}),s&&(0,t.jsx)(r,{className:"mt-1 text-xs",children:s})]})]}),(0,t.jsx)(o,{className:["p-4 md:p-5",u].filter(Boolean).join(" "),children:p})]})}function c({eyebrow:e,title:s,description:a,right:i}){return(0,t.jsxs)("div",{className:"mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4",children:[(0,t.jsxs)("div",{children:[e&&(0,t.jsx)("p",{className:"text-[11px] font-semibold uppercase tracking-widest text-primary/80 mb-1.5",children:e}),(0,t.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold tracking-tight text-balance",children:s}),a&&(0,t.jsx)("p",{className:"mt-2 text-sm md:text-base text-muted-foreground max-w-3xl text-pretty",children:a})]}),i&&(0,t.jsx)("div",{className:"shrink-0",children:i})]})}function m({label:e,value:s,delta:i,deltaTone:n="flat",hint:r}){return(0,t.jsx)(a,{className:"border-border/60",children:(0,t.jsxs)(o,{className:"p-4",children:[(0,t.jsx)("p",{className:"text-[11px] uppercase tracking-wider text-muted-foreground",children:e}),(0,t.jsx)("p",{className:"mt-1 text-2xl font-semibold tabular-nums",children:s}),(0,t.jsxs)("div",{className:"mt-1 flex items-center gap-2",children:[i&&(0,t.jsx)("span",{className:`text-xs ${"up"===n?"text-emerald-600 dark:text-emerald-400":"down"===n?"text-rose-600 dark:text-rose-400":"text-muted-foreground"}`,children:i}),r&&(0,t.jsx)("span",{className:"text-[11px] text-muted-foreground",children:r})]})]})})}e.s(["KpiCard",()=>m,"PageHeader",()=>c,"SectionCard",()=>d],862824)},342046,518550,e=>{"use strict";var t=e.i(843476),s=e.i(271645),a=e.i(522016),i=e.i(901752);let n=[{cardIndex:0,name:"SVD",equation:"A = UΣV^T",sciences:["genomics","audio","finance"],insightShort:"SVD IS the Fourier transform for data",hostPages:["numpy-scipy"],hostReasons:["SVD IS NumPy's universal decomposer — np.linalg.svd → PCA for genomics, audio compression, Fama-French risk factors."]},{cardIndex:1,name:"Attention",equation:"softmax(QK^T/√d_k) × V",sciences:["protein folding","NLP"],insightShort:"Attention IS natural selection",hostPages:["transformer-deep-dive"],hostReasons:["DNA IS a language — softmax(QK^T/√d_k)×V parses both proteins (AlphaFold2) and English (GPT-4) because both are correlation detection."]},{cardIndex:2,name:"Poisson",equation:"P(k) = λ^k e^(-λ) / k!",sciences:["sequencing","networks","decay"],insightShort:"Poisson IS the law of rare events",hostPages:["bioinformatics-pipelines"],hostReasons:["GATK variant calling depth IS Poisson(λ=mean coverage) — same distribution that sizes server clusters and radioactive sources."]},{cardIndex:3,name:"FFT",equation:"X[k] = Σ x[n] e^(-2πikn/N)",sciences:["mass spec","audio","cryo-EM"],insightShort:"FFT IS the change of basis",hostPages:["numpy-scipy"],hostReasons:["np.fft.fft is the SAME operation whether you're finding the m/z of a compound, the C-note in a chord, or the 3D structure of a ribosome."]},{cardIndex:4,name:"Verlet",equation:"r(t+Δt) = 2r(t) - r(t-Δt) + F/m·Δt²",sciences:["MD","games","orbits"],insightShort:"Verlet IS time-reversal symmetry",hostPages:["computational-biology"],hostReasons:["AMBER, Havok, and NASA JPL all call this exact integrator — symplectic, energy-conserving, time-reversible. The MD integrator IS the game physics integrator."]},{cardIndex:5,name:"Navier-Stokes",equation:"∂u/∂t + u·∇u = -∇p/ρ + ν∇²u",sciences:["weather","blood","turbulence"],insightShort:"Navier-Stokes IS the universe's flow equation",hostPages:["computational-physics"],hostReasons:["CFD on this PDE predicts hurricanes, aneurysm risk, and wing stall — the SAME nonlinearity makes weather unpredictable and turbulence beautiful."]},{cardIndex:6,name:"Gradient Descent",equation:"θ(t+1) = θ(t) - η∇L(θ)",sciences:["ML","evolution","thermodynamics"],insightShort:"Gradient Descent IS the learning rule",hostPages:["tabular"],hostReasons:["Gradient boosting = gradient descent on trees; GPT-4 training, natural selection, and protein folding all minimise a landscape with the SAME update rule."]},{cardIndex:7,name:"Bayes",equation:"P(H|D) = P(D|H)P(H) / P(D)",sciences:["genetics","spam","quantum"],insightShort:"Bayes IS the belief updater",hostPages:["alphamissense"],hostReasons:["AlphaMissense classifying a VUS IS Gmail classifying spam IS a Stern–Gerlach measurement — all three update P(H) given D."]},{cardIndex:8,name:"Euler's Method",equation:"y(t+Δt) = y(t) + f(t,y)·Δt",sciences:["orbital mechanics","games","finance"],insightShort:"Euler IS the seed of all simulation",hostPages:["space-science"],hostReasons:["Satellite trajectory propagation (NASA GMAT), game-engine fixed-step physics (Unity), and Black-Scholes Monte Carlo all START from this one-line integrator."]},{cardIndex:9,name:"Entropy",equation:"H = -Σ p log p",sciences:["information","thermodynamics","genetics"],insightShort:"Entropy IS the universal currency of disorder",hostPages:["systems-biology"],hostReasons:["Shannon measured message information, Boltzmann gas disorder, Haldane population heterozygosity — the SAME formula because all three quantify how spread out a distribution is."]},{cardIndex:10,name:"Black-Scholes",equation:"C = S·N(d1) − K·e^(−rT)·N(d2)",sciences:["fintech","maritime","genetics"],insightShort:"Black-Scholes IS the universal option-pricing equation",hostPages:["fintech"],hostReasons:["A Lloyd's underwriter pricing a 90-day cargo option, a CME quant pricing an SPX call, and a Fisher geneticist pricing an allele-substitution option all evaluate the SAME formula — the right-but-not-obligation to act on a stochastic payoff."]},{cardIndex:11,name:"Haversine",equation:"d = 2R·arcsin(√(...))",sciences:["maritime","aviation","astronomy"],insightShort:"Haversine IS the universal great-circle distance",hostPages:["global-shipping"],hostReasons:["Rotterdam→Singapore sailing distance, LHR→JFK flight distance, and Sirius→Canopus angular separation all use the SAME formula — shortest-path distance on a sphere, invented 1805 (Bowring)."]},{cardIndex:12,name:"Kelly Criterion",equation:"f* = (bp − q)/b = μ/σ²",sciences:["fintech","genetics","RL"],insightShort:"Kelly IS the universal bet-sizing equation",hostPages:["fintech"],hostReasons:["Ed Thorp's blackjack team (1960s), Jim Simons' Medallion Fund (1989-2024, 65% CAGR), Haldane's allele fixation (1927), and Thompson sampling (RL) all derive the SAME optimal bet size f* = μ/σ² because they all maximize expected log-growth."]},{cardIndex:13,name:"Markov Chain",equation:"π(t+1) = π(t)·P",sciences:["genetics","fintech","maritime"],insightShort:"Markov IS the universal state-transition equation",hostPages:["global-shipping","bioinformatics"],hostReasons:["Jukes-Cantor DNA substitution (1969), Moody's credit transitions (10⁶ bonds), and AIS port-state transitions (100K vessels) all use the SAME matrix update — the memoryless property is universal."]},{cardIndex:14,name:"Value at Risk",equation:"VaR_α = −(μ + z_α·σ)",sciences:["fintech","maritime","climate"],insightShort:"VaR IS the universal tail-risk equation",hostPages:["fintech","global-shipping"],hostReasons:["JPMorgan's 1-day 99% VaR ($4T balance, Basel III), Lloyd's 7-day 95% VaR ($50B hull, Solvency II), and NOAA 100-year flood VaR (FEMA FIRMs) all use the SAME quantile — every loss distribution has an inverse CDF."]},{cardIndex:15,name:"PageRank",equation:"PR(p) = (1-d) + d·Σ(PR(q)/L(q))",sciences:["fintech","maritime","genetics"],insightShort:"PageRank IS the universal centrality equation",hostPages:["global-shipping","systems-biology"],hostReasons:["BIS systemic risk (Lehman PR ≈ 0.012), UN COMTRADE port chokepoint (Rotterdam PR ≈ 0.020), and STRING gene essentiality (TP53 PR ≈ 0.025) all use the SAME eigenvector — Brin & Page 1998 for the web, now spanning banking, trade, and genomics."]},{cardIndex:16,name:"Kalman Filter",equation:"x̂(t+1) = x̂(t) + K·(z − H·x̂(t))",sciences:["maritime","aviation","genetics"],insightShort:"Kalman IS the universal state-estimation equation",hostPages:["global-shipping"],hostReasons:["AIS vessel tracking (100K vessels × 60s), ADS-B flight tracking (100K flights × 1s), and 1000-Genomes allele frequency tracking all use the SAME Bayesian update — Kalman 1960 invented this for Apollo navigation."]},{cardIndex:17,name:"Monte Carlo",equation:"E[f(X)] ≈ (1/N)·Σ f(X_i)",sciences:["fintech","maritime","genetics"],insightShort:"Monte Carlo IS the universal estimation equation",hostPages:["fintech","global-shipping","monte-carlo"],hostReasons:["Option pricing (10⁶ GBM paths), port congestion (10⁵ vessel sims), and rare-variant permutation tests (10⁶ permutations) all use the SAME averaging — Metropolis 1946 invented this at Los Alamos for neutron transport."]},{cardIndex:18,name:"Geometric Brownian Motion",equation:"dS = μS·dt + σS·dW",sciences:["fintech","maritime","genetics"],insightShort:"GBM IS the universal multiplicative-noise equation",hostPages:["fintech","global-shipping"],hostReasons:["SPX daily returns (Black-Scholes foundation), Rotterdam container dwell times, and Wright-Fisher allele drift all use the SAME SDE — multiplicative noise keeps S positive with log-normal stationarity."]},{cardIndex:19,name:"Lloyd's Algorithm",equation:"μ_k ← mean({x : argmin_k ‖x − μ_k‖²})",sciences:["maritime","genetics","ML"],insightShort:"Lloyd IS the universal clustering equation",hostPages:["global-shipping","systems-biology"],hostReasons:["50K ports clustered by trade flows (UN COMTRADE), 2504 individuals clustered by SNP PCA (1000-Genomes), and 1.4M images clustered by ResNet-50 (ImageNet) all use the SAME iterate — Lloyd 1957 invented this at Bell Labs for PCM."]},{cardIndex:20,name:"HyperLogLog",equation:"E = α_m m² (Σ 2^(-M_j))^(-1)",sciences:["data engineering","genomics","network security"],insightShort:"HLL IS the universal counter — 33M× memory compression with <1% error",hostPages:["big-data-ingestion"],hostReasons:["COUNT(DISTINCT user_id) in Snowflake/Spark, unique k-mers in Jellyfish (genome assembler), unique source IPs in Redis PFCOUNT (DDoS monitor) — all run the SAME hash→bucket→max-zeros→harmonic-mean algorithm. 12 KB vs 400 GB for exact counting."]},{cardIndex:21,name:"Bloom Filter",equation:"P(fp) = (1 - e^(-kn/m))^k",sciences:["network security","genomics","databases"],insightShort:"Bloom filter IS the universal membership test — 23× compression with 0.1% false positives",hostPages:["kafka-connect","delta-lake"],hostReasons:["Chrome Safe Browsing (malware URL check), genome assembler read dedup, RocksDB SSTable key lookup — all use the SAME k-hash→bit-set→AND-check. 175 MB vs 4 GB for exact hash set."]},{cardIndex:22,name:"Consistent Hashing",equation:"θ = hash(key) mod 2^256",sciences:["streaming","CDN","databases"],insightShort:"Consistent hashing IS the universal partitioner — K/n keys move, not all K",hostPages:["kafka","schema-registry"],hostReasons:["Kafka partition assignment across brokers, Akamai CDN edge routing, Cassandra shard assignment — all use the SAME hash ring. Adding a node moves 8% of data, not 50%."]},{cardIndex:23,name:"LSM-Tree Compaction",equation:"WA = (L+1)/L",sciences:["data engineering","databases","distributed storage"],insightShort:"LSM compaction IS the universal write amplifier — 1.25× vs B-tree's 4-10×",hostPages:["delta-lake","big-data-ingestion"],hostReasons:["Delta Lake Auto Compaction (18,400→12 files), RocksDB level compaction (L0→L1→L2→L3), Cassandra size-tiered compaction — all use the SAME merge-sort. Write amplification 1.25× vs B-tree's 4-10×."]},{cardIndex:24,name:"Count-Min Sketch",equation:"ê_i = min_j count[j][h_j(i)]",sciences:["streaming","genomics","networking"],insightShort:"CMS IS the universal frequency estimator — 4M× compression, bounded over-estimation",hostPages:["spark-streaming","flink"],hostReasons:["Spark Structured Streaming top-K, genome k-mer frequency counting (repeat detection), network heavy-hitter detection (DDoS) — all use the SAME d×w matrix. 20 KB vs 80 GB for exact hash map."]},{cardIndex:25,name:"Reservoir Sampling",equation:"P(item_i in sample) = k/N",sciences:["streaming","A/B testing","genomics"],insightShort:"Reservoir IS the universal sampler — O(k) memory, uniform sampling from unbounded stream",hostPages:["spark-streaming","streaming-sql"],hostReasons:["Kafka stream event sampling, A/B test cohort selection from live users, GWAS variant subsampling — all use the SAME k/N replace-probability algorithm. O(k) memory regardless of stream length."]},{cardIndex:26,name:"T-Digest",equation:"q̂(p) = merge(centroids)",sciences:["streaming","finance","observability"],insightShort:"T-Digest IS the universal quantile estimator — 80M× compression at the tails",hostPages:["spark-streaming","fintech"],hostReasons:["p99 latency in Spark, p99 VaR in Basel III Monte Carlo, p99 response time in Datadog — all use the SAME centroid-merging algorithm. 1 KB vs 80 GB for exact sorted array."]},{cardIndex:27,name:"Cuckoo Filter",equation:"i2 = i1 XOR hash(fingerprint)",sciences:["databases","networking","caching"],insightShort:"Cuckoo Filter IS Bloom's successor — same membership test, PLUS deletion support",hostPages:["delta-lake"],hostReasons:["Cassandra SSTable with dynamic keys, routing table add/remove, Redis cache invalidation — all need membership test WITH deletion. Bloom can't delete; Cuckoo can."]},{cardIndex:28,name:"Skip List",equation:"P(level L) = (1/2)^L",sciences:["databases","storage","compilers"],insightShort:"Skip List IS the universal ordered structure — O(log n) without tree rebalancing",hostPages:["duckdb"],hostReasons:["Redis ZSET (leaderboard), LevelDB/RocksDB memtable (sorted KV before SSTable flush), LLVM instruction scheduler — all use the SAME probabilistic linking. No rebalancing needed."]}];function r(e){return n.filter(t=>t.hostPages.includes(e))}let o={0:[3,9,19],1:[0,6,7],2:[7,9,13],3:[0,2,8],4:[8,5,16],5:[4,18,8],6:[7,12,1],7:[6,2,16],8:[4,18,16],9:[0,2,19],10:[18,14,12],11:[15,16,17],12:[6,10,7],13:[2,16,15],14:[10,18,17],15:[13,0,11],16:[13,4,7],17:[18,14,9],18:[10,8,17],19:[0,9,6]};function l(e){return o[e]??[]}e.s(["ELEGANT_CODE_MAP",0,n,"cardsOnHostPage",()=>r,"recommendedCards",()=>l],518550);var d=e.i(487486),c=e.i(394908),m=e.i(972520);let p="discovery-path-visited";function h({relatedPages:e=[]}){let[r,o]=(0,s.useState)(()=>{try{let e=localStorage.getItem(p);return e?JSON.parse(e):[]}catch{return[]}});(0,s.useEffect)(()=>{try{let e=localStorage.getItem(p);if(e){let t=JSON.parse(e);setTimeout(()=>o(t),0)}}catch{}},[]);let h=(0,s.useMemo)(()=>{let t=[];if(r.length>0){let e={};for(let t of r)for(let s of l(t))r.includes(s)||(e[s]=(e[s]??0)+1);for(let[s,a]of Object.entries(e).sort((e,t)=>t[1]-e[1]).slice(0,3)){let e=n[Number(s)];e&&t.push({id:"elegant-code",reason:`Explore ${e.name} — recommended by ${a} of your visited cards`,isCousin:!0})}}for(let s of e){if(t.length>=3)break;t.find(e=>e.id===s.id)||t.push({...s,isCousin:!1})}return 0===t.length&&(t.push({id:"elegant-code",reason:"Start with the 20 elegant-code cards",isCousin:!1}),t.push({id:"connections",reason:"See the card → card graph",isCousin:!1}),t.push({id:"resources",reason:"Browse datasets, papers, libraries",isCousin:!1})),t.slice(0,3)},[r,e]);return 0===h.length?null:(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsxs)("p",{className:"text-xs font-semibold text-primary mb-2 flex items-center gap-1.5",children:[(0,t.jsx)(c.Compass,{className:"h-3.5 w-3.5"}),"Next steps — where to go from here",r.length>0&&(0,t.jsxs)("span",{className:"text-[9px] text-muted-foreground ml-1",children:["(",r.length," cards explored)"]})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:h.map((e,s)=>(0,t.jsxs)(a.default,{href:(0,i.hrefFor)(e.id),className:"text-xs text-primary hover:underline flex items-center gap-1",children:[(0,t.jsx)(m.ArrowRight,{className:"h-3 w-3"}),e.reason,e.isCousin&&(0,t.jsx)(d.Badge,{variant:"outline",className:"text-[8px] px-1 py-0 ml-1",children:"cousin"})]},s))})]})}e.s(["NextSteps",()=>h],342046)},332017,e=>{"use strict";var t=e.i(843476),s=e.i(522016),a=e.i(25652),i=e.i(810980),n=e.i(901752);function r({title:e,connectedTo:r,researchHref:o,children:l}){return(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-start gap-2",children:[(0,t.jsx)(a.TrendingUp,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),r&&(0,t.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,t.jsx)(i.BookOpen,{className:"h-3 w-3 text-muted-foreground"}),(0,t.jsxs)(s.default,{href:o??(0,n.hrefFor)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",r," →"]})]})]})]}),(0,t.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:l})]})}function o({pageTitle:e,children:s}){return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,t.jsx)(a.TrendingUp,{className:"h-5 w-5 text-primary"}),(0,t.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,t.jsx)("div",{className:"space-y-3",children:s})]})}e.s(["DeeperThought",()=>r,"DeeperThoughtSection",()=>o])},122836,e=>{"use strict";var t=e.i(843476),s=e.i(271645),a=e.i(678745),a=a,i=e.i(991124),i=i,n=e.i(519455);function r({code:e,language:r="sql",filename:o,highlight:l=[]}){let[d,c]=(0,s.useState)(!1),m=e.replace(/\n$/,"").split("\n"),p=async()=>{try{await navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),1500)}catch{}};return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,t.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:r}),o&&(0,t.jsxs)("span",{className:"text-white/40",children:["· ",o]})]}),(0,t.jsxs)(n.Button,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:p,"aria-label":"Copy code",children:[d?(0,t.jsx)(a.default,{className:"h-3 w-3 mr-1"}):(0,t.jsx)(i.default,{className:"h-3 w-3 mr-1"}),d?"Copied":"Copy"]})]}),(0,t.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,t.jsx)("code",{children:m.map((e,s)=>{let a=s+1,i=l.includes(a);return(0,t.jsxs)("div",{className:["flex",i?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,t.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:a}),(0,t.jsx)("span",{className:"whitespace-pre",children:e||" "})]},a)})})})]})}function o({children:e}){return(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}e.s(["CodeBlock",()=>r,"InlineCode",()=>o],122836)},868054,e=>{"use strict";var t=e.i(249988);e.s(["Terminal",()=>t.default])},716675,e=>{"use strict";var t=e.i(843476),s=e.i(271645),a=e.i(846932),i=e.i(88653),n=e.i(519455),r=e.i(487486),o=e.i(431343),l=e.i(531278),d=e.i(63209),c=e.i(595468),m=e.i(868054);let p=null,h="0.26.2",u=`https://cdn.jsdelivr.net/pyodide/v${h}/full/`;async function g(){return p||(p=(async()=>(await new Promise((e,t)=>{if(window.loadPyodide)return void e();let s=document.createElement("script");s.src=`${u}pyodide.js`,s.onload=()=>e(),s.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(s)}),await window.loadPyodide({indexURL:u})))())}function x({code:e,buttonLabel:p="Run in browser",preamble:u,compact:x=!1,onOutput:f,hideTextOutput:b=!1}){let[y,v]=(0,s.useState)("idle"),[k,w]=(0,s.useState)(""),[S,j]=(0,s.useState)(null),[_,N]=(0,s.useState)(null),T=(0,s.useRef)(null),P=(0,s.useCallback)(async()=>{v("loading"),j(null),w("Loading Pyodide runtime (~10MB)…\n");let t=performance.now();try{let s=await g(),a=Math.round(performance.now()-t);N(a);let i=[],n=e=>{i.push(e)};try{s.setStdout({batched:n}),s.setStderr({batched:n})}catch{try{s.setStdout(n),s.setStderr(n)}catch{}}if(/\bnumpy\b|\bnp\./.test(e)||u&&/\bnumpy\b/.test(u))try{await s.loadPackage("numpy")}catch{}v("running"),w(`Pyodide loaded in ${a}ms. Running…

`),u&&await s.runPythonAsync(u),await s.runPythonAsync(e);let r=i.join("");w(e=>e+(r||"(no output)")),v("done"),f&&f(r)}catch(t){let e=t instanceof Error?t.message:String(t);j(e),v("error"),w(t=>t+`
Error: ${e}`)}},[e,u,f]);return(0,s.useEffect)(()=>{T.current&&(T.current.scrollTop=T.current.scrollHeight)},[k]),(0,t.jsxs)("div",{className:`mt-3 ${x?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)(n.Button,{size:x?"sm":"default",variant:"running"===y||"loading"===y?"outline":"default",className:"gap-1.5",onClick:P,disabled:"loading"===y||"running"===y,children:["loading"===y||"running"===y?(0,t.jsx)(l.Loader2,{className:"h-3.5 w-3.5 animate-spin"}):"done"===y?(0,t.jsx)(c.CheckCircle2,{className:"h-3.5 w-3.5"}):"error"===y?(0,t.jsx)(d.AlertCircle,{className:"h-3.5 w-3.5"}):(0,t.jsx)(o.Play,{className:"h-3.5 w-3.5"}),p]}),!x&&(0,t.jsxs)(r.Badge,{variant:"outline",className:"text-[10px] gap-1",children:[(0,t.jsx)(m.Terminal,{className:"h-2.5 w-2.5"}),"Pyodide v",h]}),null!==_&&"done"===y&&(0,t.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",_,"ms load + execution"]})]}),(0,t.jsx)(i.AnimatePresence,{children:("idle"!==y||k)&&!b&&(0,t.jsx)(a.motion.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,t.jsx)("div",{ref:T,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${S?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,t.jsx)("pre",{className:"whitespace-pre-wrap",children:k})})})})]})}e.s(["PyodideRunner",()=>x])},187500,e=>{"use strict";var t=e.i(843476),s=e.i(522016),a=e.i(862824),i=e.i(342046),n=e.i(122836),r=e.i(716675),o=e.i(901752),l=e.i(487486),d=e.i(332017),c=e.i(283086),m=e.i(966992),p=e.i(39312),h=e.i(25652),u=e.i(868054),g=e.i(455711);let x=[{label:"Generation pattern",value:"Autoregressive",hint:"P(y_t | y_1...y_{t-1}) — next-token prediction",deltaTone:"flat"},{label:"Tokenisation",value:"BPE",hint:"Byte Pair Encoding — subword units",deltaTone:"flat"},{label:"Sampling methods",value:"3",hint:"Greedy · Temperature · Top-k · Top-p (nucleus)",deltaTone:"flat"},{label:"Quality metric",value:"Perplexity",hint:"PP = exp(H) where H = entropy",deltaTone:"flat"}],f=`# BPE (Byte Pair Encoding) — the tokeniser behind GPT/BERT/Claude
# Shows how text is split into subword tokens

# Training: learn merge rules from a corpus
# 1. Start with characters
# 2. Find most frequent pair → merge
# 3. Repeat until vocab_size reached

def train_bpe(corpus, vocab_size=50):
    "Learn BPE merge rules from corpus."
    # Start with characters
    vocab = set()
    word_freqs = {}
    for word in corpus.split():
        chars = tuple(word)
        word_freqs[chars] = word_freqs.get(chars, 0) + 1
        vocab.update(chars)
    
    merges = []
    while len(vocab) < vocab_size:
        # Count adjacent pairs
        pair_counts = {}
        for word, freq in word_freqs.items():
            for i in range(len(word) - 1):
                pair = (word[i], word[i+1])
                pair_counts[pair] = pair_counts.get(pair, 0) + freq
        
        if not pair_counts:
            break
        
        # Find most frequent pair
        best_pair = max(pair_counts, key=pair_counts.get)
        merges.append(best_pair)
        vocab.add(best_pair[0] + best_pair[1])
        
        # Apply merge to corpus
        new_word_freqs = {}
        for word, freq in word_freqs.items():
            new_word = []
            i = 0
            while i < len(word):
                if i < len(word) - 1 and (word[i], word[i+1]) == best_pair:
                    new_word.append(word[i] + word[i+1])
                    i += 2
                else:
                    new_word.append(word[i])
                    i += 1
            new_word_freqs[tuple(new_word)] = new_word_freqs.get(tuple(new_word), 0) + freq
        word_freqs = new_word_freqs
    
    return vocab, merges

# Tokenise: apply learned merges
def tokenize_bpe(text, merges):
    tokens = list(text)
    for merge in merges:
        i = 0
        while i < len(tokens) - 1:
            if (tokens[i], tokens[i+1]) == merge:
                tokens[i:i+2] = [tokens[i] + tokens[i+1]]
            else:
                i += 1
    return tokens

# Demo
corpus = "revenue revenue revenue customer customer churn churn order order order order"
vocab, merges = train_bpe(corpus, vocab_size=20)

print("=" * 60)
print("BPE Tokeniser — Training + Tokenisation Demo")
print("=" * 60)
print(f"\\nCorpus: '{corpus}'")
print(f"\\nLearned merges ({len(merges)}):")
for i, (a, b) in enumerate(merges[:10]):
    print(f"  {i+1}. '{a}' + '{b}' → '{a+b}'")

# Tokenise a new text
text = "revenue customer churn order"
tokens = tokenize_bpe(text, merges)
print(f"\\nTokenise: '{text}'")
print(f"  Tokens: {tokens}")
print(f"  Count: {len(tokens)} tokens for {len(text)} chars")

print(f"\\n{'=' * 60}")
print("In production: GPT-4 uses ~100k BPE merges (tiktoken library).")
print(f"  'revenue' → [rev, enue] (2 tokens)")
print(f"  'customer' → [custom, er] (2 tokens)")
print(f"  Subword units balance vocabulary size with sequence length.")
print("=" * 60)`,b=`# Text Generation — Autoregressive Decoding + Sampling Strategies
# Shows greedy vs temperature vs top-k vs top-p (nucleus) sampling

import math, random

# Simulated logits (pre-softmax scores for next token)
# In a real LLM: logits = transformer(input_tokens) @ W_unembed
logits = {
    "revenue":  3.2,   # high confidence
    "orders":   2.1,
    "customer": 1.5,
    "churn":    0.8,
    "returns":  0.3,
    "inventory":-0.5,
    "supply":  -1.0,
    "marketing":-1.5,
}

def softmax(logits_dict, temp=1.0):
    "Softmax with temperature: p_i = exp(l_i/T) / sum(exp(l_j/T))"
    temp_logits = {k: v / temp for k, v in logits_dict.items()}
    exps = {k: math.exp(v) for v in temp_logits.values()}
    total = sum(exps.values())
    return {k: v / total for k, v in exps.items()}

def sample(probs, method="greedy", k=None, p=None):
    if method == "greedy":
        return max(probs, key=probs.get), probs
    elif method == "temperature":
        return random.choices(list(probs.keys()), weights=probs.values())[0], probs
    elif method == "top-k":
        sorted_p = sorted(probs.items(), key=lambda x: -x[1])[:k]
        top_k = {word: prob for word, prob in sorted_p}
        total = sum(top_k.values())
        top_k = {k: v/total for k, v in top_k.items()}
        return random.choices(list(top_k.keys()), weights=top_k.values())[0], top_k
    elif method == "top-p":
        sorted_p = sorted(probs.items(), key=lambda x: -x[1])
        cumsum = 0
        top_p = {}
        for word, prob in sorted_p:
            cumsum += prob
            top_p[word] = prob
            if cumsum >= p:
                break
        total = sum(top_p.values())
        top_p = {k: v/total for k, v in top_p.items()}
        return random.choices(list(top_p.keys()), weights=top_p.values())[0], top_p

print("=" * 60)
print("Text Generation — Sampling Strategies")
print("=" * 60)

# 1. Greedy (no sampling — pick argmax)
print("\\n--- 1. Greedy (always pick highest) ---")
probs = softmax(logits, temp=1.0)
token, _ = sample(probs, "greedy")
print(f"  Selected: '{token}' (p={probs[token]:.4f})")
print(f"  Always deterministic. Same input → same output.")

# 2. Temperature sampling
print("\\n--- 2. Temperature sampling ---")
for T in [0.5, 1.0, 2.0]:
    probs = softmax(logits, temp=T)
    random.seed(42)
    token = random.choices(list(probs.keys()), weights=probs.values())[0]
    print(f"  T={T}: probs = {dict(sorted(probs.items(), key=lambda x:-x[1])[:3])}")
    print(f"    → sampled: '{token}' (p={probs[token]:.4f})")

print(f"  T→0: greedy (deterministic)")
print(f"  T=1: original distribution")
print(f"  T→∞: uniform (random)")

# 3. Top-k
print("\\n--- 3. Top-k sampling (k=3) ---")
probs = softmax(logits, temp=1.0)
random.seed(42)
token, top_k = sample(probs, "top-k", k=3)
print(f"  Top-3: {dict(sorted(top_k.items(), key=lambda x:-x[1]))}")
print(f"  → sampled: '{token}' (p={top_k[token]:.4f})")
print(f"  Only considers top-k tokens — prevents low-probability 'hallucinations'")

# 4. Top-p (nucleus)
print("\\n--- 4. Top-p / nucleus sampling (p=0.9) ---")
random.seed(42)
token, top_p = sample(probs, "top-p", p=0.9)
print(f"  Nucleus (cumsum≥0.9): {dict(sorted(top_p.items(), key=lambda x:-x[1]))}")
print(f"  → sampled: '{token}' (p={top_p[token]:.4f})")
print(f"  Adaptive: includes more tokens when distribution is flat, fewer when peaked")

# Entropy + Perplexity
print(f"\\n{'=' * 60}")
print("ENTROPY & PERPLEXITY:")
probs = softmax(logits, temp=1.0)
entropy = -sum(p * math.log(p) for p in probs.values() if p > 0)
perplexity = math.exp(entropy)
print(f"  H = -Σ p(x)\xb7log(p(x)) = {entropy:.4f} bits")
print(f"  PP = exp(H) = {perplexity:.2f}")
print(f"  Lower PP = more confident model (less uncertain about next token)")
print(f"  GPT-4 on English text: PP ≈ 4-6 (very confident)")
print(f"  Random model (uniform): PP = {len(logits)} (maximally uncertain)")
print("=" * 60)`;function y(){return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsx)(a.PageHeader,{eyebrow:"Generative AI · patterns",title:"Generative AI Patterns — Autoregressive Decoding & Sampling",description:"The code and math behind text generation: BPE tokeniser training (byte pair encoding), autoregressive decoding P(y_t|y₁...yₜ₋₁), temperature/top-k/top-p sampling, entropy & perplexity. With low-level Python implementations of each algorithm + Pyodide demos that run real BPE training and text generation in the browser. Code-oriented, mathematical, scientific.",right:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)(l.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(c.Sparkles,{className:"h-3 w-3"})," BPE + sampling"]}),(0,t.jsxs)(l.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(p.Zap,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:x.map(e=>(0,t.jsx)(a.KpiCard,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,t.jsx)(a.SectionCard,{title:"Autoregressive decoding — the math",description:"An LLM generates text one token at a time. Each token is sampled from the probability distribution P(y_t | y₁...yₜ₋₁) produced by the Transformer. This is autoregressive — the output feeds back as input.",icon:(0,t.jsx)(g.Brain,{className:"h-5 w-5"}),badge:"mathematics",children:(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-sm text-primary",children:"P(y₁, y₂, ..., yₙ) = ∏ₜ₌₁ⁿ P(yₜ | y₁, ..., yₜ₋₁)"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Joint probability = product of conditional probabilities (chain rule)"})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,t.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"Forward pass per token:"}),(0,t.jsx)("p",{className:"font-mono text-sm ml-2",children:"logits = Transformer(input_ids) @ W_unembed  →  ℝ^vocab"}),(0,t.jsx)("p",{className:"font-mono text-sm ml-2",children:"probs = softmax(logits / T)                  →  ℝ^vocab"}),(0,t.jsx)("p",{className:"font-mono text-sm ml-2",children:"next_token = sample(probs, method)           →  int"}),(0,t.jsx)("p",{className:"font-mono text-sm ml-2",children:"input_ids.append(next_token)                →  autoregressive"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground ml-2 mt-1",children:"W_unembed ∈ ℝ^(d_model × vocab_size) — the output projection (tied with input embedding)"})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,t.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"KV cache optimisation:"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground",children:"At step t, we recompute K,V for ALL previous tokens — O(n²) cost. The KV cache stores K,V from previous steps → O(n) per new token. This is why generation is fast (O(1) per token with KV cache) but attention during training is O(n²)."})]})]})}),(0,t.jsx)(a.SectionCard,{title:"Try it: BPE tokeniser training (Pyodide)",description:"Trains BPE merges on a synthetic corpus, then tokenises new text. Shows the merge rules learned. This is the algorithm behind tiktoken (OpenAI), sentencepiece (Google), and every modern tokeniser.",icon:(0,t.jsx)(u.Terminal,{className:"h-5 w-5"}),badge:"executable",children:(0,t.jsx)(r.PyodideRunner,{code:f,buttonLabel:"Run BPE tokeniser (Pyodide)"})}),(0,t.jsx)(a.SectionCard,{title:"Sampling strategies — temperature, top-k, top-p",description:"After the model produces a probability distribution over the vocabulary, how do we pick the next token? The choice of sampling strategy determines creativity vs determinism.",icon:(0,t.jsx)(m.Cpu,{className:"h-5 w-5"}),children:(0,t.jsx)("div",{className:"space-y-3",children:(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-3",children:[(0,t.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Temperature (T)"}),(0,t.jsx)("p",{className:"font-mono text-xs",children:"p_i = exp(l_i / T) / Σ exp(l_j / T)"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"T→0: greedy (deterministic). T=1: original. T→∞: uniform (random). GPT-4 default: T=0.7."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"Top-k"}),(0,t.jsx)("p",{className:"font-mono text-xs",children:"sample from top-k highest-prob tokens only"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Prevents low-probability tokens. k=40 (GPT-3). k=0 = greedy."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-violet-600 dark:text-violet-400 mb-1",children:"Top-p / Nucleus"}),(0,t.jsx)("p",{className:"font-mono text-xs",children:"sample from smallest set with cumsum ≥ p"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Adaptive: more tokens when flat, fewer when peaked. p=0.9 (typical)."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-cyan-500/40 bg-cyan-500/5 p-3",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-cyan-600 dark:text-cyan-400 mb-1",children:"Entropy & Perplexity"}),(0,t.jsx)("p",{className:"font-mono text-xs",children:"H = -Σ p(x)·log p(x),  PP = exp(H)"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"H measures uncertainty. PP = effective vocabulary size. GPT-4: PP≈4-6. Random: PP=vocab_size."})]})]})})}),(0,t.jsx)(a.SectionCard,{title:"Try it: Text generation simulation — all 4 sampling methods (Pyodide)",description:"Shows greedy, temperature (T=0.5/1.0/2.0), top-k (k=3), and top-p (p=0.9) on the same logits. Computes entropy + perplexity. Real softmax + sampling computation in the browser.",icon:(0,t.jsx)(u.Terminal,{className:"h-5 w-5"}),badge:"executable",children:(0,t.jsx)(r.PyodideRunner,{code:b,buttonLabel:"Run text generation demo (Pyodide)"})}),(0,t.jsx)(a.SectionCard,{title:"Low-level code: autoregressive generation loop (PyTorch)",description:"The actual loop that generates text in production. KV cache + sampling + stopping criteria. This is what runs inside model.generate() in HuggingFace transformers.",icon:(0,t.jsx)(m.Cpu,{className:"h-5 w-5"}),badge:"low-level",children:(0,t.jsx)(n.CodeBlock,{language:"python",filename:"generate.py",highlight:[6,7,8,11,12,13,16,17,18,21,22,23,24,25,26,27,28,29,30,33,34,35],code:`import torch
import torch.nn.functional as F

def generate(model, input_ids, max_new_tokens=100, temperature=0.7,
             top_k=None, top_p=0.9):
    """Autoregressive text generation with KV cache + sampling."""
    model.eval()
    
    with torch.no_grad():
        # Initial forward pass — compute KV cache
        logits = model(input_ids)
        # logits: (batch, seq, vocab_size)
        
        for _ in range(max_new_tokens):
            # Get logits for the LAST token only (KV cache: O(1) per step)
            next_logits = logits[:, -1, :]  # (batch, vocab_size)
            
            # Temperature scaling
            next_logits = next_logits / temperature
            
            # Top-k filtering
            if top_k is not None:
                v, _ = torch.topk(next_logits, top_k)
                next_logits[next_logits < v[:, [-1]]] = float('-inf')
            
            # Top-p (nucleus) filtering
            if top_p is not None:
                sorted_logits, sorted_indices = torch.sort(next_logits, descending=True)
                cumulative_probs = F.softmax(sorted_logits, dim=-1).cumsum(dim=-1)
                sorted_indices_to_remove = cumulative_probs > top_p
                sorted_indices_to_remove[:, 0] = False  # keep at least 1
                indices_to_remove = sorted_indices_to_remove.scatter(
                    1, sorted_indices, sorted_indices_to_remove)
                next_logits[indices_to_remove] = float('-inf')
            
            # Sample
            probs = F.softmax(next_logits, dim=-1)
            next_token = torch.multinomial(probs, num_samples=1)
            
            # Append to sequence (autoregressive)
            input_ids = torch.cat([input_ids, next_token], dim=-1)
            
            # Forward pass with KV cache (only the new token)
            logits = model(next_token)  # uses cached K,V
            
            # Stop on EOS token
            if next_token.item() == eos_token_id:
                break
    
    return input_ids

# Usage
input_ids = tokenizer("The UK revenue", return_tensors="pt").input_ids
output = generate(model, input_ids, temperature=0.7, top_k=40, top_p=0.9)
print(tokenizer.decode(output[0]))`})}),(0,t.jsx)(a.SectionCard,{title:"My deeper thought: generation IS iterative Bayesian inference",description:"Autoregressive decoding is iterative Bayesian inference. Each step updates the posterior P(y_t | y₁...yₜ₋₁) based on the evidence (previous tokens).",icon:(0,t.jsx)(h.TrendingUp,{className:"h-5 w-5"}),badge:"Insight",children:(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:["Autoregressive decoding P(y₁...yₙ) = ∏ₜ P(yₜ | y₁...yₜ₋₁) is the ",(0,t.jsx)("strong",{className:"text-foreground/80",children:"chain rule of probability"})," applied to sequence generation. Each step is a Bayesian update: the prior (model's learned distribution) is updated by the evidence (tokens generated so far) to produce the posterior P(yₜ | context). Temperature scaling is annealing — high T early (explore), low T late (exploit)."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"This connects to the platform's RL systems:"})," the Thompson sampling bandit (ADR-019) is a 1-step version of this — it samples from a Beta posterior at each step. Text generation is a multi-step version — it samples from a categorical posterior at each token. The bandit and the LLM use the same mathematical structure: posterior → sample → update. The bandit updates its Beta(α, β) parameters; the LLM updates its context window (KV cache)."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"The BPE tokeniser is the bridge between human language and the model's discrete space."})," Characters → subwords → tokens → embedding vectors. BPE learns the optimal granularity: too fine (characters) = long sequences = slow generation. Too coarse (whole words) = huge vocabulary = sparse embeddings. BPE finds the sweet spot — frequent words are single tokens, rare words are decomposed into subwords. This is the same trade-off as the platform's Medallion architecture: Bronze (raw) vs Gold (aggregated) — find the right granularity for the task."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"The unified semantic layer (ADR-024) is the generation's grounding."}),' Without grounding, the LLM generates fluent but hallucinated SQL. With MetricFlow entities + RAG context, the generation is constrained — the model can only generate tokens that reference entities the semantic layer knows. This is the same as top-k sampling constraining the vocabulary: the semantic layer constrains the "vocabulary" of valid SQL entities. Grounded generation IS constrained decoding.']})]})}),(0,t.jsxs)(d.DeeperThoughtSection,{pageTitle:"Generative AI Patterns",children:[(0,t.jsx)(d.DeeperThought,{title:"Generative AI Patterns IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,t.jsx)("p",{children:"This page about Generative AI Patterns is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Generative AI Patterns connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Generative AI Patterns sits in the computational-science landscape."})}),(0,t.jsx)(d.DeeperThought,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,t.jsx)("p",{children:"In a decade, the specific tools on this page (Generative AI Patterns) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,t.jsx)(d.DeeperThought,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,t.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,t.jsx)(d.DeeperThought,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,t.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,t.jsx)(d.DeeperThought,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,t.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,t.jsx)(i.NextSteps,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"transformer",reason:"Continue to transformer — see also from this page"},{id:"fine-tuning",reason:"Continue to fine tuning — see also from this page"}]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(s.default,{href:(0,o.hrefFor)("transformer"),className:"text-sm text-primary hover:underline",children:"→ Transformer (the model that generates)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(s.default,{href:(0,o.hrefFor)("fine-tuning"),className:"text-sm text-primary hover:underline",children:"→ Fine-Tuning (adapting the model)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(s.default,{href:(0,o.hrefFor)("comp-sci-materials"),className:"text-sm text-primary hover:underline",children:"→ Computational Science (the hardware)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(s.default,{href:(0,o.hrefFor)("rag-llms"),className:"text-sm text-primary hover:underline",children:"→ RAG (grounding the generation)"})]})]})}e.s(["GenAiPatternsPage",()=>y])}]);