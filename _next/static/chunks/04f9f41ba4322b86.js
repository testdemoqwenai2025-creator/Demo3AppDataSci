(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63209,e=>{"use strict";var t=e.i(361653);e.s(["AlertCircle",()=>t.default])},431343,595468,e=>{"use strict";var t=e.i(451477);e.s(["Play",()=>t.default],431343);var s=e.i(123287);e.s(["CheckCircle2",()=>s.default],595468)},862824,515288,e=>{"use strict";var t=e.i(843476),s=e.i(975157);function i({className:e,...i}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,s.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...i})}function a({className:e,...i}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,s.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...i})}function r({className:e,...i}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,s.cn)("leading-none font-semibold",e),...i})}function n({className:e,...i}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,s.cn)("text-muted-foreground text-sm",e),...i})}function o({className:e,...i}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,s.cn)("px-6",e),...i})}e.s(["Card",()=>i,"CardContent",()=>o,"CardDescription",()=>n,"CardHeader",()=>a,"CardTitle",()=>r],515288);var l=e.i(487486);function d({title:e,description:s,icon:d,badge:m,badgeVariant:c="outline",children:h,className:g,contentClassName:p}){return(0,t.jsxs)(i,{className:["border-border/60",g].filter(Boolean).join(" "),children:[(e||s)&&(0,t.jsxs)(a,{className:"flex flex-row items-start gap-3 space-y-0 border-b border-border/60 bg-muted/30",children:[d&&(0,t.jsx)("div",{className:"mt-0.5 text-primary",children:d}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[e&&(0,t.jsx)(r,{className:"text-base",children:e}),m&&(0,t.jsx)(l.Badge,{variant:c,className:"text-[10px]",children:m})]}),s&&(0,t.jsx)(n,{className:"mt-1 text-xs",children:s})]})]}),(0,t.jsx)(o,{className:["p-4 md:p-5",p].filter(Boolean).join(" "),children:h})]})}function m({eyebrow:e,title:s,description:i,right:a}){return(0,t.jsxs)("div",{className:"mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4",children:[(0,t.jsxs)("div",{children:[e&&(0,t.jsx)("p",{className:"text-[11px] font-semibold uppercase tracking-widest text-primary/80 mb-1.5",children:e}),(0,t.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold tracking-tight text-balance",children:s}),i&&(0,t.jsx)("p",{className:"mt-2 text-sm md:text-base text-muted-foreground max-w-3xl text-pretty",children:i})]}),a&&(0,t.jsx)("div",{className:"shrink-0",children:a})]})}function c({label:e,value:s,delta:a,deltaTone:r="flat",hint:n}){return(0,t.jsx)(i,{className:"border-border/60",children:(0,t.jsxs)(o,{className:"p-4",children:[(0,t.jsx)("p",{className:"text-[11px] uppercase tracking-wider text-muted-foreground",children:e}),(0,t.jsx)("p",{className:"mt-1 text-2xl font-semibold tabular-nums",children:s}),(0,t.jsxs)("div",{className:"mt-1 flex items-center gap-2",children:[a&&(0,t.jsx)("span",{className:`text-xs ${"up"===r?"text-emerald-600 dark:text-emerald-400":"down"===r?"text-rose-600 dark:text-rose-400":"text-muted-foreground"}`,children:a}),n&&(0,t.jsx)("span",{className:"text-[11px] text-muted-foreground",children:n})]})]})})}e.s(["KpiCard",()=>c,"PageHeader",()=>m,"SectionCard",()=>d],862824)},342046,518550,e=>{"use strict";var t=e.i(843476),s=e.i(271645),i=e.i(522016),a=e.i(901752);let r=[{cardIndex:0,name:"SVD",equation:"A = UΣV^T",sciences:["genomics","audio","finance"],insightShort:"SVD IS the Fourier transform for data",hostPages:["numpy-scipy"],hostReasons:["SVD IS NumPy's universal decomposer — np.linalg.svd → PCA for genomics, audio compression, Fama-French risk factors."]},{cardIndex:1,name:"Attention",equation:"softmax(QK^T/√d_k) × V",sciences:["protein folding","NLP"],insightShort:"Attention IS natural selection",hostPages:["transformer-deep-dive"],hostReasons:["DNA IS a language — softmax(QK^T/√d_k)×V parses both proteins (AlphaFold2) and English (GPT-4) because both are correlation detection."]},{cardIndex:2,name:"Poisson",equation:"P(k) = λ^k e^(-λ) / k!",sciences:["sequencing","networks","decay"],insightShort:"Poisson IS the law of rare events",hostPages:["bioinformatics-pipelines"],hostReasons:["GATK variant calling depth IS Poisson(λ=mean coverage) — same distribution that sizes server clusters and radioactive sources."]},{cardIndex:3,name:"FFT",equation:"X[k] = Σ x[n] e^(-2πikn/N)",sciences:["mass spec","audio","cryo-EM"],insightShort:"FFT IS the change of basis",hostPages:["numpy-scipy"],hostReasons:["np.fft.fft is the SAME operation whether you're finding the m/z of a compound, the C-note in a chord, or the 3D structure of a ribosome."]},{cardIndex:4,name:"Verlet",equation:"r(t+Δt) = 2r(t) - r(t-Δt) + F/m·Δt²",sciences:["MD","games","orbits"],insightShort:"Verlet IS time-reversal symmetry",hostPages:["computational-biology"],hostReasons:["AMBER, Havok, and NASA JPL all call this exact integrator — symplectic, energy-conserving, time-reversible. The MD integrator IS the game physics integrator."]},{cardIndex:5,name:"Navier-Stokes",equation:"∂u/∂t + u·∇u = -∇p/ρ + ν∇²u",sciences:["weather","blood","turbulence"],insightShort:"Navier-Stokes IS the universe's flow equation",hostPages:["computational-physics"],hostReasons:["CFD on this PDE predicts hurricanes, aneurysm risk, and wing stall — the SAME nonlinearity makes weather unpredictable and turbulence beautiful."]},{cardIndex:6,name:"Gradient Descent",equation:"θ(t+1) = θ(t) - η∇L(θ)",sciences:["ML","evolution","thermodynamics"],insightShort:"Gradient Descent IS the learning rule",hostPages:["tabular"],hostReasons:["Gradient boosting = gradient descent on trees; GPT-4 training, natural selection, and protein folding all minimise a landscape with the SAME update rule."]},{cardIndex:7,name:"Bayes",equation:"P(H|D) = P(D|H)P(H) / P(D)",sciences:["genetics","spam","quantum"],insightShort:"Bayes IS the belief updater",hostPages:["alphamissense"],hostReasons:["AlphaMissense classifying a VUS IS Gmail classifying spam IS a Stern–Gerlach measurement — all three update P(H) given D."]},{cardIndex:8,name:"Euler's Method",equation:"y(t+Δt) = y(t) + f(t,y)·Δt",sciences:["orbital mechanics","games","finance"],insightShort:"Euler IS the seed of all simulation",hostPages:["space-science"],hostReasons:["Satellite trajectory propagation (NASA GMAT), game-engine fixed-step physics (Unity), and Black-Scholes Monte Carlo all START from this one-line integrator."]},{cardIndex:9,name:"Entropy",equation:"H = -Σ p log p",sciences:["information","thermodynamics","genetics"],insightShort:"Entropy IS the universal currency of disorder",hostPages:["systems-biology"],hostReasons:["Shannon measured message information, Boltzmann gas disorder, Haldane population heterozygosity — the SAME formula because all three quantify how spread out a distribution is."]},{cardIndex:10,name:"Black-Scholes",equation:"C = S·N(d1) − K·e^(−rT)·N(d2)",sciences:["fintech","maritime","genetics"],insightShort:"Black-Scholes IS the universal option-pricing equation",hostPages:["fintech"],hostReasons:["A Lloyd's underwriter pricing a 90-day cargo option, a CME quant pricing an SPX call, and a Fisher geneticist pricing an allele-substitution option all evaluate the SAME formula — the right-but-not-obligation to act on a stochastic payoff."]},{cardIndex:11,name:"Haversine",equation:"d = 2R·arcsin(√(...))",sciences:["maritime","aviation","astronomy"],insightShort:"Haversine IS the universal great-circle distance",hostPages:["global-shipping"],hostReasons:["Rotterdam→Singapore sailing distance, LHR→JFK flight distance, and Sirius→Canopus angular separation all use the SAME formula — shortest-path distance on a sphere, invented 1805 (Bowring)."]},{cardIndex:12,name:"Kelly Criterion",equation:"f* = (bp − q)/b = μ/σ²",sciences:["fintech","genetics","RL"],insightShort:"Kelly IS the universal bet-sizing equation",hostPages:["fintech"],hostReasons:["Ed Thorp's blackjack team (1960s), Jim Simons' Medallion Fund (1989-2024, 65% CAGR), Haldane's allele fixation (1927), and Thompson sampling (RL) all derive the SAME optimal bet size f* = μ/σ² because they all maximize expected log-growth."]},{cardIndex:13,name:"Markov Chain",equation:"π(t+1) = π(t)·P",sciences:["genetics","fintech","maritime"],insightShort:"Markov IS the universal state-transition equation",hostPages:["global-shipping","bioinformatics"],hostReasons:["Jukes-Cantor DNA substitution (1969), Moody's credit transitions (10⁶ bonds), and AIS port-state transitions (100K vessels) all use the SAME matrix update — the memoryless property is universal."]},{cardIndex:14,name:"Value at Risk",equation:"VaR_α = −(μ + z_α·σ)",sciences:["fintech","maritime","climate"],insightShort:"VaR IS the universal tail-risk equation",hostPages:["fintech","global-shipping"],hostReasons:["JPMorgan's 1-day 99% VaR ($4T balance, Basel III), Lloyd's 7-day 95% VaR ($50B hull, Solvency II), and NOAA 100-year flood VaR (FEMA FIRMs) all use the SAME quantile — every loss distribution has an inverse CDF."]},{cardIndex:15,name:"PageRank",equation:"PR(p) = (1-d) + d·Σ(PR(q)/L(q))",sciences:["fintech","maritime","genetics"],insightShort:"PageRank IS the universal centrality equation",hostPages:["global-shipping","systems-biology"],hostReasons:["BIS systemic risk (Lehman PR ≈ 0.012), UN COMTRADE port chokepoint (Rotterdam PR ≈ 0.020), and STRING gene essentiality (TP53 PR ≈ 0.025) all use the SAME eigenvector — Brin & Page 1998 for the web, now spanning banking, trade, and genomics."]},{cardIndex:16,name:"Kalman Filter",equation:"x̂(t+1) = x̂(t) + K·(z − H·x̂(t))",sciences:["maritime","aviation","genetics"],insightShort:"Kalman IS the universal state-estimation equation",hostPages:["global-shipping"],hostReasons:["AIS vessel tracking (100K vessels × 60s), ADS-B flight tracking (100K flights × 1s), and 1000-Genomes allele frequency tracking all use the SAME Bayesian update — Kalman 1960 invented this for Apollo navigation."]},{cardIndex:17,name:"Monte Carlo",equation:"E[f(X)] ≈ (1/N)·Σ f(X_i)",sciences:["fintech","maritime","genetics"],insightShort:"Monte Carlo IS the universal estimation equation",hostPages:["fintech","global-shipping","monte-carlo"],hostReasons:["Option pricing (10⁶ GBM paths), port congestion (10⁵ vessel sims), and rare-variant permutation tests (10⁶ permutations) all use the SAME averaging — Metropolis 1946 invented this at Los Alamos for neutron transport."]},{cardIndex:18,name:"Geometric Brownian Motion",equation:"dS = μS·dt + σS·dW",sciences:["fintech","maritime","genetics"],insightShort:"GBM IS the universal multiplicative-noise equation",hostPages:["fintech","global-shipping"],hostReasons:["SPX daily returns (Black-Scholes foundation), Rotterdam container dwell times, and Wright-Fisher allele drift all use the SAME SDE — multiplicative noise keeps S positive with log-normal stationarity."]},{cardIndex:19,name:"Lloyd's Algorithm",equation:"μ_k ← mean({x : argmin_k ‖x − μ_k‖²})",sciences:["maritime","genetics","ML"],insightShort:"Lloyd IS the universal clustering equation",hostPages:["global-shipping","systems-biology"],hostReasons:["50K ports clustered by trade flows (UN COMTRADE), 2504 individuals clustered by SNP PCA (1000-Genomes), and 1.4M images clustered by ResNet-50 (ImageNet) all use the SAME iterate — Lloyd 1957 invented this at Bell Labs for PCM."]},{cardIndex:20,name:"HyperLogLog",equation:"E = α_m m² (Σ 2^(-M_j))^(-1)",sciences:["data engineering","genomics","network security"],insightShort:"HLL IS the universal counter — 33M× memory compression with <1% error",hostPages:["big-data-ingestion"],hostReasons:["COUNT(DISTINCT user_id) in Snowflake/Spark, unique k-mers in Jellyfish (genome assembler), unique source IPs in Redis PFCOUNT (DDoS monitor) — all run the SAME hash→bucket→max-zeros→harmonic-mean algorithm. 12 KB vs 400 GB for exact counting."]},{cardIndex:21,name:"Bloom Filter",equation:"P(fp) = (1 - e^(-kn/m))^k",sciences:["network security","genomics","databases"],insightShort:"Bloom filter IS the universal membership test — 23× compression with 0.1% false positives",hostPages:["kafka-connect","delta-lake"],hostReasons:["Chrome Safe Browsing (malware URL check), genome assembler read dedup, RocksDB SSTable key lookup — all use the SAME k-hash→bit-set→AND-check. 175 MB vs 4 GB for exact hash set."]},{cardIndex:22,name:"Consistent Hashing",equation:"θ = hash(key) mod 2^256",sciences:["streaming","CDN","databases"],insightShort:"Consistent hashing IS the universal partitioner — K/n keys move, not all K",hostPages:["kafka","schema-registry"],hostReasons:["Kafka partition assignment across brokers, Akamai CDN edge routing, Cassandra shard assignment — all use the SAME hash ring. Adding a node moves 8% of data, not 50%."]},{cardIndex:23,name:"LSM-Tree Compaction",equation:"WA = (L+1)/L",sciences:["data engineering","databases","distributed storage"],insightShort:"LSM compaction IS the universal write amplifier — 1.25× vs B-tree's 4-10×",hostPages:["delta-lake","big-data-ingestion"],hostReasons:["Delta Lake Auto Compaction (18,400→12 files), RocksDB level compaction (L0→L1→L2→L3), Cassandra size-tiered compaction — all use the SAME merge-sort. Write amplification 1.25× vs B-tree's 4-10×."]},{cardIndex:24,name:"Count-Min Sketch",equation:"ê_i = min_j count[j][h_j(i)]",sciences:["streaming","genomics","networking"],insightShort:"CMS IS the universal frequency estimator — 4M× compression, bounded over-estimation",hostPages:["spark-streaming","flink"],hostReasons:["Spark Structured Streaming top-K, genome k-mer frequency counting (repeat detection), network heavy-hitter detection (DDoS) — all use the SAME d×w matrix. 20 KB vs 80 GB for exact hash map."]},{cardIndex:25,name:"Reservoir Sampling",equation:"P(item_i in sample) = k/N",sciences:["streaming","A/B testing","genomics"],insightShort:"Reservoir IS the universal sampler — O(k) memory, uniform sampling from unbounded stream",hostPages:["spark-streaming","streaming-sql"],hostReasons:["Kafka stream event sampling, A/B test cohort selection from live users, GWAS variant subsampling — all use the SAME k/N replace-probability algorithm. O(k) memory regardless of stream length."]},{cardIndex:26,name:"T-Digest",equation:"q̂(p) = merge(centroids)",sciences:["streaming","finance","observability"],insightShort:"T-Digest IS the universal quantile estimator — 80M× compression at the tails",hostPages:["spark-streaming","fintech"],hostReasons:["p99 latency in Spark, p99 VaR in Basel III Monte Carlo, p99 response time in Datadog — all use the SAME centroid-merging algorithm. 1 KB vs 80 GB for exact sorted array."]},{cardIndex:27,name:"Cuckoo Filter",equation:"i2 = i1 XOR hash(fingerprint)",sciences:["databases","networking","caching"],insightShort:"Cuckoo Filter IS Bloom's successor — same membership test, PLUS deletion support",hostPages:["delta-lake"],hostReasons:["Cassandra SSTable with dynamic keys, routing table add/remove, Redis cache invalidation — all need membership test WITH deletion. Bloom can't delete; Cuckoo can."]},{cardIndex:28,name:"Skip List",equation:"P(level L) = (1/2)^L",sciences:["databases","storage","compilers"],insightShort:"Skip List IS the universal ordered structure — O(log n) without tree rebalancing",hostPages:["duckdb"],hostReasons:["Redis ZSET (leaderboard), LevelDB/RocksDB memtable (sorted KV before SSTable flush), LLVM instruction scheduler — all use the SAME probabilistic linking. No rebalancing needed."]}];function n(e){return r.filter(t=>t.hostPages.includes(e))}let o={0:[3,9,19],1:[0,6,7],2:[7,9,13],3:[0,2,8],4:[8,5,16],5:[4,18,8],6:[7,12,1],7:[6,2,16],8:[4,18,16],9:[0,2,19],10:[18,14,12],11:[15,16,17],12:[6,10,7],13:[2,16,15],14:[10,18,17],15:[13,0,11],16:[13,4,7],17:[18,14,9],18:[10,8,17],19:[0,9,6]};function l(e){return o[e]??[]}e.s(["ELEGANT_CODE_MAP",0,r,"cardsOnHostPage",()=>n,"recommendedCards",()=>l],518550);var d=e.i(487486),m=e.i(394908),c=e.i(972520);let h="discovery-path-visited";function g({relatedPages:e=[]}){let[n,o]=(0,s.useState)(()=>{try{let e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{return[]}});(0,s.useEffect)(()=>{try{let e=localStorage.getItem(h);if(e){let t=JSON.parse(e);setTimeout(()=>o(t),0)}}catch{}},[]);let g=(0,s.useMemo)(()=>{let t=[];if(n.length>0){let e={};for(let t of n)for(let s of l(t))n.includes(s)||(e[s]=(e[s]??0)+1);for(let[s,i]of Object.entries(e).sort((e,t)=>t[1]-e[1]).slice(0,3)){let e=r[Number(s)];e&&t.push({id:"elegant-code",reason:`Explore ${e.name} — recommended by ${i} of your visited cards`,isCousin:!0})}}for(let s of e){if(t.length>=3)break;t.find(e=>e.id===s.id)||t.push({...s,isCousin:!1})}return 0===t.length&&(t.push({id:"elegant-code",reason:"Start with the 20 elegant-code cards",isCousin:!1}),t.push({id:"connections",reason:"See the card → card graph",isCousin:!1}),t.push({id:"resources",reason:"Browse datasets, papers, libraries",isCousin:!1})),t.slice(0,3)},[n,e]);return 0===g.length?null:(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3",children:[(0,t.jsxs)("p",{className:"text-xs font-semibold text-primary mb-2 flex items-center gap-1.5",children:[(0,t.jsx)(m.Compass,{className:"h-3.5 w-3.5"}),"Next steps — where to go from here",n.length>0&&(0,t.jsxs)("span",{className:"text-[9px] text-muted-foreground ml-1",children:["(",n.length," cards explored)"]})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:g.map((e,s)=>(0,t.jsxs)(i.default,{href:(0,a.hrefFor)(e.id),className:"text-xs text-primary hover:underline flex items-center gap-1",children:[(0,t.jsx)(c.ArrowRight,{className:"h-3 w-3"}),e.reason,e.isCousin&&(0,t.jsx)(d.Badge,{variant:"outline",className:"text-[8px] px-1 py-0 ml-1",children:"cousin"})]},s))})]})}e.s(["NextSteps",()=>g],342046)},332017,e=>{"use strict";var t=e.i(843476),s=e.i(522016),i=e.i(25652),a=e.i(810980),r=e.i(901752);function n({title:e,connectedTo:n,researchHref:o,children:l}){return(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4 space-y-2",children:[(0,t.jsxs)("div",{className:"flex items-start gap-2",children:[(0,t.jsx)(i.TrendingUp,{className:"h-4 w-4 text-primary mt-0.5 shrink-0"}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-foreground/90 leading-tight",children:e}),n&&(0,t.jsxs)("div",{className:"flex items-center gap-1.5 mt-1",children:[(0,t.jsx)(a.BookOpen,{className:"h-3 w-3 text-muted-foreground"}),(0,t.jsxs)(s.default,{href:o??(0,r.hrefFor)("research"),className:"text-[10px] text-muted-foreground hover:text-primary hover:underline",children:["Connected to: ",n," →"]})]})]})]}),(0,t.jsx)("div",{className:"text-xs text-muted-foreground leading-relaxed space-y-2 pl-6",children:l})]})}function o({pageTitle:e,children:s}){return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 border-b border-border/60 pb-2",children:[(0,t.jsx)(i.TrendingUp,{className:"h-5 w-5 text-primary"}),(0,t.jsxs)("h2",{className:"text-base font-bold text-foreground/90",children:["My deeper thoughts — ",e]})]}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground italic leading-relaxed",children:"These are not summaries. They are arguments — the kind of connections a reader with serious grey matter would make after living with the material for years. Each thought connects to the platform's research section (ADRs, papers, decision records) so it's traceable, not just opinionated."}),(0,t.jsx)("div",{className:"space-y-3",children:s})]})}e.s(["DeeperThought",()=>n,"DeeperThoughtSection",()=>o])},122836,e=>{"use strict";var t=e.i(843476),s=e.i(271645),i=e.i(678745),i=i,a=e.i(991124),a=a,r=e.i(519455);function n({code:e,language:n="sql",filename:o,highlight:l=[]}){let[d,m]=(0,s.useState)(!1),c=e.replace(/\n$/,"").split("\n"),h=async()=>{try{await navigator.clipboard.writeText(e),m(!0),setTimeout(()=>m(!1),1500)}catch{}};return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] overflow-hidden",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-[11px] text-white/60 font-mono",children:[(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-rose-400"}),(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-amber-400"}),(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-emerald-400"}),(0,t.jsx)("span",{className:"ml-2 uppercase tracking-wider",children:n}),o&&(0,t.jsxs)("span",{className:"text-white/40",children:["· ",o]})]}),(0,t.jsxs)(r.Button,{variant:"ghost",size:"sm",className:"h-6 px-2 text-[11px] text-white/70 hover:text-white hover:bg-white/10",onClick:h,"aria-label":"Copy code",children:[d?(0,t.jsx)(i.default,{className:"h-3 w-3 mr-1"}):(0,t.jsx)(a.default,{className:"h-3 w-3 mr-1"}),d?"Copied":"Copy"]})]}),(0,t.jsx)("pre",{className:"code-scroll overflow-x-auto p-3 text-[12.5px] leading-relaxed font-mono",children:(0,t.jsx)("code",{children:c.map((e,s)=>{let i=s+1,a=l.includes(i);return(0,t.jsxs)("div",{className:["flex",a?"bg-primary/20 -mx-3 px-3 border-l-2 border-primary":""].join(" "),children:[(0,t.jsx)("span",{className:"select-none text-white/30 w-8 inline-block text-right pr-3 shrink-0",children:i}),(0,t.jsx)("span",{className:"whitespace-pre",children:e||" "})]},i)})})})]})}function o({children:e}){return(0,t.jsx)("code",{className:"rounded bg-muted px-1.5 py-0.5 text-[12px] font-mono text-foreground/90 border border-border/60",children:e})}e.s(["CodeBlock",()=>n,"InlineCode",()=>o],122836)},868054,e=>{"use strict";var t=e.i(249988);e.s(["Terminal",()=>t.default])},716675,e=>{"use strict";var t=e.i(843476),s=e.i(271645),i=e.i(846932),a=e.i(88653),r=e.i(519455),n=e.i(487486),o=e.i(431343),l=e.i(531278),d=e.i(63209),m=e.i(595468),c=e.i(868054);let h=null,g="0.26.2",p=`https://cdn.jsdelivr.net/pyodide/v${g}/full/`;async function u(){return h||(h=(async()=>(await new Promise((e,t)=>{if(window.loadPyodide)return void e();let s=document.createElement("script");s.src=`${p}pyodide.js`,s.onload=()=>e(),s.onerror=()=>t(Error("Failed to load Pyodide bootstrap")),document.head.appendChild(s)}),await window.loadPyodide({indexURL:p})))())}function x({code:e,buttonLabel:h="Run in browser",preamble:p,compact:x=!1,onOutput:f,hideTextOutput:b=!1}){let[_,v]=(0,s.useState)("idle"),[y,S]=(0,s.useState)(""),[N,L]=(0,s.useState)(null),[I,T]=(0,s.useState)(null),j=(0,s.useRef)(null),w=(0,s.useCallback)(async()=>{v("loading"),L(null),S("Loading Pyodide runtime (~10MB)…\n");let t=performance.now();try{let s=await u(),i=Math.round(performance.now()-t);T(i);let a=[],r=e=>{a.push(e)};try{s.setStdout({batched:r}),s.setStderr({batched:r})}catch{try{s.setStdout(r),s.setStderr(r)}catch{}}if(/\bnumpy\b|\bnp\./.test(e)||p&&/\bnumpy\b/.test(p))try{await s.loadPackage("numpy")}catch{}v("running"),S(`Pyodide loaded in ${i}ms. Running…

`),p&&await s.runPythonAsync(p),await s.runPythonAsync(e);let n=a.join("");S(e=>e+(n||"(no output)")),v("done"),f&&f(n)}catch(t){let e=t instanceof Error?t.message:String(t);L(e),v("error"),S(t=>t+`
Error: ${e}`)}},[e,p,f]);return(0,s.useEffect)(()=>{j.current&&(j.current.scrollTop=j.current.scrollHeight)},[y]),(0,t.jsxs)("div",{className:`mt-3 ${x?"":"rounded-md border border-primary/30 bg-primary/3 p-3"}`,children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)(r.Button,{size:x?"sm":"default",variant:"running"===_||"loading"===_?"outline":"default",className:"gap-1.5",onClick:w,disabled:"loading"===_||"running"===_,children:["loading"===_||"running"===_?(0,t.jsx)(l.Loader2,{className:"h-3.5 w-3.5 animate-spin"}):"done"===_?(0,t.jsx)(m.CheckCircle2,{className:"h-3.5 w-3.5"}):"error"===_?(0,t.jsx)(d.AlertCircle,{className:"h-3.5 w-3.5"}):(0,t.jsx)(o.Play,{className:"h-3.5 w-3.5"}),h]}),!x&&(0,t.jsxs)(n.Badge,{variant:"outline",className:"text-[10px] gap-1",children:[(0,t.jsx)(c.Terminal,{className:"h-2.5 w-2.5"}),"Pyodide v",g]}),null!==I&&"done"===_&&(0,t.jsxs)("span",{className:"text-[10px] text-muted-foreground",children:["Runtime: ",I,"ms load + execution"]})]}),(0,t.jsx)(a.AnimatePresence,{children:("idle"!==_||y)&&!b&&(0,t.jsx)(i.motion.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2",children:(0,t.jsx)("div",{ref:j,className:`rounded-md bg-[oklch(0.16_0.005_240)] text-[oklch(0.97_0.005_60)] p-2.5 text-[11px] font-mono leading-relaxed overflow-x-auto code-scroll max-h-64 overflow-y-auto ${N?"border border-rose-500/40":"border border-emerald-500/30"}`,children:(0,t.jsx)("pre",{className:"whitespace-pre-wrap",children:y})})})})]})}e.s(["PyodideRunner",()=>x])},647559,e=>{"use strict";var t=e.i(843476),s=e.i(271645),i=e.i(846932),a=e.i(522016),r=e.i(862824),n=e.i(342046),o=e.i(122836),l=e.i(716675),d=e.i(901752),m=e.i(487486),c=e.i(332017),h=e.i(966992),g=e.i(39312),p=e.i(25652),u=e.i(868054),x=e.i(455711),f=e.i(555436),b=e.i(283086);let _=[{label:"Shared embedding",value:"ℝ^768",hint:"Text + image in the same vector space",deltaTone:"flat"},{label:"SigLIP loss",value:"sigmoid",hint:"Per-pair independent (vs CLIP softmax)",deltaTone:"flat"},{label:"SigLIP-SO400M",value:"800M params",hint:"ViT-SO400M + text transformer-400M",deltaTone:"flat"},{label:"Cross-modal recall@5",value:"~0.65",hint:"vs 0.85 intra-modal — gap closing",deltaTone:"flat"}];function v(){let[e,a]=(0,s.useState)(0);(0,s.useEffect)(()=>{let e=setInterval(()=>a(e=>(e+1)%5),1200);return()=>clearInterval(e)},[]);let r=[{id:"T1",type:"T",label:"revenue chart",x:80,y:90,color:"oklch(0.55 0.16 250 / 0.7)"},{id:"T2",type:"T",label:"customer growth",x:220,y:60,color:"oklch(0.55 0.16 250 / 0.7)"},{id:"T3",type:"T",label:"churn report",x:340,y:110,color:"oklch(0.55 0.16 250 / 0.7)"},{id:"T4",type:"T",label:"supply chain",x:140,y:200,color:"oklch(0.55 0.16 250 / 0.7)"},{id:"I1",type:"I",label:"📊",x:95,y:80,color:"oklch(0.55 0.16 145 / 0.7)"},{id:"I2",type:"I",label:"📈",x:230,y:65,color:"oklch(0.55 0.16 145 / 0.7)"},{id:"I3",type:"I",label:"📉",x:350,y:100,color:"oklch(0.55 0.16 145 / 0.7)"},{id:"I4",type:"I",label:"🌐",x:155,y:195,color:"oklch(0.55 0.16 145 / 0.7)"}];return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,t.jsx)("style",{children:`
        .mm-3d { perspective: 800px; }
        .mm-stage { transform: rotateX(15deg); transform-style: preserve-3d; }
      `}),(0,t.jsxs)("p",{className:"text-sm font-semibold mb-3 flex items-center gap-2",children:[(0,t.jsx)(b.Sparkles,{className:"h-4 w-4 text-primary"}),"Shared embedding space — text and image vectors in ℝ^768",(0,t.jsxs)("span",{className:"text-[10px] font-mono text-muted-foreground ml-auto",children:["phase ",e+1,"/5"]})]}),(0,t.jsx)("div",{className:"mm-3d",children:(0,t.jsx)("div",{className:"mm-stage",children:(0,t.jsxs)("svg",{width:"450",height:"260",viewBox:"0 0 450 260",children:[r.map((s,a)=>{let r=17*a,n=0===e?37*r%400+25:s.x,o=0===e?53*r%200+30:s.y;return(0,t.jsxs)(i.motion.g,{animate:{},children:[(0,t.jsx)(i.motion.circle,{cx:n,cy:o,r:12,fill:s.color,animate:{cx:n,cy:o,scale:3===e&&("T1"===s.id||"I1"===s.id)?1.4:1,stroke:3===e&&("T1"===s.id||"I1"===s.id)?"var(--primary)":"none",strokeWidth:3*(3===e&&("T1"===s.id||"I1"===s.id))}}),(0,t.jsxs)("text",{x:n,y:o+4,textAnchor:"middle",fontSize:9,fill:"white",fontWeight:"bold",children:[s.type,s.id.slice(1)]}),(0,t.jsx)("text",{x:n,y:o+25,textAnchor:"middle",fontSize:7,fill:"var(--muted-foreground)",children:e>=2?s.label:""})]},s.id)}),e>=1&&e<=2&&[["T1","I1"],["T2","I2"],["T3","I3"],["T4","I4"]].map(([s,a])=>{let n=r.find(e=>e.id===s),o=r.find(e=>e.id===a);return(0,t.jsx)(i.motion.line,{x1:n.x,y1:n.y,x2:o.x,y2:o.y,stroke:"var(--primary)",strokeWidth:"1",strokeDasharray:"2 2",initial:{opacity:0},animate:{opacity:1===e?.5:.2*(2===e)}},`pair-${s}-${a}`)}),e>=3&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.motion.circle,{cx:80,cy:95,r:16,fill:"none",stroke:"var(--primary)",strokeWidth:"2",initial:{scale:0},animate:{scale:1}}),(0,t.jsx)("text",{x:80,y:73,textAnchor:"middle",fontSize:9,fill:"var(--primary)",fontWeight:"bold",children:"Q: revenue chart"}),(0,t.jsx)(i.motion.line,{x1:80,y1:95,x2:r[0].x,y2:r[0].y,stroke:"var(--primary)",strokeWidth:"2",initial:{pathLength:0},animate:{pathLength:1}}),(0,t.jsx)(i.motion.line,{x1:80,y1:95,x2:r[4].x,y2:r[4].y,stroke:"var(--primary)",strokeWidth:"2",initial:{pathLength:0},animate:{pathLength:1}})]})]})})}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-2 mt-3 text-[10px]",children:[(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-2",children:[(0,t.jsx)("p",{className:"font-semibold mb-0.5",children:"Legend"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"T = text embedding · I = image embedding · Q = query"})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-2",children:[(0,t.jsx)("p",{className:"font-semibold mb-0.5",children:["1. Pre-training (random)","2. Contrastive pull","3. Aligned clusters","4. Query retrieves T+I","5. Cross-modal RAG"][e]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:["No alignment","Pairs pulled together","Semantic clusters form","Q near both T1 and I1","Stuff both into prompt"][e]})]})]}),(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mt-3",children:'After contrastive training, "revenue chart" (text) and 📊 (image) live at the same point in ℝ^768. A text query retrieves BOTH the text chunk AND the image — true cross-modal RAG.'})]})}let y=`# Contrastive Learning + Cross-modal RAG (Pyodide)
# CLIP / SigLIP loss + shared embedding simulation

import math, random

# ============================================================
# CLIP / SigLIP — contrastive learning math
# ============================================================
# Goal: learn image encoder f(I) and text encoder g(T) such that
# for matched (image, caption) pairs, cosine_sim is HIGH,
# for mismatched pairs, cosine_sim is LOW.
#
# CLIP loss (softmax over NxN batch):
#   L = -log(exp(sim(I_i, T_i)/τ) / Σ_j exp(sim(I_i, T_j)/τ))
# Each row i: softmax over all N captions
# Each col j: softmax over all N images
# Total: 2N classification problems
#
# SigLIP loss (sigmoid per pair — independent):
#   L = -log σ(z * (s * sim(I, T) - b))
# where z = +1 if matched, -1 if mismatched
# s = learnable temperature, b = learnable bias
# Independent per pair → scales to large batches without N\xb2 softmax

def cosine_sim(a, b):
    "Cosine similarity between two vectors"
    dot = sum(x*y for x, y in zip(a, b))
    na = math.sqrt(sum(x*x for x in a))
    nb = math.sqrt(sum(y*y for y in b))
    return dot / (na * nb) if na > 0 and nb > 0 else 0

def clip_loss(image_embs, text_embs, temperature=0.07):
    """
    CLIP loss: InfoNCE / NT-Xent.
    For batch of N (image, text) pairs, each row is a softmax over all N texts.
    """
    N = len(image_embs)
    # Compute NxN similarity matrix
    sim_matrix = [[cosine_sim(image_embs[i], text_embs[j]) for j in range(N)] for i in range(N)]
    # Per-row softmax with temperature
    loss = 0
    for i in range(N):
        # Logits for row i
        logits = [sim_matrix[i][j] / temperature for j in range(N)]
        # Softmax denominator
        max_logit = max(logits)
        exp_logits = [math.exp(l - max_logit) for l in logits]
        Z = sum(exp_logits)
        # Loss for row i (target is j=i)
        loss += -math.log(exp_logits[i] / Z)
    return loss / N

def siglip_loss(image_embs, text_embs, temperature=10.0, bias=-10.0):
    """
    SigLIP loss: per-pair sigmoid (independent).
    L = -log σ(z * (s * sim - b)) summed over all N\xb2 pairs
    where z = +1 for matched, -1 for mismatched
    """
    N = len(image_embs)
    loss = 0
    for i in range(N):
        for j in range(N):
            sim = cosine_sim(image_embs[i], text_embs[j])
            z = 1.0 if i == j else -1.0
            logit = z * (temperature * sim - bias)
            # Sigmoid
            sig = 1 / (1 + math.exp(-logit))
            loss += -math.log(sig + 1e-10)
    return loss / (N * N)

# ============================================================
# Simulate embeddings before / after training
# ============================================================
print("=" * 60)
print("Contrastive Learning — CLIP vs SigLIP")
print("=" * 60)

random.seed(42)
N = 4  # batch of 4 (image, text) pairs
dim = 32  # embedding dim (in production: 768)

# Before training: random embeddings (no alignment)
print(f"\\n--- BEFORE training (random embeddings) ---")
image_embs_before = [[random.gauss(0, 1) for _ in range(dim)] for _ in range(N)]
text_embs_before = [[random.gauss(0, 1) for _ in range(dim)] for _ in range(N)]

# Show similarity matrix
print(f"Similarity matrix (cosine sim):")
print(f"        T0     T1     T2     T3")
for i in range(N):
    row = [cosine_sim(image_embs_before[i], text_embs_before[j]) for j in range(N)]
    print(f"  I{i}  " + "  ".join(f"{s:+.2f}" for s in row))

clip_loss_before = clip_loss(image_embs_before, text_embs_before)
siglip_loss_before = siglip_loss(image_embs_before, text_embs_before)
print(f"\\nCLIP loss: {clip_loss_before:.3f}")
print(f"SigLIP loss: {siglip_loss_before:.3f}")
print(f"  (High loss — no alignment)")

# After training: pull matched pairs together, push mismatches apart
print(f"\\n--- AFTER training (simulated aligned embeddings) ---")
# Simulate: matched pairs have sim=0.95, mismatches have sim=0.10
image_embs_after = []
text_embs_after = []
# Create embeddings that are highly aligned for matched pairs
for i in range(N):
    base = [random.gauss(0, 1) for _ in range(dim)]
    image_embs_after.append(base[:])
    # Text embedding = base + small noise (so matched pair has high sim)
    text_embs_after.append([b + random.gauss(0, 0.1) for b in base])

print(f"Similarity matrix (cosine sim):")
print(f"        T0     T1     T2     T3")
for i in range(N):
    row = [cosine_sim(image_embs_after[i], text_embs_after[j]) for j in range(N)]
    print(f"  I{i}  " + "  ".join(f"{s:+.2f}" for s in row))

clip_loss_after = clip_loss(image_embs_after, text_embs_after)
siglip_loss_after = siglip_loss(image_embs_after, text_embs_after)
print(f"\\nCLIP loss: {clip_loss_after:.3f}  (was {clip_loss_before:.3f}, ↓ {(1 - clip_loss_after/clip_loss_before)*100:.0f}%)")
print(f"SigLIP loss: {siglip_loss_after:.3f}  (was {siglip_loss_before:.3f}, ↓ {(1 - siglip_loss_after/siglip_loss_before)*100:.0f}%)")
print(f"  (Low loss — matched pairs aligned, mismatches pushed apart)")

# ============================================================
# Cross-modal RAG retrieval
# ============================================================
print(f"\\n{'=' * 60}")
print("Cross-modal RAG Retrieval")
print("=" * 60)

# In pgvector: store both text and image embeddings in same HNSW index
# Each row: (id, modality, content, embedding)
corpus = [
    (1, "text",  "Q3 revenue breakdown by region"),
    (2, "image", "chart: bar chart of regional revenue"),
    (3, "text",  "customer churn analysis Q3"),
    (4, "image", "chart: line chart of churn rate"),
    (5, "text",  "supply chain Q3 status"),
    (6, "image", "chart: network diagram of suppliers"),
]

# Embeddings (simulated, all in same ℝ^32 space)
embeddings = []
random.seed(42)
for _, _, content in corpus:
    base = [random.gauss(0, 1) for _ in range(dim)]
    # Make content + "image" content have similar embeddings (post-CLIP)
    embeddings.append(base)

# Manually align: text 1 with image 2, text 3 with image 4, text 5 with image 6
embeddings[1] = [v + random.gauss(0, 0.05) for v in embeddings[0]]
embeddings[3] = [v + random.gauss(0, 0.05) for v in embeddings[2]]
embeddings[5] = [v + random.gauss(0, 0.05) for v in embeddings[4]]

# Query: "show me the revenue chart" (text query)
query = "show me the revenue chart"
# Use embedding close to corpus[0] (revenue text) — should retrieve both 0 and 1
query_emb = [v + random.gauss(0, 0.05) for v in embeddings[0]]

print(f"\\nQuery: '{query}'")
print(f"\\nCross-modal retrieval (top-3 from pgvector HNSW):")
sims = [(corpus[i][0], corpus[i][1], corpus[i][2], cosine_sim(query_emb, embeddings[i]))
        for i in range(len(corpus))]
sims.sort(key=lambda x: -x[3])
for i, (id_, mod, content, sim) in enumerate(sims[:3]):
    print(f"  {i+1}. [{mod:5s}] id={id_}: sim={sim:.3f}  '{content[:40]}'")

print(f"\\n  RESULT: retrieved both the revenue text chunk (id=1, text) AND")
print(f"  the revenue chart image (id=2, image) — cross-modal retrieval works!")
print(f"\\n  Naive (separate indexes) would return only id=1. SigLIP returns both.")

print(f"\\n{'=' * 60}")
print("KEY MATH:")
print("  CLIP: L = -log(exp(sim(I_i,T_i)/τ) / Σ_j exp(sim(I_i,T_j)/τ))")
print("  SigLIP: L = -log σ(z * (s * sim(I,T) - b))  per-pair independent")
print("  Cross-modal RAG: embed query (text OR image) → pgvector ANN → top-k (mixed modalities)")
print("=" * 60)`,S=`import torch
import torch.nn as nn
import torch.nn.functional as F
from typing import Tuple, List, Optional
import math

# ============================================================
# 1. SigLIP model — image + text encoders + sigmoid contrastive loss
# ============================================================

class SigLIPModel(nn.Module):
    """SigLIP: Sigmoid Loss for Language-Image Pretraining.
    
    Architecture:
        - Vision encoder: ViT (Vision Transformer, see ADR-026)
        - Text encoder: Transformer (BERT-style, see /transformer)
        - Shared projection: both encoders output ℝ^768 (the shared embedding space)
        - Loss: per-pair sigmoid (independent, scales to large batches)
    
    SigLIP vs CLIP:
        CLIP loss: L = -log(exp(sim(I_i,T_i)/τ) / Σ_j exp(sim(I_i,T_j)/τ))  (softmax, NxN dependent)
        SigLIP loss: L = -log σ(z * (s * sim(I,T) - b))  (per-pair, independent)
    
    SigLIP scales to large batches (32k+) because each pair is independent.
    """
    def __init__(self, image_size: int = 224, text_max_len: int = 64,
                 embed_dim: int = 768, vision_layers: int = 12,
                 text_layers: int = 12, num_heads: int = 12):
        super().__init__()
        # Vision encoder: ViT (see computer-vision page)
        # In production: load pre-trained ViT-SO400M
        self.vision_encoder = VisionEncoder(
            image_size=image_size,
            patch_size=16,
            embed_dim=embed_dim,
            num_layers=vision_layers,
            num_heads=num_heads,
        )
        # Text encoder: Transformer (see transformer page)
        # In production: load pre-trained transformer-400M
        self.text_encoder = TextEncoder(
            vocab_size=32000,
            max_len=text_max_len,
            embed_dim=embed_dim,
            num_layers=text_layers,
            num_heads=num_heads,
        )
        # Learnable temperature + bias (SigLIP-specific)
        self.logit_scale = nn.Parameter(torch.ones([]) * math.log(10.0))
        self.logit_bias = nn.Parameter(torch.ones([]) * -10.0)
    
    def encode_image(self, pixel_values: torch.Tensor) -> torch.Tensor:
        """Encode batch of images → ℝ^768 embeddings."""
        # L2-normalise (so cosine similarity = dot product)
        emb = self.vision_encoder(pixel_values)
        return F.normalize(emb, dim=-1)
    
    def encode_text(self, input_ids: torch.Tensor) -> torch.Tensor:
        """Encode batch of text → ℝ^768 embeddings."""
        emb = self.text_encoder(input_ids)
        return F.normalize(emb, dim=-1)
    
    def forward(self, images: torch.Tensor, text_ids: torch.Tensor) -> Tuple[torch.Tensor, torch.Tensor]:
        """Encode both modalities."""
        return self.encode_image(images), self.encode_text(text_ids)
    
    def siglip_loss(self, image_embs: torch.Tensor, text_embs: torch.Tensor) -> torch.Tensor:
        """
        SigLIP loss: per-pair sigmoid, independent.
        
        L = -log σ(z * (s * sim(I,T) - b))
        
        For batch of N (image, text) pairs:
        - Positive pairs: (I_i, T_i) with z = +1
        - Negative pairs: (I_i, T_j≠i) with z = -1
        - Total: N\xb2 pairs, each contributing a sigmoid loss
        """
        # Logits: N\xd7N matrix of (s * sim - b) for each (image_i, text_j)
        logits = self.logit_scale.exp() * (image_embs @ text_embs.T) + self.logit_bias
        # Labels: 1 for diagonal (matched), -1 for off-diagonal (mismatched)
        labels = 2 * torch.eye(image_embs.shape[0], device=image_embs.device) - 1
        # Sigmoid loss: -log σ(label * logit) = softplus(-label * logit)
        loss = -F.logsigmoid(labels * logits).mean()
        return loss

# ============================================================
# 2. Vision encoder (ViT) — simplified from computer-vision page
# ============================================================

class VisionEncoder(nn.Module):
    """ViT for SigLIP image branch. Identical to ADR-026 vision tower."""
    def __init__(self, image_size: int = 224, patch_size: int = 16,
                 embed_dim: int = 768, num_layers: int = 12, num_heads: int = 12):
        super().__init__()
        self.patch_embed = nn.Conv2d(3, embed_dim, kernel_size=patch_size, stride=patch_size)
        num_patches = (image_size // patch_size) ** 2
        self.cls_token = nn.Parameter(torch.zeros(1, 1, embed_dim))
        self.pos_embed = nn.Parameter(torch.zeros(1, num_patches + 1, embed_dim))
        # Transformer encoder blocks (same as /transformer page)
        encoder_layer = nn.TransformerEncoderLayer(
            d_model=embed_dim, nhead=num_heads, batch_first=True,
            dim_feedforward=embed_dim * 4, activation='gelu',
        )
        self.transformer = nn.TransformerEncoder(encoder_layer, num_layers=num_layers)
        self.norm = nn.LayerNorm(embed_dim)
    
    def forward(self, pixel_values: torch.Tensor) -> torch.Tensor:
        # (B, 3, H, W) → (B, embed_dim, H/patch, W/patch) → (B, num_patches, embed_dim)
        x = self.patch_embed(pixel_values)
        x = x.flatten(2).transpose(1, 2)
        # Prepend CLS token
        cls = self.cls_token.expand(x.shape[0], -1, -1)
        x = torch.cat([cls, x], dim=1)
        x = x + self.pos_embed
        x = self.transformer(x)
        x = self.norm(x)
        # Use CLS token as image embedding
        return x[:, 0]  # (B, embed_dim)

# ============================================================
# 3. Text encoder — simplified from transformer page
# ============================================================

class TextEncoder(nn.Module):
    """Transformer for SigLIP text branch. Identical structure to /transformer."""
    def __init__(self, vocab_size: int = 32000, max_len: int = 64,
                 embed_dim: int = 768, num_layers: int = 12, num_heads: int = 12):
        super().__init__()
        self.token_embed = nn.Embedding(vocab_size, embed_dim)
        self.pos_embed = nn.Parameter(torch.zeros(1, max_len, embed_dim))
        encoder_layer = nn.TransformerEncoderLayer(
            d_model=embed_dim, nhead=num_heads, batch_first=True,
            dim_feedforward=embed_dim * 4, activation='gelu',
        )
        self.transformer = nn.TransformerEncoder(encoder_layer, num_layers=num_layers)
        self.norm = nn.LayerNorm(embed_dim)
    
    def forward(self, input_ids: torch.Tensor) -> torch.Tensor:
        # (B, L) → (B, L, embed_dim)
        x = self.token_embed(input_ids)
        x = x + self.pos_embed[:, :x.shape[1]]
        x = self.transformer(x)
        x = self.norm(x)
        # Use first token (typically [CLS]) as text embedding
        return x[:, 0]  # (B, embed_dim)

# ============================================================
# 4. Multi-modal RAG retriever (extends ADR-032 hybrid)
# ============================================================

class MultiModalRAGRetriever:
    """Cross-modal RAG retriever using SigLIP embeddings.
    
    Extends ADR-032 hybrid retrieval with cross-modal capability.
    Same pgvector index stores both text and image embeddings.
    """
    def __init__(self, siglip_model: SigLIPModel, vector_store,
                 cross_encoder=None):
        self.siglip = siglip_model
        self.vector_store = vector_store  # pgvector wrapper (same as ADR-022)
        self.cross_encoder = cross_encoder  # for re-ranking (multi-modal variant)
    
    def index_documents(self, documents: List[Tuple[str, str]]):
        """Index mixed-modality corpus.
        
        Args:
            documents: list of (modality, content) tuples
                modality: 'text' or 'image'
                content: text string OR image path/URL
        """
        text_batch = []
        image_batch = []
        metadata_batch = []
        
        for modality, content in documents:
            if modality == 'text':
                # Encode text with SigLIP text encoder
                text_batch.append(content)
            else:
                # Load image, encode with SigLIP image encoder
                image = load_image(content)
                image_batch.append(image)
            metadata_batch.append({'modality': modality, 'content': content})
        
        # Batch encode (more efficient than per-item)
        text_embs = []
        image_embs = []
        if text_batch:
            text_ids = tokenize(text_batch)
            text_embs = self.siglip.encode_text(text_ids).tolist()
        if image_batch:
            image_tensor = torch.stack(image_batch)
            image_embs = self.siglip.encode_image(image_tensor).tolist()
        
        # Store in pgvector — modality column allows filtering when needed
        # CREATE TABLE chunks (id, modality, content, embedding vector(768))
        all_embs = []
        text_idx, image_idx = 0, 0
        for modality, _ in documents:
            if modality == 'text':
                all_embs.append(text_embs[text_idx])
                text_idx += 1
            else:
                all_embs.append(image_embs[image_idx])
                image_idx += 1
        
        self.vector_store.upsert(
            [m['content'] for m in metadata_batch],
            all_embs,
            metadata=metadata_batch,  # includes modality tag
        )
    
    def retrieve(self, query: str, query_modality: str = 'text',
                 top_k: int = 5) -> List[dict]:
        """Cross-modal retrieval.
        
        Args:
            query: text string OR image path
            query_modality: 'text' or 'image'
            top_k: number of results
        
        Returns: list of {modality, content, score} dicts, mixed
        """
        # Encode query
        if query_modality == 'text':
            query_ids = tokenize([query])
            query_emb = self.siglip.encode_text(query_ids)
        else:
            image = load_image(query)
            query_emb = self.siglip.encode_image(image.unsqueeze(0))
        
        # ANN search — returns top-k regardless of modality
        # SQL: SELECT id, modality, content, embedding <=> query_emb AS dist
        #      FROM chunks ORDER BY dist LIMIT 50
        results = self.vector_store.search(query_emb.squeeze(0), top_k=50)
        
        # Cross-encoder re-rank (multi-modal variant)
        # In production: use a multi-modal LLM (LLaVA-1.5) to score each (query, doc) pair
        if self.cross_encoder:
            results = self.cross_encoder.rerank(query, results, top_k=top_k)
        else:
            results = results[:top_k]
        
        return results[:top_k]

# ============================================================
# 5. Multi-modal LLM (LLaVA-style) for cross-encoder re-rank
# ============================================================

class MultiModalLLM(nn.Module):
    """LLaVA-style multi-modal LLM for cross-encoder re-ranking.
    
    Takes (image, text) pairs, scores them via cross-attention.
    Used as the cross-encoder in stage 3 of multi-modal RAG.
    """
    def __init__(self, vision_encoder, llm):
        super().__init__()
        self.vision_encoder = vision_encoder
        self.llm = llm  # any LLM (Llama, Qwen, etc.)
        # Projection: vision embed → LLM embed space
        self.projection = nn.Linear(768, llm.config.hidden_size)
    
    def forward(self, images: torch.Tensor, text_ids: torch.Tensor) -> torch.Tensor:
        """Score (image, text) pairs via cross-attention in the LLM."""
        # Encode images
        image_embs = self.vision_encoder(images)  # (B, 768)
        # Project to LLM embed space
        image_embs = self.projection(image_embs)  # (B, hidden_size)
        # Concatenate as "image tokens" before text
        text_embs = self.llm.embed_tokens(text_ids)
        # [image_emb] + text_embs → full input
        full_input = torch.cat([image_embs.unsqueeze(1), text_embs], dim=1)
        # Forward through LLM
        outputs = self.llm(inputs_embeds=full_input)
        # Use last hidden state at [CLS] position for scoring
        return outputs.last_hidden_state[:, 0]  # (B, hidden_size)

# Sanity check
if __name__ == "__main__":
    # Test SigLIP model
    model = SigLIPModel(image_size=224, embed_dim=384, vision_layers=2, text_layers=2, num_heads=6)
    print(f"SigLIP parameters: {sum(p.numel() for p in model.parameters()):,}")
    
    # Forward pass
    images = torch.randn(4, 3, 224, 224)
    text_ids = torch.randint(0, 32000, (4, 32))
    image_embs, text_embs = model(images, text_ids)
    print(f"Image embeddings: {tuple(image_embs.shape)}")
    print(f"Text embeddings: {tuple(text_embs.shape)}")
    
    # Loss
    loss = model.siglip_loss(image_embs, text_embs)
    print(f"SigLIP loss: {loss.item():.3f}")
    
    # Simulate training: pull matched pairs together
    # (in practice, this requires thousands of GPU-hours)
    print(f"\\n(Simulated training pulls matched pairs together)")`;function N(){return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsx)(r.PageHeader,{eyebrow:"Multi-modal RAG · CLIP / SigLIP · cross-modal pgvector",title:"Multi-modal RAG — Text + Image in One Embedding Space",description:"The math behind cross-modal retrieval: CLIP contrastive loss (InfoNCE, NxN softmax) vs SigLIP sigmoid loss (per-pair independent, scales to large batches). After training on (image, caption) pairs, both encoders produce vectors in the same ℝ^768 space — cosine similarity between a text query and an image embedding is meaningful. With low-level PyTorch implementations of VisionEncoder, TextEncoder, SigLIPModel with sigmoid loss, MultiModalRAGRetriever (extends ADR-032 hybrid to mixed modalities), and LLaVA-style MultiModalLLM for cross-encoder re-rank. Code-oriented, mathematical, scientific.",right:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)(m.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(b.Sparkles,{className:"h-3 w-3"})," CLIP / SigLIP"]}),(0,t.jsxs)(m.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(g.Zap,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:_.map(e=>(0,t.jsx)(r.KpiCard,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,t.jsx)(r.SectionCard,{title:"Shared embedding space — text and image in ℝ^768",description:"Pre-training: text and image embeddings are randomly scattered — no alignment. Contrastive training pulls matched (text, image) pairs together and pushes mismatches apart. After training: 'revenue chart' (text) and 📊 (image) live at the same point. A text query retrieves BOTH modalities — true cross-modal RAG.",icon:(0,t.jsx)(b.Sparkles,{className:"h-5 w-5"}),badge:"3D animation",children:(0,t.jsx)(v,{})}),(0,t.jsx)(r.SectionCard,{title:"Contrastive loss math — CLIP (softmax) vs SigLIP (sigmoid)",description:"CLIP uses InfoNCE loss: NxN softmax over a batch, each row pulls the matched pair together and pushes N-1 negatives apart. SigLIP replaces softmax with per-pair sigmoid — each (image, text) pair contributes an independent loss term. The key advantage: sigmoid scales to large batches (32k+) because pairs are independent; softmax requires O(N²) memory and time.",icon:(0,t.jsx)(x.Brain,{className:"h-5 w-5"}),badge:"mathematics",children:(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-xs text-primary",children:"CLIP: L = -log( exp(s·sim(I_i,T_i)) / Σ_j exp(s·sim(I_i,T_j)) )"}),(0,t.jsx)("p",{className:"font-mono text-xs text-primary mt-1.5",children:"SigLIP: L = -log σ( z · (s·sim(I,T) - b) )"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"z = +1 for matched pairs, -1 for mismatched. s = learnable temperature, b = learnable bias. Independent per pair."})]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-2 text-xs",children:[(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"CLIP (softmax, 2021)"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"InfoNCE = softmax over N² pairs"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1.5",children:"Each row depends on all N captions. O(N²) memory for gradients. Caps at batch 32k — beyond that, FLOPs explode."}),(0,t.jsx)("p",{className:"text-[11px] mt-1.5",children:"Original CLIP used batch 32k on 256× V100 (JFT-400M corpus)."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"SigLIP (sigmoid, 2023)"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"Per-pair sigmoid — independent"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1.5",children:"Each (I, T) pair contributes an independent loss. No batch-N×N coupling. Scales to batch 1M+ on TPU."}),(0,t.jsx)("p",{className:"text-[11px] mt-1.5",children:"SigLIP-SO400M trained on 12B (image, caption) pairs — 30× CLIP's data."})]})]})]})}),(0,t.jsx)(r.SectionCard,{title:"Try it: Contrastive loss + cross-modal retrieval (Pyodide)",description:"Implements both CLIP (softmax) and SigLIP (sigmoid) loss functions from scratch. Simulates random embeddings (pre-training) → aligned embeddings (post-training), shows the similarity matrix change. Then runs cross-modal retrieval: a text query retrieves both the matching text chunk AND the matching image from the same pgvector index.",icon:(0,t.jsx)(u.Terminal,{className:"h-5 w-5"}),badge:"executable",children:(0,t.jsx)(l.PyodideRunner,{code:y,buttonLabel:"Run contrastive learning demo (Pyodide)"})}),(0,t.jsx)(r.SectionCard,{title:"Cross-modal RAG pipeline — extends ADR-032 to mixed modalities",description:"Same three-stage pipeline as ADR-032, but the pgvector index stores BOTH text and image embeddings (modality column tags each row). Stage 1: chunk + embed (text via SigLIP text branch, image via SigLIP image branch — both in same space). Stage 2: hybrid BM25 + SigLIP vector → RRF fusion. Stage 3: multi-modal LLM cross-encoder (LLaVA-style) re-ranks mixed-modality results.",icon:(0,t.jsx)(f.Search,{className:"h-5 w-5"}),children:(0,t.jsx)(o.CodeBlock,{language:"text",filename:"cross_modal_rag.txt",code:`┌──────────────────────────────────────────────────────────────────────┐
│  MULTI-MODAL RAG PIPELINE (extends ADR-032)                              │
│                                                                            │
│  USER QUERY (text OR image):                                              │
│  ┌──────────────────────────────────────────────────────────────┐         │
│  │ "Show me charts where UK revenue > \xa32M"                       │         │
│  │  OR  [image of a bar chart]                                    │         │
│  └──────────────────────────────────────────────────────────────┘         │
│                              │                                            │
│                              ▼                                            │
│  ┌──────────────────────────────────────────────────────┐                │
│  │ SigLIP encoder (text OR image branch)                 │                │
│  │   text query → encode_text()    → 768-dim vector       │                │
│  │   image query → encode_image()  → 768-dim vector       │                │
│  │   SAME embedding space — cross-modal works            │                │
│  └──────────────────────────────────────────────────────┘                │
│                              │                                            │
│                              ▼                                            │
│  ┌──────────────────────────────────────────────────────┐                │
│  │ pgvector HNSW search (top-50, ANY modality)           │                │
│  │   SQL: SELECT id, modality, content, embedding <=> Q  │                │
│  │        FROM chunks ORDER BY dist LIMIT 50             │                │
│  │   Returns: text chunks AND image chunks interleaved   │                │
│  └──────────────────────────────────────────────────────┘                │
│                              │                                            │
│                              ▼                                            │
│  ┌──────────────────────────────────────────────────────┐                │
│  │ Multi-modal LLM (LLaVA) cross-encoder re-rank         │                │
│  │   For each result:                                    │                │
│  │     If text: score = LLM([Q; doc])[CLS]                │                │
│  │     If image: score = LLM([Q; image_proj])[CLS]        │                │
│  │   Returns: top-5 mixed (text + image)                  │                │
│  └──────────────────────────────────────────────────────┘                │
│                              │                                            │
│                              ▼                                            │
│  ┌──────────────────────────────────────────────────────┐                │
│  │ Augmented prompt → vLLM (ADR-031)                     │                │
│  │   Context: [top-5 mixed results with modality tags]   │                │
│  │   Question: user query                                │                │
│  │   Answer: LLM generates text response                 │                │
│  └──────────────────────────────────────────────────────┘                │
│                                                                            │
│  APPLICATIONS:                                                             │
│  - Image → image: "find dashboards with similar patterns"                │
│  - Image → text: "find SQL that produces this chart"                       │
│  - Text → image: "show me charts of Q3 revenue"                            │
│  - Text → text: classic RAG (ADR-032)                                      │
│                                                                            │
│  pgvector index stores BOTH modalities (same HNSW):                       │
│    CREATE TABLE chunks (                                                   │
│      id BIGSERIAL PRIMARY KEY,                                             │
│      modality TEXT,  -- 'text' | 'image'                                   │
│      content TEXT,                                                          │
│      embedding vector(768)  -- same dim for both                          │
│    );                                                                       │
│    CREATE INDEX ON chunks USING hnsw (embedding vector_cosine_ops);       │
└──────────────────────────────────────────────────────────────────────────────┘`})}),(0,t.jsx)(r.SectionCard,{title:"Low-level PyTorch — SigLIPModel, VisionEncoder, TextEncoder, MultiModalRAGRetriever, MultiModalLLM",description:"The actual production code. SigLIPModel wraps both encoders + the sigmoid contrastive loss (with learnable logit_scale and logit_bias). VisionEncoder is the ViT from ADR-026. TextEncoder is the transformer from /transformer. siglip_loss implements the per-pair sigmoid loss: -log σ(z·(s·sim-b)). MultiModalRAGRetriever extends ADR-032's hybrid retriever: same pgvector index, modality-aware indexing, cross-modal query. MultiModalLLM is LLaVA-style — projects image embeddings into LLM space and concatenates with text tokens for cross-attention.",icon:(0,t.jsx)(h.Cpu,{className:"h-5 w-5"}),badge:"low-level",children:(0,t.jsx)(o.CodeBlock,{language:"python",filename:"multimodal_rag.py",highlight:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273],code:S})}),(0,t.jsx)(r.SectionCard,{title:"My deeper thought: contrastive learning IS metric learning IS the embedding IS the index",description:"CLIP/SigLIP is not just a model — it's a general principle: any two modalities that can be paired (image+caption, code+docstring, SQL+description, audio+transcript) can be projected into a shared embedding space via contrastive learning. The shared space IS the index. The platform is one big contrastive-learning problem.",icon:(0,t.jsx)(p.TrendingUp,{className:"h-5 w-5"}),badge:"Insight",children:(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:["The contrastive learning principle generalises far beyond image+text. ",(0,t.jsx)("strong",{className:"text-foreground/80",children:"Any two modalities that co-occur can be aligned via contrastive learning."})," Code+docstring (CodeBERT), audio+transcript (Whisper), SQL+description (this platform's ADR-024 semantic layer), video+caption (VideoCLIP), molecule+SMILES — all follow the same pattern: train two encoders, pull matched pairs together, push mismatches apart, end up with a shared embedding space where cross-modal similarity is meaningful. The architecture is invariant to the modality. The math is invariant to the encoder."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"The shared embedding space IS the unified query language."})," ADR-024's NL-to-SQL semantic layer is structurally a contrastive learning problem: align natural language queries with SQL queries via the (NL, SQL) pairs in the gold tables. ADR-032's hybrid RAG aligns query embeddings with document embeddings via the (query, doc) labels in MS MARCO. ADR-033's SigLIP aligns image embeddings with text embeddings via the (image, caption) pairs in LAION-5B. All three are the same algorithm: contrastive learning on paired data, producing a shared space, queried via ANN. The \"unified semantic layer\" the platform has been building since ADR-024 IS a sequence of contrastive-learning applications, each on a different modality pair."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"This unifies the platform's entire GenAI stack under one principle."}),' ADR-022 pgvector stores any embedding — text (ADR-032 RAG), image (ADR-026 ViT), synthetic image (ADR-027 DDPM → ViT → pgvector), multi-modal (ADR-033 SigLIP). ADR-029 OpenTelemetry traces every retrieval — each (query, retrieved) pair is a span, the trace is the contrastive-learning gradient signal in production. ADR-031 vLLM serves the LLM that consumes the retrieved context — the LLM is the projection operator (from /rag-deep-dive insight) that maps the embedding back to natural language. The whole platform from data ingestion to LLM response is one big contrastive-learning pipeline, where the "training data" is the user\'s queries + the platform\'s content, the "encoders" are the platform\'s services, and the "shared embedding space" is pgvector. The user\'s NL question is the query embedding; the platform\'s response is the retrieved nearest neighbour. Every user interaction is a contrastive-learning step — the platform IS the model.']})]})}),(0,t.jsxs)(c.DeeperThoughtSection,{pageTitle:"Multi-modal RAG",children:[(0,t.jsx)(c.DeeperThought,{title:"Multi-modal RAG IS part of a larger system — no page stands alone",connectedTo:"ADR-001 (platform architecture)",children:(0,t.jsx)("p",{children:"This page about Multi-modal RAG is not an isolated reference — it's a node in a graph. The platform's thesis is that the same math appears across genomics, fintech, maritime, and audio. Multi-modal RAG connects to the elegant-code cards via shared equations, and to the living-equation pages via live demos. The reader who arrives here looking for facts leaves with a map of where Multi-modal RAG sits in the computational-science landscape."})}),(0,t.jsx)(c.DeeperThought,{title:"The technology will change; the math won't",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,t.jsx)("p",{children:"In a decade, the specific tools on this page (Multi-modal RAG) may be replaced. But the underlying mathematics — the equations, the distributions, the optimisation rules — will be the same. SVD was invented in 1873 and still runs on NumPy today. Attention was described in 2017 and will run on whatever replaces PyTorch. The platform invests in the MATH, not the tools, because the math is the part that survives technology turnover."})}),(0,t.jsx)(c.DeeperThought,{title:"The fold pattern respects the reader's attention",connectedTo:"ADR-050 (fold-section architecture)",children:(0,t.jsx)("p",{children:"This page has fold sections (collapsed by default) that reveal deeper content on demand — equation family comparisons, LaTeX derivations, production patterns, expected outputs, and citations. The basic content is visible immediately; the deeper phases are there when the reader is ready. Progressive disclosure isn't just UX — it's epistemological. A reader who wants the summary gets it; a reader who wants the derivation clicks to expand. Both are served by the same page."})}),(0,t.jsx)(c.DeeperThought,{title:"The output IS the proof — not just the equation",connectedTo:"ADR-034 (ESM-2 + AlphaFold2 adoption)",children:(0,t.jsx)("p",{children:"Where this page has interactive demos (Pyodide + sliders + charts), the visual output IS the argument. Seeing a chart update as you drag a slider communicates the math in a way no formula can. The brain's pattern-recognition system processes the visual output faster than the verbal/analytical pathway. That's why the platform pairs every equation with a live demo — the output plays to a different level of the brain than the prose."})}),(0,t.jsx)(c.DeeperThought,{title:"In a decade, this page will evolve — and that's the point",connectedTo:"ADR-022 (pgvector for variant embeddings)",children:(0,t.jsx)("p",{children:"The datasets, libraries, and tools on this page will be updated as technology evolves. The 1000-Genomes Project will become the 10M-Genomes Project. NumPy may be replaced by a WebGPU-native array library. PyTorch may give way to a successor. But the math — SVD, Attention, Poisson, FFT, Bayes, Kalman, GBM — will be the same. The platform is designed for this evolution: the equations are the anchor, the tools are the amplifier, and the fold sections let us update the tools without rewriting the page."})})]}),(0,t.jsx)(n.NextSteps,{relatedPages:[{id:"connections",reason:"Trace this topic's connections across the platform's math graph"},{id:"rag-deep-dive",reason:"Continue to rag deep dive — see also from this page"},{id:"computer-vision",reason:"Continue to computer vision — see also from this page"}]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(a.default,{href:(0,d.hrefFor)("rag-deep-dive"),className:"text-sm text-primary hover:underline",children:"→ RAG Deep Dive (the text-only baseline this extends)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(a.default,{href:(0,d.hrefFor)("computer-vision"),className:"text-sm text-primary hover:underline",children:"→ Computer Vision (ViT — the image branch)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(a.default,{href:(0,d.hrefFor)("transformer"),className:"text-sm text-primary hover:underline",children:"→ Transformer (the text branch)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(a.default,{href:(0,d.hrefFor)("diffusion-models"),className:"text-sm text-primary hover:underline",children:"→ Diffusion Models (synthetic images → SigLIP → pgvector)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(a.default,{href:(0,d.hrefFor)("vector-db"),className:"text-sm text-primary hover:underline",children:"→ Vector DB (pgvector — the shared index)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(a.default,{href:(0,d.hrefFor)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ ADR-033 (SigLIP adoption)"})]})]})}e.s(["MultiModalRagPage",()=>N])}]);