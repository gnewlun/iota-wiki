"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29514,12004],{51310:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(67294),o=n(18790),r=n(90492),c=n(76170),i=n(12004),l=n(59034),d=n(86010),s=n(11614),u="backToTopButton_RiI4",m="backToTopButtonShow_ssHd",p=n(37559);function b(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function h(){var e=(0,a.useState)(!1),t=e[0],n=e[1],o=(0,a.useRef)(!1),r=b(),c=r.smoothScrollTop,i=r.cancelScrollToTop;return(0,p.RF)((function(e,t){var a=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(o.current)o.current=!1;else{var c=a<r;if(c||i(),a<300)n(!1);else if(c){var l=document.documentElement.scrollHeight;a+window.innerHeight<l&&n(!0)}else n(!1)}})),(0,p.SL)((function(e){e.location.hash&&(o.current=!0,n(!1))})),a.createElement("button",{"aria-label":(0,s.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,d.Z)("clean-btn",p.kM.common.backToTopButton,u,t&&m),type:"button",onClick:function(){return c()}})}var f=n(76775),E={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"},g=n(55912);function v(e){var t=e.currentDocRoute,n=e.versionMetadata,o=e.children,i=e.sidebarName,u=(0,p.Vq)(),m=n.pluginId,b=n.version,f=(0,a.useState)(!1),v=f[0],T=f[1],S=(0,a.useState)(!1),k=S[0],C=S[1],N=(0,a.useCallback)((function(){k&&C(!1),T((function(e){return!e}))}),[k]);return a.createElement(a.Fragment,null,a.createElement(g.Z,{version:b,tag:(0,p.os)(m,b)}),a.createElement(r.Z,null,a.createElement("div",{className:E.docPage},a.createElement(h,null),u&&a.createElement("aside",{className:(0,d.Z)(p.kM.docs.docSidebarContainer,E.docSidebarContainer,v&&E.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(E.docSidebarContainer)&&v&&C(!0)}},a.createElement(c.Z,{key:i,sidebar:u,path:t.path,onCollapse:N,isHidden:k}),k&&a.createElement("div",{className:E.collapsedDocSidebar,title:(0,s.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(l.Z,{className:E.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,d.Z)(E.docMainContainer,(v||!u)&&E.docMainContainerEnhanced)},a.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",E.docItemWrapper,v&&E.docItemWrapperEnhanced)},o)))))}function T(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,c=t.find((function(e){return(0,f.LX)(r.pathname,e)}));if(!c)return a.createElement(i.default,null);var l=c.sidebar,s=l?n.docsSidebars[l]:null;return a.createElement(p.FG,{className:(0,d.Z)(p.kM.wrapper.docsPages,p.kM.page.docsDocPage,n.className)},a.createElement(p.qu,{version:n},a.createElement(p.bT,{sidebar:null!=s?s:null},a.createElement(v,{currentDocRoute:c,versionMetadata:n,sidebarName:l},(0,o.H)(t,{versionMetadata:n})))))}},12004:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(67294),o=n(90492),r=n(11614),c=n(37559);function i(){return a.createElement(a.Fragment,null,a.createElement(c.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);