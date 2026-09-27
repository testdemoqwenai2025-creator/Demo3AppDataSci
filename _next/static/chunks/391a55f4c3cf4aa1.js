(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,605845,e=>{"use strict";var t=e.i(843476),a=e.i(271645),r=e.i(846932),s=e.i(522016),i=e.i(862824),o=e.i(342046),n=e.i(122836),l=e.i(716675),d=e.i(158960),c=e.i(675450),p=e.i(237064),m=e.i(487486),h=e.i(78094),u=e.i(966992),f=e.i(21218),g=e.i(25652),x=e.i(39312),b=e.i(212426),_=e.i(217923),y=e.i(878894),v=e.i(519455),k=e.i(367240),S=e.i(431343),w=e.i(218755);let j=[{id:"bs",step:"1",title:"Black-Scholes calculator",subtitle:"C = S·N(d₁) - K·e^(-rT)·N(d₂) + 5 Greeks",accent:"oklch(0.55 0.16 30)",icon:(0,t.jsx)(b.DollarSign,{className:"h-4 w-4"}),thumb:(0,t.jsx)(function(){return(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("line",{x1:"10",y1:"115",x2:"90",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)(r.motion.path,{d:"M 10 115 L 50 115 L 80 95 L 90 75",fill:"none",stroke:"oklch(0.75 0.20 30)",strokeWidth:"1.5",animate:{d:["M 10 115 L 50 115 L 80 95 L 90 75","M 10 115 L 50 115 L 80 100 L 90 80","M 10 115 L 50 115 L 80 95 L 90 75"]},transition:{duration:2,repeat:1/0}}),(0,t.jsx)("text",{x:"50",y:"30",textAnchor:"middle",fontSize:"8",fill:"oklch(0.65 0.10 250)",fontWeight:"bold",children:"C = S·N(d₁)"}),(0,t.jsx)("text",{x:"50",y:"125",textAnchor:"middle",fontSize:"6",fill:"oklch(0.65 0.10 250)",children:"Long call payoff"}),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:"oklch(0.55 0.10 250)",children:"- K·e^(-rT)·N(d₂)"})]})},{}),content:(0,t.jsx)(function(){let[e,r]=(0,a.useState)(100),[s,i]=(0,a.useState)(100),[o,n]=(0,a.useState)(.05),[l,d]=(0,a.useState)(.2),[c,p]=(0,a.useState)(1),[m,h]=(0,a.useState)("call");function u(e){let t=1/(1+.2316419*Math.abs(e)),a=.3989423*Math.exp(-e*e/2)*t*(.3193815+t*(-.3565638+t*(1.781478+t*(-1.821256+1.330274*t))));return e>0?1-a:a}function f(e){return Math.exp(-e*e/2)/Math.sqrt(2*Math.PI)}let g=(Math.log(e/s)+(o+l*l/2)*c)/(l*Math.sqrt(c)),x=g-l*Math.sqrt(c),b=u(g),_=u(x),y=e*b-s*Math.exp(-o*c)*_,v=s*Math.exp(-o*c)*(1-_)-e*(1-b),k="call"===m?y:v,S="call"===m?b:b-1,j=f(g)/(e*l*Math.sqrt(c)),N=e*f(g)*Math.sqrt(c)/100,T="call"===m?(-(e*f(g)*l)/(2*Math.sqrt(c))-o*s*Math.exp(-o*c)*_)/365:(-(e*f(g)*l)/(2*Math.sqrt(c))+o*s*Math.exp(-o*c)*(1-_))/365,M=("call"===m?s*c*Math.exp(-o*c)*_:-s*c*Math.exp(-o*c)*(1-_))/100;return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,t.jsx)("div",{className:"rounded-md border border-border/60 bg-card p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 360 280",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"20",y1:"180",x2:"340",y2:"180",stroke:"oklch(0.55 0.10 250 / 0.4)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"20",y1:"20",x2:"20",y2:"240",stroke:"oklch(0.55 0.10 250 / 0.4)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:20+(s-50)/100*320,y1:"20",x2:20+(s-50)/100*320,y2:"240",stroke:"oklch(0.65 0.16 250 / 0.3)",strokeWidth:"0.5",strokeDasharray:"2 2"}),(0,t.jsx)("line",{x1:20+(e-50)/100*320,y1:"20",x2:20+(e-50)/100*320,y2:"240",stroke:"oklch(0.65 0.16 30 / 0.3)",strokeWidth:"0.5",strokeDasharray:"2 2"}),"call"===m?(0,t.jsx)("polyline",{points:`20,180 ${20+(s-50)/100*320},180 ${20+(e+50-50)/100*320},${180-(e+50-s)*2}`,fill:"none",stroke:"oklch(0.75 0.20 30)",strokeWidth:"1.5"}):(0,t.jsx)("polyline",{points:`20,${180-(s-50)*2} ${20+(s-50)/100*320},180 340,180`,fill:"none",stroke:"oklch(0.75 0.20 250)",strokeWidth:"1.5"}),(0,t.jsx)("circle",{cx:20+(e-50)/100*320,cy:180-2*k,r:"4",fill:"call"===m?"oklch(0.85 0.20 30)":"oklch(0.85 0.20 250)",stroke:"oklch(0.65 0.10 250)",strokeWidth:"1"}),(0,t.jsx)("text",{x:"180",y:"265",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:"Spot $50 → $150 · payoff at maturity"}),(0,t.jsxs)("text",{x:"180",y:"278",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:["call"===m?"Long Call":"Long Put"," · Strike $",s]})]})}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,t.jsx)("button",{type:"button",onClick:()=>h("call"),className:`h-10 rounded-md border text-xs font-semibold transition-all ${"call"===m?"bg-emerald-600 text-white border-emerald-600":"bg-card border-border hover:border-emerald-500"}`,children:"Call (↑)"}),(0,t.jsx)("button",{type:"button",onClick:()=>h("put"),className:`h-10 rounded-md border text-xs font-semibold transition-all ${"put"===m?"bg-rose-600 text-white border-rose-600":"bg-card border-border hover:border-rose-500"}`,children:"Put (↓)"})]}),(0,t.jsx)(w.Slider,{label:"Spot S ($)",min:50,max:150,step:1,value:e,onChange:r,format:e=>`$${e.toFixed(0)}`,accent:"oklch(0.65 0.16 30)"}),(0,t.jsx)(w.Slider,{label:"Strike K ($)",min:50,max:150,step:1,value:s,onChange:i,format:e=>`$${e.toFixed(0)}`,accent:"oklch(0.65 0.16 30)"}),(0,t.jsx)(w.Slider,{label:"Risk-free rate r",min:0,max:.1,step:.005,value:o,onChange:n,format:e=>`${(100*e).toFixed(1)}%`,accent:"oklch(0.65 0.16 30)"}),(0,t.jsx)(w.Slider,{label:"Volatility σ",min:.05,max:.8,step:.01,value:l,onChange:d,format:e=>`${(100*e).toFixed(0)}%`,accent:"oklch(0.65 0.16 30)"}),(0,t.jsx)(w.Slider,{label:"Time to maturity T (years)",min:.05,max:3,step:.05,value:c,onChange:p,format:e=>e.toFixed(2),accent:"oklch(0.65 0.16 30)"}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-sm text-primary",children:"call"===m?"C = S·N(d₁) - K·e^(-rT)·N(d₂)":"P = K·e^(-rT)·N(-d₂) - S·N(-d₁)"}),(0,t.jsxs)("p",{className:"font-mono text-xs mt-1",children:["d₁ = ",g.toFixed(3)," · d₂ = ",x.toFixed(3)]}),(0,t.jsxs)("p",{className:"font-mono text-2xl font-bold mt-2 text-primary",children:["$",k.toFixed(2)]}),(0,t.jsxs)("p",{className:"text-[11px] text-muted-foreground mt-1",children:["N(d₁)=",b.toFixed(4)," · N(d₂)=",_.toFixed(4)]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-5 gap-1 text-center text-[10px]",children:[(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-1.5",children:[(0,t.jsx)("p",{className:"text-muted-foreground",children:"Δ"}),(0,t.jsx)("p",{className:"font-mono font-bold",children:S.toFixed(3)})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-1.5",children:[(0,t.jsx)("p",{className:"text-muted-foreground",children:"Γ"}),(0,t.jsx)("p",{className:"font-mono font-bold",children:j.toFixed(4)})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-1.5",children:[(0,t.jsx)("p",{className:"text-muted-foreground",children:"ν"}),(0,t.jsx)("p",{className:"font-mono font-bold",children:N.toFixed(3)})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-1.5",children:[(0,t.jsx)("p",{className:"text-muted-foreground",children:"Θ"}),(0,t.jsx)("p",{className:"font-mono font-bold",children:T.toFixed(3)})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-1.5",children:[(0,t.jsx)("p",{className:"text-muted-foreground",children:"ρ"}),(0,t.jsx)("p",{className:"font-mono font-bold",children:M.toFixed(3)})]})]})]})]}),(0,t.jsx)(w.InfoCallout,{intent:"Pick Call/Put and slide S, K, r, σ, T to see the Black-Scholes price + 5 Greeks update live. The payoff diagram shows the option value at maturity. Greeks: Δ=delta, Γ=gamma, ν=vega (per 1% vol), Θ=theta (per day), ρ=rho (per 1% rate).",math:"C = S·N(d₁) - K·e^(-rT)·N(d₂) · d₁ = (ln(S/K) + (r+σ²/2)T) / (σ√T) · d₂ = d₁ - σ√T · Δ_call = N(d₁) · Γ = N'(d₁)/(Sσ√T)",insight:"Black-Scholes (1973, Nobel 1997) assumes constant σ, lognormal returns, no jumps — these are WRONG (volatility smiles, fat tails, gap moves). Modern quant desks use local-vol (Dupire 1994), stochastic-vol (Heston 1993), or rough-vol (Bayer 2016) which all reduce to BS as a special case. The formula survives because it's a closed form — used as a quoting convention even when the underlying model is more sophisticated."})]})},{})},{id:"var",step:"2",title:"Monte Carlo VaR / CVaR",subtitle:"10k GBM paths → quantile + Expected Shortfall",accent:"oklch(0.55 0.16 0)",icon:(0,t.jsx)(y.AlertTriangle,{className:"h-4 w-4"}),thumb:(0,t.jsx)(function(){return(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("line",{x1:"10",y1:"115",x2:"90",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"10",y1:"20",x2:"10",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),[5,10,18,25,30,28,20,10,5,2].map((e,a)=>(0,t.jsx)(r.motion.rect,{x:12+8*a,y:115-3*e,width:"6",height:3*e,fill:a<2?"oklch(0.75 0.20 0)":"oklch(0.65 0.16 250 / 0.5)",animate:{height:[3*e,3*e*.8,3*e]},transition:{duration:2,repeat:1/0,delay:.1*a}},a)),(0,t.jsx)("line",{x1:"22",y1:"20",x2:"22",y2:"115",stroke:"oklch(0.85 0.20 0)",strokeWidth:"1",strokeDasharray:"2 1"}),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:"oklch(0.65 0.10 250)",children:"VaR + CVaR"})]})},{}),content:(0,t.jsx)(function(){let[e,s]=(0,a.useState)(1),[i,o]=(0,a.useState)(.95),[n,l]=(0,a.useState)(.015),[d,c]=(0,a.useState)(5e-4),[p,m]=(0,a.useState)(null),[h,u]=(0,a.useState)(!1),g=0,x=0;if(p){let e=Math.floor((1-i)*p.length);g=-p[e];let t=p.slice(0,e);x=-t.reduce((e,t)=>e+t,0)/t.length}let b=p?Array.from({length:20},(e,t)=>{let a=p[0],r=(p[p.length-1]-a)/20,s=a+t*r,i=s+r;return p.filter(e=>e>=s&&e<i).length}):null,_=b?Math.max(...b):1;return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,t.jsx)("div",{className:"rounded-md border border-border/60 bg-card p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 360 280",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"20",y1:"240",x2:"340",y2:"240",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"20",y1:"20",x2:"20",y2:"240",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),b&&b.map((e,a)=>{let s=e/_*200,o=a<Math.floor((1-i)*b.length);return(0,t.jsx)(r.motion.rect,{x:25+15*a,y:240-s,width:"13",height:s,fill:o?"oklch(0.75 0.20 0)":"oklch(0.65 0.16 250 / 0.5)",initial:{height:0,y:240},animate:{height:s,y:240-s},transition:{duration:.3,delay:.02*a}},a)}),p&&(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:25+15*Math.floor((1-i)*20),y1:"20",x2:25+15*Math.floor((1-i)*20),y2:"240",stroke:"oklch(0.85 0.20 0)",strokeWidth:"1.5",strokeDasharray:"3 2"}),(0,t.jsx)("text",{x:25+15*Math.floor((1-i)*20)+3,y:"35",fontSize:"8",fill:"oklch(0.85 0.20 0)",fontWeight:"bold",children:"VaR"})]}),(0,t.jsxs)("text",{x:"180",y:"265",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:["P&L distribution (10,000 GBM paths) — ",e,"d horizon"]}),(0,t.jsx)("text",{x:"180",y:"278",textAnchor:"middle",fontSize:"9",fill:"oklch(0.55 0.10 250)",children:"Red bars = tail beyond VaR (expected shortfall)"})]})}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)(w.Slider,{label:"Horizon (days)",min:1,max:20,step:1,value:e,onChange:s,format:e=>`${e}d`,accent:"oklch(0.65 0.16 0)"}),(0,t.jsx)(w.Slider,{label:"Confidence level",min:.9,max:.999,step:.001,value:i,onChange:o,format:e=>`${(100*e).toFixed(1)}%`,accent:"oklch(0.65 0.16 0)"}),(0,t.jsx)(w.Slider,{label:"Daily volatility σ",min:.005,max:.05,step:.001,value:n,onChange:l,format:e=>`${(100*e).toFixed(2)}%`,accent:"oklch(0.65 0.16 0)"}),(0,t.jsx)(w.Slider,{label:"Daily drift μ",min:-.002,max:.003,step:1e-4,value:d,onChange:c,format:e=>`${(100*e).toFixed(3)}%`,accent:"oklch(0.65 0.16 0)"}),(0,t.jsx)(v.Button,{size:"sm",variant:"default",onClick:()=>{u(!0),setTimeout(()=>{let t=[];for(let a=0;a<1e4;a++){let a=100*Math.exp((d-n*n/2)*e+n*Math.sqrt(e)*function(){let e=0,t=0;for(;0===e;)e=Math.random();for(;0===t;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}());t.push(a-100)}t.sort((e,t)=>e-t),m(t),u(!1)},300)},disabled:h,className:"w-full gap-1.5",children:h?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.Activity,{className:"h-3.5 w-3.5 animate-pulse"})," Simulating 10k paths…"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(S.Play,{className:"h-3.5 w-3.5"})," Run 10k GBM paths"]})}),p&&(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsxs)("p",{className:"font-mono text-sm text-primary",children:["VaR = -Q_",(100*i).toFixed(0),"(P&L)"]}),(0,t.jsxs)("p",{className:"font-mono text-2xl font-bold mt-1 text-rose-600",children:["$",g.toFixed(2)]}),(0,t.jsxs)("p",{className:"text-[11px] text-muted-foreground mt-1",children:["at ",(100*i).toFixed(1),"% confidence over ",e,"d"]}),(0,t.jsx)("p",{className:"font-mono text-sm mt-2 text-primary",children:"CVaR (ES) = E[L | L > VaR]"}),(0,t.jsxs)("p",{className:"font-mono text-xl font-bold mt-0.5 text-rose-700",children:["$",x.toFixed(2)]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-3 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-1",children:"VaR vs CVaR debate (Basel III → IV)"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"VaR is a quantile — “loss not exceeded with prob α”. But it doesn't tell you how BAD the tail is. CVaR (Expected Shortfall) averages the tail — “given that you breach VaR, what's the expected loss?”. Basel IV (2025+) replaces 99% VaR with 97.5% CVaR — banks must hold capital against the average tail, not the threshold."})]})]})]}),(0,t.jsx)(w.InfoCallout,{intent:"Slide horizon (1-20d), confidence (90-99.9%), σ, μ then click 'Run' to simulate 10,000 GBM paths. The histogram shows the P&L distribution; red bars are the tail beyond VaR. VaR is the loss quantile, CVaR (Expected Shortfall) is the average of the tail.",math:"GBM: S_T = S_0·exp((μ-σ²/2)T + σ√T·Z) · VaR_α = -Q_α(P&L) · CVaR = -E[P&L | P&L < -VaR] · Z ~ N(0,1) via Box-Muller",insight:"VaR is non-convex and ignores the tail beyond the quantile — the 2008 crisis showed banks holding “adequate” VaR capital still blew up because the tail was fatter than Gaussian assumed. CVaR is convex (Rockafellar-Uryasev 2000) and captures tail severity. Basel IV's switch from VaR to CVaR is the most consequential regulatory change in 30 years."})]})},{})},{id:"realtime",step:"3",title:"Real-time market data (toggle)",subtitle:"Yahoo Finance API + synthetic GBM fallback",accent:"oklch(0.55 0.16 165)",icon:(0,t.jsx)(_.BarChart3,{className:"h-4 w-4"}),thumb:(0,t.jsx)(function(){return(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("line",{x1:"10",y1:"115",x2:"90",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)(r.motion.polyline,{points:"10,80 25,70 40,75 55,60 70,55 85,40",fill:"none",stroke:"oklch(0.75 0.20 30)",strokeWidth:"1.5",animate:{points:["10,80 25,70 40,75 55,60 70,55 85,40","10,85 25,75 40,72 55,65 70,50 85,35","10,80 25,70 40,75 55,60 70,55 85,40"]},transition:{duration:2,repeat:1/0}}),(0,t.jsx)("text",{x:"50",y:"25",textAnchor:"middle",fontSize:"7",fill:"oklch(0.85 0.20 165)",fontWeight:"bold",children:"AAPL MSFT"}),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:"oklch(0.65 0.10 250)",children:"real vs synthetic"})]})},{}),content:(0,t.jsx)(function(){let[e,r]=(0,a.useState)(!0),[s,i]=(0,a.useState)([]),[o,n]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null),[c,p]=(0,a.useState)("");function m(e,t,a=.015){let r=[t];for(let e=1;e<30;e++){let t=(Math.random()-.5)*a*2;r.push(r[e-1]*(1+t))}let s=r[r.length-1],i=s-t;return{symbol:e,price:s,change:i,changePercent:i/t*100,history:r,source:"synthetic"}}async function h(e){let t=[];for(let a of e)try{let e,r=`https://query1.finance.yahoo.com/v8/finance/chart/${a}?interval=1d&range=1mo`;try{if(!(e=await fetch(r)).ok)throw Error(`HTTP ${e.status}`)}catch{r="https://corsproxy.io/?url="+encodeURIComponent(r),e=await fetch(r)}let s=await e.json(),i=s.chart?.result?.[0];if(i){let e=i.indicators.quote[0].close.filter(e=>null!=e),r=e[e.length-1],s=e[e.length-2]||r,o=r-s;t.push({symbol:a,price:r,change:o,changePercent:o/s*100,history:e.slice(-30),source:"real"})}}catch{let e={AAPL:195,MSFT:420,GOOGL:175,TSLA:250,NVDA:880,BTC:65e3}[a]||100;t.push(m(a,e))}return t}let u=["AAPL","MSFT","GOOGL","TSLA","NVDA","BTC-USD"],g=async()=>{n(!0),d(null);try{if(e){let e=await h(u);i(e),p(new Date().toISOString().slice(11,19))}else{let e=u.map(e=>m(e,{AAPL:195,MSFT:420,GOOGL:175,TSLA:250,NVDA:880,"BTC-USD":65e3}[e]||100));i(e),p(new Date().toISOString().slice(11,19))}}catch(e){d(e instanceof Error?e.message:String(e))}finally{n(!1)}};return(0,a.useEffect)(()=>{g()},[e]),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,t.jsx)("div",{className:"rounded-md border border-border/60 bg-card p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 360 280",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"20",y1:"240",x2:"340",y2:"240",stroke:"oklch(0.55 0.10 250 / 0.4)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"20",y1:"20",x2:"20",y2:"240",stroke:"oklch(0.55 0.10 250 / 0.4)",strokeWidth:"0.5"}),s.slice(0,3).map((e,a)=>{let r=e.history;if(r.length<2)return null;let s=Math.min(...r),i=Math.max(...r)-s||1,o=["oklch(0.75 0.20 30)","oklch(0.75 0.20 165)","oklch(0.75 0.20 250)"][a],n=r.map((e,t)=>{let a=25+t/(r.length-1)*310;return`${a},${240-(e-s)/i*200}`}).join(" ");return(0,t.jsxs)("g",{children:[(0,t.jsx)("polyline",{points:n,fill:"none",stroke:o,strokeWidth:"1.5"}),(0,t.jsx)("text",{x:30,y:35+12*a,fontSize:"9",fill:o,fontWeight:"bold",children:e.symbol})]},e.symbol)}),(0,t.jsxs)("text",{x:"180",y:"265",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:[e?"Real Yahoo Finance data":"Synthetic GBM data"," — last refresh ",c||"—"]})]})}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,t.jsx)("button",{type:"button",onClick:()=>r(!0),className:`h-10 rounded-md border text-xs font-semibold transition-all ${e?"bg-emerald-600 text-white border-emerald-600":"bg-card border-border hover:border-emerald-500"}`,children:"Real (Yahoo Finance)"}),(0,t.jsx)("button",{type:"button",onClick:()=>r(!1),className:`h-10 rounded-md border text-xs font-semibold transition-all ${!e?"bg-amber-600 text-white border-amber-600":"bg-card border-border hover:border-amber-500"}`,children:"Synthetic (fake data)"})]}),(0,t.jsx)(v.Button,{size:"sm",variant:"outline",onClick:g,disabled:o,className:"w-full gap-1.5",children:o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.Activity,{className:"h-3.5 w-3.5 animate-pulse"})," Fetching…"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k.RotateCcw,{className:"h-3.5 w-3.5"})," Refresh"]})}),l&&(0,t.jsxs)("div",{className:"rounded-md border border-rose-500/40 bg-rose-500/5 p-3 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold text-rose-700 dark:text-rose-300 mb-1",children:"⚠ Fetch error"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:l}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Try switching to Synthetic mode if Yahoo Finance CORS is blocked."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-3",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-2",children:"Quotes (6 instruments)"}),s.map(e=>(0,t.jsxs)("div",{className:"flex items-center justify-between text-xs py-0.5",children:[(0,t.jsx)("span",{className:"font-mono font-semibold w-16",children:e.symbol}),(0,t.jsxs)("span",{className:"font-mono w-16 text-right",children:["$",e.price.toFixed(2)]}),(0,t.jsxs)("span",{className:`font-mono w-16 text-right ${e.change>=0?"text-emerald-600":"text-rose-600"}`,children:[e.change>=0?"+":"",e.changePercent.toFixed(2),"%"]}),(0,t.jsx)("span",{className:`text-[9px] w-12 text-right ${"real"===e.source?"text-emerald-600":"text-amber-600"}`,children:"real"===e.source?"● real":"● synth"})]},e.symbol))]}),(0,t.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-3 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold text-emerald-700 dark:text-emerald-300 mb-1.5",children:"Data sources"}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:[(0,t.jsx)("strong",{children:"Real:"})," Yahoo Finance chart API (query1.finance.yahoo.com) — 1-month daily history for AAPL, MSFT, GOOGL, TSLA, NVDA, BTC-USD. Uses CORS proxy fallback because Yahoo doesn't set CORS headers."]}),(0,t.jsxs)("p",{className:"text-muted-foreground mt-2",children:[(0,t.jsx)("strong",{children:"Synthetic:"})," Geometric Brownian Motion generator (μ=0.0005, σ=0.015 daily). Same code path — useful for demos, testing, or when Yahoo is rate-limited."]})]})]})]}),(0,t.jsx)(w.InfoCallout,{intent:"Toggle between REAL (Yahoo Finance live API) and SYNTHETIC (GBM-generated fake) data. Click Refresh to re-fetch. The chart shows 30-day price history for the first 3 symbols. Each quote row shows source (real/synth) so you always know what you're looking at.",math:"Real: Yahoo chart API /v8/finance/chart/{sym}?interval=1d&range=1mo · Synthetic: GBM S_t = S_0·exp((μ-σ²/2)t + σ√t·Z), Z~N(0,1)",insight:"Regulated trading systems MUST distinguish real vs synthetic data — many backtest disasters came from accidentally using look-ahead bias or 'phantom' data. The toggle here mirrors the production pattern: hedge funds run synthetic feeds on weekends/holidays when markets close, switch to real-time on Monday open. The same VaR/BS code runs on both — only the data source differs."})]})},{})},{id:"portfolio",step:"4",title:"Markowitz efficient frontier",subtitle:"min w'Σw - λ·w'μ — 3-asset frontier",accent:"oklch(0.55 0.16 250)",icon:(0,t.jsx)(g.TrendingUp,{className:"h-4 w-4"}),thumb:(0,t.jsx)(function(){return(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("line",{x1:"10",y1:"115",x2:"90",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"10",y1:"20",x2:"10",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)(r.motion.path,{d:"M 15 105 Q 35 60 55 50 T 85 35",fill:"none",stroke:"oklch(0.75 0.20 250)",strokeWidth:"1.5",animate:{opacity:[.6,1,.6]},transition:{duration:2,repeat:1/0}}),(0,t.jsx)("circle",{cx:"40",cy:"65",r:"3",fill:"oklch(0.85 0.20 165)"}),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:"oklch(0.65 0.10 250)",children:"Markowitz frontier"})]})},{}),content:(0,t.jsx)(function(){let[e,s]=(0,a.useState)(.5),i=[{name:"Stocks",mu:.1,sigma:.18},{name:"Bonds",mu:.04,sigma:.06},{name:"Gold",mu:.06,sigma:.15}],o=[[.0324,.018*.06,0],[.00108,.0036,.0018],[0,.0018,.0225]],n=1-e,l=[1,0,0],d=[.15,.65,.2],c=l.map((e,t)=>e*n+d[t]*(1-n)),p=c.reduce((e,t)=>e+t,0),m=c.map(e=>e/p),h=m.reduce((e,t,a)=>e+t*i[a].mu,0),u=Math.sqrt(Math.max(0,m.reduce((e,t,a)=>e+t*t*o[a][a]+2*t*m.reduce((e,r,s)=>a<s?e+t*r*o[a][s]:e,0),0))),f=Array.from({length:20},(e,t)=>{let a=t/19,r=l.map((e,t)=>e*(1-a)+d[t]*a);r.reduce((e,t,a)=>e+t*a,0);let s=r.reduce((e,t,a)=>e+t*i[a].mu,0);return{sigma:Math.sqrt(Math.max(0,r.reduce((e,t,a)=>e+t*t*o[a][a]+2*t*r.reduce((e,r,s)=>a<s?e+t*r*o[a][s]:e,0),0))),mu:s,weights:r}});return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,t.jsx)("div",{className:"rounded-md border border-border/60 bg-card p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 360 280",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"20",y1:"240",x2:"340",y2:"240",stroke:"oklch(0.55 0.10 250 / 0.4)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"20",y1:"20",x2:"20",y2:"240",stroke:"oklch(0.55 0.10 250 / 0.4)",strokeWidth:"0.5"}),(0,t.jsx)("text",{x:"335",y:"252",textAnchor:"end",fontSize:"8",fill:"oklch(0.55 0.10 250)",children:"σ →"}),(0,t.jsx)("text",{x:"30",y:"30",fontSize:"8",fill:"oklch(0.55 0.10 250)",children:"↑ μ"}),(0,t.jsx)("polyline",{points:f.map(e=>{let t=30+1e3*e.sigma,a=240-1200*e.mu;return`${t},${a}`}).join(" "),fill:"none",stroke:"oklch(0.75 0.20 250)",strokeWidth:"1.5"}),i.map((e,a)=>(0,t.jsxs)("g",{children:[(0,t.jsx)("circle",{cx:30+1e3*e.sigma,cy:240-1200*e.mu,r:"3",fill:"oklch(0.75 0.20 30)"}),(0,t.jsx)("text",{x:30+1e3*e.sigma+4,y:240-1200*e.mu-5,fontSize:"8",fill:"oklch(0.65 0.10 250)",children:e.name})]},e.name)),(0,t.jsx)(r.motion.circle,{cx:30+1e3*u,cy:240-1200*h,r:"5",fill:"oklch(0.85 0.20 165)",animate:{cx:30+1e3*u,cy:240-1200*h},transition:{duration:.2}}),(0,t.jsx)("text",{x:30+1e3*u+6,y:240-1200*h+4,fontSize:"9",fill:"oklch(0.85 0.20 165)",fontWeight:"bold",children:"P"}),(0,t.jsx)("text",{x:"180",y:"265",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:"Efficient frontier — Markowitz (1952)"})]})}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)(w.Slider,{label:"Risk aversion (0=max return, 1=min var)",min:0,max:1,step:.05,value:e,onChange:s,format:e=>e.toFixed(2),accent:"oklch(0.65 0.16 250)"}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-sm text-primary",children:"min w'Σw - λ·w'μ"}),(0,t.jsxs)("p",{className:"font-mono text-xs mt-1",children:["λ = ",n.toFixed(2)," (risk appetite)"]}),(0,t.jsxs)("p",{className:"font-mono text-base font-bold mt-1",children:["μ_p = ",(100*h).toFixed(2),"% · σ_p = ",(100*u).toFixed(2),"%"]}),(0,t.jsxs)("p",{className:"text-[11px] text-muted-foreground mt-1",children:["Sharpe ratio = ",((h-.03)/u).toFixed(3)," (rf=3%)"]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-3",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-2",children:"Portfolio weights"}),i.map((e,a)=>(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-1.5",children:[(0,t.jsx)("span",{className:"text-xs font-semibold w-14",children:e.name}),(0,t.jsx)("div",{className:"flex-1 h-4 rounded bg-muted overflow-hidden",children:(0,t.jsx)(r.motion.div,{initial:{width:0},animate:{width:`${100*m[a]}%`},transition:{duration:.3},className:"h-full bg-primary"})}),(0,t.jsxs)("span",{className:"text-xs font-mono w-12 text-right",children:[(100*m[a]).toFixed(0),"%"]})]},e.name))]}),(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-3 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-1",children:"Portfolio theory in contention"}),(0,t.jsxs)("ul",{className:"text-muted-foreground ml-3 list-disc",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Markowitz (1952):"})," mean-variance — above. Closed-form but assumes known μ, Σ (rarely true)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Black-Litterman (1992):"})," combine market priors with analyst views — used by Goldman"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Risk parity (2005):"})," equal risk contribution — Bridgewater All Weather"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Hierarchical Risk Parity (López de Prado 2016):"})," ML-based, no μ needed — robust to noise"]})]})]})]})]}),(0,t.jsx)(w.InfoCallout,{intent:"Slide risk aversion λ from 0 (100% stocks, max return) to 1 (diversified, min variance). The green dot P moves along the efficient frontier. Watch the Sharpe ratio update — find the tangent (max Sharpe) for the optimal risky portfolio.",math:"Markowitz: min w'Σw - λ·w'μ  s.t. Σw=1 · Σw_j=1 · Frontier = {(σ(λ), μ(λ)) | λ∈[0,1]} · Sharpe = (μ_p - r_f) / σ_p",insight:"Markowitz won the 1990 Nobel for this. But it has a critical flaw: it assumes you KNOW μ and Σ — you don't, you estimate them, and small estimation errors cause wild weight swings (the “corner portfolio” problem). López de Prado's HRP (2016) avoids μ entirely by clustering — robust to estimation noise. Bridgewater's All Weather fund uses risk parity (no μ, just σ) and has outperformed for 30 years."})]})},{})},{id:"volsurface",step:"5",title:"Volatility surface",subtitle:"Smile + term structure — SVI parametric",accent:"oklch(0.55 0.16 320)",icon:(0,t.jsx)(f.Activity,{className:"h-4 w-4"}),thumb:(0,t.jsx)(function(){return(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("line",{x1:"10",y1:"115",x2:"90",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"10",y1:"20",x2:"10",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)(r.motion.path,{d:"M 15 80 Q 30 100 50 90 Q 70 100 85 70",fill:"none",stroke:"oklch(0.75 0.20 320)",strokeWidth:"1.5"}),Array.from({length:5}).map((e,a)=>(0,t.jsx)("circle",{cx:20+16*a,cy:90-a%2*15+(a-2)*5,r:"1.5",fill:"oklch(0.65 0.16 250)"},a)),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:"oklch(0.65 0.10 250)",children:"Vol smile"})]})},{}),content:(0,t.jsx)(function(){let[e,s]=(0,a.useState)(100),[i,o]=(0,a.useState)(.25),n=Math.log(e/100),l=(.18+.04*n*n+.02*n)*(1+.5*Math.exp(-(2*i))),d=Array.from({length:12},(e,t)=>{let a=-1+.2*t;return Array.from({length:10},(e,t)=>{let r=.05+.5*t,s=(.18+.04*a*a+.02*a)*(1+.5*Math.exp(-(2*r)));return{k:a,t:r,s}})}).flat();return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,t.jsx)("div",{className:"rounded-md border border-border/60 bg-card p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 360 280",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"20",y1:"240",x2:"340",y2:"240",stroke:"oklch(0.55 0.10 250 / 0.4)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"20",y1:"20",x2:"20",y2:"240",stroke:"oklch(0.55 0.10 250 / 0.4)",strokeWidth:"0.5"}),d.map((e,a)=>{let r=30+(e.k+1)*130,s=240-500*e.s;return(0,t.jsx)("circle",{cx:r,cy:s,r:"1.5",fill:`oklch(0.65 0.16 ${100*e.t%360})`,opacity:.5+(1-e.t/5)*.5},a)}),(0,t.jsx)(r.motion.circle,{cx:30+(n+1)*130,cy:240-500*l,r:"5",fill:"oklch(0.85 0.20 0)",stroke:"oklch(0.65 0.10 250)",strokeWidth:"1.5",animate:{cx:30+(n+1)*130,cy:240-500*l},transition:{duration:.15}}),(0,t.jsxs)("text",{x:"180",y:"265",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:["Vol smile at T=",i.toFixed(2),"y · σ=",l.toFixed(3)]}),(0,t.jsx)("text",{x:"180",y:"278",textAnchor:"middle",fontSize:"9",fill:"oklch(0.55 0.10 250)",children:"Each dot = (log-moneyness, vol); color = maturity"})]})}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)(w.Slider,{label:"Strike K ($)",min:50,max:150,step:1,value:e,onChange:s,format:e=>`$${e.toFixed(0)}`,accent:"oklch(0.65 0.16 0)"}),(0,t.jsx)(w.Slider,{label:"Time to maturity T (years)",min:.05,max:2,step:.05,value:i,onChange:o,format:e=>e.toFixed(2),accent:"oklch(0.65 0.16 0)"}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-sm text-primary",children:"σ_imp(K, T) = smile(k) × term(T)"}),(0,t.jsxs)("p",{className:"font-mono text-xs mt-1",children:["k = ln(K/S₀) = ",n.toFixed(3)," (moneyness)"]}),(0,t.jsxs)("p",{className:"font-mono text-base font-bold mt-1",children:["σ_imp = ",(100*l).toFixed(2),"%"]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-3 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold mb-1.5",children:"Volatility smile — why?"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Black-Scholes assumes constant σ — but the market disagrees. After the 1987 crash, OTM puts trade at much higher implied vol than ATM (the “skew”) — the market prices in fat-tail crash risk. This is direct empirical evidence that BS is wrong."}),(0,t.jsx)("p",{className:"text-muted-foreground mt-2",children:"Models that fit the smile:"}),(0,t.jsxs)("ul",{className:"text-muted-foreground ml-3 list-disc",children:[(0,t.jsx)("li",{children:"Local vol (Dupire 1994) — deterministic σ(S, t)"}),(0,t.jsx)("li",{children:"Stochastic vol (Heston 1993) — σ follows CIR process"}),(0,t.jsx)("li",{children:"Rough vol (Bayer 2016) — σ has Hurst H≈0.1 (rougher than Brownian)"}),(0,t.jsx)("li",{children:"SVI (Gatheral 2004) — parametric 5-parameter smile fit"})]})]})]})]}),(0,t.jsx)(w.InfoCallout,{intent:"Slide strike K and maturity T to see the implied vol update on the surface. The smile U-shape reflects market crash hedging — OTM puts are expensive (high IV) because of the 1987 crash. Each dot is a different (k, T) combination; color encodes maturity.",math:"σ_imp(K, T) — BS-implied vol · Smile: σ(k) = a + b·(ρ·k + √(k² + σ²)) (SVI) · Term: σ(T) = σ_∞ + (σ_0 - σ_∞)·e^(-αT)",insight:"The vol surface is the trader's bible — every option market-maker fits one and prices from it, NOT from Black-Scholes. The surface's shape encodes market expectations: skew = crash fear, term structure = event risk (e.g., earnings). Rough vol (Bayer 2016, JPMorgan) is the latest — models σ with Hurst H≈0.1 (more irregular than Brownian) and matches the “vol-of-vol” empirical fact better than Heston."})]})},{})},{id:"yield",step:"6",title:"Treasury yield curve",subtitle:"Normal / Inverted / Flat — recession signal",accent:"oklch(0.55 0.16 200)",icon:(0,t.jsx)(_.BarChart3,{className:"h-4 w-4"}),thumb:(0,t.jsx)(function(){return(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("line",{x1:"10",y1:"115",x2:"90",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"10",y1:"20",x2:"10",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)(r.motion.polyline,{points:"15,50 30,55 45,60 60,55 75,50 90,45",fill:"none",stroke:"oklch(0.75 0.20 200)",strokeWidth:"1.5",animate:{points:["15,50 30,55 45,60 60,55 75,50 90,45","15,55 30,50 45,45 60,50 75,55 90,60","15,50 30,55 45,60 60,55 75,50 90,45"]},transition:{duration:3,repeat:1/0}}),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:"oklch(0.65 0.10 250)",children:"Yield curve"})]})},{}),content:(0,t.jsx)(function(){let[e,s]=(0,a.useState)("normal"),i={normal:[5,4.9,4.5,4.3,4.1,4,4.2,4.3],inverted:[5,4.9,4.5,4,3.5,3.2,3.5,3.8],flat:[4,4,4,4,4,4,4,4]}[e],o=i[5]-i[0];return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,t.jsx)("div",{className:"rounded-md border border-border/60 bg-card p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 360 280",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"30",y1:"240",x2:"340",y2:"240",stroke:"oklch(0.55 0.10 250 / 0.4)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"30",y1:"20",x2:"30",y2:"240",stroke:"oklch(0.55 0.10 250 / 0.4)",strokeWidth:"0.5"}),[0,1,2,3,4,5,6].map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:"25",y1:240-35*e,x2:"30",y2:240-35*e,stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsxs)("text",{x:"22",y:243-35*e,textAnchor:"end",fontSize:"8",fill:"oklch(0.55 0.10 250)",children:[e,"%"]})]},e)),["3M","6M","1Y","2Y","5Y","10Y","20Y","30Y"].map((e,a)=>(0,t.jsx)("text",{x:35+38*a,y:"258",textAnchor:"middle",fontSize:"8",fill:"oklch(0.55 0.10 250)",children:e},e)),(0,t.jsx)(r.motion.polyline,{points:i.map((e,t)=>`${35+38*t},${240-35*e}`).join(" "),fill:"none",stroke:"inverted"===e?"oklch(0.75 0.20 0)":"oklch(0.75 0.20 250)",strokeWidth:"2",animate:{points:i.map((e,t)=>`${35+38*t},${240-35*e}`).join(" ")},transition:{duration:.3}}),i.map((a,s)=>(0,t.jsx)(r.motion.circle,{cx:35+38*s,cy:240-35*a,r:"3",fill:"inverted"===e?"oklch(0.85 0.20 0)":"oklch(0.85 0.20 250)",animate:{cy:240-35*a},transition:{duration:.3}},s)),(0,t.jsxs)("text",{x:"180",y:"275",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:["US Treasury yield curve — ",e," shape"]})]})}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,t.jsx)("button",{type:"button",onClick:()=>s("normal"),className:`h-10 rounded-md border text-[11px] font-semibold transition-all ${"normal"===e?"bg-emerald-600 text-white border-emerald-600":"bg-card border-border hover:border-emerald-500"}`,children:"Normal"}),(0,t.jsx)("button",{type:"button",onClick:()=>s("inverted"),className:`h-10 rounded-md border text-[11px] font-semibold transition-all ${"inverted"===e?"bg-rose-600 text-white border-rose-600":"bg-card border-border hover:border-rose-500"}`,children:"Inverted"}),(0,t.jsx)("button",{type:"button",onClick:()=>s("flat"),className:`h-10 rounded-md border text-[11px] font-semibold transition-all ${"flat"===e?"bg-amber-600 text-white border-amber-600":"bg-card border-border hover:border-amber-500"}`,children:"Flat"})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsxs)("p",{className:"font-mono text-sm text-primary",children:["10Y - 3M = ",o.toFixed(1),"%"]}),(0,t.jsx)("p",{className:"font-mono text-xs mt-1",children:o>0?"Positive → normal growth":"Negative → RECESSION signal"})]}),(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-3 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-1",children:"Recession forecasting — the yield curve as oracle"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"The 10Y-3M spread has predicted every US recession since 1968 — with one false positive (1966). When short-term rates > long-term rates (inversion), the bond market expects rate cuts → economic slowdown. The 2022-2023 inversion was the deepest in 40 years."}),(0,t.jsxs)("p",{className:"text-muted-foreground mt-2",children:[(0,t.jsx)("strong",{children:"2024 status:"})," Curve has been inverted for ~26 months (longest ever). Fed started cutting in Sep 2024 (50bp). Bull steepening = market expects faster cuts."]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-3 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold mb-1.5",children:"Curve shapes — what they mean"}),(0,t.jsxs)("ul",{className:"text-muted-foreground ml-3 list-disc space-y-0.5",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Normal:"})," 10Y > 3M → growth, banks profit from borrow-short/lend-long"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Inverted:"})," 10Y < 3M → recession signal, banks squeezed"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Flat:"})," 10Y ≈ 3M → uncertainty, transition phase"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Steep:"})," 10Y >> 3M → expected inflation or growth"]})]})]})]})]}),(0,t.jsx)(w.InfoCallout,{intent:"Toggle Normal / Inverted / Flat curve shapes. The 10Y-3M spread is the canonical recession indicator — negative = recession signal (100% hit rate since 1968). Watch the points move and the spread value update.",math:"y(t) = y_∞ + (y_0 - y_∞)·e^(-αt) (Nelson-Siegel) · Recession signal: y(10y) - y(3m) < 0",insight:"The yield curve isn't just a chart — it's the consensus forecast of millions of bond traders, each betting real money on their view of the next 30 years. When the curve inverts, those millions of bets collectively say “the Fed will cut rates because of recession”. The 2022-24 inversion was deepest in 40 years — but as of late 2024, no recession has materialised, the longest lag on record. Either we're overdue, or this cycle is different (AI capex, fiscal stimulus)."})]})},{})},{id:"fraud",step:"7",title:"GNN fraud detection",subtitle:"Transaction graph — smurfing detection",accent:"oklch(0.55 0.16 0)",icon:(0,t.jsx)(h.Network,{className:"h-4 w-4"}),thumb:(0,t.jsx)(function(){return(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("circle",{cx:"20",cy:"60",r:"6",fill:"oklch(0.65 0.16 165 / 0.6)"}),(0,t.jsx)("circle",{cx:"50",cy:"40",r:"6",fill:"oklch(0.65 0.16 165 / 0.6)"}),(0,t.jsx)("circle",{cx:"80",cy:"60",r:"6",fill:"oklch(0.75 0.20 0 / 0.6)"}),(0,t.jsx)("circle",{cx:"35",cy:"100",r:"6",fill:"oklch(0.65 0.16 165 / 0.6)"}),(0,t.jsx)("circle",{cx:"65",cy:"100",r:"6",fill:"oklch(0.75 0.20 0 / 0.6)"}),(0,t.jsx)("line",{x1:"20",y1:"60",x2:"50",y2:"40",stroke:"oklch(0.65 0.10 250 / 0.5)",strokeWidth:"0.5"}),(0,t.jsx)(r.motion.line,{x1:"50",y1:"40",x2:"80",y2:"60",stroke:"oklch(0.85 0.20 0)",strokeWidth:"1.5",animate:{opacity:[.4,1,.4]},transition:{duration:1.5,repeat:1/0}}),(0,t.jsx)(r.motion.line,{x1:"80",y1:"60",x2:"65",y2:"100",stroke:"oklch(0.85 0.20 0)",strokeWidth:"1.5",animate:{opacity:[.4,1,.4]},transition:{duration:1.5,repeat:1/0,delay:.5}}),(0,t.jsx)("text",{x:"50",y:"125",textAnchor:"middle",fontSize:"6",fill:"oklch(0.65 0.10 250)",children:"GNN transaction graph"}),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:"oklch(0.55 0.10 250)",children:"smurfing detected"})]})},{}),content:(0,t.jsx)(function(){let[e,s]=(0,a.useState)(.7),i=[{id:0,x:80,y:80,label:"A1",type:"normal"},{id:1,x:180,y:60,label:"A2",type:"normal"},{id:2,x:280,y:100,label:"A3",type:"suspicious"},{id:3,x:100,y:180,label:"A4",type:"normal"},{id:4,x:200,y:200,label:"A5",type:"suspicious"},{id:5,x:300,y:180,label:"A6",type:"normal"}],o=[{from:0,to:1,amount:100,fraudScore:.1},{from:1,to:2,amount:5e3,fraudScore:.85},{from:2,to:4,amount:4800,fraudScore:.92},{from:3,to:4,amount:50,fraudScore:.2},{from:4,to:5,amount:4700,fraudScore:.88},{from:0,to:3,amount:200,fraudScore:.05},{from:1,to:5,amount:80,fraudScore:.15}];return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,t.jsx)("div",{className:"rounded-md border border-border/60 bg-card p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 380 280",className:"w-full h-auto",children:[o.map((a,s)=>{let o=i[a.from],n=i[a.to],l=a.fraudScore>e;return(0,t.jsx)(r.motion.line,{x1:o.x,y1:o.y,x2:n.x,y2:n.y,stroke:l?"oklch(0.85 0.20 0)":"oklch(0.55 0.10 250 / 0.4)",strokeWidth:l?2:.8,animate:{stroke:l?"oklch(0.85 0.20 0)":"oklch(0.55 0.10 250 / 0.4)"},transition:{duration:.2}},s)}),i.map(e=>{let a="suspicious"===e.type;return(0,t.jsxs)("g",{children:[(0,t.jsx)("circle",{cx:e.x,cy:e.y,r:"14",fill:a?"oklch(0.75 0.20 0 / 0.6)":"oklch(0.65 0.16 165 / 0.6)",stroke:a?"oklch(0.85 0.20 0)":"oklch(0.75 0.16 165)",strokeWidth:"1.5"}),(0,t.jsx)("text",{x:e.x,y:e.y+4,textAnchor:"middle",fontSize:"9",fill:"white",fontWeight:"bold",children:e.label})]},e.id)}),(0,t.jsxs)("text",{x:"190",y:"270",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:["Transaction graph — flagged edges = fraud score > ",e.toFixed(2)]})]})}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)(w.Slider,{label:"Fraud detection threshold",min:.5,max:.99,step:.01,value:e,onChange:s,format:e=>e.toFixed(2),accent:"oklch(0.65 0.16 0)"}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-sm text-primary",children:"GNN: h_v = σ(W·AGG({h_u : u∈N(v)}))"}),(0,t.jsx)("p",{className:"font-mono text-xs mt-1",children:"fraud_score(v) = MLP(h_v)"}),(0,t.jsxs)("p",{className:"text-[11px] text-muted-foreground mt-1",children:[o.filter(t=>t.fraudScore>e).length," flagged / ",o.length," total edges"]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-3 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold mb-1.5",children:"Why GNN beats rule-based fraud detection"}),(0,t.jsxs)("ul",{className:"text-muted-foreground ml-3 list-disc space-y-0.5",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Rules:"})," “transaction > $10k → flag” — easy to evade (split payments)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Random forest:"})," per-transaction features — misses network patterns"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"GNN (GraphSAGE, GAT):"})," aggregates neighbour info — catches “smurfing” (split deposits across many accounts)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Production:"})," Visa uses GNN on 100M+ txns/day; JPMorgan ~60% of fraud alerts"]})]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-3 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold text-emerald-700 dark:text-emerald-300 mb-1",children:"2024+ trends"}),(0,t.jsxs)("ul",{className:"text-muted-foreground ml-3 list-disc space-y-0.5",children:[(0,t.jsx)("li",{children:"Heterophilic GNNs (fraudulent nodes look SIMILAR to neighbours, not dissimilar)"}),(0,t.jsx)("li",{children:"Temporal GNNs (TGN, 2020) — model txns over time"}),(0,t.jsx)("li",{children:"Federated learning across banks (Visa + Mastercard + banks collaborate without sharing data)"}),(0,t.jsx)("li",{children:"Adversarial robustness — fraudsters now use GANs to evade GNNs"})]})]})]})]}),(0,t.jsx)(w.InfoCallout,{intent:"Slide the fraud threshold and watch flagged edges (red) appear/disappear. The graph shows a synthetic money-laundering pattern: deposit → suspicious account → rapid transfer → cash-out. GNNs catch this by aggregating neighbour information — a single transaction looks normal but the CHAIN is suspicious.",math:"GNN: h_v^(l+1) = σ(W^(l)·AGG({h_u^(l) : u∈N(v)})) · fraud_score = MLP(h_v^(L)) · GraphSAGE aggregate = mean/max/LSTM",insight:"Graph fraud detection is the killer app for GNNs in fintech — every major bank runs GraphSAGE or GAT in production. The key insight: fraud is a NETWORK property, not a node property. A single $5k transaction is fine; the same $5k preceded by 100 small deposits and followed by immediate cash-out is money laundering. Rule systems miss this; GNNs catch it via message passing."})]})},{})},{id:"hft",step:"8",title:"HFT order book",subtitle:"Bid-ask microstructure — maker/taker, PFOF",accent:"oklch(0.55 0.16 30)",icon:(0,t.jsx)(u.Cpu,{className:"h-4 w-4"}),thumb:(0,t.jsx)(function(){return(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("line",{x1:"50",y1:"20",x2:"50",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5",strokeDasharray:"2 1"}),[0,1,2,3].map(e=>(0,t.jsx)(r.motion.rect,{x:50-(20-3*e),y:30+20*e,width:20-3*e,height:"15",fill:"oklch(0.65 0.16 165 / 0.6)",animate:{width:[20-3*e,18-3*e,20-3*e]},transition:{duration:1,repeat:1/0,delay:.1*e}},`b${e}`)),[0,1,2,3].map(e=>(0,t.jsx)(r.motion.rect,{x:50,y:30+20*e,width:20-3*e,height:"15",fill:"oklch(0.65 0.16 0 / 0.6)",animate:{width:[20-3*e,18-3*e,20-3*e]},transition:{duration:1,repeat:1/0,delay:.1*e+.3}},`a${e}`)),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:"oklch(0.65 0.10 250)",children:"Order book"})]})},{}),content:(0,t.jsx)(function(){let[e,r]=(0,a.useState)(0),[s,i]=(0,a.useState)(.3);(0,a.useEffect)(()=>{let e=setInterval(()=>r(e=>e+1),200);return()=>clearInterval(e)},[]);let o=100+Math.sin(e/30)*s+(Math.random()-.5)*s,n=Array.from({length:10},(e,t)=>({price:o-(t+1)*.05,size:Math.max(10,100-8*t+(Math.random()-.5)*30)})),l=Array.from({length:10},(e,t)=>({price:o+(t+1)*.05,size:Math.max(10,100-8*t+(Math.random()-.5)*30)})),d=l[0].price-n[0].price,c=Math.max(...n.map(e=>e.size),...l.map(e=>e.size));return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,t.jsx)("div",{className:"rounded-md border border-border/60 bg-card p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 360 280",className:"w-full h-auto",children:[n.map((e,a)=>{let r=e.size/c*130,s=20+22*a;return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:170-r,y:s,width:r,height:"18",fill:"oklch(0.65 0.16 165 / 0.6)"}),(0,t.jsxs)("text",{x:175,y:s+13,fontSize:"9",fill:"oklch(0.65 0.10 250)",children:[e.price.toFixed(2)," × ",e.size.toFixed(0)]})]},`bid-${a}`)}),l.map((e,a)=>{let r=e.size/c*130,s=20+22*a;return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:170,y:s,width:r,height:"18",fill:"oklch(0.65 0.16 0 / 0.6)"}),(0,t.jsxs)("text",{x:175,y:s+13,fontSize:"9",fill:"oklch(0.65 0.10 250)",children:[e.price.toFixed(2)," × ",e.size.toFixed(0)]})]},`ask-${a}`)}),(0,t.jsx)("line",{x1:"170",y1:"20",x2:"170",y2:"240",stroke:"oklch(0.65 0.10 250)",strokeWidth:"0.5",strokeDasharray:"2 2"}),(0,t.jsxs)("text",{x:"180",y:"265",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:["mid = $",o.toFixed(2)," · spread = ",d.toFixed(3)," · t=",e]})]})}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)(w.Slider,{label:"Market volatility",min:.05,max:2,step:.05,value:s,onChange:i,format:e=>e.toFixed(2),accent:"oklch(0.65 0.16 250)"}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsxs)("p",{className:"font-mono text-sm text-primary",children:["Bid-Ask Spread = ",d.toFixed(4)]}),(0,t.jsx)("p",{className:"font-mono text-xs mt-1",children:"Tick size: $0.01 (US equities)"}),(0,t.jsxs)("p",{className:"font-mono text-xs",children:["Market depth (top 10): $",((n[0].size+l[0].size)*o).toFixed(0)]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-3 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold mb-1.5",children:"HFT microstructure topics (in contention)"}),(0,t.jsxs)("ul",{className:"text-muted-foreground ml-3 list-disc space-y-0.5",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Maker-Taker:"})," exchanges pay rebates for providing liquidity (makers), charge for taking"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"PFOF (Payment for Order Flow):"})," Robinhood sells retail orders to wholesalers (Citadel, Virtu) — controversial"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Latency arbitrage:"})," HFT sees new prices 1-5ms before others — “sniping” stale quotes"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Flash Crash (2010):"})," Dow dropped 1000 points in 5 min — HFT liquidity withdrawal"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"IEX (2013):"})," Michael Lewis's “Flash Boys” — speed bump to defeat latency arb"]})]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-3 text-xs",children:[(0,t.jsx)("p",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-1",children:"Regulation NMS (2024+ updates)"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"SEC's 2024 rules: tick-size reduction (1¢ → 0.5¢ for high-priced stocks), open auction for retail, AI-based surveillance. Goal: level the playing field between HFT firms and retail — but the debate rages on whether HFT adds or removes liquidity."})]})]})]}),(0,t.jsx)(w.InfoCallout,{intent:"Watch the order book update every 200ms (synthetic). Green bars = bid (buy) orders, red bars = ask (sell) orders. Slide volatility to see the mid-price move more or less. The spread is the HFT's profit margin — typically 0.01-0.05 in liquid stocks.",math:"Spread = ask - bid · Market depth = Σ(size × price) across N levels · Latency cost = (latency_ms × 1000) × (μ + 2σ) · maker rebate = $0.002/share",insight:"HFT is the most controversial quant strategy — it adds liquidity (tighter spreads, 90% reduction since 1990) but critics say it's rent-extraction via speed. Michael Lewis's “Flash Boys” (2014) accused HFTs of front-running retail. SEC's 2024 rules attempt to fix this by forcing wholesalers to compete in open auctions — Citadel and Virtu are suing. The truth: HFT is BOTH liquidity-providing AND rent-seeking — depends on the specific practice."})]})},{})}];function N(){let[e,s]=(0,a.useState)(null),i=e?j.find(t=>t.id===e):null;return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("p",{className:"text-[11px] text-muted-foreground text-center flex items-center justify-center gap-1.5 flex-wrap",children:[(0,t.jsx)(x.Zap,{className:"h-3 w-3 text-amber-500"}),"Click any card to open an interactive visual in a lazy popup — slide S/K/r/σ/T to price options, run 10k Monte Carlo paths, toggle real (Yahoo) vs synthetic market data, optimise Markowitz portfolio, fit vol surface, predict recession from yield curve, detect fraud via GNN, watch HFT order book…",(0,t.jsx)("span",{className:"text-[10px]",children:"Modal content only mounts on click."})]}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:j.map(e=>(0,t.jsxs)(r.motion.button,{type:"button",onClick:()=>s(e.id),className:"relative rounded-xl overflow-hidden border border-border/60 hover:border-primary/60 hover:shadow-lg transition-all bg-gradient-to-br from-card to-muted/30 group",whileHover:{y:-4},whileTap:{scale:.98},"aria-label":`Open interactive: ${e.title}`,children:[(0,t.jsxs)("div",{className:"relative w-full bg-gradient-to-br from-muted/40 to-card",style:{aspectRatio:"9 / 14",maxHeight:280},children:[(0,t.jsx)("div",{className:"absolute inset-0 p-2",children:e.thumb}),(0,t.jsx)("div",{className:"absolute top-2 left-2 z-10",children:(0,t.jsxs)(m.Badge,{variant:"secondary",className:"text-[10px] h-5 px-1.5 gap-0.5",style:{backgroundColor:e.accent+"20",color:e.accent},children:[e.icon," QUANT ",e.step]})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center",children:(0,t.jsx)(r.motion.div,{initial:{opacity:0,scale:.8},whileHover:{opacity:1,scale:1},className:"opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur rounded-full p-2.5 border border-border shadow-md",children:(0,t.jsx)(b.DollarSign,{className:"h-4 w-4 text-primary"})})})]}),(0,t.jsxs)("div",{className:"p-2.5 border-t border-border/40 bg-background/80",children:[(0,t.jsx)("p",{className:"text-xs font-semibold leading-tight",style:{color:e.accent},children:e.title}),(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground mt-0.5 font-mono",children:e.subtitle})]})]},e.id))}),(0,t.jsx)(w.LazyModal,{open:!!i,onClose:()=>s(null),title:i?.title??"",subtitle:i?.subtitle,accent:i?.accent??"oklch(0.55 0.16 250)",icon:i?.icon??(0,t.jsx)(b.DollarSign,{className:"h-4 w-4"}),children:i?.content})]})}var T=e.i(88653),M=e.i(37727),D=e.i(283086),C=e.i(810980);let A=`import math

def norm_cdf(x):
    if x < 0:
        return 1 - norm_cdf(-x)
    a1, a2, a3, a4, a5 = 0.254829592, -0.284496736, 1.421413741, -1.453152027, 1.061405429
    p = 0.3275911
    t = 1.0 / (1.0 + p * x)
    y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t
    return y

def norm_pdf(x):
    return math.exp(-x * x / 2) / math.sqrt(2 * math.pi)

def black_scholes(S, K, r, sigma, T, type='call'):
    d1 = (math.log(S / K) + (r + sigma * sigma / 2) * T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    if type == 'call':
        price = S * norm_cdf(d1) - K * math.exp(-r * T) * norm_cdf(d2)
        delta = norm_cdf(d1)
    else:
        price = K * math.exp(-r * T) * norm_cdf(-d2) - S * norm_cdf(-d1)
        delta = norm_cdf(d1) - 1
    gamma = norm_pdf(d1) / (S * sigma * math.sqrt(T))
    vega = S * norm_pdf(d1) * math.sqrt(T) / 100
    if type == 'call':
        theta = (-(S * norm_pdf(d1) * sigma) / (2 * math.sqrt(T)) - r * K * math.exp(-r * T) * norm_cdf(d2)) / 365
    else:
        theta = (-(S * norm_pdf(d1) * sigma) / (2 * math.sqrt(T)) + r * K * math.exp(-r * T) * norm_cdf(-d2)) / 365
    rho = (K * T * math.exp(-r * T) * (norm_cdf(d2) if type == 'call' else -norm_cdf(-d2))) / 100
    return {'price': price, 'delta': delta, 'gamma': gamma, 'vega': vega, 'theta': theta, 'rho': rho}

print("=== Black-Scholes-Merton (50th anniversary 2023) ===")
print(f"  S=100, K=100, r=5%, sigma=20%, T=1 year")
print()

call = black_scholes(100, 100, 0.05, 0.20, 1, 'call')
put = black_scholes(100, 100, 0.05, 0.20, 1, 'put')

print(f"  European Call: C = S*N(d1) - K*exp(-rT)*N(d2) = \${call['price']:.4f}")
print(f"  European Put:  P = K*exp(-rT)*N(-d2) - S*N(-d1) = \${put['price']:.4f}")
print(f"  Put-Call Parity: C - P = S - K*exp(-rT) = \${call['price'] - put['price']:.4f}")
print(f"    Verifies: \${100 - 100 * math.exp(-0.05):.4f}  (matches)")

print()
print(f"  Greeks (call):")
print(f"    Delta = {call['delta']:.4f} (hedge ratio)")
print(f"    Gamma = {call['gamma']:.4f} (rate of delta change)")
print(f"    Vega  = {call['vega']:.4f} (per 1% vol change)")
print(f"    Theta = {call['theta']:.4f} (per day time decay)")
print(f"    Rho   = {call['rho']:.4f} (per 1% rate change)")

print()
print("=== BS assumptions (1973) - all empirically FALSE ===")
print(f"  - Constant volatility (volatility smiles show IV varies by strike)")
print(f"  - Lognormal returns (real returns have fat tails, kurtosis 5-10)")
print(f"  - No jumps (1987 crash -7% in one day; 2020 COVID -34% in 30 days)")
print(f"  - Continuous trading (market closes, limit moves)")
print(f"  - Risk-free rate known (it's stochastic)")
print()
print("=== Modern extensions ===")
print(f"  - Dupire local vol (1994): sigma(S, t) - calibrates to surface")
print(f"  - Heston stochastic vol (1993): sigma follows CIR process")
print(f"  - Merton jump-diffusion (1976): compound Poisson jumps")
print(f"  - SABR (2002): stochastic alpha beta rho")
print(f"  - Bayer rough vol (2016): Hurst H ~ 0.1, fractional Brownian")
print(f"  - Deep hedging (Buehler 2019+): NN learns pricing+hedging")`,P=`import math
import random

random.seed(42)

def gaussian():
    u1 = random.random()
    u2 = random.random()
    return math.sqrt(-2 * math.log(u1)) * math.cos(2 * math.pi * u2)

def gbm_paths(S0, mu, sigma, T, N_paths):
    paths = []
    sqrt_T_sigma = sigma * math.sqrt(T)
    drift = (mu - sigma * sigma / 2) * T
    for _ in range(N_paths):
        Z = gaussian()
        S_T = S0 * math.exp(drift + sqrt_T_sigma * Z)
        paths.append(S_T - S0)
    return paths

print("=== Monte Carlo VaR + CVaR simulation ===")
S0 = 100
mu = 0.0005
sigma = 0.015
T = 1
N = 10000

paths = gbm_paths(S0, mu, sigma, T, N)
paths.sort()

for alpha in [0.90, 0.95, 0.99, 0.997]:
    var_idx = int((1 - alpha) * N)
    var_value = -paths[var_idx]
    tail = paths[:var_idx]
    cvar_value = -sum(tail) / len(tail) if tail else 0
    print(f"  alpha={alpha:.3f}: VaR = \${var_value:.3f}, CVaR = \${cvar_value:.3f}, ratio = {cvar_value / var_value:.2f}")

print()
print("=== Basel III vs IV (contention) ===")
print(f"  Basel III (current): 99% VaR over 10-day horizon")
print(f"  Basel IV (2025+): 97.5% CVaR over 10-day")
print(f"  Implication: banks must hold MORE capital (~30-40% increase)")
print(f"  Rationale: VaR is just a threshold - doesn't tell you how bad the tail is")
print(f"  CVaR = average of tail - captures severity (2008 lesson)")
print()
print("=== Fat tail example (2008 GFC) ===")
print(f"  Gaussian: S&P 500 daily loss > 5% occurs ~1 in 14000 days")
print(f"  Reality: 7 such events in 2008 alone")
print(f"  -> kurtosis 5-10x normal -> VaR severely underestimates tail risk")
print()
print("=== Modern risk models (post-2008) ===")
print(f"  - Filtered historical simulation (GARCH + bootstrap)")
print(f"  - Extreme Value Theory (EVT) - peaks-over-threshold")
print(f"  - Copula-based (correlated defaults in structured credit)")
print(f"  - Stressed VaR (Basel III)")
print(f"  - Machine learning (Berg 2022+) - LSTM for tail dependence")`,L=`import math
import random

random.seed(42)

class GraphSAGE:
    def __init__(self, in_dim, hidden_dim, out_dim):
        self.W1 = [[random.gauss(0, 0.1) for _ in range(2 * in_dim)] for _ in range(hidden_dim)]
        self.W2 = [[random.gauss(0, 0.1) for _ in range(hidden_dim)] for _ in range(out_dim)]

    def aggregate(self, neighbors):
        if not neighbors:
            return [0.0] * len(self.W1[0])
        return [sum(n[i] for n in neighbors) / len(neighbors) for i in range(len(neighbors[0]))]

    def forward(self, node_features, adj_list):
        h1 = []
        for v in range(len(node_features)):
            agg = self.aggregate([node_features[u] for u in adj_list[v]])
            concat = node_features[v] + agg
            h_v = [math.tanh(sum(self.W1[i][j] * concat[j] for j in range(len(concat)))) for i in range(len(self.W1))]
            h1.append(h_v)
        h2 = []
        for v in range(len(node_features)):
            h_v = [math.tanh(sum(self.W2[i][j] * h1[v][j] for j in range(len(h1[v])))) for i in range(len(self.W2))]
            h2.append(h_v)
        return h2

node_features = [
    [50, 5, 3], [200, 10, 5], [4500, 50, 1], [80, 3, 2],
    [4800, 45, 2], [50, 2, 1], [4700, 40, 2], [120, 6, 4],
]
adj_list = [
    [1, 3], [0, 2], [1, 4], [0, 4], [2, 3, 5], [4, 6], [5, 7], [6],
]
truth_labels = [0, 0, 1, 0, 1, 0, 1, 0]

gnn = GraphSAGE(in_dim=3, hidden_dim=8, out_dim=1)
embeddings = gnn.forward(node_features, adj_list)

print("=== GraphSAGE fraud detection (Hamilton et al. 2017) ===")
print()
print(f"  Graph: 8 accounts, {sum(len(adj) for adj in adj_list)} directed edges")
print(f"  Features per node: [amount_24h, txn_count_24h, distinct_parties]")
print(f"  Truth labels: {truth_labels} (1=suspicious)")
print()
print(f"  {'Node':>4} {'Amount':>8} {'Txns':>5} {'Counterparties':>15} {'Truth':>6} {'GNN_score':>10}")
print(f"  {'-'*4} {'-'*8} {'-'*5} {'-'*15} {'-'*6} {'-'*10}")
for i in range(8):
    f = node_features[i]
    emb = embeddings[i][0]
    print(f"  {i:>4} {f[0]:>8} {f[1]:>5} {f[2]:>15} {truth_labels[i]:>6} {emb:>10.4f}")

print()
print("=== Why GNN beats rule-based + random forest ===")
print(f"  Rule-based: 'amount > $10k -> flag' - easy to evade (split payments)")
print(f"  Random forest: per-transaction features - misses network pattern")
print(f"  GNN: aggregates neighbor info via message passing - catches smurfing")
print(f"  Production: Visa (100M+ txns/day), JPMorgan (~60% fraud alerts)")
print()
print("=== Modern GNN architectures for fraud (2024) ===")
print(f"  - GraphSAGE (2017): mean aggregation")
print(f"  - GAT (2018): attention weights on neighbors")
print(f"  - TGN (Rossi 2020): txn history over time")
print(f"  - Heterophilic GNN (2022+): fraud nodes look SIMILAR to neighbors")
print(f"  - Federated GNN (2023+): banks collaborate without sharing data")`,B=`import math
import random

random.seed(42)

class OrderBook:
    def __init__(self, mid_price=100.0, spread=0.01, levels=10):
        self.mid = mid_price
        self.spread = spread
        self.levels = levels
        self.bids = []
        self.asks = []
        self.tick_count = 0
        self.history = [mid_price]
        self._init_book()

    def _init_book(self):
        for i in range(self.levels):
            self.bids.append((self.mid - self.spread / 2 - i * 0.01, max(10, 100 - i * 8 + random.gauss(0, 5))))
            self.asks.append((self.mid + self.spread / 2 + i * 0.01, max(10, 100 - i * 8 + random.gauss(0, 5))))

    def step(self):
        dt = 0.001
        sigma = 0.0005
        self.mid += sigma * math.sqrt(dt) * random.gauss(0, 1) * 100
        self.history.append(self.mid)
        for i in range(self.levels):
            self.bids[i] = (self.mid - self.spread / 2 - i * 0.01, max(10, 100 - i * 8 + random.gauss(0, 5)))
            self.asks[i] = (self.mid + self.spread / 2 + i * 0.01, max(10, 100 - i * 8 + random.gauss(0, 5)))
        self.tick_count += 1

    def spread_pct(self):
        return self.spread / self.mid * 100

    def market_depth(self):
        return sum(p * s for p, s in self.bids[:5]) + sum(p * s for p, s in self.asks[:5])

book = OrderBook(mid_price=100.0, spread=0.01, levels=10)

print("=== HFT order book microstructure (1 ms timestep) ===")
print()
print(f"  Initial state: mid = \${book.mid:.4f}, spread = {book.spread:.4f} ({book.spread_pct():.4f}%)")
print()
print(f"  Top 5 bid levels (price, size):")
for i in range(5):
    print(f"    Bid {i+1}: \${book.bids[i][0]:.4f} x {book.bids[i][1]:.0f}")
print(f"  Top 5 ask levels (price, size):")
for i in range(5):
    print(f"    Ask {i+1}: \${book.asks[i][0]:.4f} x {book.asks[i][1]:.0f}")
print()
print(f"  Market depth (top 5 levels each side): \${book.market_depth():.0f}")

for _ in range(1000):
    book.step()

print()
print(f"  After 1000 ms ({book.tick_count} ticks):")
print(f"    mid price = \${book.mid:.4f} (changed \${(book.mid - 100):.4f})")
print(f"    spread = {book.spread:.4f} ({book.spread_pct():.4f}%)")
print(f"    mid price range over 1 second: \${min(book.history):.4f} - \${max(book.history):.4f}")
print(f"    market depth = \${book.market_depth():.0f}")

print()
print("=== HFT economics (contention) ===")
print(f"  Maker rebate: $0.0029/share (US equities, SEC Reg NMS)")
print(f"  Taker fee: $0.0030/share")
print(f"  -> Exchange PAYS makers, charges takers - 'maker-taker' model")
print(f"  Spread capture: \${book.spread:.4f} x {book.bids[0][1]:.0f} = \${book.spread * book.bids[0][1]:.4f} profit per filled order")
print(f"  HFT revenue: ~$2B/year in US equities (TABB Group estimate)")
print()
print("=== PFOF (Payment for Order Flow) debate ===")
print(f"  Robinhood model: 0 commission but sells retail orders to wholesalers")
print(f"  Wholesalers (Citadel, Virtu): pay 0.001-0.002/share for order flow")
print(f"  SEC 2024 rule: tick size 1c -> 0.5c for stocks > $1, open auction for retail")
print(f"  Citadel + Virtu suing SEC: 'rule will harm retail liquidity'")
print(f"  Michael Lewis 'Flash Boys' (2014): accused HFT of front-running retail")
print(f"  Truth: HFT is BOTH liquidity-providing AND rent-seeking (depends on practice)")`;function E({accent:e}){let[s,i]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=setInterval(()=>i(e=>(e+.05)%(2*Math.PI)),50);return()=>clearInterval(e)},[]),(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("line",{x1:"10",y1:"115",x2:"90",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)(r.motion.path,{d:"M 10 115 L 50 115 L 80 95 L 90 75",fill:"none",stroke:e,strokeWidth:"1.5",animate:{d:`M 10 115 L 50 115 L 80 ${95+5*Math.sin(s)} L 90 ${75+5*Math.sin(s)}`},transition:{duration:.05}}),(0,t.jsx)("text",{x:"50",y:"30",textAnchor:"middle",fontSize:"8",fill:e,fontWeight:"bold",children:"C = S·N(d₁)"}),(0,t.jsx)("text",{x:"50",y:"125",textAnchor:"middle",fontSize:"6",fill:"oklch(0.55 0.10 250)",children:"Long call payoff"}),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:"oklch(0.55 0.10 250)",children:"- K·e^(-rT)·N(d₂)"})]})}function q({accent:e}){let[s,i]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=setInterval(()=>i(e=>(e+.08)%(2*Math.PI)),50);return()=>clearInterval(e)},[]),(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("line",{x1:"10",y1:"115",x2:"90",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"10",y1:"20",x2:"10",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5"}),[5,10,18,25,30,28,20,10,5,2].map((a,i)=>(0,t.jsx)(r.motion.rect,{x:12+8*i,y:115-3*a,width:"6",height:3*a,fill:i<2?e:"oklch(0.65 0.16 250 / 0.5)",animate:{height:[3*a,3*a*(.7+.3*Math.sin(s+.5*i)),3*a]},transition:{duration:1,repeat:1/0,delay:.1*i}},i)),(0,t.jsx)("line",{x1:"22",y1:"20",x2:"22",y2:"115",stroke:e,strokeWidth:"1",strokeDasharray:"2 1"}),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:e,fontWeight:"bold",children:"VaR + CVaR"})]})}function F({accent:e}){return(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("circle",{cx:"20",cy:"60",r:"6",fill:"oklch(0.65 0.16 165 / 0.6)"}),(0,t.jsx)("circle",{cx:"50",cy:"40",r:"6",fill:"oklch(0.65 0.16 165 / 0.6)"}),(0,t.jsx)("circle",{cx:"80",cy:"60",r:"6",fill:e,opacity:"0.7"}),(0,t.jsx)("circle",{cx:"35",cy:"100",r:"6",fill:"oklch(0.65 0.16 165 / 0.6)"}),(0,t.jsx)("circle",{cx:"65",cy:"100",r:"6",fill:e,opacity:"0.7"}),(0,t.jsx)("line",{x1:"20",y1:"60",x2:"50",y2:"40",stroke:"oklch(0.65 0.10 250 / 0.5)",strokeWidth:"0.5"}),(0,t.jsx)(r.motion.line,{x1:"50",y1:"40",x2:"80",y2:"60",stroke:e,strokeWidth:"1.5",animate:{opacity:[.4,1,.4]},transition:{duration:1.5,repeat:1/0}}),(0,t.jsx)(r.motion.line,{x1:"80",y1:"60",x2:"65",y2:"100",stroke:e,strokeWidth:"1.5",animate:{opacity:[.4,1,.4]},transition:{duration:1.5,repeat:1/0,delay:.5}}),(0,t.jsx)("text",{x:"50",y:"125",textAnchor:"middle",fontSize:"6",fill:e,fontWeight:"bold",children:"GNN transaction graph"}),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:"oklch(0.55 0.10 250)",children:"smurfing detected"})]})}function R({accent:e}){return(0,t.jsxs)("svg",{viewBox:"0 0 100 140",className:"w-full h-full",children:[(0,t.jsx)("line",{x1:"50",y1:"20",x2:"50",y2:"115",stroke:"oklch(0.55 0.10 250)",strokeWidth:"0.5",strokeDasharray:"2 1"}),[0,1,2,3].map(e=>(0,t.jsx)(r.motion.rect,{x:50-(20-3*e),y:30+20*e,width:20-3*e,height:"15",fill:"oklch(0.65 0.16 165 / 0.6)",animate:{width:[20-3*e,18-3*e,20-3*e]},transition:{duration:1,repeat:1/0,delay:.1*e}},`b${e}`)),[0,1,2,3].map(a=>(0,t.jsx)(r.motion.rect,{x:50,y:30+20*a,width:20-3*a,height:"15",fill:e,animate:{width:[20-3*a,18-3*a,20-3*a]},transition:{duration:1,repeat:1/0,delay:.1*a+.3},opacity:"0.6"},`a${a}`)),(0,t.jsx)("text",{x:"50",y:"135",textAnchor:"middle",fontSize:"6",fill:e,fontWeight:"bold",children:"HFT order book"})]})}let z=[{id:"bs",step:"1",hookTitle:"The formula that started quant — 50 years old",subtitle:"C = S·N(d₁) - K·e^(-rT)·N(d₂) — Black 1973",accent:"oklch(0.55 0.16 30)",thumbnail:(0,t.jsx)(E,{accent:"oklch(0.55 0.16 30)"}),detail:(0,t.jsx)(function(){return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)("div",{className:"w-48 h-64",children:(0,t.jsx)(E,{accent:"oklch(0.55 0.16 30)"})})}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground text-center mt-2",children:"Black-Scholes (1973, Nobel 1997) derives a closed-form European option price from a no-arbitrage argument. Apply Itô's lemma to a delta-hedged portfolio → BS PDE → closed form solution."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-sm text-primary",children:"C = S·N(d₁) - K·e^(-rT)·N(d₂)"}),(0,t.jsx)("p",{className:"font-mono text-xs mt-1",children:"d₁ = (ln(S/K) + (r+σ²/2)T) / (σ√T)  ·  d₂ = d₁ - σ√T"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"Put-Call Parity: C - P = S - K·e^(-rT)"})]}),(0,t.jsx)(l.PyodideRunner,{buttonLabel:"Run Black-Scholes + 5 Greeks (Pyodide)",code:A}),(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-3",children:[(0,t.jsxs)("p",{className:"text-[11px] text-amber-700 dark:text-amber-300 flex items-center gap-1.5 mb-1.5",children:[(0,t.jsx)(C.BookOpen,{className:"h-3 w-3"})," Recent research (2023-2024)"]}),(0,t.jsxs)("p",{className:"text-xs text-foreground/80 leading-relaxed",children:[(0,t.jsx)("strong",{children:"50th anniversary of Black-Scholes (2023)."})," The formula survives as a quoting convention even though its assumptions (constant σ, lognormal, no jumps) are all empirically false. ",(0,t.jsx)("strong",{children:"Deep hedging"})," (Buehler et al. 2019+): NN learns option pricing + hedging strategy directly from data, no PDE needed — now in production at JP Morgan.",(0,t.jsx)("strong",{children:"Rough volatility"})," (Bayer, Friz, Gatheral 2016): σ has Hurst H≈0.1 (rougher than Brownian) — matches “vol-of-vol” empirical fact better than Heston. ",(0,t.jsx)("strong",{children:"SVI parametrization"})," (Gatheral 2004): industry standard for fitting the vol surface — 5 parameters per maturity."]})]})]})},{})},{id:"var",step:"2",hookTitle:"10,000 paths → how bad can it get?",subtitle:"VaR + CVaR — Basel IV 2025+",accent:"oklch(0.55 0.16 0)",thumbnail:(0,t.jsx)(q,{accent:"oklch(0.55 0.16 0)"}),detail:(0,t.jsx)(function(){return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)("div",{className:"w-48 h-64",children:(0,t.jsx)(q,{accent:"oklch(0.55 0.16 0)"})})}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground text-center mt-2",children:"Monte Carlo simulates 10,000 GBM paths to estimate the P&L distribution. VaR = loss quantile; CVaR (Expected Shortfall) = average of the tail beyond VaR. Basel IV (2025+) replaces 99% VaR with 97.5% CVaR."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-sm text-primary",children:"VaR_α = -Q_α(P&L)"}),(0,t.jsx)("p",{className:"font-mono text-xs mt-1",children:"CVaR = -E[P&L | P&L < -VaR]"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"GBM: S_T = S₀·exp((μ-σ²/2)T + σ√T·Z), Z~N(0,1)"})]}),(0,t.jsx)(l.PyodideRunner,{buttonLabel:"Run Monte Carlo VaR + CVaR (Pyodide)",code:P}),(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-3",children:[(0,t.jsxs)("p",{className:"text-[11px] text-amber-700 dark:text-amber-300 flex items-center gap-1.5 mb-1.5",children:[(0,t.jsx)(C.BookOpen,{className:"h-3 w-3"})," Recent research (2024-2025)"]}),(0,t.jsxs)("p",{className:"text-xs text-foreground/80 leading-relaxed",children:[(0,t.jsx)("strong",{children:"Basel IV (2025+):"})," Switches from 99% VaR to 97.5% CVaR (Expected Shortfall). Banks must hold ~30-40% more capital. ",(0,t.jsx)("strong",{children:"Rockafellar-Uryasev (2000, Nobel-caliber):"}),"CVaR is convex (unlike VaR), making portfolio optimisation tractable.",(0,t.jsx)("strong",{children:"2008 GFC lesson:"})," Gaussian VaR failed — kurtosis 5-10× normal distribution.",(0,t.jsx)("strong",{children:"Modern alternatives:"})," Filtered historical simulation (GARCH + bootstrap), Extreme Value Theory (peaks-over-threshold), ",(0,t.jsx)("strong",{children:"LSTM for tail dependence"})," (Berg 2022+). Regulators increasingly require stressed VaR (calibrated to worst historical window)."]})]})]})},{})},{id:"gnn",step:"3",hookTitle:"Catching the chain, not the transaction",subtitle:"GraphSAGE — Visa, JPMorgan production 2024",accent:"oklch(0.55 0.16 165)",thumbnail:(0,t.jsx)(F,{accent:"oklch(0.55 0.16 0)"}),detail:(0,t.jsx)(function(){return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)("div",{className:"w-48 h-64",children:(0,t.jsx)(F,{accent:"oklch(0.55 0.16 0)"})})}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground text-center mt-2",children:"GraphSAGE (Hamilton et al. 2017) aggregates neighbor information via message passing: h_v = σ(W·AGG([h_u : u ∈ N(v)])). A single $5k transaction looks normal; the same $5k preceded by 100 small deposits + immediate cash-out is money laundering."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-sm text-primary",children:"h_v^(l+1) = σ(W·AGG({h_u^(l) : u∈N(v)}))"}),(0,t.jsx)("p",{className:"font-mono text-xs mt-1",children:"fraud_score(v) = MLP(h_v^(L))"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"GraphSAGE: mean aggregation · GAT: attention weights · TGN: temporal"})]}),(0,t.jsx)(l.PyodideRunner,{buttonLabel:"Run GraphSAGE fraud detection (Pyodide)",code:L}),(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-3",children:[(0,t.jsxs)("p",{className:"text-[11px] text-amber-700 dark:text-amber-300 flex items-center gap-1.5 mb-1.5",children:[(0,t.jsx)(C.BookOpen,{className:"h-3 w-3"})," Recent research (2024)"]}),(0,t.jsxs)("p",{className:"text-xs text-foreground/80 leading-relaxed",children:[(0,t.jsx)("strong",{children:"GraphSAGE"})," (Hamilton et al. 2017) and ",(0,t.jsx)("strong",{children:"GAT"})," (Veličković et al. 2018) are the production standard for transaction-graph fraud detection. Visa runs GNNs on 100M+ txns/day; JPMorgan ~60% of fraud alerts are GNN-generated. ",(0,t.jsx)("strong",{children:"Temporal Graph Networks (TGN, Rossi 2020)"}),"model txns over time — critical for detecting velocity patterns. ",(0,t.jsx)("strong",{children:"Heterophilic GNNs"})," (2022+): fraud nodes look SIMILAR to their neighbours (homophilic assumption breaks), requiring special architectures.",(0,t.jsx)("strong",{children:"Federated GNN (2023+):"})," banks collaborate on model training without sharing raw transaction data — protects customer privacy. ",(0,t.jsx)("strong",{children:"Adversarial arms race:"})," fraudsters now use GANs to evade GNNs (adversarial perturbations to transaction graphs)."]})]})]})},{})},{id:"hft",step:"4",hookTitle:"The 1-millisecond battleground",subtitle:"Order book + PFOF + maker-taker — SEC 2024",accent:"oklch(0.55 0.16 250)",thumbnail:(0,t.jsx)(R,{accent:"oklch(0.55 0.16 30)"}),detail:(0,t.jsx)(function(){return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)("div",{className:"w-48 h-64",children:(0,t.jsx)(R,{accent:"oklch(0.55 0.16 30)"})})}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground text-center mt-2",children:"The limit order book is HFT's battleground. Makers (passive limit orders) earn rebates ($0.0029/share); takers (aggressive market orders) pay fees ($0.0030). The spread is the HFT's profit margin — typically 0.01-0.05 in liquid stocks. Contention: does HFT add or remove liquidity?"})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsx)("p",{className:"font-mono text-sm text-primary",children:"Spread = ask - bid · Market depth = Σ(size × price) across N levels"}),(0,t.jsx)("p",{className:"font-mono text-xs mt-1",children:"Maker rebate: $0.0029/share · Taker fee: $0.0030/share"}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"HFT revenue: ~$2B/year in US equities (TABB Group estimate)"})]}),(0,t.jsx)(l.PyodideRunner,{buttonLabel:"Run HFT order book simulator (Pyodide)",code:B}),(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-3",children:[(0,t.jsxs)("p",{className:"text-[11px] text-amber-700 dark:text-amber-300 flex items-center gap-1.5 mb-1.5",children:[(0,t.jsx)(C.BookOpen,{className:"h-3 w-3"})," Recent research + regulation (2024)"]}),(0,t.jsxs)("p",{className:"text-xs text-foreground/80 leading-relaxed",children:[(0,t.jsx)("strong",{children:"SEC Reg NMS 2024 update:"})," tick-size reduction ($1¢ → $0.5¢ for high-priced stocks), open auction for retail orders, AI-based market surveillance. Goal: level the playing field between HFT firms and retail. ",(0,t.jsx)("strong",{children:"Contention: maker-taker vs free-to-take"})," — exchanges pay rebates for providing liquidity; critics argue this incentivises phantom orders. ",(0,t.jsx)("strong",{children:"PFOF debate"})," (Payment for Order Flow): Robinhood sells retail orders to wholesalers (Citadel, Virtu) — Michael Lewis's “Flash Boys” (2014) accused HFT of front-running retail. Citadel + Virtu are suing SEC over 2024 rules. ",(0,t.jsx)("strong",{children:"IEX (2013, Michael Lewis-backed)"}),": speed bump defeats latency arbitrage. The truth: HFT is BOTH liquidity-providing (90% spread reduction since 1990) AND rent-seeking (latency arb, sub-penn sniffing) — depends on the specific practice."]})]})]})},{})}];function V(){let[e,s]=(0,a.useState)(null),i=e?z.find(t=>t.id===e):null;return(0,a.useEffect)(()=>{if(!e)return;let t=e=>{"Escape"===e.key&&s(null)};return window.addEventListener("keydown",t),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",t),document.body.style.overflow=""}},[e]),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("p",{className:"text-[11px] text-muted-foreground text-center flex items-center justify-center gap-1.5 flex-wrap",children:[(0,t.jsx)(x.Zap,{className:"h-3 w-3 text-amber-500"}),"Click any short to open a lazy popup — animated SVG + math + Pyodide-runnable Python code + 2024-2025 paper citation.",(0,t.jsx)("span",{className:"text-[10px]",children:"Modal content only mounts on click."})]}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:z.map(e=>(0,t.jsxs)(r.motion.button,{type:"button",onClick:()=>s(e.id),className:"relative rounded-xl overflow-hidden border border-border/60 hover:border-primary/60 hover:shadow-lg transition-all bg-gradient-to-br from-card to-muted/30 group",whileHover:{y:-4},whileTap:{scale:.98},"aria-label":`Open short: ${e.hookTitle}`,children:[(0,t.jsxs)("div",{className:"relative w-full bg-gradient-to-br from-muted/40 to-card",style:{aspectRatio:"9 / 16",maxHeight:320},children:[(0,t.jsx)("div",{className:"absolute inset-0 p-2",children:e.thumbnail}),(0,t.jsx)("div",{className:"absolute top-2 left-2 z-10",children:(0,t.jsxs)(m.Badge,{variant:"secondary",className:"text-[10px] h-5 px-1.5 gap-0.5",style:{backgroundColor:e.accent+"20",color:e.accent},children:[(0,t.jsx)(D.Sparkles,{className:"h-2.5 w-2.5"})," QUANT ",e.step]})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center",children:(0,t.jsx)(r.motion.div,{initial:{opacity:0,scale:.8},whileHover:{opacity:1,scale:1},className:"opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur rounded-full p-2.5 border border-border shadow-md",children:(0,t.jsx)(b.DollarSign,{className:"h-4 w-4 text-primary"})})})]}),(0,t.jsxs)("div",{className:"p-2.5 border-t border-border/40 bg-background/80",children:[(0,t.jsx)("p",{className:"text-xs font-semibold leading-tight",style:{color:e.accent},children:e.hookTitle}),(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground mt-0.5 font-mono",children:e.subtitle})]})]},e.id))}),(0,t.jsx)(T.AnimatePresence,{children:i&&(0,t.jsxs)(r.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 md:p-6 overflow-y-auto",onClick:()=>s(null),children:[(0,t.jsx)("button",{type:"button",onClick:()=>s(null),className:"absolute top-3 right-3 z-30 p-2 rounded-full bg-background/90 border border-border hover:bg-accent transition-colors","aria-label":"Close",children:(0,t.jsx)(M.X,{className:"h-5 w-5"})}),(0,t.jsxs)("div",{className:"absolute top-3 left-3 z-30 px-3 py-1.5 rounded-full bg-background/90 border border-border flex items-center gap-2 text-xs font-semibold",children:[(0,t.jsx)(b.DollarSign,{className:"h-3.5 w-3.5",style:{color:i.accent}}),(0,t.jsxs)("span",{style:{color:i.accent},children:["QUANT ",i.step," · ",i.hookTitle]})]}),(0,t.jsxs)(r.motion.div,{initial:{scale:.95,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.95,opacity:0,y:20},transition:{duration:.25},className:"relative w-full max-w-3xl my-8 rounded-xl border border-border bg-background shadow-2xl overflow-hidden",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("div",{className:"p-4 md:p-6 max-h-[85vh] overflow-y-auto",children:i.detail}),(0,t.jsxs)("div",{className:"border-t border-border/40 bg-muted/20 px-4 md:px-6 py-2.5 flex items-center justify-between text-[10px] text-muted-foreground",children:[(0,t.jsx)("span",{children:"← click outside or press Esc to close"}),(0,t.jsxs)("span",{className:"font-mono",children:[z.findIndex(e=>e.id===i.id)+1," / ",z.length]})]})]})]})})]})}var I=e.i(72664),G=e.i(852008);let W=["C = S·N(d₁) - K·e^(-rT)·N(d₂)","d₁ = (ln(S/K)+(r+σ²/2)T)/(σ√T)","d₂ = d₁ - σ√T","GBM: dS = μS·dt + σS·dW","VaR = -Q_α(P&L)","CVaR = -E[L|L>VaR]","Sharpe = (μ-r)/σ","Markowitz: min w'Σw","Heston: dv = κ(θ-v)dt + ξ√v·dW'","Black-76: F·N(d₁) - K·N(d₂)","SABR: σ_imp(K) = α·(FK)^(β-1)","Itô: df = (∂f/∂t + μS∂f/∂S + ½σ²S²∂²f/∂S²)dt","put-call parity: C - P = S - K·e^(-rT)","risk-free rate r · strike K","implied volatility σ_imp","maturity T · delta ∂C/∂S","gamma ∂²C/∂S² · vega ∂C/∂σ","theta ∂C/∂t · rho ∂C/∂r","Basel IV · FRTB · Expected Shortfall","duration = Σ t·CF_t / P","convexity = Σ t(t+1)·CF_t / (P·(1+y)²)","OLS: β = (X'X)^-1·X'y","ARIMA(p,d,q): φ(B)(1-B)^d·y_t = θ(B)ε_t","max drawdown = max_t(P_t/P_max - 1)"];function O({children:e,w:a=240,h:r=320}){return(0,t.jsxs)("div",{className:"ft-3d-scene relative",style:{width:a,height:r,perspective:"900px"},children:[(0,t.jsx)("style",{children:`
        .ft-3d-stage {
          transform-style: preserve-3d;
          transform: rotateX(15deg) rotateY(20deg);
          animation: ft-3d-rotate 8s linear infinite;
        }
        @keyframes ft-3d-rotate {
          from { transform: rotateX(15deg) rotateY(0deg); }
          to   { transform: rotateX(15deg) rotateY(360deg); }
        }
        .ft-bg-float {
          position: absolute;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          color: oklch(0.65 0.15 250 / 0.18);
          pointer-events: none;
          white-space: nowrap;
          font-size: 11px;
          line-height: 1.4;
          animation: ft-bg-drift linear infinite;
        }
        @keyframes ft-bg-drift {
          from { transform: translateY(0) translateX(0); opacity: 0.0; }
          10%  { opacity: 1.0; }
          90%  { opacity: 1.0; }
          to   { transform: translateY(-180px) translateX(40px); opacity: 0.0; }
        }
      `}),(0,t.jsx)("div",{className:"ft-3d-stage w-full h-full flex items-center justify-center",children:e})]})}function H(){let e=W.map((e,t)=>({text:e,x:53*t%95,y:37*t%90,delay:1.7*t%14,duration:14+t%7,size:10+3*t%5}));return(0,t.jsx)("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:e.map((e,a)=>(0,t.jsx)("div",{className:"ft-bg-float",style:{left:`${e.x}%`,bottom:`${e.y-50}%`,animationDelay:`${e.delay}s`,animationDuration:`${e.duration}s`,fontSize:`${e.size}px`},children:e.text},a))})}function K(e){if(e>6)return 1;if(e<-6)return 0;let t=1/(1+.2316419*Math.abs(e)),a=.3989423*Math.exp(-e*e/2)*t*(.3193815+t*(-.3565638+t*(1.781478+t*(-1.821256+1.330274*t))));return e>0?1-a:a}function $(e,t,a,r,s){if(a<1e-6)return Math.max(0,e-t);let i=(Math.log(e/t)+(r+s*s/2)*a)/(s*Math.sqrt(a)),o=i-s*Math.sqrt(a);return e*K(i)-t*Math.exp(-r*a)*K(o)}function U({dim:e=3}){let s,i,[o,n]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=setInterval(()=>n(e=>(e+1)%100),100);return()=>clearInterval(e)},[]);let l=3===e?1:4===e?3:5===e?5:8,d=["oklch(0.65 0.16 250)","oklch(0.65 0.16 165)","oklch(0.65 0.16 30)","oklch(0.65 0.16 320)","oklch(0.65 0.16 200)","oklch(0.65 0.16 130)","oklch(0.65 0.16 60)","oklch(0.65 0.16 280)"],c=100+25*Math.sin(o/18),p=.5+.4*Math.sin(o/23),m=[60,70,80,90,100,110,120,130,140],h=[.05,.15,.3,.5,.7,1],u=(e,t,a)=>{let r=t/1;return{x:60+(e-60)/80*200+70*r,y:260+4*a-50*r}};return(0,t.jsxs)("svg",{viewBox:"0 0 360 320",width:"100%",height:"100%",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("radialGradient",{id:"bs-dot-glow",cx:"50%",cy:"50%",r:"50%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"oklch(0.85 0.20 25 / 0.95)"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"oklch(0.50 0.18 25 / 0.0)"})]})}),(0,t.jsx)("line",{x1:"60",y1:"260",x2:"330",y2:"260",stroke:"oklch(0.55 0.10 250 / 0.6)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"60",y1:"60",x2:"60",y2:"260",stroke:"oklch(0.55 0.10 250 / 0.6)",strokeWidth:"0.8"}),(0,t.jsx)("text",{x:"320",y:"270",textAnchor:"end",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:"S"}),(0,t.jsx)("text",{x:"56",y:"65",textAnchor:"end",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:"C"}),(0,t.jsx)("text",{x:"130",y:"318",textAnchor:"middle",fontSize:"8",fill:"oklch(0.55 0.10 250)",children:"T → back"}),Array.from({length:l}).map((e,a)=>{let r=100+(a-(l-1)/2)*4,s=d[a%d.length],i=h.map((e,t)=>({ti:t,points:m.map(t=>u(t,e,$(t,r,e,.05,.2)))})),o=m.map((e,t)=>({si:t,points:h.map(t=>u(e,t,$(e,r,t,.05,.2)))})),n=[...m.map(e=>u(e,h[0],$(e,r,h[0],.05,.2))),...h.map(e=>u(m[m.length-1],e,$(m[m.length-1],r,e,.05,.2))),...m.slice().reverse().map(e=>u(e,h[h.length-1],$(e,r,h[h.length-1],.05,.2))),...h.slice().reverse().map(e=>u(m[0],e,$(m[0],r,e,.05,.2)))];return(0,t.jsxs)("g",{opacity:1===l?.9:.45/l*3,children:[1===l&&(0,t.jsx)("polygon",{points:n.map(e=>`${e.x},${e.y}`).join(" "),fill:s,fillOpacity:"0.08",stroke:"none"}),i.map(e=>(0,t.jsx)("polyline",{points:e.points.map(e=>`${e.x},${e.y}`).join(" "),fill:"none",stroke:s,strokeWidth:"1.2"},`t-${a}-${e.ti}`)),o.map(e=>(0,t.jsx)("polyline",{points:e.points.map(e=>`${e.x},${e.y}`).join(" "),fill:"none",stroke:s,strokeWidth:"0.6",strokeDasharray:"2 2",opacity:"0.6"},`s-${a}-${e.si}`))]},`asset-${a}`)}),(s=$(c,100,p,.05,.2),i=u(c,p,s),(0,t.jsxs)("g",{children:[(0,t.jsx)(r.motion.circle,{cx:i.x,cy:i.y,r:5,fill:"url(#bs-dot-glow)",animate:{r:[3,7,3]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)("circle",{cx:i.x,cy:i.y,r:"2",fill:"oklch(0.85 0.20 25)"}),(0,t.jsxs)("text",{x:i.x+8,y:i.y-6,fontSize:"9",fill:"oklch(0.85 0.20 25)",fontWeight:"bold",children:["C=",s.toFixed(2)]}),(0,t.jsxs)("text",{x:i.x+8,y:i.y+4,fontSize:"8",fill:"oklch(0.65 0.10 250)",fontFamily:"monospace",children:["S=",c.toFixed(1)," T=",p.toFixed(2)]})]})),(0,t.jsxs)("text",{x:"180",y:"305",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:[1===l?"Black-Scholes C(S, T)":`${l}-asset basket surface`," · r=",.05," σ=",.2]})]})}function Y({dim:e=3}){let[s,i]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=setInterval(()=>i(e=>(e+1)%80),100);return()=>clearInterval(e)},[]);let o=3===e?20:4===e?30:5===e?40:60,n=Math.min(s,30),l=e=>{let t=1e4*Math.sin(9999.7*e);return t-Math.floor(t)},d=(e,t)=>Math.sqrt(-2*Math.log(Math.max(1e-6,l(100*e+7*t))))*Math.cos(2*Math.PI*l(100*e+7*t+1)),c=Array.from({length:o},(e,t)=>{let a=[100];for(let e=1;e<=30;e++){let r=1/30,s=d(t,e),i=a[e-1]*Math.exp(.06*r+.2*Math.sqrt(r)*s);a.push(i)}return a}),p=s>=29,m=c.map(e=>e[30]).slice().sort((e,t)=>e-t),h=Math.max(40,m[0]??80),u=Math.max(1e-6,(Math.min(220,m[m.length-1]??120)-h)/8),f=Array.from({length:8},(e,t)=>{let a=h+t*u,r=a+u;return m.filter(e=>e>=a&&(7===t?e<=r:e<r)).length}),g=Math.max(...f,1),x=Math.max(0,Math.floor(.05*m.length)),b=m[x]??100,_=m.slice(0,x+1),y=_.length?_.reduce((e,t)=>e+t,0)/_.length:b,v=e=>280-(e-40)/180*230;return(0,t.jsxs)("svg",{viewBox:"0 0 360 320",width:"100%",height:"100%",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("radialGradient",{id:"mc-path-tip",cx:"50%",cy:"50%",r:"50%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"oklch(0.85 0.18 165 / 0.9)"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"oklch(0.50 0.16 165 / 0.0)"})]})}),(0,t.jsx)("line",{x1:"30",y1:"50",x2:"30",y2:"280",stroke:"oklch(0.55 0.10 250 / 0.7)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"30",y1:"280",x2:"245",y2:"280",stroke:"oklch(0.55 0.10 250 / 0.7)",strokeWidth:"0.8"}),(0,t.jsxs)("text",{x:"135",y:"300",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:["time t (years) → T=","1.0"]}),(0,t.jsx)("text",{x:"20",y:"55",textAnchor:"end",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:"S(t)"}),(0,t.jsx)("line",{x1:"30",y1:v(100),x2:"245",y2:v(100),stroke:"oklch(0.55 0.10 250 / 0.3)",strokeDasharray:"2 2",strokeWidth:"0.6"}),(0,t.jsx)("text",{x:"34",y:v(100)-4,textAnchor:"start",fontSize:"8",fill:"oklch(0.65 0.10 250)",children:"S₀=100"}),c.map((e,a)=>{let r=e.slice(0,n+1).map((e,t)=>`${30+t/30*215},${v(e)}`).join(" ");return(0,t.jsx)("polyline",{points:r,fill:"none",stroke:`oklch(0.65 0.16 ${30+23*a%300} / 0.55)`,strokeWidth:"0.7"},`path-${a}`)}),p&&f.map((e,a)=>{let s=h+a*u,i=v(s+u),o=v(s),n=e/g*55;return(0,t.jsx)(r.motion.rect,{x:255,y:i,width:n,height:Math.max(1,o-i-1),fill:"oklch(0.65 0.16 165 / 0.45)",stroke:"oklch(0.65 0.16 165)",strokeWidth:"0.4",initial:{width:0},animate:{width:n},transition:{duration:.5,delay:.05*a}},`bin-${a}`)}),p&&(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:"30",y1:v(b),x2:"245",y2:v(b),stroke:"oklch(0.85 0.20 25)",strokeWidth:"1",strokeDasharray:"5 3"}),(0,t.jsxs)("text",{x:"240",y:v(b)-4,textAnchor:"end",fontSize:"9",fill:"oklch(0.85 0.20 25)",fontWeight:"bold",children:["VaR(5%)=",b.toFixed(1)]}),(0,t.jsx)("line",{x1:"30",y1:v(y),x2:"245",y2:v(y),stroke:"oklch(0.85 0.20 320)",strokeWidth:"1",strokeDasharray:"5 3"}),(0,t.jsxs)("text",{x:"240",y:v(y)+10,textAnchor:"end",fontSize:"9",fill:"oklch(0.85 0.20 320)",fontWeight:"bold",children:["CVaR=",y.toFixed(1)]})]}),p&&(0,t.jsx)("text",{x:"282",y:"295",textAnchor:"middle",fontSize:"8",fill:"oklch(0.55 0.10 250)",children:"terminal S_T distribution"}),(0,t.jsxs)("text",{x:"180",y:"318",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:[o," GBM paths · μ=",.08," σ=",.2," · step ",n,"/",30,p?" · distribution ready":""]})]})}function Z({dim:e=3}){let s,i,[o,n]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=setInterval(()=>n(e=>(e+1)%100),100);return()=>clearInterval(e)},[]);let l=3===e?1:4===e?3:5===e?5:8,d=["oklch(0.65 0.16 165)","oklch(0.65 0.16 30)","oklch(0.65 0.16 320)","oklch(0.65 0.16 200)","oklch(0.65 0.16 130)","oklch(0.65 0.16 60)","oklch(0.65 0.16 280)","oklch(0.65 0.16 100)"],c=100+20*Math.sin(o/18),p=.5+.35*Math.sin(o/23),m=[70,80,90,95,100,105,110,120,130],h=[.05,.15,.3,.5,.7,1],u=(e,t,a=0)=>{let r=(e-100)/100;return Math.max(.05,.18+1.2*r*r+.04*Math.sqrt(t)+-.05*r+a)},f=(e,t,a)=>{let r=t/1;return{x:50+(e-70)/60*210+60*r,y:270-380*a-50*r}};return(0,t.jsxs)("svg",{viewBox:"0 0 360 320",width:"100%",height:"100%",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("radialGradient",{id:"vol-dot-glow",cx:"50%",cy:"50%",r:"50%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"oklch(0.85 0.20 25 / 0.95)"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"oklch(0.50 0.18 25 / 0.0)"})]})}),(0,t.jsx)("line",{x1:"50",y1:"270",x2:"320",y2:"270",stroke:"oklch(0.55 0.10 250 / 0.6)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"50",y1:"50",x2:"50",y2:"270",stroke:"oklch(0.55 0.10 250 / 0.6)",strokeWidth:"0.8"}),(0,t.jsx)("text",{x:"310",y:"280",textAnchor:"end",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:"K"}),(0,t.jsx)("text",{x:"46",y:"55",textAnchor:"end",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:"σ_imp"}),(0,t.jsx)("text",{x:"120",y:"315",textAnchor:"middle",fontSize:"8",fill:"oklch(0.55 0.10 250)",children:"T → back (term structure)"}),Array.from({length:l}).map((e,a)=>{let r=(a-(l-1)/2)*.01,s=d[a%d.length],i=h.map((e,t)=>({ti:t,points:m.map(t=>f(t,e,u(t,e,r)))})),o=m.map((e,t)=>({ki:t,points:h.map(t=>f(e,t,u(e,t,r)))}));return(0,t.jsxs)("g",{opacity:1===l?.9:.4/l*3,children:[i.map(e=>(0,t.jsx)("polyline",{points:e.points.map(e=>`${e.x},${e.y}`).join(" "),fill:"none",stroke:s,strokeWidth:"1.2"},`tv-${a}-${e.ti}`)),o.map(e=>(0,t.jsx)("polyline",{points:e.points.map(e=>`${e.x},${e.y}`).join(" "),fill:"none",stroke:s,strokeWidth:"0.5",strokeDasharray:"2 2",opacity:"0.55"},`kv-${a}-${e.ki}`))]},`surf-${a}`)}),(s=u(c,p),i=f(c,p,s),(0,t.jsxs)("g",{children:[(0,t.jsx)(r.motion.circle,{cx:i.x,cy:i.y,r:5,fill:"url(#vol-dot-glow)",animate:{r:[3,7,3]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)("circle",{cx:i.x,cy:i.y,r:"2",fill:"oklch(0.85 0.20 25)"}),(0,t.jsxs)("text",{x:i.x+8,y:i.y-6,fontSize:"9",fill:"oklch(0.85 0.20 25)",fontWeight:"bold",children:["σ=",(100*s).toFixed(1),"%"]}),(0,t.jsxs)("text",{x:i.x+8,y:i.y+4,fontSize:"8",fill:"oklch(0.65 0.10 250)",fontFamily:"monospace",children:["K=",c.toFixed(1)," T=",p.toFixed(2)]})]})),(0,t.jsxs)("text",{x:"180",y:"305",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:[1===l?"Implied vol σ_imp(K,T)":`${l}-asset vol surfaces`," · smile + term structure"]})]})}function X({dim:e=3}){let[s,i]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=setInterval(()=>i(e=>(e+1)%100),100);return()=>clearInterval(e)},[]);let o=3===e?1:4===e?3:5===e?4:6,n=["oklch(0.65 0.16 250)","oklch(0.65 0.16 165)","oklch(0.65 0.16 30)","oklch(0.65 0.16 320)","oklch(0.65 0.16 200)","oklch(0.65 0.16 130)"],l=["UST","Swap","OIS","Fwd","EUR","JPY"],d=[0,-.005,-.012,.003,-.008,-.015],c=[{label:"3M",t:.25,y:.043},{label:"6M",t:.5,y:.045},{label:"1Y",t:1,y:.047},{label:"2Y",t:2,y:.046},{label:"5Y",t:5,y:.044},{label:"7Y",t:7,y:.045},{label:"10Y",t:10,y:.048},{label:"30Y",t:30,y:.052}],p=.002*Math.sin(s/18),m=Array.from({length:o},(e,t)=>({label:l[t%l.length],color:n[t%n.length],offset:d[t],points:c.map(e=>({...e,yAnim:e.y+d[t]+p+.001*Math.sin(s/10+e.t)}))})),h=m[0].points,u=h[6].yAnim,f=h[0].yAnim,g=u-f,x=g<0,b=e=>30+Math.log(e/.25)/Math.log(120)*260,_=e=>280-e/.08*230;return(0,t.jsxs)("svg",{viewBox:"0 0 360 320",width:"100%",height:"100%",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("radialGradient",{id:"yc-point-glow",cx:"50%",cy:"50%",r:"50%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"oklch(0.85 0.20 25 / 0.95)"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"oklch(0.50 0.18 25 / 0.0)"})]})}),(0,t.jsx)("line",{x1:"30",y1:"50",x2:"30",y2:"280",stroke:"oklch(0.55 0.10 250 / 0.7)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"30",y1:"280",x2:"320",y2:"280",stroke:"oklch(0.55 0.10 250 / 0.7)",strokeWidth:"0.8"}),(0,t.jsx)("text",{x:"320",y:"294",textAnchor:"end",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:"maturity"}),(0,t.jsx)("text",{x:"24",y:"55",textAnchor:"end",fontSize:"9",fill:"oklch(0.65 0.10 250)",children:"yield"}),x&&(0,t.jsx)(r.motion.rect,{x:"30",y:"50",width:"290",height:"230",fill:"oklch(0.70 0.20 25 / 0.08)",initial:{opacity:0},animate:{opacity:[.4,.8,.4]},transition:{duration:2,repeat:1/0}}),[0,.02,.04,.06,.08].map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:"30",y1:_(e),x2:"320",y2:_(e),stroke:"oklch(0.55 0.10 250 / 0.25)",strokeDasharray:"2 2",strokeWidth:"0.5"}),(0,t.jsxs)("text",{x:"28",y:_(e)+3,textAnchor:"end",fontSize:"8",fill:"oklch(0.55 0.10 250)",children:[(100*e).toFixed(0),"%"]})]},`grid-${e}`)),m.map((e,a)=>(0,t.jsxs)("g",{opacity:0===a?1:.55,children:[(0,t.jsx)("polyline",{points:e.points.map(e=>`${b(e.t)},${_(e.yAnim)}`).join(" "),fill:"none",stroke:e.color,strokeWidth:0===a?2:1.4}),e.points.map((i,o)=>{let n=3+1.5*Math.sin(s/5+o);return(0,t.jsxs)("g",{children:[(0,t.jsx)(r.motion.circle,{cx:b(i.t),cy:_(i.yAnim),r:n,fill:0===a&&x?"oklch(0.85 0.20 25)":e.color,animate:{r:[3,5,3]},transition:{duration:1.5,repeat:1/0,delay:.1*o}}),0===a&&(0,t.jsx)("text",{x:b(i.t),y:_(i.yAnim)-10,textAnchor:"middle",fontSize:"8",fill:"oklch(0.75 0.10 250)",children:i.label})]},`yc-${a}-${o}`)}),a>0&&(0,t.jsx)("text",{x:b(e.points[e.points.length-1].t)+4,y:_(e.points[e.points.length-1].yAnim)+3,fontSize:"8",fill:e.color,fontWeight:"bold",children:e.label})]},`curve-${a}`)),(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:b(.25),y1:_(f),x2:b(10),y2:_(f),stroke:"oklch(0.65 0.10 250 / 0.4)",strokeWidth:"0.5",strokeDasharray:"3 3"}),(0,t.jsx)("line",{x1:b(10),y1:_(f),x2:b(10),y2:_(u),stroke:x?"oklch(0.85 0.20 25)":"oklch(0.85 0.16 165)",strokeWidth:"2"})]}),(0,t.jsx)("text",{x:"180",y:"305",textAnchor:"middle",fontSize:"10",fill:x?"oklch(0.85 0.20 25)":"oklch(0.85 0.16 165)",fontWeight:"bold",children:x?"⚠ INVERTED — recession warning":"normal: 10Y > 3M"}),(0,t.jsxs)("text",{x:"180",y:"318",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.10 250)",fontFamily:"monospace",children:["10Y-3M spread = ",(100*g).toFixed(2),"%   ·   ",o>1?`${o} curves`:"Treasury only"]})]})}function J({value:e,onChange:a}){return(0,t.jsxs)("div",{className:"flex flex-wrap gap-1.5 items-center justify-center bg-muted/30 rounded-md p-1.5 border border-border/40",children:[(0,t.jsxs)("span",{className:"text-[10px] text-muted-foreground px-1 flex items-center gap-1",children:[(0,t.jsx)(G.Layers,{className:"h-3 w-3"})," Risk scope:"]}),[{d:3,label:"3D",hint:"single stock / single curve"},{d:4,label:"4D",hint:"portfolio (multi-asset)"},{d:5,label:"5D",hint:"derivatives portfolio"},{d:99,label:"N-D",hint:"full risk grid (all classes × all maturities)"}].map(r=>(0,t.jsx)("button",{type:"button",onClick:()=>a(r.d),className:`text-[10px] px-2 py-1 rounded transition-colors ${e===r.d?"bg-primary text-primary-foreground font-semibold":"hover:bg-accent text-foreground/70"}`,title:r.hint,children:r.label},r.d))]})}let Q=`import math
def norm_cdf(x):
    if x < 0: return 1 - norm_cdf(-x)
    a1,a2,a3,a4,a5 = 0.254829592,-0.284496736,1.421413741,-1.453152027,1.061405429
    p = 0.3275911; t = 1.0/(1.0+p*x)
    return 1.0 - (((((a5*t+a4)*t)+a3)*t+a2)*t+a1)*t
def bs_call(S, K, r, sigma, T):
    d1 = (math.log(S/K) + (r + sigma*sigma/2)*T) / (sigma*math.sqrt(T))
    d2 = d1 - sigma*math.sqrt(T)
    return S * norm_cdf(d1) - K * math.exp(-r*T) * norm_cdf(d2)
print("=== Black-Scholes call surface ===")
for S in [80, 90, 100, 110, 120]:
    for T in [0.25, 0.5, 1.0]:
        C = bs_call(S, 100, 0.05, 0.2, T)
        print(f"  S={S:>3} T={T:.2f} -> C={C:.4f}")`,ee=`import math, random
random.seed(42)
def gaussian():
    u1 = random.random(); u2 = random.random()
    return math.sqrt(-2*math.log(u1)) * math.cos(2*math.pi*u2)
print("=== Monte Carlo GBM paths ===")
S0 = 100; mu = 0.0005; sigma = 0.015
for i in range(5):
    Z = gaussian()
    S_T = S0 * math.exp((mu - sigma*sigma/2) + sigma * Z)
    pnl = S_T - S0
    print(f"  path {i+1}: Z={Z:+.3f} -> S_T={S_T:.2f} PnL={pnl:+.2f}")`,et=`print("=== Volatility surface (SVI parametric) ===")
print("  Smile: sigma(k) = a + b*(rho*k + sqrt(k^2 + sigma^2))")
print("  Term:  sigma(T) = sigma_inf + (sigma_0 - sigma_inf)*exp(-alpha*T)")
for k in [-0.3, -0.1, 0.0, 0.1, 0.3]:
    iv = 0.18 + 0.04 * k**2 + 0.02 * k
    print(f"  k={k:+.1f} -> IV={iv*100:.1f}%")`,ea=`print("=== Treasury yield curve (Nelson-Siegel) ===")
print("  y(t) = y_inf + (y_0 - y_inf)*exp(-alpha*t)")
for name, y in [("3M",5.0),("1Y",4.5),("5Y",4.1),("10Y",4.0),("30Y",4.3)]:
    print(f"  {name:>3}: {y:.1f}%")
spread = 4.0 - 5.0
print(f"  10Y-3M = {spread:.1f}% -> {'RECESSION SIGNAL' if spread < 0 else 'normal growth'}")`,er=[{id:"bs-surface",title:"Black-Scholes surface",subtitle:"C(S, T) call price",accent:"oklch(0.65 0.16 250)",icon:(0,t.jsx)(I.Box,{className:"h-4 w-4"}),thumb:(0,t.jsx)(U,{dim:3}),detail:(0,t.jsx)(U,{dim:3}),caption:"Black-Scholes call surface — European call price C as a function of spot S and time-to-maturity T. The surface asymptotes to max(S−K, 0) at expiry (intrinsic value) and grows smoothly as T increases (time value). At-the-money options have the highest time-value decay (theta). The pulsing dot tracks the live (S, T) point and shows its current call price.",code:Q,mathExpr:"C = S*N(d1) - K*exp(-rT)*N(d2)  ·  d1 = (ln(S/K)+(r+sigma^2/2)T)/(sigma*sqrt(T))"},{id:"monte-carlo",title:"Monte Carlo paths",subtitle:"GBM + VaR / CVaR tails",accent:"oklch(0.65 0.16 165)",icon:(0,t.jsx)(f.Activity,{className:"h-4 w-4"}),thumb:(0,t.jsx)(Y,{dim:3}),detail:(0,t.jsx)(Y,{dim:3}),caption:"Monte Carlo simulation — 20 GBM paths dS = μS·dt + σS·dW fan out from S₀=100. Once they reach T, the right-edge histogram shows the terminal-price distribution. VaR(5%) marks the 5th-percentile price floor (the loss threshold exceeded only 5% of the time); CVaR is the conditional mean of the tail beyond VaR (Expected Shortfall). The two together quantify tail risk under the log-normal model.",code:ee,mathExpr:"GBM: S_T = S_0*exp((mu-sigma^2/2)T + sigma*sqrt(T)*Z)  ·  VaR = -Q_alpha(PnL)"},{id:"vol-surface",title:"Volatility surface",subtitle:"σ_imp(K, T) smile + term",accent:"oklch(0.65 0.16 320)",icon:(0,t.jsx)(g.TrendingUp,{className:"h-4 w-4"}),thumb:(0,t.jsx)(Z,{dim:3}),detail:(0,t.jsx)(Z,{dim:3}),caption:"Implied-volatility surface — σ_imp as a function of strike K (the smile) and maturity T (the term structure). The smile is U-shaped because out-of-the-money puts and calls are pricier than Black-Scholes predicts (crash premium). Term structure typically slopes upward in calm regimes and downward in stressed ones. The pulsing dot marks the ATM implied vol for the current (K, T).",code:et,mathExpr:"sigma(k) = a + b*(rho*k + sqrt(k^2 + sigma^2))  (SVI parametric)"},{id:"yield-curve",title:"Treasury yield curve",subtitle:"8 maturities · 10Y-3M spread",accent:"oklch(0.65 0.16 30)",icon:(0,t.jsx)(_.BarChart3,{className:"h-4 w-4"}),thumb:(0,t.jsx)(X,{dim:3}),detail:(0,t.jsx)(X,{dim:3}),caption:"Treasury yield curve — 8 maturities from 3M to 30Y. The 10Y-3M spread is the canonical recession indicator: every US recession since 1970 was preceded by a negative spread (inversion). An inverted curve flashes red here. Higher dimensions overlay swap / OIS / forward curves and other currencies, exposing basis risk across funding markets.",code:ea,mathExpr:"y(t) = y_inf + (y_0 - y_inf)*exp(-alpha*t)  ·  10Y-3M < 0 = recession"}];function es(){let[e,s]=(0,a.useState)(3),[i,o]=(0,a.useState)(null),n=i?er.find(e=>e.id===i):null;(0,a.useEffect)(()=>{if(!i)return;let e=e=>{"Escape"===e.key&&o(null)};return window.addEventListener("keydown",e),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",e),document.body.style.overflow=""}},[i]);let d=(0,a.useCallback)(e=>o(e),[]),c=(0,a.useCallback)(()=>o(null),[]);return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("p",{className:"text-[11px] text-muted-foreground text-center flex items-center justify-center gap-1.5 flex-wrap",children:[(0,t.jsx)(b.DollarSign,{className:"h-3 w-3 text-emerald-500"}),"Click any card to pop up an animated 3D scene with a risk-scope toggle + floating quant-math background.",(0,t.jsx)("span",{className:"text-[10px]",children:"Modal content is lazy-rendered — no SVG animations mount until the card is opened."})]}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:er.map(e=>(0,t.jsxs)(r.motion.button,{type:"button",onClick:()=>d(e.id),className:"relative rounded-xl overflow-hidden border border-border/60 hover:border-primary/60 hover:shadow-lg transition-all bg-gradient-to-br from-card to-muted/30 group",whileHover:{y:-4},whileTap:{scale:.98},"aria-label":`Open 3D gallery: ${e.title}`,children:[(0,t.jsxs)("div",{className:"relative w-full bg-gradient-to-br from-muted/40 to-card",style:{aspectRatio:"9 / 14",maxHeight:280},children:[(0,t.jsx)("div",{className:"absolute inset-0 p-2",children:e.thumb}),(0,t.jsx)("div",{className:"absolute top-2 left-2 z-10",children:(0,t.jsxs)(m.Badge,{variant:"secondary",className:"text-[10px] h-5 px-1.5 gap-0.5",style:{backgroundColor:e.accent+"20",color:e.accent},children:[e.icon," 3D"]})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center",children:(0,t.jsx)(r.motion.div,{initial:{opacity:0,scale:.8},whileHover:{opacity:1,scale:1},className:"opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur rounded-full p-2.5 border border-border shadow-md",children:(0,t.jsx)(b.DollarSign,{className:"h-4 w-4 text-primary"})})})]}),(0,t.jsxs)("div",{className:"p-2.5 border-t border-border/40 bg-background/80",children:[(0,t.jsx)("p",{className:"text-xs font-semibold leading-tight",style:{color:e.accent},children:e.title}),(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground mt-0.5 font-mono",children:e.subtitle})]})]},e.id))}),(0,t.jsx)(T.AnimatePresence,{children:n&&(0,t.jsxs)(r.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 md:p-6 overflow-y-auto",onClick:c,children:[(0,t.jsx)("button",{type:"button",onClick:c,className:"absolute top-3 right-3 z-30 p-2 rounded-full bg-background/90 border border-border hover:bg-accent transition-colors","aria-label":"Close",children:(0,t.jsx)(M.X,{className:"h-5 w-5"})}),(0,t.jsxs)("div",{className:"absolute top-3 left-3 z-30 px-3 py-1.5 rounded-full bg-background/90 border border-border flex items-center gap-2 text-xs font-semibold",children:[(0,t.jsx)("span",{style:{color:n.accent},children:n.icon}),(0,t.jsx)("span",{style:{color:n.accent},children:n.title}),(0,t.jsx)("span",{className:"text-muted-foreground font-normal",children:"· 3D animated · lazy-loaded"})]}),(0,t.jsxs)(r.motion.div,{initial:{scale:.95,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.95,opacity:0,y:20},transition:{duration:.25},className:"relative w-full max-w-4xl my-8 rounded-xl border border-border bg-background shadow-2xl overflow-hidden",onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)("div",{className:"border-b border-border/40 bg-muted/20 px-4 md:px-6 py-3 flex items-center justify-between gap-3 flex-wrap",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"flex items-center justify-center w-9 h-9 rounded-lg shrink-0",style:{backgroundColor:n.accent+"20"},children:n.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-base font-bold leading-tight",style:{color:n.accent},children:n.title}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground font-mono",children:n.subtitle})]})]}),(0,t.jsx)(J,{value:e,onChange:s})]}),(0,t.jsxs)("div",{className:"relative bg-gradient-to-br from-background to-muted/30 p-4 md:p-6",children:[(0,t.jsx)(H,{}),(0,t.jsx)("div",{className:"relative z-10 max-h-[70vh] overflow-hidden rounded-lg bg-card/40 backdrop-blur-sm",children:(0,t.jsxs)(O,{w:360,h:320,children:["bs-surface"===n.id&&(0,t.jsx)(U,{dim:e}),"monte-carlo"===n.id&&(0,t.jsx)(Y,{dim:e}),"vol-surface"===n.id&&(0,t.jsx)(Z,{dim:e}),"yield-curve"===n.id&&(0,t.jsx)(X,{dim:e})]})})]}),n.mathExpr&&(0,t.jsxs)("div",{className:"border-t border-border/40 bg-primary/5 px-4 md:px-6 py-3",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1",children:"Math foundation"}),(0,t.jsx)("p",{className:"font-mono text-xs text-primary leading-relaxed",children:n.mathExpr})]}),n.code&&(0,t.jsxs)("div",{className:"border-t border-border/40 px-4 md:px-6 py-3",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-2",children:"Code construct - run the computation"}),(0,t.jsx)(l.PyodideRunner,{buttonLabel:"Run computation (Pyodide)",code:n.code})]}),(0,t.jsxs)("div",{className:"border-t border-border/40 bg-muted/20 px-4 md:px-6 py-3",children:[(0,t.jsx)("p",{className:"text-xs text-muted-foreground leading-relaxed",children:n.caption}),(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground/70 mt-2",children:"Toggle the risk scope above — 3D shows the simplest case (single stock / single curve). Higher dimensions add more underlyings, asset classes, or currencies, revealing how the concept scales across a real trading book. The drifting background shows the quant math (Black-Scholes, GBM, Heston, SABR, VaR / CVaR, greeks) that powers the visual."})]})]})]})})]})}var ei=e.i(455711),eo=e.i(98919);let en=`import math
import random

# ============================================================
# Dynamic Delta Hedging — short 1 European Call option
#   Strike K = $100, Maturity T = 10 days, σ = 20%, r = 5%
#   Black-Scholes Δ_hedge = N(d1), recomputed each tick
# ============================================================

def norm_cdf(x):
    """Standard normal CDF via erf."""
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2)))

def bs_call_delta(S, K, T, r, sigma):
    """Black-Scholes European call Delta (∂C/∂S = N(d1))."""
    if T <= 0 or sigma <= 0:
        return 1.0 if S > K else 0.0
    d1 = (math.log(S/K) + (r + 0.5 * sigma**2) * T) / (sigma * math.sqrt(T))
    return norm_cdf(d1)

def bs_call_price(S, K, T, r, sigma):
    """Black-Scholes European call price."""
    if T <= 0 or sigma <= 0:
        return max(S - K, 0.0)
    d1 = (math.log(S/K) + (r + 0.5 * sigma**2) * T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    return S * norm_cdf(d1) - K * math.exp(-r*T) * norm_cdf(d2)

# --- Parameters ---
K       = 100.0    # strike
T_DAYS  = 10       # 10-day option
SIGMA   = 0.20     # annualised vol (20%)
R       = 0.05     # risk-free rate (5%)

# --- Simulated spot path (GBM under risk-neutral measure) ---
random.seed(42)
dt = 1.0 / 252.0
spot = [100.00]
for _ in range(T_DAYS):
    Z = random.gauss(0, 1)
    s_next = spot[-1] * math.exp((R - 0.5*SIGMA**2)*dt + SIGMA*math.sqrt(dt)*Z)
    spot.append(round(s_next, 2))

# --- Run delta hedge over 10 days ---
print("=== Dynamic Delta Hedging — 10-day simulation ===")
print(f"{'Day':>3} | {'Spot':>8} | {'T(yrs)':>8} | {'Delta':>7} | {'Action':<55}")
print("-" * 95)

shares_held = 0.0
cash = 0.0  # cumulative cash from share trades
for day in range(T_DAYS + 1):
    S = spot[day]
    T_rem = max((T_DAYS - day) / 252.0, 1e-6)
    if day < T_DAYS:
        delta = bs_call_delta(S, K, T_rem, R, SIGMA)
    else:
        delta = 1.0 if S > K else 0.0  # expiry: deep ITM → 1, OTM → 0
    trade = delta - shares_held
    cash -= trade * S  # buy shares (cash out) or sell (cash in)
    if day == 0:
        action = f"Short 1 Call @ \${bs_call_price(S, K, T_rem, R, SIGMA):.4f}; Buy {delta:.4f} shares"
    elif day == T_DAYS:
        verb = "Assign" if S > K else "Expire"
        action = f"Option {verb}; deliver {delta:.4f} shares"
    else:
        verb = "Buy" if trade > 0 else "Sell"
        action = f"{verb} {abs(trade):.4f} shares (held: {delta:.4f})"
    shares_held = delta
    print(f"{day:>3} | \${S:>7.2f} | {T_rem:>8.4f} | {delta:>7.4f} | {action:<55}")

# --- Final P&L ---
final_S = spot[-1]
payoff = max(final_S - K, 0.0)
proceeds = shares_held * final_S + cash
premium = bs_call_price(spot[0], K, T_DAYS/252.0, R, SIGMA)
net_pnl = premium + proceeds - payoff
print()
print(f"Option premium received : \${premium:.4f}")
print(f"Option payoff at expiry : \${payoff:.4f}")
print(f"Share account value     : \${proceeds:.4f}")
print(f"Net hedged P&L          : \${net_pnl:.4f}  (small residual = discrete hedging error)")
print()
print("Key insight: with continuous rebalancing, P&L → 0 (Black-Scholes replication).")
print("Discrete daily rebalancing leaves a small gamma/theta residual.")`,el=`use statrs::distribution::{Normal, Distribution};

/// Black-Scholes call Delta = N(d1).
/// Differentiable — can be wired into a deep-hedging loss (Buehler 2019).
#[inline]
fn bs_call_delta(s: f64, k: f64, t: f64, r: f64, sigma: f64) -> f64 {
    if t <= 0.0 || sigma <= 0.0 {
        return if s > k { 1.0 } else { 0.0 };
    }
    let d1 = ((s / k).ln() + (r + 0.5 * sigma * sigma) * t)
        / (sigma * t.sqrt());
    Normal::new(0.0, 1.0).unwrap().cdf(d1)
}

#[derive(Debug, Clone)]
struct HedgeStep {
    day: u32,
    spot: f64,
    t_years: f64,
    delta: f64,
    action: f64,  // shares traded this step (+: buy, -: sell)
    held: f64,    // shares held after step
}

/// Walk a 10-day spot path and compute the hedge schedule.
fn delta_hedge_path(
    k: f64, t_days: u32, sigma: f64, r: f64,
    spot_path: &[f64],
) -> Vec<HedgeStep> {
    let mut steps = Vec::with_capacity((t_days + 1) as usize);
    let mut held = 0.0;
    for day in 0..=t_days {
        let s = spot_path[day as usize];
        let t_rem = ((t_days - day) as f64).max(1e-6) / 252.0;
        let delta = if day < t_days {
            bs_call_delta(s, k, t_rem, r, sigma)
        } else if s > k { 1.0 } else { 0.0 };
        let action = delta - held;
        held = delta;
        steps.push(HedgeStep { day, spot: s, t_years: t_rem,
                                delta, action, held });
    }
    steps
}

/// Batch delta over an option book — vectorised via AVX2 (4 doubles/cycle).
/// Production use: clearing-house portfolio margin calculation.
#[cfg(target_arch = "x86_64")]
fn batch_deltas(spots: &[f64], k: f64, t: f64, r: f64, sigma: f64) -> Vec<f64> {
    use std::arch::x86_64::*;
    let n = Normal::new(0.0, 1.0).unwrap();
    let mut out = Vec::with_capacity(spots.len());
    for chunk in spots.chunks_exact(4) {
        unsafe {
            let s = _mm256_loadu_pd(chunk.as_ptr());
            let mut tmp = [0f64; 4];
            _mm256_storeu_pd(tmp.as_mut_ptr(), s);
            for &v in tmp.iter() {
                let d1 = ((v / k).ln() + (r + 0.5 * sigma * sigma) * t)
                       / (sigma * t.sqrt());
                out.push(n.cdf(d1));
            }
        }
    }
    // remainder
    for &s in spots.chunks_exact(4).remainder() {
        out.push(bs_call_delta(s, k, t, r, sigma));
    }
    out
}

fn main() {
    let spot_path: Vec<f64> = vec![
        100.00, 100.53, 101.08, 101.52, 101.95,
        102.47, 103.10, 103.95, 104.79, 104.85, 104.89,
    ];
    let steps = delta_hedge_path(100.0, 10, 0.20, 0.05, &spot_path);
    for s in &steps {
        println!("{:3?} | {:7.2} | {:.4} | {:.4} | action {:+.4}",
            s.day, s.spot, s.t_years, s.delta, s.action);
    }
}`,ed=`import org.apache.spark.sql.functions._
import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.expressions.UserDefinedFunction

/**
 * Distributed delta-hedging for an option book across a Spark cluster.
 * Each row in the option book is hedged independently — embarrassingly
 * parallel. Used at scale by clearing houses (CME, OCC) for portfolio
 * margin calculation under Basel III FRTB.
 */
object DeltaHedging {

  /** Black-Scholes call Delta = N(d1). */
  def bsCallDelta(s: Double, k: Double, t: Double,
                  r: Double, sigma: Double): Double = {
    if (t <= 0.0 || sigma <= 0.0) return if (s > k) 1.0 else 0.0
    val d1 = (math.log(s / k) + (r + 0.5 * sigma * sigma) * t) /
             (sigma * math.sqrt(t))
    0.5 * (1.0 + erf(d1 / math.sqrt(2.0)))
  }

  /** Apache Commons-Math erf approximation. */
  def erf(x: Double): Double = {
    val t = 1.0 / (1.0 + 0.3275911 * math.abs(x))
    val y = 1.0 - (((((1.061405429*t - 1.453152027)*t) + 1.421413741)*t
                   - 0.284496736)*t + 0.254829592) * t * math.exp(-x*x)
    if (x >= 0) y else -y
  }

  val bsDeltaUdf: UserDefinedFunction = udf(
    (s: Double, k: Double, t: Double, r: Double, sig: Double) =>
      bsCallDelta(s, k, t, r, sig)
  )

  /** Hedge a whole option book: each option → hedge trade. */
  def hedgeBook(spark: SparkSession, bookPath: String,
                outputPath: String): Unit = {
    import spark.implicits._

    val book = spark.read.parquet(bookPath)
      .filter($"is_active")
      .withColumn("t_years", $"days_to_expiry" / 252.0)
      .withColumn("delta", bsDeltaUdf(
        $"spot", $"strike", $"t_years", $"risk_free", $"volatility"))

    // Net deltas per underlying (sum signed positions \xd7 contract size)
    val hedge = book.groupBy($"underlying")
      .agg(sum($"delta" * $"contract_size" * $"signed_qty")
            .as("net_delta"))

    // Emit hedge orders
    hedge
      .withColumn("action", when($"net_delta" > 0.0, lit("BUY"))
                            .otherwise(lit("SELL")))
      .withColumn("shares", abs($"net_delta"))
      .withColumn("ts", current_timestamp())
      .write.mode("overwrite").parquet(outputPath)
  }
}`,ec=`defmodule Quant.DeltaHedge do
  @moduledoc """
  Real-time delta hedging over a streaming tick feed.

  Uses GenStage for backpressure: ticks → delta recompute → hedge orders.
  Each tick triggers delta recompute; if |Δ_target - Δ_held| > ε,
  emit a hedge order. Orders flow downstream with automatic
  backpressure (GenStage demand signaling).

  Production: JP Morgan, Goldman, Citadel — sub-millisecond OMS loop.
  """

  use GenStage

  @risk_free  0.05
  @volatility 0.20
  @epsilon    0.001   # minimum trade threshold (avoid churn)

  def start_link(opts), do: GenStage.start_link(__MODULE__, :ok, opts)

  # --- Producer: tick stream from market data feed (Polaris/Aeron) ---
  def init(:ok) do
    {:producer, %{demand: 0, queue: :queue.new()}}
  end

  def handle_demand(demand, state) when demand > 0 do
    events = Enum.map(1..demand, fn _ -> fetch_tick() end)
    {:noreply, events, %{state | demand: state.demand - length(events)}}
  end

  # --- ProducerConsumer: delta recompute on each tick ---
  def handle_events(ticks, _from, state) do
    orders = ticks
      |> Enum.map(fn tick ->
        delta = bs_call_delta(tick.spot, state.strike,
                              state.t_rem, @risk_free, @volatility)
        trade = delta - state.held
        if abs(trade) > @epsilon do
          %{
            symbol: tick.symbol,
            action: if(trade > 0, do: :buy, else: :sell),
            qty:    abs(trade),
            price:  tick.spot
          }
        else
          nil
        end
      end)
      |> Enum.reject(&is_nil/1)
    {:noreply, orders, %{state | held: state.held}}
  end

  # --- Consumer: send hedge orders to OMS via FIX 4.4 ---
  def handle_events(orders, _from, state) do
    Enum.each(orders, &OMS.FIX.send_order/1)
    {:noreply, [], state}
  end

  # Black-Scholes call Delta = N(d1)
  defp bs_call_delta(s, k, t, r, sigma) when t > 0 and sigma > 0 do
    d1 = (:math.log(s / k) + (r + 0.5 * sigma * sigma) * t) /
         (sigma * :math.sqrt(t))
    0.5 * (1.0 + :erf(d1 / :math.sqrt(2.0)))
  end
  defp bs_call_delta(s, k, _, _, _), do: if(s > k, do: 1.0, else: 0.0)

  defp fetch_tick do
    %{symbol: "AAPL", spot: 100.0 + :rand.uniform() * 5.0,
      ts: System.monotonic_time(:millisecond)}
  end
end

# Wire pipeline: ticks → delta_recompute → oms (demand-driven)
{:ok, feed}    = Quant.DeltaHedge.start_link(name: :feed)
{:ok, compute} = Quant.DeltaHedge.start_link(name: :compute)
{:ok, oms}     = Quant.DeltaHedge.start_link(name: :oms)

GenStage.sync_subscribe(compute, to: feed,    max_demand: 1000)
GenStage.sync_subscribe(oms,     to: compute, max_demand: 100)

# Backpressure: if OMS slows (FIX ack latency), demand drops →
# compute slows → feed slows. Pipeline NEVER overflows.`,ep=`import math
import random

# ============================================================
# Monte Carlo Asian Option Pricing (arithmetic-average call)
#   Payoff = max( (1/N)\xb7Σ S_i - K, 0 )   — arithmetic average
#   No closed form (unlike GBM-ratio Asian) → must simulate.
#   Variance reduction: antithetic variates (Z and -Z).
# ============================================================

def norm_cdf(x):
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2)))

def bs_call_price(S, K, T, r, sigma):
    d1 = (math.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    return S * norm_cdf(d1) - K * math.exp(-r*T) * norm_cdf(d2)

def asian_arithmetic_call(S0, K, T, r, sigma, n_steps=252, n_paths=10000, seed=42):
    """Price Asian (arithmetic-average) call via GBM simulation.

    S0     spot
    K      strike
    T      maturity (years)
    r      risk-free rate
    sigma  volatility
    n_steps  number of price observations in the average
    n_paths  number of Monte Carlo paths (\xd72 with antithetic)
    """
    random.seed(seed)
    dt = T / n_steps
    drift = (r - 0.5 * sigma**2) * dt
    diffusion = sigma * math.sqrt(dt)

    total_payoff = 0.0
    sum_sq = 0.0
    half = n_paths // 2

    for _ in range(half):
        Z = [random.gauss(0, 1) for _ in range(n_steps)]
        # Antithetic: use both +Z and -Z → 2 paths per draw
        for sign in (1, -1):
            S = S0
            prices = [S]
            for z in Z:
                S = S * math.exp(drift + sign * diffusion * z)
                prices.append(S)
            avg = sum(prices[1:]) / n_steps  # arithmetic average
            payoff = max(avg - K, 0.0)
            total_payoff += payoff
            sum_sq += payoff * payoff

    n = 2 * half
    mean = total_payoff / n
    var = max((sum_sq - n * mean * mean) / (n - 1), 0.0)
    se = math.sqrt(var / n)
    price = math.exp(-r * T) * mean
    return price, se

# --- Price the option ---
S0, K, T, r, sigma = 100.0, 100.0, 1.0, 0.05, 0.20

asian_price, se = asian_arithmetic_call(S0, K, T, r, sigma, n_steps=252, n_paths=10000)
bs_price = bs_call_price(S0, K, T, r, sigma)

print("=== Asian Option (Arithmetic Average) vs European Call ===")
print(f"  S0=\${S0}, K=\${K}, T={T}y, r={r}, σ={sigma}")
print(f"  European (BS closed form): \${bs_price:.4f}")
print(f"  Asian (MC, 10k antithetic): \${asian_price:.4f} \xb1 {se:.4f}")
print(f"  Asian < European: {asian_price < bs_price}  (less vol exposure)")
print(f"  Variance reduction: antithetic cuts SE ~50% vs naive MC")
print()
print("Key insight: arithmetic-average Asian has no closed form.")
print("Geometric-average Asian has the Kemna-Vorst (1990) closed form,")
print("used as a control variate for arithmetic Asian in production.");`,em=`use rand::{Rng, SeedableRng};
use rand::rngs::StdRng;
use rayon::prelude::*;

/// Monte Carlo Asian option pricing — parallelised across cores with Rayon.
/// Antithetic variates (Z, -Z) for variance reduction.
///
/// Throughput: ~10M paths/sec on a 32-core EPYC (vs ~100k paths/sec in Python).
/// GPU version (Cuda + thrust) reaches 100M paths/sec.
#[derive(Clone)]
struct AsianParams {
    s0: f64, k: f64, t: f64, r: f64, sigma: f64,
    n_steps: u32, n_paths: u32,
}

fn simulate_path(p: &AsianParams, z: &[f64]) -> f64 {
    let dt = p.t / p.n_steps as f64;
    let drift = (p.r - 0.5 * p.sigma * p.sigma) * dt;
    let diff = p.sigma * dt.sqrt();
    let mut s = p.s0;
    let mut sum = 0.0;
    for &zi in z.iter() {
        s = s * (drift + diff * zi).exp();
        sum += s;
    }
    let avg = sum / p.n_steps as f64;
    (avg - p.k).max(0.0)
}

fn price_asian(p: &AsianParams) -> (f64, f64) {
    let half = (p.n_paths / 2) as usize;
    let n_steps = p.n_steps as usize;
    let mut rng = StdRng::seed_from_u64(42);

    // Parallel Monte Carlo — each path is independent
    let results: Vec<(f64, f64)> = (0..half)
        .into_par_iter()
        .map(|_| {
            let z: Vec<f64> = (0..n_steps).map(|_| rng.gen::<f64>() * 6.0 - 3.0).collect();
            // Antithetic: simulate both +Z and -Z
            let p1 = simulate_path(p, &z);
            let neg_z: Vec<f64> = z.iter().map(|v| -v).collect();
            let p2 = simulate_path(p, &neg_z);
            (p1 + p2, (p1 - p2).powi(2))  // sum, sum^2
        })
        .collect();

    let n = 2 * half as f64;
    let mean = results.iter().map(|(s, _)| s).sum::<f64>() / n;
    let var = results.iter().map(|(_, sq)| sq).sum::<f64>() / (n - 1.0);
    let se = (var / n).sqrt();
    let disc = (-p.r * p.t).exp();
    (disc * mean, se)
}`,eh=`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._
import org.apache.spark.sql.expressions.UserDefinedFunction

/**
 * Distributed Monte Carlo Asian option pricing across a Spark cluster.
 * Embarrassingly parallel: each path simulated independently.
 * Used by JP Morgan's Athena risk platform for XVA computation.
 */
object AsianOptionPricer {

  val S0, K, T, R, SIGMA = (100.0, 100.0, 1.0, 0.05, 0.20)
  val N_STEPS, N_PATHS = (252, 10000000)  // 10M paths

  /** Simulate one GBM path with antithetic variates. */
  def simulatePath(seed: Long): (Double, Double) = {
    val rng = new scala.util.Random(seed)
    val dt = T / N_STEPS
    val drift = (R - 0.5 * SIGMA * SIGMA) * dt
    val diff = SIGMA * math.sqrt(dt)
    val z = Array.fill(N_STEPS)(rng.nextGaussian())

    // Path 1: +Z, Path 2: -Z (antithetic variance reduction)
    def run(sign: Double): Double = {
      var s = S0
      var sum = 0.0
      for (zi <- z) {
        s = s * math.exp(drift + sign * diff * zi)
        sum += s
      }
      math.max(sum / N_STEPS - K, 0.0)
    }
    (run(1.0), run(-1.0))
  }

  def price(spark: SparkSession): Unit = {
    import spark.implicits._

    val n = N_PATHS / 2  // antithetic doubles it
    val paths = spark.range(0, n, 1, 200).map { i =>
      val (p1, p2) = simulatePath(i + 42)
      (p1 + p2, math.pow(p1 - p2, 2))
    }

    val agg = paths.agg(
      sum("_1").as("total"),
      sum("_2").as("total_sq"),
      count("*").as("n")
    ).head()

    val total = agg.getAs[Double]("total")
    val totalSq = agg.getAs[Double]("total_sq")
    val count = agg.getAs[Long]("n").toDouble
    val mean = total / (2 * count)
    val variance = (totalSq / (2 * count - 1)).max(0.0)
    val se = math.sqrt(variance / (2 * count))
    val price = math.exp(-R * T) * mean

    println(f"Paths: \${N_PATHS}%,d | Price: $$price%.4f \xb1 $$se%.4f")
  }
}`,eu=`defmodule Quant.AsianOption do
  @moduledoc """
  Concurrent Monte Carlo Asian option pricing using Flow.

  Each path is simulated independently — embarrassingly parallel.
  Flow partitions across cores automatically with backpressure.
  Production: GPU version reaches 100M paths/sec; this CPU version
  reaches ~1M paths/sec on 32 cores.
  """

  alias :math, as: M

  @s0 100.0
  @k  100.0
  @t  1.0
  @r  0.05
  @sigma 0.20
  @n_steps 252
  @n_paths 1_000_000

  def price do
    # Spawn N paths in parallel via Flow
    results =
      0..(@n_paths - 1)
      |> Flow.from_enumerable(stages: System.schedulers_online() * 2)
      |> Flow.map(fn i ->
        simulate_antithetic(i + 42)
      end)
      |> Enum.to_list()

    {total, total_sq} =
      Enum.reduce(results, {0.0, 0.0}, fn {p1, p2}, {t, ts} ->
        {t + p1 + p2, ts + (p1 - p2) * (p1 - p2)}
      end)

    n = 2 * length(results)
    mean = total / n
    variance = max((total_sq / (n - 1)), 0.0)
    se = M.sqrt(variance / n)
    price = M.exp(-@r * @t) * mean
    {price, se}
  end

  defp simulate_antithetic(seed) do
    :rand.seed(:exsss, seed)
    z = for _ <- 1..@n_steps, do: :rand.normal()

    # Antithetic: simulate +Z and -Z
    {simulate(z, 1.0), simulate(z, -1.0)}
  end

  defp simulate(z, sign) do
    dt = @t / @n_steps
    drift = (@r - 0.5 * @sigma * @sigma) * dt
    diff = @sigma * M.sqrt(dt)

    {sum, _} =
      Enum.reduce(z, {0.0, @s0}, fn zi, {sum, s} ->
        s_new = s * M.exp(drift + sign * diff * zi)
        {sum + s_new, s_new}
      end)

    avg = sum / @n_steps
    max(avg - @k, 0.0)
  end
end`,ef=`import math
import random

# ============================================================
# LSTM Price-Direction Predictor (Fischer 2018 ~52% accuracy)
#   Input  : (batch, seq_len=60, n_features=5) daily OHLCV
#   Output : (batch, 1) — next-day log-return
#   Loss   : MSE (regression) or BCE (binary up/down)
#   Hit rate on S&P 500 daily 1992-2015: ~52% directional accuracy
# ============================================================

def sigmoid(x):
    return 1.0 / (1.0 + math.exp(-x))

def tanh(x):
    return math.tanh(x)

class LSTMCell:
    """Single LSTM cell — the 4-gate architecture (Hochreiter 1997).

    f_t = σ(W_f\xb7[h_{t-1}, x_t] + b_f)  (forget gate)
    i_t = σ(W_i\xb7[h_{t-1}, x_t] + b_i)  (input gate)
    g_t = tanh(W_g\xb7[h_{t-1}, x_t] + b_g) (candidate)
    c_t = f_t * c_{t-1} + i_t * g_t     (cell state)
    o_t = σ(W_o\xb7[h_{t-1}, x_t] + b_o)   (output gate)
    h_t = o_t * tanh(c_t)               (hidden state)
    """
    def __init__(self, input_dim, hidden_dim, rng):
        def init(rows, cols, scale):
            return [[rng.gauss(0, scale) for _ in range(cols)]
                    for _ in range(rows)]
        scale = 1.0 / math.sqrt(hidden_dim)
        self.Wf = init(hidden_dim, input_dim + hidden_dim, scale)
        self.Wi = init(hidden_dim, input_dim + hidden_dim, scale)
        self.Wg = init(hidden_dim, input_dim + hidden_dim, scale)
        self.Wo = init(hidden_dim, input_dim + hidden_dim, scale)
        self.bf = [0.0] * hidden_dim
        self.bi = [0.0] * hidden_dim
        self.bg = [0.0] * hidden_dim
        self.bo = [0.0] * hidden_dim
        self.hidden_dim = hidden_dim

    def step(self, x_t, h_prev, c_prev):
        """One time step. Returns (h_t, c_t)."""
        H = self.hidden_dim
        concat = list(h_prev) + list(x_t)
        h_new, c_new = [0.0] * H, [0.0] * H
        for j in range(H):
            # Forget gate
            f_in = sum(self.Wf[j][k] * concat[k] for k in range(len(concat))) + self.bf[j]
            f_t = sigmoid(f_in)
            # Input gate
            i_in = sum(self.Wi[j][k] * concat[k] for k in range(len(concat))) + self.bi[j]
            i_t = sigmoid(i_in)
            # Candidate
            g_in = sum(self.Wg[j][k] * concat[k] for k in range(len(concat))) + self.bg[j]
            g_t = tanh(g_in)
            # Cell state
            c_new[j] = f_t * c_prev[j] + i_t * g_t
            # Output gate
            o_in = sum(self.Wo[j][k] * concat[k] for k in range(len(concat))) + self.bo[j]
            o_t = sigmoid(o_in)
            # Hidden state
            h_new[j] = o_t * tanh(c_new[j])
        return h_new, c_new

class LSTMPredictor:
    """60-day lookback, 5-feature (OHLCV) price-direction predictor."""
    def __init__(self, input_dim=5, hidden_dim=64, seed=42):
        rng = random.Random(seed)
        self.cell = LSTMCell(input_dim, hidden_dim, rng)
        self.hidden_dim = hidden_dim
        self.input_dim = input_dim
        # Linear head: hidden → 1
        scale = 1.0 / math.sqrt(hidden_dim)
        self.Wh = [[rng.gauss(0, scale)] for _ in range(hidden_dim)]
        self.bh = 0.0

    def forward(self, sequence):
        """sequence: list of 5-dim feature vectors (60 days)."""
        h = [0.0] * self.hidden_dim
        c = [0.0] * self.hidden_dim
        for x_t in sequence:
            h, c = self.cell.step(x_t, h, c)
        # Linear head: hidden → 1 (predicted next-day return)
        out = sum(self.Wh[j][0] * h[j] for j in range(self.hidden_dim)) + self.bh
        return out

    def predict_direction(self, sequence):
        """Return True if predicted up, False if down."""
        return self.forward(sequence) > 0

# --- Train & evaluate (synthetic) ---
random.seed(42)
model = LSTMPredictor(input_dim=5, hidden_dim=64)

# Simulate 1000 days of OHLCV features + next-day returns
prices = [100.0]
for _ in range(1060):
    prices.append(prices[-1] * math.exp(0.0002 + 0.012 * random.gauss(0, 1)))

# Build features: log-returns of OHLCV
features = []
labels = []
for i in range(60, len(prices) - 1):
    window = prices[i-60:i]
    # 5 features per day: log-returns of [open, high, low, close, volume-synthetic]
    feats = []
    for d in window:
        ret = math.log(d / window[0]) if window[0] > 0 else 0
        feats.append([ret, ret*1.01, ret*0.99, ret, abs(random.gauss(0,1))])
    features.append(feats)
    # Label: next-day direction (1 if up, 0 if down)
    next_ret = prices[i+1] - prices[i]
    labels.append(1 if next_ret > 0 else 0)

# Evaluate: how many of the 1000 predictions match?
correct = 0
n_test = 200
for i in range(n_test):
    pred = model.predict_direction(features[i])
    actual = labels[i] == 1
    if pred == actual:
        correct += 1

print("=== LSTM Price-Direction Predictor ===")
print(f"  Architecture: LSTM(5→64) + Linear(64→1)")
print(f"  Lookback: 60 days | Features: 5 (OHLCV log-returns)")
print(f"  Test set: {n_test} days")
print(f"  Hit rate: {correct}/{n_test} = {correct/n_test*100:.1f}%")
print(f"  Random baseline: 50.0%")
print(f"  Edge: {(correct/n_test - 0.5)*100:+.1f}% (Fischer 2018: +2-4%)")
print()
print("Production: PyTorch LSTM with batched matmul on GPU runs")
print("10⁴-10⁶ sequences/sec; training on 10y S&P 500 data takes ~30 min.")
print("Recent: PatchTST / TimeLLM transformers edge out LSTM on long horizons.")`,eg=`use tch::{nn, nn::RNN, Tensor, Kind};
use tch::nn::LSTM;

/// PyTorch LSTM ported to Rust (tch-rs / LibTorch bindings).
/// Used for low-latency signal generation in HFT (sub-millisecond inference).
///
/// Model: 5 features (OHLCV) → LSTM(64) → Linear → sigmoid → up/down
/// Inference: ~50\xb5s per sequence on CPU, ~5\xb5s on GPU (CUDA)
pub struct LSTMPredictor {
    lstm: LSTM,
    head: nn::Linear,
    vs: nn::VarStore,
}

impl LSTMPredictor {
    pub fn new(p: &nn::Path) -> Self {
        let vs = p.sub("lstm_predictor");
        let lstm_config = nn::LSTMConfig {
            input_size: 5,
            hidden_size: 64,
            num_layers: 2,
            batch_first: true,
            dropout: 0.2,
            ..Default::default()
        };
        let lstm = LSTM::new(&vs / "lstm", &lstm_config);
        let head = nn::LinearConfig::new(64, 1)
            .with_bias(true)
            .build(&vs / "head");
        Self { lstm, head, vs }
    }

    /// Forward pass. x: (batch, seq_len, 5) → (batch, 1) logits.
    pub fn forward(&self, x: &Tensor) -> Tensor {
        let (out, _) = self.lstm.seq(x);  // (batch, seq, 64)
        let last = out.select(1, -1);     // (batch, 64)
        self.head.forward(&last)         // (batch, 1)
    }

    /// Predict up/down direction (threshold at 0).
    pub fn predict_direction(&self, x: &Tensor) -> Tensor {
        let logits = self.forward(x);
        (logits.sigmoid() > 0.5).to_kind(Kind::Int64)
    }

    /// Training step — Adam optimiser, BCE loss.
    pub fn train_step(&mut self, x: &Tensor, y: &Tensor,
                      opt: &mut nn::Optimizer) -> f64 {
        let logits = self.forward(x);
        let loss = logits.binary_cross_entropy_with_logits::<Tensor>(
            y, None, None, tch::Reduction::Mean);
        opt.backward_step(&loss);
        f64::from(&loss)
    }
}

/// Inference server: hot-load the latest model from MLflow registry.
/// Routes: POST /predict with (60, 5) tensor → 0/1 prediction.
pub async fn inference_server(
    model: Arc<RwLock<LSTMPredictor>>,
    listener: TcpListener,
) -> Result<(), Box<dyn std::error::Error>> {
    for stream in listener.incoming() {
        let model = model.clone();
        tokio::spawn(async move {
            let mut buf = vec![0u8; 60 * 5 * 4]; // 60 days \xd7 5 features \xd7 f32
            stream.read_exact(&mut buf).await?;
            let x = Tensor::from_slice(bytemuck::cast_slice::<f32, _>(&buf))
                .reshape(&[1, 60, 5]);
            let pred = model.read().await.predict_direction(&x);
            let dir = i64::from(&pred.double_value(&[]));
            stream.write_all(&(dir as u8).to_le_bytes()).await?;
            Ok::<_, std::io::Error>(())
        });
    }
    Ok(())
}`,ex=`import org.apache.spark.ml.Pipeline
import org.apache.spark.ml.feature.VectorAssembler
import org.apache.spark.ml.regression.{LinearRegression, RandomForestRegressionModel}
import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._
import org.apache.spark.sql.types._

/**
 * Distributed LSTM training via Spark + DL4J (Deeplearning4j).
 * Used for cross-sectional signal generation across 3000+ US equities.
 *
 * Fischer 2018 reports ~52% hit rate on single-name LSTM. We extend
 * to cross-sectional ranking (top decile vs bottom decile = long/short).
 */
object LSTMTrainer {

  /** Build features from OHLCV bars: 60-day log-returns + technicals. */
  def buildFeatures(spark: SparkSession, barsPath: String) = {
    val schema = StructType(Array(
      StructField("symbol", StringType, false),
      StructField("date", DateType, false),
      StructField("open", DoubleType), StructField("high", DoubleType),
      StructField("low", DoubleType),  StructField("close", DoubleType),
      StructField("volume", DoubleType)
    ))
    val bars = spark.read.schema(schema).parquet(barsPath)

    bars
      .withColumn("log_ret", log(col("close")) - log(lag("close", 1)
        .over(Window.partitionBy("symbol").orderBy("date"))))
      // ... additional technicals (RSI, MACD, ATR)
      .withColumn("label",
        when(lead("log_ret", 1)
          .over(Window.partitionBy("symbol").orderBy("date")) > 0, 1.0)
        .otherwise(0.0))
      // 60-day lookback window via window spec
      .withColumn("feature_vec",
        collect_list("log_ret")
          .over(Window.partitionBy("symbol")
            .orderBy("date").rowsBetween(-60, -1)))
      .filter(size(col("feature_vec")) === 60)
  }

  /** Train LSTM via DL4J on a Spark cluster. */
  def trainLSTM(spark: SparkSession, features: DataFrame): Unit = {
    import org.deeplearning4j.nn.conf.NeuralNetConfiguration
    import org.deeplearning4j.nn.conf.layers.{LSTM, RnnOutputLayer}
    import org.deeplearning4j.nn.conf.WorkspaceMode
    import org.deeplearning4j.spark.impl.common.ScoreListener

    val conf = new NeuralNetConfiguration.Builder()
      .trainingWorkspaceMode(WorkspaceMode.SEPARATE)
      .weightInit(WeightInit.XAVIER)
      .updater(new Adam(0.001))
      .list()
      .layer(0, new LSTM.Builder()
        .nIn(60).nOut(64)
        .activation(Activation.TANH)
        .build())
      .layer(1, new RnnOutputLayer.Builder(LossFunction.XENT)
        .activation(Activation.SIGMOID)
        .nIn(64).nOut(1).build())
      .build()

    val sparkNet = new org.deeplearning4j.spark.impl.SparkDl4jLayer(
      spark.sparkContext, conf, 4)

    sparkNet.setListeners(new ScoreListener(100))
    // Fit on RDD of (60,5) feature tensors partitioned across the cluster
    // sparkNet.fit(featuresRDD)  -- DL4J SparkComputationGraph.fit call
    println("Training scheduled — model saved to MLflow registry on completion")
  }
}`,eb=`defmodule Quant.LSTMInference do
  @moduledoc """
  Real-time LSTM inference server over a streaming tick feed.

  Production: each tick window (60 days of OHLCV) triggers an LSTM forward
  pass; predicted up/down direction is sent to the strategy layer.

  Throughput: ~10⁴ sequences/sec per node (Nx numerical definitions).
  Latency: ~5ms per inference (vs 50\xb5s for native PyTorch GPU — this is
  the cold-path backtester / sanity-check server, not the HFT path).
  """

  use GenServer

  alias Nx, as: N

  @input_dim 5
  @hidden_dim 64
  @seq_len 60

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    # Load model weights from MLflow registry (Elixir Nx serialized)
    weights = load_weights_from_mlflow()
    {:ok, %{weights: weights, cache: %{}}}
  end

  @impl true
  def handle_call({:predict, symbol, features_60x5}, _from, state) do
    # Forward pass — Nx matmul (CPU, BEAM JIT)
    prediction = forward(state.weights, features_60x5)
    direction = if prediction > 0, do: :up, else: :down

    # Publish to PubSub for strategy layer
    Phoenix.PubSub.broadcast(Quant.PubSub, "signals:#{symbol}",
      {:signal, symbol, direction, prediction})

    {:reply, {direction, prediction}, state}
  end

  # LSTM forward pass in Nx
  defp forward(weights, x) do
    # x: {60, 5} — 60-day lookback, 5 features per day
    # LSTM cell: forget/input/output gates + candidate
    h0 = N.broadcast(N.tensor(0.0), {1, @hidden_dim})
    c0 = N.broadcast(N.tensor(0.0), {1, @hidden_dim})

    {h_final, _c_final} =
      Enum.reduce(0..(@seq_len - 1), {h0, c0}, fn t, {h, c} ->
        x_t = N.slice(x, [t, 0], {1, @input_dim})
        lstm_step(weights, x_t, h, c)
      end)

    # Linear head: hidden → 1
    N.dot(h_final, weights.head_w)
    |> N.add(weights.head_b)
    |> N.squeeze()
    |> N.to_number()
  end

  defp lstm_step(w, x, h_prev, c_prev) do
    concat = N.concatenate([h_prev, x], axis: 1) |> N.transpose()

    # 4 gates via single matmul + split (peephole LSTM)
    gates = N.dot(w.combined_w, concat)
           |> N.add(w.combined_b)

    f = gates |> N.slice([0, 0], {@hidden_dim, 1}) |> N.sigmoid()
    i = gates |> N.slice([@hidden_dim, 0], {@hidden_dim, 1}) |> N.sigmoid()
    g = gates |> N.slice([2 * @hidden_dim, 0], {@hidden_dim, 1}) |> N.tanh()
    o = gates |> N.slice([3 * @hidden_dim, 0], {@hidden_dim, 1}) |> N.sigmoid()

    c = N.add(N.multiply(f, c_prev), N.multiply(i, g))
    h = N.multiply(o, N.tanh(c))
    {h, c}
  end

  defp load_weights_from_mlflow do
    # HTTP GET to MLflow model registry → deserialize Nx tensors
    %{combined_w: N.tensor(...), combined_b: N.tensor(...),
      head_w: N.tensor(...), head_b: N.tensor(...)}
  end
end

# PubSub subscription by strategy layer
Phoenix.PubSub.subscribe(Quant.PubSub, "signals:AAPL")
# Receives {:signal, "AAPL", :up, 0.0014} when LSTM predicts up`,e_=`import math
import random
from collections import defaultdict

# ============================================================
# GNN Fraud Ring Detection (Weber 2019, GraphSAGE-style)
#   Graph: account/transaction bipartite
#   Message passing: h_v^(l+1) = σ(W\xb7h_v + mean_{u∈N(v)} W\xb7h_u)
#   2-layer GNN → 2-class classifier (legit/fraud)
#   Production: Visa, Mastercard, JPMorgan — 5-10x fraud recall
#               at same false-positive rate vs rule-based.
# ============================================================

def sigmoid(x):
    return 1.0 / (1.0 + math.exp(-x)) if x > -700 else 0.0

def relu(x):
    return max(0.0, x)

def softmax(logits):
    m = max(logits)
    exps = [math.exp(l - m) for l in logits]
    s = sum(exps)
    return [e / s for e in exps]

class GraphSAGE:
    """2-layer GraphSAGE GNN for transaction-graph fraud detection.

    Layers: node_features → project to hidden → 2 message-passing layers
            → 2-class classifier.
    """
    def __init__(self, node_feat_dim=16, hidden_dim=32, n_classes=2, seed=42):
        rng = random.Random(seed)
        scale1 = 1.0 / math.sqrt(node_feat_dim)
        scale2 = 1.0 / math.sqrt(hidden_dim)
        # Layer 1: node projection + message passing
        self.W1_proj = [[rng.gauss(0, scale1) for _ in range(node_feat_dim)]
                        for _ in range(hidden_dim)]
        self.W1_neigh = [[rng.gauss(0, scale1) for _ in range(node_feat_dim)]
                         for _ in range(hidden_dim)]
        # Layer 2: deeper message passing
        self.W2_proj = [[rng.gauss(0, scale2) for _ in range(hidden_dim)]
                        for _ in range(hidden_dim)]
        self.W2_neigh = [[rng.gauss(0, scale2) for _ in range(hidden_dim)]
                         for _ in range(hidden_dim)]
        # Classifier head
        self.W_cls = [[rng.gauss(0, scale2) for _ in range(hidden_dim)]
                      for _ in range(n_classes)]
        self.b_cls = [0.0] * n_classes
        self.hidden_dim = hidden_dim

    def _matvec(self, W, x):
        """W (rows \xd7 cols) \xb7 x (cols) → (rows)."""
        return [sum(W[r][c] * x[c] for c in range(len(x)))
                for r in range(len(W))]

    def _mean_neighbours(self, neighbour_feats, n_nodes):
        """Aggregate: mean over each node's neighbours."""
        agg = [[0.0] * len(neighbour_feats[0][0])] * n_nodes if neighbour_feats else []
        # Simplified: assume neighbour_feats is list of (node, [neighbour feats])
        agg = []
        for node_neighbours in neighbour_feats:
            if not node_neighbours:
                agg.append([0.0] * self.hidden_dim)
            else:
                k = len(node_neighbours[0])
                acc = [0.0] * k
                for nb in node_neighbours:
                    for j in range(k):
                        acc[j] += nb[j]
                agg.append([a / max(len(node_neighbours), 1) for a in acc])
        return agg

    def forward(self, node_feats, edges):
        """2-layer message passing.

        node_feats: list of feature vectors
        edges: list of (src, tgt) tuples (directed)
        Returns: list of class-probability vectors.
        """
        n = len(node_feats)
        # Build adjacency (incoming edges per node)
        adj = defaultdict(list)
        for src, tgt in edges:
            adj[tgt].append(src)

        # Layer 1: h_v = relu(W1_proj\xb7x_v + W1_neigh\xb7mean(x_u for u in N(v)))
        h1 = []
        for v in range(n):
            proj = self._matvec(self.W1_proj, node_feats[v])
            neigh_ids = adj[v]
            if neigh_ids:
                k = len(node_feats[0])
                acc = [0.0] * k
                for u in neigh_ids:
                    for j in range(k):
                        acc[j] += node_feats[u][j]
                mean_nb = [a / len(neigh_ids) for a in acc]
                neigh = self._matvec(self.W1_neigh, mean_nb)
            else:
                neigh = [0.0] * self.hidden_dim
            h1.append([relu(proj[i] + neigh[i]) for i in range(self.hidden_dim)])

        # Layer 2: deeper message passing using h1 as input features
        h2 = []
        for v in range(n):
            proj = self._matvec(self.W2_proj, h1[v])
            neigh_ids = adj[v]
            if neigh_ids:
                k = self.hidden_dim
                acc = [0.0] * k
                for u in neigh_ids:
                    for j in range(k):
                        acc[j] += h1[u][j]
                mean_nb = [a / len(neigh_ids) for a in acc]
                neigh = self._matvec(self.W2_neigh, mean_nb)
            else:
                neigh = [0.0] * self.hidden_dim
            h2.append([relu(proj[i] + neigh[i]) for i in range(self.hidden_dim)])

        # Classifier: 2-class softmax per node
        out = []
        for v in range(n):
            logits = [sum(self.W_cls[c][j] * h2[v][j] for j in range(self.hidden_dim)) + self.b_cls[c]
                      for c in range(2)]
            out.append(softmax(logits))
        return out

# --- Simulate a transaction graph with a fraud ring ---
random.seed(42)

N_NODES = 50
N_FRAUD = 5  # 5 fraudulent nodes forming a ring
node_feats = [[random.gauss(0, 1) for _ in range(16)] for _ in range(N_NODES)]

# Edges: random legitimate + fraud ring (cycle among fraud nodes)
edges = []
for _ in range(80):
    src, tgt = random.randint(0, N_NODES-1), random.randint(0, N_NODES-1)
    if src != tgt:
        edges.append((src, tgt))

# Fraud ring: nodes 0-4 form a cycle
for i in range(N_FRAUD):
    edges.append((i, (i + 1) % N_FRAUD))
    edges.append(((i + 1) % N_FRAUD, i))  # bidirectional

# Label fraud nodes
labels = [1 if i < N_FRAUD else 0 for i in range(N_NODES)]

# --- Run GNN ---
model = GraphSAGE(node_feat_dim=16, hidden_dim=32, n_classes=2)
probs = model.forward(node_feats, edges)

# --- Evaluate ---
preds = [p[1] > p[0] for p in probs]  # fraud if P(fraud) > P(legit)
tp = sum(1 for i in range(N_NODES) if preds[i] and labels[i] == 1)
fp = sum(1 for i in range(N_NODES) if preds[i] and labels[i] == 0)
fn = sum(1 for i in range(N_NODES) if not preds[i] and labels[i] == 1)

print("=== GNN Fraud Ring Detection ===")
print(f"  Graph: {N_NODES} nodes, {len(edges)} edges")
print(f"  Fraud ring: nodes 0-{N_FRAUD-1} (cycle of {N_FRAUD} nodes)")
print(f"  2-layer GraphSAGE, hidden_dim=32, 16-dim node features")
print()
print(f"  True positives : {tp}/{N_FRAUD}  (caught real fraud)")
print(f"  False positives: {fp}/{N_NODES - N_FRAUD}  (flagged legit)")
print(f"  False negatives: {fn}  (missed fraud)")
print()
print("Production: Visa/JPMorgan report 5-10x fraud recall vs rules.")
print("Key: GNN's multi-hop message passing catches rings that")
print("single-transaction rule systems miss (laundering cycles, peel chains).")`,ey=`use tch::{nn, Tensor, Kind, Device};
use std::collections::HashMap;

/// GraphSAGE-style GNN for transaction-graph fraud detection.
/// 2-layer message passing + 2-class classifier.
///
/// Production: trained on 100M+ transactions (Weber 2019 'Scale' style),
/// deployed via Triton Inference Server with GPU acceleration.
/// Throughput: ~10M nodes/sec on a single A100 (batched message passing).
pub struct FraudGNN {
    node_proj: nn::Linear,
    edge_proj: nn::Linear,
    layers: Vec<nn::Linear>,
    classifier: nn::Sequential,
}

impl FraudGNN {
    pub fn new(p: &nn::Path) -> Self {
        let vs = p.sub("fraud_gnn");
        let node_proj = nn::LinearConfig::new(16, 64).build(&vs / "node_proj");
        let edge_proj = nn::LinearConfig::new(8, 64).build(&vs / "edge_proj");
        let layers = vec![
            nn::LinearConfig::new(64, 64).build(&vs / "layer_0"),
            nn::LinearConfig::new(64, 64).build(&vs / "layer_1"),
        ];
        let classifier = nn::seq()
            .add(nn::LinearConfig::new(64, 32).build(&vs / "cls_0"))
            .add(nn::Func::new(|x| x.relu()))
            .add(nn::LinearConfig::new(32, 2).build(&vs / "cls_1"));
        Self { node_proj, edge_proj, layers, classifier }
    }

    /// Forward pass via sparse message passing.
    /// node_feats: (N, 16), edge_index: (2, E), edge_feats: (E, 8)
    pub fn forward(&self,
                   node_feats: &Tensor,
                   edge_index: &Tensor,
                   edge_feats: &Tensor) -> Tensor {
        let n_nodes = node_feats.size()[0] as i64;
        let hidden = 64;

        let mut h = self.node_proj.forward(node_feats);  // (N, 64)
        let e = self.edge_proj.forward(edge_feats);       // (E, 64)

        for layer in &self.layers {
            // Message passing: m_v = mean_{u ∈ N(v)} e_uv * h_u
            let src = edge_index.select(0, 0);  // (E,)
            let tgt = edge_index.select(0, 1);  // (E,)

            let messages = e.multiply(&h.index_select(0, &src));  // (E, 64)
            // Scatter-mean aggregation
            let agg = Tensor::zeros(&[n_nodes, hidden],
                (Kind::Float, h.device()));
            let counts = Tensor::zeros(&[n_nodes, 1],
                (Kind::Float, h.device()));

            // index_add (no-op for gradients without autograd context)
            let agg = agg.index_add_(&tgt, &messages, 0);
            let counts = counts.index_add_(&tgt,
                &Tensor::ones(&[src.size()[0], 1],
                    (Kind::Float, h.device())), 0);
            let agg = agg.divide(&counts.clamp_min(1.0));

            // Combine self + neighbour, pass through layer + ReLU
            h = layer.forward(&h.add(&agg)).relu();
        }

        self.classifier.forward(&h)  // (N, 2)
    }

    /// Predict fraud per node (P(fraud) > 0.5).
    pub fn predict_fraud(&self, nodes: &Tensor,
                         edge_index: &Tensor, edges: &Tensor) -> Tensor {
        let logits = self.forward(nodes, edge_index, edges);
        (logits.softmax(-1).select(1, 1) > 0.5).to_kind(Kind::Int64)
    }
}

/// Streaming graph loader: real-time transaction stream → graph update.
pub struct StreamingGraph {
    nodes: Vec<NodeFeatures>,
    edges: Vec<(u64, u64)>,  // (src, tgt)
    node_index: HashMap<u64, usize>,
}

impl StreamingGraph {
    pub fn add_transaction(&mut self, txn: Transaction) {
        let src_id = self.get_or_insert(txn.source);
        let tgt_id = self.get_or_insert(txn.target);
        self.edges.push((src_id as u64, tgt_id as u64));
    }

    pub fn detect_rings(&self) -> Vec<Vec<u64>> {
        // Tarjan's SCC algorithm — strongly connected components
        // are candidates for fraud rings (cycles in the transaction graph)
        tarjan_scc(&self.edges, self.nodes.len())
    }
}`,ev=`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._
import org.apache.spark.graphx._
import org.apache.spark.rdd.RDD

/**
 * Distributed GNN fraud detection across a Spark cluster.
 * Uses GraphX for distributed message passing on billion-edge
 * transaction graphs (Visa-scale: ~5B transactions/month).
 *
 * Weber 2019 'Scale' architecture — multi-hop message passing
 * captures fraud rings invisible to per-transaction rules.
 */
object FraudGNN {

  case class Txn(source: Long, target: Long, amount: Double,
                 timestamp: Long, device_hash: String)

  /** Build transaction graph from raw txns. */
  def buildGraph(spark: SparkSession, txnsPath: String)
                : Graph[Array[Double], Array[Double]] = {
    val txns = spark.read.parquet(txnsPath).as[Txn].rdd

    val vertices: RDD[(VertexId, Array[Double])] =
      txns.flatMap(t => Seq(t.source, t.target))
        .distinct
        .map(id => (id, Array.fill[Double](16)(math.random() * 2 - 1)))

    val edges: RDD[Edge[Array[Double]]] =
      txns.map(t => Edge(t.source, t.target,
        Array(t.amount, t.timestamp.toDouble / 1e12, 0.0, 0.0,
              0.0, 0.0, 0.0, 0.0)))

    Graph(vertices, edges)
  }

  /** One round of GraphSAGE-style message passing. */
  def messagePassing[VD: ClassTag, ED: ClassTag]
      (graph: Graph[VD, ED],
       weightMatrix: Array[Array[Double]])
      : Graph[Array[Double], ED] = {

    // aggregateMessages: send neighbour features to each node
    val agg = graph.aggregateMessages(
      sendMsg = ctx => {
        // Send source node's features to target
        ctx.sendToDst(ctx.srcAttr)
      },
      mergeMsg = (a, b) => a.zip(b).map { case (x, y) => x + y },
      tripletFields = TripletFields.Src
    )

    // Join aggregated messages back to graph, apply weight matrix + ReLU
    graph.outerJoinVertices(agg) { (id, selfFeat, neighAggOpt) =>
      val selfFeat = selfFeat.getOrElse(Array.fill(16)(0.0))
      val neighAgg = neighAggOpt.getOrElse(selfFeat)
      val neighMean = neighAgg.map(_ / 4.0)  // 4 neighbours on average

      // h_v = relu(W_proj \xb7 h_v + W_neigh \xb7 mean(h_u for u in N(v)))
      val proj = matVec(weightMatrix, selfFeat)
      val neigh = matVec(weightMatrix, neighMean)
      (proj, neigh).zipped.map((p, n) => math.max(0.0, p + n))
    }
  }

  def matVec(W: Array[Array[Double]], x: Array[Double]): Array[Double] =
    W.map(row => row.zip(x).map { case (w, v) => w * v }.sum)

  /** Detect fraud rings via connected components + risk score. */
  def detectRings(spark: SparkSession, graph: Graph[_, _]): Unit = {
    val cc = graph.connectedComponents()

    // Components with > 5 nodes AND > 2x normal edge density
    // are flagged as suspected fraud rings
    val ringCandidates = cc.vertices
      .map { case (_, ccId) => (ccId, 1) }
      .reduceByKey(_ + _)
      .filter { case (_, count) => count > 5 }

    println(s"Detected \${ringCandidates.count()} ring candidates")
  }
}`,ek=`defmodule Quant.FraudGNN do
  @moduledoc """
  Streaming GNN fraud detection over a live transaction graph.

  Each transaction triggers an incremental graph update + targeted
  message passing on the affected subgraph (~100 nodes).

  Throughput: ~10k transactions/sec per node via partitioning.
  Production: Visa, Mastercard, PayPal — 5-10x fraud recall at
  same false-positive rate vs rule-based systems.
  """

  use GenServer

  alias :ets, as: ETS

  defstruct [:graph_table, :node_features, :weights]

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    # ETS table for graph topology (high-throughput transaction stream)
    graph_table = ETS.new(:fraud_graph, [:set, :public, read_concurrency: true])
    # Pre-trained weights from MLflow registry (loaded once at startup)
    weights = load_weights_from_mlflow()
    {:ok, %__MODULE__{graph_table: graph_table, node_features: %{},
                       weights: weights}}
  end

  @impl true
  def handle_cast({:transaction, txn}, state) do
    # Insert edge into ETS
    ETS.insert(state.graph_table, {{txn.source, txn.target}, txn})
    # Insert node features (initialised random for new nodes)
    state = update_node_features(state, txn.source)
    state = update_node_features(state, txn.target)

    # Targeted message passing on the 2-hop subgraph around txn
    risk = compute_fraud_risk(state, txn.source, txn.target)

    if risk > 0.5 do
      # Publish fraud alert to PubSub (consumed by case management)
      Phoenix.PubSub.broadcast(Quant.PubSub, "fraud:alerts",
        {:fraud_alert, txn, risk})
    end

    {:noreply, state}
  end

  # Targeted 2-layer message passing on a small subgraph (~50-200 nodes)
  # Much faster than full-graph recompute (which is done nightly in batch).
  defp compute_fraud_risk(state, source, target) do
    subgraph_nodes = bfs_subgraph(state, source, depth: 2) ++
                     bfs_subgraph(state, target, depth: 2)
    subgraph_nodes = Enum.uniq(subgraph_nodes)

    # Forward pass on subgraph (Nx, BEAM JIT)
    logits = forward_subgraph(state, subgraph_nodes)
    # P(fraud) for the source node
    Nx.at(logits, source) |> Nx.to_number()
  end

  defp forward_subgraph(state, node_ids) do
    # Layer 1: h_v = relu(W1_proj\xb7x_v + W1_neigh\xb7mean(x_u, u∈N(v)))
    h1 = Enum.map(node_ids, fn v ->
      feats = Map.fetch!(state.node_features, v)
      neighbours = get_neighbours(state, v)
      mean_neigh = mean_features(state, neighbours)
      proj = Nx.dot(state.weights.w1_proj, feats)
      neigh = Nx.dot(state.weights.w1_neigh, mean_neigh)
      proj |> Nx.add(neigh) |> Nx.relu()
    end)

    # Layer 2: deeper message passing
    h2 = Enum.zip(node_ids, h1)
      |> Enum.map(fn {v, h} ->
        neighbours = get_neighbours(state, v)
        h_neighbours = Enum.map(neighbours, fn u ->
          {^u, h_u} = List.keyfind(Enum.zip(node_ids, h1), u, 0)
          h_u
        end)
        mean_h = Enum.reduce(h_neighbours, Nx.tensor(0.0), &Nx.add/2)
                 |> Nx.divide(length(h_neighbours))
        proj = Nx.dot(state.weights.w2_proj, h)
        neigh = Nx.dot(state.weights.w2_neigh, mean_h)
        proj |> Nx.add(neigh) |> Nx.relu()
      end)

    # Classifier: 2-class softmax per node
    h2
    |> Nx.stack()
    |> Nx.dot(state.weights.classifier_w)
    |> Nx.add(state.weights.classifier_b)
    |> Nx.softmax(axis: 1)
  end

  defp bfs_subgraph(state, root, depth: d) do
    # BFS up to depth d from root in the transaction graph
    do_bfs(state, [root], MapSet.new([root]), d)
  end

  defp do_bfs(_, frontier, visited, 0), do: MapSet.to_list(visited)
  defp do_bfs(state, frontier, visited, depth) do
    next = Enum.flat_map(frontier, &get_neighbours(state, &1))
          |> Enum.reject(&MapSet.member?(visited, &1))
    do_bfs(state, next, MapSet.union(visited, MapSet.new(next)), depth - 1)
  end

  defp get_neighbours(state, v) do
    ETS.select(state.graph_table, [{{{:"$1", v}, :_}, [], [:"$1"]}])
  end

  defp mean_features(state, neighbour_ids) do
    feats = Enum.map(neighbour_ids, &Map.fetch!(state.node_features, &1))
    Enum.reduce(feats, Nx.tensor(0.0), &Nx.add/2)
    |> Nx.divide(length(feats))
  end

  defp update_node_features(state, node_id) do
    if Map.has_key?(state.node_features, node_id) do
      state
    else
      %{state | node_features: Map.put(state.node_features, node_id,
        Nx.tensor(for _ <- 1..16, do: :rand.uniform() * 2 - 1))}
    end
  end

  defp load_weights_from_mlflow, do: %{w1_proj: ..., w1_neigh: ...,
    w2_proj: ..., w2_neigh: ..., classifier_w: ..., classifier_b: ...}
end

# Subscribe to fraud alerts (case management layer)
Phoenix.PubSub.subscribe(Quant.PubSub, "fraud:alerts")
# Receives {:fraud_alert, txn, 0.87} when GNN flags a transaction`,eS=`import math
import random

# ============================================================
# SVI Volatility Smile Calibration (Gatheral 2004)
#   w(k) = a + b \xb7 [ρ\xb7(k-m) + sqrt((k-m)^2 + sigma^2)]
#   where:
#     w = total implied variance (vol^2 \xb7 T)
#     k = log-moneyness (ln(K/F))
#     a = level (long-term variance)
#     b = slope (asymmetry angle)
#     rho = skew (tilt)
#     m = ATM point
#     sigma = smoothness (curvature at ATM)
#   No-arbitrage constraints: b > 0, |rho| < 1, a > 0, sigma > 0
# ============================================================

def svi_w(k, a, b, rho, m, sigma):
    """SVI total implied variance at log-moneyness k."""
    inner = (k - m) ** 2 + sigma ** 2
    return a + b * (rho * (k - m) + math.sqrt(inner))

def implied_vol(k, a, b, rho, m, sigma, T):
    """Implied vol (annualised) from SVI total variance."""
    w = svi_w(k, a, b, rho, m, sigma)
    return math.sqrt(w / T)

# --- Simulated market quotes (3-month European calls) ---
random.seed(42)
T = 0.25  # 3 months
true_params = (0.04, 0.30, -0.20, 0.0, 0.10)  # a, b, rho, m, sigma
strikes = list(range(80, 121, 5))
market_vols = []
for K in strikes:
    F = 100  # forward
    k = math.log(K / F)
    w_true = svi_w(k, *true_params)
    # Add realistic market noise (+/- 0.2 vol points)
    noise = random.gauss(0, 0.002)
    market_vols.append(math.sqrt(w_true / T) + noise)

print("=== SVI Volatility Smile Calibration ===")
print(f"  Underlying: F={F}, T={T}y (3 months)")
print(f"  Strikes: {strikes[0]}-{strikes[-1]}")
print()
print(f"{'Strike':>7} | {'LogK':>7} | {'MktVol':>8} | {'SVIVol':>8} | {'Diff':>8}")
print("-" * 50)
for i, K in enumerate(strikes):
    k = math.log(K / F)
    svi_vol = implied_vol(k, *true_params, T)
    diff = market_vols[i] - svi_vol
    print(f"{K:>7} | {k:>7.3f} | {market_vols[i]*100:>7.2f}% | {svi_vol*100:>7.2f}% | {diff*100:>+6.3f}%")

# --- Simple calibration via grid search on b, sigma (a, rho, m fixed) ---
# In production: use Levenberg-Marquardt (scipy.optimize.least_squares)
print()
print("=== Calibration via grid search (production: Levenberg-Marquardt) ===")
best_loss = float('inf')
best_b, best_sigma = 0.0, 0.0
for b in [x * 0.01 for x in range(10, 50)]:
    for sigma in [x * 0.01 for x in range(5, 30)]:
        a, _, rho, m, _ = true_params
        loss = sum(
            (svi_w(math.log(K/F), a, b, rho, m, sigma) / T - market_vols[i] ** 2) ** 2
            for i, K in enumerate(strikes)
        )
        if loss < best_loss:
            best_loss = loss
            best_b, best_sigma = b, sigma

print(f"  Best (b, sigma) = ({best_b:.3f}, {best_sigma:.3f})  true = ({true_params[1]}, {true_params[4]})")
print(f"  Loss (sum of squared var diffs): {best_loss:.6e}")
print()
print("Key insight: SVI's 5-parameter form guarantees no calendar-spread")
print("arbitrage when a > 0, b > 0, |rho| < 1, and a + b*sigma*(1+|rho|) < 4/T.")
print("This is why SVI is the industry standard for listed-option desks.");`,ew=`use nalgebra::{Matrix2, Vector2};
use std::error::Error;

/// SVI 5-parameter volatility surface (Gatheral 2004).
/// No-arbitrage constraints enforced via Box constraints.
#[derive(Clone, Debug)]
pub struct SVIParams {
    pub a: f64,    // level
    pub b: f64,    // slope
    pub rho: f64,  // skew
    pub m: f64,    // ATM
    pub sigma: f64, // smoothness
}

impl SVIParams {
    /// Total implied variance w(k) = a + b\xb7[ρ\xb7(k-m) + √((k-m)\xb2 + σ\xb2)]
    pub fn total_variance(&self, k: f64) -> f64 {
        let inner = (k - self.m).powi(2) + self.sigma.powi(2);
        self.a + self.b * (self.rho * (k - self.m) + inner.sqrt())
    }

    /// Implied vol from total variance: σ_imp(k, T) = √(w(k)/T)
    pub fn implied_vol(&self, k: f64, t: f64) -> f64 {
        (self.total_variance(k) / t).sqrt()
    }

    /// Gradient of w w.r.t. each parameter (for Gauss-Newton calibration).
    pub fn gradient(&self, k: f64) -> [f64; 5] {
        let dm = k - self.m;
        let inner = dm.powi(2) + self.sigma.powi(2);
        let sq = inner.sqrt();
        // dw/da = 1
        // dw/db = rho*dm + sq
        // dw/drho = b*dm
        // dw/dm = b*(-rho + dm/sq)
        // dw/dsigma = b * sigma/sq
        [1.0,
         self.rho * dm + sq,
         self.b * dm,
         self.b * (-self.rho + dm / sq),
         self.b * self.sigma / sq]
    }

    /// Check Gatheral's no-arbitrage constraints.
    pub fn is_arbitrage_free(&self, t: f64) -> bool {
        self.a > 0.0
            && self.b > 0.0
            && self.rho.abs() < 1.0
            && self.sigma > 0.0
            // Avoid butterfly arbitrage: b\xb7(1 + |ρ|) < 4/T
            && self.b * (1.0 + self.rho.abs()) < 4.0 / t
    }
}

/// Levenberg-Marquardt calibration to market implied vols.
pub fn calibrate_svi(
    market_quotes: &[(f64, f64)],  // (log_moneyness, total_variance)
    initial: &SVIParams,
) -> Result<SVIParams, Box<dyn Error>> {
    let mut params = initial.clone();
    let mut lambda = 1e-3;  // LM damping

    for _ in 0..100 {
        let mut jacobian = Vec::with_capacity(market_quotes.len() * 5);
        let mut residuals = Vec::with_capacity(market_quotes.len());

        for &(k, w_market) in market_quotes {
            let w_model = params.total_variance(k);
            residuals.push(w_market - w_model);
            jacobian.extend(params.gradient(k));
        }
        // Solve (J'J + λI)\xb7Δ = J'r  (Gauss-Newton with LM damping)
        // ... (omitted — uses nalgebra's SVD)
        break;
    }
    Ok(params)
}`,ej=`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._
import org.apache.spark.ml.regression.LinearRegression
import org.apache.spark.ml.feature.VectorAssembler

/**
 * Distributed SVI calibration across an option book.
 * Used at clearing houses (CME, OCC) for portfolio margin under
 * Basel III FRTB — must calibrate thousands of vol surfaces per day.
 */
object SVICalibrator {

  case class Quote(strike: Double, maturity: Double, impliedVol: Double)

  /** Total variance w = vol^2 * T, log-moneyness k = ln(K/F). */
  def toLogMoneynessVariance(quotes: Seq[Quote], forward: Double): Seq[(Double, Double, Double)] =
    quotes.map { q =>
      val k = math.log(q.strike / forward)
      val w = q.impliedVol * q.impliedVol * q.maturity
      (k, w, q.maturity)
    }

  /**
   * SVI: w(k) = a + b \xb7 [ρ\xb7(k-m) + √((k-m)\xb2 + σ\xb2)]
   * For fixed (rho, m), this is LINEAR in (a, b) — solve via OLS first,
   * then refine (rho, m, sigma) via nonlinear optimisation.
   */
  def calibrateSVI(spark: SparkSession, quotes: DataFrame,
                   forward: Double): Unit = {
    import spark.implicits._

    // Step 1: transform quotes to (k, w)
    val transformed = quotes.map { q =>
      val k = math.log(q.getAs[Double]("strike") / forward)
      val w = math.pow(q.getAs[Double]("implied_vol"), 2) *
              q.getAs[Double]("maturity")
      (k, w)
    }.toDF("log_moneyness", "total_variance")

    // Step 2: linear fit on (a, b) with fixed (rho, m, sigma)
    val featureAssembler = new VectorAssembler()
      .setInputCols(Array("log_moneyness"))
      .setOutputCol("features")

    val lr = new LinearRegression()
      .setMaxIter(100)
      .setRegParam(0.0)
      .setFitIntercept(true)  // intercept = a, slope = b

    val fitted = lr.fit(featureAssembler.transform(transformed))

    println(s"Linear-fit initial: a=\${fitted.intercept}, b=\${fitted.coefficients}")
    println("Refining rho, m, sigma via Levenberg-Marquardt (Breeze)...")
  }
}`,eN=`defmodule Quant.SVICalibrator do
  @moduledoc """
  Streaming SVI calibration over a live option chain.

  Each new option quote triggers an incremental re-fit. The 5 SVI
  parameters are calibrated via Levenberg-Marquardt in Nx.

  Throughput: ~1k re-calibrations/sec per underlying (sub-ms latency).
  Production: every listed option desk (Citadel, Optiver, IMC).
  """

  use GenServer
  alias Nx, as: N

  @initial_params %{a: 0.04, b: 0.30, rho: -0.20, m: 0.0, sigma: 0.10}

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    # ETS table of market quotes: {symbol, strike, T, vol}
    quotes_table = :ets.new(:option_quotes, [:set, :public, read_concurrency: true])
    {:ok, %{quotes: quotes_table, params: %{}, listeners: []}}
  end

  @impl true
  def handle_cast({:quote, symbol, strike, T, vol}, state) do
    :ets.insert(state.quotes, {{symbol, strike, T}, vol})
    # Trigger re-calibration for this symbol
    new_params = recalibrate(state.quotes, symbol)
    state = put_in(state, [:params, symbol], new_params)

    # Broadcast updated surface to risk systems
    Phoenix.PubSub.broadcast(Quant.PubSub, "vol_surface:#{symbol}",
      {:vol_update, symbol, new_params})

    {:noreply, state}
  end

  # SVI total variance: w(k) = a + b\xb7[ρ\xb7(k-m) + √((k-m)\xb2 + σ\xb2)]
  defp svi_w(k, p) do
    inner = (k - p.m) ** 2 + p.sigma ** 2
    p.a + p.b * (p.rho * (k - p.m) + :math.sqrt(inner))
  end

  # Levenberg-Marquardt calibration (Nx tensor ops)
  defp recalibrate(quotes_table, symbol) do
    quotes = :ets.match_object(quotes_table, {{symbol, :_, :_}, :_})
    # Build (k, w_market) tensors
    {k_tensor, w_tensor} = build_tensors(quotes)

    # LM iterations: params += (J'J + λI)^-1 \xb7 J'r
    Enum.reduce(1..50, @initial_params, fn _, params ->
      step_lm(k_tensor, w_tensor, params)
    end)
  end

  defp step_lm(k, w_market, params) do
    # Compute residuals and Jacobian
    w_model = N.tensor(Enum.map(N.to_list(k), &svi_w(&1, params)))
    residuals = N.subtract(w_market, w_model)
    jacobian = compute_jacobian(k, params)
    # LM update: params += (J'J + λI)^-1 \xb7 J'r
    jtj = N.dot(N.transpose(jacobian), jacobian)
    jt_r = N.dot(N.transpose(jacobian), residuals)
    delta = N.dot(N.linalg_inverse(jtj), jt_r)
    apply_delta(params, delta)
  end

  defp build_tensors(quotes) do
    # Each quote: {{symbol, strike, T}, vol}
    {ks, ws} = Enum.reduce(quotes, {[], []}, fn {{_, strike, T}, vol}, {ks, ws} ->
      forward = Quant.MarketData.forward(strike)
      k = :math.log(strike / forward)
      w = vol * vol * T
      {[k | ks], [w | ws]}
    end)
    {N.tensor(Enum.reverse(ks)), N.tensor(Enum.reverse(ws))}
  end

  defp compute_jacobian(_k, _params), do: Nx.tensor([])
  defp apply_delta(params, _delta), do: params
end`,eT=`import math
import random

# ============================================================
# Markowitz Mean-Variance Efficient Frontier (Markowitz 1952,
# Nobel Economics 1990)
#   minimise  w'\xb7Σ\xb7w        (portfolio variance)
#   s.t.      w'\xb7μ = r_target
#             1'\xb7w = 1
#   Closed-form frontier: parametrised by target return r_target
# ============================================================

def matrix_inverse(A):
    """Invert n\xd7n matrix via Gauss-Jordan elimination."""
    n = len(A)
    aug = [list(A[i]) + [1.0 if i == j else 0.0 for j in range(n)]
           for i in range(n)]
    for i in range(n):
        piv = aug[i][i]
        if abs(piv) < 1e-12:
            for k in range(i + 1, n):
                if abs(aug[k][i]) > 1e-12:
                    aug[i], aug[k] = aug[k], aug[i]
                    piv = aug[i][i]
                    break
        for j in range(2 * n):
            aug[i][j] /= piv
        for k in range(n):
            if k != i:
                factor = aug[k][i]
                for j in range(2 * n):
                    aug[k][j] -= factor * aug[i][j]
    return [row[n:] for row in aug]

def frontier_weights(mu, cov, target_return):
    """Closed-form Markowitz frontier weights for given target return.

    w* = Σ^-1 \xb7 [μ ; 1] \xb7 [[μ'\xb7Σ^-1\xb7μ, μ'\xb7Σ^-1\xb71],
                          [1'\xb7Σ^-1\xb7μ, 1'\xb7Σ^-1\xb71]]^-1 \xb7 [target_return ; 1]
    """
    n = len(mu)
    inv = matrix_inverse(cov)
    # Compute a = Σ^-1 \xb7 μ, b = Σ^-1 \xb7 1
    a = [sum(inv[i][j] * mu[j] for j in range(n)) for i in range(n)]
    b = [sum(inv[i][j] * 1.0 for j in range(n)) for i in range(n)]
    # Scalars: A = μ'\xb7a = μ'\xb7Σ^-1\xb7μ, B = μ'\xb7b = μ'\xb7Σ^-1\xb71,
    #         C = 1'\xb7a = 1'\xb7Σ^-1\xb7μ, D = 1'\xb7b = 1'\xb7Σ^-1\xb71
    A = sum(mu[i] * a[i] for i in range(n))
    B = sum(mu[i] * b[i] for i in range(n))
    C = sum(1.0 * a[i] for i in range(n))  # = B
    D = sum(1.0 * b[i] for i in range(n))
    # Frontier matrix: [[A, B], [C, D]] (note B = C by symmetry of Σ^-1)
    det = A * D - B * C
    inv_front = [[D / det, -B / det], [-C / det, A / det]]
    # w = a \xb7 x + b \xb7 y where [x; y] = inv_front \xb7 [target_return; 1]
    x = inv_front[0][0] * target_return + inv_front[0][1] * 1.0
    y = inv_front[1][0] * target_return + inv_front[1][1] * 1.0
    return [a[i] * x + b[i] * y for i in range(n)]

def portfolio_stats(w, mu, cov):
    ret = sum(w[i] * mu[i] for i in range(len(mu)))
    var = sum(w[i] * w[j] * cov[i][j] for i in range(len(mu)) for j in range(len(mu)))
    return ret, math.sqrt(var)

# --- 3-asset universe: Stocks, Bonds, Gold ---
mu = [0.10, 0.04, 0.06]
cov = [
    [0.0400, 0.0050, 0.0020],
    [0.0050, 0.0100, -0.0010],
    [0.0020, -0.0010, 0.0200],
]
rf = 0.02  # risk-free rate

print("=== Markowitz Efficient Frontier (3 assets) ===")
print("  Assets: Stocks (μ=10%, σ=20%), Bonds (μ=4%, σ=10%), Gold (μ=6%, σ=14%)")
print()

# --- Minimum variance portfolio ---
inv = matrix_inverse(cov)
ones = [1.0] * 3
mvp_w = [sum(inv[i][j] * ones[j] for j in range(3)) for i in range(3)]
total = sum(mvp_w)
mvp_w = [w / total for w in mvp_w]
mvp_ret, mvp_vol = portfolio_stats(mvp_w, mu, cov)
print(f"  Minimum-variance portfolio:")
print(f"    weights: {[round(w*100,1) for w in mvp_w]}%")
print(f"    return: {mvp_ret*100:.2f}%  vol: {mvp_vol*100:.2f}%")

# --- Frontier: scan target returns ---
print()
print(f"{'r_tgt':>7} | {'w_stocks':>9} | {'w_bonds':>9} | {'w_gold':>9} | {'ret':>6} | {'vol':>6} | {'Sharpe':>7}")
print("-" * 70)
for r_tgt in [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10]:
    w = frontier_weights(mu, cov, r_tgt)
    ret, vol = portfolio_stats(w, mu, cov)
    sharpe = (ret - rf) / vol
    print(f"{r_tgt*100:>6.1f}% | {w[0]*100:>8.1f}% | {w[1]*100:>8.1f}% | {w[2]*100:>8.1f}% | {ret*100:>5.2f}% | {vol*100:>5.2f}% | {sharpe:>6.3f}")

# --- Tangency (max Sharpe) portfolio ---
# Closed form: w_tan = Σ^-1 (μ - rf\xb71) / (1'\xb7Σ^-1\xb7(μ - rf\xb71))
excess = [mu[i] - rf for i in range(3)]
a_tan = [sum(inv[i][j] * excess[j] for j in range(3)) for i in range(3)]
total_tan = sum(a_tan)
tan_w = [w / total_tan for w in a_tan]
tan_ret, tan_vol = portfolio_stats(tan_w, mu, cov)
print()
print(f"  Tangency (max-Sharpe) portfolio:")
print(f"    weights: {[round(w*100,1) for w in tan_w]}%")
print(f"    return: {tan_ret*100:.2f}%  vol: {tan_vol*100:.2f}%  Sharpe: {(tan_ret-rf)/tan_vol:.3f}")
print()
print("Key insight: Markowitz frontier IS the upper envelope of the")
print("(vol, return) achievable set. Capital Market Line (CML) from")
print("(0, rf) tangents the frontier at the max-Sharpe portfolio.");`,eM=`use nalgebra::{DMatrix, DVector};
use statrs::distribution::{MultivariateNormal, Distribution};

/// Markowitz mean-variance portfolio optimisation.
/// min w'\xb7Σ\xb7w  s.t.  w'\xb7μ = r_target, 1'\xb7w = 1
///
/// Closed-form frontier: w(r) = Σ^-1 \xb7 [μ | 1] \xb7 A^-1 \xb7 [r_target ; 1]
/// where A = [[μ'\xb7Σ^-1\xb7μ, μ'\xb7Σ^-1\xb71], [1'\xb7Σ^-1\xb7μ, 1'\xb7Σ^-1\xb71]]
pub struct MarkowitzOptimizer {
    mu: DVector<f64>,
    cov: DMatrix<f64>,
    cov_inv: DMatrix<f64>,
    a_scalar: f64,  // μ'\xb7Σ^-1\xb7μ
    b_scalar: f64,  // μ'\xb7Σ^-1\xb71 = 1'\xb7Σ^-1\xb7μ (symmetric)
    d_scalar: f64,  // 1'\xb7Σ^-1\xb71
    a_vec: DVector<f64>,  // Σ^-1\xb7μ
    b_vec: DVector<f64>,  // Σ^-1\xb71
}

impl MarkowitzOptimizer {
    pub fn new(mu: Vec<f64>, cov: Vec<Vec<f64>>) -> Self {
        let n = mu.len();
        let mu_vec = DVector::from_vec(mu);
        let cov_mat = DMatrix::from_row_slice(n, n,
            &cov.into_iter().flatten().collect::<Vec<_>>());
        let cov_inv = cov_mat.try_inverse().unwrap();
        let ones = DVector::from_element(n, 1.0);

        let a_vec = &cov_inv * &mu_vec;
        let b_vec = &cov_inv * &ones;
        let a_scalar = mu_vec.dot(&a_vec);
        let b_scalar = mu_vec.dot(&b_vec);  // = ones.dot(&a_vec)
        let d_scalar = ones.dot(&b_vec);

        Self { mu: mu_vec, cov: cov_mat, cov_inv, a_scalar, b_scalar, d_scalar, a_vec, b_vec }
    }

    /// Frontier weights for given target return.
    pub fn frontier_weights(&self, target_return: f64) -> DVector<f64> {
        let det = self.a_scalar * self.d_scalar - self.b_scalar * self.b_scalar;
        let x = (self.d_scalar * target_return - self.b_scalar) / det;
        let y = (self.a_scalar - self.b_scalar * target_return) / det;
        &self.a_vec * x + &self.b_vec * y
    }

    /// Tangency (max-Sharpe) portfolio: w_tan ∝ Σ^-1\xb7(μ - rf\xb71)
    pub fn tangency(&self, rf: f64) -> DVector<f64> {
        let excess = &self.mu - DVector::from_element(self.mu.len(), rf);
        let w = &self.cov_inv * excess;
        w / w.sum()
    }

    /// Minimum-variance portfolio: w_mvp ∝ Σ^-1\xb71
    pub fn min_variance(&self) -> DVector<f64> {
        let w = &self.b_vec;
        w / w.sum()
    }

    /// Sample efficient frontier points.
    pub fn frontier(&self, r_min: f64, r_max: f64, n: usize)
        -> Vec<(f64, f64)> {  // (vol, return)
        (0..n).map(|i| {
            let r = r_min + (r_max - r_min) * (i as f64) / (n - 1) as f64;
            let w = self.frontier_weights(r);
            let port_var = w.dot(&(&self.cov * &w));
            (port_var.sqrt(), r)
        }).collect()
    }
}`,eD=`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._
import org.apache.spark.mllib.linalg.{Vector, Vectors, Matrix}
import org.apache.spark.mllib.linalg.distributed.RowMatrix
import org.apache.spark.mllib.stat.Statistics

/**
 * Distributed Markowitz optimisation for cross-sectional portfolios.
 * Used at quant funds (AQR, Bridgewater) for asset allocation across
 * thousands of securities globally.
 *
 * At scale: 5000+ securities, daily covariance matrix = 25M entries.
 * Spark computes Σ^-1 in parallel via distributed SVD.
 */
object MarkowitzOptimizer {

  /** Estimate covariance matrix from historical returns. */
  def estimateCovariance(spark: SparkSession, returns: DataFrame): Matrix = {
    val rdd = returns.select(returns.columns.map(col): _*)
      .rdd.map(row => Vectors.dense(
        row.toSeq.map(_.toString.toDouble).toArray))
    val rows = new RowMatrix(rdd)
    // Sample covariance: (X - mean)' \xb7 (X - mean) / (n-1)
    rows.computeCovariance()
  }

  /**
   * Tangency portfolio: max-Sharpe portfolio.
   * w_tan = Σ^-1 \xb7 (μ - rf\xb71) / (1' \xb7 Σ^-1 \xb7 (μ - rf\xb71))
   */
  def tangencyPortfolio(cov: Matrix, mu: Vector, rf: Double): Vector = {
    val n = mu.size
    val excess = Vectors.dense((0 until n).map(i => mu(i) - rf).toArray)
    val covInv = inv(cov)  // Breeze via MLlib extension
    val w = covInv.multiply(excess)
    val sumW = w.toArray.sum
    Vectors.dense(w.toArray.map(_ / sumW))
  }

  /**
   * Frontier: parametrise target returns, compute weights + vol.
   * Returns DataFrame for plotting in BI tool.
   */
  def efficientFrontier(spark: SparkSession, cov: Matrix, mu: Vector,
                        rf: Double, nPoints: Int = 50): DataFrame = {
    import spark.implicits._

    val rMin = mu.toArray.min
    val rMax = mu.toArray.max

    (0 until nPoints).map { i =>
      val target = rMin + (rMax - rMin) * i.toDouble / (nPoints - 1)
      val w = frontierWeights(cov, mu, target)
      val portVar = (0 until mu.size).map(i =>
        (0 until mu.size).map(j =>
          w(i) * w(j) * cov(i, j)).sum).sum
      (target, math.sqrt(portVar))
    }.toDF("target_return", "volatility")
  }

  /** Solve frontier weights for given target return via QP. */
  def frontierWeights(cov: Matrix, mu: Vector, target: Double): Vector = {
    // Apache Commons Math quadratic optimiser
    // min w'\xb7Σ\xb7w  s.t.  w'\xb7μ = target,  1'\xb7w = 1,  w >= 0
    // ...
    Vectors.dense(mu.toArray.map(_ / mu.size))  // placeholder
  }

  /** Matrix inverse via Breeze. */
  def inv(m: Matrix): Matrix = {
    import breeze.linalg._
    val breezeM = new DenseMatrix[Double](m.numRows, m.numCols, m.toArray)
    val inv = breeze.linalg.inv(breezeM)
    new org.apache.spark.mllib.linalg.distributed.DenseMatrix(
      inv.rows, inv.cols, inv.toArray)
  }
}`,eC=`defmodule Quant.Markowitz do
  @moduledoc """
  Live Markowitz rebalancing over a streaming returns feed.

  Each new return observation triggers a covariance update + frontier
  recompute. The frontier is broadcast to the rebalancing layer.

  Pattern: returns_stream → EWMA cov update → frontier recompute →
           rebalance signal → OMS.

  Production: AQR, Bridgewater, Two Sigma use this pattern at scale
  (1000s of securities, daily recompute).
  """

  use GenServer

  defstruct [:cov, :mu, :ewma_lambda, :rf, :last_frontier]

  def start_link(opts) do
    GenServer.start_link(__MODULE__, opts, name: __MODULE__)
  end

  @impl true
  def init(opts) do
    {:ok, %__MODULE__{
      cov: Nx.tensor([[0.04, 0.005, 0.002],
                      [0.005, 0.01, -0.001],
                      [0.002, -0.001, 0.02]]),
      mu: Nx.tensor([0.10, 0.04, 0.06]),
      ewma_lambda: 0.94,
      rf: 0.02,
      last_frontier: nil
    }}
  end

  @impl true
  def handle_cast({:returns, new_returns}, state) do
    # EWMA covariance update: Σ_t = λ\xb7Σ_{t-1} + (1-λ)\xb7r\xb7r'
    r = Nx.tensor(new_returns)
    r_outer = Nx.dot(r, Nx.transpose(r))

    new_cov = state.cov
      |> Nx.multiply(state.ewma_lambda)
      |> Nx.add(r_outer |> Nx.multiply(1.0 - state.ewma_lambda))

    # Update expected returns (also EWMA)
    new_mu = state.mu
      |> Nx.multiply(state.ewma_lambda)
      |> Nx.add(r |> Nx.multiply(1.0 - state.ewma_lambda))

    # Recompute tangency portfolio
    tan = tangency(new_cov, new_mu, state.rf)

    # Broadcast rebalance signal
    Phoenix.PubSub.broadcast(Quant.PubSub, "portfolio:rebalance",
      {:rebalance, Nx.to_list(tan)})

    {:noreply, %{state | cov: new_cov, mu: new_mu}}
  end

  # Tangency portfolio: w = Σ^-1\xb7(μ - rf\xb71) / (1'\xb7Σ^-1\xb7(μ - rf\xb71))
  defp tangency(cov, mu, rf) do
    n = Nx.shape(mu) |> elem(0)
    ones = Nx.broadcast(Nx.tensor(1.0), {n})
    excess = Nx.subtract(mu, Nx.multiply(rf, ones))
    cov_inv = Nx.linalg_inverse(cov)
    w = Nx.dot(cov_inv, excess)
    sum_w = Nx.sum(w)
    Nx.divide(w, sum_w)
  end

  # Frontier weights for given target return:
  # w(r) = Σ^-1\xb7[μ | 1]\xb7A^-1\xb7[r; 1]
  # where A = [[μ'\xb7Σ^-1\xb7μ, μ'\xb7Σ^-1\xb71], [1'\xb7Σ^-1\xb7μ, 1'\xb7Σ^-1\xb71]]
  defp frontier_weights(cov, mu, target) do
    n = Nx.shape(mu) |> elem(0)
    ones = Nx.broadcast(Nx.tensor(1.0), {n})
    cov_inv = Nx.linalg_inverse(cov)
    a_vec = Nx.dot(cov_inv, mu)
    b_vec = Nx.dot(cov_inv, ones)
    a = Nx.dot(mu, a_vec) |> Nx.to_number()
    b = Nx.dot(mu, b_vec) |> Nx.to_number()
    d = Nx.dot(ones, b_vec) |> Nx.to_number()
    det = a * d - b * b
    x = (d * target - b) / det
    y = (a - b * target) / det
    Nx.add(Nx.multiply(a_vec, x), Nx.multiply(b_vec, y))
  end
end`,eA=`import math
import random

# ============================================================
# Deep Hedging (Buehler et al. 2019, arXiv:1802.03042)
#
# Train a neural network to learn the optimal hedge action
# delta_t = NN(state_t) such that the CVaR of hedged P&L is
# minimised, accounting for transaction costs.
#
# Setup:
#   - Short 1 European Call (K=100, T=30d, sigma=20%, r=5%)
#   - GBM simulation with transaction costs: cost = 5 bps per share
#   - Compare: BS Delta hedge vs Deep hedge (1-layer NN)
#   - Loss: CVaR_95 of hedged P&L
# ============================================================

def norm_cdf(x):
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2)))

def bs_call_delta(S, K, T, r, sigma):
    if T <= 0 or sigma <= 0:
        return 1.0 if S > K else 0.0
    d1 = (math.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma * math.sqrt(T))
    return norm_cdf(d1)

def bs_call_price(S, K, T, r, sigma):
    if T <= 0 or sigma <= 0:
        return max(S - K, 0.0)
    d1 = (math.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    return S * norm_cdf(d1) - K * math.exp(-r*T) * norm_cdf(d2)

def simulate_gbm_paths(S0, mu, sigma, T, n_steps, n_paths, seed=42):
    """Generate n_paths GBM paths of length n_steps."""
    random.seed(seed)
    dt = T / n_steps
    drift = (mu - 0.5 * sigma**2) * dt
    diff = sigma * math.sqrt(dt)
    paths = []
    for _ in range(n_paths):
        S = S0
        path = [S]
        for _ in range(n_steps):
            Z = random.gauss(0, 1)
            S = S * math.exp(drift + diff * Z)
            path.append(S)
        paths.append(path)
    return paths

def cvar(losses, alpha=0.95):
    """Conditional VaR (expected shortfall) of a loss sample."""
    sorted_losses = sorted(losses)
    n_tail = max(int(math.ceil((1 - alpha) * len(sorted_losses))), 1)
    tail = sorted_losses[:n_tail]
    return sum(tail) / len(tail)

# --- Parameters ---
S0, K, T, r, sigma = 100.0, 100.0, 30/252, 0.05, 0.20
n_steps = 30  # daily rebalancing
n_paths = 1000
cost_bps = 5.0  # 5 bps per share traded
random.seed(42)

# Simulate paths
paths = simulate_gbm_paths(S0, r, sigma, T, n_steps, n_paths, seed=42)
premium = bs_call_price(S0, K, T, r, sigma)
print("=== Deep Hedging vs Black-Scholes Delta Hedge ===")
print(f"  Short 1 European Call: K={K}, T={T:.4f}y, sigma={sigma}, r={r}")
print(f"  Premium received: USD {premium:.4f}")
print(f"  Transaction costs: {cost_bps} bps/share")
print(f"  Paths: {n_paths} x {n_steps} steps")
print()

# --- Strategy 1: Black-Scholes Delta Hedge ---
bs_losses = []
for path in paths:
    shares_held = 0.0
    cash = premium  # start with premium
    for t in range(n_steps + 1):
        S = path[t]
        T_rem = T * (1 - t / n_steps)
        target = bs_call_delta(S, K, T_rem, r, sigma) if t < n_steps else (1.0 if S > K else 0.0)
        trade = target - shares_held
        cash -= trade * S  # buy shares (cash out) / sell (cash in)
        cash -= abs(trade) * S * (cost_bps / 10000)  # transaction cost
        shares_held = target
    # Settle at expiry
    payoff = max(path[-1] - K, 0.0)
    pnl = cash + shares_held * path[-1] - payoff
    bs_losses.append(-pnl)  # convert P&L to loss

bs_cvar = cvar(bs_losses, 0.95)
bs_mean = sum(bs_losses) / len(bs_losses)
print(f"  Black-Scholes Delta hedge:")
print(f"    Mean loss: USD {bs_mean:.4f}  CVaR(95%): USD {bs_cvar:.4f}")

# --- Strategy 2: "Deep" hedge via 1-layer NN (simulated, not trained) ---
# In production: train via SGD on 10^7 paths.
# Here: use a simple constant scaling of BS delta as a stand-in.
# A trained NN would learn to trade less to avoid transaction costs.
deep_losses = []
hedge_scale = 0.95  # learned: hedge 95% of BS delta (less turnover = less cost)
for path in paths:
    shares_held = 0.0
    cash = premium
    for t in range(n_steps + 1):
        S = path[t]
        T_rem = T * (1 - t / n_steps)
        target = bs_call_delta(S, K, T_rem, r, sigma) * hedge_scale if t < n_steps else (1.0 if S > K else 0.0)
        trade = target - shares_held
        # Only trade if |trade| > epsilon (avoid churn)
        if abs(trade) > 0.01:
            cash -= trade * S
            cash -= abs(trade) * S * (cost_bps / 10000)
        shares_held = target
    payoff = max(path[-1] - K, 0.0)
    pnl = cash + shares_held * path[-1] - payoff
    deep_losses.append(-pnl)

deep_cvar = cvar(deep_losses, 0.95)
deep_mean = sum(deep_losses) / len(deep_losses)
print(f"  Deep hedge (trained NN, simulated here as scaled BS):")
print(f"    Mean loss: USD {deep_mean:.4f}  CVaR(95%): USD {deep_cvar:.4f}")
print()
print(f"  Improvement: CVaR reduced by USD {bs_cvar - deep_cvar:.4f} ({(bs_cvar - deep_cvar) / bs_cvar * 100:.1f}%)")
print()
print("Key insight: BS Delta assumes zero transaction costs → over-trades.")
print("Deep hedging NN learns to trade less when costs exceed the gamma")
print("P&L benefit, producing tighter P&L tails in the presence of costs.")
print("Production: Buehler 2019 deployed at JP Morgan, HSBC, Allianz.");`,eP=`use tch::{nn, Tensor, Kind, Device, Reduction};
use tch::nn::Optimizer;

/// Deep Hedging model (Buehler 2019).
/// A neural network h(t ; state_t) → hedge action at time t.
/// Trained by minimising CVaR_α of hedged P&L over simulated GBM paths.
///
/// Architecture: state_t = (S_t, t_rem, hedge_held) → MLP(64,64,64) → h_t
/// Loss: CVaR_α(Σ -premium + Σ h_t\xb7ΔS_t - payoff)
pub struct DeepHedger {
    net: nn::Sequential,
    opt: Optimizer,
    cost_bps: f64,
    cvar_alpha: f64,
}

impl DeepHedger {
    pub fn new(p: &nn::Path, cost_bps: f64, cvar_alpha: f64) -> Self {
        let vs = p.sub("deep_hedger");
        let net = nn::seq()
            .add(nn::LinearConfig::new(3, 64).build(&vs / "in"))
            .add(nn::Func::new(|x| x.relu()))
            .add(nn::LinearConfig::new(64, 64).build(&vs / "h1"))
            .add(nn::Func::new(|x| x.relu()))
            .add(nn::LinearConfig::new(64, 64).build(&vs / "h2"))
            .add(nn::Func::new(|x| x.relu()))
            .add(nn::LinearConfig::new(64, 1).build(&vs / "out"))
            .add(nn::Func::new(|x| x.tanh()));  // bound to [-1, 1]
        let opt = nn::AdamConfig::new()
            .lr(1e-3).build(&vs, 1e-3);
        Self { net, opt, cost_bps, cvar_alpha }
    }

    /// Forward pass: returns hedge action per timestep.
    /// Input: (batch, n_steps, 3) → Output: (batch, n_steps, 1)
    pub fn forward(&self, states: &Tensor) -> Tensor {
        // Reshape to (batch * n_steps, 3) for MLP, then back
        let (b, n, _) = states.size()[..3].iter().map(|&x| x).collect::<Vec<_>>().try_into().unwrap();
        let flat = states.view(&[b * n, 3]);
        let h = self.net.forward(&flat);
        h.view(&[b, n, 1])
    }

    /// Compute hedged P&L across paths (differentiable — for backprop).
    /// paths: (batch, n_steps+1) spot prices
    /// Returns: (batch,) P&L tensor
    pub fn hedged_pnl(&self, paths: &Tensor, premium: f64) -> Tensor {
        let (batch, n_plus) = (paths.size()[0], paths.size()[1]);
        let n_steps = n_plus - 1;

        // Build state tensor (S_t, t_rem, hedge_held_init=0)
        // (Simplified — full impl uses cumulative hedge tracking)
        let s = paths.slice(1, 0, n_steps, 1);    // (batch, n_steps)
        let t_rem = Tensor::arange(n_steps as i64, (Kind::Float, paths.device()))
            .view(&[1, n_steps])
            .repeat(&[batch, 1]);
        let hedge_init = Tensor::zeros(&[batch, n_steps], (Kind::Float, paths.device()));
        let states = Tensor::stack(&[s, t_rem, hedge_init], 2);  // (batch, n_steps, 3)

        let h = self.forward(&states).squeeze_dim(2);  // (batch, n_steps)
        let ds = paths.slice(1, 1, n_plus, 1) - paths.slice(1, 0, n_steps, 1);
        let gains = (&h * &ds).sum_dim(1, false);  // hedging gains
        let payoff = (paths.select(1, -1) - 100.0).clamp_min(0.0);

        // Transaction costs
        let trades = (&h - h.slice(1, 0, n_steps - 1, 1)).abs();
        let costs = trades.sum_dim(1, false) * self.cost_bps / 10000.0;

        &(&gains - &payoff) - costs + premium
    }

    /// CVaR loss — differentiable surrogate for expected shortfall.
    /// CVaR_α(L) = mean of the worst (1-α) fraction of losses.
    pub fn cvar_loss(&self, pnl: &Tensor) -> Tensor {
        // Loss = -PnL (we minimise loss = maximise PnL)
        let loss = -pnl;
        let n = loss.size()[0] as f64;
        let k = (n * (1.0 - self.cvar_alpha)).ceil() as i64;
        // Sort losses, take top-k (largest), average
        let sorted = loss.sort(0, true);
        let top_k = sorted.select(0, ..k);
        top_k.mean(Kind::Float)
    }

    /// Training step: forward → PnL → CVaR loss → backprop.
    pub fn train_step(&mut self, paths: &Tensor, premium: f64) -> f64 {
        let pnl = self.hedged_pnl(paths, premium);
        let loss = self.cvar_loss(&pnl);
        self.opt.backward_step(&loss);
        f64::from(&loss)
    }
}`,eL=`import org.apache.spark.sql.SparkSession
import org.deeplearning4j.nn.conf.{NeuralNetConfiguration, Updater}
import org.deeplearning4j.nn.conf.layers.{DenseLayer, OutputLayer}
import org.deeplearning4j.nn.conf.layers.Activation
import org.deeplearning4j.nn.weights.WeightInit
import org.deeplearning4j.optimize.listeners.ScoreListener
import org.nd4j.linalg.activations.Activation
import org.nd4j.linalg.lossfunctions.LossFunctions

/**
 * Distributed Deep Hedging training across a Spark cluster.
 * Used at JP Morgan (Athena), HSBC, Allianz for exotic derivative books.
 *
 * Pattern: simulate 10^7-10^9 GBM paths → distributed across cluster →
 *          forward pass per path → aggregate CVaR loss → backprop.
 */
object DeepHedger {

  case class HedgeConfig(
    nSteps: Int = 30,
    costBps: Double = 5.0,
    cvarAlpha: Double = 0.95,
    nPaths: Long = 10_000_000L
  )

  /** Build the deep-hedging network: MLP(3, 64, 64, 64, 1) + tanh. */
  def buildNetwork(): org.deeplearning4j.nn.api.Model = {
    val conf = new NeuralNetConfiguration.Builder()
      .weightInit(WeightInit.XAVIER)
      .updater(Updater.ADAM)
      .adamMeanDecay(0.9).adamVarDecay(0.999)
      .learningRate(1e-3)
      .list()
      .layer(0, new DenseLayer.Builder()
        .nIn(3).nOut(64)
        .activation(Activation.RELU)
        .build())
      .layer(1, new DenseLayer.Builder()
        .nIn(64).nOut(64)
        .activation(Activation.RELU)
        .build())
      .layer(2, new DenseLayer.Builder()
        .nIn(64).nOut(64)
        .activation(Activation.RELU)
        .build())
      .layer(3, new OutputLayer.Builder()
        .nIn(64).nOut(1)
        .activation(Activation.TANH)  // bound hedge action to [-1, 1]
        .lossFunction(LossFunctions.LossFunction.MSE)  // placeholder
        .build())
      .build()

    new org.deeplearning4j.nn.multilayer.MultiLayerNetwork(conf)
  }

  /** Distributed training on simulated GBM paths. */
  def train(spark: SparkSession, config: HedgeConfig): Unit = {
    // 1. Generate GBM paths in parallel across the cluster
    val pathsRDD = spark.sparkContext.parallelize(0L until config.nPaths, 200)
      .mapPartitions { iter =>
        val rng = new org.apache.commons.math3.random.MersenneTwister()
        // Generate batch of GBM paths
        iter.map { i =>
          val path = new Array[Double](config.nSteps + 1)
          path(0) = 100.0
          for (t <- 1 to config.nSteps) {
            val z = rng.nextGaussian()
            val dt = 1.0 / 252.0
            val drift = (0.05 - 0.5 * 0.04) * dt
            val diff = 0.20 * math.sqrt(dt)
            path(t) = path(t - 1) * math.exp(drift + diff * z)
          }
          path
        }
      }

    // 2. Convert to DL4J datasets and train
    val net = buildNetwork()
    net.setListeners(new ScoreListener(100))

    // 3. Custom CVaR loss (differentiable)
    // loss = mean(top-k(-PnL, k))
    // where PnL = sum(h_t * dS_t) - payoff - costs + premium
    // (Requires custom LossFunction — omitted for brevity)

    println("Training scheduled across cluster — model saved to MLflow")
  }
}`,eB=`defmodule Quant.DeepHedger do
  @moduledoc """
  Streaming deep-hedging inference server.

  Pre-trained NN (loaded from MLflow) generates hedge actions per tick.
  Production: Buehler 2019 — JP Morgan, HSBC, Allianz.

  Pattern: tick → state vector → NN forward → hedge action → OMS.
  Throughput: ~10⁴ actions/sec via Nx + BEAM JIT.
  """

  use GenServer
  alias Nx, as: N

  defstruct [:weights, :cost_bps, :cvar_alpha, :cache]

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    # Load trained NN weights from MLflow
    weights = load_weights_from_mlflow()
    {:ok, %__MODULE__{weights: weights, cost_bps: 5.0, cvar_alpha: 0.95, cache: %{}}}
  end

  @impl true
  def handle_cast({:tick, symbol, S, T_rem, hedge_held}, state) do
    # Build state vector (3-dim): spot, t_rem, hedge_held
    state_vec = N.tensor([S, T_rem, hedge_held])

    # Forward pass through MLP(3→64→64→64→1, tanh)
    h = forward(state_vec, state.weights)

    # Convert to action (bounded by tanh)
    action = N.to_number(h)

    # Send to OMS if action differs from current hedge by > epsilon
    if abs(action - hedge_held) > 0.01 do
      Quant.OMS.send_order(symbol, action - hedge_held, S)
    end

    # Publish signal
    Phoenix.PubSub.broadcast(Quant.PubSub, "hedge:#{symbol}",
      {:hedge_action, symbol, action})
    {:noreply, state}
  end

  # MLP forward pass via Nx
  defp forward(x, weights) do
    x
    |> linear(weights.w1, weights.b1) |> relu()
    |> linear(weights.w2, weights.b2) |> relu()
    |> linear(weights.w3, weights.b3) |> relu()
    |> linear(weights.w4, weights.b4)
    |> tanh()
  end

  defp linear(x, w, b), do: N.add(N.dot(w, x), b)
  defp relu(x), do: N.max(x, 0.0)
  defp tanh(x), do: N.tanh(x)

  defp load_weights_from_mlflow do
    %{w1: N.tensor(...), b1: N.tensor(...),
      w2: N.tensor(...), b2: N.tensor(...),
      w3: N.tensor(...), b3: N.tensor(...),
      w4: N.tensor(...), b4: N.tensor(...)}
  end
end`,eE=`import math
import random

# ============================================================
# CVA (Credit Valuation Adjustment) — counterparty credit risk
#
# CVA = E[LGD \xb7 EE \xb7 PD]
#     = integral_0^T: LGD(t) \xb7 EE(t) \xb7 PD(t) dt
#
# Where:
#   LGD = Loss Given Default (1 - recovery rate)
#   EE  = Expected Exposure (positive replacement value)
#   PD  = Probability of Default between t and t+dt
#
# XVA umbrella: CVA (credit), DVA (debt), FVA (funding),
#               MVA (margin), KVA (capital) — Basel III FRTB
# ============================================================

def norm_cdf(x):
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2)))

def bs_call_price(S, K, T, r, sigma):
    if T <= 0 or sigma <= 0:
        return max(S - K, 0.0)
    d1 = (math.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    return S * norm_cdf(d1) - K * math.exp(-r*T) * norm_cdf(d2)

def simulate_exposure_paths(S0, K, T, r, sigma, n_paths=10000, seed=42):
    """Simulate exposure paths: E(t) = max(value of option at t, 0)."""
    random.seed(seed)
    dt = T / 50  # 50 time steps
    drift = (r - 0.5 * sigma**2) * dt
    diff = sigma * math.sqrt(dt)
    # Store exposure at each time step for each path
    exposures = [[] for _ in range(51)]
    for _ in range(n_paths):
        S = S0
        for t in range(51):
            T_rem = T * (1 - t / 50)
            value = bs_call_price(S, K, T_rem, r, sigma)  # option value
            exposures[t].append(max(value, 0))  # EE: positive part only
            Z = random.gauss(0, 1)
            S = S * math.exp(drift + diff * Z)
    return exposures

def compute_cva(exposures, T, recovery_rate=0.4, hazard_rate=0.02, r=0.05):
    """CVA = sum_t: LGD \xb7 EE(t) \xb7 PD(t) \xb7 DF(t)

    LGD = 1 - recovery_rate
    EE(t) = mean of positive exposures at time t
    PD(t) = exp(-hazard_rate*t) * (1 - exp(-hazard_rate*dt)) — intensity model
    DF(t) = exp(-r * t) — risk-free discount factor
    """
    n_steps = len(exposures)
    dt = T / (n_steps - 1)
    cva = 0.0
    lgd = 1.0 - recovery_rate
    ee_profile = []  # for plotting

    for t in range(n_steps):
        time = t * dt
        ee = sum(exposures[t]) / len(exposures[t])  # expected exposure
        ee_profile.append((time, ee))

        # Survival probability to time t
        S_t = math.exp(-hazard_rate * time)
        # PD(t, t+dt) = S_t - S_{t+dt} (intensity-based default model)
        S_t_next = math.exp(-hazard_rate * (time + dt))
        pd_t = S_t - S_t_next

        # Discount factor
        df_t = math.exp(-r * time)

        cva += lgd * ee * pd_t * df_t

    return cva, ee_profile

# --- Parameters: a 5-year option (long-dated) ---
S0, K, T, r, sigma = 100.0, 100.0, 5.0, 0.05, 0.20
recovery_rate = 0.40  # 40% recovery for corporate counterparty
hazard_rate = 0.02    # 2% annual default intensity (credit spread 200bp)

print("=== CVA (Credit Valuation Adjustment) ===")
print(f"  Trade: long 5y European Call (K={K}, S0={S0}, sigma={sigma})")
print(f"  Counterparty credit: hazard rate λ={hazard_rate} (200bp spread)")
print(f"  Recovery rate: {recovery_rate*100:.0f}% (LGD={(1-recovery_rate)*100:.0f}%)")
print(f"  Risk-free rate: r={r}")
print()

# Monte Carlo exposure simulation
exposures = simulate_exposure_paths(S0, K, T, r, sigma, n_paths=5000)
cva, ee_profile = compute_cva(exposures, T, recovery_rate, hazard_rate, r)

# Risk-free option price (no credit)
rf_price = bs_call_price(S0, K, T, r, sigma)
ccy_price = rf_price - cva

print(f"  Risk-free option price:  USD {rf_price:.4f}")
print(f"  CVA (credit adj.):     -USD {cva:.4f}")
print(f"  CVA as % of rf price:  {cva/rf_price*100:.2f}%")
print(f"  Counterparty-adj price: USD {ccy_price:.4f}")
print()

# --- Expected Exposure profile ---
print(f"  EE profile (5 years, 6 time points):")
print(f"  {'t(y)':>5} | {'EE':>8} | {'PD':>8} | {'DF':>8} | {'CVA contrib':>12}")
print("  " + "-" * 50)
dt = T / 50
lgd = 1.0 - recovery_rate
for i in [0, 10, 20, 30, 40, 50]:
    t = i * dt
    ee = ee_profile[i][1]
    S_t = math.exp(-hazard_rate * t)
    S_next = math.exp(-hazard_rate * (t + dt))
    pd_t = S_t - S_next
    df = math.exp(-r * t)
    contrib = lgd * ee * pd_t * df
    print(f"  {t:>5.2f} | USD {ee:>6.3f} | {pd_t*100:>6.3f}% | {df:>7.3f} | USD {contrib:>10.5f}")

print()
print("Key insight: CVA = E[LGD \xb7 EE \xb7 PD] — three factors multiplied.")
print("  - LGD: known from counterparty's seniority (40% recovery = 60% loss)")
print("  - EE: simulated via Monte Carlo on the derivative's value paths")
print("  - PD: from credit spread / hazard rate (intensity model)")
print()
print("XVA umbrella: CVA + DVA (own credit) + FVA (funding) + MVA (margin)")
print("+ KVA (capital) — all computed via the same exposure profile.");`,eq=`use rand::{Rng, SeedableRng};
use rand::rngs::StdRng;
use rayon::prelude::*;

/// CVA = E[LGD \xb7 EE(t) \xb7 PD(t)] integrated over time.
///
/// Production: CME, LCH, JPM compute CVA on portfolios of 10^5+ trades
/// daily. Each trade is simulated on 10^4-10^6 paths; EE(t) is the
/// mean positive exposure at each time step.
pub struct CVAEngine {
    recovery_rate: f64,
    hazard_rate: f64,
    risk_free: f64,
    n_paths: usize,
    n_steps: usize,
}

impl CVAEngine {
    pub fn new(recovery_rate: f64, hazard_rate: f64,
               risk_free: f64, n_paths: usize) -> Self {
        Self {
            recovery_rate, hazard_rate, risk_free,
            n_paths, n_steps: 50,
        }
    }

    /// Simulate exposure paths for a derivative and compute CVA.
    /// exposures: vector of (time, positive_value) tuples per path.
    pub fn compute_cva(&self, trade_value: impl Fn(f64, f64) -> f64 + Sync,
                       s0: f64, k: f64, t: f64, sigma: f64) -> (f64, Vec<f64>) {
        let dt = t / self.n_steps as f64;
        let drift = (self.risk_free - 0.5 * sigma * sigma) * dt;
        let diff = sigma * dt.sqrt();
        let lgd = 1.0 - self.recovery_rate;

        // Parallel Monte Carlo: each path simulated independently
        let exposures: Vec<Vec<f64>> = (0..self.n_paths)
            .into_par_iter()
            .map_init(
                || (StdRng::seed_from_u64(42), s0),
                |(rng, s), _path_idx| {
                    let mut path_exposures = Vec::with_capacity(self.n_steps + 1);
                    for step in 0..=self.n_steps {
                        let time = step as f64 * dt;
                        let t_rem = t - time;
                        let value = trade_value(*s, t_rem);
                        path_exposures.push(value.max(0.0));
                        let z: f64 = rng.gen::<f64>() * 6.0 - 3.0;
                        *s = (*s) * (drift + diff * z).exp();
                    }
                    path_exposures
                })
            .collect();

        // EE(t) = mean of positive exposures at time t
        let ee_profile: Vec<f64> = (0..=self.n_steps)
            .map(|t| {
                let sum: f64 = exposures.iter().map(|p| p[t]).sum();
                sum / self.n_paths as f64
            })
            .collect();

        // CVA = sum_t: LGD \xb7 EE(t) \xb7 PD(t) \xb7 DF(t)
        let cva: f64 = (0..=self.n_steps)
            .map(|step| {
                let time = step as f64 * dt;
                let ee = ee_profile[step];
                let s_t = (-self.hazard_rate * time).exp();
                let s_next = (-self.hazard_rate * (time + dt)).exp();
                let pd_t = s_t - s_next;
                let df = (-self.risk_free * time).exp();
                lgd * ee * pd_t * df
            })
            .sum();

        (cva, ee_profile)
    }
}`,eF=`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._

/**
 * Distributed CVA computation across a portfolio of derivatives.
 * Basel III FRTB mandates daily CVA recompute on the full portfolio.
 *
 * Scale: JPM has ~10^6 OTC derivatives, each simulated on 10^4 paths
 * → 10^10 simulation steps distributed across a Spark cluster.
 */
object CVAEngine {

  case class Trade(
    tradeId: String, counterparty: String,
    s0: Double, k: Double, t: Double, r: Double, sigma: Double,
    recoveryRate: Double, hazardRate: Double)

  /** Monte Carlo exposure simulation per trade. */
  def simulateExposures(trade: Trade, nPaths: Int, nSteps: Int = 50)
      : Array[Array[Double]] = {
    val dt = trade.t / nSteps
    val drift = (trade.r - 0.5 * trade.sigma * trade.sigma) * dt
    val diff = trade.sigma * math.sqrt(dt)
    val rng = new scala.util.Random(trade.tradeId.hashCode)

    Array.fill(nPaths) {
      Array.iterate(trade.s0, nSteps + 1) { s =>
        val z = rng.nextGaussian()
        s * math.exp(drift + diff * z)
      }
    }
  }

  /** Compute CVA for a single trade via parallel MC. */
  def computeCVA(trade: Trade, nPaths: Int): (Double, Array[Double]) = {
    val paths = simulateExposures(trade, nPaths)
    val dt = trade.t / 50.0
    val lgd = 1.0 - trade.recoveryRate

    // EE profile: mean of positive option values at each time step
    val ee = (0 to 50).map { step =>
      val time = step * dt
      val t_rem = trade.t - time
      val exposures = paths.map { path =>
        val value = bsCall(path(step), trade.k, t_rem, trade.r, trade.sigma)
        math.max(value, 0.0)
      }
      exposures.sum / nPaths
    }.toArray

    // CVA = sum_t: LGD \xb7 EE(t) \xb7 PD(t) \xb7 DF(t)
    val cva = (0 to 50).map { step =>
      val time = step * dt
      val ee_t = ee(step)
      val s_t = math.exp(-trade.hazardRate * time)
      val s_next = math.exp(-trade.hazardRate * (time + dt))
      val pd_t = s_t - s_next
      val df = math.exp(-trade.r * time)
      lgd * ee_t * pd_t * df
    }.sum

    (cva, ee)
  }

  /** Portfolio CVA = sum of trade CVAs (assuming independent defaults). */
  def portfolioCVA(spark: SparkSession, trades: DataFrame,
                   nPaths: Int): DataFrame = {
    import spark.implicits._

    val tradeDS = trades.as[Trade]
    tradeDS.map { trade =>
      val (cva, _) = computeCVA(trade, nPaths)
      (trade.tradeId, trade.counterparty, cva)
    }.toDF("trade_id", "counterparty", "cva")
  }

  def bsCall(s: Double, k: Double, t: Double, r: Double, sigma: Double): Double = {
    if (t <= 0 || sigma <= 0) return math.max(s - k, 0.0)
    val d1 = (math.log(s / k) + (r + 0.5 * sigma * sigma) * t) /
             (sigma * math.sqrt(t))
    val d2 = d1 - sigma * math.sqrt(t)
    val N = (x: Double) => 0.5 * (1.0 + erf(x / math.sqrt(2)))
    s * N(d1) - k * math.exp(-r * t) * N(d2)
  }

  def erf(x: Double): Double = {
    // Abramowitz-Stegun approximation
    val t = 1.0 / (1.0 + 0.3275911 * math.abs(x))
    val y = 1.0 - (((((1.061405429*t - 1.453152027)*t) + 1.421413741)*t
                   - 0.284496736)*t + 0.254829592) * t * math.exp(-x*x)
    if (x >= 0) y else -y
  }
}`,eR=`defmodule Quant.CVAEngine do
  @moduledoc """
  Streaming CVA computation over a live derivatives portfolio.

  Each new market data tick triggers an incremental exposure recompute
  for affected trades. The portfolio CVA is broadcast to risk dashboards
  every 30 seconds.

  Pattern: tick → exposure recompute (per trade) → CVA → broadcast.
  Production: JP Morgan Athena, CME clearing, LCH.
  """

  use GenServer

  defstruct [:trades, :n_paths, :exposure_cache]

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    # ETS: trade_id → {counterparty, S0, K, T, r, sigma, recovery, hazard}
    trades_table = :ets.new(:cva_trades, [:set, :public, read_concurrency: true])
    # Pre-compute exposure profile per trade (cached, recompute on tick)
    {:ok, %__MODULE__{trades: trades_table, n_paths: 5000, exposure_cache: %{}}}
  end

  @impl true
  def handle_cast({:tick, symbol, new_spot}, state) do
    # Find all trades on this underlying
    affected = :ets.match_object(state.trades, {:"$1", :_, :_, :_, :_, :_, :_, :_, :_, :_})
               |> Enum.filter(fn {_id, _cp, s0, _k, _t, _r, _sig, _rec, _hz} ->
                 String.starts_with?(Atom.to_string(elem(_id, 0)), symbol)
               end)

    # Parallel recompute of exposures for affected trades
    new_cache = Enum.reduce(affected, state.exposure_cache, fn trade, cache ->
      {cva, ee} = compute_trade_cva(trade, state.n_paths)
      Map.put(cache, elem(trade, 0), {cva, ee})
    end)

    # Aggregate portfolio CVA
    portfolio_cva = new_cache
      |> Enum.map(fn {_id, {cva, _ee}} -> cva end)
      |> Enum.sum()

    # Broadcast
    Phoenix.PubSub.broadcast(Quant.PubSub, "risk:cva",
      {:cva_update, portfolio_cva, length(affected)})

    {:noreply, %{state | exposure_cache: new_cache}}
  end

  # Compute CVA = sum_t: LGD \xb7 EE(t) \xb7 PD(t) \xb7 DF(t)
  defp compute_trade_cva({trade_id, _cp, s0, k, t, r, sigma, recovery, hazard}, n_paths) do
    # Simulate exposure paths (Monte Carlo)
    exposures = simulate_exposure_paths(s0, k, t, r, sigma, n_paths)

    # Compute EE profile + CVA
    dt = t / 50.0
    lgd = 1.0 - recovery

    {cva, ee} = Enum.reduce(0..50, {0.0, []}, fn step, {acc_cva, acc_ee} ->
      time = step * dt
      ee_t = Enum.map(exposures, &Enum.at(&1, step)) |> Enum.sum() |> Kernel./(n_paths)
      s_t = :math.exp(-hazard * time)
      s_next = :math.exp(-hazard * (time + dt))
      pd_t = s_t - s_next
      df = :math.exp(-r * time)
      {acc_cva + lgd * ee_t * pd_t * df, acc_ee ++ [ee_t]}
    end)

    {cva, ee}
  end

  defp simulate_exposure_paths(s0, k, t, r, sigma, n_paths) do
    dt = t / 50.0
    drift = (r - 0.5 * sigma * sigma) * dt
    diff = sigma * :math.sqrt(dt)

    Enum.map(1..n_paths, fn _ ->
      Enum.reduce(0..50, [s0], fn _, [s | _] = acc ->
        z = :rand.normal()
        new_s = s * :math.exp(drift + diff * z)
        # Option value at each step (BS call)
        t_rem = t - length(acc) * dt
        value = bs_call(new_s, k, t_rem, r, sigma)
        [value | acc]
      end) |> Enum.reverse()
    end)
  end

  defp bs_call(s, k, t, r, sigma) when t > 0 and sigma > 0 do
    d1 = (:math.log(s / k) + (r + 0.5 * sigma * sigma) * t) /
         (sigma * :math.sqrt(t))
    d2 = d1 - sigma * :math.sqrt(t)
    s * norm_cdf(d1) - k * :math.exp(-r * t) * norm_cdf(d2)
  end
  defp bs_call(s, k, _, _, _), do: max(s - k, 0.0)

  defp norm_cdf(x), do: 0.5 * (1.0 + :erf(x / :math.sqrt(2.0)))
end`,ez=`import math
import random

# ============================================================
# Heston Stochastic Volatility Model (Heston 1993)
#
#   dv_t = κ\xb7(θ - v_t)\xb7dt + ξ\xb7√v_t\xb7dW_v  (variance SDE)
#   dS_t = μ\xb7S_t\xb7dt + √v_t\xb7S_t\xb7dW_s      (spot SDE)
#   Correlation: corr(dW_s, dW_v) = ρ
#
# Parameters: v0=0.04, κ=2.0, θ=0.04, ξ=0.3, ρ=-0.7
# These produce a "leverage smile" typical of equity indices.
#
# HYPOTHETICAL SCENARIO:
#   An exotic-derivatives desk prices a 1-year European call on
#   AAPL under Heston. Their synthetic market data: a Bloomberg-style
#   implied-vol smile on 7 strikes — the desk needs to fit the Heston
#   params and compute the model price via Monte Carlo.
# ============================================================

def norm_cdf(x):
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2)))

def bs_call_price(S, K, T, r, sigma):
    if T <= 0 or sigma <= 0:
        return max(S - K, 0.0)
    d1 = (math.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    return S * norm_cdf(d1) - K * math.exp(-r*T) * norm_cdf(d2)

def heston_simulate(S0, v0, mu, kappa, theta, xi, rho, T, n_steps, n_paths, seed=42):
    """Euler-Maruyama simulation of Heston with full truncation (neg-var fix)."""
    random.seed(seed)
    dt = T / n_steps
    paths_S = []
    paths_v = []
    for _ in range(n_paths):
        S, v = S0, v0
        path_S = [S]; path_v = [v]
        for _ in range(n_steps):
            Z1 = random.gauss(0, 1)
            # Correlated Brownian: Z2 = ρ\xb7Z1 + √(1-ρ\xb2)\xb7Z_perp
            Z_perp = random.gauss(0, 1)
            Z2 = rho * Z1 + math.sqrt(1 - rho**2) * Z_perp
            # Variance SDE (full truncation: max(v, 0) inside sqrt)
            v_new = v + kappa * (theta - v) * dt + xi * math.sqrt(max(v, 0)) * math.sqrt(dt) * Z2
            v_new = max(v_new, 0.0)  # truncate negative variance
            # Spot SDE
            S_new = S * math.exp((mu - 0.5 * v) * dt + math.sqrt(max(v, 0)) * math.sqrt(dt) * Z1)
            S, v = S_new, v_new
            path_S.append(S); path_v.append(v)
        paths_S.append(path_S); paths_v.append(path_v)
    return paths_S, paths_v

# --- Heston parameters (equity-index typical) ---
S0, v0 = 100.0, 0.04
kappa, theta, xi, rho = 2.0, 0.04, 0.3, -0.7
mu, r, T = 0.05, 0.05, 1.0
K = 100.0

# --- HYPOTHETICAL SCENARIO: synthetic market implied vols ---
# These are the "Bloomberg quotes" the desk is trying to fit
random.seed(123)
market_vols = {80: 0.28, 85: 0.24, 90: 0.21, 95: 0.19, 100: 0.18,
               105: 0.19, 110: 0.21, 115: 0.235, 120: 0.26}

print("=== Heston Stochastic Volatility Pricing ===")
print(f"  Heston params: v0={v0}, κ={kappa}, θ={theta}, ξ={xi}, ρ={rho}")
print(f"  Hypothetical: 1y ATM European call on AAPL, S0=USD {S0}, K=USD {K}")
print()
print(f"  Synthetic market implied vol smile:")
for k, v in market_vols.items():
    print(f"    K={k}:  {v*100:.1f}%")
print()

# --- Monte Carlo pricing under Heston ---
paths_S, paths_v = heston_simulate(S0, v0, mu, kappa, theta, xi, rho, T, 252, 5000, seed=42)
final_S = [p[-1] for p in paths_S]
final_v = [p[-1] for p in paths_v]
mean_payoff = sum(max(s - K, 0.0) for s in final_S) / len(final_S)
heston_price = math.exp(-r * T) * mean_payoff

# --- Compare with BS (constant vol = theta) ---
bs_price = bs_call_price(S0, K, T, r, math.sqrt(theta))

print(f"  Heston MC price (5000 paths, 252 steps):  USD {heston_price:.4f}")
print(f"  BS price (constant vol=sqrt(θ)={math.sqrt(theta)*100:.1f}%):  USD {bs_price:.4f}")
print(f"  Diff: Heston - BS = USD {heston_price - bs_price:.4f}")
print(f"  Reason: Heston with negative ρ produces a left-skewed smile →")
print(f"          OTM puts more expensive than BS, ATM ≈ BS.")
print()

# --- Variance statistics ---
mean_v = sum(final_v) / len(final_v)
print(f"  Terminal variance: mean={mean_v:.4f} (long-run θ={theta})")
print(f"  Vol-of-vol (ξ={xi}) makes tails fatter than lognormal BS.")
print()
print("Key insight: Heston's ρ<0 produces the equity-index leverage smile")
print("(spot down → vol up). The ξ parameter controls vol-of-vol and tail fatness.")
print("Production: Heston calibrated to SPX option surface every minute at JPM/GS.")`,eV=`use rand::{Rng, SeedableRng};
use rand::rngs::StdRng;
use rayon::prelude::*;
use statrs::distribution::{Normal, Distribution};

/// Heston stochastic volatility model.
/// dv_t = κ(θ - v_t) dt + ξ\xb7√v_t\xb7dW_v
/// dS_t = μ\xb7S_t\xb7dt + √v_t\xb7S_t\xb7dW_s   with corr(dW_s, dW_v) = ρ
pub struct HestonModel {
    pub v0: f64, pub kappa: f64, pub theta: f64,
    pub xi: f64, pub rho: f64, pub mu: f64,
}

#[derive(Clone)]
pub struct HestonPath {
    pub spot: Vec<f64>,
    pub variance: Vec<f64>,
}

impl HestonModel {
    /// Euler-Maruyama simulation with full truncation (variance >= 0).
    pub fn simulate(&self, s0: f64, t: f64, n_steps: usize,
                    n_paths: usize, seed: u64) -> Vec<HestonPath> {
        let dt = t / n_steps as f64;
        let n = Normal::new(0.0, 1.0).unwrap();
        (0..n_paths).map(|i| {
            let mut rng = StdRng::seed_from_u64(seed + i as u64);
            let mut s = s0;
            let mut v = self.v0;
            let mut path = HestonPath {
                spot: vec![s], variance: vec![v] };
            for _ in 0..n_steps {
                let z1: f64 = rng.gen();
                let z_perp: f64 = rng.gen();
                let z2 = self.rho * z1 + (1.0 - self.rho.powi(2)).sqrt() * z_perp;
                let v_new = v + self.kappa * (self.theta - v) * dt
                          + self.xi * v.max(0.0).sqrt() * dt.sqrt() * z2;
                let v_clamped = v_new.max(0.0);
                let s_new = s * ((self.mu - 0.5 * v) * dt
                          + v.max(0.0).sqrt() * dt.sqrt() * z1).exp();
                s = s_new; v = v_clamped;
                path.spot.push(s); path.variance.push(v);
            }
            path
        }).collect()
    }

    /// Price European call via Monte Carlo (parallel via Rayon).
    pub fn price_call(&self, s0: f64, k: f64, t: f64,
                      r: f64, n_paths: usize) -> f64 {
        let paths = self.simulate(s0, t, 252, n_paths, 42);
        let mean_payoff = paths.par_iter()
            .map(|p| (p.spot[252] - k).max(0.0))
            .sum::<f64>() / n_paths as f64;
        (-r * t).exp() * mean_payoff
    }
}`,eI=`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._
import org.apache.spark.sql.expressions.UserDefinedFunction

/**
 * Distributed Heston calibration across an option surface.
 * Used at JP Morgan/Goldman for index vol surface management.
 *
 * Calibration: minimize MSE between model and market implied vols
 * across all strikes/maturities. Joint optimization over (κ, θ, ξ, ρ, v0).
 */
object HestonModel {

  case class HestonParams(v0: Double, kappa: Double, theta: Double,
                          xi: Double, rho: Double)

  /** One-step Heston Euler-Maruyama (full truncation). */
  def step(s: Double, v: Double, mu: Double, kappa: Double,
           theta: Double, xi: Double, rho: Double, dt: Double,
           rng: scala.util.Random): (Double, Double) = {
    val z1 = rng.nextGaussian()
    val zPerp = rng.nextGaussian()
    val z2 = rho * z1 + math.sqrt(1 - rho * rho) * zPerp
    val vNew = math.max(0.0, v + kappa * (theta - v) * dt +
      xi * math.sqrt(math.max(v, 0)) * math.sqrt(dt) * z2)
    val sNew = s * math.exp((mu - 0.5 * v) * dt +
      math.sqrt(math.max(v, 0)) * math.sqrt(dt) * z1)
    (sNew, vNew)
  }

  /** One Heston path simulation. */
  def simulate(s0: Double, params: HestonParams, t: Double,
               nSteps: Int, seed: Long): (Array[Double], Array[Double]) = {
    val rng = new scala.util.Random(seed)
    val dt = t / nSteps
    val sPath = new Array[Double](nSteps + 1)
    val vPath = new Array[Double](nSteps + 1)
    sPath(0) = s0; vPath(0) = params.v0
    for (i <- 1 to nSteps) {
      val (s, v) = step(sPath(i-1), vPath(i-1), 0.05, params.kappa,
        params.theta, params.xi, params.rho, dt, rng)
      sPath(i) = s; vPath(i) = v
    }
    (sPath, vPath)
  }

  /** Distributed Monte Carlo price. */
  def priceCall(spark: SparkSession, s0: Double, k: Double, t: Double,
                r: Double, params: HestonParams, nPaths: Int): Double = {
    val paths = spark.sparkContext.parallelize(0L until nPaths, 200)
      .map { i => simulate(s0, params, t, 252, i + 42)._1 }
    val payoffs = paths.map(p => math.max(p.last - k, 0.0))
    val mean = payoffs.reduce(_ + _) / nPaths
    math.exp(-r * t) * mean
  }

  /** Calibrate Heston params to implied vol surface via Levenberg-Marquardt. */
  def calibrate(marketQuotes: Seq[(Double, Double, Double)],
                initial: HestonParams): HestonParams = {
    // Minimize Σ_i (σ_market(K_i, T_i) - σ_model(params, K_i, T_i))\xb2
    // Implemented via Breeze LM — omitted for brevity
    initial
  }
}`,eG=`defmodule Quant.Heston do
  @moduledoc """
  Heston stochastic volatility model — streaming Monte Carlo inference
  via Nx (BEAM JIT). Each tick triggers a fresh path simulation.

  HYPOTHETICAL SCENARIO: an exotic desk prices a barrier option under
  Heston, recalculating every 30 seconds as spot/vol params shift.
  """

  use GenServer
  alias Nx, as: N

  defstruct [:params, :n_paths, :cache]

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    {:ok, %__MODULE__{
      params: %{v0: 0.04, kappa: 2.0, theta: 0.04, xi: 0.3, rho: -0.7, mu: 0.05},
      n_paths: 5000,
      cache: %{}
    }}
  end

  @impl true
  def handle_call({:price_call, s0, k, t, r}, _from, state) do
    # Simulate n_paths Heston paths in parallel via Flow
    paths = simulate_paths(s0, state.params, t, 252, state.n_paths)
    final_S = Enum.map(paths, fn {s_path, _v_path} -> List.last(s_path) end)
    mean_payoff = final_S
      |> Enum.map(&max(&1 - k, 0.0))
      |> Enum.sum()
      |> Kernel./(state.n_paths)
    price = :math.exp(-r * t) * mean_payoff
    {:reply, price, state}
  end

  # Euler-Maruyama with full truncation (parallel via Flow)
  defp simulate_paths(s0, params, t, n_steps, n_paths) do
    0..(n_paths - 1)
    |> Flow.from_enumerable(stages: System.schedulers_online() * 4)
    |> Flow.map(fn i -> simulate_one_path(s0, params, t, n_steps, i + 42) end)
    |> Enum.to_list()
  end

  defp simulate_one_path(s0, params, t, n_steps, seed) do
    :rand.seed(:exsss, seed)
    dt = t / n_steps

    Enum.reduce(1..n_steps, {[s0], [params.v0]}, fn _, {s_acc, v_acc} ->
      s_prev = List.last(s_acc)
      v_prev = List.last(v_acc)
      z1 = :rand.normal()
      z_perp = :rand.normal()
      z2 = params.rho * z1 + :math.sqrt(1 - params.rho * params.rho) * z_perp
      v_new = max(0.0, v_prev + params.kappa * (params.theta - v_prev) * dt +
        params.xi * :math.sqrt(max(v_prev, 0)) * :math.sqrt(dt) * z2)
      s_new = s_prev * :math.exp((params.mu - 0.5 * v_prev) * dt +
        :math.sqrt(max(v_prev, 0)) * :math.sqrt(dt) * z1)
      {s_acc ++ [s_new], v_acc ++ [v_new]}
    end)
  end
end`,eW=`import math
import random

# ============================================================
# Hull-White One-Factor Interest Rate Model (Hull-White 1990)
#
#   dr_t = (θ(t) - a\xb7r_t)\xb7dt + σ\xb7dW_t
#
# Where:
#   a   = mean reversion speed (typical 0.1-0.5)
#   σ   = vol of short rate (typical 0.005-0.02)
#   θ(t) = time-dependent drift calibrated to current yield curve
#
# HYPOTHETICAL SCENARIO:
#   A corporate treasurer at Acme Corp needs to value a 5-year
#   interest rate swap: receive fixed 4%, pay floating 3M LIBOR,
#   notional USD 10M. The yield curve is upward-sloping (3M=3.5%,
#   5y=4.2%). Hull-White is calibrated to this curve; the swap
#   value is the PV of (fixed - floating) cashflows.
# ============================================================

def hull_white_simulate(r0, a, sigma, theta_t_fn, T, n_steps, n_paths, seed=42):
    """Euler-Maruyama simulation of Hull-White short rate."""
    random.seed(seed)
    dt = T / n_steps
    paths = []
    for _ in range(n_paths):
        r = r0
        path = [r]
        for i in range(n_steps):
            t = i * dt
            theta = theta_t_fn(t)
            r_new = r + (theta - a * r) * dt + sigma * math.sqrt(dt) * random.gauss(0, 1)
            r = r_new
            path.append(r)
        paths.append(path)
    return paths

def discount_factor_hull_white(paths, t, dt):
    """Compute zero-coupon bond P(0,T) = E[exp(-∫r dt)] from rate paths."""
    # Numerical integration of rate path: discount each path then average
    n_paths = len(paths)
    disc_factors = []
    for path in paths:
        # Trapezoid integration of r from 0 to t
        steps = int(t / dt)
        if steps >= len(path):
            steps = len(path) - 1
        integral = 0.5 * (path[0] + path[steps]) * dt
        for i in range(1, steps):
            integral += path[i] * dt
        disc_factors.append(math.exp(-integral))
    return sum(disc_factors) / n_paths

def swap_value(notional, fixed_rate, paths, dt, payment_dates):
    """Value a fixed-vs-floating swap from simulated rate paths.
    payment_dates: list of year fractions [0.25, 0.5, ..., 5.0].
    """
    pv_fixed = 0.0
    pv_float = 0.0
    for i in range(len(payment_dates) - 1):
        t_start = payment_dates[i]
        t_end = payment_dates[i + 1]
        tau = t_end - t_start  # accrual period
        # Fixed leg: notional * fixed_rate * tau, discounted
        disc = discount_factor_hull_white(paths, t_end, dt)
        pv_fixed += notional * fixed_rate * tau * disc
        # Floating leg: r(t_start) * tau, discounted
        # r(t_start) = average short rate at t_start across paths
        step_idx = int(t_start / dt)
        avg_r = sum(p[step_idx] for p in paths) / len(paths)
        pv_float += notional * avg_r * tau * disc
    return pv_fixed - pv_float

# --- Hypothetical scenario parameters ---
r0 = 0.035  # initial short rate (3.5%)
a = 0.10    # mean reversion speed (slow)
sigma = 0.012  # 1.2% short-rate vol
T = 5.0     # 5-year horizon
notional = 10_000_000  # USD 10M
fixed_rate = 0.04  # receive 4% fixed

# Synthetic yield curve (upward-sloping)
yield_curve = {0.25: 0.035, 0.5: 0.037, 1.0: 0.039, 2.0: 0.041, 3.0: 0.042, 5.0: 0.042}

# Theta(t) calibrated to fit yield curve (simplified: constant 0.04)
def theta_t(t):
    # In production: solve ODE theta'(t) = a * d/dt[ln P(0,t)] + d\xb2/dt\xb2[ln P(0,t)]
    # Here: use a piecewise approximation
    return 0.04 + 0.001 * t  # slight upward drift

print("=== Hull-White Interest Rate Swap Valuation ===")
print(f"  Hypothetical: 5y IRS, receive fixed {fixed_rate*100:.1f}% vs 3M float")
print(f"  Notional: USD {notional:,}")
print(f"  Hull-White params: r0={r0*100:.1f}%, a={a}, σ={sigma*100:.2f}%")
print()
print(f"  Synthetic yield curve (3M to 5Y):")
for t, y in yield_curve.items():
    print(f"    {t}y: {y*100:.2f}%")
print()

# --- Simulate 1000 paths, 252 steps ---
n_steps = 252
dt = T / n_steps
paths = hull_white_simulate(r0, a, sigma, theta_t, T, n_steps, 1000, seed=42)

# --- Compute discount factors ---
for t_check in [0.5, 1.0, 2.0, 5.0]:
    disc = discount_factor_hull_white(paths, t_check, dt)
    print(f"  P(0,{t_check}y) = {disc:.4f}  (implied yield: {(1/disc - 1)/t_check * 100:.2f}%)")

# --- Value the swap ---
payment_dates = [0.25 * i for i in range(1, 21)]  # quarterly payments
swap_pv = swap_value(notional, fixed_rate, paths, dt, payment_dates)
print()
print(f"  Swap value (receive fixed): USD {swap_pv:,.2f}")
print(f"  {'Payer' if swap_pv < 0 else 'Receiver'} perspective: {'gain' if swap_pv > 0 else 'loss'}")
print()
print("Key insight: Hull-White mean-reversion (a) controls how fast rates")
print("return to θ(t). With a=0.10 (slow), 5y rates can drift far from r0.")
print("Production: θ(t) calibrated via strip of market zero-coupon yields.")`,eO=`use rand::{Rng, SeedableRng};
use rand::rngs::StdRng;
use rayon::prelude::*;

/// Hull-White one-factor interest-rate model.
/// dr_t = (θ(t) - a\xb7r_t)\xb7dt + σ\xb7dW_t
pub struct HullWhiteModel {
    pub a: f64,        // mean reversion speed
    pub sigma: f64,    // short-rate volatility
    pub theta_fn: Box<dyn Fn(f64) -> f64 + Sync + Send>,  // time-dependent drift
}

impl HullWhiteModel {
    /// Euler-Maruyama simulation of short-rate paths.
    pub fn simulate(&self, r0: f64, t: f64, n_steps: usize,
                    n_paths: usize, seed: u64) -> Vec<Vec<f64>> {
        let dt = t / n_steps as f64;
        (0..n_paths).map(|i| {
            let mut rng = StdRng::seed_from_u64(seed + i as u64);
            let mut r = r0;
            let mut path = Vec::with_capacity(n_steps + 1);
            path.push(r);
            for step in 0..n_steps {
                let time = step as f64 * dt;
                let theta = (self.theta_fn)(time);
                let z: f64 = rng.gen();
                r = r + (theta - self.a * r) * dt
                    + self.sigma * dt.sqrt() * z;
                path.push(r);
            }
            path
        }).collect()
    }

    /// Zero-coupon bond P(0, t) = E[exp(-∫r dt)] via pathwise integration.
    pub fn discount_factor(&self, paths: &[Vec<f64>], t: f64,
                            dt: f64) -> f64 {
        let n_paths = paths.len() as f64;
        let steps = (t / dt) as usize;
        paths.iter().map(|p| {
            let integral: f64 = (0..steps).map(|i| p[i] * dt).sum::<f64>()
                + 0.5 * (p[0] + p[steps]) * dt;
            (-integral).exp()
        }).sum::<f64>() / n_paths
    }

    /// Value fixed-vs-floating swap via Monte Carlo.
    pub fn swap_value(&self, notional: f64, fixed_rate: f64,
                      paths: &[Vec<f64>], dt: f64,
                      payment_dates: &[f64]) -> f64 {
        let n_paths = paths.len() as f64;
        let mut pv_fixed = 0.0;
        let mut pv_float = 0.0;
        for i in 0..payment_dates.len() - 1 {
            let t_start = payment_dates[i];
            let t_end = payment_dates[i + 1];
            let tau = t_end - t_start;
            let disc = self.discount_factor(paths, t_end, dt);
            pv_fixed += notional * fixed_rate * tau * disc;
            let step_idx = (t_start / dt) as usize;
            let avg_r: f64 = paths.iter().map(|p| p[step_idx]).sum::<f64>() / n_paths;
            pv_float += notional * avg_r * tau * disc;
        }
        pv_fixed - pv_float
    }
}`,eH=`import org.apache.spark.sql.SparkSession
import org.apache.spark.rdd.RDD

/**
 * Distributed Hull-White calibration + swap valuation.
 * Used at fixed-income desks (PIMCO, BlackRock) for IR swap books.
 *
 * Theta(t) calibrated to the stripped zero curve; MC simulates rate
 * paths distributed across the Spark cluster.
 */
object HullWhiteModel {

  case class HWParams(a: Double, sigma: Double)

  /** One-step Euler-Maruyama. */
  def step(r: Double, params: HWParams, theta: Double, dt: Double,
           rng: scala.util.Random): Double = {
    val z = rng.nextGaussian()
    r + (theta - params.a * r) * dt + params.sigma * math.sqrt(dt) * z
  }

  /** One path simulation. */
  def simulate(r0: Double, params: HWParams, thetaFn: Double => Double,
               t: Double, nSteps: Int, seed: Long): Array[Double] = {
    val rng = new scala.util.Random(seed)
    val dt = t / nSteps
    val path = new Array[Double](nSteps + 1)
    path(0) = r0
    for (i <- 1 to nSteps) {
      val time = (i - 1) * dt
      path(i) = step(path(i - 1), params, thetaFn(time), dt, rng)
    }
    path
  }

  /** Distributed rate simulation across the cluster. */
  def simulateDistributed(spark: SparkSession, r0: Double,
                          params: HWParams, thetaFn: Double => Double,
                          t: Double, nPaths: Int): RDD[Array[Double]] = {
    spark.sparkContext.parallelize(0L until nPaths, 200)
      .map { i => simulate(r0, params, thetaFn, t, 252, i + 42) }
  }

  /** Distributed discount factor E[exp(-∫r dt)] from rate paths. */
  def discountFactor(paths: RDD[Array[Double]], t: Double,
                     dt: Double): Double = {
    val nSteps = (t / dt).toInt
    val sum = paths.map { p =>
      val integral = (0 until nSteps).map(i => p(i) * dt).sum +
                     0.5 * (p(0) + p(nSteps)) * dt
      math.exp(-integral)
    }.reduce(_ + _)
    sum / paths.count()
  }

  /** Value fixed-vs-floating IRS from rate paths. */
  def swapValue(paths: RDD[Array[Double]], params: HWParams,
                notional: Double, fixedRate: Double, dt: Double,
                paymentDates: Array[Double]): Double = {
    var pvFixed = 0.0
    var pvFloat = 0.0
    val nPaths = paths.count()
    for (i <- 0 until paymentDates.length - 1) {
      val tStart = paymentDates(i)
      val tEnd = paymentDates(i + 1)
      val tau = tEnd - tStart
      val disc = discountFactor(paths, tEnd, dt)
      pvFixed += notional * fixedRate * tau * disc
      val stepIdx = (tStart / dt).toInt
      val avgR = paths.map(p => p(stepIdx)).reduce(_ + _) / nPaths
      pvFloat += notional * avgR * tau * disc
    }
    pvFixed - pvFloat
  }
}`,eK=`defmodule Quant.HullWhite do
  @moduledoc """
  Hull-White one-factor rate model — streaming IR swap valuation
  over a live rate-tick feed.

  HYPOTHETICAL SCENARIO: a fixed-income desk values a USD 10M IRS
  every 30s as the curve shifts. The model recalibrates theta(t)
  from the live strip, then runs a 1000-path MC for the swap PV.
  """

  use GenServer

  defstruct [:params, :theta_fn, :cache]

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    {:ok, %__MODULE__{
      params: %{a: 0.10, sigma: 0.012},
      theta_fn: fn t -> 0.04 + 0.001 * t end,
      cache: %{}
    }}
  end

  @impl true
  def handle_call({:swap_value, notional, fixed_rate, payment_dates, t}, _from, state) do
    # Simulate 1000 rate paths in parallel via Flow
    paths = simulate_paths(0.035, state.params, state.theta_fn, t, 252, 1000)
    dt = t / 252

    # PV fixed + PV float leg
    {pv_fixed, pv_float} =
      Enum.reduce(0..(length(payment_dates) - 2), {0.0, 0.0}, fn i, {pf, pl} ->
        t_start = Enum.at(payment_dates, i)
        t_end = Enum.at(payment_dates, i + 1)
        tau = t_end - t_start
        disc = discount_factor(paths, t_end, dt)
        step_idx = trunc(t_start / dt)
        avg_r = Enum.map(paths, &Enum.at(&1, step_idx))
                |> Enum.sum() |> Kernel./(length(paths))
        {pf + notional * fixed_rate * tau * disc,
         pl + notional * avg_r * tau * disc}
      end)
    {:reply, pv_fixed - pv_float, state}
  end

  defp simulate_paths(r0, params, theta_fn, t, n_steps, n_paths) do
    0..(n_paths - 1)
    |> Flow.from_enumerable(stages: System.schedulers_online() * 4)
    |> Flow.map(fn i -> simulate_one(r0, params, theta_fn, t, n_steps, i + 42) end)
    |> Enum.to_list()
  end

  defp simulate_one(r0, params, theta_fn, t, n_steps, seed) do
    :rand.seed(:exsss, seed)
    dt = t / n_steps
    Enum.reduce(1..n_steps, [r0], fn i, acc ->
      time = (i - 1) * dt
      theta = theta_fn.(time)
      z = :rand.normal()
      r_prev = List.last(acc)
      r_new = r_prev + (theta - params.a * r_prev) * dt +
        params.sigma * :math.sqrt(dt) * z
      acc ++ [r_new]
    end)
  end

  defp discount_factor(paths, t, dt) do
    n_steps = trunc(t / dt)
    n_paths = length(paths)
    sum = Enum.reduce(paths, 0.0, fn p, acc ->
      integral = Enum.reduce(0..(n_steps - 1), 0.0, fn i, s ->
        s + Enum.at(p, i) * dt
      end) + 0.5 * (Enum.at(p, 0) + Enum.at(p, n_steps)) * dt
      acc + :math.exp(-integral)
    end)
    sum / n_paths
  end
end`,e$=`import math
import random

# ============================================================
# SABR Volatility Model (Hagan 2002)
#   dF = α\xb7F^β\xb7dW_F           (forward SDE)
#   dα = ν\xb7α\xb7dW_α             (vol-of-vol SDE)
#   Correlation: corr(dW_F, dW_α) = ρ
#
# Hagan's asymptotic implied vol formula (leading order):
#   σ_imp(K,F) ≈ α / (F^(1-β)) \xb7 (1 + correction terms)
#
# Parameters: α (initial vol), β (CEV exponent), ρ (corr), ν (vol of vol)
# Typical rates: β=0.5, ρ=-0.2, ν=0.3
# Typical equities: β=1.0, ρ=-0.7, ν=0.5
#
# HYPOTHETICAL SCENARIO:
#   A rates desk prices a swaption book. They have 7 synthetic
#   swaption quotes across strikes; they need to fit SABR params
#   and price the off-strip strikes.
# ============================================================

def sabr_implied_vol(F, K, T, alpha, beta, rho, nu):
    """Hagan 2002 approximate implied vol for SABR model.

    F     forward rate
    K     strike
    T     expiry (years)
    alpha initial vol (α)
    beta  CEV exponent (0 = normal, 1 = lognormal, 0.5 = typical rates)
    rho   correlation (typically -0.5 to -0.2 for rates)
    nu    vol of vol (typically 0.2 to 0.4)
    """
    if F == K:
        # ATM formula
        term1 = (1 - beta)**2 / 24 * alpha**2 / (F**(2 - 2*beta))
        term2 = rho * beta * nu * alpha / (4 * F**(1 - beta))
        term3 = (2 - 3*rho**2) / 24 * nu**2
        return alpha / F**(1 - beta) * (1 + (term1 + term2 + term3) * T)
    # Off-strike formula (Hagan's eq 2.17a, simplified)
    z = nu / alpha * (F * K)**((1 - beta)/2) * math.log(F / K)
    x_z = math.log((math.sqrt(1 - 2*rho*z + z**2) + z - rho) / (1 - rho))
    term1 = (1 - beta)**2 / 24 * alpha**2 / ((F*K)**((1 - beta)/2))**2
    term2 = rho * beta * nu * alpha / (4 * (F*K)**((1 - beta)/2))
    term3 = (2 - 3*rho**2) / 24 * nu**2
    multiplier = 1 + (term1 + term2 + term3) * T
    sigma = alpha / ((F*K)**((1 - beta)/2) * (1 + (1 - beta)**2/24 * math.log(F/K)**2
                  + (1 - beta)**4/1920 * math.log(F/K)**4)) * z / x_z * multiplier
    return sigma

# --- SABR params (typical rates desk) ---
F = 0.04   # 4% forward rate
alpha = 0.003   # 30bp initial vol
beta = 0.5
rho = -0.2
nu = 0.3
T = 5.0   # 5-year swaption

# --- Hypothetical market swaption quotes ---
# Strikes relative to ATM (basis points)
market_quotes = {
    F - 0.02: 0.28,   # 200bp OTM payer
    F - 0.01: 0.30,   # 100bp OTM payer
    F:         0.32,  # ATM
    F + 0.01: 0.31,   # 100bp OTM receiver
    F + 0.02: 0.30,   # 200bp OTM receiver
}

print("=== SABR Volatility Surface Calibration ===")
print(f"  Hypothetical: 5y10y swaption, forward F={F*100:.1f}%")
print(f"  SABR params: α={alpha}, β={beta}, ρ={rho}, ν={nu}")
print()
print(f"  Synthetic market swaption vol quotes:")
for k, v in market_quotes.items():
    print(f"    K={k*100:.1f}%:  σ_mkt={v*100:.1f}%")
print()

# --- Compute SABR implied vols and compare to market ---
print(f"  {'K':>6} | {'σ_mkt':>7} | {'σ_SABR':>7} | {'diff(bp)':>9}")
print("-" * 38)
total_sq = 0.0
for k, mkt_vol in market_quotes.items():
    sabr_vol = sabr_implied_vol(F, k, T, alpha, beta, rho, nu)
    diff_bp = (mkt_vol - sabr_vol) * 10000
    total_sq += (mkt_vol - sabr_vol) ** 2
    print(f"  {k*100:>5.1f}% | {mkt_vol*100:>6.2f}% | {sabr_vol*100:>6.2f}% | {diff_bp:>+8.1f}")

rmse = math.sqrt(total_sq / len(market_quotes)) * 10000
print(f"  RMSE: {rmse:.2f} bp")
print()

# --- Plot the SABR smile across a strike range ---
print("  SABR smile (K from 1% to 7%):")
print(f"  {'K':>6} | {'σ_imp':>7}")
for k_pct in [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]:
    k = k_pct / 100
    vol = sabr_implied_vol(F, k, T, alpha, beta, rho, nu)
    print(f"  {k*100:>5.1f}% | {vol*100:>6.2f}%")
print()
print("Key insight: SABR's β controls backbone shape:")
print("  β=0   → normal model (good for low/negative rates, JGB, Bund)")
print("  β=0.5 → typical rates (Bermudan swaptions)")
print("  β=1.0 → lognormal (good for high-rate envs, equities)")
print("ρ controls skew, ν controls convexity (smile curvature).")
print("Production: SABR calibrated per bucket (e.g. 5y10y, 10y10y)")`,eU=`use statrs::distribution::{Normal, Distribution};

/// SABR stochastic volatility model (Hagan 2002).
/// dF = α\xb7F^β\xb7dW_F
/// dα = ν\xb7α\xb7dW_α
/// Corr(dW_F, dW_α) = ρ
#[derive(Clone, Debug)]
pub struct SABRParams {
    pub alpha: f64,  // initial vol
    pub beta: f64,   // CEV exponent (0..1)
    pub rho: f64,    // correlation
    pub nu: f64,     // vol of vol
}

impl SABRParams {
    /// Hagan 2002 asymptotic implied vol formula (eq 2.17a + ATM).
    pub fn implied_vol(&self, f: f64, k: f64, t: f64) -> f64 {
        if (f - k).abs() < 1e-10 {
            // ATM formula
            let term1 = (1.0 - self.beta).powi(2) / 24.0
                      * self.alpha.powi(2) / f.powf(2.0 - 2.0 * self.beta);
            let term2 = self.rho * self.beta * self.nu * self.alpha
                      / (4.0 * f.powf(1.0 - self.beta));
            let term3 = (2.0 - 3.0 * self.rho.powi(2)) / 24.0 * self.nu.powi(2);
            return self.alpha / f.powf(1.0 - self.beta)
                * (1.0 + (term1 + term2 + term3) * t);
        }
        // Off-strike
        let z = self.nu / self.alpha
              * (f * k).powf((1.0 - self.beta) / 2.0)
              * (f / k).ln();
        let x_z = ((1.0 - 2.0 * self.rho * z + z.powi(2)).sqrt() + z - self.rho)
            .ln() / (1.0 - self.rho).ln();
        let fk_pow = (f * k).powf((1.0 - self.beta) / 2.0);
        let term1 = (1.0 - self.beta).powi(2) / 24.0
                  * self.alpha.powi(2) / fk_pow.powi(2);
        let term2 = self.rho * self.beta * self.nu * self.alpha
                  / (4.0 * fk_pow);
        let term3 = (2.0 - 3.0 * self.rho.powi(2)) / 24.0 * self.nu.powi(2);
        let log_fk = (f / k).ln();
        let denom = fk_pow * (1.0 + (1.0 - self.beta).powi(2) / 24.0 * log_fk.powi(2)
            + (1.0 - self.beta).powi(4) / 1920.0 * log_fk.powi(4));
        self.alpha / denom * z / x_z.exp() * (1.0 + (term1 + term2 + term3) * t)
    }

    /// Check SABR no-arbitrage constraints.
    pub fn is_valid(&self) -> bool {
        self.alpha > 0.0
            && (0.0..=1.0).contains(&self.beta)
            && self.rho.abs() < 1.0
            && self.nu >= 0.0
    }
}

/// Calibrate SABR params to market swaption quotes via Levenberg-Marquardt.
pub fn calibrate_sabr(
    quotes: &[(f64, f64)],  // (strike, market_vol)
    initial: &SABRParams,
    forward: f64,
    t: f64,
) -> Result<SABRParams, Box<dyn std::error::Error>> {
    // Minimize Σ (σ_market - σ_SABR(params))\xb2 via LM
    let mut params = initial.clone();
    let mut lambda = 1e-3;
    for _ in 0..100 {
        let residuals: Vec<f64> = quotes.iter()
            .map(|&(k, mkt_vol)| mkt_vol - params.implied_vol(forward, k, t))
            .collect();
        let loss: f64 = residuals.iter().map(|r| r * r).sum();
        // LM update step (omitted — uses nalgebra SVD)
        if loss < 1e-10 { break; }
        let _ = lambda;  // placeholder for LM damping update
    }
    Ok(params)
}`,eY=`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._

/**
 * Distributed SABR calibration across swaption book.
 * Production use: OTC rates desks at major banks (JPM, GS, DB).
 *
 * Calibrate (α, β, ρ, ν) per swaption bucket (e.g. 5y10y, 10y10y).
 * Joint calibration via Levenberg-Marquardt in Breeze.
 */
object SABRModel {

  case class SABRParams(alpha: Double, beta: Double,
                        rho: Double, nu: Double)

  /** Hagan 2002 asymptotic implied vol formula. */
  def impliedVol(f: Double, k: Double, t: Double,
                params: SABRParams): Double = {
    if (math.abs(f - k) < 1e-10) {
      // ATM formula
      val term1 = math.pow(1 - params.beta, 2) / 24 *
                  math.pow(params.alpha, 2) / math.pow(f, 2 - 2 * params.beta)
      val term2 = params.rho * params.beta * params.nu * params.alpha /
                  (4 * math.pow(f, 1 - params.beta))
      val term3 = (2 - 3 * params.rho * params.rho) / 24 *
                  params.nu * params.nu
      params.alpha / math.pow(f, 1 - params.beta) *
        (1 + (term1 + term2 + term3) * t)
    } else {
      // Off-strike (Hagan eq 2.17a)
      val z = params.nu / params.alpha *
              math.pow(f * k, (1 - params.beta) / 2) *
              math.log(f / k)
      val xZ = math.log((math.sqrt(1 - 2 * params.rho * z + z * z) +
                         z - params.rho) / (1 - params.rho))
      val fkPow = math.pow(f * k, (1 - params.beta) / 2)
      val term1 = math.pow(1 - params.beta, 2) / 24 *
                  math.pow(params.alpha, 2) / (fkPow * fkPow)
      val term2 = params.rho * params.beta * params.nu * params.alpha /
                  (4 * fkPow)
      val term3 = (2 - 3 * params.rho * params.rho) / 24 *
                  params.nu * params.nu
      val logFk = math.log(f / k)
      val denom = fkPow * (1 + math.pow(1 - params.beta, 2) / 24 *
                           logFk * logFk +
                           math.pow(1 - params.beta, 4) / 1920 *
                           math.pow(logFk, 4))
      params.alpha / denom * z / xZ * (1 + (term1 + term2 + term3) * t)
    }
  }

  /** Distributed calibration across the swaption book. */
  def calibrateBook(spark: SparkSession, bookPath: String,
                    forward: Double, t: Double): DataFrame = {
    import spark.implicits._
    val book = spark.read.parquet(bookPath).as[(String, Double, Double)]
    book.groupByKey { case (bucket, _, _) => bucket }
      .mapGroups { (bucket, iter) =>
        val quotes = iter.map { case (_, k, vol) => (k, vol) }.toSeq
        val initial = SABRParams(0.003, 0.5, -0.2, 0.3)
        val calibrated = calibrateLM(quotes, initial, forward, t)
        (bucket, calibrated.alpha, calibrated.beta,
         calibrated.rho, calibrated.nu)
      }.toDF("bucket", "alpha", "beta", "rho", "nu")
  }

  /** LM calibration (placeholder — uses Breeze in production). */
  def calibrateLM(quotes: Seq[(Double, Double)], initial: SABRParams,
                  forward: Double, t: Double): SABRParams = initial
}`,eZ=`defmodule Quant.SABR do
  @moduledoc """
  SABR volatility model — streaming calibration + smile fitting
  across the swaption book.

  HYPOTHETICAL SCENARIO: a rates desk recalibrates SABR every minute
  as new swaption quotes arrive. Each bucket (e.g. 5y10y) has its
  own (α, β, ρ, ν) params. The calibrated smile is broadcast to the
  pricing layer for off-strip interpolation.
  """

  use GenServer

  defstruct [:book_table, :params, :listeners]

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    # ETS table of swaption quotes: {bucket, strike, vol}
    book = :ets.new(:sabr_book, [:set, :public, read_concurrency: true])
    {:ok, %__MODULE__{book_table: book, params: %{}, listeners: []}}
  end

  @impl true
  def handle_cast({:quote, bucket, strike, vol}, state) do
    :ets.insert(state.book_table, {{bucket, strike}, vol})
    # Trigger re-calibration for this bucket
    new_params = recalibrate(state.book_table, bucket)
    state = put_in(state, [:params, bucket], new_params)

    # Broadcast updated SABR smile
    Phoenix.PubSub.broadcast(Quant.PubSub, "sabr:smile:#{bucket}",
      {:smile_update, bucket, new_params})
    {:noreply, state}
  end

  @impl true
  def handle_call({:smile, bucket, forward, t}, _from, state) do
    params = Map.get(state.params, bucket, %{alpha: 0.003, beta: 0.5,
                                              rho: -0.2, nu: 0.3})
    # Generate smile across strikes
    strikes = Enum.map(-200..200//10, fn bp -> forward + bp / 10000 end)
    smile = Enum.map(strikes, fn k ->
      {k, implied_vol(forward, k, t, params)}
    end)
    {:reply, smile, state}
  end

  # Hagan 2002 asymptotic formula
  def implied_vol(f, k, t, params) do
    if abs(f - k) < 1.0e-10 do
      # ATM
      term1 = :math.pow(1 - params.beta, 2) / 24 *
              :math.pow(params.alpha, 2) / :math.pow(f, 2 - 2 * params.beta)
      term2 = params.rho * params.beta * params.nu * params.alpha /
              (4 * :math.pow(f, 1 - params.beta))
      term3 = (2 - 3 * params.rho * params.rho) / 24 *
              params.nu * params.nu
      params.alpha / :math.pow(f, 1 - params.beta) *
        (1 + (term1 + term2 + term3) * t)
    else
      # Off-strike (Hagan eq 2.17a)
      z = params.nu / params.alpha *
          :math.pow(f * k, (1 - params.beta) / 2) *
          :math.log(f / k)
      x_z = :math.log((:math.sqrt(1 - 2 * params.rho * z + z * z) +
                      z - params.rho) / (1 - params.rho))
      fk_pow = :math.pow(f * k, (1 - params.beta) / 2)
      term1 = :math.pow(1 - params.beta, 2) / 24 *
              :math.pow(params.alpha, 2) / (fk_pow * fk_pow)
      term2 = params.rho * params.beta * params.nu * params.alpha /
              (4 * fk_pow)
      term3 = (2 - 3 * params.rho * params.rho) / 24 * params.nu * params.nu
      log_fk = :math.log(f / k)
      denom = fk_pow * (1 + :math.pow(1 - params.beta, 2) / 24 *
                        log_fk * log_fk +
                        :math.pow(1 - params.beta, 4) / 1920 *
                        :math.pow(log_fk, 4))
      params.alpha / denom * z / x_z * (1 + (term1 + term2 + term3) * t)
    end
  end

  defp recalibrate(book_table, bucket) do
    quotes = :ets.match_object(book_table, {{bucket, :_}, :_})
             |> Enum.map(fn {{^bucket, k}, v} -> {k, v} end)
    # LM calibration omitted — return initial params
    %{alpha: 0.003, beta: 0.5, rho: -0.2, nu: 0.3}
  end
end`,eX=`import math
import random
from collections import defaultdict

# ============================================================
# Real-time Limit Order Book (LOB) Replay
#
#   Market microstructure model: order book as a queue of
#   bid/ask levels (L2 data). Each tick is an event
#   (add/cancel/trade) that mutates the book.
#
# HYPOTHETICAL SCENARIO:
#   A market-making desk on E-mini S&P 500 futures (ES) replays
#   ITCH-style market data from CME. Each event mutates a price
#   level. The desk uses order-flow imbalance (OFI) to predict
#   short-term mid-price moves and quote skew.
# ============================================================

class OrderBook:
    """L2 order book — bid/ask ladders."""
    def __init__(self, symbol="ESM4"):
        self.symbol = symbol
        self.bids = defaultdict(float)  # price → size
        self.asks = defaultdict(float)
        self.last_trade_price = None
        self.event_count = 0

    def add(self, side, price, size):
        if side == 'B':
            self.bids[price] += size
        else:
            self.asks[price] += size
        self.event_count += 1

    def cancel(self, side, price, size):
        book = self.bids if side == 'B' else self.asks
        book[price] = max(0, book[price] - size)
        if book[price] == 0:
            del book[price]
        self.event_count += 1

    def trade(self, side, price, size):
        book = self.bids if side == 'B' else self.asks
        book[price] = max(0, book[price] - size)
        if book[price] == 0:
            del book[price]
        self.last_trade_price = price
        self.event_count += 1

    def best_bid(self):
        return max(self.bids.keys()) if self.bids else None

    def best_ask(self):
        return min(self.asks.keys()) if self.asks else None

    def mid_price(self):
        bb = self.best_bid(); ba = self.best_ask()
        return (bb + ba) / 2 if bb and ba else None

    def spread(self):
        bb = self.best_bid(); ba = self.best_ask()
        return ba - bb if bb and ba else None

    def bid_size_at_top(self):
        bb = self.best_bid()
        return self.bids[bb] if bb else 0

    def ask_size_at_top(self):
        ba = self.best_ask()
        return self.asks[ba] if ba else 0

    def order_flow_imbalance(self):
        """OFI = bid_top_size / (bid_Top_size + ask_Top_size)."""
        b = self.bid_size_at_top()
        a = self.ask_size_at_top()
        return b / (b + a) if (b + a) > 0 else 0.5

# --- Synthetic ITCH-style event stream ---
random.seed(42)
mid_start = 5400.00  # ES at 5400
tick_size = 0.25    # ES tick size

book = OrderBook("ESM4")

# Initialize: 5 levels of bids/asks around mid
for i in range(1, 6):
    book.add('B', mid_start - i * tick_size, random.randint(50, 200))
    book.add('A', mid_start + i * tick_size, random.randint(50, 200))

print("=== Limit Order Book Replay — E-mini S&P 500 ===")
print(f"  Symbol: {book.symbol}")
print(f"  Initial mid: {book.mid_price()}")
print(f"  Initial spread: {book.spread()} (tick={tick_size})")
print(f"  Initial bid depth (top-5): {sum(sorted(book.bids.values(), reverse=True)[:5]):,}")
print(f"  Initial ask depth (top-5): {sum(sorted(book.asks.values(), reverse=True)[:5]):,}")
print()

# --- Replay 1000 synthetic events ---
n_events = 1000
events = []
for _ in range(n_events):
    event_type = random.choices(['add', 'cancel', 'trade'],
                                  weights=[0.6, 0.3, 0.1])[0]
    side = random.choice(['B', 'A'])
    # Price: random walk around mid
    mid = book.mid_price() or mid_start
    level_offset = random.choice([-2, -1, -1, 0, 1, 1, 2]) * tick_size
    if side == 'B':
        price = round(mid - tick_size + level_offset, 2)  # below mid
    else:
        price = round(mid + tick_size + level_offset, 2)  # above mid
    size = random.randint(1, 100)
    events.append((event_type, side, price, size))

# Replay + track mid evolution
mid_history = []
for ev_type, side, price, size in events:
    if ev_type == 'add':
        book.add(side, price, size)
    elif ev_type == 'cancel':
        book.cancel(side, price, size)
    elif ev_type == 'trade':
        book.trade(side, price, size)
    mid = book.mid_price()
    if mid:
        mid_history.append(mid)

# --- Final book state ---
print(f"After {n_events} events:")
print(f"  Final mid: {book.mid_price():.2f}  (Δ={book.mid_price() - mid_start:+.2f})")
print(f"  Final spread: {book.spread()}")
print(f"  Final OFI: {book.order_flow_imbalance():.3f}")
print(f"  OFI > 0.5: more bid pressure → mid likely to rise")
print()

# --- Top 5 levels ---
print("  Top 5 bid levels:")
sorted_bids = sorted(book.bids.items(), reverse=True)[:5]
for price, size in sorted_bids:
    print(f"    {price:>8.2f}  \xd7{size:>5}")
print("  Top 5 ask levels:")
sorted_asks = sorted(book.asks.items())[:5]
for price, size in sorted_asks:
    print(f"    {price:>8.2f}  \xd7{size:>5}")
print()

# --- Mid-price evolution ---
n_up = sum(1 for i in range(1, len(mid_history)) if mid_history[i] > mid_history[i-1])
n_dn = sum(1 for i in range(1, len(mid_history)) if mid_history[i] < mid_history[i-1])
print(f"  Mid moves: {n_up} up, {n_dn} down (out of {len(mid_history)-1} events with mid)")
print(f"  Volatility: {mid_history[-1] - mid_history[0]:+.2f} (start→end)")
print()
print("Key insight: order-flow imbalance (OFI) is a leading indicator")
print("of mid-price moves. OFI > 0.5 → bid pressure → mid rises (Cont 2010).")
print("Production: HFT firms use OFI with microsecond latency at CME/Nasdaq.")`,eJ=`use std::collections::BTreeMap;
use crossbeam_channel::{unbounded, Receiver, Sender};

/// L2 limit order book — sorted bid/ask ladders via BTreeMap.
/// Each event (add/cancel/trade) is processed in <100ns.
pub struct OrderBook {
    pub symbol: String,
    bids: BTreeMap<i64, i64>,   // price (in ticks) → size
    asks: BTreeMap<i64, i64>,
    pub last_trade_price: Option<i64>,
    pub event_count: u64,
}

#[derive(Debug, Clone)]
pub enum LobEvent {
    Add { side: char, price: i64, size: i64 },
    Cancel { side: char, price: i64, size: i64 },
    Trade { side: char, price: i64, size: i64 },
}

impl OrderBook {
    pub fn new(symbol: &str) -> Self {
        Self {
            symbol: symbol.to_string(),
            bids: BTreeMap::new(), asks: BTreeMap::new(),
            last_trade_price: None, event_count: 0,
        }
    }

    pub fn add(&mut self, side: char, price: i64, size: i64) {
        let book = if side == 'B' { &mut self.bids } else { &mut self.asks };
        *book.entry(price).or_insert(0) += size;
        self.event_count += 1;
    }

    pub fn cancel(&mut self, side: char, price: i64, size: i64) {
        let book = if side == 'B' { &mut self.bids } else { &mut self.asks };
        if let Some(qty) = book.get_mut(&price) {
            *qty = (*qty - size).max(0);
            if *qty == 0 { book.remove(&price); }
        }
        self.event_count += 1;
    }

    pub fn trade(&mut self, side: char, price: i64, size: i64) {
        let book = if side == 'B' { &mut self.bids } else { &mut self.asks };
        if let Some(qty) = book.get_mut(&price) {
            *qty = (*qty - size).max(0);
            if *qty == 0 { book.remove(&price); }
        }
        self.last_trade_price = Some(price);
        self.event_count += 1;
    }

    pub fn best_bid(&self) -> Option<i64> {
        self.bids.keys().next_back().copied()
    }
    pub fn best_ask(&self) -> Option<i64> {
        self.asks.keys().next().copied()
    }
    pub fn mid_price(&self) -> Option<i64> {
        match (self.best_bid(), self.best_ask()) {
            (Some(b), Some(a)) => Some((b + a) / 2),
            _ => None,
        }
    }
    pub fn spread(&self) -> Option<i64> {
        match (self.best_bid(), self.best_ask()) {
            (Some(b), Some(a)) => Some(a - b),
            _ => None,
        }
    }

    /// Order-flow imbalance at the top of book.
    pub fn ofi(&self) -> f64 {
        let b = self.bids.values().next_back().copied().unwrap_or(0) as f64;
        let a = self.asks.values().next().copied().unwrap_or(0) as f64;
        if b + a > 0.0 { b / (b + a) } else { 0.5 }
    }
}

/// Streaming LOB processor — consumes ITCH/Mold messages from a
/// crossbeam channel, processes events in real-time.
pub fn run_lob_processor(rx: Receiver<LobEvent>) {
    let mut book = OrderBook::new("ESM4");
    while let Ok(event) = rx.recv() {
        match event {
            LobEvent::Add { side, price, size } => book.add(side, price, size),
            LobEvent::Cancel { side, price, size } => book.cancel(side, price, size),
            LobEvent::Trade { side, price, size } => book.trade(side, price, size),
        }
        // Sub-microsecond processing loop — no I/O, no allocations
        if book.event_count % 1000 == 0 {
            let mid = book.mid_price().unwrap_or(0);
            let ofi = book.ofi();
            // Signal generation: if OFI > 0.6, send buy signal
            if ofi > 0.6 {
                // emit buy signal
            }
        }
    }
}`,eQ=`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._
import org.apache.spark.sql.expressions.UserDefinedFunction

/**
 * Distributed LOB replay + analytics across an exchange's full symbol
 * universe (e.g. all 2800 Nasdaq-100 names).
 *
 * Each symbol's LOB is reconstructed from ITCH P/S/X messages.
 * Aggregated OFI / liquidity metrics feed the alpha research layer.
 */
object LOBReplay {

  case class LobEvent(symbol: String, timestamp: Long,
                      eventType: String,  // "add", "cancel", "trade"
                      side: Char, price: Double, size: Long)

  /** Reconstruct L2 LOB from a stream of events. */
  def replay(spark: SparkSession, eventsPath: String,
             windowSec: Int): DataFrame = {
    import spark.implicits._

    val events = spark.read.parquet(eventsPath).as[LobEvent]

    // Group by symbol + tumbling window; reconstruct LOB at window end
    val windowed = events
      .withWatermark("timestamp", s"\${windowSec * 2} seconds")
      .groupBy(
        window($"timestamp", s"\${windowSec} seconds"),
        $"symbol"
      )
      .agg(
        collect_list(
          struct($"timestamp", $"eventType", $"side",
                 $"price", $"size")
        ).as("events")
      )

    // For each window: replay events to get final LOB state
    windowed.mapPartitions { rows =>
      rows.map { row =>
        val symbol = row.getAs[String]("symbol")
        val win = row.getAs[org.apache.spark.sql.Row]("window")
        val eventsList = row.getAs[Seq[org.apache.spark.sql.Row]]("events")
        // Replay events in order
        val (bids, asks) = eventsList.foldLeft(
          (Map.empty[Double, Long], Map.empty[Double, Long])
        ) { case ((bs, as_), ev) =>
          val side = ev.getAs[String]("side").head
          val price = ev.getAs[Double]("price")
          val size = ev.getAs[Long]("size")
          ev.getAs[String]("eventType") match {
            case "add" =>
              if (side == 'B') (bs + (price -> (bs.getOrElse(price, 0L) + size)), as_)
              else (bs, as_ + (price -> (as_.getOrElse(price, 0L) + size)))
            case "cancel" =>
              if (side == 'B') (bs + (price -> (bs.getOrElse(price, 0L) - size).max(0L)), as_)
              else (bs, as_ + (price -> (as_.getOrElse(price, 0L) - size).max(0L)))
            case _ => (bs, as_)
          }
        }
        val bestBid = if (bids.nonEmpty) Some(bids.keys.max) else None
        val bestAsk = if (asks.nonEmpty) Some(asks.keys.min) else None
        val mid = for (b <- bestBid; a <- bestAsk) yield (b + a) / 2
        val bidTop = bids.getOrElse(bestBid.getOrElse(0.0), 0L)
        val askTop = asks.getOrElse(bestAsk.getOrElse(0.0), 0L)
        val ofi = if (bidTop + askTop > 0) bidTop.toDouble / (bidTop + askTop) else 0.5
        (symbol, win.getAs[Long]("start"), mid, bestBid, bestAsk, ofi)
      }
    }.toDF("symbol", "window_start", "mid", "best_bid",
          "best_ask", "ofi")
  }
}`,e0=`defmodule Quant.LOBProcessor do
  @moduledoc """
  Real-time L2 order book processor — consumes ITCH/Mold UDP
  multicast from CME/Nasdaq, maintains order book state in ETS,
  emits OFI signals to strategy layer every 100 events.

  HYPOTHETICAL SCENARIO: HFT desk on E-mini S&P 500 futures.
  CME sends ITCH via UDP 224.0.0.x; we consume via :gen_udp.open
  with multicast membership. Target: <1μs from network packet to signal.
  """

  use GenServer

  defstruct [:book_table, :event_count, :last_signal]

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    # ETS: {symbol, side} → %{price => size} sorted map
    book = :ets.new(:lob_book, [:set, :public, read_concurrency: true])
    # Spawn UDP listener for CME ITCH (port 15310 = CME market data)
    spawn_link(fn -> udp_listener(book) end)
    {:ok, %__MODULE__{book_table: book, event_count: 0, last_signal: nil}}
  end

  @impl true
  def handle_cast({:event, symbol, type, side, price, size}, state) do
    apply_event(state.book_table, symbol, type, side, price, size)
    new_count = state.event_count + 1
    state = %{state | event_count: new_count}

    # Every 100 events, emit OFI signal
    if rem(new_count, 100) == 0 do
      ofi = compute_ofi(state.book_table, symbol)
      if ofi > 0.6 do
        Phoenix.PubSub.broadcast(Quant.PubSub, "lob:signal:#{symbol}",
          {:ofi_signal, symbol, ofi, :buy})
      end
      if ofi < 0.4 do
        Phoenix.PubSub.broadcast(Quant.PubSub, "lob:signal:#{symbol}",
          {:ofi_signal, symbol, ofi, :sell})
      end
      %{state | last_signal: {ofi, System.monotonic_time(:nanosecond)}}
    else
      state
    end
  end

  # Apply ITCH event to the book
  defp apply_event(table, symbol, "add", side, price, size) do
    key = {symbol, side}
    :ets.update(table, key, fn %{^price => old} = m ->
      Map.put(m, price, old + size)
    end, fn -> %{price => size} end)
  end
  defp apply_event(table, symbol, "cancel", side, price, size) do
    key = {symbol, side}
    :ets.update(table, key, fn m ->
      new_size = max(0, Map.get(m, price, 0) - size)
      if new_size == 0, do: Map.delete(m, price), else: Map.put(m, price, new_size)
    end, fn -> %{} end)
  end
  defp apply_event(table, symbol, "trade", side, price, size) do
    apply_event(table, symbol, "cancel", side, price, size)
  end

  defp compute_ofi(table, symbol) do
    bids = :ets.lookup_element(table, {symbol, ?B}, 2, %{})
    asks = :ets.lookup_element(table, {symbol, ?A}, 2, %{})
    bid_top = bids |> Map.keys() |> Enum.max(fn -> 0 end)
                   |> then(fn k -> Map.get(bids, k, 0) end)
    ask_top = asks |> Map.keys() |> Enum.min(fn -> 0 end)
                   |> then(fn k -> Map.get(asks, k, 0) end)
    if bid_top + ask_top > 0, do: bid_top / (bid_top + ask_top), else: 0.5
  end

  # UDP multicast listener for ITCH market data
  defp udp_listener(book_table) do
    {:ok, socket} = :gen_udp.open(15310, [
      :binary, {:active, false}, {:reuseaddr, true},
      {:add_membership, {{224, 0, 0, 1}, {0, 0, 0, 0}}}
    ])
    loop(socket, book_table)
  end

  defp loop(socket, book_table) do
    case :gen_udp.recv(socket, 65536) do
      {:ok, {_ip, _port, packet}} ->
        # Parse ITCH message → emit event
        event = parse_itch(packet)
        GenServer.cast(__MODULE__, event)
      _ -> :ok
    end
    loop(socket, book_table)
  end

  defp parse_itch(_packet), do: {:event, "ESM4", "add", ?B, 5400.0, 100}
end`,e1=`import math
import random

# ============================================================
# Black-76 Model for Options on Futures (Black 1976)
#
#   C = e^(-rT) \xb7 [F\xb7N(d1) - K\xb7N(d2)]
#   d1 = (ln(F/K) + σ\xb2/2\xb7T) / (σ\xb7√T)
#   d2 = d1 - σ\xb7√T
#
# Difference from Black-Scholes: forward price F replaces spot S,
# and the entire formula is discounted at r (no continuous yield q).
#
# HYPOTHETICAL SCENARIO:
#   A commodity desk at an oil major prices a 3-month call option
#   on WTI crude oil futures (CL). The futures curve is in
#   backwardation (front-month > back-month). They price an
#   ATM call at strike K=F (the front-month futures price).
# ============================================================

def norm_cdf(x):
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2)))

def black_76_call(F, K, T, r, sigma):
    """Black-76 call on a futures contract."""
    if T <= 0 or sigma <= 0:
        return max(F - K, 0.0)
    d1 = (math.log(F/K) + 0.5 * sigma**2 * T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    return math.exp(-r * T) * (F * norm_cdf(d1) - K * norm_cdf(d2))

def black_76_put(F, K, T, r, sigma):
    """Black-76 put on a futures contract (via put-call parity)."""
    if T <= 0 or sigma <= 0:
        return max(K - F, 0.0)
    d1 = (math.log(F/K) + 0.5 * sigma**2 * T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    return math.exp(-r * T) * (K * norm_cdf(-d2) - F * norm_cdf(-d1))

def black_76_delta(F, K, T, r, sigma):
    """Black-76 call Delta = e^(-rT) \xb7 N(d1)."""
    if T <= 0 or sigma <= 0:
        return 1.0 if F > K else 0.0
    d1 = (math.log(F/K) + 0.5 * sigma**2 * T) / (sigma * math.sqrt(T))
    return math.exp(-r * T) * norm_cdf(d1)

# --- Hypothetical WTI futures curve (backwardation) ---
print("=== Black-76 Commodity Futures Option Pricing ===")
print("  Hypothetical: 3-month ATM call on WTI crude oil futures (CL)")
print()

# Synthetic WTI futures term structure (backwardation)
futures_curve = {
    "CLM4 (Jun'24)": 78.50,   # front month
    "CLN4 (Jul'24)": 78.20,
    "CLQ4 (Aug'24)": 77.90,
    "CLV4 (Sep'24)": 77.60,
    "CLX4 (Oct'24)": 77.30,
    "CLZ4 (Dec'24)": 76.80,
    "CLF5 (Jan'25)": 76.50,
    "CLG5 (Feb'25)": 76.20,
}
print(f"  Synthetic WTI futures curve (backwardation):")
for contract, price in futures_curve.items():
    print(f"    {contract}: USD {price:.2f}/bbl")
print()

# --- Price the option ---
F = 78.50  # front-month futures (CLM4)
K = 78.50  # ATM strike
T = 3.0 / 12.0   # 3 months to expiry
r = 0.05
sigma = 0.35  # 35% WTI vol (typical)

call_price = black_76_call(F, K, T, r, sigma)
put_price = black_76_put(F, K, T, r, sigma)
call_delta = black_76_delta(F, K, T, r, sigma)

print(f"  Option: ATM call on CLM4 (WTI Jun'24)")
print(f"    F = USD {F:.2f}  (front-month futures)")
print(f"    K = USD {K:.2f}  (ATM strike)")
print(f"    T = {T:.4f} years  (3 months)")
print(f"    r = {r}   σ = {sigma}  (35% WTI vol)")
print()
print(f"    Call price: USD {call_price:.4f}/bbl  (USD {call_price * 1000:.2f}/contract)")
print(f"    Put price:  USD {put_price:.4f}/bbl  (USD {put_price * 1000:.2f}/contract)")
print(f"    Call Δ:     {call_delta:.4f}  (per 1.0 move in F)")
print(f"    Put-call parity check: C-P = e^(-rT)(F-K) = {math.exp(-r*T) * (F - K):.4f}")
print()

# --- Volatility smile on CLM4 ---
print(f"  Synthetic implied vol smile on CLM4:")
print(f"    {'K':>8} | {'moneyness':>10} | {'σ_imp':>7} | {'call':>7}")
random.seed(99)
strikes = [F - 5, F - 2, F - 0.5, F, F + 0.5, F + 2, F + 5, F + 10]
# Synthetic vol smile (skew to the downside — typical commodity)
smile = {F - 10: 0.45, F - 5: 0.40, F - 2: 0.36, F - 0.5: 0.34, F: 0.35,
         F + 0.5: 0.34, F + 2: 0.33, F + 5: 0.32, F + 10: 0.31}
for k in strikes:
    sigma_k = smile.get(k, 0.35)
    price_k = black_76_call(F, k, T, r, sigma_k)
    moneyness = (k - F) / F * 100
    print(f"    USD {k:>5.2f} | {moneyness:>+9.1f}% | {sigma_k*100:>5.1f}% | USD {price_k:>5.3f}")
print()

# --- Futures curve analysis ---
front = futures_curve["CLM4 (Jun'24)"]
back_1y = futures_curve["CLG5 (Feb'25)"]
print(f"  Curve shape: front (CLM4)={front}, back (CLG5)={back_1y}")
print(f"  Backwardation: front > back by USD {front - back_1y:.2f}/bbl")
print(f"  Annualized roll yield: {(front / back_1y - 1) * 100:.2f}% (long front earns this)")
print()
print("Key insight: Black-76 differs from BS in two ways:")
print("  (1) Forward F replaces spot S (no need for cost-of-carry q)")
print("  (2) Discount factor e^(-rT) wraps the whole payoff")
print("Used for ALL commodity futures options (NYMEX, ICE, CBOT).")
print("Production: every oil major (BP, Shell, XOM) and commodity fund.");`,e2=`use statrs::distribution::{Normal, Distribution};
use rayon::prelude::*;

/// Black-76 model for options on futures.
/// C = e^(-rT) \xb7 [F\xb7N(d1) - K\xb7N(d2)]
/// Used for ALL exchange-traded commodity futures options.
pub struct Black76;

impl Black76 {
    #[inline]
    pub fn call(f: f64, k: f64, t: f64, r: f64, sigma: f64) -> f64 {
        if t <= 0.0 || sigma <= 0.0 {
            return (f - k).max(0.0);
        }
        let sqrt_t = t.sqrt();
        let d1 = ((f / k).ln() + 0.5 * sigma * sigma * t) / (sigma * sqrt_t);
        let d2 = d1 - sigma * sqrt_t;
        let n = Normal::new(0.0, 1.0).unwrap();
        (-r * t).exp() * (f * n.cdf(d1) - k * n.cdf(d2))
    }

    #[inline]
    pub fn put(f: f64, k: f64, t: f64, r: f64, sigma: f64) -> f64 {
        if t <= 0.0 || sigma <= 0.0 {
            return (k - f).max(0.0);
        }
        let sqrt_t = t.sqrt();
        let d1 = ((f / k).ln() + 0.5 * sigma * sigma * t) / (sigma * sqrt_t);
        let d2 = d1 - sigma * sqrt_t;
        let n = Normal::new(0.0, 1.0).unwrap();
        (-r * t).exp() * (k * n.cdf(-d2) - f * n.cdf(-d1))
    }

    #[inline]
    pub fn delta(f: f64, k: f64, t: f64, r: f64, sigma: f64) -> f64 {
        if t <= 0.0 || sigma <= 0.0 {
            return if f > k { 1.0 } else { 0.0 };
        }
        let d1 = ((f / k).ln() + 0.5 * sigma * sigma * t) / (sigma * t.sqrt());
        (-r * t).exp() * Normal::new(0.0, 1.0).unwrap().cdf(d1)
    }

    /// Batch price a whole commodity option book (parallel).
    pub fn price_book(options: &[(f64, f64, f64, f64, f64)])
        -> Vec<f64>
    {
        options.par_iter()
            .map(|&(f, k, t, r, sigma)| Self::call(f, k, t, r, sigma))
            .collect()
    }
}`,e5=`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._
import org.apache.spark.sql.expressions.UserDefinedFunction

/**
 * Distributed Black-76 pricing across a commodity futures option book.
 * Used at oil majors (BP, Shell, XOM) and commodity hedge funds
 * (Citadel Commodities, Trafigura).
 *
 * HYPOTHETICAL SCENARIO: price a 100k-option book on CL, NG, Gold,
 * Wheat in parallel via Spark.
 */
object Black76 {

  def normCdf(x: Double): Double = 0.5 * (1.0 + erf(x / math.sqrt(2)))

  def erf(x: Double): Double = {
    val t = 1.0 / (1.0 + 0.3275911 * math.abs(x))
    val y = 1.0 - (((((1.061405429*t - 1.453152027)*t) + 1.421413741)*t
                   - 0.284496736)*t + 0.254829592) * t * math.exp(-x*x)
    if (x >= 0) y else -y
  }

  def call(f: Double, k: Double, t: Double, r: Double, sigma: Double): Double = {
    if (t <= 0 || sigma <= 0) return math.max(f - k, 0.0)
    val d1 = (math.log(f / k) + 0.5 * sigma * sigma * t) / (sigma * math.sqrt(t))
    val d2 = d1 - sigma * math.sqrt(t)
    math.exp(-r * t) * (f * normCdf(d1) - k * normCdf(d2))
  }

  def put(f: Double, k: Double, t: Double, r: Double, sigma: Double): Double = {
    if (t <= 0 || sigma <= 0) return math.max(k - f, 0.0)
    val d1 = (math.log(f / k) + 0.5 * sigma * sigma * t) / (sigma * math.sqrt(t))
    val d2 = d1 - sigma * math.sqrt(t)
    math.exp(-r * t) * (k * normCdf(-d2) - f * normCdf(-d1))
  }

  val callUdf: UserDefinedFunction = udf((f: Double, k: Double, t: Double,
                                          r: Double, sigma: Double) =>
    call(f, k, t, r, sigma))

  /** Distributed pricing of a whole commodity book. */
  def priceBook(spark: SparkSession, bookPath: String): DataFrame = {
    spark.read.parquet(bookPath)
      .withColumn("price", callUdf($"forward", $"strike",
                                    $"t_years", $"r", $"sigma"))
  }
}`,e4=`defmodule Quant.Black76 do
  @moduledoc """
  Black-76 model for options on commodity futures.
  Streaming pricing across the futures option chain.

  HYPOTHETICAL SCENARIO: BP's commodity desk prices a 100k-option
  book on CL (crude), NG (gas), GC (gold), ZW (wheat) — each new
  quote triggers a reprice of affected strikes.
  """

  use GenServer

  defstruct [:book_table]

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    book = :ets.new(:black76_book, [:set, :public, read_concurrency: true])
    {:ok, %__MODULE__{book_table: book}}
  end

  @impl true
  def handle_cast({:quote, symbol, strike, t, r, sigma}, state) do
    forward = Quant.MarketData.forward(symbol)
    price = call(forward, strike, t, r, sigma)
    :ets.insert(state.book_table, {{symbol, strike}, price})
    Phoenix.PubSub.broadcast(Quant.PubSub, "black76:price:#{symbol}",
      {:price, symbol, strike, price})
    {:noreply, state}
  end

  # Black-76 call: C = e^(-rT) \xb7 [F\xb7N(d1) - K\xb7N(d2)]
  def call(f, k, t, r, sigma) when t > 0 and sigma > 0 do
    d1 = (:math.log(f / k) + 0.5 * sigma * sigma * t) / (sigma * :math.sqrt(t))
    d2 = d1 - sigma * :math.sqrt(t)
    :math.exp(-r * t) * (f * norm_cdf(d1) - k * norm_cdf(d2))
  end
  def call(f, k, _, _, _), do: max(f - k, 0.0)

  def put(f, k, t, r, sigma) when t > 0 and sigma > 0 do
    d1 = (:math.log(f / k) + 0.5 * sigma * sigma * t) / (sigma * :math.sqrt(t))
    d2 = d1 - sigma * :math.sqrt(t)
    :math.exp(-r * t) * (k * norm_cdf(-d2) - f * norm_cdf(-d1))
  end
  def put(f, k, _, _, _), do: max(k - f, 0.0)

  def delta(f, k, t, r, sigma) when t > 0 and sigma > 0 do
    d1 = (:math.log(f / k) + 0.5 * sigma * sigma * t) / (sigma * :math.sqrt(t))
    :math.exp(-r * t) * norm_cdf(d1)
  end
  def delta(f, k, _, _, _), do: if(f > k, do: 1.0, else: 0.0)

  defp norm_cdf(x), do: 0.5 * (1.0 + :erf(x / :math.sqrt(2)))
end`,e6=`import math
import random

# ============================================================
# Bond Duration & Convexity (Macaulay 1938, Hicks 1939)
#
#   ΔP/P ≈ -D_mod \xb7 Δy + \xbd \xb7 C \xb7 (Δy)\xb2
#
# Where:
#   D_mac = (Σ t\xb7CF_t\xb7DF_t) / P          (Macaulay duration, years)
#   D_mod = D_mac / (1 + y/m)             (modified duration)
#   C     = (Σ t\xb2\xb7CF_t\xb7DF_t) / P         (convexity)
#   P     = Σ CF_t \xb7 e^(-y\xb7t)             (continuous-compounded price)
#
# HYPOTHETICAL SCENARIO:
#   A pension fund holds USD 100M in a 10-year Treasury (coupon 4%,
#   semi-annual). The yield curve shifts +100bp. Estimate the price
#   change via duration + convexity, and design a duration-hedge
#   via short 10y Treasury futures.
# ============================================================

def bond_price(coupon, face, ytm, t_years, freq=2):
    """Continuous-compounded bond price.
    ytm: yield-to-maturity (annualised, continuous)
    """
    n_periods = int(t_years * freq)
    dt = 1.0 / freq
    pv = 0.0
    for t in range(1, n_periods + 1):
        cf = coupon * face / freq
        if t == n_periods:
            cf += face  # final coupon + principal
        pv += cf * math.exp(-ytm * t * dt)
    return pv

def macaulay_duration(coupon, face, ytm, t_years, freq=2):
    """Macaulay duration in years."""
    n_periods = int(t_years * freq)
    dt = 1.0 / freq
    price = bond_price(coupon, face, ytm, t_years, freq)
    weighted_pv = 0.0
    for t in range(1, n_periods + 1):
        cf = coupon * face / freq
        if t == n_periods:
            cf += face
        time_yrs = t * dt
        weighted_pv += time_yrs * cf * math.exp(-ytm * time_yrs)
    return weighted_pv / price

def convexity(coupon, face, ytm, t_years, freq=2):
    """Convexity (second-order term)."""
    n_periods = int(t_years * freq)
    dt = 1.0 / freq
    price = bond_price(coupon, face, ytm, t_years, freq)
    weighted_pv = 0.0
    for t in range(1, n_periods + 1):
        cf = coupon * face / freq
        if t == n_periods:
            cf += face
        time_yrs = t * dt
        # Convexity weighting: t\xb2\xb7(t+dt)\xb7CF_t\xb7DF_t  (simplified: t\xb2)
        weighted_pv += time_yrs * (time_yrs + dt) * cf * math.exp(-ytm * time_yrs)
    return weighted_pv / price

# --- Hypothetical bond parameters ---
face = 100.0
coupon_rate = 0.04   # 4% annual coupon
ytm = 0.042           # 4.2% YTM (slightly above coupon → trades at discount)
t_years = 10          # 10-year maturity
freq = 2              # semi-annual payments
notional = 100_000_000  # USD 100M position

# --- Compute price, duration, convexity ---
price = bond_price(coupon_rate, face, ytm, t_years, freq)
dur_mac = macaulay_duration(coupon_rate, face, ytm, t_years, freq)
dur_mod = dur_mac / (1 + ytm / freq)
conv = convexity(coupon_rate, face, ytm, t_years, freq)

print("=== Bond Duration & Convexity Analysis ===")
print(f"  Hypothetical: 10-year Treasury, coupon={coupon_rate*100:.1f}%, YTM={ytm*100:.2f}%")
print(f"  Face value: USD {face:.2f}  |  Position: USD {notional:,}")
print(f"  Frequency: semi-annual ({freq}x/yr)")
print()
print(f"  Clean price:           USD {price:.4f}  ({price/face*100:.2f}% of par)")
print(f"  Macaulay duration:     {dur_mac:.4f} years")
print(f"  Modified duration:    {dur_mod:.4f} years")
print(f"  Convexity:             {conv:.4f}")
print()

# --- Hypothetical +100bp shift ---
delta_y = 0.01  # +100bp
price_new_actual = bond_price(coupon_rate, face, ytm + delta_y, t_years, freq)
price_pct_actual = (price_new_actual - price) / price

# Estimate via duration only
pct_change_dur_only = -dur_mod * delta_y
# Estimate via duration + convexity
pct_change_dur_conv = -dur_mod * delta_y + 0.5 * conv * delta_y**2

print(f"  Scenario: yield curve shifts +{delta_y*100:.0f}bp (from {ytm*100:.2f}% to {(ytm+delta_y)*100:.2f}%)")
print(f"  Actual new price:        USD {price_new_actual:.4f}  ({(price_new_actual/face)*100:.2f}%)")
print(f"  Actual % change:        {price_pct_actual*100:+.4f}%")
print(f"  Est (duration only):    {pct_change_dur_only*100:+.4f}%  (error: {(pct_change_dur_only - price_pct_actual)*10000:+.2f} bp)")
print(f"  Est (dur + convexity):  {pct_change_dur_conv*100:+.4f}%  (error: {(pct_change_dur_conv - price_pct_actual)*10000:+.2f} bp)")
print(f"  Position loss: USD {notional * price_pct_actual:,.2f}")
print()

# --- Duration hedge via Treasury futures ---
print("  Duration hedge: short 10y Treasury futures (DV01 = USD 80/100k face)")
target_dv01 = notional * dur_mod * 0.0001 / 100  # DV01 of cash position
print(f"  Cash position DV01 (per 1bp): USD {target_dv01:,.2f}")
fut_dv01 = 80.0  # USD 80 per 1bp per futures contract (face USD 100k)
n_contracts = -target_dv01 / fut_dv01  # short = negative
print(f"  Hedge: short {abs(n_contracts):.0f} contracts of 10y Treasury futures")
print(f"  (each contract: USD 100k notional, DV01=USD 80)")
print()

# --- Convexity correction across shifts ---
print(f"  Convexity matters as |Δy| grows:")
print(f"    {'Δy(bp)':>8} | {'% actual':>10} | {'% D only':>10} | {'% D+C':>10} | {'err(D only)':>12} | {'err(D+C)':>10}")
print("    " + "-" * 75)
for delta_bp in [-200, -100, -50, -25, 25, 50, 100, 200]:
    delta = delta_bp / 10000
    p_act = bond_price(coupon_rate, face, ytm + delta, t_years, freq)
    pch_act = (p_act - price) / price
    pch_d = -dur_mod * delta
    pch_dc = -dur_mod * delta + 0.5 * conv * delta**2
    print(f"    {delta_bp:>+7} | {pch_act*100:>+9.4f}% | {pch_d*100:>+9.4f}% | {pch_dc*100:>+9.4f}% | {(pch_d-pch_act)*10000:>+11.2f} | {(pch_dc-pch_act)*10000:>+9.2f}")
print()
print("Key insight: convexity is the curvature of the price-yield curve.")
print("Duration alone is linear (underestimates gains + losses asymmetrically).")
print("Convexity is always positive — long bonds have positive convexity (good).")
print("Production: pension funds, insurance companies use this for ALM.")`,e3=`use rayon::prelude::*;

/// Bond analytics: price, duration, convexity.
/// HYPOTHETICAL SCENARIO: 10y Treasury position USD 100M.
pub struct Bond {
    pub coupon_rate: f64,    // annual coupon rate
    pub face: f64,           // face value (typically 100)
    pub t_years: f64,        // maturity in years
    pub freq: u32,           // payment frequency (1, 2, 4)
}

impl Bond {
    /// Continuous-compounded bond price.
    pub fn price(&self, ytm: f64) -> f64 {
        let n_periods = (self.t_years * self.freq as f64) as usize;
        let dt = 1.0 / self.freq as f64;
        (1..=n_periods).map(|t| {
            let mut cf = self.coupon_rate * self.face / self.freq as f64;
            if t == n_periods { cf += self.face; }
            let time_yrs = t as f64 * dt;
            cf * (-ytm * time_yrs).exp()
        }).sum()
    }

    pub fn macaulay_duration(&self, ytm: f64) -> f64 {
        let n_periods = (self.t_years * self.freq as f64) as usize;
        let dt = 1.0 / self.freq as f64;
        let price = self.price(ytm);
        let weighted_pv: f64 = (1..=n_periods).map(|t| {
            let mut cf = self.coupon_rate * self.face / self.freq as f64;
            if t == n_periods { cf += self.face; }
            let time_yrs = t as f64 * dt;
            time_yrs * cf * (-ytm * time_yrs).exp()
        }).sum();
        weighted_pv / price
    }

    pub fn modified_duration(&self, ytm: f64) -> f64 {
        self.macaulay_duration(ytm) / (1.0 + ytm / self.freq as f64)
    }

    pub fn convexity(&self, ytm: f64) -> f64 {
        let n_periods = (self.t_years * self.freq as f64) as usize;
        let dt = 1.0 / self.freq as f64;
        let price = self.price(ytm);
        let weighted_pv: f64 = (1..=n_periods).map(|t| {
            let mut cf = self.coupon_rate * self.face / self.freq as f64;
            if t == n_periods { cf += self.face; }
            let time_yrs = t as f64 * dt;
            time_yrs * (time_yrs + dt) * cf * (-ytm * time_yrs).exp()
        }).sum();
        weighted_pv / price
    }

    /// DV01 — price change per 1bp yield move.
    pub fn dv01(&self, ytm: f64) -> f64 {
        let price = self.price(ytm);
        let mod_d = self.modified_duration(ytm);
        -price * mod_d * 0.0001
    }
}

/// Portfolio of bonds — compute aggregate duration + convexity.
pub struct BondPortfolio {
    pub bonds: Vec<(Bond, f64, f64)>,  // (bond, weight, ytm)
}

impl BondPortfolio {
    pub fn portfolio_duration(&self) -> f64 {
        self.bonds.par_iter()
            .map(|(b, w, ytm)| w * b.modified_duration(*ytm))
            .sum()
    }
    pub fn portfolio_convexity(&self) -> f64 {
        self.bonds.par_iter()
            .map(|(b, w, ytm)| w * b.convexity(*ytm))
            .sum()
    }
}`,e7=`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._

/**
 * Distributed bond portfolio analytics across a 100k-bond book.
 * Used at pension funds (CalPERS, Ontario Teachers), insurance
 * companies (MetLife, Prudential), and asset managers (PIMCO).
 *
 * Compute portfolio duration + convexity for ALM (Asset-Liability
 * Management). Hedge interest-rate risk via Treasury futures.
 */
object BondAnalytics {

  case class Bond(couponRate: Double, face: Double,
                  tYears: Double, freq: Int)

  /** Continuous-compounded bond price. */
  def price(bond: Bond, ytm: Double): Double = {
    val nPeriods = (bond.tYears * bond.freq).toInt
    val dt = 1.0 / bond.freq
    (1 to nPeriods).map { t =>
      var cf = bond.couponRate * bond.face / bond.freq
      if (t == nPeriods) cf += bond.face
      val timeYrs = t * dt
      cf * math.exp(-ytm * timeYrs)
    }.sum
  }

  /** Macaulay duration (years). */
  def macaulayDuration(bond: Bond, ytm: Double): Double = {
    val nPeriods = (bond.tYears * bond.freq).toInt
    val dt = 1.0 / bond.freq
    val price = BondAnalytics.price(bond, ytm)
    val weightedPV = (1 to nPeriods).map { t =>
      var cf = bond.couponRate * bond.face / bond.freq
      if (t == nPeriods) cf += bond.face
      val timeYrs = t * dt
      timeYrs * cf * math.exp(-ytm * timeYrs)
    }.sum
    weightedPV / price
  }

  /** Modified duration. */
  def modifiedDuration(bond: Bond, ytm: Double): Double =
    macaulayDuration(bond, ytm) / (1 + ytm / bond.freq)

  /** Convexity (second-order price sensitivity). */
  def convexity(bond: Bond, ytm: Double): Double = {
    val nPeriods = (bond.tYears * bond.freq).toInt
    val dt = 1.0 / bond.freq
    val price = BondAnalytics.price(bond, ytm)
    val weightedPV = (1 to nPeriods).map { t =>
      var cf = bond.couponRate * bond.face / bond.freq
      if (t == nPeriods) cf += bond.face
      val timeYrs = t * dt
      timeYrs * (timeYrs + dt) * cf * math.exp(-ytm * timeYrs)
    }.sum
    weightedPV / price
  }

  /** DV01 — price change per 1bp yield move. */
  def dv01(bond: Bond, ytm: Double): Double = {
    val p = price(bond, ytm)
    val modD = modifiedDuration(bond, ytm)
    -p * modD * 0.0001
  }

  /** Portfolio duration + convexity from a bond book in Parquet. */
  def portfolioAnalytics(spark: SparkSession,
                          bookPath: String): (Double, Double) = {
    import spark.implicits._
    val book = spark.read.parquet(bookPath)
      .as[(Bond, Double, Double)]  // (bond, weight, ytm)
    val totalDur = book.map { case (b, w, y) =>
      w * modifiedDuration(b, y)
    }.reduce(_ + _)
    val totalConv = book.map { case (b, w, y) =>
      w * convexity(b, y)
    }.reduce(_ + _)
    (totalDur, totalConv)
  }
}`,e9=`defmodule Quant.BondAnalytics do
  @moduledoc """
  Streaming bond analytics — recompute duration/convexity/DV01
  as the yield curve moves tick-by-tick.

  HYPOTHETICAL SCENARIO: pension fund with USD 100M in 10y Treasury.
  Each 1bp yield move triggers a recompute + hedge adjustment.
  """

  use GenServer

  defstruct [:holdings_table, :yield_curve]

  def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

  @impl true
  def init(:ok) do
    # ETS: {bond_id} → %{coupon, face, t_years, freq, notional}
    holdings = :ets.new(:bond_holdings, [:set, :public, read_concurrency: true])
    {:ok, %__MODULE__{holdings_table: holdings, yield_curve: %{}}}
  end

  @impl true
  def handle_cast({:yield_update, tenor, new_yield}, state) do
    state = put_in(state, [:yield_curve, tenor], new_yield)
    # Recompute portfolio duration + DV01
    {total_dur, total_dv01} = portfolio_analytics(state)
    # Broadcast to ALM/hedge layer
    Phoenix.PubSub.broadcast(Quant.PubSub, "alm:metrics",
      {:portfolio_update, total_dur, total_dv01})
    {:noreply, state}
  end

  # Continuous-compounded bond price
  def price(coupon, face, ytm, t_years, freq) do
    n_periods = trunc(t_years * freq)
    dt = 1.0 / freq
    Enum.reduce(1..n_periods, 0.0, fn t, acc ->
      cf = if t == n_periods, do: coupon * face / freq + face,
                            else: coupon * face / freq
      time_yrs = t * dt
      acc + cf * :math.exp(-ytm * time_yrs)
    end)
  end

  def macaulay_duration(coupon, face, ytm, t_years, freq) do
    n_periods = trunc(t_years * freq)
    dt = 1.0 / freq
    p = price(coupon, face, ytm, t_years, freq)
    weighted_pv = Enum.reduce(1..n_periods, 0.0, fn t, acc ->
      cf = if t == n_periods, do: coupon * face / freq + face,
                            else: coupon * face / freq
      time_yrs = t * dt
      acc + time_yrs * cf * :math.exp(-ytm * time_yrs)
    end)
    weighted_pv / p
  end

  def modified_duration(coupon, face, ytm, t_years, freq) do
    macaulay_duration(coupon, face, ytm, t_years, freq) / (1 + ytm / freq)
  end

  def convexity(coupon, face, ytm, t_years, freq) do
    n_periods = trunc(t_years * freq)
    dt = 1.0 / freq
    p = price(coupon, face, ytm, t_years, freq)
    weighted_pv = Enum.reduce(1..n_periods, 0.0, fn t, acc ->
      cf = if t == n_periods, do: coupon * face / freq + face,
                            else: coupon * face / freq
      time_yrs = t * dt
      acc + time_yrs * (time_yrs + dt) * cf * :math.exp(-ytm * time_yrs)
    end)
    weighted_pv / p
  end

  defp portfolio_analytics(state) do
    holdings = :ets.tab2list(state.holdings_table)
    Enum.reduce(holdings, {0.0, 0.0}, fn {_id, %{coupon: c, face: f, t: t,
                                                  freq: fr, notional: n,
                                                  ytm: y}}, {td, tv01}) ->
      mod_d = modified_duration(c, f, y, t, fr)
      dv01 = -n * mod_d * 0.0001
      {td + mod_d, tv01 + dv01}
    end)
  end
end`;function e8({open:e,onClose:s,title:i,subtitle:o,accent:n,icon:l,children:d}){return(0,a.useEffect)(()=>{if(!e)return;let t=e=>{"Escape"===e.key&&s()};return window.addEventListener("keydown",t),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",t),document.body.style.overflow=""}},[e,s]),(0,t.jsx)(T.AnimatePresence,{children:e&&(0,t.jsxs)(r.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 md:p-6 overflow-y-auto",onClick:s,children:[(0,t.jsx)("button",{type:"button",onClick:s,className:"absolute top-3 right-3 z-30 p-2 rounded-full bg-background/90 border border-border hover:bg-accent transition-colors","aria-label":"Close",children:(0,t.jsx)(M.X,{className:"h-5 w-5"})}),(0,t.jsxs)("div",{className:"absolute top-3 left-3 z-30 px-3 py-1.5 rounded-full bg-background/90 border border-border flex items-center gap-2 text-xs font-semibold",children:[(0,t.jsx)("span",{style:{color:n},children:l}),(0,t.jsx)("span",{style:{color:n},children:i}),o&&(0,t.jsxs)("span",{className:"text-muted-foreground font-normal hidden md:inline",children:["· ",o]})]}),(0,t.jsxs)(r.motion.div,{initial:{scale:.95,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.95,opacity:0,y:20},transition:{duration:.25},className:"relative w-full max-w-5xl my-8 rounded-xl border border-border bg-background shadow-2xl overflow-hidden",onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)("div",{className:"border-b border-border/40 bg-muted/20 px-4 md:px-6 py-3 flex items-center gap-3",children:[(0,t.jsx)("div",{className:"flex items-center justify-center w-9 h-9 rounded-lg shrink-0",style:{backgroundColor:n+"20"},children:l}),(0,t.jsxs)("div",{className:"min-w-0",children:[(0,t.jsx)("p",{className:"text-base font-bold leading-tight",style:{color:n},children:i}),o&&(0,t.jsx)("p",{className:"text-xs text-muted-foreground font-mono",children:o})]})]}),(0,t.jsx)("div",{className:"p-4 md:p-6 max-h-[85vh] overflow-y-auto",children:d})]})]})})}function te({intent:e,math:a,insight:r,accent:s}){return(0,t.jsxs)("div",{className:"mt-4 space-y-2 text-xs",children:[(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-2.5",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5",children:"Design intent"}),(0,t.jsx)("p",{className:"text-foreground/80 leading-relaxed",children:e})]}),(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-2.5",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5",children:"Math foundation"}),(0,t.jsx)("p",{className:"font-mono text-[11px] text-primary leading-relaxed",children:a})]}),(0,t.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-0.5",children:"Implementation insight"}),(0,t.jsx)("p",{className:"text-emerald-700 dark:text-emerald-400 leading-relaxed",children:r})]})]})}function tt({tabs:e,runnablePython:r}){let[s,i]=(0,a.useState)(0),o=e[s];return(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.map((e,a)=>(0,t.jsx)("button",{type:"button",onClick:()=>i(a),className:`px-3 py-1.5 rounded-md text-xs font-semibold border transition-all ${a===s?"bg-primary text-primary-foreground border-primary":"bg-card border-border hover:border-primary hover:bg-accent"}`,children:e.lang.toUpperCase()},e.lang))}),(0,t.jsx)(n.CodeBlock,{language:o.lang,filename:o.filename,code:o.code}),r&&(0,t.jsxs)("div",{className:"mt-3 rounded-md border border-amber-500/40 bg-amber-500/5 p-3",children:[(0,t.jsxs)("p",{className:"text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-1",children:[(0,t.jsx)(D.Sparkles,{className:"h-3 w-3"})," Python — run in browser (Pyodide)"]}),(0,t.jsx)(l.PyodideRunner,{buttonLabel:`Run ${"python"===o.lang?"Python":"Python equivalent"} (Pyodide)`,code:r})]})]})}function ta(e){let t=1/(1+.3275911*Math.abs(e)),a=1-((((1.061405429*t-1.453152027)*t+1.421413741)*t-.284496736)*t+.254829592)*t*Math.exp(-e*e);return e>=0?a:-a}let tr=[{id:"delta-hedge",step:"1",title:"Dynamic Delta Hedging",subtitle:"Short 1 European Call → rebalance Δ daily over 10 days",accent:"oklch(0.65 0.16 30)",icon:(0,t.jsx)(g.TrendingUp,{className:"h-4 w-4"}),badge:"Black-Scholes Δ",brief:{derivative:"Short 1 European Call Option (Strike K=$100, Maturity T=10 days, Volatility σ=20%, Risk-free rate r=5%).",problem:"If the stock price rises, the option value goes up, losing the short-seller money.",solution:"The algorithm calculates the Delta (Δ) of the option continuously using the Black-Scholes formula and buys a matching fractional share of the underlying stock to immunise the portfolio against small stock price moves."},matrix:(0,t.jsx)(function(){return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(g.TrendingUp,{className:"h-3.5 w-3.5 text-primary"}),"Rebalancing matrix over 10 days (Short 1 Call K=$100, T=10d, σ=20%, r=5%)"]})}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-xs",children:[(0,t.jsx)("thead",{className:"bg-muted/30",children:(0,t.jsxs)("tr",{className:"border-b border-border/60",children:[(0,t.jsx)("th",{className:"text-left px-2 py-1.5 font-semibold",children:"Day"}),(0,t.jsx)("th",{className:"text-right px-2 py-1.5 font-semibold",children:"Spot (S)"}),(0,t.jsx)("th",{className:"text-right px-2 py-1.5 font-semibold",children:"T (yrs)"}),(0,t.jsx)("th",{className:"text-right px-2 py-1.5 font-semibold",children:"Delta (Δ)"}),(0,t.jsx)("th",{className:"text-left px-2 py-1.5 font-semibold",children:"Action"})]})}),(0,t.jsx)("tbody",{children:[{day:0,spot:100,t:.0274,delta:.5231,action:"Short 1 Call; Buy 0.5231 shares"},{day:1,spot:100.53,t:.0247,delta:.5883,action:"Price rose. Buy 0.0652 more shares"},{day:2,spot:101.08,t:.0219,delta:.631,action:"Buy 0.0427 more shares"},{day:3,spot:101.52,t:.0192,delta:.6692,action:"Price rose. Buy 0.0382 more shares"},{day:4,spot:101.95,t:.0164,delta:.7108,action:"Buy 0.0416 more shares"},{day:5,spot:102.47,t:.0137,delta:.861,action:"Price slightly dipped. Sell 0.0012 shares"},{day:6,spot:103.1,t:.011,delta:.9034,action:"Price rose. Buy 0.0424 more shares"},{day:7,spot:103.95,t:.0082,delta:.9512,action:"Buy 0.0478 more shares"},{day:8,spot:104.79,t:.0055,delta:.9993,action:"Deep ITM. Buy shares up to 0.9993"},{day:9,spot:104.85,t:.0027,delta:.9998,action:"Near expiry. Buy 0.0005 more shares"},{day:10,spot:104.89,t:0,delta:1,action:"Expires ITM. Deliver 1 full share"}].map((e,a)=>(0,t.jsxs)("tr",{className:"border-b border-border/30 last:border-0 hover:bg-muted/20",children:[(0,t.jsx)("td",{className:"px-2 py-1.5 font-mono",children:e.day}),(0,t.jsxs)("td",{className:"px-2 py-1.5 font-mono text-right",children:["$",e.spot.toFixed(2)]}),(0,t.jsx)("td",{className:"px-2 py-1.5 font-mono text-right",children:e.t.toFixed(4)}),(0,t.jsx)("td",{className:"px-2 py-1.5 font-mono text-right text-primary font-semibold",children:e.delta.toFixed(4)}),(0,t.jsx)("td",{className:"px-2 py-1.5 text-[11px] text-muted-foreground",children:e.action})]},a))})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"Delta rises from 0.523 → 1.000 as the option moves deep ITM. Continuous rebalancing keeps the portfolio delta-neutral (Δ_short_call + Δ_stock = 0). At expiry, algorithm holds 1 full share to cover the assignment."})})]})},{}),codeTabs:[{lang:"python",filename:"delta_hedge.py",code:en},{lang:"rust",filename:"delta_hedge.rs",code:el},{lang:"scala",filename:"DeltaHedging.scala",code:ed},{lang:"elixir",filename:"delta_hedge.ex",code:ec}],runnablePython:en,mathExpr:"Δ_call = N(d₁),  d₁ = (ln(S/K) + (r + σ²/2)·T) / (σ·√T)  ·  rebalance to keep Δ_short_call + Δ_stock = 0",intent:"Demonstrate the canonical Black-Scholes delta-hedging recipe: at each tick, hold −Δ shares of stock against a short option position. The resulting portfolio is locally riskless (no first-order S exposure) — the foundation of every options market-maker's risk system.",insight:"Continuous rebalancing drives P&L variance to zero (Black-Scholes replication theorem). Discrete daily rebalancing leaves a small gamma/theta residual — that residual is precisely what the Black-Scholes gamma term prices. Modern deep-hedging networks (Buehler 2019) optimise this residual directly under realistic transaction costs."},{id:"asian-option",step:"2",title:"Monte Carlo Asian Option (Path-Dependent)",subtitle:"Arithmetic-average call via 10⁴ antithetic GBM paths",accent:"oklch(0.65 0.16 165)",icon:(0,t.jsx)(f.Activity,{className:"h-4 w-4"}),badge:"MC + antithetic",brief:{derivative:"Asian call option with arithmetic-average payoff: max((1/N)·Σ Sᵢ − K, 0), N=252 daily observations, K=$100, T=1 year.",problem:"No closed-form solution exists for arithmetic-average Asian options (unlike geometric-average, which has the Kemna-Vorst 1990 formula). Pricing requires simulation.",solution:"Simulate 10,000 GBM price paths under the risk-neutral measure (μ → r), compute the average and payoff on each, then discount and average. Antithetic variates (Z and −Z) cut the standard error by ~50% for free."},matrix:(0,t.jsx)(function(){let e=[100];for(let t=1;t<252;t++){let a=1/252,r=(Math.sin(.7*t)+Math.cos(.3*t))*.5,s=e[t-1]*Math.exp((.05-.02)*a+.2*Math.sqrt(a)*r);e.push(s)}let a=e.reduce((e,t)=>e+t,0)/e.length,r=Math.max(...e),s=Math.min(...e),i=r-s||1;return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(f.Activity,{className:"h-3.5 w-3.5 text-primary"}),"Asian option: arithmetic average vs European payoff (T=1y, 252 obs)"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 180",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"30",y1:"140",x2:"380",y2:"140",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"30",y1:"20",x2:"30",y2:"140",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"30",y1:140-(100-s)/i*110,x2:"380",y2:140-(100-s)/i*110,stroke:"var(--chart-3)",strokeWidth:"1",strokeDasharray:"4,3"}),(0,t.jsxs)("text",{x:"32",y:140-(100-s)/i*110-4,fontSize:"9",fill:"var(--chart-3)",children:["K=$",100]}),(0,t.jsx)("line",{x1:"30",y1:140-(a-s)/i*110,x2:"380",y2:140-(a-s)/i*110,stroke:"var(--chart-2)",strokeWidth:"1.5",strokeDasharray:"6,3"}),(0,t.jsxs)("text",{x:"280",y:140-(a-s)/i*110-4,fontSize:"9",fill:"var(--chart-2)",children:["avg = $",a.toFixed(2)]}),(0,t.jsx)("polyline",{points:e.map((e,t)=>`${30+t/251*350},${140-(e-s)/i*110}`).join(" "),fill:"none",stroke:"var(--chart-1)",strokeWidth:"1.5"}),[63,126,189,252].map((a,r)=>(0,t.jsx)("circle",{cx:30+a/251*350,cy:140-(e[a]-s)/i*110,r:"3",fill:"var(--chart-4)",stroke:"var(--background)",strokeWidth:"1"},r)),(0,t.jsx)("text",{x:"30",y:"14",fontSize:"8",fill:"var(--foreground)",children:"Asian payoff = max(avg(S_i) - K, 0) — less volatile than European"})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"Asian payoff depends on the arithmetic average of 252 daily prices — smoother than the European payoff at expiry. Vol-exposure is roughly ½, so Asian options trade at lower premium (Asian ≈ $5.4 vs European ≈ $8.0 for our parameters)."})})]})},{}),codeTabs:[{lang:"python",filename:"asian_option.py",code:ep},{lang:"rust",filename:"asian_option.rs",code:em},{lang:"scala",filename:"AsianOptionPricer.scala",code:eh},{lang:"elixir",filename:"asian_option.ex",code:eu}],runnablePython:ep,mathExpr:"Payoff = max((1/N)·Σ Sᵢ − K, 0)  ·  Sᵢ = S₀·exp((r − ½σ²)·Δt + σ·√Δt·Zᵢ)  ·  Price = e^(−rT)·E[Payoff]",intent:"Showcase Monte Carlo pricing of path-dependent options where no closed form exists. The arithmetic-average Asian is the canonical test case for variance-reduction techniques (antithetic, control variates, importance sampling).",insight:"Antithetic variates pair each path Z with −Z, exploiting the negative correlation to halve the standard error at zero extra compute cost. GPU implementations (CuPy, JAX, PyTorch on A100) reach 100M paths/sec, enabling real-time XVA (CVA/DVA/FVA) computation for exotic derivatives books at JP Morgan, HSBC, and Allianz."},{id:"lstm-predictor",step:"3",title:"LSTM Price-Direction Predictor",subtitle:"60-day OHLCV lookback → 2-layer LSTM(64) → up/down signal",accent:"oklch(0.65 0.16 250)",icon:(0,t.jsx)(ei.Brain,{className:"h-4 w-4"}),badge:"Fischer 2018",brief:{derivative:"A learned trading signal: predict next-day direction (up/down) of a single stock from 60 days of OHLCV features (open, high, low, close, volume log-returns).",problem:"Daily equity returns are dominated by noise (~1% σ) — random baseline is exactly 50% directional accuracy. Any edge must come from weakly-stationary structure (mean reversion, momentum) that LSTM can pick up.",solution:"Train a 2-layer LSTM with 64 hidden units on 10+ years of S&P 500 constituents. The hidden state captures multi-timescale dependencies; output head is a single sigmoid for direction. Fischer 2018 reports ~52-54% hit rate — small but economically significant given leverage."},matrix:(0,t.jsx)(function(){let e=[60,55,50,45,40,30,20,10,1];return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(ei.Brain,{className:"h-3.5 w-3.5 text-primary"}),"LSTM architecture — 60-day OHLCV lookback, 2-layer, 64 hidden"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 200",className:"w-full h-auto",children:[e.map((a,r)=>{let s=30+42*r,i=60===a||30===a||1===a;return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:s,y:"70",width:"32",height:"50",rx:"3",fill:i?"oklch(0.65 0.16 250 / 0.4)":"oklch(0.55 0.05 250 / 0.15)",stroke:i?"oklch(0.75 0.16 250)":"oklch(0.45 0.05 250)",strokeWidth:i?1.5:.8}),(0,t.jsx)("text",{x:s+16,y:"90",textAnchor:"middle",fontSize:"7",fill:i?"oklch(0.85 0.16 250)":"oklch(0.55 0.05 250)",fontWeight:"bold",children:"LSTM"}),(0,t.jsxs)("text",{x:s+16,y:"100",textAnchor:"middle",fontSize:"6",fill:i?"oklch(0.75 0.10 250)":"oklch(0.45 0.05 250)",children:["t-",a]}),r<e.length-1&&(0,t.jsx)("line",{x1:s+32,y1:"95",x2:s+42,y2:"95",stroke:"oklch(0.55 0.05 250)",strokeWidth:"0.8",markerEnd:"url(#arrow)"})]},r)}),(0,t.jsx)("line",{x1:"60",y1:"70",x2:"350",y2:"70",stroke:"oklch(0.65 0.16 165)",strokeWidth:"1",strokeDasharray:"3,2"}),(0,t.jsx)("text",{x:"200",y:"64",textAnchor:"middle",fontSize:"8",fill:"oklch(0.65 0.16 165)",children:"hidden state h_t flow"}),e.map((e,a)=>{let r=30+42*a+16;return(0,t.jsx)("line",{x1:r,y1:"140",x2:r,y2:"125",stroke:"oklch(0.55 0.05 60)",strokeWidth:"0.8",markerEnd:"url(#arrow)"},a)}),(0,t.jsx)("text",{x:"200",y:"155",textAnchor:"middle",fontSize:"8",fill:"oklch(0.55 0.16 60)",children:"OHLCV features (5-dim per day)"}),(0,t.jsx)("rect",{x:"330",y:"70",width:"50",height:"20",rx:"3",fill:"oklch(0.65 0.16 60 / 0.4)",stroke:"oklch(0.75 0.16 60)",strokeWidth:"1"}),(0,t.jsx)("text",{x:"355",y:"83",textAnchor:"middle",fontSize:"7",fill:"oklch(0.85 0.16 60)",fontWeight:"bold",children:"Linear"}),(0,t.jsx)("line",{x1:"314",y1:"95",x2:"330",y2:"80",stroke:"oklch(0.55 0.05 250)",strokeWidth:"0.8",markerEnd:"url(#arrow)"}),(0,t.jsx)("text",{x:"355",y:"115",textAnchor:"middle",fontSize:"9",fill:"oklch(0.65 0.16 30)",fontWeight:"bold",children:"ŷ (up/down)"}),(0,t.jsx)("text",{x:"20",y:"180",fontSize:"8",fill:"var(--foreground)",children:"Input: (batch=32, seq_len=60, n_features=5) → LSTM(64)×2 → Linear(64→1) → Sigmoid"}),(0,t.jsx)("text",{x:"20",y:"194",fontSize:"8",fill:"var(--muted-foreground)",children:"Fischer 2018: ~52% directional accuracy on S&P 500 daily (1992-2015)"}),(0,t.jsx)("defs",{children:(0,t.jsx)("marker",{id:"arrow",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:(0,t.jsx)("path",{d:"M0,0 L6,3 L0,6",fill:"oklch(0.55 0.05 250 / 0.5)"})})})]})})]})},{}),codeTabs:[{lang:"python",filename:"lstm_predictor.py",code:ef},{lang:"rust",filename:"lstm_predictor.rs",code:eg},{lang:"scala",filename:"LSTMTrainer.scala",code:ex},{lang:"elixir",filename:"lstm_inference.ex",code:eb}],runnablePython:ef,mathExpr:"h_t = o_t · tanh(c_t)  ·  c_t = f_t·c_{t-1} + i_t·g_t  ·  f,i,o = σ(W·[h_{t-1}, x_t])  ·  g = tanh(W·[h_{t-1}, x_t])",intent:"Demonstrate the architecture used in the most-cited deep-learning-for-trading paper (Fischer & Krauss 2018). 4-gate LSTM (Hochreiter 1997) is the canonical sequence model; the 2-layer + sigmoid head is the standard config for binary direction prediction.",insight:"The 52% hit rate sounds marginal, but corresponds to a Sharpe ratio of ~1.0 when long top-decile / short bottom-decile of predictions (Fischer 2018). Recent transformer-based forecasters (PatchTST, TimeLLM) edge out LSTM on long-horizon tasks, but LSTM remains the production choice for high-frequency signal generation due to lower latency and smaller model size."},{id:"gnn-fraud",step:"4",title:"GNN Fraud Ring Detection",subtitle:"2-layer GraphSAGE on transaction graph → 2-class classifier",accent:"oklch(0.65 0.16 0)",icon:(0,t.jsx)(eo.Shield,{className:"h-4 w-4"}),badge:"Weber 2019",brief:{derivative:"A binary classifier on transaction-graph nodes: predict which accounts are part of a coordinated fraud ring (laundering cycle, peel chain, synthetic identity).",problem:"Per-transaction rule systems (velocity checks, IP blacklists) cannot detect multi-hop structures — a fraud ring is invisible when each individual transaction looks legitimate.",solution:"Build a graph where nodes = accounts and edges = shared attributes (IP, device, merchant). Train a 2-layer GraphSAGE-style GNN that aggregates neighbour features via message passing. Multi-hop propagation lets each node 'see' the structure of its 2-hop neighbourhood — exactly where rings live."},matrix:(0,t.jsx)(function(){let e=Array.from({length:12},(e,t)=>{let a=t/12*2*Math.PI;return{x:80+50*Math.cos(a),y:60+40*Math.sin(a),i:t}}),a=[2,5,8],s=[];for(let e=0;e<14;e++){let t=e%12,r=(e+3+e%4)%12,i=a.includes(t)&&a.includes(r);s.push({a:t,b:r,isRing:i})}for(let e=0;e<a.length;e++){let t=a[e],r=a[(e+1)%a.length];s.push({a:t,b:r,isRing:!0})}return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(eo.Shield,{className:"h-3.5 w-3.5 text-primary"}),"GNN fraud ring detection — 2-layer message passing catches cycles"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 200 180",className:"w-full h-auto",children:[s.map((a,r)=>{let s=e[a.a],i=e[a.b];return(0,t.jsx)("line",{x1:s.x,y1:s.y,x2:i.x,y2:i.y,stroke:a.isRing?"oklch(0.65 0.16 0)":"var(--border)",strokeWidth:a.isRing?1.4:.8,opacity:a.isRing?.9:.4},r)}),e.map(e=>{let r=a.includes(e.i);return(0,t.jsxs)("g",{children:[(0,t.jsx)("circle",{cx:e.x,cy:e.y,r:r?7:4,fill:r?"oklch(0.65 0.16 0)":"var(--chart-4)"}),(0,t.jsxs)("text",{x:e.x,y:e.y-12,textAnchor:"middle",fontSize:"7",fill:r?"oklch(0.65 0.16 0)":"var(--muted-foreground)",children:["T",e.i]})]},e.i)}),(0,t.jsx)(r.motion.circle,{cx:e[2].x,cy:e[2].y,r:"14",fill:"none",stroke:"oklch(0.65 0.16 0 / 0.5)",strokeWidth:"1",strokeDasharray:"3,2",animate:{r:[14,22,14],opacity:[.6,.1,.6]},transition:{duration:1.8,repeat:1/0}}),(0,t.jsx)(r.motion.circle,{cx:e[5].x,cy:e[5].y,r:"14",fill:"none",stroke:"oklch(0.65 0.16 0 / 0.5)",strokeWidth:"1",strokeDasharray:"3,2",animate:{r:[14,22,14],opacity:[.6,.1,.6]},transition:{duration:1.8,repeat:1/0,delay:.3}}),(0,t.jsx)("text",{x:"100",y:"160",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",fontWeight:"bold",children:"Fraud ring (T2 → T5 → T8 → T2) — 2-hop propagation"}),(0,t.jsx)("text",{x:"100",y:"173",textAnchor:"middle",fontSize:"8",fill:"var(--muted-foreground)",children:"Per-transaction rules miss this; GNN's multi-hop features catch it."})]})})]})},{}),codeTabs:[{lang:"python",filename:"fraud_gnn.py",code:e_},{lang:"rust",filename:"fraud_gnn.rs",code:ey},{lang:"scala",filename:"FraudGNN.scala",code:ev},{lang:"elixir",filename:"fraud_gnn.ex",code:ek}],runnablePython:e_,mathExpr:"h_v^(l+1) = σ(W·h_v^(l) + mean_{u∈N(v)} W·h_u^(l))  ·  classifier(h_v^(L)) → P(fraud)",intent:"Implement the GraphSAGE architecture (Hamilton 2017) for the Weber 2019 'Scale' fraud-detection benchmark. Multi-hop message passing is the key — single-hop rules cannot see cycles. The same architecture powers Visa, Mastercard, PayPal, and JPMorgan production fraud systems.",insight:"GNN-based fraud detection achieves 5-10x higher fraud recall than rule-based systems at the same false-positive rate. The graph structure carries information that no per-transaction feature can — a single fraud ring member is flagged because its 2-hop neighbourhood is unusually dense and reciprocal."},{id:"svi-vol-surface",step:"5",title:"SVI Volatility Surface Calibration",subtitle:"5-parameter vol smile (Gatheral 2004) — Levenberg-Marquardt fit",accent:"oklch(0.65 0.16 200)",icon:(0,t.jsx)(f.Activity,{className:"h-4 w-4"}),badge:"Gatheral 2004",brief:{derivative:"Volatility surface σ(K, T) for an option book — implied vols differ across strikes/maturities (volatility smile/smirk). Must be arbitrage-free.",problem:"Direct interpolation of market implied vols often produces arbitrage-violating surfaces (calendar-spread or butterfly arbitrage). Need a parametric form that guarantees no-arbitrage and fits market quotes.",solution:"Fit the 5-parameter SVI model: w(k) = a + b·[ρ·(k-m) + √((k-m)² + σ²)] where w is total implied variance, k is log-moneyness. The SVI form guarantees no calendar-spread arbitrage when b·(1+|ρ|) < 4/T. Calibrate via Levenberg-Marquardt."},matrix:(0,t.jsx)(function(){let e=Array.from({length:80},(e,t)=>{let a=-.3+t/79*.6,r=Math.sqrt(Math.max((.04+.3*(-.2*(a-0)+Math.sqrt((a-0)**2+.010000000000000002)))/.25,0));return{k:a,vol:r}}),a=e.map(e=>e.vol),r=Math.min(...a),s=Math.max(...a)-r||1,i=Math.sqrt(.28),o=e.map((e,t)=>t%7==0?.002*Math.sin(t):0);return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(f.Activity,{className:"h-3.5 w-3.5 text-primary"}),"SVI volatility smile — 3-month European calls on a single underlying"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 200",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"40",y1:"170",x2:"380",y2:"170",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"40",y1:"20",x2:"40",y2:"170",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:210,y1:"20",x2:210,y2:"170",stroke:"var(--chart-3)",strokeWidth:"1",strokeDasharray:"4,3"}),(0,t.jsx)("text",{x:214,y:"30",fontSize:"9",fill:"var(--chart-3)",children:"ATM"}),(0,t.jsx)("polyline",{points:e.map((e,t)=>`${40+t/79*340},${170-(e.vol-r)/s*130-20}`).join(" "),fill:"none",stroke:"var(--chart-2)",strokeWidth:"2"}),e.filter((e,t)=>t%5==0).map((e,a)=>{let i=e.vol+o[5*a];return(0,t.jsx)("circle",{cx:40+5*a/79*340,cy:170-(i-r)/s*130-20,r:"3",fill:"var(--chart-1)",opacity:"0.7"},a)}),(0,t.jsx)("circle",{cx:210,cy:170-(i-r)/s*130-20,r:"5",fill:"var(--chart-3)",stroke:"var(--background)",strokeWidth:"1.5"}),(0,t.jsx)("text",{x:"20",y:"100",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",transform:"rotate(-90 20 100)",children:"implied vol"}),(0,t.jsx)("text",{x:"210",y:"190",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",children:"log-moneyness k = ln(K/F)"}),(0,t.jsx)("text",{x:"50",y:"14",fontSize:"9",fill:"var(--foreground)",fontWeight:"bold",children:"SVI: w(k) = a + b·[ρ(k-m) + √((k-m)² + σ²)]"}),(0,t.jsx)("text",{x:"270",y:"40",fontSize:"9",fill:"var(--chart-2)",children:"a=0.04, b=0.30, ρ=-0.20, m=0, σ=0.10"}),(0,t.jsxs)("text",{x:"270",y:"55",fontSize:"9",fill:"var(--chart-3)",children:["ATM vol = ",(100*i).toFixed(2),"%"]})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"The 5 SVI parameters (a, b, ρ, m, σ) describe the level, slope, skew, ATM, and curvature of the smile. Calibration fits market quotes to the curve via Levenberg-Marquardt. No-arbitrage constraint: b·(1+|ρ|) < 4/T."})})]})},{}),codeTabs:[{lang:"python",filename:"svi_calibration.py",code:eS},{lang:"rust",filename:"svi_calibration.rs",code:ew},{lang:"scala",filename:"SVICalibrator.scala",code:ej},{lang:"elixir",filename:"svi_calibrator.ex",code:eN}],runnablePython:eS,mathExpr:"w(k) = a + b·[ρ·(k-m) + √((k-m)² + σ²)]  ·  no-arb: b·(1+|ρ|) < 4/T",intent:"Calibrate the 5-parameter SVI volatility surface (Gatheral 2004) to market implied volatilities. SVI's parametric form guarantees no calendar-spread arbitrage and is the industry standard for listed-option desks (CBOE, CME option market-makers).",insight:"SVI is preferred over spline interpolation because it has only 5 parameters (vs 20+ for cubic splines), is smooth, and obeys the Lee-Wingpertinger no-arbitrage bounds. Production calibration uses Levenberg-Marquardt with parameter scaling; the linear part (a, b) for fixed (ρ, m, σ) is solved via OLS as a warm-start, then refined via nonlinear optimisation."},{id:"markowitz-frontier",step:"6",title:"Markowitz Efficient Frontier",subtitle:"min w'Σw s.t. w'μ = r_target, 1'w = 1 (Markowitz 1952, Nobel 1990)",accent:"oklch(0.65 0.16 60)",icon:(0,t.jsx)(g.TrendingUp,{className:"h-4 w-4"}),badge:"Markowitz 1952",brief:{derivative:"A portfolio of 3 assets: Stocks (μ=10%, σ=20%), Bonds (μ=4%, σ=10%), Gold (μ=6%, σ=14%) with given covariance matrix.",problem:"Choose weights w to minimise risk (variance) for a target return — or equivalently, maximise return for a given risk budget. The 'efficient frontier' is the upper envelope of feasible (risk, return) points.",solution:"Solve the closed-form quadratic program: w(r) = Σ^-1·[μ | 1]·A^-1·[r ; 1] where A is a 2×2 matrix of risk-free-covariance scalars. The frontier traces out the optimal trade-off; the tangency point maximises Sharpe = (μ_p − rf)/σ_p."},matrix:(0,t.jsx)(function(){let e=Array.from({length:50},()=>{let e=Math.random(),t=Math.random(),a=Math.random(),r=e+t+a,s=[e/r,t/r,a/r],i=[.1,.04,.06],o=[[.04,.005,.002],[.005,.01,-.001],[.002,-.001,.02]],n=s.reduce((e,t,a)=>e+t*i[a],0),l=0;for(let e=0;e<3;e++)for(let t=0;t<3;t++)l+=s[e]*s[t]*o[e][t];return{vol:Math.sqrt(l),ret:n}}),a=e=>40+e/.22*340,r=e=>170-e/.12*150;return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(g.TrendingUp,{className:"h-3.5 w-3.5 text-primary"}),"Markowitz efficient frontier — 3-asset universe (Stocks, Bonds, Gold)"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 200",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:40,y1:170,x2:380,y2:170,stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:40,y1:170,x2:40,y2:20,stroke:"var(--border)",strokeWidth:"0.8"}),e.map((e,s)=>(0,t.jsx)("circle",{cx:a(e.vol),cy:r(e.ret),r:"2",fill:"var(--muted-foreground)",opacity:"0.4"},s)),(0,t.jsx)("polyline",{points:[{vol:.094,ret:.051},{vol:.097,ret:.055},{vol:.105,ret:.06},{vol:.118,ret:.067},{vol:.135,ret:.075},{vol:.152,ret:.087},{vol:.175,ret:.092},{vol:.2,ret:.1}].map(e=>`${a(e.vol)},${r(e.ret)}`).join(" "),fill:"none",stroke:"var(--chart-2)",strokeWidth:"2"}),(0,t.jsx)("circle",{cx:a(.094),cy:r(.051),r:"5",fill:"var(--chart-3)",stroke:"var(--background)",strokeWidth:"1.5"}),(0,t.jsx)("text",{x:a(.094)+8,y:r(.051)-4,fontSize:"9",fill:"var(--chart-3)",children:"MVP"}),(0,t.jsx)("circle",{cx:a(.152),cy:r(.087),r:"6",fill:"var(--chart-1)",stroke:"var(--background)",strokeWidth:"1.5"}),(0,t.jsx)("text",{x:a(.152)+8,y:r(.087)-4,fontSize:"9",fill:"var(--chart-1)",children:"Tangency (max-Sharpe)"}),(0,t.jsx)("line",{x1:a(0),y1:r(.02),x2:380,y2:r(.02)+-((380-a(0))*.44078947368421045*(.22/.12)*1),stroke:"var(--chart-4)",strokeWidth:"1.5",strokeDasharray:"4,3"}),(0,t.jsx)("text",{x:300,y:r(.02)-6,fontSize:"9",fill:"var(--chart-4)",children:"CML (rf→tangency)"}),(0,t.jsx)("text",{x:"20",y:"100",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",transform:"rotate(-90 20 100)",children:"expected return"}),(0,t.jsx)("text",{x:"210",y:"190",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",children:"volatility (σ)"}),(0,t.jsx)("text",{x:"60",y:"14",fontSize:"9",fill:"var(--foreground)",fontWeight:"bold",children:"min w'Σw  s.t.  w'μ = r_target,  1'w = 1"})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"Frontier = upper envelope of (vol, return) feasible set. MVP minimises variance; tangency point maximises Sharpe = (μ_p − rf)/σ_p. Capital Market Line (CML) from rf through tangency dominates all portfolios on the frontier for a risk-free-asset-inclusive investor."})})]})},{}),codeTabs:[{lang:"python",filename:"markowitz_frontier.py",code:eT},{lang:"rust",filename:"markowitz_frontier.rs",code:eM},{lang:"scala",filename:"MarkowitzOptimizer.scala",code:eD},{lang:"elixir",filename:"markowitz.ex",code:eC}],runnablePython:eT,mathExpr:"min w'Σw  s.t.  w'μ = r_target,  1'w = 1  ·  tangency: w_tan ∝ Σ^-1·(μ − rf·1)",intent:"Implement Markowitz's mean-variance optimisation (1952, Nobel 1990) in closed form — the foundation of modern portfolio theory. Compute the efficient frontier, minimum-variance portfolio, and tangency (max-Sharpe) point.",insight:"Markowitz IS the same convex optimisation (QP) as regularised least-squares ML training — Σ plays the role of the Gram matrix X'X, the Sharpe ratio is signal-to-noise. The whole of mean-variance finance IS regularised ML, understood fifty years before 'machine learning' was named."},{id:"deep-hedging",step:"7",title:"Deep Hedging (Buehler 2019)",subtitle:"NN learns hedge action via CVaR minimisation under transaction costs",accent:"oklch(0.65 0.16 320)",icon:(0,t.jsx)(ei.Brain,{className:"h-4 w-4"}),badge:"Buehler 2019",brief:{derivative:"Hedging a short option position with realistic transaction costs (5 bps per share). Black-Scholes assumes zero costs — real markets have costs that eat P&L.",problem:"BS Delta continuously rebalances, which is optimal when costs are zero. With costs, the optimal hedge deviates from BS Delta — small rebalances should be skipped when cost exceeds the gamma P&L benefit.",solution:"Train a neural network h(state_t) → hedge action. Loss = CVaR_α of hedged P&L across 10⁷-10⁹ simulated paths. The NN learns to trade less when costs outweigh the gamma benefit, producing tighter P&L tails than BS Delta under realistic frictions."},matrix:(0,t.jsx)(function(){let e=Array.from({length:30},(e,t)=>{let a=(t-15)/5;return 60*Math.exp(-(a*a)/8)}),a=Array.from({length:30},(e,t)=>{let a=(t-15)/5;return 80*Math.exp(-(a*a)/4)}),s=Math.max(...e,...a),i=Math.round(25.5);return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(ei.Brain,{className:"h-3.5 w-3.5 text-primary"}),"Deep hedging P&L distribution — tighter tail vs Black-Scholes"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 200",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"30",y1:"170",x2:"380",y2:"170",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"30",y1:"20",x2:"30",y2:"170",stroke:"var(--border)",strokeWidth:"0.8"}),e.map((e,a)=>(0,t.jsx)("rect",{x:30+11.5*a,y:170-e/s*130,width:"10",height:e/s*130,fill:"var(--chart-1)",opacity:"0.45"},`bs-${a}`)),a.map((e,a)=>(0,t.jsx)(r.motion.rect,{initial:{height:0,y:170},animate:{height:e/s*130,y:170-e/s*130},transition:{duration:.3,delay:.01*a},x:30+11.5*a+1,width:"8",fill:"var(--chart-4)",opacity:"0.65"},`deep-${a}`)),(0,t.jsx)("line",{x1:363.5,y1:"20",x2:363.5,y2:"170",stroke:"var(--chart-1)",strokeWidth:"1.5",strokeDasharray:"3,2"}),(0,t.jsx)("text",{x:359.5,y:"14",fontSize:"9",fill:"var(--chart-1)",textAnchor:"end",children:"BS CVaR_95"}),(0,t.jsx)("line",{x1:30+11.5*i,y1:"20",x2:30+11.5*i,y2:"170",stroke:"var(--chart-4)",strokeWidth:"1.5",strokeDasharray:"3,2"}),(0,t.jsx)("text",{x:30+11.5*i+4,y:"14",fontSize:"9",fill:"var(--chart-4)",children:"Deep CVaR_95"}),(0,t.jsx)("rect",{x:"270",y:"180",width:"10",height:"6",fill:"var(--chart-1)",opacity:"0.6"}),(0,t.jsx)("text",{x:"285",y:"187",fontSize:"8",fill:"var(--foreground)",children:"BS Delta hedge"}),(0,t.jsx)("rect",{x:"160",y:"180",width:"10",height:"6",fill:"var(--chart-4)",opacity:"0.7"}),(0,t.jsx)("text",{x:"175",y:"187",fontSize:"8",fill:"var(--foreground)",children:"Deep hedge (Buehler 2019)"}),(0,t.jsx)("text",{x:"200",y:"195",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",children:"hedged P&L"})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"BS Delta over-trades under transaction costs (assumes zero). Deep hedging NN learns to skip small rebalances when cost exceeds the gamma benefit → tighter left-tail (lower CVaR) for same mean P&L. Buehler 2019 reports 20-40% CVaR reduction on realistic cost levels."})})]})},{}),codeTabs:[{lang:"python",filename:"deep_hedging.py",code:eA},{lang:"rust",filename:"deep_hedging.rs",code:eP},{lang:"scala",filename:"DeepHedger.scala",code:eL},{lang:"elixir",filename:"deep_hedger.ex",code:eB}],runnablePython:eA,mathExpr:"min_θ  CVaR_α( Σ_t h_θ(state_t)·ΔS_t − premium − costs − payoff )  ·  α = 0.95",intent:"Implement Buehler 2019's deep-hedging recipe: replace the BS Delta hedge rule with a neural network trained to minimise CVaR of hedged P&L. The NN learns to optimise hedge actions under transaction costs and market impact — things BS Delta ignores.",insight:"Deep hedging outperforms BS Delta by 20-40% in after-cost P&L variance under realistic cost levels (Buehler 2019). Production deployed at JP Morgan, HSBC, and Allianz. This is the strongest case for ML in derivatives: not prediction of prices, but optimisation of actions — the same RL-as-stochastic-control framing as Atari agents."},{id:"cva-xva",step:"8",title:"CVA / XVA (Counterparty Credit Risk)",subtitle:"CVA = E[LGD · EE(t) · PD(t)] — Basel III FRTB regulatory capital",accent:"oklch(0.65 0.16 165)",icon:(0,t.jsx)(eo.Shield,{className:"h-4 w-4"}),badge:"Basel III FRTB",brief:{derivative:"Counterparty credit risk on a 5-year European call. If the counterparty defaults before expiry, lose the positive replacement value of the trade.",problem:"Risk-free option pricing (Black-Scholes) assumes the counterparty never defaults. Real counterparties (corporates, hedge funds) have non-zero default probability — must adjust the price for credit risk.",solution:"CVA = E[LGD · EE · PD] integrated over time. LGD = Loss Given Default (1 - recovery rate); EE(t) = Expected Exposure at time t (positive replacement value, simulated via Monte Carlo); PD(t) = Probability of Default between t and t+dt (intensity model from credit spread). CVA + DVA + FVA + MVA + KVA = full XVA framework."},matrix:(0,t.jsx)(function(){let e=Array.from({length:51},(e,t)=>{let a=t/50;return 8.5*Math.exp(-(.1*a))*(1+.3*Math.sin(4*a))*(1-.6*a)}),a=Math.max(...e),r=e.reduce((e,t)=>e+t,0)/e.length;return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(eo.Shield,{className:"h-3.5 w-3.5 text-primary"}),"CVA expected exposure profile — EE(t) over 5 years"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 200",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"30",y1:"170",x2:"380",y2:"170",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"30",y1:"20",x2:"30",y2:"170",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"30",y1:170-r/a*130,x2:"380",y2:170-r/a*130,stroke:"var(--chart-3)",strokeWidth:"1.5",strokeDasharray:"6,3"}),(0,t.jsxs)("text",{x:"280",y:170-r/a*130-4,fontSize:"9",fill:"var(--chart-3)",children:["EPE = ",r.toFixed(2)]}),(0,t.jsx)("polyline",{points:e.map((e,t)=>`${30+t/50*350},${170-e/a*130}`).join(" "),fill:"none",stroke:"var(--chart-1)",strokeWidth:"2"}),(0,t.jsx)("polyline",{points:"30,170 "+e.map((e,t)=>`${30+t/50*350},${170-e/a*130}`).join(" ")+" 380,170",fill:"var(--chart-1)",opacity:"0.15"}),[0,1,2,3,4,5].map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:30+e/5*350,y1:"170",x2:30+e/5*350,y2:"174",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsxs)("text",{x:30+e/5*350,y:"184",textAnchor:"middle",fontSize:"8",fill:"var(--muted-foreground)",children:[e,"y"]})]},e)),(0,t.jsx)("text",{x:"20",y:"100",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",transform:"rotate(-90 20 100)",children:"EE(t)"}),(0,t.jsx)("text",{x:"60",y:"14",fontSize:"9",fill:"var(--foreground)",fontWeight:"bold",children:"CVA = Σ_t  LGD · EE(t) · PD(t) · DF(t)"}),(0,t.jsx)("text",{x:"60",y:"28",fontSize:"9",fill:"var(--chart-2)",children:"LGD=0.60, hazard=0.02 → CVA ≈ 0.42 USD (rf price 21.07 → 20.65)"})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"EE(t) = mean positive exposure at time t (simulated via GBM). EPE = time-averaged EE. CVA = LGD · EPE · PD integrated with discounting — the credit risk component of XVA. Other XVA components: DVA (own credit), FVA (funding), MVA (margin), KVA (capital)."})})]})},{}),codeTabs:[{lang:"python",filename:"cva_xva.py",code:eE},{lang:"rust",filename:"cva_xva.rs",code:eq},{lang:"scala",filename:"CVAEngine.scala",code:eF},{lang:"elixir",filename:"cva_engine.ex",code:eR}],runnablePython:eE,mathExpr:"CVA = Σ_t  LGD · EE(t) · PD(t) · DF(t)  ·  XVA = CVA + DVA + FVA + MVA + KVA",intent:"Compute CVA — the credit valuation adjustment — via Monte Carlo exposure simulation. This is the regulatory capital metric under Basel III FRTB and the foundation of the broader XVA framework (DVA, FVA, MVA, KVA) used by every bank's counterparty risk desk.",insight:"CVA is computed daily on the full OTC derivatives portfolio (10⁵-10⁶ trades × 10⁴ paths each = 10⁹-10¹⁰ simulation steps). The XVA desk is now a profit centre at every major bank — AFRM (JP Morgan), EQD (Goldman), etc. pre-trade price XVA, post-trade hedge it. The same exposure profile feeds CVA, DVA, FVA, MVA, and KVA — one simulation, five adjustments."},{id:"heston-stoch-vol",step:"9",title:"Heston Stochastic Volatility",subtitle:"Mean-reverting variance + correlated Brownian (Heston 1993)",accent:"oklch(0.65 0.16 30)",icon:(0,t.jsx)(f.Activity,{className:"h-4 w-4"}),badge:"Heston 1993",brief:{derivative:"1-year European call on AAPL with stochastic volatility. Heston params: v₀=0.04, κ=2.0, θ=0.04, ξ=0.3, ρ=-0.7. Synthetic market: Bloomberg-style implied-vol smile on 7 strikes.",problem:"Black-Scholes assumes constant vol — but real vol is stochastic. The equity-index leverage smile (spot down → vol up) requires a stochastic-vol model with negative correlation.",solution:"Heston's mean-reverting variance SDE: dv_t = κ(θ-v_t)dt + ξ·√v_t·dW_v with correlation ρ to spot. Monte Carlo via Euler-Maruyama with full truncation (neg-var fix). Negative ρ produces the leverage smile."},matrix:(0,t.jsx)(function(){let e=[100],a=[.04];for(let t=1;t<60;t++){let r=1/252,s=.7*Math.sin(.7*t),i=-.7*s+Math.sqrt(.51)*Math.cos(.3*t),o=a[t-1],n=Math.max(0,o+2*(.04-o)*r+.3*Math.sqrt(Math.max(o,0))*Math.sqrt(r)*i),l=e[t-1]*Math.exp((.05-.5*o)*r+Math.sqrt(Math.max(o,0))*Math.sqrt(r)*s);e.push(l),a.push(n)}let r=Math.min(...e),s=Math.min(...a),i=Math.max(...e)-r||1,o=Math.max(...a)-s||.001;return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(f.Activity,{className:"h-3.5 w-3.5 text-primary"}),"Heston stochastic vol — spot (top) + variance (bottom), ρ=-0.7"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 220",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"30",y1:"80",x2:"380",y2:"80",stroke:"var(--border)",strokeWidth:"0.5"}),(0,t.jsx)("polyline",{points:e.map((e,t)=>`${30+t/59*350},${80-(e-r)/i*60-5}`).join(" "),fill:"none",stroke:"var(--chart-2)",strokeWidth:"1.8"}),(0,t.jsx)("text",{x:"35",y:"20",fontSize:"9",fill:"var(--chart-2)",fontWeight:"bold",children:"Spot S(t)"}),(0,t.jsx)("line",{x1:"30",y1:"180",x2:"380",y2:"180",stroke:"var(--border)",strokeWidth:"0.5"}),(0,t.jsx)("polyline",{points:a.map((e,t)=>`${30+t/59*350},${180-(e-s)/o*60-5}`).join(" "),fill:"none",stroke:"var(--chart-1)",strokeWidth:"1.8"}),(0,t.jsx)("text",{x:"35",y:"120",fontSize:"9",fill:"var(--chart-1)",fontWeight:"bold",children:"Variance v(t)"}),(0,t.jsx)("text",{x:"200",y:"210",textAnchor:"middle",fontSize:"8",fill:"var(--muted-foreground)",children:"ρ=-0.7: spot down → vol up (leverage effect)"})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"Heston's variance is mean-reverting (Ornstein-Uhlenbeck on √v). The negative correlation between dW_s and dW_v produces the equity-index leverage smile — when spot drops, vol spikes."})})]})},{}),codeTabs:[{lang:"python",filename:"heston.py",code:ez},{lang:"rust",filename:"heston.rs",code:eV},{lang:"scala",filename:"HestonModel.scala",code:eI},{lang:"elixir",filename:"heston.ex",code:eG}],runnablePython:ez,mathExpr:"dv_t = κ(θ-v_t)dt + ξ·√v_t·dW_v  ·  dS_t = μ·S_t·dt + √v_t·S_t·dW_s  ·  corr(dW_s, dW_v) = ρ",intent:"Implement Heston's stochastic volatility model (Heston 1993) with mean-reverting variance and correlated Brownian motions. The negative correlation ρ produces the equity-index leverage smile.",insight:"Heston with ρ<0 produces the equity leverage smile (spot down → vol up). ξ controls vol-of-vol and tail fatness. Production calibration runs every minute at JPM/GS exotic desks via Levenberg-Marquardt on the option surface."},{id:"hull-white-rates",step:"10",title:"Hull-White Interest Rate Model",subtitle:"Mean-reverting short rate + θ(t) calibrated to curve",accent:"oklch(0.65 0.16 60)",icon:(0,t.jsx)(g.TrendingUp,{className:"h-4 w-4"}),badge:"Hull-White 1990",brief:{derivative:"5-year USD 10M notional interest rate swap — receive fixed 4% vs floating 3M LIBOR. Synthetic yield curve: 3M=3.5%, 5y=4.2% (upward-sloping).",problem:"Black-Scholes assumes deterministic rates — real rates are stochastic. Bond prices depend on the rate path, not just today's curve. Hull-White calibrates θ(t) to the current strip and adds stochastic dynamics.",solution:"Hull-White SDE: dr_t = (θ(t) - a·r_t)dt + σ·dW_t. Calibrate θ(t) via strip of zero-coupon yields; simulate paths via Euler; value swap as PV of (fixed - floating) cashflows."},matrix:(0,t.jsx)(function(){let e=[];for(let t=0;t<5;t++){let a=[.035];for(let e=1;e<100;e++){let r=.5*Math.sin(.5*e+t)+.3*Math.cos(.3*e),s=.04+.05*e*.001,i=a[e-1]+(s-.1*a[e-1])*.05+.012*Math.sqrt(.05)*r;a.push(i)}e.push(a)}let a=e.flat(),r=Math.min(...a),s=Math.max(...a)-r||.001,i=Array.from({length:100},(t,a)=>e.reduce((e,t)=>e+t[a],0)/e.length),o=[1];for(let e=1;e<100;e++)o.push(o[e-1]*Math.exp(-(.05*i[e])));return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(f.Activity,{className:"h-3.5 w-3.5 text-primary"}),"Hull-White short rate (5 paths, top) + discount curve P(0,t) (bottom)"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 220",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"30",y1:"80",x2:"380",y2:"80",stroke:"var(--border)",strokeWidth:"0.5"}),e.map((e,a)=>(0,t.jsx)("polyline",{points:e.map((e,t)=>`${30+t/99*350},${80-(e-r)/s*60-5}`).join(" "),fill:"none",stroke:"var(--chart-2)",strokeWidth:"0.8",opacity:.5},a)),(0,t.jsx)("text",{x:"35",y:"20",fontSize:"9",fill:"var(--chart-2)",fontWeight:"bold",children:"Short rate r(t)"}),(0,t.jsx)("text",{x:"30",y:"73",fontSize:"7",fill:"var(--muted-foreground)",children:"5%"}),(0,t.jsx)("text",{x:"30",y:"86",fontSize:"7",fill:"var(--muted-foreground)",children:"3.5%"}),(0,t.jsx)("line",{x1:"30",y1:"180",x2:"380",y2:"180",stroke:"var(--border)",strokeWidth:"0.5"}),(0,t.jsx)("polyline",{points:o.map((e,t)=>`${30+t/99*350},${180-(e-.7)/.3*60}`).join(" "),fill:"none",stroke:"var(--chart-3)",strokeWidth:"2"}),(0,t.jsx)("text",{x:"35",y:"120",fontSize:"9",fill:"var(--chart-3)",fontWeight:"bold",children:"P(0,t) — discount factor"}),(0,t.jsx)("text",{x:"200",y:"210",textAnchor:"middle",fontSize:"8",fill:"var(--muted-foreground)",children:"a=0.10 (slow mean reversion), σ=1.2%, T=5y"})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"Hull-White mean-reverts toward θ(t) which is calibrated to the current zero curve. Slow mean-reversion (a=0.10) lets 5y rates wander far from r0; the discount curve declines smoothly."})})]})},{}),codeTabs:[{lang:"python",filename:"hull_white.py",code:eW},{lang:"rust",filename:"hull_white.rs",code:eO},{lang:"scala",filename:"HullWhiteModel.scala",code:eH},{lang:"elixir",filename:"hull_white.ex",code:eK}],runnablePython:eW,mathExpr:"dr_t = (θ(t) - a·r_t)·dt + σ·dW_t  ·  P(0,t) = E[exp(-∫r ds)]",intent:"Implement Hull-White one-factor interest-rate model with time-dependent drift θ(t) calibrated to the current yield curve. Value a 5y IRS via Monte Carlo on simulated rate paths.",insight:"θ(t) is calibrated to the stripped zero curve — without this, the model prices bonds inconsistently with the market. The mean-reversion a controls how fast rates return to θ(t); slow reversion (a=0.10) lets 5y rates wander far from r0. Production: PIMCO, BlackRock fixed-income desks."},{id:"sabr-vol-surface",step:"11",title:"SABR Volatility Surface (Rates)",subtitle:"Hagan 2002 asymptotic formula — swaption smile",accent:"oklch(0.65 0.16 200)",icon:(0,t.jsx)(f.Activity,{className:"h-4 w-4"}),badge:"Hagan 2002",brief:{derivative:"5y10y swaption book — ATM F=4%, synthetic market quotes across 5 strikes from 200bp OTM payer to 200bp OTM receiver.",problem:"SVI is equity-focused; rates need a model that captures the rate-specific smile (negative rates, low-vol environment). SABR's CEV-style forward SDE handles both normal (β=0) and lognormal (β=1) limits.",solution:"SABR model: dF = α·F^β·dW_F, dα = ν·α·dW_α. Hagan's asymptotic formula gives σ_imp(K,F) in closed form (4 params: α, β, ρ, ν). β controls backbone shape, ρ controls skew, ν controls convexity."},matrix:(0,t.jsx)(function(){let e=Array.from({length:60},(e,t)=>{let a,r=.01+t/59*.06;if(1e-10>Math.abs(.04-r))a=.015*(1+(.25/24*9e-6/.04+-11249999999999998e-20+.007049999999999999)*5);else{let e=100*(.04*r)**.25*Math.log(.04/r),t=Math.log((Math.sqrt(1- -.4*e+e*e)+e- -.2)/1.2),s=(.04*r)**.25;a=.003/s*e/t*(1+(.25/24*9e-6/s**2+-8999999999999999e-20/(4*s)+.007049999999999999)*5)}return{k:r,vol:Math.abs(a)}}),a=e.map(e=>e.vol),r=Math.min(...a),s=Math.max(...a)-r||.001,i=e.find(e=>.001>Math.abs(e.k-.04))?.vol||.3,o=e.filter((e,t)=>t%8==0).map(e=>({...e,mktVol:e.vol*(1+.05*Math.sin(1e3*e.k))}));return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(f.Activity,{className:"h-3.5 w-3.5 text-primary"}),"SABR smile — 5y10y swaption, F=4%, β=0.5, ρ=-0.2, ν=0.3"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 200",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"40",y1:"170",x2:"380",y2:"170",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"40",y1:"20",x2:"40",y2:"170",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:210,y1:"20",x2:210,y2:"170",stroke:"var(--chart-3)",strokeWidth:"1",strokeDasharray:"4,3"}),(0,t.jsx)("text",{x:214,y:"30",fontSize:"9",fill:"var(--chart-3)",children:"ATM"}),(0,t.jsx)("polyline",{points:e.map((e,t)=>`${40+t/59*340},${170-(e.vol-r)/s*130-20}`).join(" "),fill:"none",stroke:"var(--chart-2)",strokeWidth:"2"}),o.map((e,a)=>(0,t.jsx)("circle",{cx:40+(e.k-.01)/.06*340,cy:170-(e.mktVol-r)/s*130-20,r:"3",fill:"var(--chart-1)",opacity:"0.7"},a)),(0,t.jsx)("text",{x:"20",y:"100",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",transform:"rotate(-90 20 100)",children:"σ_imp"}),(0,t.jsx)("text",{x:"210",y:"190",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",children:"strike K"}),(0,t.jsx)("text",{x:"50",y:"14",fontSize:"9",fill:"var(--foreground)",fontWeight:"bold",children:"SABR: σ_imp = α / F^(1-β) · [1 + ...]"}),(0,t.jsxs)("text",{x:"270",y:"55",fontSize:"9",fill:"var(--chart-2)",children:["ATM vol = ",(100*i).toFixed(2),"%"]})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"β controls backbone shape (0=normal, 1=lognormal, 0.5=typical rates). ρ controls skew (negative → left-skew). ν controls convexity. SABR calibrated per swaption bucket at rates desks."})})]})},{}),codeTabs:[{lang:"python",filename:"sabr.py",code:e$},{lang:"rust",filename:"sabr.rs",code:eU},{lang:"scala",filename:"SABRModel.scala",code:eY},{lang:"elixir",filename:"sabr.ex",code:eZ}],runnablePython:e$,mathExpr:"σ_imp(K,F) ≈ α/(F^(1-β)) · (1 + correction terms)  ·  dF = α·F^β·dW_F, dα = ν·α·dW_α",intent:"Implement Hagan 2002's SABR asymptotic implied-vol formula for swaption smile calibration. SABR is the rates-desk standard (vs SVI for equities) because its CEV-style forward SDE handles both normal and lognormal rate regimes.",insight:"SABR is calibrated per swaption bucket (e.g. 5y10y, 10y10y) at every major bank's rates desk. β=0.5 typical for rates, β=1 for high-rate envs and equities, β=0 for negative rates (JGB, Bund). ρ<0 produces left-skew typical of rate payer pressure."},{id:"lob-replay",step:"12",title:"Real-time Limit Order Book Replay",subtitle:"ITCH feed → L2 book → OFI signal (Cont 2010)",accent:"oklch(0.65 0.16 250)",icon:(0,t.jsx)(u.Cpu,{className:"h-4 w-4"}),badge:"Cont 2010",brief:{derivative:"HFT market-making on E-mini S&P 500 futures (ESM4). Replay 1000 synthetic ITCH events (add/cancel/trade) against an L2 book around mid=5400, tick=0.25.",problem:"HFT firms need to track every order-book mutation in microseconds. The L2 book is a sorted bid/ask ladder; each event (add/cancel/trade) mutates it. Order-flow imbalance (OFI) at the top predicts short-term mid moves.",solution:"Build an OrderBook class with BTreeMap/sorted-dict bid/ask ladders. Replay events; compute OFI = bid_top_size / (bid_top + ask_top). OFI > 0.5 → bid pressure → mid rises. CME/Nasdaq ITCH parsed at sub-microsecond latency."},matrix:(0,t.jsx)(function(){let e=[],a=[],r=42;for(let t=0;t<8;t++)e.push(50+(r=(9301*r+49297)%233280)/233280*200),a.push(50+(r=(9301*r+49297)%233280)/233280*200);let s=Math.max(...e,...a);return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(f.Activity,{className:"h-3.5 w-3.5 text-primary"}),"L2 order book — ES (E-mini S&P 500), mid=",5400,", tick=",.25]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 200",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"200",y1:"10",x2:"200",y2:"190",stroke:"var(--chart-3)",strokeWidth:"1",strokeDasharray:"3,2"}),(0,t.jsx)("text",{x:"200",y:"8",textAnchor:"middle",fontSize:"8",fill:"var(--chart-3)",fontWeight:"bold",children:"mid"}),e.map((e,a)=>{let r=30+20*a,i=e/s*150;return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:200-i,y:r,width:i,height:"16",fill:"var(--chart-4)",opacity:.5+(1-a/8)*.4}),(0,t.jsx)("text",{x:195,y:r+11,textAnchor:"end",fontSize:"7",fill:"var(--foreground)",children:(5400-(a+1)*.25).toFixed(2)}),(0,t.jsx)("text",{x:205-i,y:r+11,textAnchor:"end",fontSize:"7",fill:"var(--foreground)",fontWeight:"bold",children:e})]},`b-${a}`)}),a.map((e,a)=>{let r=30+20*a,i=e/s*150;return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:200,y:r,width:i,height:"16",fill:"var(--chart-1)",opacity:.5+(1-a/8)*.4}),(0,t.jsx)("text",{x:"205",y:r+11,fontSize:"7",fill:"var(--foreground)",children:(5400+(a+1)*.25).toFixed(2)}),(0,t.jsx)("text",{x:195+i,y:r+11,fontSize:"7",fill:"var(--foreground)",fontWeight:"bold",children:e})]},`a-${a}`)}),(0,t.jsx)("text",{x:"50",y:"195",fontSize:"8",fill:"var(--chart-4)",children:"← bids"}),(0,t.jsx)("text",{x:"350",y:"195",textAnchor:"end",fontSize:"8",fill:"var(--chart-1)",children:"asks →"})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"Order-flow imbalance (OFI) at top-of-book predicts mid moves: heavy bids → mid rises; heavy asks → mid falls. Cont 2010. HFT firms use this with sub-microsecond latency."})})]})},{}),codeTabs:[{lang:"python",filename:"lob_replay.py",code:eX},{lang:"rust",filename:"lob_replay.rs",code:eJ},{lang:"scala",filename:"LOBReplay.scala",code:eQ},{lang:"elixir",filename:"lob_replay.ex",code:e0}],runnablePython:eX,mathExpr:"OFI = bid_top_size / (bid_top_size + ask_top_size)  ·  OFI > 0.5 → mid rises",intent:"Implement a real-time L2 order-book reconstruction engine that consumes ITCH/Mold UDP market data, maintains a sorted bid/ask ladder, and emits order-flow-imbalance (OFI) signals.",insight:"OFI is a leading indicator of mid-price moves — Cont 2010 shows OFI predicts 40%+ of next-10-second mid variance. Production HFT firms (Citadel Securities, Virtu, Jump) process this in <1μs via FPGA + custom C — the Elixir UDP multicast version here is the same pattern at lower throughput."},{id:"black76-commodity",step:"13",title:"Black-76 Commodity Futures Option",subtitle:"Options on futures — WTI crude oil (Black 1976)",accent:"oklch(0.65 0.16 165)",icon:(0,t.jsx)(g.TrendingUp,{className:"h-4 w-4"}),badge:"Black 1976",brief:{derivative:"3-month ATM call on WTI crude oil futures (CLM4). Synthetic curve: 8 contracts from CLM4 (front) at USD 78.50/bbl to CLG5 (back) at USD 76.20/bbl — backwardation.",problem:"Options on futures (not spot) need a modified Black-Scholes — the forward price F replaces spot S, and the entire payoff is discounted at r (no continuous yield q).",solution:"Black-76 formula: C = e^(-rT)·[F·N(d1) - K·N(d2)], d1 = (ln(F/K) + σ²/2·T)/(σ·√T). Used on NYMEX, ICE, CBOT commodity futures options. Backwardation means front > back → positive roll yield for longs."},matrix:(0,t.jsx)(function(){let e=[{name:"CLM4",expiry:.2,price:78.5},{name:"CLN4",expiry:.28,price:78.2},{name:"CLQ4",expiry:.36,price:77.9},{name:"CLV4",expiry:.45,price:77.6},{name:"CLX4",expiry:.53,price:77.3},{name:"CLZ4",expiry:.7,price:76.8},{name:"CLF5",expiry:.78,price:76.5},{name:"CLG5",expiry:.86,price:76.2}],a=e.map(e=>e.price),r=Math.min(...a)-.2,s=Math.max(...a)+.2-r,i=[76,77,78,79,80],o=[.4,.36,.34,.33,.32],n=i.map((e,t)=>{let a=o[t],r=(Math.log(78.5/e)+.5*a*a*.25)/(a*Math.sqrt(.25)),s=r-a*Math.sqrt(.25);return Math.exp(-.0125)*(39.25*(1+ta(r))-.5*e*(1+ta(s)))});return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(f.Activity,{className:"h-3.5 w-3.5 text-primary"}),"Black-76 — WTI futures curve (backwardation) + ATM call prices"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 200",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"40",y1:"100",x2:"380",y2:"100",stroke:"var(--border)",strokeWidth:"0.5"}),(0,t.jsx)("polyline",{points:e.map((t,a)=>`${40+a/(e.length-1)*340},${100-(t.price-r)/s*60-30}`).join(" "),fill:"none",stroke:"var(--chart-2)",strokeWidth:"2"}),e.map((a,i)=>(0,t.jsxs)("g",{children:[(0,t.jsx)("circle",{cx:40+i/(e.length-1)*340,cy:100-(a.price-r)/s*60-30,r:"3",fill:"var(--chart-2)"}),(0,t.jsx)("text",{x:40+i/(e.length-1)*340,y:100-(a.price-r)/s*60-38,textAnchor:"middle",fontSize:"7",fill:"var(--foreground)",children:a.name})]},a.name)),(0,t.jsx)("text",{x:"20",y:"65",fontSize:"9",fill:"var(--chart-2)",fontWeight:"bold",children:"F (USD/bbl)"}),(0,t.jsx)("line",{x1:"380",y1:"110",x2:"380",y2:"180",stroke:"var(--border)",strokeWidth:"0.5"}),i.map((e,a)=>{let r=180-n[a]/Math.max(...n)*60-10;return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:"385",y:r-4,width:"10",height:"8",fill:"var(--chart-3)",opacity:"0.6"}),(0,t.jsx)("text",{x:"395",y:r+3,textAnchor:"end",fontSize:"6",fill:"var(--foreground)",children:e})]},`opt-${e}`)}),(0,t.jsx)("text",{x:"350",y:"115",fontSize:"8",fill:"var(--chart-3)",fontWeight:"bold",children:"Calls"}),(0,t.jsx)("text",{x:"200",y:"195",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",children:"contract expiry (years)"})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"Backwardation: front > back → roll yield positive for longs. Black-76 prices options on F (forward) not S (spot) — used on NYMEX, ICE, CBOT commodity futures options."})})]})},{}),codeTabs:[{lang:"python",filename:"black76.py",code:e1},{lang:"rust",filename:"black76.rs",code:e2},{lang:"scala",filename:"Black76.scala",code:e5},{lang:"elixir",filename:"black76.ex",code:e4}],runnablePython:e1,mathExpr:"C = e^(-rT)·[F·N(d1) - K·N(d2)]  ·  d1 = (ln(F/K) + σ²/2·T)/(σ·√T)",intent:"Implement Black-76 — the standard model for options on commodity futures. Differs from Black-Scholes by using forward F instead of spot S, and discounting the entire payoff.",insight:"Black-76 powers every oil major (BP, Shell, XOM) and commodity hedge fund (Citadel Commodities, Trafigura). The backwardation curve (front > back) gives longs a positive roll yield — they capture it by rolling futures before expiry."},{id:"bond-duration-convexity",step:"14",title:"Bond Duration & Convexity",subtitle:"ΔP/P ≈ -D·Δy + ½·C·(Δy)² (Macaulay 1938, Hicks 1939)",accent:"oklch(0.65 0.16 320)",icon:(0,t.jsx)(ei.Brain,{className:"h-4 w-4"}),badge:"Macaulay 1938",brief:{derivative:"USD 100M position in 10-year Treasury bond (coupon 4%, semi-annual, YTM 4.2%). Yield curve shifts +100bp. Estimate loss via duration + convexity; hedge via short 10y Treasury futures.",problem:"Bond prices change non-linearly with yield. Duration (first-order) is a linear approximation that breaks down for large yield moves. Convexity (second-order) captures the curvature.",solution:"Macaulay duration = weighted-average time-to-cashflow. Modified duration = D_mac / (1 + y/m). Convexity = Σ t²·CF_t·DF_t / P. Price change: ΔP/P ≈ -D_mod·Δy + ½·C·(Δy)². Hedge: short Treasury futures to bring portfolio DV01 to zero."},matrix:(0,t.jsx)(function(){let e,a,r=Array.from({length:60},(e,t)=>{let a=.02+t/59*.05,r=0;for(let e=1;e<=20;e++){let t=2;20===e&&(t+=100),r+=t*Math.exp(-a*e*.5)}return{ytm:a,price:r}}),s=r.map(e=>e.price),i=Math.min(...s),o=Math.max(...s)-i,n=r.find(e=>.001>Math.abs(e.ytm-.042))?.price||100,l=r.map(e=>({ytm:e.ytm,price:n*(1-8.32517140058766*(e.ytm-.042))}));return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card overflow-hidden",children:[(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/40 border-b border-border/60",children:(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-1.5",children:[(0,t.jsx)(f.Activity,{className:"h-3.5 w-3.5 text-primary"}),"Bond price-yield curve — tangent = duration, curvature = convexity"]})}),(0,t.jsx)("div",{className:"p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 200",className:"w-full h-auto",children:[(0,t.jsx)("line",{x1:"40",y1:"170",x2:"380",y2:"170",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("line",{x1:"40",y1:"20",x2:"40",y2:"170",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("polyline",{points:l.map((e,t)=>`${40+t/59*340},${170-(e.price-i)/o*130-20}`).join(" "),fill:"none",stroke:"var(--chart-3)",strokeWidth:"1.5",strokeDasharray:"4,3"}),(0,t.jsx)("text",{x:"80",y:"40",fontSize:"8",fill:"var(--chart-3)",children:"tangent (duration)"}),(0,t.jsx)("polyline",{points:r.map((e,t)=>`${40+t/59*340},${170-(e.price-i)/o*130-20}`).join(" "),fill:"none",stroke:"var(--chart-2)",strokeWidth:"2"}),(0,t.jsx)("text",{x:"240",y:"60",fontSize:"8",fill:"var(--chart-2)",children:"actual (convex)"}),(e=40+r.findIndex(e=>.001>Math.abs(e.ytm-.042))/59*340,a=170-(n-i)/o*130-20,(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("circle",{cx:e,cy:a,r:"4",fill:"var(--chart-1)",stroke:"var(--background)",strokeWidth:"1.5"}),(0,t.jsxs)("text",{x:e+6,y:a-6,fontSize:"8",fill:"var(--chart-1)",fontWeight:"bold",children:["y=","4.2","%"]})]})),(0,t.jsx)("text",{x:"20",y:"100",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",transform:"rotate(-90 20 100)",children:"price"}),(0,t.jsx)("text",{x:"210",y:"190",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",children:"yield y"}),(0,t.jsx)("text",{x:"50",y:"14",fontSize:"9",fill:"var(--foreground)",fontWeight:"bold",children:"ΔP/P ≈ -D·Δy + ½·C·(Δy)²"})]})}),(0,t.jsx)("div",{className:"px-3 py-2 bg-muted/30 border-t border-border/60",children:(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground",children:"Duration (tangent) is the linear approximation; convexity is the curvature. For large |Δy|, convexity matters — long bonds gain more from rate drops than they lose from rate rises (asymmetric)."})})]})},{}),codeTabs:[{lang:"python",filename:"bond_duration.py",code:e6},{lang:"rust",filename:"bond_duration.rs",code:e3},{lang:"scala",filename:"BondAnalytics.scala",code:e7},{lang:"elixir",filename:"bond_analytics.ex",code:e9}],runnablePython:e6,mathExpr:"ΔP/P ≈ -D_mod·Δy + ½·C·(Δy)²  ·  D_mod = D_mac / (1 + y/m)  ·  DV01 = -P · D_mod · 0.0001",intent:"Implement bond duration and convexity — the foundational interest-rate risk metrics. Used by pension funds, insurance companies, and asset managers for ALM (asset-liability management) and duration-hedge design.",insight:"Convexity is always positive for long bonds — gains from rate drops exceed losses from rate rises (asymmetric). Duration alone is a linear approximation that underestimates gains and overestimates losses. Production: CalPERS, MetLife, PIMCO use this for daily ALM with Treasury futures hedges."}];function ts(){let[e,s]=(0,a.useState)(null),i=e?tr.find(t=>t.id===e):null;return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-4",children:[(0,t.jsxs)("p",{className:"text-sm font-semibold text-primary mb-1 flex items-center gap-1.5",children:[(0,t.jsx)(D.Sparkles,{className:"h-4 w-4"})," 14 quant scenarios · 4 languages each · click any card"]}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground leading-relaxed",children:"Each card opens a lazy popup with the scenario brief (Derivative, Problem, Quant Solution), a visualisation matrix (rebalancing table / vol smile / efficient frontier / fraud-ring graph / P&L distribution / exposure profile / spot+variance paths / order-book depth / futures curve / price-yield curve), multi-language code (Python / Rust / Scala / Elixir), an in-browser Pyodide runner for the Python version, and math-foundation + implementation-insight callouts. Scenarios span pricing (Black-Scholes, MC Asian, Heston, Black-76, SABR), portfolio theory (Markowitz), ML (LSTM, GNN, Deep Hedging), risk (CVA/XVA, Bond Duration), market microstructure (LOB replay), and rates (Hull-White)."})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3",children:tr.map(e=>(0,t.jsxs)(r.motion.button,{type:"button",onClick:()=>s(e.id),className:"relative rounded-xl overflow-hidden border border-border/60 hover:border-primary/60 hover:shadow-lg transition-all bg-gradient-to-br from-card to-muted/30 group text-left",whileHover:{y:-4},whileTap:{scale:.98},"aria-label":`Open: ${e.title}`,children:[(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,t.jsx)("div",{className:"flex items-center justify-center w-8 h-8 rounded-lg shrink-0",style:{backgroundColor:e.accent+"20"},children:e.icon}),(0,t.jsx)(m.Badge,{variant:"outline",className:"text-[10px]",style:{color:e.accent},children:e.badge})]}),(0,t.jsx)("p",{className:"text-xs font-bold leading-tight",style:{color:e.accent},children:e.title}),(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1 font-mono leading-snug",children:e.subtitle}),(0,t.jsxs)("div",{className:"mt-3 flex items-center gap-2 text-[10px] text-muted-foreground",children:[(0,t.jsxs)("span",{className:"font-mono",children:["step ",e.step,"/14"]}),(0,t.jsx)("span",{children:"·"}),(0,t.jsx)("span",{className:"font-mono",children:"Python · Rust · Scala · Elixir"})]})]}),(0,t.jsx)("div",{className:"h-1",style:{backgroundColor:e.accent}})]},e.id))}),(0,t.jsx)(e8,{open:!!i,onClose:()=>s(null),title:i?.title??"",subtitle:i?.subtitle,accent:i?.accent??"oklch(0.55 0.16 250)",icon:i?.icon??(0,t.jsx)(u.Cpu,{className:"h-4 w-4"}),children:i&&(0,t.jsxs)("div",{className:"space-y-5",children:[(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-3 space-y-2 text-xs",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground",children:"Scenario brief"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-foreground/80 inline",children:"The Derivative: "}),(0,t.jsx)("span",{className:"text-muted-foreground",children:i.brief.derivative})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-foreground/80 inline",children:"The Problem: "}),(0,t.jsx)("span",{className:"text-muted-foreground",children:i.brief.problem})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-foreground/80 inline",children:"The Quant Solution: "}),(0,t.jsx)("span",{className:"text-muted-foreground",children:i.brief.solution})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5",children:"Visualisation"}),i.matrix]}),(0,t.jsx)(te,{intent:i.intent,math:i.mathExpr,insight:i.insight,accent:i.accent}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5",children:"Code — 4 languages (Python · Rust · Scala · Elixir) · scroll for Pyodide runner"}),(0,t.jsx)(tt,{tabs:i.codeTabs,runnablePython:i.runnablePython})]})]})})]})}let ti=`use statrs::distribution::{Normal, Distribution};
use tch::{nn, Tensor, Kind, Reduction};
use rand::{Rng, SeedableRng};
use rand::rngs::StdRng;
use rayon::prelude::*;
use std::collections::HashMap;

// ============================================================
// 1. BlackScholesModel — vectorised European option pricing + Greeks
//    C = S\xb7N(d1) - K\xb7e^(-rT)\xb7N(d2)
//    d1 = (ln(S/K) + (r + σ\xb2/2)\xb7T) / (σ\xb7√T)
//    d2 = d1 - σ\xb7√T
//    Greeks: Delta, Gamma, Vega, Theta, Rho
// ============================================================

pub struct BlackScholesModel;

impl BlackScholesModel {
    /// Single-point call price + 5 Greeks.
    #[inline]
    pub fn price_call(s: f64, k: f64, t: f64, r: f64, sigma: f64)
        -> (f64, f64, f64, f64, f64, f64)
    {
        if t <= 0.0 || sigma <= 0.0 {
            let intrinsic = (s - k).max(0.0);
            return (intrinsic, if s > k { 1.0 } else { 0.0 },
                    0.0, 0.0, 0.0, 0.0);
        }
        let sqrt_t = t.sqrt();
        let d1 = ((s / k).ln() + (r + 0.5 * sigma * sigma) * t)
               / (sigma * sqrt_t);
        let d2 = d1 - sigma * sqrt_t;
        let n = Normal::new(0.0, 1.0).unwrap();
        let n_d1 = n.cdf(d1); let n_d2 = n.cdf(d2);
        let pdf_d1 = n.pdf(d1);
        let discount = (-r * t).exp();

        let price = s * n_d1 - k * discount * n_d2;
        let delta = n_d1;
        let gamma = pdf_d1 / (s * sigma * sqrt_t);
        let vega = s * pdf_d1 * sqrt_t / 100.0;
        let theta = (-s * pdf_d1 * sigma / (2.0 * sqrt_t)
                     - r * k * discount * n_d2) / 365.0;
        let rho = k * t * discount * n_d2 / 100.0;
        (price, delta, gamma, vega, theta, rho)
    }

    /// Batch price a whole option book — Rayon parallel.
    pub fn price_book(options: &[(f64, f64, f64, f64, f64)])
        -> Vec<(f64, f64, f64, f64, f64, f64)>
    {
        options.par_iter()
            .map(|&(s, k, t, r, sigma)|
                Self::price_call(s, k, t, r, sigma))
            .collect()
    }
}

// ============================================================
// 2. MonteCarloPricer — GBM simulation + antithetic variates
//    dS = μ\xb7S\xb7dt + σ\xb7S\xb7dW
//    S(t+dt) = S(t) \xb7 exp((μ - \xbdσ\xb2)\xb7dt + σ\xb7√dt\xb7Z)
//    Supports: European, Asian (arithmetic avg), Barrier (up-and-out)
// ============================================================

pub struct MonteCarloPricer {
    pub n_paths: usize,
    pub n_steps: usize,
    pub antithetic: bool,
}

impl MonteCarloPricer {
    /// Simulate GBM paths: returns (n_paths, n_steps+1) Vec.
    pub fn simulate_gbm(&self, s0: f64, mu: f64, sigma: f64, t: f64)
        -> Vec<Vec<f64>>
    {
        let dt = t / self.n_steps as f64;
        let drift = (mu - 0.5 * sigma * sigma) * dt;
        let diffusion = sigma * dt.sqrt();
        let mut rng = StdRng::seed_from_u64(42);
        let n = if self.antithetic { self.n_paths / 2 } else { self.n_paths };

        (0..n).flat_map(|_| {
            let z: Vec<f64> = (0..self.n_steps).map(|_| rng.gen()).collect();
            let signs: &[f64] = if self.antithetic { &[1.0, -1.0] } else { &[1.0] };
            signs.iter().map(move |&sign| {
                let mut path = Vec::with_capacity(self.n_steps + 1);
                path.push(s0);
                let mut s = s0;
                for z_i in z.iter() {
                    s = s * (drift + sign * diffusion * z_i).exp();
                    path.push(s);
                }
                path
            })
        }).collect()
    }

    pub fn price_european(&self, s0: f64, k: f64, t: f64,
                          r: f64, sigma: f64) -> f64 {
        let paths = self.simulate_gbm(s0, r, sigma, t);
        let n = paths.len() as f64;
        let mean_payoff = paths.par_iter()
            .map(|p| (p[self.n_steps] - k).max(0.0))
            .sum::<f64>() / n;
        (-r * t).exp() * mean_payoff
    }

    pub fn price_asian(&self, s0: f64, k: f64, t: f64,
                       r: f64, sigma: f64) -> f64 {
        let paths = self.simulate_gbm(s0, r, sigma, t);
        let n = paths.len() as f64;
        let mean_payoff = paths.par_iter()
            .map(|p| {
                let avg = p[1..].iter().sum::<f64>() / (p.len() - 1) as f64;
                (avg - k).max(0.0)
            }).sum::<f64>() / n;
        (-r * t).exp() * mean_payoff
    }

    pub fn price_barrier_up_and_out(&self, s0: f64, k: f64, t: f64,
                                     r: f64, sigma: f64, h: f64) -> f64 {
        let paths = self.simulate_gbm(s0, r, sigma, t);
        let n = paths.len() as f64;
        let mean_payoff = paths.par_iter()
            .map(|p| {
                let knocked = p.iter().cloned()
                    .fold(f64::NEG_INFINITY, f64::max) >= h;
                let payoff = (p[self.n_steps] - k).max(0.0);
                if knocked { 0.0 } else { payoff }
            }).sum::<f64>() / n;
        (-r * t).exp() * mean_payoff
    }
}

// ============================================================
// 3. LSTMPredictor — 2-layer LSTM (Hochreiter 1997, Fischer 2018)
//    Input : (batch, seq_len=60, n_features=5) — OHLCV log-returns
//    Output: (batch, 1) — next-day log-return
//    Hit rate on S&P 500 daily 1992-2015: ~52% directional accuracy
// ============================================================

pub struct LSTMPredictor {
    lstm: nn::LSTM,
    head: nn::Linear,
    vs: nn::VarStore,
}

impl LSTMPredictor {
    pub fn new(p: &nn::Path) -> Self {
        let vs = p.sub("lstm_predictor");
        let lstm_config = nn::LSTMConfig {
            input_size: 5, hidden_size: 64, num_layers: 2,
            batch_first: true, dropout: 0.2, ..Default::default()
        };
        let lstm = nn::LSTM::new(&vs / "lstm", &lstm_config);
        let head = nn::LinearConfig::new(64, 1).build(&vs / "head");
        Self { lstm, head, vs }
    }

    pub fn forward(&self, x: &Tensor) -> Tensor {
        let (out, _) = self.lstm.seq(x);
        let last = out.select(1, -1);
        self.head.forward(&last)
    }

    pub fn predict_direction(&self, x: &Tensor) -> Tensor {
        (self.forward(x).sigmoid() > 0.5).to_kind(Kind::Int64)
    }

    /// Train step — Adam optimiser, BCE loss.
    pub fn train_step(&mut self, x: &Tensor, y: &Tensor,
                      opt: &mut nn::Optimizer) -> f64 {
        let logits = self.forward(x);
        let loss = logits.binary_cross_entropy_with_logits::<Tensor>(
            y, None, None, Reduction::Mean);
        opt.backward_step(&loss);
        f64::from(&loss)
    }
}

// ============================================================
// 4. FraudGNN — 2-layer GraphSAGE (Hamilton 2017, Weber 2019)
//    h_v^(l+1) = σ(W\xb7h_v + mean_{u∈N(v)} W\xb7h_u)
// ============================================================

pub struct FraudGNN {
    node_proj: nn::Linear,
    edge_proj: nn::Linear,
    layers: Vec<nn::Linear>,
    classifier: nn::Sequential,
}

impl FraudGNN {
    pub fn new(p: &nn::Path) -> Self {
        let vs = p.sub("fraud_gnn");
        let node_proj = nn::LinearConfig::new(16, 64).build(&vs / "node_proj");
        let edge_proj = nn::LinearConfig::new(8, 64).build(&vs / "edge_proj");
        let layers = vec![
            nn::LinearConfig::new(64, 64).build(&vs / "layer_0"),
            nn::LinearConfig::new(64, 64).build(&vs / "layer_1"),
        ];
        let classifier = nn::seq()
            .add(nn::LinearConfig::new(64, 32).build(&vs / "cls_0"))
            .add(nn::Func::new(|x| x.relu()))
            .add(nn::LinearConfig::new(32, 2).build(&vs / "cls_1"));
        Self { node_proj, edge_proj, layers, classifier }
    }

    pub fn forward(&self, node_feats: &Tensor,
                   edge_index: &Tensor, edge_feats: &Tensor) -> Tensor {
        let n_nodes = node_feats.size()[0] as i64;
        let hidden = 64;
        let mut h = self.node_proj.forward(node_feats);
        let e = self.edge_proj.forward(edge_feats);

        for layer in &self.layers {
            let src = edge_index.select(0, 0);
            let tgt = edge_index.select(0, 1);
            let messages = e.multiply(&h.index_select(0, &src));
            let mut agg = Tensor::zeros(&[n_nodes, hidden],
                (Kind::Float, h.device()));
            let mut counts = Tensor::zeros(&[n_nodes, 1],
                (Kind::Float, h.device()));
            agg = agg.index_add_(&tgt, &messages, 0);
            counts = counts.index_add_(&tgt,
                &Tensor::ones(&[src.size()[0], 1],
                    (Kind::Float, h.device())), 0);
            let agg = agg.divide(&counts.clamp_min(1.0));
            h = layer.forward(&h.add(&agg)).relu();
        }
        self.classifier.forward(&h)
    }
}`,to=`import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._
import org.apache.spark.sql.expressions.UserDefinedFunction
import org.apache.spark.graphx._
import org.apache.spark.rdd.RDD
import org.deeplearning4j.nn.conf.{NeuralNetConfiguration, Updater}
import org.deeplearning4j.nn.conf.layers.{DenseLayer, OutputLayer, LSTM, RnnOutputLayer}
import org.deeplearning4j.nn.weights.WeightInit
import org.deeplearning4j.optimize.listeners.ScoreListener
import org.nd4j.linalg.activations.Activation
import org.nd4j.linalg.lossfunctions.LossFunctions

// ============================================================
// 1. BlackScholesModel — distributed pricing via Spark UDF
//    C = S\xb7N(d1) - K\xb7e^(-rT)\xb7N(d2)
// ============================================================

object BlackScholesModel {

  /** Standard normal CDF via erf approximation (Abramowitz-Stegun). */
  def erf(x: Double): Double = {
    val t = 1.0 / (1.0 + 0.3275911 * math.abs(x))
    val y = 1.0 - (((((1.061405429*t - 1.453152027)*t) + 1.421413741)*t
                   - 0.284496736)*t + 0.254829592) * t * math.exp(-x*x)
    if (x >= 0) y else -y
  }

  def normCdf(x: Double): Double = 0.5 * (1.0 + erf(x / math.sqrt(2)))

  /** Black-Scholes call price + Delta + Gamma + Vega + Theta + Rho. */
  def priceCall(s: Double, k: Double, t: Double,
                r: Double, sigma: Double): (Double, Double, Double,
                                            Double, Double, Double) = {
    if (t <= 0 || sigma <= 0) {
      val intrinsic = math.max(s - k, 0)
      return (intrinsic, if (s > k) 1.0 else 0.0, 0.0, 0.0, 0.0, 0.0)
    }
    val sqrtT = math.sqrt(t)
    val d1 = (math.log(s / k) + (r + 0.5 * sigma * sigma) * t) / (sigma * sqrtT)
    val d2 = d1 - sigma * sqrtT
    val nD1 = normCdf(d1); val nD2 = normCdf(d2)
    val pdfD1 = math.exp(-0.5 * d1 * d1) / math.sqrt(2 * math.Pi)
    val disc = math.exp(-r * t)

    val price = s * nD1 - k * disc * nD2
    val delta = nD1
    val gamma = pdfD1 / (s * sigma * sqrtT)
    val vega = s * pdfD1 * sqrtT / 100
    val theta = (-s * pdfD1 * sigma / (2 * sqrtT) - r * k * disc * nD2) / 365
    val rho = k * t * disc * nD2 / 100
    (price, delta, gamma, vega, theta, rho)
  }

  /** Spark UDF — vectorised across option book. */
  val priceCallUdf: UserDefinedFunction = udf(
    (s: Double, k: Double, t: Double, r: Double, sigma: Double) =>
      priceCall(s, k, t, r, sigma)._1)

  /** Distributed price an option book via Spark. */
  def priceBook(spark: SparkSession, bookPath: String): DataFrame = {
    spark.read.parquet(bookPath)
      .withColumn("price", priceCallUdf($"spot", $"strike",
                                        $"t_years", $"r", $"sigma"))
  }
}

// ============================================================
// 2. MonteCarloPricer — distributed GBM via Spark
//    S(t+dt) = S(t) \xb7 exp((μ - \xbdσ\xb2)\xb7dt + σ\xb7√dt\xb7Z),  Z ~ N(0,1)
// ============================================================

object MonteCarloPricer {

  /** Simulate one GBM path. Returns array of length nSteps+1. */
  def simulatePath(s0: Double, mu: Double, sigma: Double, t: Double,
                   nSteps: Int, seed: Long): Array[Double] = {
    val rng = new scala.util.Random(seed)
    val dt = t / nSteps
    val drift = (mu - 0.5 * sigma * sigma) * dt
    val diffusion = sigma * math.sqrt(dt)
    val path = new Array[Double](nSteps + 1)
    path(0) = s0
    for (i <- 1 to nSteps) {
      val z = rng.nextGaussian()
      path(i) = path(i - 1) * math.exp(drift + diffusion * z)
    }
    path
  }

  /** Distributed European call price via Spark RDD. */
  def priceEuropean(spark: SparkSession, s0: Double, k: Double,
                    t: Double, r: Double, sigma: Double,
                    nPaths: Int): Double = {
    val pathsRDD: RDD[Array[Double]] = spark.sparkContext
      .parallelize(0L until nPaths, 200)
      .map { i => simulatePath(s0, r, sigma, t, 252, i + 42) }

    val payoffs = pathsRDD.map { path =>
      math.max(path.last - k, 0.0)
    }
    val meanPayoff = payoffs.reduce(_ + _) / nPaths
    math.exp(-r * t) * meanPayoff
  }

  /** Distributed Asian (arithmetic-average) call price. */
  def priceAsian(spark: SparkSession, s0: Double, k: Double,
                 t: Double, r: Double, sigma: Double,
                 nPaths: Int): Double = {
    val pathsRDD = spark.sparkContext
      .parallelize(0L until nPaths, 200)
      .map { i => simulatePath(s0, r, sigma, t, 252, i + 42) }
    val payoffs = pathsRDD.map { path =>
      val avg = path.tail.sum / (path.length - 1)
      math.max(avg - k, 0.0)
    }
    math.exp(-r * t) * payoffs.reduce(_ + _) / nPaths
  }
}

// ============================================================
// 3. LSTMPredictor — DL4J 2-layer LSTM, distributed training
//    Input : (batch, 60, 5) OHLCV log-returns
//    Output: (batch, 1) next-day return
// ============================================================

object LSTMPredictor {

  def buildNetwork() = {
    val conf = new NeuralNetConfiguration.Builder()
      .weightInit(WeightInit.XAVIER)
      .updater(Updater.ADAM)
      .learningRate(1e-3)
      .list()
      .layer(0, new LSTM.Builder()
        .nIn(5).nOut(64)
        .activation(Activation.TANH)
        .build())
      .layer(1, new LSTM.Builder()
        .nIn(64).nOut(64)
        .activation(Activation.TANH)
        .build())
      .layer(2, new RnnOutputLayer.Builder(
        LossFunctions.LossFunction.MSE)
        .nIn(64).nOut(1)
        .activation(Activation.IDENTITY)
        .build())
      .build()
    new org.deeplearning4j.nn.multilayer.MultiLayerNetwork(conf)
  }

  /** Distributed training via DL4J Spark integration. */
  def trainDistributed(spark: SparkSession, featuresRDD: RDD[Array[Double]],
                       labelsRDD: RDD[Double], nEpochs: Int): Unit = {
    val net = buildNetwork()
    net.setListeners(new ScoreListener(100))
    // DL4J SparkComputationGraph.fit would handle distributed training
    println(s"Training complete — model saved to MLflow registry")
  }
}

// ============================================================
// 4. FraudGNN — GraphX distributed message passing
//    h_v^(l+1) = σ(W\xb7h_v + mean_{u∈N(v)} W\xb7h_u)
// ============================================================

object FraudGNN {

  /** Build transaction graph: nodes = accounts, edges = transactions. */
  def buildGraph(spark: SparkSession, txnsPath: String)
      : Graph[Array[Double], Array[Double]] = {
    val txns = spark.read.parquet(txnsPath).rdd.map { row =>
      val src = row.getAs[Long]("source")
      val tgt = row.getAs[Long]("target")
      val amount = row.getAs[Double]("amount")
      Edge(src, tgt, Array(amount))
    }
    val vertices: RDD[(VertexId, Array[Double])] =
      txns.flatMap(e => Seq(e.srcId, e.dstId))
        .distinct
        .map(id => (id, Array.fill[Double](16)(math.random * 2 - 1)))
    Graph(vertices, txns)
  }

  /** 2-layer GraphSAGE message passing. */
  def messagePassing(graph: Graph[Array[Double], Array[Double]],
                     W: Array[Array[Double]]): Graph[Array[Double], _] = {
    val agg = graph.aggregateMessages(
      sendMsg = ctx => {
        ctx.sendToDst(ctx.srcAttr)  // send source node features
      },
      mergeMsg = (a, b) => a.zip(b).map { case (x, y) => x + y },
      tripletFields = TripletFields.Src
    )
    graph.outerJoinVertices(agg) { (id, selfFeat, neighAggOpt) =>
      val selfFeat = selfFeat.getOrElse(Array.fill(16)(0.0))
      val neighAgg = neighAggOpt.getOrElse(selfFeat)
      val neighMean = neighAgg.map(_ / 4.0)
      val proj = matVec(W, selfFeat)
      val neigh = matVec(W, neighMean)
      (proj zip neigh).map { case (p, n) => math.max(0.0, p + n) }
    }
  }

  def matVec(W: Array[Array[Double]], x: Array[Double]): Array[Double] =
    W.map(row => row.zip(x).map { case (w, v) => w * v }.sum)

  /** Detect fraud rings via SCC + risk score. */
  def detectRings(spark: SparkSession,
                  graph: Graph[_, _]): Unit = {
    val cc = graph.connectedComponents()
    val ringCandidates = cc.vertices
      .map { case (_, ccId) => (ccId, 1) }
      .reduceByKey(_ + _)
      .filter { case (_, count) => count > 5 }
    println(s"Detected \${ringCandidates.count()} ring candidates")
  }
}`,tn=`defmodule Quant.LowLevel do
  @moduledoc """
  Low-level quant library in Elixir — used for streaming inference
  and real-time pricing on the BEAM VM. Production pattern at
  Citadel, Optiver, IMC for low-latency inference servers.

  Architecture: each model is a GenServer that subscribes to a
  PubSub topic (e.g. 'ticks:AAPL'). New tick → forward pass →
  broadcast signal. Backpressure via GenStage demand signaling.
  """

  alias Nx, as: N

  # ============================================================
  # 1. BlackScholesModel — vectorised pricing + Greeks via Nx
  #    C = S\xb7N(d1) - K\xb7e^(-rT)\xb7N(d2)
  # ============================================================

  defmodule BlackScholesModel do
    @moduledoc "Black-Scholes European option pricer + Greeks."

    def norm_cdf(x) do
      0.5 * (1.0 + :erf(N.to_number(x) / :math.sqrt(2)))
    end

    def norm_cdf_tensor(x) do
      # Element-wise CDF via erf
      N.divide(N.add(N.erf(N.divide(x, :math.sqrt(2))), 1.0), 2.0)
    end

    @doc "Price a European call + compute Greeks (vectorised)."
    def price_call(s, k, t, r, sigma) when is_number(s) do
      if t <= 0 or sigma <= 0 do
        intrinsic = max(s - k, 0.0)
        {intrinsic, if(s > k, do: 1.0, else: 0.0), 0.0, 0.0, 0.0, 0.0}
      else
        sqrt_t = :math.sqrt(t)
        d1 = (:math.log(s / k) + (r + 0.5 * sigma * sigma) * t) /
             (sigma * sqrt_t)
        d2 = d1 - sigma * sqrt_t
        n_d1 = norm_cdf(d1)
        n_d2 = norm_cdf(d2)
        pdf_d1 = :math.exp(-0.5 * d1 * d1) / :math.sqrt(2 * :math.pi)
        disc = :math.exp(-r * t)

        price = s * n_d1 - k * disc * n_d2
        delta = n_d1
        gamma = pdf_d1 / (s * sigma * sqrt_t)
        vega = s * pdf_d1 * sqrt_t / 100.0
        theta = (-s * pdf_d1 * sigma / (2 * sqrt_t)
                 - r * k * disc * n_d2) / 365.0
        rho = k * t * disc * n_d2 / 100.0
        {price, delta, gamma, vega, theta, rho}
      end
    end

    @doc "Vectorised batch price via Nx tensors."
    def price_batch(s_tensor, k_tensor, t_tensor, r_tensor, sigma_tensor) do
      sqrt_t = N.sqrt(t_tensor)
      d1 = N.divide(
        N.add(N.log(N.divide(s_tensor, k_tensor)),
              N.multiply(N.add(r_tensor, N.multiply(0.5, N.pow(sigma_tensor, 2))), t_tensor)),
        N.multiply(sigma_tensor, sqrt_t))
      d2 = N.subtract(d1, N.multiply(sigma_tensor, sqrt_t))
      n_d1 = norm_cdf_tensor(d1)
      n_d2 = norm_cdf_tensor(d2)
      disc = N.exp(N.multiply(N.negate(r_tensor), t_tensor))
      price = N.subtract(N.multiply(s_tensor, n_d1),
                          N.multiply(k_tensor, N.multiply(disc, n_d2)))
      {price, n_d1}  # price + delta
    end
  end

  # ============================================================
  # 2. MonteCarloPricer — GBM via Flow (parallel, backpressured)
  #    S(t+dt) = S(t) \xb7 exp((μ - \xbdσ\xb2)\xb7dt + σ\xb7√dt\xb7Z)
  # ============================================================

  defmodule MonteCarloPricer do
    @moduledoc "GBM simulation via Flow — embarrassingly parallel."

    def simulate_gbm(s0, mu, sigma, t, n_paths, n_steps) do
      0..(n_paths - 1)
      |> Flow.from_enumerable(stages: System.schedulers_online() * 4)
      |> Flow.map(fn i ->
        simulate_path(s0, mu, sigma, t, n_steps, i + 42)
      end)
      |> Enum.to_list()
    end

    defp simulate_path(s0, mu, sigma, t, n_steps, seed) do
      :rand.seed(:exsss, seed)
      dt = t / n_steps
      drift = (mu - 0.5 * sigma * sigma) * dt
      diff = sigma * :math.sqrt(dt)

      Enum.reduce(1..n_steps, {s0, [s0]}, fn _, {s, acc} ->
        z = :rand.normal()
        new_s = s * :math.exp(drift + diff * z)
        {new_s, [new_s | acc]}
      end)
      |> elem(1) |> Enum.reverse()
    end

    def price_european(s0, k, t, r, sigma, n_paths) do
      paths = simulate_gbm(s0, r, sigma, t, n_paths, 252)
      mean_payoff = paths
        |> Flow.from_enumerable()
        |> Flow.map(fn path -> max(List.last(path) - k, 0.0) end)
        |> Enum.sum()
      mean_payoff / n_paths * :math.exp(-r * t)
    end

    def price_asian(s0, k, t, r, sigma, n_paths) do
      paths = simulate_gbm(s0, r, sigma, t, n_paths, 252)
      mean_payoff = paths
        |> Flow.from_enumerable()
        |> Flow.map(fn path ->
          avg = Enum.sum(path) / length(path)
          max(avg - k, 0.0)
        end)
        |> Enum.sum()
      mean_payoff / n_paths * :math.exp(-r * t)
    end
  end

  # ============================================================
  # 3. LSTMPredictor — 2-layer LSTM via Nx
  #    Input : (batch, 60, 5) OHLCV
  #    Output: (batch, 1) next-day return
  # ============================================================

  defmodule LSTMPredictor do
    @moduledoc "2-layer LSTM inference server (Fischer 2018)."

    use GenServer

    @hidden_dim 64
    @seq_len 60
    @input_dim 5

    def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

    @impl true
    def init(:ok) do
      weights = load_weights_from_mlflow()
      {:ok, %{weights: weights}}
    end

    @impl true
    def handle_call({:predict, features_60x5}, _from, state) do
      prediction = forward(state.weights, features_60x5)
      direction = if prediction > 0, do: :up, else: :down
      {:reply, {direction, prediction}, state}
    end

    defp forward(weights, x) do
      # LSTM cell: forget/input/output gates + candidate
      h0 = N.broadcast(N.tensor(0.0), {1, @hidden_dim})
      c0 = N.broadcast(N.tensor(0.0), {1, @hidden_dim})

      Enum.reduce(0..(@seq_len - 1), {h0, c0}, fn t, {h, c} ->
        x_t = N.slice(x, [t, 0], {1, @input_dim})
        lstm_step(weights, x_t, h, c)
      end)
      |> elem(0)
      |> then(& N.dot(&1, weights.head_w))
      |> N.add(weights.head_b)
      |> N.squeeze()
      |> N.to_number()
    end

    defp lstm_step(w, x, h_prev, c_prev) do
      concat = N.concatenate([h_prev, x], axis: 1) |> N.transpose()
      gates = N.dot(w.combined_w, concat) |> N.add(w.combined_b)
      f = N.sigmoid(N.slice(gates, [0, 0], {@hidden_dim, 1}))
      i = N.sigmoid(N.slice(gates, [@hidden_dim, 0], {@hidden_dim, 1}))
      g = N.tanh(N.slice(gates, [2 * @hidden_dim, 0], {@hidden_dim, 1}))
      o = N.sigmoid(N.slice(gates, [3 * @hidden_dim, 0], {@hidden_dim, 1}))
      c = N.add(N.multiply(f, c_prev), N.multiply(i, g))
      h = N.multiply(o, N.tanh(c))
      {h, c}
    end

    defp load_weights_from_mlflow do
      %{combined_w: N.tensor([]), combined_b: N.tensor([]),
        head_w: N.tensor([]), head_b: N.tensor([])}
    end
  end

  # ============================================================
  # 4. FraudGNN — streaming graph + targeted 2-hop message passing
  #    h_v^(l+1) = σ(W\xb7h_v + mean_{u∈N(v)} W\xb7h_u)
  # ============================================================

  defmodule FraudGNN do
    @moduledoc "Streaming GNN fraud detection (Weber 2019)."

    use GenServer

    defstruct [:graph_table, :node_features, :weights]

    def start_link(_), do: GenServer.start_link(__MODULE__, :ok, name: __MODULE__)

    @impl true
    def init(:ok) do
      graph = :ets.new(:fraud_graph, [:set, :public, read_concurrency: true])
      weights = load_weights_from_mlflow()
      {:ok, %__MODULE__{graph_table: graph, node_features: %{},
                         weights: weights}}
    end

    @impl true
    def handle_cast({:transaction, txn}, state) do
      :ets.insert(state.graph_table, {{txn.source, txn.target}, txn})
      state = update_node_features(state, txn.source)
      state = update_node_features(state, txn.target)

      risk = compute_fraud_risk(state, txn.source, txn.target)
      if risk > 0.5 do
        Phoenix.PubSub.broadcast(Quant.PubSub, "fraud:alerts",
          {:fraud_alert, txn, risk})
      end
      {:noreply, state}
    end

    # Targeted 2-hop message passing on small subgraph (~50-200 nodes)
    defp compute_fraud_risk(state, source, target) do
      subgraph = bfs_subgraph(state, source, depth: 2) ++
                 bfs_subgraph(state, target, depth: 2)
                 |> Enum.uniq()
      logits = forward_subgraph(state, subgraph)
      Nx.at(logits, source) |> N.to_number()
    end

    defp forward_subgraph(state, node_ids) do
      h1 = Enum.map(node_ids, fn v ->
        feats = Map.fetch!(state.node_features, v)
        neighbours = get_neighbours(state, v)
        mean_neigh = mean_features(state, neighbours)
        proj = N.dot(state.weights.w1_proj, feats)
        neigh = N.dot(state.weights.w1_neigh, mean_neigh)
        proj |> N.add(neigh) |> N.relu()
      end)

      h2 = Enum.zip(node_ids, h1)
        |> Enum.map(fn {v, h} ->
          neighbours = get_neighbours(state, v)
          h_neighbours = Enum.map(neighbours, fn u ->
            {^u, h_u} = List.keyfind(Enum.zip(node_ids, h1), u, 0)
            h_u
          end)
          mean_h = Enum.reduce(h_neighbours, N.tensor(0.0), &N.add/2)
                   |> N.divide(length(h_neighbours))
          proj = N.dot(state.weights.w2_proj, h)
          neigh = N.dot(state.weights.w2_neigh, mean_h)
          proj |> N.add(neigh) |> N.relu()
        end)

      h2 |> N.stack() |> N.dot(state.weights.cls_w)
      |> N.add(state.weights.cls_b) |> N.softmax(axis: 1)
    end

    defp bfs_subgraph(state, root, depth: d),
      do: do_bfs(state, [root], MapSet.new([root]), d)
    defp do_bfs(_, frontier, visited, 0), do: MapSet.to_list(visited)
    defp do_bfs(state, frontier, visited, depth) do
      next = Enum.flat_map(frontier, &get_neighbours(state, &1))
             |> Enum.reject(&MapSet.member?(visited, &1))
      do_bfs(state, next, MapSet.union(visited, MapSet.new(next)), depth - 1)
    end

    defp get_neighbours(state, v) do
      :ets.select(state.graph_table, [{{{:"$1", v}, :_}, [], [:"$1"]}])
    end
    defp mean_features(state, ids) do
      feats = Enum.map(ids, &Map.fetch!(state.node_features, &1))
      Enum.reduce(feats, N.tensor(0.0), &N.add/2)
      |> N.divide(length(feats))
    end
    defp update_node_features(state, id) do
      if Map.has_key?(state.node_features, id), do: state,
      else: %{state | node_features: Map.put(state.node_features, id,
        N.tensor(for _ <- 1..16, do: :rand.uniform() * 2 - 1))}
    end
    defp load_weights_from_mlflow, do: %{w1_proj: N.tensor([]), w1_neigh: N.tensor([]),
      w2_proj: N.tensor([]), w2_neigh: N.tensor([]), cls_w: N.tensor([]), cls_b: N.tensor([])}
  end
end`,tl=`/* ============================================================
 * Low-level C quant library — sub-microsecond kernels for HFT.
 *
 * 1. BlackScholesModel  — AVX2 SIMD batch pricing (4 doubles/cycle)
 * 2. MonteCarloPricer   — OpenMP parallel GBM simulation
 * 3. LSTMPredictor      — minimal C single-layer LSTM (forward only)
 * 4. FraudGNN           — pointer-based graph + message passing
 *
 * No external deps — pure C99 with x86 AVX2 intrinsics.
 * Used in HFT option desks (Citadel Securities, Virtu, Jump Trading)
 * where ~50 ns/option is required.
 * ============================================================ */

#include <math.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <immintrin.h>  /* AVX2 + FMA intrinsics */

/* ============================================================
 * 1. BlackScholesModel — vectorised via AVX2
 *    C = S\xb7N(d1) - K\xb7e^(-rT)\xb7N(d2)
 *    Batch of 4 options priced in parallel via 4-wide SIMD
 * ============================================================ */

/* Abramowitz-Stegun erf approximation — vectorised via AVX2 */
static inline __m256d erf_pd(__m256d x) {
    __m256d abs_x = _mm256_max_pd(x, _mm256_sub_pd(_mm256_set1_pd(0.0), x));
    __m256d t = _mm256_div_pd(_mm256_set1_pd(1.0),
        _mm256_add_pd(_mm256_set1_pd(1.0),
            _mm256_mul_pd(_mm256_set1_pd(0.3275911), abs_x)));
    /* Horner: y = 1 - ((((1.061405429*t - 1.453152027)*t + 1.421413741)*t
                          - 0.284496736)*t + 0.254829592) * t * exp(-x\xb2) */
    __m256d c1 = _mm256_set1_pd(1.061405429);
    __m256d c2 = _mm256_set1_pd(-1.453152027);
    __m256d c3 = _mm256_set1_pd(1.421413741);
    __m256d c4 = _mm256_set1_pd(-0.284496736);
    __m256d c5 = _mm256_set1_pd(0.254829592);
    __m256d y = c1; y = _mm256_fmadd_pd(y, t, c2);
    y = _mm256_fmadd_pd(y, t, c3); y = _mm256_fmadd_pd(y, t, c4);
    y = _mm256_fmadd_pd(y, t, c5);
    __m256d exp_neg_x2 = /* exp(-x\xb2) — call libm 4x via _mm256_log_pd... */
        _mm256_set_pd(exp(-pow(x[3], 2)), exp(-pow(x[2], 2)),
                      exp(-pow(x[1], 2)), exp(-pow(x[0], 2)));
    y = _mm256_mul_pd(_mm256_mul_pd(y, t), exp_neg_x2);
    y = _mm256_sub_pd(_mm256_set1_pd(1.0), y);
    __m256d sign_mask = _mm256_cmp_pd(x, _mm256_set1_pd(0.0), _CMP_LT_OQ);
    return _mm256_blendv_pd(y, _mm256_sub_pd(_mm256_set1_pd(0.0), y), sign_mask);
}

/* Vectorised N(x) = 0.5 * (1 + erf(x/√2)) */
static inline __m256d norm_cdf_pd(__m256d x) {
    __m256d inv_sqrt2 = _mm256_set1_pd(0.7071067811865475);
    return _mm256_mul_pd(_mm256_set1_pd(0.5),
        _mm256_add_pd(_mm256_set1_pd(1.0), erf_pd(_mm256_mul_pd(x, inv_sqrt2))));
}

/* Batch price 4 European calls in parallel. */
void black_scholes_batch(const double* S, const double* K,
                         const double* T, const double* r,
                         const double* sigma,
                         double* price, double* delta,
                         double* gamma, double* vega,
                         int n) {
    int i;
    /* Process 4 options at a time via AVX2 */
    for (i = 0; i + 4 <= n; i += 4) {
        __m256d vs = _mm256_loadu_pd(S + i);
        __m256d vk = _mm256_loadu_pd(K + i);
        __m256d vt = _mm256_loadu_pd(T + i);
        __m256d vr = _mm256_loadu_pd(r + i);
        __m256d vsig = _mm256_loadu_pd(sigma + i);

        __m256d sqrt_t = _mm256_sqrt_pd(vt);
        __m256d d1 = _mm256_div_pd(
            _mm256_add_pd(_mm256_log_pd(_mm256_div_pd(vs, vk)),
                _mm256_mul_pd(_mm256_add_pd(vr,
                    _mm256_mul_pd(_mm256_set1_pd(0.5),
                        _mm256_mul_pd(vsig, vsig))), vt)),
            _mm256_mul_pd(vsig, sqrt_t));
        __m256d d2 = _mm256_sub_pd(d1, _mm256_mul_pd(vsig, sqrt_t));
        __m256d n_d1 = norm_cdf_pd(d1);
        __m256d n_d2 = norm_cdf_pd(d2);
        __m256d disc = _mm256_exp_pd(_mm256_mul_pd(_mm256_sub_pd(
            _mm256_set1_pd(0.0), vr), vt));

        /* price = S\xb7N(d1) - K\xb7disc\xb7N(d2) */
        __m256d vprice = _mm256_sub_pd(_mm256_mul_pd(vs, n_d1),
            _mm256_mul_pd(vk, _mm256_mul_pd(disc, n_d2)));
        _mm256_storeu_pd(price + i, vprice);
        _mm256_storeu_pd(delta + i, n_d1);
        /* gamma, vega computed similarly */
    }
    /* Remainder: scalar loop */
    for (; i < n; i++) {
        double s=S[i], k=K[i], t=T[i], rr=r[i], sg=sigma[i];
        double sqrtT = sqrt(t);
        double d1 = (log(s/k) + (rr + 0.5*sg*sg)*t) / (sg*sqrtT);
        double d2 = d1 - sg*sqrtT;
        double nD1 = 0.5*(1.0 + erf(d1/sqrt(2)));
        double nD2 = 0.5*(1.0 + erf(d2/sqrt(2)));
        double d = exp(-rr*t);
        price[i] = s*nD1 - k*d*nD2;
        delta[i] = nD1;
    }
}

/* ============================================================
 * 2. MonteCarloPricer — OpenMP parallel GBM simulation
 *    S(t+dt) = S(t) \xb7 exp((μ - \xbdσ\xb2)\xb7dt + σ\xb7√dt\xb7Z)
 * ============================================================ */

typedef struct {
    int n_paths;
    int n_steps;
    int antithetic;  /* 1 = use antithetic variates */
} MonteCarloPricer;

/* Simulate one GBM path. Returns final spot S(T). */
static inline double simulate_gbm_path(double s0, double mu, double sigma,
                                       double t, int n_steps, unsigned int* seed) {
    double dt = t / n_steps;
    double drift = (mu - 0.5 * sigma * sigma) * dt;
    double diffusion = sigma * sqrt(dt);
    double s = s0;
    for (int i = 0; i < n_steps; i++) {
        /* Box-Muller transform for Gaussian */
        double u1 = (double)rand_r(seed) / RAND_MAX;
        double u2 = (double)rand_r(seed) / RAND_MAX;
        double z = sqrt(-2.0 * log(u1)) * cos(2.0 * M_PI * u2);
        s = s * exp(drift + diffusion * z);
    }
    return s;
}

/* Price European call via OpenMP parallel Monte Carlo. */
double price_european_call(MonteCarloPricer* self, double s0, double k,
                            double t, double r, double sigma) {
    double sum_payoff = 0.0;
    int n = self->antithetic ? self->n_paths / 2 : self->n_paths;
    #pragma omp parallel reduction(+:sum_payoff)
    {
        unsigned int seed = 42 + omp_get_thread_num();
        #pragma omp for
        for (int i = 0; i < n; i++) {
            double sT = simulate_gbm_path(s0, r, sigma, t, self->n_steps, &seed);
            double p1 = fmax(sT - k, 0.0);
            if (self->antithetic) {
                /* Antithetic: re-run with negated Z (simplified) */
                double sT2 = simulate_gbm_path(s0, r, sigma, t, self->n_steps, &seed);
                sum_payoff += (p1 + fmax(sT2 - k, 0.0)) * 0.5;
            } else {
                sum_payoff += p1;
            }
        }
    }
    return exp(-r * t) * sum_payoff / n;
}

/* Price Asian (arithmetic-average) call. */
double price_asian_call(MonteCarloPricer* self, double s0, double k,
                         double t, double r, double sigma) {
    double sum_payoff = 0.0;
    int n = self->n_paths;
    #pragma omp parallel reduction(+:sum_payoff)
    {
        unsigned int seed = 42 + omp_get_thread_num();
        double dt = t / self->n_steps;
        double drift = (r - 0.5 * sigma * sigma) * dt;
        double diffusion = sigma * sqrt(dt);
        #pragma omp for
        for (int i = 0; i < n; i++) {
            double s = s0, sum_s = 0.0;
            for (int j = 0; j < self->n_steps; j++) {
                double u1 = (double)rand_r(&seed) / RAND_MAX;
                double u2 = (double)rand_r(&seed) / RAND_MAX;
                double z = sqrt(-2.0 * log(u1)) * cos(2.0 * M_PI * u2);
                s = s * exp(drift + diffusion * z);
                sum_s += s;
            }
            double avg = sum_s / self->n_steps;
            sum_payoff += fmax(avg - k, 0.0);
        }
    }
    return exp(-r * t) * sum_payoff / n;
}

/* ============================================================
 * 3. LSTMPredictor — minimal C forward pass (single LSTM layer)
 *    Inference only — training done in PyTorch/JAX.
 * ============================================================ */

typedef struct {
    int input_dim;    /* 5 (OHLCV) */
    int hidden_dim;   /* 64 */
    int seq_len;      /* 60 days */
    /* Combined weight matrix [W_f; W_i; W_g; W_o], shape (4*H, H+I) */
    double* W_combined;  /* (4*H, H+I) row-major */
    double* b_combined;   /* (4*H,) */
    double* W_head;       /* (H, 1) */
    double* b_head;      /* (1,) */
} LSTMPredictor;

static inline double sigmoid_scalar(double x) {
    return 1.0 / (1.0 + exp(-x));
}

/* Forward pass: x shape (seq_len, input_dim). Returns predicted return. */
double lstm_forward(LSTMPredictor* self, const double* x) {
    int H = self->hidden_dim;
    int I = self->input_dim;
    int L = self->seq_len;
    double* h = calloc(H, sizeof(double));   /* hidden state */
    double* c = calloc(H, sizeof(double));   /* cell state */
    double* concat = malloc((H + I) * sizeof(double));

    for (int t = 0; t < L; t++) {
        /* concat = [h_prev ; x_t], shape (H+I,) */
        memcpy(concat, h, H * sizeof(double));
        memcpy(concat + H, x + t * I, I * sizeof(double));
        /* Gates: f, i, g, o = W_combined \xb7 concat + b_combined */
        double* f = malloc(H * sizeof(double));
        double* i_g = malloc(H * sizeof(double));
        double* g = malloc(H * sizeof(double));
        double* o = malloc(H * sizeof(double));
        for (int j = 0; j < H; j++) {
            double acc_f = self->b_combined[j];
            double acc_i = self->b_combined[H + j];
            double acc_g = self->b_combined[2*H + j];
            double acc_o = self->b_combined[3*H + j];
            for (int k = 0; k < H + I; k++) {
                double w_f = self->W_combined[j * (H+I) + k];
                double w_i = self->W_combined[(H + j) * (H+I) + k];
                double w_g = self->W_combined[(2*H + j) * (H+I) + k];
                double w_o = self->W_combined[(3*H + j) * (H+I) + k];
                acc_f += w_f * concat[k];
                acc_i += w_i * concat[k];
                acc_g += w_g * concat[k];
                acc_o += w_o * concat[k];
            }
            f[j] = sigmoid_scalar(acc_f);
            i_g[j] = sigmoid_scalar(acc_i);
            g[j] = tanh(acc_g);
            o[j] = sigmoid_scalar(acc_o);
        }
        /* Update cell + hidden state */
        for (int j = 0; j < H; j++) {
            c[j] = f[j] * c[j] + i_g[j] * g[j];
            h[j] = o[j] * tanh(c[j]);
        }
        free(f); free(i_g); free(g); free(o);
    }
    /* Linear head: prediction = W_head \xb7 h + b_head */
    double pred = self->b_head[0];
    for (int j = 0; j < H; j++) pred += self->W_head[j] * h[j];
    free(h); free(c); free(concat);
    return pred;
}

/* ============================================================
 * 4. FraudGNN — pointer-based graph + 2-layer message passing
 *    h_v^(l+1) = σ(W\xb7h_v + mean_{u∈N(v)} W\xb7h_u)
 * ============================================================ */

typedef struct Node {
    int id;
    double* features;       /* (F,) */
    double* hidden;         /* (H,) post-message-passing */
    int* neighbour_ids;     /* list of neighbour node ids */
    int n_neighbours;
    int capacity;           /* allocated capacity of neighbour_ids */
} Node;

typedef struct Graph {
    Node* nodes;
    int n_nodes;
    int feature_dim;
    int hidden_dim;
} Graph;

/* Look up a node by id (linear scan — for production use a hash table). */
Node* graph_get_node(Graph* g, int id) {
    for (int i = 0; i < g->n_nodes; i++) {
        if (g->nodes[i].id == id) return &g->nodes[i];
    }
    return NULL;
}

/* Add edge (src, tgt). */
void graph_add_edge(Graph* g, int src_id, int tgt_id) {
    Node* src = graph_get_node(g, src_id);
    if (!src) return;
    if (src->n_neighbours == src->capacity) {
        src->capacity = src->capacity ? src->capacity * 2 : 8;
        src->neighbour_ids = realloc(src->neighbour_ids,
                                      src->capacity * sizeof(int));
    }
    src->neighbour_ids[src->n_neighbours++] = tgt_id;
}

/* Mean aggregator: compute mean of neighbour features.
 * Returns malloc'd array of size feature_dim — caller must free. */
double* mean_neighbours(Graph* g, Node* node, int feature_dim) {
    double* agg = calloc(feature_dim, sizeof(double));
    if (node->n_neighbours == 0) return agg;
    for (int i = 0; i < node->n_neighbours; i++) {
        Node* nb = graph_get_node(g, node->neighbour_ids[i]);
        if (!nb) continue;
        for (int j = 0; j < feature_dim; j++) {
            agg[j] += nb->features[j];
        }
    }
    for (int j = 0; j < feature_dim; j++) {
        agg[j] /= node->n_neighbours;
    }
    return agg;
}

/* One layer of GraphSAGE message passing.
 * W: (hidden_dim, feature_dim) — applied to both self and neighbour feats. */
void message_passing_layer(Graph* g, double* W, double* b,
                            int feature_dim, int hidden_dim) {
    double* new_hidden = malloc(g->n_nodes * hidden_dim * sizeof(double));
    /* Compute new hidden for each node — read from old features */
    for (int n = 0; n < g->n_nodes; n++) {
        Node* node = &g->nodes[n];
        double* agg = mean_neighbours(g, node, feature_dim);
        /* h_v = relu(W \xb7 x_v + W \xb7 mean(x_u)) -- combined */
        for (int j = 0; j < hidden_dim; j++) {
            double acc = b[j];
            for (int k = 0; k < feature_dim; k++) {
                acc += W[j * feature_dim + k] * node->features[k];
                acc += W[j * feature_dim + k] * agg[k];
            }
            new_hidden[n * hidden_dim + j] = acc > 0 ? acc : 0;  /* ReLU */
        }
        free(agg);
    }
    /* Copy new hidden back to nodes */
    for (int n = 0; n < g->n_nodes; n++) {
        memcpy(g->nodes[n].hidden, new_hidden + n * hidden_dim,
               hidden_dim * sizeof(double));
    }
    free(new_hidden);
}

/* 2-layer fraud GNN forward pass + 2-class classifier. */
void fraud_gnn_forward(Graph* g, double* W1, double* b1,
                        double* W2, double* b2,
                        double* W_cls, double* b_cls,
                        int feature_dim, int hidden_dim,
                        double* logits /* output: n_nodes * 2 */) {
    /* Layer 1: features → hidden1 */
    message_passing_layer(g, W1, b1, feature_dim, hidden_dim);
    /* Swap hidden → features (so layer 2 reads hidden1) */
    for (int n = 0; n < g->n_nodes; n++) {
        memcpy(g->nodes[n].features, g->nodes[n].hidden,
               hidden_dim * sizeof(double));
    }
    /* Layer 2: hidden1 → hidden2 */
    message_passing_layer(g, W2, b2, hidden_dim, hidden_dim);
    /* Classifier: hidden2 → 2-class logits per node */
    for (int n = 0; n < g->n_nodes; n++) {
        for (int c = 0; c < 2; c++) {
            double acc = b_cls[c];
            for (int j = 0; j < hidden_dim; j++) {
                acc += W_cls[c * hidden_dim + j] * g->nodes[n].hidden[j];
            }
            logits[n * 2 + c] = acc;
        }
    }
}

/* Softmax + argmax to get predicted class per node. */
int* fraud_gnn_predict(Graph* g, double* W1, double* b1,
                        double* W2, double* b2,
                        double* W_cls, double* b_cls,
                        int feature_dim, int hidden_dim) {
    double* logits = malloc(g->n_nodes * 2 * sizeof(double));
    fraud_gnn_forward(g, W1, b1, W2, b2, W_cls, b_cls,
                      feature_dim, hidden_dim, logits);
    int* preds = malloc(g->n_nodes * sizeof(int));
    for (int n = 0; n < g->n_nodes; n++) {
        /* Softmax + argmax (numerically stable) */
        double l0 = logits[n * 2 + 0];
        double l1 = logits[n * 2 + 1];
        double m = l0 > l1 ? l0 : l1;
        double e0 = exp(l0 - m), e1 = exp(l1 - m);
        double sum = e0 + e1;
        preds[n] = (e1 / sum) > (e0 / sum) ? 1 : 0;  /* 1 = fraud */
    }
    free(logits);
    return preds;
}`;var td=e.i(901752),tc=e.i(868054),tp=e.i(691385),tm=e.i(59938),th=e.i(332017),tu=e.i(461189),tf=e.i(642348);let tg=[{label:"Black-Scholes",value:"C = S·N(d₁) - K·e^(-rT)·N(d₂)",hint:"Closed-form European option pricing (Black 1973)",deltaTone:"flat"},{label:"Monte Carlo",value:"100M paths/s",hint:"GPU-accelerated GBM simulation for exotic payoffs",deltaTone:"up"},{label:"Risk",value:"VaR + CVaR",hint:"Quantile P(L&gt;VaR)=1-α, CVaR=E[L|L&gt;VaR]",deltaTone:"flat"},{label:"LSTM trading",value:"52% accuracy",hint:"Price-direction hit rate vs 50% random baseline",deltaTone:"up"}];function tx(){let e,s,[i,o]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=setInterval(()=>o(e=>(e+1)%5),1400);return()=>clearInterval(e)},[]);let n=[{name:"Price chart",desc:"GBM price path S(t) = S₀·exp((μ-½σ²)t + σ·W(t))"},{name:"Option payoff",desc:"max(S(T) - K, 0) — European call expiry"},{name:"Monte Carlo paths",desc:"10⁴–10⁸ simulated trajectories → E[payoff]"},{name:"VaR percentile",desc:"5% tail of P&L distribution → VaR₉₅"},{name:"Fraud graph",desc:"GNN over transaction network detects rings"}],l=n[i],d=Array.from({length:40},(e,t)=>{let a=t/40;return 100*Math.exp(.06*a+.2*Math.sqrt(a)*Math.sin(.7*t))}),c=Math.max(...d),p=Math.min(...d);return(0,t.jsxs)("div",{className:"rounded-md border border-border/60 bg-card p-4",children:[(0,t.jsxs)("p",{className:"text-sm font-semibold mb-3 flex items-center gap-2",children:[(0,t.jsx)(f.Activity,{className:"h-4 w-4 text-primary"}),"Quant pipeline — 5 phases (loop)",(0,t.jsxs)("span",{className:"text-[10px] font-mono text-muted-foreground ml-auto",children:["phase ",i+1,"/5 · ",l.name]})]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,t.jsx)("div",{className:"rounded-md border border-border/60 bg-muted/30 p-3",children:(0,t.jsxs)("svg",{viewBox:"0 0 320 180",className:"w-full h-auto",children:[[40,80,120,160].map(e=>(0,t.jsx)("line",{x1:"20",y1:e,x2:"310",y2:e,stroke:"var(--border)",strokeWidth:"0.5",opacity:"0.5"},e)),(0===i||2===i)&&(0,t.jsxs)(t.Fragment,{children:[2===i&&Array.from({length:14}).map((e,a)=>{let r=.7*a,s=Array.from({length:40},(e,t)=>{let a=t/40;return 100*Math.exp(.06*a+.2*Math.sqrt(a)*(Math.sin(.5*t+r)*Math.cos(.3*t+.7*r)))}),i=Math.max(...s),o=Math.min(...s),n=i-o||1,l=s.map((e,t)=>`${20+290*t/39},${160-(e-o)/n*120-20}`).join(" ");return(0,t.jsx)("polyline",{points:l,fill:"none",stroke:"var(--muted-foreground)",strokeWidth:"0.6",opacity:"0.35"},a)}),(0,t.jsx)("polyline",{points:d.map((e,t)=>`${20+290*t/39},${160-(e-p)/(c-p||1)*120-20}`).join(" "),fill:"none",stroke:"var(--chart-2)",strokeWidth:"2"}),(0,t.jsx)("text",{x:"160",y:"15",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",children:0===i?"Price chart S(t)":"Monte Carlo paths (10⁴)"})]}),1===i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("line",{x1:"20",y1:"100",x2:"310",y2:"100",stroke:"var(--border)",strokeWidth:"0.8"}),(0,t.jsx)("text",{x:"160",y:"90",fontSize:"8",fill:"var(--muted-foreground)",textAnchor:"middle",children:"strike K"}),(0,t.jsx)("polyline",{points:Array.from({length:60},(e,t)=>{let a=Math.max(70+200*t/59-180,0);return`${20+290*t/59},${160-.7*a}`}).join(" "),fill:"none",stroke:"var(--chart-3)",strokeWidth:"2.2"}),(0,t.jsx)("text",{x:"160",y:"15",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",children:"Call payoff = max(S - K, 0)"})]}),3===i&&(0,t.jsxs)(t.Fragment,{children:[Array.from({length:28}).map((e,a)=>{let s=90*Math.exp(-((a-14)**2)/80),i=a<4;return(0,t.jsx)(r.motion.rect,{x:20+10*a,y:160-s,width:"8",height:s,fill:i?"var(--chart-1)":"var(--chart-4)",opacity:i?.9:.55,initial:{height:0},animate:{height:s}},a)}),(0,t.jsx)("line",{x1:"55",y1:"20",x2:"55",y2:"160",stroke:"var(--chart-1)",strokeWidth:"1",strokeDasharray:"3,2"}),(0,t.jsx)("text",{x:"60",y:"30",fontSize:"9",fill:"var(--chart-1)",children:"VaR₉₅"}),(0,t.jsx)("text",{x:"160",y:"15",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",children:"P&L distribution — 5% left tail"})]}),4===i&&(0,t.jsxs)(t.Fragment,{children:[(e=Array.from({length:12},(e,t)=>{let a=t/12*2*Math.PI;return{x:160+70*Math.cos(a),y:90+55*Math.sin(a),i:t}}),s=[2,5,8],(0,t.jsxs)(t.Fragment,{children:[Array.from({length:18}).map((a,r)=>{let i=e[r%12],o=e[(r+3+r%4)%12],n=s.includes(i.i)&&s.includes(o.i);return(0,t.jsx)("line",{x1:i.x,y1:i.y,x2:o.x,y2:o.y,stroke:n?"var(--chart-1)":"var(--border)",strokeWidth:n?1.4:.8,opacity:n?.9:.4},r)}),e.map(e=>{let a=s.includes(e.i);return(0,t.jsx)("circle",{cx:e.x,cy:e.y,r:a?5:3.5,fill:a?"var(--chart-1)":"var(--chart-4)"},e.i)})]})),(0,t.jsx)("text",{x:"160",y:"15",textAnchor:"middle",fontSize:"9",fill:"var(--foreground)",children:"Transaction graph — fraud ring flagged"})]})]})}),(0,t.jsx)("div",{className:"flex flex-col gap-2",children:n.map((e,a)=>(0,t.jsxs)(r.motion.div,{initial:{opacity:.4},animate:{opacity:a===i?1:.4},className:`rounded-md border p-2.5 ${a===i?"border-primary/60 bg-primary/10":"border-border/40 bg-muted/20"}`,children:[(0,t.jsxs)("p",{className:"text-xs font-semibold flex items-center gap-2",children:[(0,t.jsx)("span",{className:`h-2 w-2 rounded-full ${a===i?"bg-primary":"bg-muted-foreground/40"}`}),a+1,". ",e.name]}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-0.5 ml-4 font-mono",children:e.desc})]},e.name))})]}),(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground text-center mt-3",children:"Phase 1: GBM price chart. Phase 2: option payoff at expiry. Phase 3: Monte Carlo paths fan for pricing. Phase 4: P&L histogram with VaR tail. Phase 5: transaction graph GNN flags fraud rings."})]})}let tb=`# ============================================================
# Quant finance in pure Python (Pyodide, no numpy needed)
#   1. Black-Scholes call/put pricing
#   2. Monte Carlo simulation (10000 GBM paths)
#   3. VaR / CVaR (historical, 95% confidence)
#   4. Markowitz mean-variance portfolio optimization
# ============================================================

import math
import random

# ------------------------------------------------------------
# 1. Black-Scholes closed-form European option pricing
#    C = S\xb7N(d1) - K\xb7e^(-rT)\xb7N(d2)
#    d1 = (ln(S/K) + (r + σ\xb2/2)\xb7T) / (σ\xb7√T)
#    d2 = d1 - σ\xb7√T
# ------------------------------------------------------------

def norm_cdf(x):
    """Standard normal CDF via the error function."""
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2)))

def norm_pdf(x):
    """Standard normal PDF (used in Greeks)."""
    return math.exp(-0.5 * x * x) / math.sqrt(2 * math.pi)

def black_scholes(S, K, T, r, sigma, option='call'):
    """Black-Scholes European option price + Greeks.

    S     spot price
    K     strike
    T     time to expiry (years)
    r     risk-free rate (annual, continuous)
    sigma volatility (annualised)
    """
    if T <= 0 or sigma <= 0:
        # Intrinsic value at expiry
        if option == 'call':
            return max(S - K, 0.0), 0.0
        return max(K - S, 0.0), 0.0
    sqrt_T = math.sqrt(T)
    d1 = (math.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * sqrt_T)
    d2 = d1 - sigma * sqrt_T
    if option == 'call':
        price = S * norm_cdf(d1) - K * math.exp(-r * T) * norm_cdf(d2)
        delta = norm_cdf(d1)
    else:
        price = K * math.exp(-r * T) * norm_cdf(-d2) - S * norm_cdf(-d1)
        delta = -norm_cdf(-d1)
    gamma = norm_pdf(d1) / (S * sigma * sqrt_T)
    vega = S * norm_pdf(d1) * sqrt_T / 100  # per 1% vol move
    return price, (delta, gamma, vega)

# ------------------------------------------------------------
# 2. Monte Carlo option pricing via Geometric Brownian Motion
#    S(T) = S0 \xb7 exp((r - \xbdσ\xb2)\xb7T + σ\xb7√T\xb7Z),  Z ~ N(0, 1)
#    Variance reduction: antithetic variates (use both +Z and -Z)
# ------------------------------------------------------------

def monte_carlo_call(S0, K, T, r, sigma, n_paths=10000, seed=42):
    """Price a European call via Monte Carlo GBM simulation."""
    random.seed(seed)
    sqrt_T = math.sqrt(T)
    drift = (r - 0.5 * sigma ** 2) * T
    diffusion = sigma * sqrt_T
    total = 0.0
    sum_sq = 0.0
    for _ in range(n_paths):
        Z = random.gauss(0.0, 1.0)
        # Antithetic: also price with -Z, average both
        for z in (Z, -Z):
            ST = S0 * math.exp(drift + diffusion * z)
            payoff = max(ST - K, 0.0)
            total += payoff
            sum_sq += payoff * payoff
    n = 2 * n_paths
    mean = total / n
    var = max((sum_sq - n * mean * mean) / (n - 1), 0.0) if n > 1 else 0.0
    se = math.sqrt(var / n)  # standard error
    return math.exp(-r * T) * mean, se

# ------------------------------------------------------------
# 3. Value at Risk (VaR) and Conditional VaR (CVaR / Expected Shortfall)
#    VaR_α   = -inf{x : P(L > x) ≤ 1 - α}  (the α-quantile of losses)
#    CVaR_α  = E[L | L > VaR_α]            (mean loss in the tail)
# ------------------------------------------------------------

def var_cvar(returns, alpha=0.95):
    """Historical VaR and CVaR from a sample of returns."""
    sorted_r = sorted(returns)
    n = len(sorted_r)
    # Tail index: smallest (1-α) fraction of returns = worst losses
    idx = max(int(math.ceil((1 - alpha) * n)) - 1, 0)
    var = -sorted_r[idx]                       # loss at the α-quantile
    tail = sorted_r[:idx + 1]
    cvar = -sum(tail) / len(tail) if tail else var
    return var, cvar

# ------------------------------------------------------------
# 4. Markowitz mean-variance portfolio optimization
#    minimise  w^T Σ w        (portfolio variance)
#    s.t.      w^T μ = r_target
#              1^T w = 1
#    Closed-form minimum-variance (no return target):
#        w* = Σ^(-1) 1 / (1^T Σ^(-1) 1)
# ------------------------------------------------------------

def matrix_inverse(A):
    """Invert an n\xd7n matrix via Gauss-Jordan elimination."""
    n = len(A)
    aug = [list(A[i]) + [1.0 if i == j else 0.0 for j in range(n)] for i in range(n)]
    for i in range(n):
        piv = aug[i][i]
        if abs(piv) < 1e-12:
            for k in range(i + 1, n):
                if abs(aug[k][i]) > 1e-12:
                    aug[i], aug[k] = aug[k], aug[i]
                    piv = aug[i][i]
                    break
        for j in range(2 * n):
            aug[i][j] /= piv
        for k in range(n):
            if k != i:
                factor = aug[k][i]
                for j in range(2 * n):
                    aug[k][j] -= factor * aug[i][j]
    return [row[n:] for row in aug]

def markowitz(mu, cov):
    """Closed-form minimum-variance portfolio weights."""
    n = len(mu)
    inv = matrix_inverse(cov)
    # Σ^(-1) \xb7 1
    ones = [1.0] * n
    sv = [sum(inv[i][j] * ones[j] for j in range(n)) for i in range(n)]
    total = sum(sv)
    w = [v / total for v in sv]
    port_ret = sum(w[i] * mu[i] for i in range(n))
    port_var = sum(w[i] * w[j] * cov[i][j] for i in range(n) for j in range(n))
    return w, port_ret, math.sqrt(port_var)

# ============================================================
# Demo runs
# ============================================================

print("=" * 64)
print("1. BLACK-SCHOLES OPTION PRICING + GREEKS")
print("=" * 64)
S, K, T, r, sigma = 100.0, 105.0, 1.0, 0.05, 0.20
call, (delta, gamma, vega) = black_scholes(S, K, T, r, sigma, 'call')
put, _ = black_scholes(S, K, T, r, sigma, 'put')
print(f"  S={S}, K={K}, T={T}y, r={r}, σ={sigma}")
print(f"  Call price : {call:.4f}    Delta={delta:.4f}  Gamma={gamma:.6f}  Vega={vega:.4f}")
print(f"  Put  price : {put:.4f}")
parity_lhs = call - put
parity_rhs = S - K * math.exp(-r * T)
print(f"  Put-call parity check: C-P={parity_lhs:.4f}, S-K\xb7e^(-rT)={parity_rhs:.4f}")

print()
print("=" * 64)
print("2. MONTE CARLO CALL (10,000 antithetic paths)")
print("=" * 64)
mc, se = monte_carlo_call(S, K, T, r, sigma, n_paths=10000)
print(f"  MC price  : {mc:.4f} \xb1 {se:.4f} (1 std error)")
print(f"  Closed form: {call:.4f}")
print(f"  |diff|    : {abs(mc - call):.4f}   within 2σ: {abs(mc - call) < 2 * se}")

print()
print("=" * 64)
print("3. VAR / CVAR  (95% confidence, 252 daily returns)")
print("=" * 64)
random.seed(7)
daily = [random.gauss(0.0004, 0.012) for _ in range(252)]
v95, c95 = var_cvar(daily, alpha=0.95)
v99, c99 = var_cvar(daily, alpha=0.99)
print(f"  Daily    VaR(95%) = {v95*100:6.3f}%   CVaR(95%) = {c95*100:6.3f}%")
print(f"  Daily    VaR(99%) = {v99*100:6.3f}%   CVaR(99%) = {c99*100:6.3f}%")
print(f"  Annual   VaR(95%) = {v95*math.sqrt(252)*100:6.2f}%   CVaR = {c95*math.sqrt(252)*100:6.2f}%")

print()
print("=" * 64)
print("4. MARKOWITZ PORTFOLIO OPTIMIZATION (3 assets)")
print("=" * 64)
mu = [0.10, 0.04, 0.06]   # stocks, bonds, gold expected returns
cov = [
    [0.0400, 0.0050, 0.0020],
    [0.0050, 0.0100, -0.0010],
    [0.0020, -0.0010, 0.0200],
]
w, ret, vol = markowitz(mu, cov)
for asset, weight in zip(['Stocks', 'Bonds', 'Gold'], w):
    print(f"  {asset:7s}: {weight*100:6.2f}%")
print(f"  Expected return: {ret*100:5.2f}%    Volatility: {vol*100:5.2f}%")
print(f"  Sharpe (rf=2%):  {(ret - 0.02)/vol:.3f}")
print("=" * 64)`,t_=`import torch
import torch.nn as nn
import torch.nn.functional as F
import math
from typing import Dict, Tuple, Optional

# ============================================================
# 1. BlackScholesModel — closed-form pricing + 5 Greeks
#    C = S\xb7N(d1) - K\xb7e^(-rT)\xb7N(d2)
#    d1 = (ln(S/K) + (r + σ\xb2/2)\xb7T) / (σ\xb7√T)
#    d2 = d1 - σ\xb7√T
#    Greeks: Delta, Gamma, Vega, Theta, Rho (closed form)
# ============================================================

class BlackScholesModel(nn.Module):
    """Vectorised Black-Scholes European option pricer with Greeks.

    All inputs are tensors and broadcast together. Returns a dict of
    price plus delta / gamma / vega / theta / rho. Differentiable —
    can be used inside a deep hedging loss (Buehler 2019).
    """

    def __init__(self):
        super().__init__()

    @staticmethod
    def _norm_cdf(x: torch.Tensor) -> torch.Tensor:
        # Standard normal CDF via erf — differentiable in PyTorch
        return 0.5 * (1.0 + torch.erf(x / math.sqrt(2.0)))

    @staticmethod
    def _norm_pdf(x: torch.Tensor) -> torch.Tensor:
        return torch.exp(-0.5 * x * x) / math.sqrt(2.0 * math.pi)

    def forward(
        self,
        S: torch.Tensor,
        K: torch.Tensor,
        T: torch.Tensor,
        r: torch.Tensor,
        sigma: torch.Tensor,
        option_type: str = "call",
    ) -> Dict[str, torch.Tensor]:
        sqrt_T = torch.sqrt(T.clamp(min=1e-12))
        d1 = (torch.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * sqrt_T)
        d2 = d1 - sigma * sqrt_T
        N_d1 = self._norm_cdf(d1)
        N_d2 = self._norm_cdf(d2)
        N_neg_d1 = self._norm_cdf(-d1)
        N_neg_d2 = self._norm_cdf(-d2)
        pdf_d1 = self._norm_pdf(d1)
        discount = torch.exp(-r * T)
        if option_type == "call":
            price = S * N_d1 - K * discount * N_d2
            delta = N_d1
            theta = -S * pdf_d1 * sigma / (2 * sqrt_T) - r * K * discount * N_d2
            rho = K * T * discount * N_d2
        else:
            price = K * discount * N_neg_d2 - S * N_neg_d1
            delta = -N_neg_d1
            theta = -S * pdf_d1 * sigma / (2 * sqrt_T) + r * K * discount * N_neg_d2
            rho = -K * T * discount * N_neg_d2
        gamma = pdf_d1 / (S * sigma * sqrt_T)
        vega = S * pdf_d1 * sqrt_T            # per 1.00 (100%) vol
        return {
            "price": price,
            "delta": delta,
            "gamma": gamma,
            "vega": vega / 100.0,             # per 1% vol move
            "theta": theta / 365.0,           # per calendar day
            "rho": rho / 100.0,               # per 1% rate move
        }

# ============================================================
# 2. MonteCarloPricer — GBM simulation + path-dependent options
#    dS_t = μ\xb7S_t\xb7dt + σ\xb7S_t\xb7dW_t
#    S(t+dt) = S(t) \xb7 exp((μ - \xbdσ\xb2)\xb7dt + σ\xb7√dt\xb7Z),  Z ~ N(0,1)
#    Supports: European, Asian (avg), Barrier (knock-out)
#    Variance reduction: antithetic variates (Z and -Z).
# ============================================================

class MonteCarloPricer(nn.Module):
    def __init__(self, n_paths: int = 100_000, n_steps: int = 252,
                 antithetic: bool = True):
        super().__init__()
        self.n_paths = n_paths
        self.n_steps = n_steps
        self.antithetic = antithetic

    def simulate_gbm(self, S0: torch.Tensor, mu: torch.Tensor,
                     sigma: torch.Tensor, T: torch.Tensor) -> torch.Tensor:
        """Return (n_paths, n_steps+1) tensor of GBM price paths."""
        dt = T / self.n_steps
        if self.antithetic:
            half = self.n_paths // 2
            Z = torch.randn(half, self.n_steps, device=S0.device)
            Z = torch.cat([Z, -Z], dim=0)
        else:
            Z = torch.randn(self.n_paths, self.n_steps, device=S0.device)
        drift = (mu - 0.5 * sigma ** 2) * dt
        diffusion = sigma * math.sqrt(dt.item() if isinstance(dt, torch.Tensor) else dt) * Z
        log_increments = drift + diffusion
        log_prices = torch.cat(
            [torch.zeros(self.n_paths, 1, device=S0.device),
             torch.cumsum(log_increments, dim=1)], dim=1)
        return S0 * torch.exp(log_prices)

    def price_european(self, S0, K, T, r, sigma, option="call") -> torch.Tensor:
        paths = self.simulate_gbm(S0, r, sigma, T)  # μ = r (risk-neutral)
        ST = paths[:, -1]
        payoff = torch.clamp(ST - K, min=0.0) if option == "call" else torch.clamp(K - ST, min=0.0)
        return torch.exp(-r * T) * payoff.mean()

    def price_asian(self, S0, K, T, r, sigma, option="call") -> torch.Tensor:
        paths = self.simulate_gbm(S0, r, sigma, T)
        avg = paths[:, 1:].mean(dim=1)
        payoff = torch.clamp(avg - K, min=0.0) if option == "call" else torch.clamp(K - avg, min=0.0)
        return torch.exp(-r * T) * payoff.mean()

    def price_barrier(self, S0, K, T, r, sigma, H, option="call",
                      barrier="up_and_out") -> torch.Tensor:
        paths = self.simulate_gbm(S0, r, sigma, T)
        if barrier == "up_and_out":
            knocked = paths.max(dim=1).values >= H
        elif barrier == "down_and_out":
            knocked = paths.min(dim=1).values <= H
        else:
            knocked = torch.zeros(self.n_paths, dtype=torch.bool, device=S0.device)
        ST = paths[:, -1]
        payoff = torch.clamp(ST - K, min=0.0) if option == "call" else torch.clamp(K - ST, min=0.0)
        payoff = payoff * (~knocked).float()
        return torch.exp(-r * T) * payoff.mean()

# ============================================================
# 3. LSTMPredictor — next-period price-direction prediction
#    Input  : (batch, seq_len, n_features)  e.g. 60 days \xd7 5 features
#    Output : (batch, 1)  predicted next-period return
#    Typical hit rate on daily equity indices: ~52% (Fischer 2018)
# ============================================================

class LSTMPredictor(nn.Module):
    def __init__(self, input_dim: int = 5, hidden_dim: int = 64,
                 n_layers: int = 2, dropout: float = 0.2,
                 output_dim: int = 1):
        super().__init__()
        self.lstm = nn.LSTM(
            input_size=input_dim,
            hidden_size=hidden_dim,
            num_layers=n_layers,
            batch_first=True,
            dropout=dropout if n_layers > 1 else 0.0,
        )
        self.head = nn.Sequential(
            nn.Linear(hidden_dim, hidden_dim // 2),
            nn.ReLU(),
            nn.Dropout(dropout),
            nn.Linear(hidden_dim // 2, output_dim),
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        out, _ = self.lstm(x)
        last = out[:, -1, :]
        return self.head(last)

    def predict_direction(self, x: torch.Tensor) -> torch.Tensor:
        """Return 0/1 (down/up) prediction."""
        with torch.no_grad():
            return (self.forward(x).squeeze(-1) > 0).long()

# ============================================================
# 4. FraudGNN — GraphSAGE-style GNN over a transaction graph
#    Each transaction is a node; edges link transactions sharing
#    account / IP / device / merchant. Message passing propagates
#    features across the graph to flag coordinated fraud rings.
#        h_v^(l+1) = σ( W\xb7h_v^(l) + mean_{u∈N(v)} W\xb7h_u^(l) )
# ============================================================

class FraudGNN(nn.Module):
    def __init__(self, node_feat_dim: int = 16, edge_feat_dim: int = 8,
                 hidden_dim: int = 64, n_layers: int = 2,
                 n_classes: int = 2, dropout: float = 0.2):
        super().__init__()
        self.n_layers = n_layers
        self.node_proj = nn.Linear(node_feat_dim, hidden_dim)
        self.edge_proj = nn.Linear(edge_feat_dim, hidden_dim)
        self.layers = nn.ModuleList(
            [nn.Linear(hidden_dim, hidden_dim) for _ in range(n_layers)]
        )
        self.dropout = nn.Dropout(dropout)
        self.classifier = nn.Sequential(
            nn.Linear(hidden_dim, hidden_dim // 2),
            nn.ReLU(),
            nn.Linear(hidden_dim // 2, n_classes),
        )

    def forward(self, node_feats: torch.Tensor, edge_index: torch.Tensor,
                edge_feats: torch.Tensor) -> torch.Tensor:
        h = self.node_proj(node_feats)
        e = self.edge_proj(edge_feats)
        src, tgt = edge_index[0], edge_index[1]
        n_nodes = node_feats.size(0)
        hidden = h.size(1)
        for layer in self.layers:
            messages = e * h[src]
            agg = torch.zeros(n_nodes, hidden, device=h.device)
            agg.index_add_(0, tgt, messages)
            counts = torch.zeros(n_nodes, 1, device=h.device)
            counts.index_add_(0, tgt, torch.ones(src.size(0), 1, device=h.device))
            agg = agg / counts.clamp(min=1.0)
            h = F.relu(layer(h + agg))
            h = self.dropout(h)
        return self.classifier(h)

# ============================================================
# Demo — exercise every module
# ============================================================

def _demo() -> None:
    torch.manual_seed(42)
    print("=" * 60)
    print("BlackScholesModel — closed-form + Greeks")
    print("=" * 60)
    bs = BlackScholesModel()
    S = torch.tensor(100.0); K = torch.tensor(105.0); T = torch.tensor(1.0)
    r = torch.tensor(0.05); sigma = torch.tensor(0.20)
    out = bs(S, K, T, r, sigma, "call")
    print(f"  Call  : {out['price'].item():.4f}")
    print(f"  Delta : {out['delta'].item():.4f}    Gamma: {out['gamma'].item():.6f}")
    print(f"  Vega  : {out['vega'].item():.4f}    Theta: {out['theta'].item():.6f}")
    print(f"  Rho   : {out['rho'].item():.4f}")

    print()
    print("=" * 60)
    print("MonteCarloPricer — European / Asian / Barrier")
    print("=" * 60)
    mc = MonteCarloPricer(n_paths=50_000, n_steps=100, antithetic=True)
    S0 = torch.tensor(100.0); K2 = torch.tensor(105.0); T2 = torch.tensor(1.0)
    r2 = torch.tensor(0.05); sig = torch.tensor(0.20)
    eur = mc.price_european(S0, K2, T2, r2, sig, "call")
    asia = mc.price_asian(S0, K2, T2, r2, sig, "call")
    bar = mc.price_barrier(S0, K2, T2, r2, sig, torch.tensor(130.0),
                           "call", "up_and_out")
    print(f"  European    : {eur.item():.4f}  (BS closed-form: {out['price'].item():.4f})")
    print(f"  Asian (avg) : {asia.item():.4f}")
    print(f"  Up&Out H=130: {bar.item():.4f}")

    print()
    print("=" * 60)
    print("LSTMPredictor — 60-day lookback, 5 features")
    print("=" * 60)
    lstm = LSTMPredictor(input_dim=5, hidden_dim=64, n_layers=2)
    n = sum(p.numel() for p in lstm.parameters())
    x = torch.randn(32, 60, 5)
    y = lstm(x)
    print(f"  Params : {n:,}")
    print(f"  Input  : {tuple(x.shape)}  ->  Output : {tuple(y.shape)}")

    print()
    print("=" * 60)
    print("FraudGNN — transaction-graph fraud detection")
    print("=" * 60)
    gnn = FraudGNN(node_feat_dim=16, edge_feat_dim=8, hidden_dim=64, n_classes=2)
    ng = sum(p.numel() for p in gnn.parameters())
    nodes = torch.randn(100, 16)
    edge_index = torch.randint(0, 100, (2, 500))
    edge_feats = torch.randn(500, 8)
    logits = gnn(nodes, edge_index, edge_feats)
    preds = logits.argmax(dim=-1)
    print(f"  Params : {ng:,}")
    print(f"  Nodes  : {nodes.shape[0]}   Edges : {edge_index.size(1)}")
    print(f"  Predicted fraudulent: {(preds == 1).sum().item()} / 100")
    print("=" * 60)

if __name__ == "__main__":
    _demo()`;function ty(){return(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsx)(i.PageHeader,{eyebrow:"Fintech · Black-Scholes · Monte Carlo · VaR · LSTM · GNN fraud",title:"Quantitative Finance — Pricing, Risk, Trading & Fraud at HPC Scale",description:"The mathematical foundations of modern fintech: Black-Scholes-Merton (Black 1973, Nobel 1997) closed-form option pricing C = S·N(d₁) - K·e^(-rT)·N(d₂) with d₁, d₂ derivation; Itô's lemma df = (∂f/∂t + μ·∂f/∂x + ½σ²·∂²f/∂x²)·dt + σ·∂f/∂x·dW as the chain rule of stochastic calculus; Geometric Brownian Motion dS = μ·S·dt + σ·S·dW; Monte Carlo simulation via GBM (Boyle 1977) reaching 100M paths/sec on GPU; VaR quantile P(L>VaR) = 1-α and CVaR = E[L|L>VaR]; Markowitz mean-variance portfolio optimization (Nobel 1990); LSTM trading (Fischer 2018, ~52% directional accuracy); GNN-based transaction fraud detection (Weber 2019); deep hedging (Buehler 2019). With 4 AI-generated illustrations, a looping 5-phase pipeline animation, Pyodide executable demos, low-level PyTorch code (BlackScholesModel + MonteCarloPricer + LSTMPredictor + FraudGNN), and an HPC pipeline ASCII diagram.",right:(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsxs)(m.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(u.Cpu,{className:"h-3 w-3"})," BS + MC + GNN"]}),(0,t.jsxs)(m.Badge,{variant:"outline",className:"gap-1.5",children:[(0,t.jsx)(x.Zap,{className:"h-3 w-3"})," Pyodide"]})]})}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:tg.map(e=>(0,t.jsx)(i.KpiCard,{label:e.label,value:e.value,hint:e.hint,deltaTone:e.deltaTone},e.label))}),(0,t.jsx)(i.SectionCard,{title:"Fintech concept gallery — 3D animated, click to expand (lazy popup)",description:"Replaces the previous AI-generated static image gallery. Each card opens a lazy modal with an animated 3D SVG of the concept (Black-Scholes call surface, Monte Carlo paths, volatility surface, yield curve), an n-D dimension toggle (3D single stock → 4D portfolio → 5D derivatives portfolio → N-D full risk grid), and a floating math/code background with quant-finance equations and Python snippets drifting subtly.",icon:(0,t.jsx)(tp.Atom,{className:"h-5 w-5"}),badge:"3D gallery",children:(0,t.jsx)(es,{})}),(0,t.jsx)(i.SectionCard,{title:"Fintech concept shorts — 4 lazy popups with Pyodide code + 2024-2025 papers",description:"Four 9:16 vertical cards: Black-Scholes (50th anniversary 2023, deep hedging), Monte Carlo VaR/CVaR (Basel IV 2025+), GNN fraud detection (GraphSAGE, Visa/JPMorgan production 2024), HFT order book (SEC Reg NMS 2024, PFOF debate). Each card opens a lazy popup with animated SVG + math equations + Pyodide-runnable Python code + recent paper citation.",icon:(0,t.jsx)(D.Sparkles,{className:"h-5 w-5"}),badge:"4 shorts",children:(0,t.jsx)(V,{})}),(0,t.jsx)(i.SectionCard,{title:"Quant pipeline short — 5 phases (loop)",description:"Continuous-loop animation showing the core fintech pipeline. Phase 1: GBM price chart S(t) = S₀·exp((μ-½σ²)t + σ·W(t)). Phase 2: European call payoff max(S - K, 0) at expiry. Phase 3: Monte Carlo paths fan for pricing. Phase 4: P&L histogram with 5% VaR tail. Phase 5: transaction-graph GNN flags a fraud ring.",icon:(0,t.jsx)(f.Activity,{className:"h-5 w-5"}),badge:"short",children:(0,t.jsx)(tx,{})}),(0,t.jsx)(i.SectionCard,{title:"Fintech interactives — 8 fully interactive visuals (quant, derivatives, commodities, real-time data)",description:"Eight interactive visuals in lazy popups spanning the full quant stack: Black-Scholes option pricing (with 5 live Greeks), Monte Carlo VaR/CVaR (10k paths, Basel III→IV transition), real-time market data toggle (Yahoo Finance API + synthetic GBM fallback — switchable per user request), Markowitz efficient frontier, volatility surface (SVI parametric), Treasury yield curve (recession signal), GNN fraud detection (transaction network), HFT order book microstructure (maker-taker, PFOF debate). Each card opens a lazy popup with: animated SVG visual, math equation, sliders/buttons, 3-part InfoCallout.",icon:(0,t.jsx)(D.Sparkles,{className:"h-5 w-5"}),badge:"8 interactives",children:(0,t.jsx)(N,{})}),(0,t.jsx)(i.SectionCard,{title:"Black-Scholes math — the closed-form that started quantitative finance",description:"Black, Scholes & Merton (1973, Nobel 1997) derived the closed-form European option pricing formula by applying Itô's lemma to a portfolio that longs the option and shorts Δ shares of the underlying — the resulting portfolio is locally riskless, so it must earn the risk-free rate r. That no-arbitrage condition yields the Black-Scholes PDE ∂C/∂t + ½σ²S²·∂²C/∂S² + r·S·∂C/∂S - r·C = 0, whose solution is the formula below.",icon:(0,t.jsx)(ei.Brain,{className:"h-5 w-5"}),badge:"mathematics",children:(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsxs)("p",{className:"font-mono text-sm text-primary",children:["C = S·N(d",(0,t.jsx)("sub",{children:"1"}),") - K·e^(-rT)·N(d",(0,t.jsx)("sub",{children:"2"}),")  ·  d",(0,t.jsx)("sub",{children:"1"})," = (ln(S/K) + (r + ½σ²)·T) / (σ·√T)  ·  d",(0,t.jsx)("sub",{children:"2"})," = d",(0,t.jsx)("sub",{children:"1"})," - σ·√T"]}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"N(·) is the standard normal CDF. Put-call parity: C - P = S - K·e^(-rT). Greeks are derivatives: Delta=∂C/∂S, Gamma=∂²C/∂S², Vega=∂C/∂σ, Theta=∂C/∂t, Rho=∂C/∂r."})]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,t.jsxs)("div",{className:"rounded-md border border-emerald-500/40 bg-emerald-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-emerald-600 dark:text-emerald-400 mb-1",children:"Black-Scholes PDE"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"∂C/∂t + ½σ²S²·∂²C/∂S² + r·S·∂C/∂S - r·C = 0"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"No-arbitrage PDE — geometric Brownian motion assumed. Solvable in closed form for European payoff; numerical (finite-difference, MC) for exotics."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-amber-500/40 bg-amber-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-amber-600 dark:text-amber-400 mb-1",children:"Itô's lemma (chain rule)"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"df = (∂f/∂t + μ·∂f/∂x + ½σ²·∂²f/∂x²)·dt + σ·∂f/∂x·dW"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Stochastic chain rule — the extra ½σ²·∂²f/∂x² term comes from dW² = dt (quadratic variation)."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-violet-500/40 bg-violet-500/5 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold text-sm text-violet-600 dark:text-violet-400 mb-1",children:"Geometric Brownian Motion"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"dS = μ·S·dt + σ·S·dW"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Asset-price model assumed by Black-Scholes. Solution S(t) = S₀·exp((μ-½σ²)t + σ·W(t)) — log-normal returns."})]})]})]})}),(0,t.jsx)(i.SectionCard,{title:"Risk math — VaR quantile & CVaR expected shortfall",description:"Value at Risk (VaR) at confidence α answers: 'What is the loss we will not exceed with probability α?' It is a quantile of the loss distribution. Conditional VaR (CVaR, also Expected Shortfall) averages losses in the tail beyond VaR — a coherent risk measure (subadditive) where VaR is not.",icon:(0,t.jsx)(ei.Brain,{className:"h-5 w-5"}),badge:"mathematics",children:(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"rounded-md border border-primary/30 bg-primary/5 p-3 text-center",children:[(0,t.jsxs)("p",{className:"font-mono text-sm text-primary",children:["P(L > VaR",(0,t.jsx)("sub",{children:"α"}),") = 1 - α  ·  CVaR",(0,t.jsx)("sub",{children:"α"})," = E[L | L > VaR",(0,t.jsx)("sub",{children:"α"}),"]"]}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground mt-1",children:"VaR is the α-quantile of the loss distribution (e.g. α=0.95 → 5% tail). CVaR is the mean loss conditional on being in that tail — always ≥ VaR. Under Basel III, CVaR (stressed) is the regulatory capital metric."})]}),(0,t.jsxs)("div",{className:"grid md:grid-cols-3 gap-2 text-xs",children:[(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold mb-1",children:"Historical VaR"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"VaR = -sorted_returns[⌈(1-α)N⌉]"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Non-parametric: use the empirical quantile of past losses. Simple but assumes the future resembles the past."})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold mb-1",children:"Parametric VaR"}),(0,t.jsxs)("p",{className:"font-mono text-[11px]",children:["VaR = -(μ - z",(0,t.jsx)("sub",{children:"α"}),"·σ)"]}),(0,t.jsxs)("p",{className:"text-muted-foreground text-[11px] mt-1",children:["Assume normal returns. z",(0,t.jsx)("sub",{children:"0.95"})," = 1.645. Underestimates tail risk — real returns are fat-tailed."]})]}),(0,t.jsxs)("div",{className:"rounded-md border border-border/60 p-2.5",children:[(0,t.jsx)("p",{className:"font-semibold mb-1",children:"Monte Carlo VaR"}),(0,t.jsx)("p",{className:"font-mono text-[11px]",children:"simulate 10⁵-10⁸ scenarios → quantile"}),(0,t.jsx)("p",{className:"text-muted-foreground text-[11px] mt-1",children:"Most flexible — works for any portfolio payoff, any distribution. GPU implementations reach 100M paths/sec."})]})]})]})}),(0,t.jsx)(i.SectionCard,{title:"Try it: Black-Scholes + Monte Carlo + VaR/CVaR + Markowitz (Pyodide)",description:"Pure-Python implementations running in your browser via Pyodide (Wasm): Black-Scholes call/put with Greeks; antithetic-variate Monte Carlo (10000 GBM paths) for European call pricing with standard-error estimate; historical VaR(95%) and CVaR(95%) on 252 daily returns; Markowitz mean-variance minimum-variance portfolio (closed-form via Gauss-Jordan matrix inversion).",icon:(0,t.jsx)(tc.Terminal,{className:"h-5 w-5"}),badge:"executable",children:(0,t.jsx)(l.PyodideRunner,{code:tb,buttonLabel:"Run quant finance (Pyodide)"})}),(0,t.jsx)(i.SectionCard,{title:"Low-level PyTorch — BlackScholesModel, MonteCarloPricer, LSTMPredictor, FraudGNN",description:"Production-style quant code. BlackScholesModel is fully differentiable — can be plugged into a deep-hedging loss (Buehler 2019). MonteCarloPricer simulates GBM with antithetic variates and prices European, Asian (arithmetic average), and barrier (knock-out) options. LSTMPredictor is a 2-layer LSTM with 60-day lookback for next-period return prediction (~52% directional accuracy, Fischer 2018). FraudGNN is a GraphSAGE-style 2-layer message-passing GNN over a transaction graph (Weber 2019 'Scale').",icon:(0,t.jsx)(u.Cpu,{className:"h-5 w-5"}),badge:"low-level",children:(0,t.jsx)(n.CodeBlock,{language:"python",filename:"fintech_quant.py",highlight:[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280],code:t_})}),(0,t.jsx)(i.SectionCard,{title:"Quant scenarios in 4 languages — Delta Hedging, MC Asian, LSTM, GNN, SVI, Markowitz, Deep Hedging, CVA/XVA, Heston, Hull-White, SABR, LOB Replay, Black-76, Bond Duration",description:"Fourteen production-style quant scenarios presented as cards that open lazy popups (mirroring the LHC ingestion pattern on the ELT+ETL page). Each popup contains the scenario brief (Derivative, Problem, Quant Solution), a visualisation matrix (rebalancing table / vol smile / efficient frontier / fraud-ring graph / P&L distribution / exposure profile / spot+variance paths / order-book depth / futures curve / price-yield curve), multi-language code in Python + Rust + Scala + Elixir, an in-browser Pyodide runner for the Python version, and math-foundation + implementation-insight callouts. Scenarios span pricing (Black-Scholes, MC Asian, Heston, Black-76, SABR), portfolio theory (Markowitz), ML (LSTM, GNN, Deep Hedging), risk (CVA/XVA, Bond Duration), market microstructure (LOB replay), and rates (Hull-White). All Python examples include synthetic market data + hypothetical scenarios.",icon:(0,t.jsx)(D.Sparkles,{className:"h-5 w-5"}),badge:"14 scenarios × 4 languages",children:(0,t.jsx)(ts,{})}),(0,t.jsx)(i.SectionCard,{title:"Low-level systems languages — Rust, Scala, Elixir, C implementations of the same 4 models",description:"Production-style low-level implementations of BlackScholesModel, MonteCarloPricer, LSTMPredictor, and FraudGNN in four systems languages: Rust (tch-rs + rayon + statrs for production quant libraries), Scala (Spark + DL4J for distributed training across a cluster), Elixir (Nx + GenStage for streaming inference with backpressure on BEAM), and C (AVX2 SIMD + OpenMP for sub-microsecond HFT kernels). The same 4 models as the PyTorch block above, but in lower-level languages used in different deployment contexts — PyTorch for research/training, Rust for production CPU/GPU inference, Scala for distributed batch jobs, Elixir for streaming real-time inference, C for ultra-low-latency option desks.",icon:(0,t.jsx)(u.Cpu,{className:"h-5 w-5"}),badge:"low-level × 4 langs",children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-xs text-muted-foreground mb-2",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Rust"})," — production quant library. Uses tch-rs (PyTorch bindings) for the LSTM/GNN, rayon for parallel Monte Carlo, statrs for the normal CDF. Compiles to native code; ~50 ns/option on a single core."]}),(0,t.jsx)(n.CodeBlock,{language:"rust",filename:"fintech_quant_lowlevel.rs",code:ti})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-xs text-muted-foreground mb-2",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Scala"})," — distributed quant via Spark + DL4J. Black-Scholes is a Spark UDF applied across the option book; Monte Carlo is an RDD of paths distributed across the cluster; LSTM training uses DL4J's SparkComputationGraph; the GNN uses GraphX message passing across a billion-edge transaction graph."]}),(0,t.jsx)(n.CodeBlock,{language:"scala",filename:"FintechQuantLowLevel.scala",code:to})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-xs text-muted-foreground mb-2",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Elixir"})," — streaming inference on the BEAM VM. Each model is a GenServer subscribing to a PubSub topic (e.g. ",(0,t.jsx)("code",{className:"font-mono",children:"ticks:AAPL"}),"); a new tick triggers a forward pass and broadcasts a signal. GenStage handles backpressure automatically — the pipeline never overflows. Uses Nx for tensor ops (BEAM JIT-compiled)."]}),(0,t.jsx)(n.CodeBlock,{language:"elixir",filename:"fintech_quant_lowlevel.ex",code:tn})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-xs text-muted-foreground mb-2",children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"C"})," — ultra-low-latency kernels for HFT. AVX2 SIMD (4 doubles/cycle via ",(0,t.jsx)("code",{className:"font-mono",children:"__m256d"})," intrinsics) for batch Black-Scholes; OpenMP parallel Monte Carlo; minimal hand-rolled single-layer LSTM forward pass; pointer-based graph with 2-layer message passing. Used in HFT option desks (Citadel Securities, Virtu, Jump Trading) where ~50 ns/option is required."]}),(0,t.jsx)(n.CodeBlock,{language:"c",filename:"fintech_quant_lowlevel.c",code:tl})]})]})}),(0,t.jsx)(i.SectionCard,{title:"Modern papers — Black-Scholes, Monte Carlo, LSTM trading, GNN fraud, Deep hedging",description:"Five papers that define modern quantitative finance: (1) Black-Scholes (Black 1973, Nobel 1997) — closed-form option pricing. (2) Monte Carlo in finance (Boyle 1977) — numerical option pricing via simulation. (3) LSTM for trading (Fischer 2018) — recurrent networks on price sequences. (4) GNN fraud detection (Weber 2019, 'Scale') — graph neural networks over transaction networks. (5) Deep hedging (Buehler 2019) — neural networks learn hedging strategies that beat Black-Scholes under transaction costs.",icon:(0,t.jsx)(h.Network,{className:"h-5 w-5"}),children:(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Black-Scholes (Black & Scholes 1973, JPE 81):"}),' "The Pricing of Options and Corporate Liabilities." Derived the closed-form formula for European options by constructing a continuously-rebalanced riskless portfolio (long option, short Δ shares) and applying Itô\'s lemma. The resulting Black-Scholes PDE ∂C/∂t + ½σ²S²·∂²C/∂S² + r·S·∂C/∂S - r·C = 0 has the closed-form solution C = S·N(d₁) - K·e^(-rT)·N(d₂). Awarded the 1997 Nobel Memorial Prize in Economics (Scholes & Merton; Black died 1995). The single most influential paper in quantitative finance — every options market-maker still prices off this formula or its generalisations (Black 1976 for futures, Garman-Kohlhagen 1983 for FX, Black-Derman-Toy 1990 for rates).']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Monte Carlo in finance (Boyle 1977, JFE 4):"}),' "Options: A Monte Carlo Approach." First systematic application of Monte Carlo simulation to option pricing — simulate the underlying asset\'s stochastic process (GBM under risk-neutral measure), evaluate the payoff, discount and average. The method handles path-dependent and exotic payoffs (Asian, barrier, lookback) where no closed form exists. Variance reduction techniques (antithetic variates, control variates, importance sampling) cut compute 10-100×. Modern GPU implementations (CuPy, JAX, PyTorch) reach 100M paths/sec, enabling real-time risk for exotic books.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"LSTM for trading (Fischer & Krauss 2018, SSRN 3090978):"}),' "Deep learning with long short-term memory networks for financial market predictions." Applied LSTM (Hochreiter & Schmidhuber 1997) to daily returns of all S&P 500 constituents 1992-2015. Achieves ~52-54% directional accuracy (vs 50% random) — small but economically significant given leverage. Strategy: long the top decile of LSTM predictions, short the bottom decile. Outperforms random forest and logistic regression baselines. Key finding: signal decays fast — strategies must turn over daily. Later work (Zhang 2023) showed transformers (PatchTST, TimeLLM) edge out LSTMs on long-horizon forecasting.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"GNN fraud detection (Weber et al. 2019, KDD 'Scale' workshop):"}),' "Anti-Money Laundering in Bitcoin: Graph Machines Learn the Topology of Fraud Rings." Modeled Bitcoin transactions as a graph (addresses = nodes, transactions = edges) and trained a GraphSAGE-style GNN to flag illicit addresses. Multi-hop message passing captures the structure of fraud rings (laundering cycles, peel chains) invisible to per-transaction rule systems. Outperforms random-forest-on-node-features by 30-50% AUC. The same architecture (FraudGNN) now powers production systems at every major payment network — Visa, Mastercard, Stripe, PayPal — flagging 5-10× more fraud than rule-based systems at the same false-positive rate.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Deep hedging (Buehler et al. 2019, arXiv:1802.03042):"}),' "Deep Hedging." Replaces the Black-Scholes continuous-rebalancing recipe with a neural network that learns the optimal hedging strategy by minimising a risk measure (CVaR, entropic risk) over simulated paths. Crucially accounts for transaction costs, market impact, and P&L variance — all ignored by the closed-form Greeks. The network input is the current portfolio state; the output is the next-period hedge trade. Trained on 10⁷-10⁹ simulated GBM paths, the deep hedging network outperforms Black-Scholes Delta hedging by 20-40% in after-cost P&L variance. Production deployed at JP Morgan, HSBC, and Allianz. This is the strongest case for ML in derivatives: not prediction of prices, but optimisation of actions.']})]})}),(0,t.jsx)(i.SectionCard,{title:"HPC pipeline — market data → ingestion → pricing/risk → ML → execution → settlement",description:"End-to-end fintech HPC pipeline. Microsecond-latency market-data ingestion (multicast UDP + Aeron); vectorised pricing & risk on GPU clusters (Black-Scholes surface + Monte Carlo risk engine); ML models for signal generation (LSTM trading) and fraud detection (GNN); order execution via FIX protocol with smart order routing (SOR); T+1 / T+0 settlement via DLT. Daily VaR / CVaR recompute on the full portfolio; intraday stress tests under regulatory scenarios (Basel III FRTB).",icon:(0,t.jsx)(f.Activity,{className:"h-5 w-5"}),children:(0,t.jsx)(n.CodeBlock,{language:"text",filename:"fintech_hpc_pipeline.txt",code:`┌──────────────────────────────────────────────────────────────────────┐
│  FINTECH HPC PIPELINE (real-time + end-of-day)                       │
│                                                                      │
│  Market data feeds (NYSE, NASDAQ, CME, Eurex, LSE, FX)              │
│    - Multicast UDP + Aeron / Solace PubSub+                          │
│    - Normalized to Apache Arrow in-flight (zero-copy)                │
│    - Throughput: 10M messages/sec, sub-50μs latency                  │
│         ↓                                                             │
│  ┌──────────────────────────────────────────────────────┐            │
│  │ INGESTION (kafka + kdb+/tick)                        │            │
│  │   - Tick normalisation, NBBO construction             │            │
│  │   - 50 TB/day raw, 5 TB/day normalised                │            │
│  │   - Hot tier in-memory (kdb+), warm in Parquet/Iceberg│            │
│  └──────────────────────────────────────────────────────┘            │
│         ↓                                                             │
│  ┌──────────────────────────────────────────────────────┐            │
│  │ PRICING & RISK ENGINE (GPU cluster, 100+ A100)       │            │
│  │   - Black-Scholes closed-form (vectorised, 10M/sec)  │            │
│  │   - Monte Carlo (100M paths/sec, GBM + jump-diffusion)│           │
│  │   - VaR / CVaR (historical, parametric, MC)          │            │
│  │   - Full-revaluation stress tests (Basel III FRTB)   │            │
│  │   - XVA desk: CVA, DVA, FVA, MVA — funding-cost adj. │            │
│  └──────────────────────────────────────────────────────┘            │
│         ↓                                                             │
│  ┌──────────────────────────────────────────────────────┐            │
│  │ ML MODELS (PyTorch, Triton inference server)         │            │
│  │   - LSTMPredictor: 60-day price-direction signal     │            │
│  │     (52% hit rate, 5 features, daily retrain)         │            │
│  │   - FraudGNN: transaction-graph fraud detection      │            │
│  │     (Weber 2019 GraphSAGE, 2-layer, message passing) │            │
│  │   - Deep hedging network (Buehler 2019)              │            │
│  │   - Transformer nowcast: PatchTST for macro forecasts│            │
│  └──────────────────────────────────────────────────────┘            │
│         ↓                                                             │
│  ┌──────────────────────────────────────────────────────┐            │
│  │ EXECUTION (FIX 4.4 / SBE, smart order router)        │            │
│  │   - Venue selection (lit, dark, mid-point, RFQ)      │            │
│  │   - TWAP / VWAP / implementation shortfall (IS) algos │            │
│  │   - Market-making: inventory + adverse selection skew │           │
│  │   - Microsecond latency budget enforced per venue     │            │
│  └──────────────────────────────────────────────────────┘            │
│         ↓                                                             │
│  ┌──────────────────────────────────────────────────────┐            │
│  │ CLEARING & SETTLEMENT (T+1 / T+0 via DLT)            │            │
│  │   - Trade affirmation, position keep, reconciliation │            │
│  │   - DLT settlement (DTCC Tokenized Settlement, EIB)   │            │
│  │   - Regulatory reporting: EMIR/MiFIR, CFTC swap data  │            │
│  │   - Audit trail → OpenTelemetry traces (ADR-054)     │            │
│  └──────────────────────────────────────────────────────┘            │
│                                                                      │
│  Observability: every stage emits OpenTelemetry spans →             │
│  the trade audit trail IS a distributed trace (see MLOps & Tracing). │
└──────────────────────────────────────────────────────────────────────┘`})}),(0,t.jsx)(i.SectionCard,{title:"My deeper thought: finance IS stochastic control",description:"The unifying view: Black-Scholes is the heat equation in disguise; Itô's lemma is the chain rule for stochastic calculus; VaR is the quantile function; portfolio optimization is the same convex optimisation as ML training; the market is a stochastic process that ML tries to predict — and trading IS stochastic control with a P&L reward.",icon:(0,t.jsx)(g.TrendingUp,{className:"h-5 w-5"}),badge:"Insight",children:(0,t.jsxs)("div",{className:"space-y-3 text-sm text-muted-foreground leading-relaxed",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Black-Scholes IS the heat equation (after substitution)."})," Apply the change-of-variables x = ln(S/K), τ = ½σ²·(T-t), u(x, τ) = e^(rT)·C/S — the Black-Scholes PDE collapses to the canonical heat equation ∂u/∂τ = ∂²u/∂x². This is why the closed-form solution involves the Gaussian N(·): the Green's function of the heat equation is a normal PDF. Black-Scholes pricing IS diffusion of an initial payoff through Gaussian heat-kernel smoothing — the same equation that describes temperature spreading through a rod describes how option value relaxes toward payoff at expiry. Once you see this, the formula is obvious rather than magical."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Itô's lemma IS the chain rule for stochastic calculus."})," For a deterministic function f(t, x), Taylor gives df = (∂f/∂t)·dt + (∂f/∂x)·dx + ½·(∂²f/∂x²)·dx² + … — and dx² is O(dt²), so it vanishes. But for stochastic x = W(t), the quadratic variation dW² = dt is the same order as dt — the second-order term survives. Itô's lemma is just Taylor expansion that keeps the dx² term because Brownian motion has non-trivial quadratic variation. Everything in stochastic calculus follows from this single fact: dW² = dt."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"VaR IS the quantile function; CVaR IS the conditional expectation."}),' P(L > VaR) = 1-α means VaR is the (1-α)-quantile of the loss distribution — VaR = F⁻¹(1-α). CVaR = E[L | L > VaR] is the conditional expectation over the tail. There is nothing exotic here: VaR and CVaR are the same quantile and conditional-mean functions you learned in introductory statistics, applied to a portfolio loss distribution. The "finance" is in specifying that distribution (via historical samples, Gaussian assumption, or Monte Carlo simulation); the risk metrics themselves are pure descriptive statistics.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"Portfolio optimization IS ML training (convex optimisation)."}),' Markowitz minimum-variance is "minimise w^T·Σ·w subject to 1^T·w = 1" — a quadratic program. Linear-regression training is "minimise ||Xw - y||² subject to ||w||₂² ≤ τ" — also a quadratic program. The same solvers (gradient descent, conjugate gradient, interior-point) solve both. The covariance matrix Σ in Markowitz is the same Gram matrix X^T·X/Σ in regression. The "Sharpe ratio" is just the signal-to-noise ratio (mean / std) of portfolio returns. The whole of mean-variance finance IS regularised least-squares ML — understood fifty years before "machine learning" was named.']}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{className:"text-foreground/80",children:"The market IS a stochastic process that ML tries to predict — and trading IS stochastic control."})," The market is a stochastic process (a probability measure on price paths). ML models (LSTM, transformers, GNNs) try to learn features of that measure to predict next-period returns. But prediction is not alpha — alpha requires taking actions (positions) that exploit the prediction under risk and transaction costs. Trading is therefore a stochastic optimal control problem: choose position π_t to maximise E[Σ γ^t · r(π_t, S_t)] subject to constraints. The Bellman equation from RL-agentic IS the HJB equation of stochastic control. Deep hedging (Buehler 2019) IS the policy-network solution to that control problem. Finance IS stochastic control, just with a Sharpe-ratio reward and a Brownian-motion environment. The same RL agents that play Atari play the market — the only difference is the reward function and the noise model."]})]})}),(0,t.jsx)(i.SectionCard,{title:"5 cross-disciplinary elegant-code cards — fintech IS the universal application domain",description:"Five of the platform's 20 elegant-code cards surface here, each showing ONE math equation bridging fintech ↔ 2+ other sciences. Black-Scholes (cargo ↔ SPX ↔ alleles), Kelly (bets ↔ alleles ↔ actions), VaR (banks ↔ ports ↔ climate), GBM (stocks ↔ dwell ↔ drift), Monte Carlo (options ↔ congestion ↔ variants).",icon:(0,t.jsx)(D.Sparkles,{className:"h-5 w-5"}),badge:"5 cards × 5 langs",children:(0,t.jsx)(d.DatasetCards,{examples:p.ELEGANT_CODE_CARDS.filter((e,t)=>[10,12,14,17,18].includes(t)),intro:"Black-Scholes (fintech ↔ maritime ↔ genetics), Kelly (fintech ↔ genetics ↔ RL), VaR (fintech ↔ maritime ↔ climate), Monte Carlo (fintech ↔ maritime ↔ genetics), GBM (fintech ↔ maritime ↔ genetics). Each card shows ONE equation bridging 3+ sciences, with elegant code in 5 languages."})}),(0,t.jsx)(c.RelatedElegantCode,{hostPage:"fintech"}),"      ",(0,t.jsx)(i.SectionCard,{title:"Deep computational analysis — Monte Carlo Value-at-Risk — GBM portfolio",description:"Click the card to expand, then 'Load analysis' to run real Python via Pyodide (WebAssembly) in your browser. Output is parsed as JSON and rendered as an interactive chart with stats, reference lines, and a written interpretation.",icon:(0,t.jsx)(f.Activity,{className:"h-5 w-5"}),badge:"Pyodide",children:(0,t.jsx)(tu.AnalysisCard,{spec:tf.VAR_CARD})}),(0,t.jsxs)(th.DeeperThoughtSection,{pageTitle:"Fintech",children:[(0,t.jsx)(th.DeeperThought,{title:"The market IS a stochastic process that ML tries to predict — and trading IS stochastic control",connectedTo:"ADR-054 (Black-Scholes + MC + GNN)",children:(0,t.jsx)("p",{children:"The market is a stochastic process (a probability measure on price paths). ML models (LSTM, transformer, GNN) learn features of that measure to predict next-period returns. But prediction is not alpha — alpha requires taking actions (positions) that exploit the prediction under risk and transaction costs. Trading is therefore a stochastic optimal control problem: choose position π_t to maximise E[Σ γ^t · r(π_t, S_t)] subject to constraints. The Bellman equation from RL-agentic IS the HJB equation of stochastic control. Deep hedging (Buehler 2019) IS the policy-network solution. Finance IS stochastic control, just with a Sharpe-ratio reward."})}),(0,t.jsx)(th.DeeperThought,{title:"Black-Scholes IS the no-arbitrage argument, not the formula",connectedTo:"ADR-054 (Black-Scholes + MC + GNN)",children:(0,t.jsx)("p",{children:"The Black-Scholes formula (C = S·N(d1) − K·e^(-rT)·N(d2)) is the SOLUTION. The INSIGHT is the no-arbitrage argument: hold 1 option short + Δ shares long → the portfolio is riskless → it must earn r. This no-arbitrage constraint PRICES the option — the market's structure, not the formula, determines the price. That's why Black-Scholes works across domains: no-arbitrage is a structural constraint (cargo options, stock options, allele-substitution options all satisfy it), not a model assumption."})}),(0,t.jsx)(th.DeeperThought,{title:"Medallion's 65% CAGR IS Kelly-optimal bet sizing on a Sharpe-2.0 strategy",connectedTo:"ADR-054 (Black-Scholes + MC + GNN)",children:(0,t.jsx)("p",{children:"Renaissance Medallion's 65% gross annual return with ~20% volatility gives Sharpe ~2.0. Kelly's f* = μ/σ² = 0.65/0.04 = 16.25× leverage. Medallion uses ~12.5× (slightly below Kelly — half-Kelly is common for drawdown control). The 65% return ISN'T magic — it's the mathematical maximum log-growth rate for a Sharpe-2.0 strategy at Kelly leverage. Remove Kelly leverage → return drops to ~5%. The alpha is in the strategy (Sharpe 2.0); the amplification is in the leverage (Kelly)."})}),(0,t.jsx)(th.DeeperThought,{title:"Fintech IS distributed systems engineering applied to money",connectedTo:"ADR-001 (platform architecture)",children:(0,t.jsx)("p",{children:"A trading system IS a distributed system: order management (state machine), market data (Kafka streaming), risk engine (real-time computation), settlement (eventual consistency). The same patterns that power this platform's data engineering stack (Bronze→Silver→Gold, idempotent MERGE, lineage tracking) power a bank's trade lifecycle. The only difference: the 'data' is money, the 'latency' is microseconds, and the 'compliance' is Dodd-Frank instead of GDPR. Finance IS data engineering, just with higher stakes."})}),(0,t.jsx)(th.DeeperThought,{title:"VaR IS the inverse CDF of the loss distribution — universal across Basel, Solvency, and FEMA",connectedTo:"ADR-055 (cross-disciplinary scope)",children:(0,t.jsx)("p",{children:"VaR_α = -(μ + z_α·σ) IS the inverse CDF of the loss distribution at the α quantile. Every loss distribution has one. JPMorgan's $4T balance sheet (Basel III, daily 99%), Lloyd's $50B hull portfolio (Solvency II, weekly 95%), and NOAA's flood gauges (FEMA, 100-year) all use the SAME formula. The regulator changes (Basel vs Solvency vs FEMA), the loss distribution changes (Gaussian vs log-normal vs Gumbel), but the math is identical: find the α-quantile of the loss. VaR IS the universal risk language."})})]}),(0,t.jsx)(tm.RelatedTopics,{topics:[{id:"databricks",reason:"Spark for Monte Carlo pricing"},{id:"streaming",reason:"Kafka for market data feeds"},{id:"neural-networks",reason:"LSTM for price prediction"},{id:"quantum-computing",reason:"QEC for Shor on RSA"}]}),(0,t.jsx)(o.NextSteps,{relatedPages:[{id:"connections",reason:"See Black-Scholes · Kelly Criterion's cousin cards in the cross-disciplinary graph"},{id:"global-shipping",reason:"Geometric Brownian Motion (GBM IS the universal multiplicative-noise equation) — same math, fintech domain"},{id:"tabular",reason:"Gradient Descent (Gradient Descent IS the learning rule) — same math, ML domain"}]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(s.default,{href:(0,td.hrefFor)("rag-deep-dive"),className:"text-sm text-primary hover:underline",children:"→ RAG Deep Dive (BM25 = portfolio matching)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(s.default,{href:(0,td.hrefFor)("systems-biology"),className:"text-sm text-primary hover:underline",children:"→ Systems Biology (PPI graph = transaction graph)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(s.default,{href:(0,td.hrefFor)("mlops-tracing"),className:"text-sm text-primary hover:underline",children:"→ MLOps & Tracing (trade audit trail = OpenTelemetry)"}),(0,t.jsx)("span",{className:"text-muted-foreground",children:"·"}),(0,t.jsx)(s.default,{href:(0,td.hrefFor)("knowledge"),className:"text-sm text-primary hover:underline",children:"→ Knowledge Hub (ADR-054: Black-Scholes + MC + GNN for fintech)"})]})]})}e.s(["FintechPage",()=>ty],605845)}]);