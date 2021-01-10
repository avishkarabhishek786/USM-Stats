(this["webpackJsonpusmfum-stats"]=this["webpackJsonpusmfum-stats"]||[]).push([[0],{123:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(5),a=n(32),u=n.n(a),s=n(24),i=n(4),o=n(6),l=n(8),d=n(7),f=(n(89),n(1)),j=n.n(f),b=n(14),p=n(15),m={name:"usm",abi:["function mint(address to, uint minUsmOut) external payable returns (uint)","function burn(address from, address payable to, uint usmToBurn, uint minEthOut) external returns (uint)","function fund(address to, uint minFumOut) external payable returns (uint)","function defund(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)","function defundFromFUM(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)","function ethPool() public view returns (uint pool)","function minFumBuyPrice() public view returns (uint mfbp)","function buySellAdjustment() public view returns (uint adjustment)","function ethBuffer(uint8 upOrDown) external view returns (int buffer)","function ethToUsm(uint ethAmount, uint8 upOrDown) external view returns (uint usmOut)","function usmToEth(uint usmAmount, uint8 upOrDown) external view returns (uint ethOut)","function debtRatio() external view returns (uint ratio)","function usmPrice(uint8 side) external view returns (uint price)","function fumPrice(uint8 side) external view returns (uint price)","function latestChainlinkPrice() public view returns (uint price)","function latestCompoundPrice() public view returns (uint price)","function latestUniswapTWAPPrice() public view returns (uint price)","function latestPrice() public virtual view returns (uint price)","function receive() external payable","event MinFumBuyPriceChanged(uint previous, uint latest)","event BuySellAdjustmentChanged(uint previous, uint latest)","function totalSupply() external view returns (uint256)","function balanceOf(address account) external view returns (uint256)","function transfer(address recipient, uint256 amount) external returns (bool)","function allowance(address owner, address spender) external view returns (uint256)","function approve(address spender, uint256 amount) external returns (bool)","function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)","event Transfer(address indexed from, address indexed to, uint256 value)"],address:{1:"0x03eb7Ce2907e202bB70BAE3D7B0C588573d3cECC",42:"0x21453979384f21D09534f8801467BDd5d90eCD6C"}},O={name:"fum",abi:["function totalSupply() external view returns (uint256)","event Transfer(address indexed from, address indexed to, uint256 value)"],address:{1:"0xf04a5D82ff8a801f7d45e9C14CDcf73defF1a394",42:"0x96F8F5323Aa6CB0e6F311bdE6DEEFb1c81Cb1898"}},h="chainlink",x="compound",v="uniswap",y="coingecko",w="median";function P(e,t){switch(e){case m.name:return{type:"SET_USM_INPUT_AMOUNT",amount:t};case O.name:return{type:"SET_FUM_INPUT_AMOUNT",amount:t}}}function k(e,t,n,r){return{type:"METAMASK_LOADED",metamask:e,signer:t,usm:n,fum:r}}function g(e){return{type:"METAMASK_ERROR",error:e}}function S(e){return{type:"NETWORK_LOADED",provider:e}}function E(e){return{type:"FUM_LOADED",fum:e}}function M(e,t){switch(e){case h:return{type:"ORACLE_PRICE_CHAINLINK",price:t};case x:return{type:"ORACLE_PRICE_COMPOUND",price:t};case v:return{type:"ORACLE_PRICE_UNISWAP",price:t};case y:return{type:"ORACLE_PRICE_COINGECKO",price:t};case w:return{type:"ORACLE_PRICE_MEDIAN",price:t}}}function C(e){return{type:"USM_COLLATERAL",collateral:e}}function U(e){return{type:"USM_ETH_BUFFER",ethBuffer:e}}function _(e,t){return{type:"USM_PRICE",buyPrice:e,sellPrice:t}}function A(e,t){return{type:"FUM_PRICE",buyPrice:e,sellPrice:t}}function N(e,t){switch(e){case m.name:return{type:"USM_TOTAL_SUPPLY",supply:t};case O.name:return{type:"FUM_TOTAL_SUPPLY",supply:t}}}function T(e,t){switch(e){case m.name:return{type:"USM_MINTS",mints:t};case O.name:return{type:"FUM_MINTS",mints:t}}}function R(e,t){switch(e){case m.name:return{type:"USM_BURNS",burns:t};case O.name:return{type:"FUM_BURNS",burns:t}}}var B=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(t,n),F(t,n),I(t,n),L(t,n),$(t,n);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ethPool();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(C(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.debtRatio();case 2:r=e.sent,c=p.a.utils.formatEther(r),t({type:"USM_DEBT_RATIO",debtRatio:c});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ethBuffer(0);case 2:r=e.sent,c=p.a.utils.formatEther(r),t(U(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,a,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.usmPrice(0);case 2:return r=e.sent,c=p.a.utils.formatEther(r),e.next=6,n.usmPrice(1);case 6:a=e.sent,u=p.a.utils.formatEther(a),t(_(c,u));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,a,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fumPrice(0);case 2:return r=e.sent,c=p.a.utils.formatEther(r),e.next=6,n.fumPrice(1);case 6:a=e.sent,u=p.a.utils.formatEther(a),t(A(c,u));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H(t,n,r),K(t,n,r),W(t,n,r);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),H=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.totalSupply();case 2:c=e.sent,a=p.a.utils.formatEther(c),t(N(n.name,a));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),K=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.filters.Transfer(p.a.constants.AddressZero,null),e.next=3,r.queryFilter(c,0);case 3:a=e.sent,t(T(n.name,a.length));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.filters.Transfer(null,p.a.constants.AddressZero),e.next=3,r.queryFilter(c,0);case 3:a=e.sent,t(R(n.name,a.length));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),J=n(74),Y=n.n(J),q=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G(t),X(t,n),Z(t,n),V(t,n),Q(t,n);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Y.a.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then((function(e){t(M(y,e.data.ethereum.usd))})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestChainlinkPrice();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(M(h,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestCompoundPrice();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(M(x,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestUniswapTWAPPrice();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(M(v,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestPrice();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(M(w,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ee=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new p.a.providers.JsonRpcProvider("https://mainnet.infura.io/v3/1be1f8b7b85a47e4949bc1057660a81d"),t(S(n)),te(t,n),ne(t,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,a,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getNetwork();case 2:r=e.sent,c=m.abi,a=m.address[r.chainId],u=new p.a.Contract(a,c,n),t({type:"USM_LOADED",usm:u}),z(t,m,u),B(t,u),q(t,u);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ne=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,a,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getNetwork();case 2:r=e.sent,c=O.abi,a=O.address[r.chainId],u=new p.a.Contract(a,c,n),t(E(u)),z(t,O,u);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),re=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r,c,a,u,s,i,o,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.enable();case 3:return e.next=5,new p.a.providers.Web3Provider(window.ethereum);case 5:return n=e.sent,e.next=8,n.getSigner();case 8:return r=e.sent,e.next=11,n.getNetwork();case 11:if(1==(c=e.sent).chainId){e.next=14;break}throw new Error("Must be on mainnet. Please alter Metamask network and refresh the page.");case 14:a=m.abi,u=m.address[c.chainId],s=new p.a.Contract(u,a,r),i=O.abi,o=O.address[c.chainId],l=new p.a.Contract(o,i,r),t(k(n,r,s,l)),e.next=27;break;case 23:return e.prev=23,e.t0=e.catch(0),t(g(e.t0)),e.abrupt("return",!1);case 27:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r,c){var a,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.a.utils.parseEther(c),e.next=3,r.getAddress();case 3:u=e.sent,n.mint(u,0,{value:a}).then((function(){return console.log("minting USM")})).catch((function(e){return t(g(e))}));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),ae=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r,c){var a,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.a.utils.parseEther(c),e.next=3,r.getAddress();case 3:u=e.sent,n.burn(u,u,a,0).then((function(){return console.log("burning USM")})).catch((function(e){return t(g(e))}));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),ue=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r,c){var a,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n,r,c),a=p.a.utils.parseEther(c),e.next=4,r.getAddress();case 4:u=e.sent,n.fund(u,0,{value:a}).then((function(){return console.log("minting FUM")})).catch((function(e){return t(g(e))}));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),se=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r,c){var a,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.a.utils.parseEther(c),e.next=3,r.getAddress();case 3:u=e.sent,n.defund(u,u,a,0).then((function(){return console.log("burning FUM")})).catch((function(e){return t(g(e))}));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),ie=n(16),oe=n(17),le=Object(oe.a)((function(e){return Object(ie.get)(e,"app.provider",null)}),(function(e){return e})),de=(Object(oe.a)((function(e){return Object(ie.get)(e,"app.usm",null)}),(function(e){return e})),Object(oe.a)((function(e){return Object(ie.get)(e,"app.metamask",null)}),(function(e){return e}))),fe=Object(oe.a)((function(e){return Object(ie.get)(e,"app.metamaskSigner",null)}),(function(e){return e})),je=Object(oe.a)((function(e){return Object(ie.get)(e,"app.metamaskError",null)}),(function(e){return e})),be=Object(oe.a)((function(e){return Object(ie.get)(e,"app.metamaskUSM",null)}),(function(e){return e})),pe=(Object(oe.a)((function(e){return Object(ie.get)(e,"app.metamaskFUM",null)}),(function(e){return e})),Object(oe.a)((function(e){return Object(ie.get)(e,"app.usmInputAmount",null)}),(function(e){return e}))),me=Object(oe.a)((function(e){return Object(ie.get)(e,"app.fumInputAmount",null)}),(function(e){return e})),Oe=Object(oe.a)((function(e){return Object(ie.get)(e,"usm.supply",0)}),(function(e){return e})),he=Object(oe.a)((function(e){return Object(ie.get)(e,"usm.mints",0)}),(function(e){return e})),xe=Object(oe.a)((function(e){return Object(ie.get)(e,"usm.burns",0)}),(function(e){return e})),ve=Object(oe.a)((function(e){return Object(ie.get)(e,"usm.collateral",0)}),(function(e){return e})),ye=Object(oe.a)((function(e){return Object(ie.get)(e,"usm.debtRatio",0)}),(function(e){return e})),we=Object(oe.a)((function(e){return Object(ie.get)(e,"usm.ethBuffer",0)}),(function(e){return e})),Pe=Object(oe.a)((function(e){return Object(ie.get)(e,"usm.buyPrice",0)}),(function(e){return e})),ke=Object(oe.a)((function(e){return Object(ie.get)(e,"usm.sellPrice",0)}),(function(e){return e})),ge=Object(oe.a)((function(e){return Object(ie.get)(e,"fum.supply",0)}),(function(e){return e})),Se=Object(oe.a)((function(e){return Object(ie.get)(e,"fum.mints",0)}),(function(e){return e})),Ee=Object(oe.a)((function(e){return Object(ie.get)(e,"fum.burns",0)}),(function(e){return e})),Me=Object(oe.a)((function(e){return Object(ie.get)(e,"fum.buyPrice",0)}),(function(e){return e})),Ce=Object(oe.a)((function(e){return Object(ie.get)(e,"fum.sellPrice",0)}),(function(e){return e})),Ue=Object(oe.a)((function(e){return Object(ie.get)(e,"oracle.chainlinkPrice",0)}),(function(e){return e})),_e=Object(oe.a)((function(e){return Object(ie.get)(e,"oracle.compoundPrice",0)}),(function(e){return e})),Ae=Object(oe.a)((function(e){return Object(ie.get)(e,"oracle.uniswapPrice",0)}),(function(e){return e})),Ne=Object(oe.a)((function(e){return Object(ie.get)(e,"oracle.coingeckoPrice",0)}),(function(e){return e})),Te=Object(oe.a)((function(e){return Object(ie.get)(e,"oracle.medianPrice",0)}),(function(e){return e})),Re=n(128),Be=n(131),De=n(129),Fe=n(130),Ie=n(132),Le=n(126),$e=["#00ff44","#aaff00","#fbff00","#ffe100","#ffc400","#ff9d00","#ff8400","#ff5900","#ff0000"],ze=function(e,t){return e<=t[0]?$e[0]:e>t[0]&&e<=t[1]?$e[1]:e>t[1]&&e<=t[2]?$e[2]:e>t[2]&&e<=t[3]?$e[3]:e>t[3]&&e<=t[4]?$e[4]:e>t[4]&&e<=t[5]?$e[5]:e>t[5]&&e<=t[6]?$e[6]:e>t[6]&&e<=t[7]?$e[7]:e>t[7]?$e[8]:void 0},He=function(e){var t=Math.abs(1-Number.parseFloat(e));return ze(t,[.01,.02,.03,.04,.05,.06,.07,.08])},Ke=function(e,t){var n=Math.abs(Number.parseFloat(e)-Number.parseFloat(t));return ze(n,[2,4,6,8,10,12,14,20])},We=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(Number.parseFloat(e).toFixed(t)).toLocaleString(void 0,{minimumFractionDigits:t,maximumFractionDigits:t})},Je=function(e){var t=100*Number.parseFloat(e);return We(t.toString())},Ye=function(e,t){return Number.parseFloat(e)*Number.parseFloat(t)},qe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this.props,n=t.usmCollateral,c=t.usmCollateralUSD,a=t.usmDebtRatio,u=t.usmEthBuffer,s=t.usmEthBufferUSD;return Object(r.jsxs)(Ie.a,{children:[Object(r.jsx)(Ie.a.Header,{as:"h5",children:"Protocol Health"}),Object(r.jsx)(Ie.a.Body,{children:Object(r.jsx)(Le.a,{striped:!0,hover:!0,size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Collateral"}),Object(r.jsxs)("td",{children:["\u039e ",We(n)]}),Object(r.jsxs)("td",{children:["$ ",We(c)]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Buffer"}),Object(r.jsxs)("td",{children:["\u039e ",We(u)]}),Object(r.jsxs)("td",{children:["$ ",We(s)]})]}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:(e=a,ze(e,[.5,.6,.65,.7,.725,.75,.775,.8]))},children:[Object(r.jsx)("td",{children:"Debt Ratio"}),Object(r.jsx)("td",{}),Object(r.jsxs)("td",{children:[Je(a)," %"]})]})]})})})]})}}]),n}(c.Component);var Ge=Object(s.b)((function(e){var t=Ne(e),n=ve(e),r=n*t,c=we(e);return{coingeckoPrice:t,usmCollateral:n,usmCollateralUSD:r,usmEthBuffer:c,usmEthBufferUSD:c*t,usmDebtRatio:ye(e)}}))(qe),Xe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.chainlinkPrice,n=e.compoundPrice,c=e.uniswapPrice,a=e.coingeckoPrice,u=e.medianPrice;return Object(r.jsxs)(Ie.a,{children:[Object(r.jsx)(Ie.a.Header,{as:"h5",children:"Oracle Performance"}),Object(r.jsx)(Ie.a.Body,{children:Object(r.jsx)(Le.a,{striped:!0,hover:!0,size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsx)("tr",{children:Object(r.jsx)("th",{colSpan:2,children:"Off Chain Reference (not used)"})}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Coingecko - ETH"}),Object(r.jsxs)("td",{children:["$ ",We(a)]})]}),Object(r.jsx)("tr",{children:Object(r.jsx)("th",{colSpan:2,children:"USMFUM ETH Price"})}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:Ke(a,u)},children:[Object(r.jsx)("td",{children:"Medianized Oracle"}),Object(r.jsxs)("td",{children:["$ ",We(u)]})]}),Object(r.jsx)("tr",{children:Object(r.jsx)("th",{colSpan:2,children:"Median Sources"})}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:Ke(a,t)},children:[Object(r.jsx)("td",{children:"Chainlink"}),Object(r.jsxs)("td",{children:["$ ",We(t)]})]}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:Ke(a,n)},children:[Object(r.jsx)("td",{children:"Compound"}),Object(r.jsxs)("td",{children:["$ ",We(n)]})]}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:Ke(a,c)},children:[Object(r.jsx)("td",{children:"Uniswap TWAP"}),Object(r.jsxs)("td",{children:["$ ",We(c)]})]})]})})})]})}}]),n}(c.Component);var Ze=Object(s.b)((function(e){return{coingeckoPrice:Ne(e),chainlinkPrice:Ue(e),compoundPrice:_e(e),uniswapPrice:Ae(e),medianPrice:Te(e)}}))(Xe),Ve=n(34),Qe=n(127);function et(e,t,n,c,a){return e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Qe.a,{onClick:n,variant:"warning",size:"sm",className:"float-right ml-1",children:"Burn (USM)"}),Object(r.jsx)(Qe.a,{onClick:t,variant:"success",size:"sm",className:"float-right ml-1",children:"Mint (ETH)"}),Object(r.jsx)("input",Object(Ve.a)({className:"form-control",style:{width:100},onChange:a,placeholder:"Amount",type:"number",size:"sm"},"className","float-right ml-1"))]}):Object(r.jsx)(Qe.a,{onClick:c,variant:"success",size:"sm",className:"float-right ml-1",children:"Connect"})}var tt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.usmSupply,c=e.usmMints,a=e.usmBurns,u=e.usmMarketCap,s=e.usmMarketCapUSD,i=e.usmBuyPrice,o=e.usmBuyPriceUSD,l=e.usmSellPrice,d=e.usmSellPriceUSD,f=e.metamaskSigner,j=e.metamaskConnected,b=e.metamaskUSM,p=e.inputAmount;return Object(r.jsxs)(Ie.a,{children:[Object(r.jsxs)(Ie.a.Header,{as:"h5",children:[Object(r.jsx)("span",{children:"USM"}),et(j,(function(e){ce(t,b,f,p)}),(function(e){ae(t,b,f,p)}),(function(e){re(t)}),(function(e){t(P(m.name,e.target.value))}))]}),Object(r.jsx)(Ie.a.Body,{children:Object(r.jsx)(Le.a,{striped:!0,hover:!0,size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Market Cap"}),Object(r.jsxs)("td",{children:["\u039e ",We(u)]}),Object(r.jsxs)("td",{children:["$ ",We(s)]})]}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:He(o)},children:[Object(r.jsx)("td",{children:"Mint Price"}),Object(r.jsxs)("td",{children:["\u039e ",We(i,5)]}),Object(r.jsxs)("td",{children:["$ ",We(o)]})]}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:He(d)},children:[Object(r.jsx)("td",{children:"Burn Price"}),Object(r.jsxs)("td",{children:["\u039e ",We(l,5)]}),Object(r.jsxs)("td",{children:["$ ",We(d)]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Supply"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:We(n)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Mints"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:c})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Burns"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:a})]})]})})})]})}}]),n}(c.Component);var nt=Object(s.b)((function(e){var t=Ne(e),n=Oe(e),r=Pe(e),c=ke(e),a=n*r,u=Ye(r,t),s=Ye(c,t),i=Ye(a,t),o=null!=de(e);return{inputAmount:pe(e),usmMarketCap:a,usmMarketCapUSD:i,usmSupply:n,usmMints:he(e),usmBurns:xe(e),usmBuyPrice:r,usmBuyPriceUSD:u,usmSellPrice:c,usmSellPriceUSD:s,metamaskConnected:o,metamaskSigner:fe(e),metamaskUSM:be(e)}}))(tt);function rt(e,t,n,c,a){return e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Qe.a,{onClick:n,variant:"warning",size:"sm",className:"float-right ml-1",children:"Burn (FUM)"}),Object(r.jsx)(Qe.a,{onClick:t,variant:"success",size:"sm",className:"float-right ml-1",children:"Mint (ETH)"}),Object(r.jsx)("input",Object(Ve.a)({className:"form-control",style:{width:100},onChange:a,placeholder:"Amount",type:"number",size:"sm"},"className","float-right ml-1"))]}):Object(r.jsx)(Qe.a,{onClick:c,variant:"success",size:"sm",className:"float-right ml-1",children:"Connect"})}var ct=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.fumMarketCap,c=e.fumMarketCapUSD,a=e.fumSupply,u=e.fumMints,s=e.fumBurns,i=e.fumBuyPrice,o=e.fumBuyPriceUSD,l=e.fumSellPrice,d=e.fumSellPriceUSD,f=e.metamaskSigner,j=e.metamaskConnected,b=e.metamaskUSM,p=e.inputAmount;return Object(r.jsxs)(Ie.a,{children:[Object(r.jsxs)(Ie.a.Header,{as:"h5",children:["FUM",rt(j,(function(e){ue(t,b,f,p)}),(function(e){se(t,b,f,p)}),(function(e){re(t)}),(function(e){t(P(O.name,e.target.value))}))]}),Object(r.jsx)(Ie.a.Body,{children:Object(r.jsx)(Le.a,{striped:!0,hover:!0,size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Market Cap"}),Object(r.jsxs)("td",{children:["\u039e ",We(n)]}),Object(r.jsxs)("td",{children:["$ ",We(c)]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Mint Price"}),Object(r.jsxs)("td",{children:["\u039e ",We(i,5)]}),Object(r.jsxs)("td",{children:["$ ",We(o)]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Burn Price"}),Object(r.jsxs)("td",{children:["\u039e ",We(l,5)]}),Object(r.jsxs)("td",{children:["$ ",We(d)]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Supply"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:We(a)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Mints"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:u})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Burns"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:s})]})]})})})]})}}]),n}(c.Component);var at=Object(s.b)((function(e){var t=Ne(e),n=ge(e),r=Me(e),c=Ce(e),a=n*r,u=Ye(r,t),s=Ye(c,t),i=Ye(a,t),o=null!=de(e);return{inputAmount:me(e),fumMarketCap:a,fumMarketCapUSD:i,fumSupply:n,fumMints:Se(e),fumBurns:Ee(e),fumBuyPrice:r,fumBuyPriceUSD:u,fumSellPrice:c,fumSellPriceUSD:s,coingeckoPrice:t,metamaskConnected:o,metamaskSigner:fe(e),metamaskUSM:be(e)}}))(ct),ut=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.networkProvider,c=e.metamaskError;return n||ee(t),c&&(alert(c.toString()),t({type:"CLEAR_METAMASK_ERROR"})),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(Re.a,{children:[Object(r.jsxs)(Be.a,{variant:"warning",children:[Object(r.jsxs)("b",{children:["Displaying live data for ",Object(r.jsx)("a",{href:"https://twitter.com/usmfum/status/1339323408618835969",target:"_blank",rel:"noreferrer",children:"Baby-USM."})]}),'This is a temporary "live" protocol used for research purposes. On the 15th of January 2021, the Baby-USM protocol will become withdraw-only and read-only. The data from this trial run will be analysed in the run up to the full release of USM.']}),Object(r.jsxs)(De.a,{children:[Object(r.jsx)(Fe.a,{sm:"12",md:"6",children:Object(r.jsx)(Ge,{})}),Object(r.jsx)(Fe.a,{sm:"12",md:"6",children:Object(r.jsx)(Ze,{})})]}),Object(r.jsxs)(De.a,{children:[Object(r.jsx)(Fe.a,{sm:"12",md:"6",children:Object(r.jsx)(nt,{})}),Object(r.jsx)(Fe.a,{sm:"12",md:"6",children:Object(r.jsx)(at,{})})]})]})})}}]),n}(c.Component);var st=Object(s.b)((function(e){return{networkProvider:le(e),metamaskError:je(e)}}))(ut),it=n(33),ot=n(77),lt=n(11);var dt=new it.c({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NETWORK_LOADED":return Object(lt.a)(Object(lt.a)({},e),{},{provider:t.provider});case"USM_LOADED":return Object(lt.a)(Object(lt.a)({},e),{},{usm:t.usm});case"FUM_LOADED":return Object(lt.a)(Object(lt.a)({},e),{},{fum:t.fum});case"METAMASK_LOADED":return Object(lt.a)(Object(lt.a)({},e),{},{metamask:t.metamask,metamaskSigner:t.signer,metamaskUSM:t.usm,metamaskFUM:t.fum});case"METAMASK_ERROR":return Object(lt.a)(Object(lt.a)({},e),{},{metamaskError:t.error});case"CLEAR_METAMASK_ERROR":return Object(lt.a)(Object(lt.a)({},e),{},{metamaskError:null});case"SET_USM_INPUT_AMOUNT":return Object(lt.a)(Object(lt.a)({},e),{},{usmInputAmount:t.amount});case"SET_FUM_INPUT_AMOUNT":return Object(lt.a)(Object(lt.a)({},e),{},{fumInputAmount:t.amount});default:return e}},usm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USM_TOTAL_SUPPLY":return Object(lt.a)(Object(lt.a)({},e),{},{supply:t.supply});case"USM_MINTS":return Object(lt.a)(Object(lt.a)({},e),{},{mints:t.mints});case"USM_BURNS":return Object(lt.a)(Object(lt.a)({},e),{},{burns:t.burns});case"USM_COLLATERAL":return Object(lt.a)(Object(lt.a)({},e),{},{collateral:t.collateral});case"USM_DEBT_RATIO":return Object(lt.a)(Object(lt.a)({},e),{},{debtRatio:t.debtRatio});case"USM_ETH_BUFFER":return Object(lt.a)(Object(lt.a)({},e),{},{ethBuffer:t.ethBuffer});case"USM_PRICE":return Object(lt.a)(Object(lt.a)({},e),{},{buyPrice:t.buyPrice,sellPrice:t.sellPrice});default:return e}},fum:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FUM_TOTAL_SUPPLY":return Object(lt.a)(Object(lt.a)({},e),{},{supply:t.supply});case"FUM_MINTS":return Object(lt.a)(Object(lt.a)({},e),{},{mints:t.mints});case"FUM_BURNS":return Object(lt.a)(Object(lt.a)({},e),{},{burns:t.burns});case"FUM_PRICE":return Object(lt.a)(Object(lt.a)({},e),{},{buyPrice:t.buyPrice,sellPrice:t.sellPrice});default:return e}},oracle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORACLE_PRICE_CHAINLINK":return Object(lt.a)(Object(lt.a)({},e),{},{chainlinkPrice:t.price});case"ORACLE_PRICE_COMPOUND":return Object(lt.a)(Object(lt.a)({},e),{},{compoundPrice:t.price});case"ORACLE_PRICE_UNISWAP":return Object(lt.a)(Object(lt.a)({},e),{},{uniswapPrice:t.price});case"ORACLE_PRICE_COINGECKO":return Object(lt.a)(Object(lt.a)({},e),{},{coingeckoPrice:t.price});case"ORACLE_PRICE_MEDIAN":return Object(lt.a)(Object(lt.a)({},e),{},{medianPrice:t.price});default:return e}}}),ft=Object(ot.createLogger)(),jt=[],bt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||it.d;var pt;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(r.jsx)(s.a,{store:Object(it.e)(dt,pt,bt(it.a.apply(void 0,jt.concat([ft])))),children:Object(r.jsx)(st,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,n){},91:function(e,t){}},[[123,1,2]]]);
//# sourceMappingURL=main.95a741f7.chunk.js.map