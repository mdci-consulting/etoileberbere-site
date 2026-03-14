import{$ as oi,$a as gi,A as Qn,Aa as Je,Bb as pn,Ea as P,F as ei,Fa as ye,Ga as Qe,Ha as pi,Ia as Fe,Ib as xt,Ja as B,Jb as vi,Kb as Ei,La as Ot,Lb as Si,M as ti,Ma as ln,Mb as wi,Nb as Ci,O as ni,Ob as T,P as L,Pa as Z,Pb as fn,Qa as H,Qb as hn,R as m,Ra as O,Rb as Pe,S as j,Sa as k,Sb as it,Ta as De,U as _,W as b,Wa as fi,X as h,Xa as hi,Y as Re,Ya as un,Z as ii,Za as te,_ as ri,_a as I,a as v,aa as ae,ab as Ft,b as rn,bb as mi,c as Zn,cb as Le,da as si,ea as A,eb as Me,f as qn,fb as Ne,ga as Oe,gb as pe,hb as Lt,i as be,ib as Mt,ja as ai,jb as bi,ka as Rt,l as Xn,la as ce,lb as yi,m as qe,ma as on,mb as q,na as le,nb as ve,oa as ue,ob as Ee,pa as de,pb as et,q as Xe,qa as ci,ra as sn,rb as tt,sa as li,sb as nt,ta as K,tb as dn,ub as Di,va as an,wa as ui,wb as Nt,xa as di,xb as Pt,y as Jn,ya as cn,zb as z}from"./chunk-V6HYLTUU.js";var E=new _("");var Ai=null;function ee(){return Ai}function gn(t){Ai??=t}var rt=class{},ot=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>h(Ii),providedIn:"platform"})}return t})(),to=new _(""),Ii=(()=>{class t extends ot{_location;_history;_doc=h(E);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ee().getBaseHref(this._doc)}onPopState(e){let n=ee().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=ee().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function kt(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function _i(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function X(t){return t&&t[0]!=="?"?`?${t}`:t}var xe=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>h(Ri),providedIn:"root"})}return t})(),$t=new _(""),Ri=(()=>{class t extends xe{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return kt(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+X(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let s=this.prepareExternalUrl(r+X(o));this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,o){let s=this.prepareExternalUrl(r+X(o));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(b(ot),b($t,8))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Oi=(()=>{class t{_subject=new be;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=ro(_i(Ti(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+X(n))}normalize(e){return t.stripTrailingSlash(io(this._basePath,Ti(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+X(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+X(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=X;static joinWithSlash=kt;static stripTrailingSlash=_i;static \u0275fac=function(n){return new(n||t)(b(xe))};static \u0275prov=m({token:t,factory:()=>no(),providedIn:"root"})}return t})();function no(){return new Oi(b(xe))}function io(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Ti(t){return t.replace(/\/index.html$/,"")}function ro(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var oo=(()=>{class t extends xe{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=kt(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let s=this.prepareExternalUrl(r+X(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,o){let s=this.prepareExternalUrl(r+X(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(b(ot),b($t,8))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var mn=/\s+/,Fi=[],bn=(()=>{class t{_ngEl;_renderer;initialClasses=Fi;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(mn):Fi}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(mn):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(mn).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(n){return new(n||t)(B(ue),B(Fe))};static \u0275dir=O({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Bt=class{$implicit;ngForOf;index;count;constructor(i,e,n,r){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Ni=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,o,s)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new Bt(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(o===null?void 0:o);else if(o!==null){let a=n.get(o);n.move(a,s),Li(a,r)}});for(let r=0,o=n.length;r<o;r++){let a=n.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=n.get(r.currentIndex);Li(o,r)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(B(Ot),B(Qe),B(vi))};static \u0275dir=O({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function Li(t,i){t.context.$implicit=i.item}var yn=(()=>{class t{_viewContainer;_context=new Ut;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Mi(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Mi(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(B(Ot),B(Qe))};static \u0275dir=O({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Ut=class{$implicit=null;ngIf=null};function Mi(t,i){if(t&&!t.createEmbeddedView)throw new L(2020,!1)}var Dn=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:ye.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${n}${o}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(B(ue),B(Ei),B(Fe))};static \u0275dir=O({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),vn=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(B(Ot))};static \u0275dir=O({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ae]})}return t})();var ne=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({})}return t})();function st(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var jt="browser",Pi="server";function at(t){return t===jt}function ke(t){return t===Pi}var Se=class{};var el=(()=>{class t{static \u0275prov=m({token:t,providedIn:"root",factory:()=>new En(h(E),window)})}return t})(),En=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i){this.window.scrollTo(i[0],i[1])}scrollToAnchor(i){let e=lo(this.document,i);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(i){this.window.history.scrollRestoration=i}scrollToElement(i){let e=i.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(n-o[0],r-o[1])}};function lo(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(i)||o.querySelector(`[name="${i}"]`);if(s)return s}r=n.nextNode()}}return null}var Vt=new _(""),_n=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new L(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(b(Vt),b(ce))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),ct=class{_doc;constructor(i){this._doc=i}manager},Ht="ng-app-id";function ki(t){for(let i of t)i.remove()}function $i(t,i){let e=i.createElement("style");return e.textContent=t,e}function po(t,i,e,n){let r=t.head?.querySelectorAll(`style[${Ht}="${i}"],link[${Ht}="${i}"]`);if(r)for(let o of r)o.removeAttribute(Ht),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function wn(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Tn=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,this.isServer=ke(o),po(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,$i);n?.forEach(r=>this.addUsage(r,this.external,wn))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(ki(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ki(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,$i(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,wn(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(Ht,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(b(E),b(sn),b(an,8),b(K))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Sn={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},An=/%COMP%/g;var Ui="%COMP%",fo=`_nghost-${Ui}`,ho=`_ngcontent-${Ui}`,go=!0,mo=new _("",{providedIn:"root",factory:()=>go});function bo(t){return ho.replace(An,t)}function yo(t){return fo.replace(An,t)}function ji(t,i){return i.map(e=>e.replace(An,t))}var In=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,r,o,s,a,c,l=null,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=ke(a),this.defaultRenderer=new lt(e,s,c,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===Je.ShadowDom&&(n=rn(v({},n),{encapsulation:Je.Emulated}));let r=this.getOrCreateRenderer(e,n);return r instanceof zt?r.applyToHost(e):r instanceof ut&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,p=this.platformIsServer,f=this.tracingService;switch(n.encapsulation){case Je.Emulated:o=new zt(c,l,n,this.appId,u,s,a,p,f);break;case Je.ShadowDom:return new Cn(c,l,e,n,s,a,this.nonce,p,f);default:o=new ut(c,l,n,u,s,a,p,f);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(b(_n),b(Tn),b(sn),b(mo),b(E),b(K),b(ce),b(an),b(di,8))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),lt=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r,o){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Sn[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Bi(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(Bi(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new L(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=Sn[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=Sn[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(ye.DashCase|ye.Important)?i.style.setProperty(e,n,r&ye.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&ye.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=ee().getGlobalEventTarget(this.doc,i),!i))throw new L(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;(this.platformIsServer?this.ngZone.runGuarded(()=>i(e)):i(e))===!1&&e.preventDefault()}}};function Bi(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Cn=class extends lt{sharedStylesHost;hostEl;shadowRoot;constructor(i,e,n,r,o,s,a,c,l){super(i,o,s,c,l),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=ji(r.id,u);for(let f of u){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=f,this.shadowRoot.appendChild(d)}let p=r.getExternalStyles?.();if(p)for(let f of p){let d=wn(f,o);a&&d.setAttribute("nonce",a),this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ut=class extends lt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,s,a,c,l){super(i,o,s,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=n.styles;this.styles=l?ji(l,u):u,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},zt=class extends ut{contentAttr;hostAttr;constructor(i,e,n,r,o,s,a,c,l){let u=r+"-"+n.id;super(i,e,n,o,s,a,c,l,u),this.contentAttr=bo(u),this.hostAttr=yo(u)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var Wt=class t extends rt{supportsDOMEvents=!0;static makeCurrent(){gn(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=vo();return e==null?null:Eo(e)}resetBaseElement(){dt=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return st(document.cookie,i)}},dt=null;function vo(){return dt=dt||document.head.querySelector("base"),dt?dt.getAttribute("href"):null}function Eo(t){return new URL(t,document.baseURI).pathname}var So=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),zi=(()=>{class t extends ct{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(b(E))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Hi=["alt","control","meta","shift"],wo={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Co={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Vi=(()=>{class t extends ct{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let s=t.parseEventName(n),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ee().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),Hi.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),s+=l+".")}),s+=o,n.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,n){let r=wo[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Hi.forEach(s=>{if(s!==r){let a=Co[s];a(e)&&(o+=s+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(b(E))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();function _o(t,i,e){return Si(v({rootComponent:t,platformRef:e?.platformRef},To(i)))}function To(t){return{appProviders:[...Fo,...t?.providers??[]],platformProviders:Oo}}function Ao(){Wt.makeCurrent()}function Io(){return new on}function Ro(){return ci(document),document}var Oo=[{provide:K,useValue:jt},{provide:li,useValue:Ao,multi:!0},{provide:E,useFactory:Ro}];var Fo=[{provide:ii,useValue:"root"},{provide:on,useFactory:Io},{provide:Vt,useClass:zi,multi:!0,deps:[E]},{provide:Vt,useClass:Vi,multi:!0,deps:[E]},In,Tn,_n,{provide:pi,useExisting:In},{provide:Se,useClass:So},[]];var Be=class{},pt=class{},re=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Kt=class{encodeKey(i){return Wi(i)}encodeValue(i){return Wi(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Lo(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var Mo=/%(\d[a-f0-9])/gi,No={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Wi(t){return encodeURIComponent(t).replace(Mo,(i,e)=>No[e]??i)}function Gt(t){return`${t}`}var ie=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Kt,i.fromString){if(i.fromObject)throw new L(2805,!1);this.map=Lo(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(Gt):[Gt(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Gt(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(Gt(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var Yt=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function Po(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Gi(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Ki(t){return typeof Blob<"u"&&t instanceof Blob}function Yi(t){return typeof FormData<"u"&&t instanceof FormData}function xo(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Zi="Content-Type",qi="Accept",Xi="X-Request-URL",Ji="text/plain",Qi="application/json",ko=`${Qi}, ${Ji}, */*`,$e=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(Po(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new re,this.context??=new Yt,!this.params)this.params=new ie,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),c=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+c+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Gi(this.body)||Ki(this.body)||Yi(this.body)||xo(this.body)?this.body:this.body instanceof ie?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Yi(this.body)?null:Ki(this.body)?this.body.type||null:Gi(this.body)?null:typeof this.body=="string"?Ji:this.body instanceof ie?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Qi:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.transferCache??this.transferCache,s=i.body!==void 0?i.body:this.body,a=i.withCredentials??this.withCredentials,c=i.reportProgress??this.reportProgress,l=i.headers||this.headers,u=i.params||this.params,p=i.context??this.context;return i.setHeaders!==void 0&&(l=Object.keys(i.setHeaders).reduce((f,d)=>f.set(d,i.setHeaders[d]),l)),i.setParams&&(u=Object.keys(i.setParams).reduce((f,d)=>f.set(d,i.setParams[d]),u)),new t(e,n,s,{params:u,headers:l,context:p,reportProgress:c,responseType:r,withCredentials:a,transferCache:o})}},we=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(we||{}),Ue=class{headers;status;statusText;url;ok;type;constructor(i,e=200,n="OK"){this.headers=i.headers||new re,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},Zt=class t extends Ue{constructor(i={}){super(i)}type=we.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Ce=class t extends Ue{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=we.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},ft=class extends Ue{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},$o=200,Bo=204;function Rn(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var er=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof $e)o=e;else{let c;r.headers instanceof re?c=r.headers:c=new re(r.headers);let l;r.params&&(r.params instanceof ie?l=r.params:l=new ie({fromObject:r.params})),o=new $e(e,n,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let s=qe(o).pipe(Qn(c=>this.handler.handle(c)));if(e instanceof $e||r.observe==="events")return s;let a=s.pipe(Jn(c=>c instanceof Ce));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(Xe(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new L(2806,!1);return c.body}));case"blob":return a.pipe(Xe(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new L(2807,!1);return c.body}));case"text":return a.pipe(Xe(c=>{if(c.body!==null&&typeof c.body!="string")throw new L(2808,!1);return c.body}));case"json":default:return a.pipe(Xe(c=>c.body))}case"response":return a;default:throw new L(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new ie().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,Rn(r,n))}post(e,n,r={}){return this.request("POST",e,Rn(r,n))}put(e,n,r={}){return this.request("PUT",e,Rn(r,n))}static \u0275fac=function(n){return new(n||t)(b(Be))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Uo=new _("");function jo(t,i){return i(t)}function Ho(t,i,e){return(n,r)=>oi(e,()=>i(n,o=>t(o,r)))}var tr=new _(""),Fn=new _(""),nr=new _("",{providedIn:"root",factory:()=>!0});var qt=(()=>{class t extends Be{backend;injector;chain=null;pendingTasks=h(ai);contributeToStability=h(nr);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(tr),...this.injector.get(Fn,[])]));this.chain=n.reduceRight((r,o)=>Ho(r,o,this.injector),jo)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(ei(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(b(pt),b(ri))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var zo=/^\)\]\}',?\n/,Vo=RegExp(`^${Xi}:`,"m");function Wo(t){return"responseURL"in t&&t.responseURL?t.responseURL:Vo.test(t.getAllResponseHeaders())?t.getResponseHeader(Xi):null}var On=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new L(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?Xn(n.\u0275loadImpl()):qe(null)).pipe(ti(()=>new qn(o=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((g,D)=>s.setRequestHeader(g,D.join(","))),e.headers.has(qi)||s.setRequestHeader(qi,ko),!e.headers.has(Zi)){let g=e.detectContentTypeHeader();g!==null&&s.setRequestHeader(Zi,g)}if(e.responseType){let g=e.responseType.toLowerCase();s.responseType=g!=="json"?g:"text"}let a=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let g=s.statusText||"OK",D=new re(s.getAllResponseHeaders()),R=Wo(s)||e.url;return c=new Zt({headers:D,status:s.status,statusText:g,url:R}),c},u=()=>{let{headers:g,status:D,statusText:R,url:F}=l(),C=null;D!==Bo&&(C=typeof s.response>"u"?s.responseText:s.response),D===0&&(D=C?$o:0);let M=D>=200&&D<300;if(e.responseType==="json"&&typeof C=="string"){let Ae=C;C=C.replace(zo,"");try{C=C!==""?JSON.parse(C):null}catch(Ie){C=Ae,M&&(M=!1,C={error:Ie,text:C})}}M?(o.next(new Ce({body:C,headers:g,status:D,statusText:R,url:F||void 0})),o.complete()):o.error(new ft({error:C,headers:g,status:D,statusText:R,url:F||void 0}))},p=g=>{let{url:D}=l(),R=new ft({error:g,status:s.status||0,statusText:s.statusText||"Unknown Error",url:D||void 0});o.error(R)},f=!1,d=g=>{f||(o.next(l()),f=!0);let D={type:we.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(D.total=g.total),e.responseType==="text"&&s.responseText&&(D.partialText=s.responseText),o.next(D)},y=g=>{let D={type:we.UploadProgress,loaded:g.loaded};g.lengthComputable&&(D.total=g.total),o.next(D)};return s.addEventListener("load",u),s.addEventListener("error",p),s.addEventListener("timeout",p),s.addEventListener("abort",p),e.reportProgress&&(s.addEventListener("progress",d),a!==null&&s.upload&&s.upload.addEventListener("progress",y)),s.send(a),o.next({type:we.Sent}),()=>{s.removeEventListener("error",p),s.removeEventListener("abort",p),s.removeEventListener("load",u),s.removeEventListener("timeout",p),e.reportProgress&&(s.removeEventListener("progress",d),a!==null&&s.upload&&s.upload.removeEventListener("progress",y)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(b(Se))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),ir=new _(""),Go="XSRF-TOKEN",Ko=new _("",{providedIn:"root",factory:()=>Go}),Yo="X-XSRF-TOKEN",Zo=new _("",{providedIn:"root",factory:()=>Yo}),ht=class{},qo=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n){this.doc=e,this.cookieName=n}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=st(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(b(E),b(Ko))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Xo=/^(?:https?:)?\/\//i;function Jo(t,i){if(!h(ir)||t.method==="GET"||t.method==="HEAD"||Xo.test(t.url))return i(t);let e=h(ht).getToken(),n=h(Zo);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}function Qo(...t){let i=[er,On,qt,{provide:Be,useExisting:qt},{provide:pt,useFactory:()=>h(Uo,{optional:!0})??h(On)},{provide:tr,useValue:Jo,multi:!0},{provide:ir,useValue:!0},{provide:ht,useClass:qo}];for(let e of t)i.push(...e.\u0275providers);return Re(i)}var es=new _(""),ts="b",ns="h",is="s",rs="st",os="u",ss="rt",Ln=new _(""),as=["GET","HEAD"];function cs(t,i){let f=h(Ln),{isCacheActive:e}=f,n=Zn(f,["isCacheActive"]),{transferCache:r,method:o}=t;if(!e||r===!1||o==="POST"&&!n.includePostRequests&&!r||o!=="POST"&&!as.includes(o)||!n.includeRequestsWithAuthHeaders&&ls(t)||n.filter?.(t)===!1)return i(t);let s=h(ui);if(h(es,{optional:!0}))throw new L(2803,!1);let c=t.url,l=us(t,c),u=s.get(l,null),p=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(p=r.includeHeaders),u){let{[ts]:d,[ss]:y,[ns]:g,[is]:D,[rs]:R,[os]:F}=u,C=d;switch(y){case"arraybuffer":C=new TextEncoder().encode(d).buffer;break;case"blob":C=new Blob([d]);break}let M=new re(g);return qe(new Ce({body:C,headers:M,status:D,statusText:R,url:F}))}return i(t).pipe(ni(d=>{d instanceof Ce}))}function ls(t){return t.headers.has("authorization")||t.headers.has("proxy-authorization")}function rr(t){return[...t.keys()].sort().map(i=>`${i}=${t.getAll(i)}`).join("&")}function us(t,i){let{params:e,method:n,responseType:r}=t,o=rr(e),s=t.serializeBody();s instanceof URLSearchParams?s=rr(s):typeof s!="string"&&(s="");let a=[n,r,i,s,o].join("|"),c=ds(a);return c}function ds(t){let i=0;for(let e of t)i=Math.imul(31,i)+e.charCodeAt(0)<<0;return i+=2147483648,i.toString()}function or(t){return[{provide:Ln,useFactory:()=>(cn("NgHttpTransferCache"),v({isCacheActive:!0},t))},{provide:Fn,useValue:cs,multi:!0},{provide:hi,multi:!0,useFactory:()=>{let i=h(un),e=h(Ln);return()=>{i.whenStable().then(()=>{e.isCacheActive=!1})}}}]}var Ku=(()=>{class t{_doc;_dom;constructor(e){this._doc=e,this._dom=ee()}addTag(e,n=!1){return e?this._getOrCreateElement(e,n):null}addTags(e,n=!1){return e?e.reduce((r,o)=>(o&&r.push(this._getOrCreateElement(o,n)),r),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];let n=this._doc.querySelectorAll(`meta[${e}]`);return n?[].slice.call(n):[]}updateTag(e,n){if(!e)return null;n=n||this._parseSelector(e);let r=this.getTag(n);return r?this._setMetaElementAttributes(e,r):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,n=!1){if(!n){let s=this._parseSelector(e),a=this.getTags(s).filter(c=>this._containsAttributes(e,c))[0];if(a!==void 0)return a}let r=this._dom.createElement("meta");return this._setMetaElementAttributes(e,r),this._doc.getElementsByTagName("head")[0].appendChild(r),r}_setMetaElementAttributes(e,n){return Object.keys(e).forEach(r=>n.setAttribute(this._getMetaKeyMap(r),e[r])),n}_parseSelector(e){let n=e.name?"name":"property";return`${n}="${e[n]}"`}_containsAttributes(e,n){return Object.keys(e).every(r=>n.getAttribute(this._getMetaKeyMap(r))===e[r])}_getMetaKeyMap(e){return ps[e]||e}static \u0275fac=function(n){return new(n||t)(b(E))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ps={httpEquiv:"http-equiv"},Yu=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(b(E))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xt=function(t){return t[t.NoHttpTransferCache=0]="NoHttpTransferCache",t[t.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",t[t.I18nSupport=2]="I18nSupport",t[t.EventReplay=3]="EventReplay",t[t.IncrementalHydration=4]="IncrementalHydration",t}(Xt||{});function fs(t,i=[],e={}){return{\u0275kind:t,\u0275providers:i}}function Zu(){return fs(Xt.EventReplay,wi())}function qu(...t){let i=[],e=new Set;for(let{\u0275providers:r,\u0275kind:o}of t)e.add(o),r.length&&i.push(r);let n=e.has(Xt.HttpTransferCacheOptions);return Re([[],Ci(),e.has(Xt.NoHttpTransferCache)||n?[]:or({}),i])}function sr(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function _e(t,i){if(t&&i){let e=n=>{sr(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function je(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function ed(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||n.clientWidth,o=t.innerHeight||e.clientHeight||n.clientHeight;return{width:r,height:o}}function td(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function nd(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function ar(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function He(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function cr(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),He(i)?i:void 0}function id(t,i){let e=cr(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function Mn(t,i={}){if(He(t)){let e=(n,r)=>{var o,s;let a=(o=t?.$attrs)!=null&&o[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((c,l)=>{if(l!=null){let u=typeof l;if(u==="string"||u==="number")c.push(l);else if(u==="object"){let p=Array.isArray(l)?e(n,l):Object.entries(l).map(([f,d])=>n==="style"&&(d||d===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${d}`:d?f:void 0);c=p.length?c.concat(p.filter(f=>!!f)):c}}return c},a)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?Mn(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function rd(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",r=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}}function od(t,i){return He(t)?Array.from(t.querySelectorAll(i)):[]}function ze(t,i){return He(t)?t.matches(i)?t:t.querySelector(i):null}function sd(t,i){t&&document.activeElement!==t&&t.focus(i)}function ad(t,i){if(He(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Nn(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function lr(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function ur(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Pn(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function cd(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function dr(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function ld(t,i){let e=cr(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function ud(t,i="",e){He(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function pr(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}function $(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function xn(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),r=Array.isArray(i),o,s,a;if(n&&r){if(s=t.length,s!=i.length)return!1;for(o=s;o--!==0;)if(!xn(t[o],i[o],e))return!1;return!0}if(n!=r)return!1;let c=t instanceof Date,l=i instanceof Date;if(c!=l)return!1;if(c&&l)return t.getTime()==i.getTime();let u=t instanceof RegExp,p=i instanceof RegExp;if(u!=p)return!1;if(u&&p)return t.toString()==i.toString();let f=Object.keys(t);if(s=f.length,s!==Object.keys(i).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(i,f[o]))return!1;for(o=s;o--!==0;)if(a=f[o],!xn(t[a],i[a],e))return!1;return!0}function hs(t,i){return xn(t,i)}function hr(t){return!!(t&&t.constructor&&t.call&&t.apply)}function S(t){return!$(t)}function kn(t,i){if(!t||!i)return null;try{let e=t[i];if(S(e))return e}catch{}if(Object.keys(t).length){if(hr(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let r=0,o=e.length;r<o;++r){if(n==null)return null;n=n[e[r]]}return n}}return null}function gs(t,i,e){return e?kn(t,e)===kn(i,e):hs(t,i)}function hd(t,i){let e=-1;if(S(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function oe(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function Y(t,...i){return hr(t)?t(...i):t}function fe(t,i=!0){return typeof t=="string"&&(i||t!=="")}function fr(t){return fe(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Jt(t,i="",e={}){let n=fr(i).split("."),r=n.shift();return r?oe(t)?Jt(Y(t[Object.keys(t).find(o=>fr(o)===r)||""],e),n.join("."),e):void 0:Y(t,e)}function Qt(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function gr(t){return S(t)&&!isNaN(t)}function gd(t=""){return S(t)&&t.length===1&&!!t.match(/\S| /)}function V(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Te(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function en(t){return fe(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function $n(t){return fe(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var tn={};function gt(t="pui_id_"){return tn.hasOwnProperty(t)||(tn[t]=0),tn[t]++,`${t}${tn[t]}`}function ms(){let t=[],i=(s,a,c=999)=>{let l=r(s,a,c),u=l.value+(l.key===s?0:c)+1;return t.push({key:s,value:u}),u},e=s=>{t=t.filter(a=>a.value!==s)},n=(s,a)=>r(s,a).value,r=(s,a,c=0)=>[...t].reverse().find(l=>a?!0:l.key===s)||{key:s,value:c},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,a,c)=>{a&&(a.style.zIndex=String(i(s,!0,c)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var yd=ms();var mr=["*"];var N=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var Ld=(()=>{class t{messageSource=new be;clearSource=new be;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Md=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Z({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:mr,decls:1,vars:0,template:function(n,r){n&1&&(ve(),Ee(0))},encapsulation:2})}return t})(),Nd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Z({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:mr,decls:1,vars:0,template:function(n,r){n&1&&(ve(),Ee(0))},encapsulation:2})}return t})(),br=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(B(Qe))};static \u0275dir=O({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),he=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[ne]})}return t})();var bs=Object.defineProperty,ys=Object.defineProperties,Ds=Object.getOwnPropertyDescriptors,nn=Object.getOwnPropertySymbols,vr=Object.prototype.hasOwnProperty,Er=Object.prototype.propertyIsEnumerable,yr=(t,i,e)=>i in t?bs(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Q=(t,i)=>{for(var e in i||(i={}))vr.call(i,e)&&yr(t,e,i[e]);if(nn)for(var e of nn(i))Er.call(i,e)&&yr(t,e,i[e]);return t},Bn=(t,i)=>ys(t,Ds(i)),se=(t,i)=>{var e={};for(var n in t)vr.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&nn)for(var n of nn(t))i.indexOf(n)<0&&Er.call(t,n)&&(e[n]=t[n]);return e};var vs=pr(),W=vs;function Dr(t,i){Qt(t)?t.push(...i||[]):oe(t)&&Object.assign(t,i)}function Es(t){return oe(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Ss(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Un(t="",i=""){return Ss(`${fe(t,!1)&&fe(i,!1)?`${t}-`:t}${i}`)}function Sr(t="",i=""){return`--${Un(t,i)}`}function ws(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function wr(t,i="",e="",n=[],r){if(fe(t)){let o=/{([^}]*)}/g,s=t.trim();if(ws(s))return;if(V(s,o)){let a=s.replaceAll(o,u=>{let f=u.replace(/{|}/g,"").split(".").filter(d=>!n.some(y=>V(d,y)));return`var(${Sr(e,en(f.join("-")))}${S(r)?`, ${r}`:""})`}),c=/(\d+\s+[\+\-\*\/]\s+\d+)/g,l=/var\([^)]+\)/g;return V(a.replace(l,"0"),c)?`calc(${a})`:a}return s}else if(gr(t))return t}function Cs(t,i,e){fe(i,!1)&&t.push(`${i}:${e};`)}function Ve(t,i){return t?`${t}{${i}}`:""}var We=(...t)=>_s(w.getTheme(),...t),_s=(t={},i,e,n)=>{if(i){let{variable:r,options:o}=w.defaults||{},{prefix:s,transform:a}=t?.options||o||{},l=V(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||$(n)&&a==="strict"?w.getTokenValue(i):wr(l,void 0,s,[r.excludedKeyRegex],e)}return""};function Ts(t,i={}){let e=w.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,s=(l,u="")=>Object.entries(l).reduce((p,[f,d])=>{let y=V(f,o)?Un(u):Un(u,en(f)),g=Es(d);if(oe(g)){let{variables:D,tokens:R}=s(g,y);Dr(p.tokens,R),Dr(p.variables,D)}else p.tokens.push((n?y.replace(`${n}-`,""):y).replaceAll("-",".")),Cs(p.variables,Sr(y),wr(g,y,n,[o]));return p},{variables:[],tokens:[]}),{variables:a,tokens:c}=s(t,n);return{value:a,tokens:c,declarations:a.join(""),css:Ve(r,a.join(""))}}var J={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return Ts(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s,a,c,l,u,p;let{preset:f,options:d}=i,y,g,D,R,F,C,M;if(S(f)&&d.transform!=="strict"){let{primitive:Ae,semantic:Ie,extend:mt}=f,Ke=Ie||{},{colorScheme:bt}=Ke,yt=se(Ke,["colorScheme"]),Dt=mt||{},{colorScheme:vt}=Dt,Ye=se(Dt,["colorScheme"]),Ze=bt||{},{dark:Et}=Ze,St=se(Ze,["dark"]),wt=vt||{},{dark:Ct}=wt,_t=se(wt,["dark"]),Tt=S(Ae)?this._toVariables({primitive:Ae},d):{},At=S(yt)?this._toVariables({semantic:yt},d):{},It=S(St)?this._toVariables({light:St},d):{},Wn=S(Et)?this._toVariables({dark:Et},d):{},Gn=S(Ye)?this._toVariables({semantic:Ye},d):{},Kn=S(_t)?this._toVariables({light:_t},d):{},Yn=S(Ct)?this._toVariables({dark:Ct},d):{},[kr,$r]=[(o=Tt.declarations)!=null?o:"",Tt.tokens],[Br,Ur]=[(s=At.declarations)!=null?s:"",At.tokens||[]],[jr,Hr]=[(a=It.declarations)!=null?a:"",It.tokens||[]],[zr,Vr]=[(c=Wn.declarations)!=null?c:"",Wn.tokens||[]],[Wr,Gr]=[(l=Gn.declarations)!=null?l:"",Gn.tokens||[]],[Kr,Yr]=[(u=Kn.declarations)!=null?u:"",Kn.tokens||[]],[Zr,qr]=[(p=Yn.declarations)!=null?p:"",Yn.tokens||[]];y=this.transformCSS(t,kr,"light","variable",d,n,r),g=$r;let Xr=this.transformCSS(t,`${Br}${jr}`,"light","variable",d,n,r),Jr=this.transformCSS(t,`${zr}`,"dark","variable",d,n,r);D=`${Xr}${Jr}`,R=[...new Set([...Ur,...Hr,...Vr])];let Qr=this.transformCSS(t,`${Wr}${Kr}color-scheme:light`,"light","variable",d,n,r),eo=this.transformCSS(t,`${Zr}color-scheme:dark`,"dark","variable",d,n,r);F=`${Qr}${eo}`,C=[...new Set([...Gr,...Yr,...qr])],M=Y(f.css,{dt:We})}return{primitive:{css:y,tokens:g},semantic:{css:D,tokens:R},global:{css:F,tokens:C},style:M}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:o,selector:s}){var a,c,l;let u,p,f;if(S(i)&&e.transform!=="strict"){let d=t.replace("-directive",""),y=i,{colorScheme:g,extend:D,css:R}=y,F=se(y,["colorScheme","extend","css"]),C=D||{},{colorScheme:M}=C,Ae=se(C,["colorScheme"]),Ie=g||{},{dark:mt}=Ie,Ke=se(Ie,["dark"]),bt=M||{},{dark:yt}=bt,Dt=se(bt,["dark"]),vt=S(F)?this._toVariables({[d]:Q(Q({},F),Ae)},e):{},Ye=S(Ke)?this._toVariables({[d]:Q(Q({},Ke),Dt)},e):{},Ze=S(mt)?this._toVariables({[d]:Q(Q({},mt),yt)},e):{},[Et,St]=[(a=vt.declarations)!=null?a:"",vt.tokens||[]],[wt,Ct]=[(c=Ye.declarations)!=null?c:"",Ye.tokens||[]],[_t,Tt]=[(l=Ze.declarations)!=null?l:"",Ze.tokens||[]],At=this.transformCSS(d,`${Et}${wt}`,"light","variable",e,r,o,s),It=this.transformCSS(d,_t,"dark","variable",e,r,o,s);u=`${At}${It}`,p=[...new Set([...St,...Ct,...Tt])],f=Y(R,{dt:We})}return{css:u,tokens:p,style:f}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let{preset:s,options:a}=i,c=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:c,options:a,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let s=t.replace("-directive",""),{preset:a,options:c}=i,l=(o=a?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:l,options:c,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${Y(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:i,params:e,set:r,defaults:o}),a=Object.entries(n).reduce((c,[l,u])=>c.push(`${l}="${u}"`)&&c,[]).join(" ");return Object.entries(s||{}).reduce((c,[l,u])=>{if(u?.css){let p=Te(u?.css),f=`${l}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${p}</style>`)}return c},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){var s;let a={name:t,theme:i,params:e,set:r,defaults:o},c=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,l=Object.entries(n).reduce((u,[p,f])=>u.push(`${p}="${f}"`)&&u,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${t}-variables" ${l}>${Te(c)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([o,s])=>{let a=V(o,i.variable.excludedKeyRegex)?e:e?`${e}.${$n(o)}`:$n(o),c=n?`${n}.${o}`:o;oe(s)?this.createTokens(s,i,a,c,r):(r[a]||(r[a]={paths:[],computed(l,u={}){var p,f;return this.paths.length===1?(p=this.paths[0])==null?void 0:p.computed(this.paths[0].scheme,u.binding):l&&l!=="none"?(f=this.paths.find(d=>d.scheme===l))==null?void 0:f.computed(l,u.binding):this.paths.map(d=>d.computed(d.scheme,u[d.scheme]))}}),r[a].paths.push({path:c,value:s,scheme:c.includes("colorScheme.light")?"light":c.includes("colorScheme.dark")?"dark":"none",computed(l,u={}){let p=/{([^}]*)}/g,f=s;if(u.name=this.path,u.binding||(u.binding={}),V(s,p)){let y=s.trim().replaceAll(p,R=>{var F;let C=R.replace(/{|}/g,""),M=(F=r[C])==null?void 0:F.computed(l,u);return Qt(M)&&M.length===2?`light-dark(${M[0].value},${M[1].value})`:M?.value}),g=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,D=/var\([^)]+\)/g;f=V(y.replace(D,"0"),g)?`calc(${y})`:y}return $(u.binding)&&delete u.binding,{colorScheme:l,path:this.path,paths:u,value:f.includes("undefined")?void 0:f}}}))}),r},getTokenValue(t,i,e){var n;let o=(c=>c.split(".").filter(u=>!V(u.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,a=[(n=t[o])==null?void 0:n.computed(s)].flat().filter(c=>c);return a.length===1?a[0].value:a.reduce((c={},l)=>{let u=l,{colorScheme:p}=u,f=se(u,["colorScheme"]);return c[p]=f,c},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Ve(S(i)?`${t}${i},${t} ${i}`:t,n):Ve(t,S(i)?Ve(i,n):n)},transformCSS(t,i,e,n,r={},o,s,a){if(S(i)){let{cssLayer:c}=r;if(n!=="style"){let l=this.getColorSchemeOption(r,s);i=e==="dark"?l.reduce((u,{type:p,selector:f})=>(S(f)&&(u+=f.includes("[CSS]")?f.replace("[CSS]",i):this.getSelectorRule(f,a,p,i)),u),""):Ve(a??":root",i)}if(c){let l={name:"primeui",order:"primeui"};oe(c)&&(l.name=Y(c.name,{name:t,type:n})),S(l.name)&&(i=Ve(`@layer ${l.name}`,i),o?.layerNames(l.name))}return i}return""}},w={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=Bn(Q({},i),{options:Q(Q({},this.defaults.options),i.options)}),this._tokens=J.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),W.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Bn(Q({},this.theme),{preset:t}),this._tokens=J.createTokens(t,this.defaults),this.clearLoadedStyleNames(),W.emit("preset:change",t),W.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Bn(Q({},this.theme),{options:t}),this.clearLoadedStyleNames(),W.emit("options:change",t),W.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return J.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return J.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return J.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return J.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return J.getPreset(r)},getLayerOrderCSS(t=""){return J.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return J.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return J.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return J.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),W.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&W.emit("theme:load"))}};var As=0,Cr=(()=>{class t{document=h(E);use(e,n={}){let r=!1,o=e,s=null,{immediate:a=!0,manual:c=!1,name:l=`style_${++As}`,id:u=void 0,media:p=void 0,nonce:f=void 0,first:d=!1,props:y={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${l}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){o=e;let g=this.document.head;d&&g.firstChild?g.insertBefore(s,g.firstChild):g.appendChild(s),Mn(s,{type:"text/css",media:p,nonce:f,"data-primeng-style-id":l})}return s.textContent!==o&&(s.textContent=o),{id:u,name:l,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ge={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Is=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Rs=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,U=(()=>{class t{name="base";useStyle=h(Cr);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},r=o=>o)=>{let o=r(Y(e,{dt:We}));return o?this.useStyle.use(Te(o),v({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>w.transformCSS(e.name||this.name,`${r}${n}`));loadGlobalCSS=(e={})=>this.load(Rs,e);loadGlobalTheme=(e={},n="")=>this.load(Is,e,(r="")=>w.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>w.getCommon(this.name,e);getComponentTheme=e=>w.getComponent(this.name,e);getDirectiveTheme=e=>w.getDirective(this.name,e);getPresetTheme=(e,n,r)=>w.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>w.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=Y(this.css,{dt:We}),o=Te(`${r}${e}`),s=Object.entries(n).reduce((a,[c,l])=>a.push(`${c}="${l}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>w.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[w.getStyleSheet(this.name,e,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=Y(this.theme,{dt:We}),a=Te(w.transformCSS(o,s)),c=Object.entries(n).reduce((l,[u,p])=>l.push(`${u}="${p}"`)&&l,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${c}>${a}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Os=(()=>{class t{theme=de(void 0);csp=de({nonce:void 0});isThemeChanged=!1;document=h(E);baseStyle=h(U);constructor(){it(()=>{W.on("theme:change",e=>{hn(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),it(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){w.clearLoadedStyleNames(),W.clear()}onThemeChange(e){w.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!w.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,v({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,v({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,v({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(v({name:"global-style"},s),o),w.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hn=(()=>{class t extends Os{ripple=de(!1);platformId=h(K);inputStyle=de(null);inputVariant=de(null);overlayOptions={};csp=de({nonce:void 0});filterMatchModeOptions={text:[N.STARTS_WITH,N.CONTAINS,N.NOT_CONTAINS,N.ENDS_WITH,N.EQUALS,N.NOT_EQUALS],numeric:[N.EQUALS,N.NOT_EQUALS,N.LESS_THAN,N.LESS_THAN_OR_EQUAL_TO,N.GREATER_THAN,N.GREATER_THAN_OR_EQUAL_TO],date:[N.DATE_IS,N.DATE_IS_NOT,N.DATE_BEFORE,N.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new be;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=v(v({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:o,inputVariant:s,theme:a,overlayOptions:c,translation:l,filterMatchModeOptions:u}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),o&&this.inputStyle.set(o),s&&this.inputVariant.set(s),c&&(this.overlayOptions=c),l&&this.setTranslation(l),u&&(this.filterMatchModeOptions=u),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fs=new _("PRIME_NG_CONFIG");function pp(...t){let i=t?.map(n=>({provide:Fs,useValue:n,multi:!1})),e=fi(()=>{let n=h(Hn);t?.forEach(r=>n.setConfig(r))});return Re([...i,e])}var _r=(()=>{class t extends U{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),G=(()=>{class t{document=h(E);platformId=h(K);el=h(ue);injector=h(Oe);cd=h(xt);renderer=h(Fe);config=h(Hn);baseComponentStyle=h(_r);baseStyle=h(U);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=gt("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",r={}){return Jt(e,n,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!ke(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>W.off("theme:change",e))}_loadStyles(){let e=()=>{Ge.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Ge.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Ge.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Ge.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!w.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,v({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,v({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,v({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(v({name:"global-style"},this.styleOptions),o),w.setLoadedStyleName("common")}if(!w.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,v({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(v({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),w.setLoadedStyleName(this.componentStyle?.name)}if(!w.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,v({name:"layer-order",first:!0},this.styleOptions)),w.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(n,v({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Ge.clearLoadedStyleNames(),W.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n){let r=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:v({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,inputs:{dt:"dt"},features:[z([_r,U]),ae]})}return t})();var zn=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let o=0;o<r.length;o++)e.classList.add(r[o])}else{let r=n.split(" ");for(let o=0;o<r.length;o++)e.className+=" "+r[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var o=0;o<n.length;o++){if(n[o]==e)return r;n[o].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],o=0;for(var s=0;s<r.length;s++){if(r[s]==e)return o;r[s].attributes&&r[s].attributes[n]&&r[s].nodeType==1&&o++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let o=F=>{if(F)return getComputedStyle(F).getPropertyValue("position")==="relative"?F:o(F.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,c=n.getBoundingClientRect(),l=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),p=this.getViewport(),d=o(e)?.getBoundingClientRect()||{top:-1*l,left:-1*u},y,g;c.top+a+s.height>p.height?(y=c.top-d.top-s.height,e.style.transformOrigin="bottom",c.top+y<0&&(y=-1*c.top)):(y=a+c.top-d.top,e.style.transformOrigin="top");let D=c.left+s.width-p.width,R=c.left-d.left;s.width>p.width?g=(c.left-d.left)*-1:D>0?g=R-D:g=c.left-d.left,e.style.top=y+"px",e.style.left=g+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,r=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.height,a=o.width,c=n.offsetHeight,l=n.offsetWidth,u=n.getBoundingClientRect(),p=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),d=this.getViewport(),y,g;u.top+c+s>d.height?(y=u.top+p-s,e.style.transformOrigin="bottom",y<0&&(y=p)):(y=c+u.top+p,e.style.transformOrigin="top"),u.left+a>d.width?g=Math.max(0,u.left+f+l-a):g=u.left+f,e.style.top=y+"px",e.style.left=g+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),o=/(auto|scroll)/,s=a=>{let c=window.getComputedStyle(a,null);return o.test(c.getPropertyValue("overflow"))||o.test(c.getPropertyValue("overflowX"))||o.test(c.getPropertyValue("overflowY"))};for(let a of r){let c=a.nodeType===1&&a.dataset.scrollselectors;if(c){let l=c.split(",");for(let u of l){let p=this.findSingle(a,u);p&&s(p)&&n.push(p)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=r?parseFloat(r):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,c=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(c.top+document.body.scrollTop)-o-a,p=e.scrollTop,f=e.clientHeight,d=this.getOuterHeight(n);u<0?e.scrollTop=p+u:u+d>f&&(e.scrollTop=p+u-f+d)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,o=0,s=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=o,r=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var r=1,o=50,s=n,a=o/s;let c=setInterval(()=>{r=r-a,r<=0&&(r=0,clearInterval(c)),e.style.opacity=r},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0],s=e.innerWidth||r.clientWidth||o.clientWidth,a=e.innerHeight||r.clientHeight||o.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var o=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let s of r){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&o.push(s)}return o}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let o=getComputedStyle(r);if(this.isVisible(r)&&o.display!="none"&&o.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),o=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);n?s==-1||s===0?o=r.length-1:o=s-1:s!=-1&&s!==r.length-1&&(o=s+1)}return r[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...r),o}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(o,s)=>{let a=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[s].flat().reduce((c,l)=>{if(l!=null){let u=typeof l;if(u==="string"||u==="number")c.push(l);else if(u==="object"){let p=Array.isArray(l)?r(o,l):Object.entries(l).map(([f,d])=>o==="style"&&(d||d===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${d}`:d?f:void 0);c=p.length?c.concat(p.filter(f=>!!f)):c}}return c},a)};Object.entries(n).forEach(([o,s])=>{if(s!=null){let a=o.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):o==="pBind"?this.setAttributes(e,s):(s=o==="class"?[...new Set(r("class",s))].join(" ").trim():o==="style"?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=s),e.setAttribute(o,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),Tr=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=zn.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ar=(()=>{class t extends G{autofocus=!1;_autofocus=!1;focused=!1;platformId=h(K);document=h(E);host=h(ue);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){at(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=zn.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275dir=O({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",T],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[k]})}return t})();var Ls=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Ms={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":S(t.value)&&String(t.value).length===1,"p-badge-dot":$(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Ir=(()=>{class t extends U{name="badge";theme=Ls;classes=Ms;static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Vn=(()=>{class t extends G{styleClass=le();style=le();badgeSize=le();size=le();severity=le();value=le();badgeDisabled=le(!1,{transform:T});_componentStyle=h(Ir);containerClass=Pe(()=>{let e="p-badge p-component";return S(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),$(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275cmp=Z({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,r){n&2&&(mi(r.style()),Le(r.containerClass()),gi("display",r.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[z([Ir]),k],decls:1,vars:1,template:function(n,r){n&1&&Nt(0),n&2&&Pt(r.value())},dependencies:[ne,he],encapsulation:2,changeDetection:0})}return t})(),Rr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[Vn,he,he]})}return t})();var Ps=["*"],xs=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ks=(()=>{class t extends U{name="baseicon";inlineStyles=xs;static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Or=(()=>{class t extends G{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=$(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275cmp=Z({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",T],styleClass:"styleClass"},features:[z([ks]),k],ngContentSelectors:Ps,decls:1,vars:0,template:function(n,r){n&1&&(ve(),Ee(0))},encapsulation:2,changeDetection:0})}return t})();var Fr=(()=>{class t extends Or{pathId;ngOnInit(){this.pathId="url(#"+gt()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275cmp=Z({type:t,selectors:[["SpinnerIcon"]],features:[k],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(si(),Me(0,"svg",0)(1,"g"),pe(2,"path",1),Ne(),Me(3,"defs")(4,"clipPath",2),pe(5,"rect",3),Ne()()()),n&2&&(Le(r.getClassNames()),te("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),P(),te("clip-path",r.pathId),P(3),I("id",r.pathId))},encapsulation:2})}return t})();var $s=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Bs={root:"p-ink"},Lr=(()=>{class t extends U{name="ripple";theme=$s;classes=Bs;static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Mr=(()=>{class t extends G{zone=h(ce);_componentStyle=h(Lr);animationListener;mouseDownListener;timeout;constructor(){super(),it(()=>{at(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(je(n,"p-ink-active"),!Nn(n)&&!Pn(n)){let a=Math.max(ar(this.el.nativeElement),ur(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let r=lr(this.el.nativeElement),o=e.pageX-r.left+this.document.body.scrollTop-Pn(n)/2,s=e.pageY-r.top+this.document.body.scrollLeft-Nn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",o+"px"),_e(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&je(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&je(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),je(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,dr(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[z([Lr]),k]})}return t})();var Us=["content"],js=["loadingicon"],Hs=["icon"],zs=["*"],xr=t=>({class:t});function Vs(t,i){t&1&&bi(0)}function Ws(t,i){if(t&1&&pe(0,"span",8),t&2){let e=q(3);I("ngClass",e.iconClass()),te("aria-hidden",!0)("data-pc-section","loadingicon")}}function Gs(t,i){if(t&1&&pe(0,"SpinnerIcon",9),t&2){let e=q(3);I("styleClass",e.spinnerIconClass())("spin",!0),te("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ks(t,i){if(t&1&&(Lt(0),De(1,Ws,1,3,"span",6)(2,Gs,1,4,"SpinnerIcon",7),Mt()),t&2){let e=q(2);P(),I("ngIf",e.loadingIcon),P(),I("ngIf",!e.loadingIcon)}}function Ys(t,i){}function Zs(t,i){if(t&1&&De(0,Ys,0,0,"ng-template",10),t&2){let e=q(2);I("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function qs(t,i){if(t&1&&(Lt(0),De(1,Ks,3,2,"ng-container",2)(2,Zs,1,1,null,5),Mt()),t&2){let e=q();P(),I("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),P(),I("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",pn(3,xr,e.iconClass()))}}function Xs(t,i){if(t&1&&pe(0,"span",8),t&2){let e=q(2);Le(e.icon),I("ngClass",e.iconClass()),te("data-pc-section","icon")}}function Js(t,i){}function Qs(t,i){if(t&1&&De(0,Js,0,0,"ng-template",10),t&2){let e=q(2);I("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function ea(t,i){if(t&1&&(Lt(0),De(1,Xs,1,4,"span",11)(2,Qs,1,1,null,5),Mt()),t&2){let e=q();P(),I("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),P(),I("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",pn(3,xr,e.iconClass()))}}function ta(t,i){if(t&1&&(Me(0,"span",12),Nt(1),Ne()),t&2){let e=q();te("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),P(),Pt(e.label)}}function na(t,i){if(t&1&&pe(0,"p-badge",13),t&2){let e=q();I("value",e.badge)("severity",e.badgeSeverity)}}var ia=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,ra={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},me=(()=>{class t extends U{name="button";theme=ia;classes=ra;static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var ge={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Nr=(()=>{class t extends G{_componentStyle=h(me);static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275dir=O({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,r){n&2&&Ft("p-button-label",!0)},features:[z([me]),k]})}return t})(),Pr=(()=>{class t extends G{_componentStyle=h(me);static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275dir=O({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,r){n&2&&Ft("p-button-icon",!0)},features:[z([me]),k]})}return t})(),kf=(()=>{class t extends G{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=ln(Pr);labelSignal=ln(Nr);isIconOnly=Pe(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(ge);isTextButton=Pe(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=h(me);ngAfterViewInit(){super.ngAfterViewInit(),_e(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let o in r)this[o]=r[o]}}getStyleClass(){let e=[ge.button,ge.component];return this.icon&&!this.label&&$(this.htmlElement.textContent)&&e.push(ge.iconOnly),this.loading&&(e.push(ge.disabled,ge.loading),!this.icon&&this.label&&e.push(ge.labelOnly),this.icon&&!this.label&&!$(this.htmlElement.textContent)&&e.push(ge.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return $(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(r=>e.some(o=>r===`p-button-${o}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!ze(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!ze(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let r=this.label?"p-button-icon-"+this.iconPos:null;r&&_e(n,r);let o=this.getIconClass();o&&_e(n,o),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=ze(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=ze(this.htmlElement,".p-button-icon"),n=ze(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275dir=O({type:t,selectors:[["","pButton",""]],contentQueries:function(n,r,o){n&1&&(dn(o,r.iconSignal,Pr,5),dn(o,r.labelSignal,Nr,5)),n&2&&Di(2)},hostVars:4,hostBindings:function(n,r){n&2&&Ft("p-button-icon-only",r.isIconOnly())("p-button-text",r.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",T],rounded:[2,"rounded","rounded",T],text:[2,"text","text",T],outlined:[2,"outlined","outlined",T],size:"size",plain:[2,"plain","plain",T],fluid:[2,"fluid","fluid",T],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[z([me]),k,ae]})}return t})(),oa=(()=>{class t extends G{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new Rt;onFocus=new Rt;onBlur=new Rt;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return $(this.fluid)?!!n:this.fluid}_componentStyle=h(me);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let o in r)this[o]=r[o]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=A(t)))(r||t)}})();static \u0275cmp=Z({type:t,selectors:[["p-button"]],contentQueries:function(n,r,o){if(n&1&&(et(o,Us,5),et(o,js,5),et(o,Hs,5),et(o,br,4)),n&2){let s;tt(s=nt())&&(r.contentTemplate=s.first),tt(s=nt())&&(r.loadingIconTemplate=s.first),tt(s=nt())&&(r.iconTemplate=s.first),tt(s=nt())&&(r.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",T],loading:[2,"loading","loading",T],loadingIcon:"loadingIcon",raised:[2,"raised","raised",T],rounded:[2,"rounded","rounded",T],text:[2,"text","text",T],plain:[2,"plain","plain",T],severity:"severity",outlined:[2,"outlined","outlined",T],link:[2,"link","link",T],tabindex:[2,"tabindex","tabindex",fn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",T],fluid:[2,"fluid","fluid",T],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[z([me]),k,ae],ngContentSelectors:zs,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,r){n&1&&(ve(),Me(0,"button",0),yi("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),Ee(1),De(2,Vs,1,0,"ng-container",1)(3,qs,3,5,"ng-container",2)(4,ea,3,5,"ng-container",2)(5,ta,2,3,"span",3)(6,na,1,2,"p-badge",4),Ne()),n&2&&(I("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),te("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),P(2),I("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),P(),I("ngIf",r.loading),P(),I("ngIf",!r.loading),P(),I("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),P(),I("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[ne,bn,yn,vn,Dn,Mr,Ar,Fr,Rr,Vn,he],encapsulation:2,changeDetection:0})}return t})(),$f=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=j({imports:[ne,oa,he,he]})}return t})();export{E as a,ee as b,to as c,xe as d,Ri as e,Oi as f,oo as g,bn as h,Ni as i,yn as j,Dn as k,vn as l,ne as m,at as n,el as o,In as p,_o as q,er as r,Qo as s,Ku as t,Yu as u,Zu as v,qu as w,sr as x,ed as y,td as z,nd as A,ar as B,id as C,rd as D,od as E,ze as F,sd as G,ad as H,ur as I,cd as J,ld as K,ud as L,$ as M,S as N,gs as O,hd as P,Y as Q,gd as R,gt as S,Ld as T,Md as U,Nd as V,br as W,he as X,U as Y,pp as Z,G as _,Tr as $,Vn as aa,Rr as ba,Or as ca,Mr as da,kf as ea,oa as fa,$f as ga};
