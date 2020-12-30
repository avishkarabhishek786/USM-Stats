(this["webpackJsonpusmfum-stats"]=this["webpackJsonpusmfum-stats"]||[]).push([[0],{120:function(e,t,r){"use strict";r.r(t);var n=r(6),c=r(4),u=r(31),i=r.n(u),a=r(40),s=r(3),o=r(5),l=r(8),d=r(7),j=(r(86),r(1)),f=r.n(j),b=r(15),O=r(17),p={name:"usm",abi:["function mint(address to, uint minUsmOut) external payable returns (uint)","function burn(address from, address payable to, uint usmToBurn, uint minEthOut) external returns (uint)","function fund(address to, uint minFumOut) external payable returns (uint)","function defund(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)","function defundFromFUM(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)","function ethPool() public view returns (uint pool)","function minFumBuyPrice() public view returns (uint mfbp)","function buySellAdjustment() public view returns (uint adjustment)","function ethBuffer(uint8 upOrDown) external view returns (int buffer)","function ethToUsm(uint ethAmount, uint8 upOrDown) external view returns (uint usmOut)","function usmToEth(uint usmAmount, uint8 upOrDown) external view returns (uint ethOut)","function debtRatio() external view returns (uint ratio)","function usmPrice(uint8 side) external view returns (uint price)","function fumPrice(uint8 side) external view returns (uint price)","function latestChainlinkPrice() public view returns (uint price)","function latestCompoundPrice() public view returns (uint price)","function latestUniswapTWAPPrice() public view returns (uint price)","function latestPrice() public virtual view returns (uint price)","event MinFumBuyPriceChanged(uint previous, uint latest)","event BuySellAdjustmentChanged(uint previous, uint latest)","function totalSupply() external view returns (uint256)","function balanceOf(address account) external view returns (uint256)","function transfer(address recipient, uint256 amount) external returns (bool)","function allowance(address owner, address spender) external view returns (uint256)","function approve(address spender, uint256 amount) external returns (bool)","function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)","event Transfer(address indexed from, address indexed to, uint256 value)"],address:{1:"0x03eb7Ce2907e202bB70BAE3D7B0C588573d3cECC"}},h={name:"fum",abi:["function totalSupply() external view returns (uint256)","event Transfer(address indexed from, address indexed to, uint256 value)"],address:{1:"0xf04a5D82ff8a801f7d45e9C14CDcf73defF1a394"}},m="chainlink",x="compound",v="uniswap",y="coingecko",P="median";function w(e){return{type:"NETWORK_LOADED",provider:e}}function S(e){return{type:"USM_LOADED",usm:e}}function C(e){return{type:"FUM_LOADED",fum:e}}function E(e,t){switch(e){case m:return{type:"ORACLE_PRICE_CHAINLINK",price:t};case x:return{type:"ORACLE_PRICE_COMPOUND",price:t};case v:return{type:"ORACLE_PRICE_UNISWAP",price:t};case y:return{type:"ORACLE_PRICE_COINGECKO",price:t};case P:return{type:"ORACLE_PRICE_MEDIAN",price:t}}}function U(e){return{type:"USM_COLLATERAL",collateral:e}}function g(e){return{type:"USM_ETH_BUFFER",ethBuffer:e}}function _(e,t){return{type:"USM_PRICE",buyPrice:e,sellPrice:t}}function M(e,t){return{type:"FUM_PRICE",buyPrice:e,sellPrice:t}}function k(e,t){switch(e){case p.name:return{type:"USM_TOTAL_SUPPLY",supply:t};case h.name:return{type:"FUM_TOTAL_SUPPLY",supply:t}}}function B(e,t){switch(e){case p.name:return{type:"USM_MINTS",mints:t};case h.name:return{type:"FUM_MINTS",mints:t}}}function D(e,t){switch(e){case p.name:return{type:"USM_BURNS",burns:t};case h.name:return{type:"FUM_BURNS",burns:t}}}var R=function(){var e=Object(b.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(t,r),A(t,r),N(t,r),F(t,r),L(t,r);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(f.a.mark((function e(t,r){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.ethPool();case 2:n=e.sent,c=O.a.utils.formatEther(n),t(U(c));case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(f.a.mark((function e(t,r){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.debtRatio();case 2:n=e.sent,c=O.a.utils.formatEther(n),t({type:"USM_DEBT_RATIO",debtRatio:c});case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(f.a.mark((function e(t,r){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.ethBuffer(0);case 2:n=e.sent,c=O.a.utils.formatEther(n),t(g(c));case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(f.a.mark((function e(t,r){var n,c,u,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.usmPrice(0);case 2:return n=e.sent,c=O.a.utils.formatEther(n),e.next=6,r.usmPrice(1);case 6:u=e.sent,i=O.a.utils.formatEther(u),t(_(c,i));case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(f.a.mark((function e(t,r){var n,c,u,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.fumPrice(0);case 2:return n=e.sent,c=O.a.utils.formatEther(n),e.next=6,r.fumPrice(1);case 6:u=e.sent,i=O.a.utils.formatEther(u),t(M(c,i));case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(f.a.mark((function e(t,r,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$(t,r,n),W(t,r,n),H(t,r,n);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),$=function(){var e=Object(b.a)(f.a.mark((function e(t,r,n){var c,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.totalSupply();case 2:c=e.sent,u=O.a.utils.formatEther(c),t(k(r.name,u));case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(f.a.mark((function e(t,r,n){var c,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.filters.Transfer(O.a.constants.AddressZero,null),e.next=3,n.queryFilter(c,0);case 3:u=e.sent,t(B(r.name,u.length));case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(b.a)(f.a.mark((function e(t,r,n){var c,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.filters.Transfer(null,O.a.constants.AddressZero),e.next=3,n.queryFilter(c,0);case 3:u=e.sent,t(D(r.name,u.length));case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),K=r(71),z=r.n(K),Y=function(){var e=Object(b.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(t),q(t,r),G(t,r),X(t,r),Z(t,r);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z.a.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then((function(e){t(E(y,e.data.ethereum.usd))})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(b.a)(f.a.mark((function e(t,r){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.latestChainlinkPrice();case 2:n=e.sent,c=O.a.utils.formatEther(n),t(E(m,c));case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),G=function(){var e=Object(b.a)(f.a.mark((function e(t,r){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.latestCompoundPrice();case 2:n=e.sent,c=O.a.utils.formatEther(n),t(E(x,c));case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),X=function(){var e=Object(b.a)(f.a.mark((function e(t,r){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.latestUniswapTWAPPrice();case 2:n=e.sent,c=O.a.utils.formatEther(n),t(E(v,c));case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Z=function(){var e=Object(b.a)(f.a.mark((function e(t,r){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.latestPrice();case 2:n=e.sent,c=O.a.utils.formatEther(n),t(E(P,c));case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),V=function(){var e=Object(b.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=new O.a.providers.JsonRpcProvider("https://mainnet.infura.io/v3/1be1f8b7b85a47e4949bc1057660a81d"),t(w(r)),Q(t,r),ee(t,r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(b.a)(f.a.mark((function e(t,r){var n,c,u,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getNetwork();case 2:n=e.sent,c=p.abi,u=p.address[n.chainId],i=new O.a.Contract(u,c,r),t(S(i)),I(t,p,i),R(t,i),Y(t,i);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ee=function(){var e=Object(b.a)(f.a.mark((function e(t,r){var n,c,u,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getNetwork();case 2:n=e.sent,c=h.abi,u=h.address[n.chainId],i=new O.a.Contract(u,c,r),t(C(i)),I(t,h,i);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),te=r(18),re=r(19),ne=Object(re.a)((function(e){return Object(te.get)(e,"app.provider",null)}),(function(e){return e})),ce=(Object(re.a)((function(e){return Object(te.get)(e,"app.usm",null)}),(function(e){return e})),Object(re.a)((function(e){return Object(te.get)(e,"usm.supply",0)}),(function(e){return e}))),ue=Object(re.a)((function(e){return Object(te.get)(e,"usm.mints",0)}),(function(e){return e})),ie=Object(re.a)((function(e){return Object(te.get)(e,"usm.burns",0)}),(function(e){return e})),ae=Object(re.a)((function(e){return Object(te.get)(e,"usm.collateral",0)}),(function(e){return e})),se=Object(re.a)((function(e){return Object(te.get)(e,"usm.debtRatio",0)}),(function(e){return e})),oe=Object(re.a)((function(e){return Object(te.get)(e,"usm.ethBuffer",0)}),(function(e){return e})),le=Object(re.a)((function(e){return Object(te.get)(e,"usm.buyPrice",0)}),(function(e){return e})),de=Object(re.a)((function(e){return Object(te.get)(e,"usm.sellPrice",0)}),(function(e){return e})),je=Object(re.a)((function(e){return Object(te.get)(e,"fum.supply",0)}),(function(e){return e})),fe=Object(re.a)((function(e){return Object(te.get)(e,"fum.mints",0)}),(function(e){return e})),be=Object(re.a)((function(e){return Object(te.get)(e,"fum.burns",0)}),(function(e){return e})),Oe=Object(re.a)((function(e){return Object(te.get)(e,"fum.buyPrice",0)}),(function(e){return e})),pe=Object(re.a)((function(e){return Object(te.get)(e,"fum.sellPrice",0)}),(function(e){return e})),he=Object(re.a)((function(e){return Object(te.get)(e,"oracle.chainlinkPrice",0)}),(function(e){return e})),me=Object(re.a)((function(e){return Object(te.get)(e,"oracle.compoundPrice",0)}),(function(e){return e})),xe=Object(re.a)((function(e){return Object(te.get)(e,"oracle.uniswapPrice",0)}),(function(e){return e})),ve=Object(re.a)((function(e){return Object(te.get)(e,"oracle.coingeckoPrice",0)}),(function(e){return e})),ye=Object(re.a)((function(e){return Object(te.get)(e,"oracle.medianPrice",0)}),(function(e){return e})),Pe=r(124),we=r(128),Se=r(125),Ce=r(126),Ee=r(129),Ue=r(127),ge=["#00ff44","#aaff00","#fbff00","#ffe100","#ffc400","#ff9d00","#ff8400","#ff5900","#ff0000"],_e=function(e,t){return e<=t[0]?ge[0]:e>t[0]&&e<=t[1]?ge[1]:e>t[1]&&e<=t[2]?ge[2]:e>t[2]&&e<=t[3]?ge[3]:e>t[3]&&e<=t[4]?ge[4]:e>t[4]&&e<=t[5]?ge[5]:e>t[5]&&e<=t[6]?ge[6]:e>t[6]&&e<=t[7]?ge[7]:e>t[7]?ge[8]:void 0},Me=function(e){var t=Math.abs(1-Number.parseFloat(e));return _e(t,[.01,.02,.03,.04,.05,.06,.07,.08])},ke=function(e,t){var r=Math.abs(Number.parseFloat(e)-Number.parseFloat(t));return _e(r,[2,4,6,8,10,12,14,20])},Be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(Number.parseFloat(e).toFixed(t)).toLocaleString(void 0,{minimumFractionDigits:t,maximumFractionDigits:t})},De=function(e){var t=100*Number.parseFloat(e);return Be(t.toString())},Re=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e,t=this.props,r=t.dispatch,c=t.networkProvider,u=t.usmSupply,i=t.usmMints,a=t.usmBurns,s=t.usmMarketCap,o=t.usmMarketCapUSD,l=t.usmCollateral,d=t.usmCollateralUSD,j=t.usmDebtRatio,f=t.usmEthBuffer,b=t.usmEthBufferUSD,O=t.usmBuyPrice,p=t.usmBuyPriceUSD,h=t.usmSellPrice,m=t.usmSellPriceUSD,x=t.fumMarketCap,v=t.fumMarketCapUSD,y=t.fumSupply,P=t.fumMints,w=t.fumBurns,S=t.fumBuyPrice,C=t.fumBuyPriceUSD,E=t.fumSellPrice,U=t.fumSellPriceUSD,g=t.chainlinkPrice,_=t.compoundPrice,M=t.uniswapPrice,k=t.coingeckoPrice,B=t.medianPrice;return c||V(r),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(Pe.a,{children:[Object(n.jsxs)(we.a,{variant:"warning",children:[Object(n.jsxs)("b",{children:["Displaying stats for ",Object(n.jsx)("a",{href:"https://twitter.com/usmfum/status/1339323408618835969",target:"_blank",rel:"noreferrer",children:"Baby-USM."})]})," This does not represent the fully live protocol."]}),Object(n.jsxs)(Se.a,{className:"justify-content-md-center",children:[Object(n.jsx)(Ce.a,{sm:"12",md:"6",children:Object(n.jsx)(Ee.a,{children:Object(n.jsxs)(Ee.a.Body,{children:[Object(n.jsx)(Ee.a.Title,{children:"Protocol Health"}),Object(n.jsx)(Ue.a,{striped:!0,hover:!0,size:"sm",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Total Collateral"}),Object(n.jsxs)("td",{children:["\u039e ",Be(l)]}),Object(n.jsxs)("td",{children:["$ ",Be(d)]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Buffer"}),Object(n.jsxs)("td",{children:["\u039e ",Be(f)]}),Object(n.jsxs)("td",{children:["$ ",Be(b)]})]}),Object(n.jsxs)("tr",{style:{backgroundColor:(e=j,_e(e,[.5,.6,.65,.7,.725,.75,.775,.8]))},children:[Object(n.jsx)("td",{children:"Debt Ratio"}),Object(n.jsx)("td",{}),Object(n.jsxs)("td",{children:[De(j)," %"]})]})]})})]})})}),Object(n.jsx)(Ce.a,{sm:"12",md:"6",children:Object(n.jsx)(Ee.a,{children:Object(n.jsxs)(Ee.a.Body,{children:[Object(n.jsx)(Ee.a.Title,{children:"Oracle Performance"}),Object(n.jsx)(Ue.a,{striped:!0,hover:!0,size:"sm",children:Object(n.jsxs)("tbody",{children:[Object(n.jsx)("tr",{children:Object(n.jsx)("th",{colSpan:2,children:"Off Chain Reference (not used)"})}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Coingecko - ETH"}),Object(n.jsxs)("td",{children:["$ ",Be(k)]})]}),Object(n.jsx)("tr",{children:Object(n.jsx)("th",{colSpan:2,children:"USMFUM ETH Price"})}),Object(n.jsxs)("tr",{style:{backgroundColor:ke(k,B)},children:[Object(n.jsx)("td",{children:"Medianized Oracle"}),Object(n.jsxs)("td",{children:["$ ",Be(B)]})]}),Object(n.jsx)("tr",{children:Object(n.jsx)("th",{colSpan:2,children:"Median Sources"})}),Object(n.jsxs)("tr",{style:{backgroundColor:ke(k,g)},children:[Object(n.jsx)("td",{children:"Chainlink"}),Object(n.jsxs)("td",{children:["$ ",Be(g)]})]}),Object(n.jsxs)("tr",{style:{backgroundColor:ke(k,_)},children:[Object(n.jsx)("td",{children:"Compound"}),Object(n.jsxs)("td",{children:["$ ",Be(_)]})]}),Object(n.jsxs)("tr",{style:{backgroundColor:ke(k,M)},children:[Object(n.jsx)("td",{children:"Uniswap TWAP"}),Object(n.jsxs)("td",{children:["$ ",Be(M)]})]})]})})]})})})]}),Object(n.jsxs)(Se.a,{children:[Object(n.jsx)(Ce.a,{sm:"12",md:"6",children:Object(n.jsx)(Ee.a,{children:Object(n.jsxs)(Ee.a.Body,{children:[Object(n.jsx)(Ee.a.Title,{children:"USM Stats"}),Object(n.jsx)(Ue.a,{striped:!0,hover:!0,size:"sm",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Market Cap"}),Object(n.jsxs)("td",{children:["\u039e ",Be(s)]}),Object(n.jsxs)("td",{children:["$ ",Be(o)]})]}),Object(n.jsxs)("tr",{style:{backgroundColor:Me(p)},children:[Object(n.jsx)("td",{children:"Buy Price"}),Object(n.jsxs)("td",{children:["\u039e ",Be(O,5)]}),Object(n.jsxs)("td",{children:["$ ",Be(p)]})]}),Object(n.jsxs)("tr",{style:{backgroundColor:Me(m)},children:[Object(n.jsx)("td",{children:"Sell Price"}),Object(n.jsxs)("td",{children:["\u039e ",Be(h,5)]}),Object(n.jsxs)("td",{children:["$ ",Be(m)]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Total Supply"}),Object(n.jsx)("td",{children:"-"}),Object(n.jsx)("td",{children:Be(u)})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"No. of Mints"}),Object(n.jsx)("td",{children:"-"}),Object(n.jsx)("td",{children:i})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"No. of Burns"}),Object(n.jsx)("td",{children:"-"}),Object(n.jsx)("td",{children:a})]})]})})]})})}),Object(n.jsx)(Ce.a,{sm:"12",md:"6",children:Object(n.jsx)(Ee.a,{children:Object(n.jsxs)(Ee.a.Body,{children:[Object(n.jsx)(Ee.a.Title,{children:"FUM Stats"}),Object(n.jsx)(Ue.a,{striped:!0,hover:!0,size:"sm",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Market Cap"}),Object(n.jsxs)("td",{children:["\u039e ",Be(x)]}),Object(n.jsxs)("td",{children:["$ ",Be(v)]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Buy Price"}),Object(n.jsxs)("td",{children:["\u039e ",Be(S,5)]}),Object(n.jsxs)("td",{children:["$ ",Be(C)]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Sell Price (ETH)"}),Object(n.jsxs)("td",{children:["\u039e ",Be(E,5)]}),Object(n.jsxs)("td",{children:["$ ",Be(U)]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Total Supply"}),Object(n.jsx)("td",{children:"-"}),Object(n.jsx)("td",{children:Be(y)})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"No. of Mints"}),Object(n.jsx)("td",{children:"-"}),Object(n.jsx)("td",{children:P})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"No. of Burns"}),Object(n.jsx)("td",{children:"-"}),Object(n.jsx)("td",{children:w})]})]})})]})})})]})]})})}}]),r}(c.Component);function Te(e,t){return Number.parseFloat(e)*Number.parseFloat(t)}var Ae=Object(a.b)((function(e){var t=ve(e),r=ae(e),n=r*t,c=oe(e),u=c*t,i=ce(e),a=le(e),s=de(e),o=i*a,l=je(e),d=Oe(e),j=pe(e),f=l*d,b=Te(a,t),O=Te(s,t),p=Te(o,t),h=Te(d,t),m=Te(j,t),x=Te(f,t);return{networkProvider:ne(e),usmMarketCap:o,usmMarketCapUSD:p,usmSupply:i,usmMints:ue(e),usmBurns:ie(e),usmCollateral:r,usmCollateralUSD:n,usmDebtRatio:se(e),usmEthBuffer:c,usmEthBufferUSD:u,usmBuyPrice:a,usmBuyPriceUSD:b,usmSellPrice:s,usmSellPriceUSD:O,fumMarketCap:f,fumMarketCapUSD:x,fumSupply:l,fumMints:fe(e),fumBurns:be(e),fumBuyPrice:d,fumBuyPriceUSD:h,fumSellPrice:j,fumSellPriceUSD:m,chainlinkPrice:he(e),compoundPrice:me(e),uniswapPrice:xe(e),coingeckoPrice:t,medianPrice:ye(e)}}))(Re),Ne=r(32),Fe=r(74),Le=r(12);var Ie=new Ne.c({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NETWORK_LOADED":return Object(Le.a)(Object(Le.a)({},e),{},{provider:t.provider});case"USM_LOADED":return Object(Le.a)(Object(Le.a)({},e),{},{usm:t.usm});case"FUM_LOADED":return Object(Le.a)(Object(Le.a)({},e),{},{fum:t.fum});default:return e}},usm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USM_TOTAL_SUPPLY":return Object(Le.a)(Object(Le.a)({},e),{},{supply:t.supply});case"USM_MINTS":return Object(Le.a)(Object(Le.a)({},e),{},{mints:t.mints});case"USM_BURNS":return Object(Le.a)(Object(Le.a)({},e),{},{burns:t.burns});case"USM_COLLATERAL":return Object(Le.a)(Object(Le.a)({},e),{},{collateral:t.collateral});case"USM_DEBT_RATIO":return Object(Le.a)(Object(Le.a)({},e),{},{debtRatio:t.debtRatio});case"USM_ETH_BUFFER":return Object(Le.a)(Object(Le.a)({},e),{},{ethBuffer:t.ethBuffer});case"USM_PRICE":return Object(Le.a)(Object(Le.a)({},e),{},{buyPrice:t.buyPrice,sellPrice:t.sellPrice});default:return e}},fum:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FUM_TOTAL_SUPPLY":return Object(Le.a)(Object(Le.a)({},e),{},{supply:t.supply});case"FUM_MINTS":return Object(Le.a)(Object(Le.a)({},e),{},{mints:t.mints});case"FUM_BURNS":return Object(Le.a)(Object(Le.a)({},e),{},{burns:t.burns});case"FUM_PRICE":return Object(Le.a)(Object(Le.a)({},e),{},{buyPrice:t.buyPrice,sellPrice:t.sellPrice});default:return e}},oracle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORACLE_PRICE_CHAINLINK":return Object(Le.a)(Object(Le.a)({},e),{},{chainlinkPrice:t.price});case"ORACLE_PRICE_COMPOUND":return Object(Le.a)(Object(Le.a)({},e),{},{compoundPrice:t.price});case"ORACLE_PRICE_UNISWAP":return Object(Le.a)(Object(Le.a)({},e),{},{uniswapPrice:t.price});case"ORACLE_PRICE_COINGECKO":return Object(Le.a)(Object(Le.a)({},e),{},{coingeckoPrice:t.price});case"ORACLE_PRICE_MEDIAN":return Object(Le.a)(Object(Le.a)({},e),{},{medianPrice:t.price});default:return e}}}),$e=Object(Fe.createLogger)(),We=[],He=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ne.d;var Ke;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(n.jsx)(a.a,{store:Object(Ne.e)(Ie,Ke,He(Ne.a.apply(void 0,We.concat([$e])))),children:Object(n.jsx)(Ae,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,r){},88:function(e,t){}},[[120,1,2]]]);
//# sourceMappingURL=main.6605dd1e.chunk.js.map