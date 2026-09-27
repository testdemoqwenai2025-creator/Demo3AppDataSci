(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63209,e=>{"use strict";var t=e.i(361653);e.s(["AlertCircle",()=>t.default])},431343,595468,e=>{"use strict";var t=e.i(451477);e.s(["Play",()=>t.default],431343);var s=e.i(123287);e.s(["CheckCircle2",()=>s.default],595468)},862824,515288,e=>{"use strict";var t=e.i(843476),s=e.i(975157);function r({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,s.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...r})}function n({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,s.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...r})}function a({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,s.cn)("leading-none font-semibold",e),...r})}function o({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,s.cn)("text-muted-foreground text-sm",e),...r})}function i({className:e,...r}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,s.cn)("px-6",e),...r})}e.s(["Card",()=>r,"CardContent",()=>i,"CardDescription",()=>o,"CardHeader",()=>n,"CardTitle",()=>a],515288);var c=e.i(487486);function d({title:e,description:s,icon:d,badge:l,badgeVariant:m="outline",children:h,className:u,contentClassName:p}){return(0,t.jsxs)(r,{className:["border-border/60",u].filter(Boolean).join(" "),children:[(e||s)&&(0,t.jsxs)(n,{className:"flex flex-row items-start gap-3 space-y-0 border-b border-border/60 bg-muted/30",children:[d&&(0,t.jsx)("div",{className:"mt-0.5 text-primary",children:d}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[e&&(0,t.jsx)(a,{className:"text-base",children:e}),l&&(0,t.jsx)(c.Badge,{variant:m,className:"text-[10px]",children:l})]}),s&&(0,t.jsx)(o,{className:"mt-1 text-xs",children:s})]})]}),(0,t.jsx)(i,{className:["p-4 md:p-5",p].filter(Boolean).join(" "),children:h})]})}function l({eyebrow:e,title:s,description:r,right:n}){return(0,t.jsxs)("div",{className:"mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4",children:[(0,t.jsxs)("div",{children:[e&&(0,t.jsx)("p",{className:"text-[11px] font-semibold uppercase tracking-widest text-primary/80 mb-1.5",children:e}),(0,t.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold tracking-tight text-balance",children:s}),r&&(0,t.jsx)("p",{className:"mt-2 text-sm md:text-base text-muted-foreground max-w-3xl text-pretty",children:r})]}),n&&(0,t.jsx)("div",{className:"shrink-0",children:n})]})}function m({label:e,value:s,delta:n,deltaTone:a="flat",hint:o}){return(0,t.jsx)(r,{className:"border-border/60",children:(0,t.jsxs)(i,{className:"p-4",children:[(0,t.jsx)("p",{className:"text-[11px] uppercase tracking-wider text-muted-foreground",children:e}),(0,t.jsx)("p",{className:"mt-1 text-2xl font-semibold tabular-nums",children:s}),(0,t.jsxs)("div",{className:"mt-1 flex items-center gap-2",children:[n&&(0,t.jsx)("span",{className:`text-xs ${"up"===a?"text-emerald-600 dark:text-emerald-400":"down"===a?"text-rose-600 dark:text-rose-400":"text-muted-foreground"}`,children:n}),o&&(0,t.jsx)("span",{className:"text-[11px] text-muted-foreground",children:o})]})]})})}e.s(["KpiCard",()=>m,"PageHeader",()=>l,"SectionCard",()=>d],862824)},342046,518550,e=>{"use strict";var t=e.i(843476),s=e.i(271645),r=e.i(522016),n=e.i(901752);let a=[{cardIndex:0,name:"SVD",equation:"A = UΣV^T",sciences:["genomics","audio","finance"],insightShort:"SVD IS the Fourier transform for data",hostPages:["numpy-scipy"],hostReasons:["SVD IS NumPy's universal decomposer — np.linalg.svd → PCA for genomics, audio compression, Fama-French risk factors."]},{cardIndex:1,name:"Attention",equation:"softmax(QK^T/√d_k) × V",sciences:["protein folding","NLP"],insightShort:"Attention IS natural selection",hostPages:["transformer-deep-dive"],hostReasons:["DNA IS a language — softmax(QK^T/√d_k)×V parses both proteins (AlphaFold2) and English (GPT-4) because both are correlation detection."]},{cardIndex:2,name:"Poisson",equation:"P(k) = λ^k e^(-λ) / k!",sciences:["sequencing","networks","decay"],insightShort:"Poisson IS the law of rare events",hostPages:["bioinformatics-pipelines"],hostReasons:["GATK variant calling depth IS Poisson(λ=mean coverage) — same distribution that sizes server clusters and radioactive sources."]},{cardIndex:3,name:"FFT",equation:"X[k] = Σ x[n] e^(-2πikn/N)",sciences:["mass spec","audio","cryo-EM"],insightShort:"FFT IS the change of basis",hostPages:["numpy-scipy"],hostReasons:["np.fft.fft is the SAME operation whether you're finding the m/z of a compound, the C-note in a chord, or the 3D structure of a ribosome."]},{cardIndex:4,name:"Verlet",equation:"r(t+Δt) = 2r(t) - r(t-Δt) + F/m·Δt²",sciences:["MD","games","orbits"],insightShort:"Verlet IS time-reversal symmetry",hostPages:["computational-biology"],hostReasons:["AMBER, Havok, and NASA JPL all call this exact integrator — symplectic, energy-conserving, time-reversible. The MD integrator IS the game physics integrator."]},{cardIndex:5,name:"Navier-Stokes",equation:"∂u/∂t + u·∇u = -∇p/ρ + ν∇²u",sciences:["weather","blood","turbulence"],insightShort:"Navier-Stokes IS the universe's flow equation",hostPages:["computational-physics"],hostReasons:["CFD on this PDE predicts hurricanes, aneurysm risk, and wing stall — the SAME nonlinearity makes weather unpredictable and turbulence beautiful."]},{cardIndex:6,name:"Gradient Descent",equation:"θ(t+1) = θ(t) - η∇L(θ)",sciences:["ML","evolution","thermodynamics"],insightShort:"Gradient Descent IS the learning rule",hostPages:["tabular"],hostReasons:["Gradient boosting = gradient descent on trees; GPT-4 training, natural selection, and protein folding all minimise a landscape with the SAME update rule."]},{cardIndex:7,name:"Bayes",equation:"P(H|D) = P(D|H)P(H) / P(D)",sciences:["genetics","spam","quantum"],insightShort:"Bayes IS the belief updater",hostPages:["alphamissense"],hostReasons:["AlphaMissense classifying a VUS IS Gmail classifying spam IS a Stern–Gerlach measurement — all three update P(H) given D."]},{cardIndex:8,name:"Euler's Method",equation:"y(t+Δt) = y(t) + f(t,y)·Δt",sciences:["orbital mechanics","games","finance"],insightShort:"Euler IS the seed of all simulation",hostPages:["space-science"],hostReasons:["Satellite trajectory propagation (NASA GMAT), game-engine fixed-step physics (Unity), and Black-Scholes Monte Carlo all START from this one-line integrator."]},{cardIndex:9,name:"Entropy",equation:"H = -Σ p log p",sciences:["information","thermodynamics","genetics"],insightShort:"Entropy IS the universal currency of disorder",hostPages:["systems-biology"],hostReasons:["Shannon measured message information, Boltzmann gas disorder, Haldane population heterozygosity — the SAME formula because all three quantify how spread out a distribution is."]},{cardIndex:10,name:"Black-Scholes",equation:"C = S·N(d1) − K·e^(−rT)·N(d2)",sciences:["fintech","maritime","genetics"],insightShort:"Black-Scholes IS the universal option-pricing equation",hostPages:["fintech"],hostReasons:["A Lloyd's underwriter pricing a 90-day cargo option, a CME quant pricing an SPX call, and a Fisher geneticist pricing an allele-substitution option all evaluate the SAME formula — the right-but-not-obligation to act on a stochastic payoff."]},{cardIndex:11,name:"Haversine",equation:"d = 2R·arcsin(√(...))",sciences:["maritime","aviation","astronomy"],insightShort:"Haversine IS the universal great-circle distance",hostPages:["global-shipping"],hostReasons:["Rotterdam→Singapore sailing distance, LHR→JFK flight distance, and Sirius→Canopus angular separation all use the SAME formula — shortest-path distance on a sphere, invented 1805 (Bowring)."]},{cardIndex:12,name:"Kelly Criterion",equation:"f* = (bp − q)/b = μ/σ²",sciences:["fintech","genetics","RL"],insightShort:"Kelly IS the universal bet-sizing equation",hostPages:["fintech"],hostReasons:["Ed Thorp's blackjack team (1960s), Jim Simons' Medallion Fund (1989-2024, 65% CAGR), Haldane's allele fixation (1927), and Thompson sampling (RL) all derive the SAME optimal bet size f* = μ/σ² because they all maximize expected log-growth."]},{cardIndex:13,name:"Markov Chain",equation:"π(t+1) = π(t)·P",sciences:["genetics","fintech","maritime"],insightShort:"Markov IS the universal state-transition equation",hostPages:["global-shipping","bioinformatics"],hostReasons:["Jukes-Cantor DNA substitution (1969), Moody's credit transitions (10⁶ bonds), and AIS port-state transitions (100K vessels) all use the SAME matrix update — the memoryless property is universal."]},{cardIndex:14,name:"Value at Risk",equation:"VaR_α = −(μ + z_α·σ)",sciences:["fintech","maritime","climate"],insightShort:"VaR IS the universal tail-risk equation",hostPages:["fintech","global-shipping"],hostReasons:["JPMorgan's 1-day 99% VaR ($4T balance, Basel III), Lloyd's 7-day 95% VaR ($50B hull, Solvency II), and NOAA 100-year flood VaR (FEMA FIRMs) all use the SAME quantile — every loss distribution has an inverse CDF."]},{cardIndex:15,name:"PageRank",equation:"PR(p) = (1-d) + d·Σ(PR(q)/L(q))",sciences:["fintech","maritime","genetics"],insightShort:"PageRank IS the universal centrality equation",hostPages:["global-shipping","systems-biology"],hostReasons:["BIS systemic risk (Lehman PR ≈ 0.012), UN COMTRADE port chokepoint (Rotterdam PR ≈ 0.020), and STRING gene essentiality (TP53 PR ≈ 0.025) all use the SAME eigenvector — Brin & Page 1998 for the web, now spanning banking, trade, and genomics."]},{cardIndex:16,name:"Kalman Filter",equation:"x̂(t+1) = x̂(t) + K·(z − H·x̂(t))",sciences:["maritime","aviation","genetics"],insightShort:"Kalman IS the universal state-estimation equation",hostPages:["global-shipping"],hostReasons:["AIS vessel tracking (100K vessels × 60s), ADS-B flight tracking (100K flights × 1s), and 1000-Genomes allele frequency tracking all use the SAME Bayesian update — Kalman 1960 invented this for Apollo navigation."]},{cardIndex:17,name:"Monte Carlo",equation:"E[f(X)] ≈ (1/N)·Σ f(X_i)",sciences:["fintech","maritime","genetics"],insightShort:"Monte Carlo IS the universal estimation equation",hostPages:["fintech","global-shipping","monte-carlo"],hostReasons:["Option pricing (10⁶ GBM paths), port congestion (10⁵ vessel sims), and rare-variant permutation tests (10⁶ permutations) all use the SAME averaging — Metropolis 1946 invented this at Los Alamos for neutron transport."]},{cardIndex:18,name:"Geometric Brownian Motion",equation:"dS = μS·dt + σS·dW",sciences:["fintech","maritime","genetics"],insightShort:"GBM IS the universal multiplicative-noise equation",hostPages:["fintech","global-shipping"],hostReasons:["SPX daily returns (Black-Scholes foundation), Rotterdam container dwell times, and Wright-Fisher allele drift all use the SAME SDE — multiplicative noise keeps S positive with log-normal stationarity."]},{cardIndex:19,name:"Lloyd's Algorithm",equation:"μ_k ← mean({x : argmin_k ‖x − μ_k‖²})",sciences:["maritime","genetics","ML"],insightShort:"Lloyd IS the universal clustering equation",hostPages:["global-shipping","systems-biology"],hostReasons:["50K ports clustered by trade flows (UN COMTRADE), 2504 individuals clustered by SNP PCA (1000-Genomes), and 1.4M images clustered by ResNet-50 (ImageNet) all use the SAME iterate — Lloyd 1957 invented this at Bell Labs for PCM."]},{cardIndex:20,name:"HyperLogLog",equation:"E = α_m m² (Σ 2^(-M_j))^(-1)",sciences:["data engineering","genomics","network security"],insightShort:"HLL IS the universal counter — 33M× memory compression with <1% error",hostPages:["big-data-ingestion"],hostReasons:["COUNT(DISTINCT user_id) in Snowflake/Spark, unique k-mers in Jellyfish (genome assembler), unique source IPs in Redis PFCOUNT (DDoS monitor) — all run the SAME hash→bucket→max-zeros→harmonic-mean algorithm. 12 KB vs 400 GB for exact counting."]},{cardIndex:21,name:"Bloom Filter",equation:"P(fp) = (1 - e^(-kn/m))^k",sciences:["network security","genomics","databases"],insightShort:"Bloom filter IS the universal membership test — 23× compression with 0.1% false positives",hostPages:["kafka-connect","delta-lake"],hostReasons:["Chrome Safe Browsing (malware URL check), genome assembler read dedup, RocksDB SSTable key lookup — all use the SAME k-hash→bit-set→AND-check. 175 MB vs 4 GB for exact hash set."]},{cardIndex:22,name:"Consistent Hashing",equation:"θ = hash(key) mod 2^256",sciences:["streaming","CDN","databases"],insightShort:"Consistent hashing IS the universal partitioner — K/n keys move, not all K",hostPages:["kafka","schema-registry"],hostReasons:["Kafka partition assignment across brokers, Akamai CDN edge routing, Cassandra shard assignment — all use the SAME hash ring. Adding a node moves 8% of data, not 50%."]},{cardIndex:23,name:"LSM-Tree Compaction",equation:"WA = (L+1)/L",sciences:["data engineering","databases","distributed storage"],insightShort:"LSM compaction IS the universal write amplifier — 1.25× vs B-tree's 4-10×",hostPages:["delta-lake","big-data-ingestion"],hostReasons:["Delta Lake Auto Compaction (18,400→12 files), RocksDB level compaction (L0→L1→L2→L3), Cassandra size-tiered compaction — all use the SAME merge-sort. Write amplification 1.25× vs B-tree's 4-10×."]},{cardIndex:24,name:"Count-Min Sketch",equation:"ê_i = min_j count[j][h_j(i)]",sciences:["streaming","genomics","networking"],insightShort:"CMS IS the universal frequency estimator — 4M× compression, bounded over-estimation",hostPages:["spark-streaming","flink"],hostReasons:["Spark Structured Streaming top-K, genome k-mer frequency counting (repeat detection), network heavy-hitter detection (DDoS) — all use the SAME d×w matrix. 20 KB vs 80 GB for exact hash map."]},{cardIndex:25,name:"Reservoir Sampling",equation:"P(item_i in sample) = k/N",sciences:["streaming","A/B testing","genomics"],insightShort:"Reservoir IS the universal sampler — O(k) memory, uniform sampling from unbounded stream",hostPages:["spark-streaming","streaming-sql"],hostReasons:["Kafka stream event sampling, A/B test cohort selection from live users, GWAS variant subsampling — all use the SAME k/N replace-probability algorithm. O(k) memory regardless of stream length."]},{cardIndex:26,name:"T-Digest",equation:"q̂(p) = merge(centroids)",sciences:["streaming","finance","observability"],insightShort:"T-Digest IS the universal quantile estimator — 80M× compression at the tails",hostPages:["spark-streaming","fintech"],hostReasons:["p99 latency in Spark, p99 VaR in Basel III Monte Carlo, p99 response time in Datadog — all use the SAME centroid-merging algorithm. 1 KB vs 80 GB for exact sorted array."]},{cardIndex:27,name:"Cuckoo Filter",equation:"i2 = i1 XOR hash(fingerprint)",sciences:["databases","networking","caching"],insightShort:"Cuckoo Filter IS Bloom's successor — same membership test, PLUS deletion support",hostPages:["delta-lake"],hostReasons:["Cassandra SSTable with dynamic keys, routing table add/remove, Redis cache invalidation — all need membership test WITH deletion. Bloom can't delete; Cuckoo can."]},{cardIndex:28,name:"Skip List",equation:"P(level L) = (1/2)^L",sciences:["databases","storage","compilers"],insightShort:"Skip List IS the universal ordered structure — O(log n) without tree rebalancing",hostPages:["duckdb"],hostReasons:["Redis ZSET (leaderboard), LevelDB/RocksDB memtable (sorted KV before SSTable flush), LLVM instruction scheduler — all use the SAME probabilistic linking. No rebalancing needed."]}];function o(e){return a.filter(t=>t.hostPages.includes(e))}let i={0:[3,9,19],1:[0,6,7],2:[7,9,13],3:[0,2,8],4:[8,5,16],5:[4,18,8],6:[7,12,1],7:[6,2,16],8:[4,18,16],9:[0,2,19],10:[18,14,12],11:[15,16,17],12:[6,10,7],13:[2,16,15],14:[10,18,17],15:[13,0,11],16:[13,4,7],17:[18,14,9],18:[10,8,17],19:[0,9,6]};function c(e){return i[e]??[]}e.s(["ELEGANT_CODE_MAP",0,a,"cardsOnHostPage",()=>o,"recommendedCards",()=>c],518550);var d=e.i(487486),l=e.i(394908),m=e.i(972520);let h="discovery-path-visited";function u({relatedPages:e=[]}){let[o,i]=(0,s.useState)(()=>{try{let e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{return[]}});(0,s.useEffect)(()=>{try{let e=localStorage.getItem(h);if(e){let t=JSON.parse(e);setTimeout(()=>i(t),0)}}catch{}},[]);let u=(0,s.useMemo)(()=>{let t=[];if(o.length>0){let e={};for(let t of o)for(let s of c(t))o.includes(s)||(e[s]=(e[s]??0)+1);for(let[s,r]of Object.entries(e).sort((e,t)=>t[1]-e[1]).slice(0,3)){let e=a[Number(s)];e&&t.push({id:"elegant-code",reason:`Explore ${e.name} — recommended by ${r} of your visited cards`,isCousin:!0})}}for(let s of e){if(t.length>=3)break;t.find(e=>e.id===s.id)||t.push({...s,isCousin:!1})}return 0===t.length&&(t.push({id:"elegant-code",reason:"Start with the 20 elegant-code cards",isCousin:!1}),t.push({id:"connections",reason:"See the card → card graph",isCousin:!1}),t.push({id:"resources",reason:"Browse datasets, papers, libraries",isCousin:!1})),t.slice(0,3)},[o,e]);return 0===u.length?null:(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsxs)("p",{className:"text-xs font-semibold text-primary mb-2 flex items-center gap-1.5",children:[(0,t.jsx)(l.Compass,{className:"h-3.5 w-3.5"}),"Next steps — where to go from here",o.length>0&&(0,t.jsxs)("span",{className:"text-[9px] text-muted-foreground ml-1",children:["(",o.length," cards explored)"]})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:u.map((e,s)=>(0,t.jsxs)(r.default,{href:(0,n.hrefFor)(e.id),className:"text-xs text-primary hover:underline flex items-center gap-1",children:[(0,t.jsx)(m.ArrowRight,{className:"h-3 w-3"}),e.reason,e.isCousin&&(0,t.jsx)(d.Badge,{variant:"outline",className:"text-[8px] px-1 py-0 ml-1",children:"cousin"})]},s))})]})}e.s(["NextSteps",()=>u],342046)},332017,e=>{"use strict";var t=e.i(843476),s=e.i(522016),r=e.i(25652),n=e.i(810980),a=e.i(901752);function o({title:e,connectedTo:o,researchHref:i,children:c}){return(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-start gap-2",children:[(0,t.jsx)(r.TrendingUp,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),o&&(0,t.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,t.jsx)(n.BookOpen,{className:"h-3 w-3 text-muted-foreground"}),(0,t.jsxs)(s.default,{href:i??(0,a.hrefFor)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",o," →"]})]})]})]}),(0,t.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:c})]})}function i({pageTitle:e,children:s}){return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,t.jsx)(r.TrendingUp,{className:"h-5 w-5 text-primary"}),(0,t.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,t.jsx)("div",{className:"space-y-3",children:s})]})}e.s(["DeeperThought",()=>o,"DeeperThoughtSection",()=>i])},122836,e=>{"use strict";var t=e.i(843476),s=e.i(271645),r=e.i(678745),r=r,n=e.i(991124),n=n,a=e.i(519455);function o({code:e,language:o="sql",filename:i,highlight:c=[]}){let[d,l]=(0,s.useState)(!1),m=e.replace(/\n$/,"").split("\n"),h=async()=>{try{await navigator.clipboard.writeText(e),l(!0),setTimeout(()=>l(!1),1500)}catch{}};return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,t.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:o}),i&&(0,t.jsxs)("span",{className:"text-white/40",children:["· ",i]})]}),(0,t.jsxs)(a.Button,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:h,"aria-label":"Copy code",children:[d?(0,t.jsx)(r.default,{className:"h-3 w-3 mr-1"}):(0,t.jsx)(n.default,{className:"h-3 w-3 mr-1"}),d?"Copied":"Copy"]})]}),(0,t.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,t.jsx)("code",{children:m.map((e,s)=>{let r=s+1,n=c.includes(r);return(0,t.jsxs)("div",{className:["flex",n?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,t.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:r}),(0,t.jsx)("span",{className:"whitespace-pre",children:e||" "})]},r)})})})]})}function i({children:e}){return(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}e.s(["CodeBlock",()=>o,"InlineCode",()=>i],122836)},868054,e=>{"use strict";var t=e.i(249988);e.s(["Terminal",()=>t.default])},716675,e=>{"use strict";var t=e.i(843476),s=e.i(271645),r=e.i(846932),n=e.i(88653),a=e.i(519455),o=e.i(487486),i=e.i(431343),c=e.i(531278),d=e.i(63209),l=e.i(595468),m=e.i(868054);let h=null,u="0.26.2",p=`https://cdn.jsdelivr.net/pyodide/v${u}/full/`;async function g(){return h||(h=(async()=>(await new Promise((e,t)=>{if(window.loadPyodide)return void e();let s=document.createElement("script");s.src=`${p}pyodide.js`,s.onload=()=>e(),s.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(s)}),await window.loadPyodide({indexURL:p})))())}function f({code:e,buttonLabel:h="Run in browser",preamble:p,compact:f=!1,onOutput:x,hideTextOutput:b=!1}){let[v,y]=(0,s.useState)("idle"),[k,_]=(0,s.useState)(""),[N,j]=(0,s.useState)(null),[S,w]=(0,s.useState)(null),R=(0,s.useRef)(null),q=(0,s.useCallback)(async()=>{y("loading"),j(null),_("Loading Pyodide runtime (~10MB)…\n");let t=performance.now();try{let s=await g(),r=Math.round(performance.now()-t);w(r);let n=[],a=e=>{n.push(e)};try{s.setStdout({batched:a}),s.setStderr({batched:a})}catch{try{s.setStdout(a),s.setStderr(a)}catch{}}if(/\bnumpy\b|\bnp\./.test(e)||p&&/\bnumpy\b/.test(p))try{await s.loadPackage("numpy")}catch{}y("running"),_(`Pyodide loaded in ${r}ms. Running…

`),p&&await s.runPythonAsync(p),await s.runPythonAsync(e);let o=n.join("");_(e=>e+(o||"(no output)")),y("done"),x&&x(o)}catch(t){let e=t instanceof Error?t.message:String(t);j(e),y("error"),_(t=>t+`
Error: ${e}`)}},[e,p,x]);return(0,s.useEffect)(()=>{R.current&&(R.current.scrollTop=R.current.scrollHeight)},[k]),(0,t.jsxs)("div",{className:`mt-3 ${f?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)(a.Button,{size:f?"sm":"default",variant:"running"===v||"loading"===v?"outline":"default",className:"gap-1.5",onClick:q,disabled:"loading"===v||"running"===v,children:["loading"===v||"running"===v?(0,t.jsx)(c.Loader2,{className:"h-3.5 w-3.5 animate-spin"}):"done"===v?(0,t.jsx)(l.CheckCircle2,{className:"h-3.5 w-3.5"}):"error"===v?(0,t.jsx)(d.AlertCircle,{className:"h-3.5 w-3.5"}):(0,t.jsx)(i.Play,{className:"h-3.5 w-3.5"}),h]}),!f&&(0,t.jsxs)(o.Badge,{variant:"outline",className:"text-[10px] gap-1",children:[(0,t.jsx)(m.Terminal,{className:"h-2.5 w-2.5"}),"Pyodide v",u]}),null!==S&&"done"===v&&(0,t.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",S,"ms load + execution"]})]}),(0,t.jsx)(n.AnimatePresence,{children:("idle"!==v||k)&&!b&&(0,t.jsx)(r.motion.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,t.jsx)("div",{ref:R,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${N?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,t.jsx)("pre",{className:"whitespace-pre-wrap",children:k})})})})]})}e.s(["PyodideRunner",()=>f])},687130,e=>{"use strict";var t=e.i(313692);e.s(["Filter",()=>t.default])},25287,e=>{"use strict";var t=e.i(843476),s=e.i(271645),r=e.i(846932),n=e.i(522016),a=e.i(862824),o=e.i(342046),i=e.i(122836),c=e.i(716675),d=e.i(901752),l=e.i(487486),m=e.i(332017),h=e.i(966992),u=e.i(39312),p=e.i(25652),g=e.i(868054),f=e.i(455711),x=e.i(555436),b=e.i(178583),v=e.i(687130);let y=[{label:"Chunk size",value:"512 tokens",hint:"tiktoken-aware, overlap=64 (sliding)",deltaTone:"flat"},{label:"Hybrid retrieval",value:"BM25 ‖ vector",hint:"Parallel sparse + dense, RRF fusion",deltaTone:"flat"},{label:"RRF formula",value:"Σ 1/(60 + rank)",hint:"Reciprocal Rank Fusion (k=60)",deltaTone:"flat"},{label:"Cross-encoder",value:"MS MARCO MiniLM",hint:"Re-rank top-50 → top-5 (~250ms)",deltaTone:"flat"}];function k(){let[e,n]=(0,s.useState)(0);(0,s.useEffect)(()=>{let e=setInterval(()=>n(e=>(e+1)%5),1200);return()=>clearInterval(e)},[]);let a=Array.from({length:10},(e,t)=>`c${t+1}`),o=[2,5,1,7,0,4,6,9,3,8],i=[3,0,6,1,8,5,4,2,9,7];return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,t.jsx)("style",{children:`
        .rh-3d { perspective: 900px; }
        .rh-stage { transform: rotateX(15deg); transform-style: preserve-3d; }
      `}),(0,t.jsxs)("p",{className:"text-sm font-semibold mb-3 flex items-center gap-2",children:[(0,t.jsx)(v.Filter,{className:"h-4 w-4 text-primary"}),"Three-stage hybrid RAG pipeline",(0,t.jsxs)("span",{className:"text-[10px] font-mono text-muted-foreground ml-auto",children:["phase ",e+1,"/5"]})]}),(0,t.jsx)("div",{className:"rh-3d",children:(0,t.jsxs)("div",{className:"rh-stage space-y-3",children:[(0,t.jsxs)(r.motion.div,{animate:{opacity:0===e?1:.5},className:"rounded-md border border-primary/40 bg-primary/5 p-2.5",children:[(0,t.jsx)("p",{className:"text-[10px] font-mono text-primary mb-1.5",children:"Phase 1: Chunking (RecursiveCharacterTextSplitter, 512 tokens, overlap=64)"}),(0,t.jsx)("div",{className:"flex gap-1 flex-wrap",children:a.map((s,n)=>(0,t.jsx)(r.motion.div,{animate:{scale:0===e?1.05:1},className:"px-2 py-1 rounded text-[9px] font-mono border border-border/60 bg-background",children:s},s))}),(0,t.jsx)("p",{className:"text-[9px] text-muted-foreground mt-1.5",children:"10 chunks → embed each → store in pgvector (vector + tsvector)"})]}),(0,t.jsxs)(r.motion.div,{animate:{opacity:1===e?1:.5},className:"grid grid-cols-2 gap-2",children:[(0,t.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"text-[10px] font-mono text-emerald-600 dark:text-emerald-400 mb-1.5",children:"BM25 (sparse, exact-match)"}),(0,t.jsx)("div",{className:"space-y-0.5",children:o.slice(0,5).map((s,n)=>(0,t.jsxs)(r.motion.div,{animate:{opacity:e>=1?1:.3,x:1===e?0:-10},className:"flex items-center gap-1 text-[9px] font-mono",children:[(0,t.jsxs)("span",{className:"w-3 text-muted-foreground",children:[n+1,"."]}),(0,t.jsxs)("span",{className:"px-1 py-0.5 rounded bg-background border border-border/60",children:["c",s+1]}),(0,t.jsxs)("span",{className:"text-emerald-600 dark:text-emerald-400 ml-auto",children:["score=",(10-1.5*n).toFixed(1)]})]},`bm-${s}`))})]}),(0,t.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"text-[10px] font-mono text-violet-600 dark:text-violet-400 mb-1.5",children:"Vector ANN (dense, semantic)"}),(0,t.jsx)("div",{className:"space-y-0.5",children:i.slice(0,5).map((s,n)=>(0,t.jsxs)(r.motion.div,{animate:{opacity:e>=1?1:.3,x:10*(1!==e)},className:"flex items-center gap-1 text-[9px] font-mono",children:[(0,t.jsxs)("span",{className:"w-3 text-muted-foreground",children:[n+1,"."]}),(0,t.jsxs)("span",{className:"px-1 py-0.5 rounded bg-background border border-border/60",children:["c",s+1]}),(0,t.jsxs)("span",{className:"text-violet-600 dark:text-violet-400 ml-auto",children:["sim=",(.95-.05*n).toFixed(2)]})]},`v-${s}`))})]})]}),(0,t.jsxs)(r.motion.div,{animate:{opacity:2===e?1:.5},className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"text-[10px] font-mono text-amber-600 dark:text-amber-400 mb-1.5",children:"Phase 3: RRF fusion = Σ 1/(60 + rank_i) per chunk"}),(0,t.jsx)("div",{className:"flex gap-1 flex-wrap",children:a.map((s,n)=>{let a=o.indexOf(n),c=i.indexOf(n),d=(a<5?1/(60+a+1):0)+(c<5?1/(60+c+1):0);return(0,t.jsxs)(r.motion.div,{animate:{scale:2===e&&d>.02?1.1:1},className:"px-2 py-1 rounded text-[9px] font-mono border border-border/60 bg-background",children:[s,":",d.toFixed(3)]},`rrf-${s}`)})}),(0,t.jsx)("p",{className:"text-[9px] text-muted-foreground mt-1.5",children:"Top chunks by RRF: combine both rankings"})]}),(0,t.jsxs)(r.motion.div,{animate:{opacity:3===e?1:.5},className:"rounded-md border border-cyan-500/40 bg-cyan-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"text-[10px] font-mono text-cyan-600 dark:text-cyan-400 mb-1.5",children:"Phase 4: Cross-encoder re-rank top-50 → top-5 (co-encode query+doc)"}),(0,t.jsx)("div",{className:"space-y-0.5",children:["c3","c1","c2","c4","c5"].map((s,n)=>(0,t.jsxs)(r.motion.div,{animate:{x:5*(3!==e)},className:"flex items-center gap-1 text-[9px] font-mono",children:[(0,t.jsxs)("span",{className:"w-3 text-muted-foreground",children:[n+1,"."]}),(0,t.jsx)("span",{className:"px-1 py-0.5 rounded bg-background border border-border/60",children:s}),(0,t.jsxs)("span",{className:"text-cyan-600 dark:text-cyan-400 ml-auto",children:["cross-enc=",(.95-.08*n).toFixed(2)]})]},`ce-${s}`))})]}),(0,t.jsxs)(r.motion.div,{animate:{opacity:4===e?1:.5},className:"rounded-md border border-primary/40 bg-primary/10 p-2.5 text-center",children:[(0,t.jsx)("p",{className:"text-[10px] font-mono text-primary",children:"Phase 5: Top-5 chunks → augmented prompt → vLLM (ADR-031)"}),(0,t.jsxs)("p",{className:"text-[9px] text-muted-foreground mt-1",children:['"Context: c3, c1, c2, c4, c5. Question: ',"{user_query}",'. Answer:"']})]})]})}),(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mt-3",children:"Naive RAG does only phase 2 vector → top-5 → LLM. Three-stage hybrid adds BM25 (exact-match) + RRF + cross-encoder. Lifts RAG accuracy 25-35% on SQL grounding."})]})}let _=`# BM25 + RRF + Cross-encoder re-rank (Pyodide)
# Full hybrid retrieval pipeline simulation

import math, random

# ============================================================
# BM25 (Best Match 25) — sparse exact-match scoring
# ============================================================
# BM25 score for query Q against document D:
#   score(Q, D) = Σ_{q in Q} IDF(q) * (f(q,D) * (k1 + 1)) / (f(q,D) + k1 * (1 - b + b * |D| / avgdl))
# Where:
#   f(q,D) = term frequency of q in D
#   |D| = length of D
#   avgdl = average document length in corpus
#   k1 = 1.5 (term frequency saturation)
#   b = 0.75 (length normalization)
#   IDF(q) = log((N - n(q) + 0.5) / (n(q) + 0.5) + 1)
#     N = total docs, n(q) = docs containing q

def bm25_score(query_terms, doc_terms, doc_freq, N, avgdl, k1=1.5, b=0.75):
    "BM25 score for one document against query"
    score = 0.0
    doc_len = len(doc_terms)
    for q in query_terms:
        # Term frequency in document
        f = doc_terms.count(q)
        if f == 0:
            continue
        # IDF (with +1 smoothing for stability)
        n_q = doc_freq.get(q, 0)
        idf = math.log((N - n_q + 0.5) / (n_q + 0.5) + 1)
        # BM25 score for this term
        tf_norm = (f * (k1 + 1)) / (f + k1 * (1 - b + b * doc_len / avgdl))
        score += idf * tf_norm
    return score

# ============================================================
# Demo corpus: SQL DDL schema chunks
# ============================================================
corpus = [
    "create table dim_customer customer_id primary key customer_name segment region",
    "create table fact_sales sale_id customer_id product_id amount sale_date",
    "create table dim_product product_id product_name category price",
    "create view v_revenue_by_region as select region sum amount from fact_sales",
    "create table dim_date date_id year quarter month day fiscal_period",
]

# Tokenise (simple whitespace split)
docs = [doc.split() for doc in corpus]
N = len(docs)
avgdl = sum(len(d) for d in docs) / N

# Compute doc frequencies (DF) for each term
doc_freq = {}
for doc in docs:
    for term in set(doc):
        doc_freq[term] = doc_freq.get(term, 0) + 1

print("=" * 60)
print("BM25 Scoring — exact-match sparse retrieval")
print("=" * 60)
print(f"\\nCorpus: {N} SQL DDL chunks, avg length {avgdl:.1f} terms")

# Test queries
queries = [
    "customer revenue",
    "fact_sales amount",
    "region sum",
    "product category price",
]

for query in queries:
    query_terms = query.split()
    print(f"\\n--- Query: '{query}' ---")
    scores = []
    for i, doc in enumerate(docs):
        score = bm25_score(query_terms, doc, doc_freq, N, avgdl)
        scores.append((i, score, " ".join(doc[:5]) + "..."))
    scores.sort(key=lambda x: -x[1])
    for i, (doc_idx, score, preview) in enumerate(scores[:3]):
        print(f"  {i+1}. doc{doc_idx} (score={score:.3f}): {preview}")

# ============================================================
# RRF — Reciprocal Rank Fusion
# ============================================================
def rrf_fusion(rankings, k=60):
    """
    Reciprocal Rank Fusion.
    
    rankings: list of ranked lists (each list = [doc_id, doc_id, ...])
    Returns: dict {doc_id: rrf_score}
    
    Formula: rrf(d) = Σ_i 1 / (k + rank_i(d))
    k=60 (default from original paper)
    """
    scores = {}
    for ranking in rankings:
        for rank, doc_id in enumerate(ranking):
            scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank + 1)
    return scores

print(f"\\n{'=' * 60}")
print("RRF Fusion — combining BM25 + Vector rankings")
print("=" * 60)

# Simulate: BM25 ranks c3 > c1 > c4, vector ranks c1 > c3 > c2
bm25_ranking = [2, 0, 3]   # doc indices
vector_ranking = [0, 2, 1]

print(f"\\nBM25 ranking: {['c'+str(i+1) for i in bm25_ranking]}")
print(f"Vector ranking: {['c'+str(i+1) for i in vector_ranking]}")

rrf_scores = rrf_fusion([bm25_ranking, vector_ranking], k=60)
print(f"\\nRRF scores (k=60):")
for doc_id, score in sorted(rrf_scores.items(), key=lambda x: -x[1]):
    print(f"  c{doc_id+1}: {score:.4f}")

# Show why RRF works
print(f"\\n  c1: BM25 rank 2 → 1/(60+2)={1/62:.4f}, Vector rank 1 → 1/(60+1)={1/61:.4f}")
print(f"      Total: {1/62 + 1/61:.4f}  (high in both rankings → high RRF)")
print(f"  c3: BM25 rank 1 → 1/61={1/61:.4f}, Vector rank 2 → 1/62={1/62:.4f}")
print(f"      Total: {1/61 + 1/62:.4f}  (also high in both)")
print(f"\\n  Insight: RRF rewards documents ranked high in BOTH lists")
print(f"  (no document can dominate from a single ranking alone)")

# ============================================================
# Cross-encoder re-rank
# ============================================================
print(f"\\n{'=' * 60}")
print("Cross-encoder Re-rank")
print("=" * 60)

# Bi-encoder (used in stage 2):
#   query_emb = encode(query)  # independent of doc
#   doc_emb = encode(doc)       # independent of query
#   sim = cosine(query_emb, doc_emb)  # cheap
#   → misses query-doc interactions

# Cross-encoder (used in stage 3):
#   score = MLP([query_emb; doc_emb; query_emb * doc_emb])
#   → jointly encodes query+doc, captures interactions
#   → 100x more expensive, but 5-10% more accurate

random.seed(42)
def cross_encoder_score(query, doc):
    "Simulate cross-encoder (in production: ms-marco-MiniLM-L-12-v2)"
    # Real cross-encoders compute attention between query and doc tokens
    # Here: simulate with a noisy function of semantic overlap
    overlap = len(set(query.split()) & set(doc.split())) / max(1, len(set(query.split())))
    noise = random.gauss(0, 0.05)
    return overlap + noise

# Re-rank top-3 from RRF using cross-encoder
top_k = list(rrf_scores.keys())[:3]
query = "customer revenue region"
print(f"\\nQuery: '{query}'")
print(f"\\nBi-encoder (vector ANN) top-3: {['c'+str(i+1) for i in top_k]}")
print(f"Cross-encoder re-ranking...")

ce_scores = []
for doc_id in top_k:
    doc_text = corpus[doc_id]
    score = cross_encoder_score(query, doc_text)
    ce_scores.append((doc_id, score, doc_text[:50]))
    print(f"  c{doc_id+1}: cross-enc score={score:.3f}  ({doc_text[:50]}...)")

ce_scores.sort(key=lambda x: -x[1])
print(f"\\nFinal top-3 after cross-encoder re-rank:")
for i, (doc_id, score, preview) in enumerate(ce_scores):
    print(f"  {i+1}. c{doc_id+1} (score={score:.3f}): {preview}...")

print(f"\\n{'=' * 60}")
print("SUMMARY: 3-stage hybrid pipeline")
print("=" * 60)
print("  Stage 1: chunk (512 tok, overlap 64) → embed → pgvector")
print("  Stage 2: parallel BM25 + vector → top-50 each → RRF fuse")
print("  Stage 3: cross-encoder re-rank top-50 → final top-5 → LLM")
print(f"\\n  Accuracy lift: vector-only ~70%, hybrid ~85%, +cross-enc ~92%")
print(f"  Latency: BM25+vector ~20ms, cross-enc ~250ms, total <300ms")
print("=" * 60)`,N=`import torch
import torch.nn as nn
import torch.nn.functional as F
from typing import List, Tuple
import math

# ============================================================
# 1. Chunking — RecursiveCharacterTextSplitter (tiktoken-aware)
# ============================================================

class TextSplitter:
    """Recursive character text splitter (LangChain-style).
    
    Splits text hierarchically: try \\n\\n → \\n → . → space → char.
    Stops when chunk ≤ chunk_size tokens. Overlap = sliding window.
    """
    def __init__(self, chunk_size: int = 512, chunk_overlap: int = 64,
                 separators: List[str] = None):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
        self.separators = separators or ["\\n\\n", "\\n", ". ", " ", ""]
    
    def split_text(self, text: str) -> List[str]:
        """Split text into chunks of <= chunk_size tokens."""
        # Try each separator in order
        for sep in self.separators:
            if sep in text:
                splits = text.split(sep)
                chunks = self._merge_splits(splits, sep)
                if chunks:
                    return chunks
        # No separator found — return whole text
        return [text]
    
    def _merge_splits(self, splits: List[str], sep: str) -> List[str]:
        """Merge adjacent splits until chunk_size reached, with overlap."""
        chunks = []
        current = []
        current_len = 0
        
        for split in splits:
            split_len = len(split.split())  # token count (simplified)
            
            # If adding this split would exceed chunk_size, save current
            if current_len + split_len > self.chunk_size and current:
                chunks.append(sep.join(current))
                # Keep last few splits as overlap for next chunk
                while current_len > self.chunk_overlap and current:
                    current.pop(0)
                    current_len -= len(current[0].split()) if current else 0
            
            current.append(split)
            current_len += split_len
        
        if current:
            chunks.append(sep.join(current))
        
        return chunks

# ============================================================
# 2. BM25 — sparse exact-match scoring
# ============================================================

class BM25:
    """BM25 scorer — sparse exact-match retrieval.
    
    Score = Σ_q IDF(q) * (f(q,D) * (k1+1)) / (f(q,D) + k1*(1-b+b*|D|/avgdl))
    
    IDF(q) = log((N - n(q) + 0.5) / (n(q) + 0.5) + 1)
    
    k1=1.5 (term frequency saturation)
    b=0.75 (length normalization)
    """
    def __init__(self, k1: float = 1.5, b: float = 0.75):
        self.k1 = k1
        self.b = b
        self.doc_freqs = {}  # term -> number of docs containing it
        self.doc_lens = []
        self.num_docs = 0
        self.avgdl = 0
        self.idf_cache = {}
    
    def fit(self, corpus: List[List[str]]):
        """Index the corpus."""
        self.num_docs = len(corpus)
        self.doc_lens = [len(doc) for doc in corpus]
        self.avgdl = sum(self.doc_lens) / self.num_docs
        
        for doc in corpus:
            for term in set(doc):
                self.doc_freqs[term] = self.doc_freqs.get(term, 0) + 1
    
    def idf(self, term: str) -> float:
        """Inverse Document Frequency with smoothing."""
        if term not in self.idf_cache:
            n_q = self.doc_freqs.get(term, 0)
            self.idf_cache[term] = math.log((self.num_docs - n_q + 0.5) / (n_q + 0.5) + 1)
        return self.idf_cache[term]
    
    def score(self, query: List[str], doc: List[str]) -> float:
        """BM25 score for one query-doc pair."""
        doc_len = len(doc)
        score = 0.0
        for q in query:
            f = doc.count(q)
            if f == 0:
                continue
            idf = self.idf(q)
            tf_norm = (f * (self.k1 + 1)) / (f + self.k1 * (1 - self.b + self.b * doc_len / self.avgdl))
            score += idf * tf_norm
        return score
    
    def search(self, query: List[str], corpus: List[List[str]], top_k: int = 50) -> List[Tuple[int, float]]:
        """Return top-k (doc_idx, score) pairs."""
        scores = [(i, self.score(query, doc)) for i, doc in enumerate(corpus)]
        scores.sort(key=lambda x: -x[1])
        return scores[:top_k]

# ============================================================
# 3. Reciprocal Rank Fusion (RRF)
# ============================================================

def reciprocal_rank_fusion(rankings: List[List[int]], k: int = 60) -> List[Tuple[int, float]]:
    """Fuse multiple rankings into one via RRF.
    
    rrf(d) = Σ_i 1 / (k + rank_i(d))
    
    k=60 default from Cormack et al. 2009 — works well in practice.
    """
    scores = {}
    for ranking in rankings:
        for rank, doc_id in enumerate(ranking):
            scores[doc_id] = scores.get(doc_id, 0.0) + 1.0 / (k + rank + 1)
    # Sort by RRF score descending
    return sorted(scores.items(), key=lambda x: -x[1])

# ============================================================
# 4. Cross-encoder re-rank
# ============================================================

class CrossEncoder(nn.Module):
    """Cross-encoder for re-ranking.
    
    Unlike bi-encoder (query and doc embedded independently),
    cross-encoder co-encodes [query; doc] together, allowing
    attention between query and doc tokens.
    
    Architecture:
        Input: [CLS] query [SEP] doc [SEP]
        Transformer encoder (BERT/RoBERTa)
        [CLS] hidden state → linear → score
    
    Production: ms-marco-MiniLM-L-12-v2 (12 layers, 33M params)
    """
    def __init__(self, model_name: str = 'cross-encoder/ms-marco-MiniLM-L-12-v2'):
        super().__init__()
        # In production: load pre-trained from HuggingFace
        # self.encoder = AutoModel.from_pretrained(model_name)
        # self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        # self.linear = nn.Linear(384, 1)
        
        # For demo: simplified
        self.encoder = nn.TransformerEncoder(
            nn.TransformerEncoderLayer(d_model=384, nhead=6, batch_first=True),
            num_layers=2,
        )
        self.linear = nn.Linear(384, 1)
    
    def forward(self, query_input_ids, doc_input_ids, attention_mask):
        """Score query-doc pairs."""
        # Concatenate: [CLS] query [SEP] doc [SEP]
        # In production: tokenizer handles this
        combined = torch.cat([query_input_ids, doc_input_ids], dim=1)
        combined_mask = torch.cat([attention_mask, attention_mask], dim=1)
        
        # Encode
        outputs = self.encoder(combined, src_key_padding_mask=(combined_mask == 0))
        
        # Use [CLS] token (position 0) for classification
        cls_output = outputs[:, 0, :]
        
        # Linear projection to scalar score
        score = self.linear(cls_output).squeeze(-1)
        return score

def rerank_with_cross_encoder(query: str, documents: List[str],
                              cross_encoder: CrossEncoder,
                              tokenizer, top_k: int = 5) -> List[Tuple[int, float]]:
    """Re-rank documents using a cross-encoder.
    
    Cost: ~5ms per (query, doc) pair on GPU \xd7 len(documents)
    For top-50 retrieval → 250ms total (acceptable for chat).
    """
    scores = []
    cross_encoder.eval()
    with torch.no_grad():
        for i, doc in enumerate(documents):
            # Tokenise query + doc together
            inputs = tokenizer(
                query, doc,
                padding=True, truncation=True, max_length=512,
                return_tensors='pt'
            )
            score = cross_encoder(
                inputs['input_ids'],
                inputs.get('doc_ids', inputs['input_ids']),
                inputs['attention_mask']
            )
            scores.append((i, score.item()))
    
    scores.sort(key=lambda x: -x[1])
    return scores[:top_k]

# ============================================================
# 5. Full hybrid RAG pipeline
# ============================================================

class HybridRAGRetriever:
    """Three-stage hybrid RAG retrieval pipeline (ADR-032).
    
    Stage 1: chunk (RecursiveCharacterTextSplitter, 512 tok, overlap 64)
    Stage 2: parallel BM25 + vector ANN → RRF fusion
    Stage 3: cross-encoder re-rank top-50 → top-5
    """
    def __init__(self, embedding_model, cross_encoder, bm25: BM25,
                 vector_store, splitter: TextSplitter):
        self.embedding_model = embedding_model
        self.cross_encoder = cross_encoder
        self.bm25 = bm25
        self.vector_store = vector_store  # pgvector wrapper
        self.splitter = splitter
    
    def index(self, documents: List[str]):
        """Index documents: chunk → embed → store in pgvector + BM25."""
        all_chunks = []
        for doc in documents:
            chunks = self.splitter.split_text(doc)
            all_chunks.extend(chunks)
        
        # Embed each chunk (bi-encoder, query/doc independent)
        embeddings = [self.embedding_model.encode(c) for c in all_chunks]
        
        # Store in pgvector (dense) + tsvector (sparse)
        self.vector_store.upsert(all_chunks, embeddings)
        self.bm25.fit([c.split() for c in all_chunks])
    
    def retrieve(self, query: str, top_k: int = 5) -> List[Tuple[str, float]]:
        """Three-stage retrieval."""
        # Stage 2a: BM25 sparse retrieval (top-50)
        bm25_results = self.bm25.search(query.split(),
            [c.split() for c in self.vector_store.docs],
            top_k=50)
        bm25_ranking = [doc_idx for doc_idx, _ in bm25_results]
        
        # Stage 2b: vector dense retrieval (top-50)
        query_emb = self.embedding_model.encode(query)
        vector_results = self.vector_store.search(query_emb, top_k=50)
        vector_ranking = [doc_idx for doc_idx, _ in vector_results]
        
        # Stage 2c: RRF fusion
        rrf_results = reciprocal_rank_fusion([bm25_ranking, vector_ranking])
        top_50 = [doc_idx for doc_idx, _ in rrf_results[:50]]
        
        # Stage 3: cross-encoder re-rank
        docs_to_rerank = [self.vector_store.docs[i] for i in top_50]
        # In production: tokenizer is HuggingFace AutoTokenizer
        # final = rerank_with_cross_encoder(query, docs_to_rerank,
        #                                    self.cross_encoder, self.tokenizer, top_k)
        # For demo: return RRF results
        return [(self.vector_store.docs[i], score) for i, score in rrf_results[:top_k]]

# Sanity check
if __name__ == "__main__":
    # Test BM25
    corpus = [
        "create table dim_customer customer_id customer_name segment region".split(),
        "create table fact_sales sale_id customer_id product_id amount sale_date".split(),
        "create table dim_product product_id product_name category price".split(),
    ]
    bm25 = BM25()
    bm25.fit(corpus)
    
    query = "customer revenue".split()
    results = bm25.search(query, corpus, top_k=3)
    print(f"BM25 results for '{' '.join(query)}':")
    for doc_idx, score in results:
        print(f"  doc{doc_idx}: {score:.3f}  ({' '.join(corpus[doc_idx][:5])}...)")
    
    # Test RRF
    bm25_rank = [0, 1, 2]
    vector_rank = [1, 0, 2]
    rrf = reciprocal_rank_fusion([bm25_rank, vector_rank])
    print(f"\\nRRF fusion of BM25={bm25_rank} + Vector={vector_rank}:")
    for doc_id, score in rrf:
        print(f"  doc{doc_id}: {score:.4f}")
    
    # Test splitter
    text = "This is sentence one.\\n\\nThis is sentence two.\\n\\nThis is sentence three."
    splitter = TextSplitter(chunk_size=10, chunk_overlap=2)
    chunks = splitter.split_text(text)
    print(f"\\nSplitter: {len(chunks)} chunks")
    for i, c in enumerate(chunks):
        print(f"  chunk {i}: {c}")`;function j(){return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsx)(a.PageHeader,{eyebrow:"RAG Deep Dive · hybrid retrieval · re-ranking",title:"RAG Deep Dive — Chunking, Hybrid Retrieval, Cross-Encoder Re-Rank",description:"The math behind production RAG: RecursiveCharacterTextSplitter (chunk_size=512 tokens, overlap=64), BM25 sparse scoring (IDF × TF saturation × length normalisation), Reciprocal Rank Fusion (RRF = Σ 1/(k+rank_i), k=60), cross-encoder re-ranking (co-encode query+doc, captures interactions bi-encoder misses). With low-level PyTorch implementations of TextSplitter, BM25 scorer, RRF fusion, CrossEncoder (ms-marco-MiniLM-L-12-v2), and the full HybridRAGRetriever pipeline. Code-oriented, mathematical, scientific.",right:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)(l.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(x.Search,{className:"h-3 w-3"})," BM25 + Vector + Cross-enc"]}),(0,t.jsxs)(l.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(u.Zap,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:y.map(e=>(0,t.jsx)(a.KpiCard,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,t.jsx)(a.SectionCard,{title:"Three-stage hybrid RAG pipeline — animated",description:"Query flows through 5 phases: (1) chunking (10 chunks created with overlap), (2) parallel BM25 + vector ANN retrieval (each returns top-5), (3) RRF fusion combining both rankings, (4) cross-encoder re-rank top-50 → top-5, (5) final top-5 stuffed into prompt → vLLM (ADR-031). The naive RAG baseline does only phase 2 vector → top-5 — missing exact-match (BM25) and interaction-aware re-ranking (cross-encoder).",icon:(0,t.jsx)(v.Filter,{className:"h-5 w-5"}),badge:"3D animation",children:(0,t.jsx)(k,{})}),(0,t.jsx)(a.SectionCard,{title:"Chunking — why size and overlap matter",description:"Chunk size determines the signal-to-noise ratio of each retrieved passage. Too small (128 tokens): loses context — single sentence without surrounding paragraph, LLM can't ground. Too large (2048): dilutes signal — one chunk contains multiple topics, embedding averages them. Sweet spot: 512 tokens (≈3-4 paragraphs). Overlap=64 prevents context loss at boundaries — the last 64 tokens of chunk N become the first 64 of chunk N+1, so a sentence split across the boundary is recoverable.",icon:(0,t.jsx)(b.FileText,{className:"h-5 w-5"}),badge:"mathematics",children:(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-sm text-primary",children:"chunk_size = 512 tokens  ·  overlap = 64 tokens  ·  effective_unique = 448 tokens/chunk"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"tiktoken-aware (not character-aware — tokens are what the LLM sees). For SQL DDL: statement-aware (one CREATE TABLE per chunk)."})]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,t.jsxs)("div",{className:"rounded-md border border-rose-500/40 bg-rose-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-rose-600 dark:text-rose-400 mb-1",children:"Too small (128)"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"Loses context — sentence without paragraph. Embedding lacks signal. LLM can't ground answer in one sentence."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Sweet spot (512)"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"3-4 paragraphs. Embedding has topical signal. LLM gets enough context to ground. Default for production RAG."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"Too large (2048)"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px]",children:"Dilutes signal — multiple topics per chunk. Embedding averages them. Retrieval returns chunks where the relevant content is 1 paragraph out of 8."})]})]})]})}),(0,t.jsx)(a.SectionCard,{title:"BM25 math — sparse exact-match scoring",description:"BM25 is the production-grade sparse retrieval algorithm (used by Elasticsearch, Lucene, Postgres tsvector). It scores documents by IDF (rare terms matter more) × TF saturation (term frequency has diminishing returns, k1=1.5) × length normalisation (longer docs naturally have more terms, b=0.75 corrects for this). The math is the same as TF-IDF but with two saturation parameters.",icon:(0,t.jsx)(f.Brain,{className:"h-5 w-5"}),badge:"mathematics",children:(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsxs)("p",{className:"font-mono text-sm text-primary",children:["BM25(Q, D) = Σ",(0,t.jsx)("sub",{children:"q ∈ Q"})," IDF(q) · ",(0,t.jsx)("span",{className:"font-mono",children:"f(q,D) · (k₁+1)"})," / ",(0,t.jsx)("span",{className:"font-mono",children:"(f(q,D) + k₁ · (1−b + b·|D|/avgdl))"})]}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"IDF(q) = log((N − n(q) + 0.5) / (n(q) + 0.5) + 1) — smoothed to avoid negative values."})]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold mb-1",children:"IDF (rare = important)"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"IDF(q) = log(N / n(q))"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"'the' appears in 99% of docs → IDF ≈ 0. 'dim_customer' appears in 1% → IDF ≈ 4.6. Rare terms dominate the score."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold mb-1",children:"TF saturation (k₁=1.5)"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"tf_norm = f·(k₁+1) / (f + k₁·...)"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"First occurrence of a term adds ~1.0 to score; 10th adds ~0.1. Diminishing returns — one mention is enough, 100 mentions barely more."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold mb-1",children:"Length norm (b=0.75)"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"1 − b + b·|D|/avgdl"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"A 2000-token doc gets 0.75× penalty vs a 500-token doc (assuming avgdl=500). Prevents long docs from winning just by being long."})]})]})]})}),(0,t.jsx)(a.SectionCard,{title:"Try it: BM25 + RRF fusion + cross-encoder (Pyodide)",description:"Indexes a small SQL DDL corpus (5 chunks: dim_customer, fact_sales, dim_product, v_revenue_by_region, dim_date), runs 4 test queries through BM25, simulates parallel BM25 + vector rankings, fuses them via RRF (k=60), then re-ranks with a simulated cross-encoder. Shows the full 3-stage hybrid pipeline end-to-end.",icon:(0,t.jsx)(g.Terminal,{className:"h-5 w-5"}),badge:"executable",children:(0,t.jsx)(c.PyodideRunner,{code:_,buttonLabel:"Run hybrid RAG demo (Pyodide)"})}),(0,t.jsx)(a.SectionCard,{title:"Reciprocal Rank Fusion — combining rankings without scores",description:"RRF merges multiple ranked lists into one. The beauty: it doesn't need calibrated scores — only ranks. BM25 scores are unbounded (can be 0 to 50+); cosine similarities are bounded [-1, 1] but on different scales. RRF sidesteps this: each list contributes 1/(k+rank) per item, where k=60 is the smoothing constant. A document ranked #1 in BOTH lists gets 2/61 ≈ 0.033; ranked #1 in one and #50 in another gets 1/61 + 1/110 ≈ 0.026.",icon:(0,t.jsx)(f.Brain,{className:"h-5 w-5"}),badge:"mathematics",children:(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsxs)("p",{className:"font-mono text-sm text-primary",children:["RRF(d) = Σ",(0,t.jsx)("sub",{children:"i"})," 1 / (k + rank",(0,t.jsx)("sub",{children:"i"}),"(d))  ·  k = 60 (default)"]}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Per-list rank-based fusion. No score calibration needed. Works for any ranking source (BM25, vector, custom, learned)."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-3 bg-muted/10",children:[(0,t.jsx)("p",{className:"font-mono text-xs text-foreground/90 font-semibold mb-2",children:"Why k=60?"}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"The original Cormack et al. 2009 paper found k=60 works best across diverse corpora. Smaller k (e.g. 10) over-weights top-ranked items — fragile to noise in any single ranking. Larger k (e.g. 200) flattens everything — all items look the same. k=60 is a sweet spot: top-10 items get distinct scores, items beyond rank 50 contribute nearly equally. It's a magic number, but a well-justified one."})]})]})}),(0,t.jsx)(a.SectionCard,{title:"Cross-encoder re-rank — capturing query-doc interaction",description:"The bi-encoder (used in stage 2) embeds query and doc independently — cosine similarity is the only interaction. Cross-encoder co-encodes [query; doc] through the SAME transformer, so every query token attends to every doc token. This captures interactions the bi-encoder structurally cannot. Cost: 100× more compute per pair (full transformer forward vs one matmul). That's why we only run it on the top-50 from RRF — re-ranking the whole corpus would be infeasible.",icon:(0,t.jsx)(f.Brain,{className:"h-5 w-5"}),badge:"mathematics",children:(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-sm text-primary",children:"bi-encoder: sim = cos(emb(q), emb(d))  ·  cross-encoder: score = MLP([emb(q); emb(d); emb(q)⊙emb(d)])"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:'Cross-encoder concatenates query+doc embeddings AND their elementwise product — captures multiplicative interactions (e.g. "not X" requires both terms together).'})]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-2 text-xs",children:[(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"Bi-encoder (stage 2)"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"emb_q = encode(q)  # 1 forward"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"emb_d = encode(d)  # 1 forward"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"sim = cos(emb_q, emb_d)"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1.5",children:"Doc embeddings pre-computed. Search = 1 matmul. O(N) per query."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Cross-encoder (stage 3)"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"score = transformer([q; d])[CLS]"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"# full attention q↔d"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"# captures interactions"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1.5",children:"Per-pair full forward. O(N) per query — 100× slower. Run only on top-50."})]})]})]})}),(0,t.jsx)(a.SectionCard,{title:"Low-level PyTorch — TextSplitter, BM25, RRF, CrossEncoder, HybridRAGRetriever",description:"The actual production code. TextSplitter implements RecursiveCharacterTextSplitter (try \\\\n\\\\n → \\\\n → . → space → char, merge with overlap). BM25 class with fit() (index corpus, compute DF + avgdl) and search() (top-k retrieval). reciprocal_rank_fusion() implements the k=60 formula. CrossEncoder wraps a transformer encoder + linear head — full forward pass per (query, doc) pair. HybridRAGRetriever orchestrates all three stages: index() chunks + embeds + stores; retrieve() runs BM25 + vector in parallel, RRF fuses, cross-encoder re-ranks.",icon:(0,t.jsx)(h.Cpu,{className:"h-5 w-5"}),badge:"low-level",children:(0,t.jsx)(i.CodeBlock,{language:"python",filename:"hybrid_rag.py",highlight:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280],code:N})}),(0,t.jsx)(a.SectionCard,{title:"My deeper thought: RAG IS a database query planner",description:"The three-stage RAG pipeline is structurally a database query planner. Chunking = physical layout (pages/blocks). Hybrid BM25+vector = index selection (B-tree vs GIN vs HNSW). RRF = cost-based plan fusion. Cross-encoder = nested-loop join (expensive, only on small input). The LLM at the end is the projection — it formats the retrieved tuples into a natural language answer.",icon:(0,t.jsx)(p.TrendingUp,{className:"h-5 w-5"}),badge:"Insight",children:(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:["The isomorphism between RAG and a relational query planner is exact, not metaphorical. ",(0,t.jsx)("strong",{className:"text-foreground/80",children:"Chunking is physical database design."})," A 512-token chunk with 64-token overlap is structurally identical to a Postgres 8KB page with 64-byte tuple header — both define the unit of I/O, both have overhead (overlap = page metadata), both trade size for retrieval granularity. The RecursiveCharacterTextSplitter that tries \\\\n\\\\n → \\\\n → . → space is a B-tree split heuristic: try the most selective separator first, fall back to coarser ones when needed. Statement-aware chunking (one CREATE TABLE per chunk) is clustered-index layout — physically grouping related rows together."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Hybrid BM25 + vector retrieval is index selection."}),' Postgres has B-tree (exact-match, sparse) and GIN (trigram, fuzzy) and HNSW (vector, semantic) indexes. The query planner picks the index per WHERE clause — equality on a string column uses B-tree, similarity uses GIN, vector proximity uses HNSW. RAG\'s parallel BM25 + vector ANN is the same logic at retrieval scale: equality on SQL identifiers uses BM25 (the "B-tree"), semantic proximity uses vector ANN (the "HNSW"). RRF fusion is cost-based plan merging — Postgres does the same when it combines an index scan with a sequential scan via a BitmapAnd node. The k=60 smoothing is the cost-model equivalent: balance contributions from each plan.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Cross-encoder re-ranking is a nested-loop join."})," In relational DBs, nested-loop join is the slowest but most flexible — it can evaluate any join condition (not just equality, like hash/merge joins). The optimizer uses it only when the input cardinality is small (otherwise it's O(N×M) catastrophic). Cross-encoder re-ranking is the same pattern: it can evaluate any query-doc interaction (because it co-encodes them), but it's O(N) per query (one full transformer forward per pair) — so we run it only on the top-50 from the cheaper stages. The bi-encoder → cross-encoder pipeline is structurally identical to the hash-join → nested-loop-fallback pattern in Postgres. The LLM at the end is the projection operator — it formats the retrieved tuples (chunks) into a natural-language response. ADR-024's semantic layer (NL-to-SQL) is therefore a query planner that runs in reverse: NL → planner (LLM) → physical plan (SQL) → execution. RAG runs the planner forward: NL → retrieval (physical plan) → projection (LLM). Same architecture, opposite direction."]})]})}),(0,t.jsxs)(m.DeeperThoughtSection,{pageTitle:"RAG Deep Dive",children:[(0,t.jsx)(m.DeeperThought,{title:"RAG Deep Dive IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,t.jsx)("p",{children:"This page about RAG Deep Dive is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. RAG Deep Dive connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where RAG Deep Dive sits in the computational-science landscape."})}),(0,t.jsx)(m.DeeperThought,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,t.jsx)("p",{children:"In a decade, the specific tools on this page (RAG Deep Dive) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,t.jsx)(m.DeeperThought,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,t.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,t.jsx)(m.DeeperThought,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,t.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,t.jsx)(m.DeeperThought,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,t.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,t.jsx)(o.NextSteps,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"rag-llms",reason:"Continue to rag llms — see also from this page"},{id:"vector-db",reason:"Continue to vector db — see also from this page"}]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(n.default,{href:(0,d.hrefFor)("rag-llms"),className:"text-sm text-primary hover:underline",children:"→ RAG & LLMs (the original naive RAG page)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(n.default,{href:(0,d.hrefFor)("vector-db"),className:"text-sm text-primary hover:underline",children:"→ Vector DB (pgvector — the storage layer)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(n.default,{href:(0,d.hrefFor)("inference-serving"),className:"text-sm text-primary hover:underline",children:"→ Inference Serving (vLLM — final stage)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(n.default,{href:(0,d.hrefFor)("dbt"),className:"text-sm text-primary hover:underline",children:"→ dbt (the SQL DDL being chunked)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(n.default,{href:(0,d.hrefFor)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-032 (hybrid retrieval adoption)"})]})]})}e.s(["RagDeepDivePage",()=>j])}]);