import{a as st,m as xt}from"./chunk-DWEOS6OM.js";import{Ea as At,Ha as Rt,Hb as It,Jb as pt,Na as Lt,Oa as wt,Q as A,R as bt,T as Tt,Ta as Nt,W as R,X as vt,a as C,da as Ot,i as B,oa as M,sa as Ct}from"./chunk-LMJ7KR2R.js";function Pt(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function ut(t,i={}){if(Pt(t)){let e=(n,r)=>{var o,s;let c=(o=t?.$attrs)!=null&&o[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((l,a)=>{if(a!=null){let p=typeof a;if(p==="string"||p==="number")l.push(a);else if(p==="object"){let f=Array.isArray(a)?e(n,a):Object.entries(a).map(([d,u])=>n==="style"&&(u||u===0)?`${d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${u}`:u?d:void 0);l=f.length?l.concat(f.filter(d=>!!d)):l}}return l},c)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?ut(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function we(t,i="",e){Pt(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Dt(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}function V(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function pe(t){return!!(t&&t.constructor&&t.call&&t.apply)}function h(t){return!V(t)}function L(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function _(t,...i){return pe(t)?t(...i):t}function P(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Mt(t){return P(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Ft(t,i="",e={}){let n=Mt(i).split("."),r=n.shift();return r?L(t)?Ft(_(t[Object.keys(t).find(o=>Mt(o)===r)||""],e),n.join("."),e):void 0:_(t,e)}function ot(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function kt(t){return h(t)&&!isNaN(t)}function E(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function F(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function at(t){return P(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function dt(t){return P(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var ct={};function De(t="pui_id_"){return ct.hasOwnProperty(t)||(ct[t]=0),ct[t]++,`${t}${ct[t]}`}function ue(){let t=[],i=(s,c,l=999)=>{let a=r(s,c,l),p=a.value+(a.key===s?0:l)+1;return t.push({key:s,value:p}),p},e=s=>{t=t.filter(c=>c.value!==s)},n=(s,c)=>r(s,c).value,r=(s,c,l=0)=>[...t].reverse().find(a=>c?!0:a.key===s)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,c,l)=>{c&&(c.style.zIndex=String(i(s,!0,l)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var Fe=ue();var y=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var ei=(()=>{class t{messageSource=new B;clearSource=new B;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var ii=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(Rt(At))};static \u0275dir=wt({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),ni=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Lt({type:t});static \u0275inj=bt({imports:[xt]})}return t})();var de=Object.defineProperty,fe=Object.defineProperties,he=Object.getOwnPropertyDescriptors,lt=Object.getOwnPropertySymbols,Wt=Object.prototype.hasOwnProperty,Ut=Object.prototype.propertyIsEnumerable,Ht=(t,i,e)=>i in t?de(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,v=(t,i)=>{for(var e in i||(i={}))Wt.call(i,e)&&Ht(t,e,i[e]);if(lt)for(var e of lt(i))Ut.call(i,e)&&Ht(t,e,i[e]);return t},ht=(t,i)=>fe(t,he(i)),w=(t,i)=>{var e={};for(var n in t)Wt.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&lt)for(var n of lt(t))i.indexOf(n)<0&&Ut.call(t,n)&&(e[n]=t[n]);return e};var me=Dt(),O=me;function $t(t,i){ot(t)?t.push(...i||[]):L(t)&&Object.assign(t,i)}function ge(t){return L(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function ye(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function mt(t="",i=""){return ye(`${P(t,!1)&&P(i,!1)?`${t}-`:t}${i}`)}function Bt(t="",i=""){return`--${mt(t,i)}`}function Se(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Vt(t,i="",e="",n=[],r){if(P(t)){let o=/{([^}]*)}/g,s=t.trim();if(Se(s))return;if(E(s,o)){let c=s.replaceAll(o,p=>{let d=p.replace(/{|}/g,"").split(".").filter(u=>!n.some(g=>E(u,g)));return`var(${Bt(e,at(d.join("-")))}${h(r)?`, ${r}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,a=/var\([^)]+\)/g;return E(c.replace(a,"0"),l)?`calc(${c})`:c}return s}else if(kt(t))return t}function Ee(t,i,e){P(i,!1)&&t.push(`${i}:${e};`)}function k(t,i){return t?`${t}{${i}}`:""}var H=(...t)=>_e(m.getTheme(),...t),_e=(t={},i,e,n)=>{if(i){let{variable:r,options:o}=m.defaults||{},{prefix:s,transform:c}=t?.options||o||{},a=E(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||V(n)&&c==="strict"?m.getTokenValue(i):Vt(a,void 0,s,[r.excludedKeyRegex],e)}return""};function be(t,i={}){let e=m.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,s=(a,p="")=>Object.entries(a).reduce((f,[d,u])=>{let g=E(d,o)?mt(p):mt(p,at(d)),S=ge(u);if(L(S)){let{variables:N,tokens:I}=s(S,g);$t(f.tokens,I),$t(f.variables,N)}else f.tokens.push((n?g.replace(`${n}-`,""):g).replaceAll("-",".")),Ee(f.variables,Bt(g),Vt(S,g,n,[o]));return f},{variables:[],tokens:[]}),{variables:c,tokens:l}=s(t,n);return{value:c,tokens:l,declarations:c.join(""),css:k(r,c.join(""))}}var T={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return be(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s,c,l,a,p,f;let{preset:d,options:u}=i,g,S,N,I,x,D,b;if(h(d)&&u.transform!=="strict"){let{primitive:G,semantic:K,extend:j}=d,$=K||{},{colorScheme:Y}=$,z=w($,["colorScheme"]),q=j||{},{colorScheme:Z}=q,W=w(q,["colorScheme"]),U=Y||{},{dark:Q}=U,J=w(U,["dark"]),X=Z||{},{dark:tt}=X,et=w(X,["dark"]),it=h(G)?this._toVariables({primitive:G},u):{},nt=h(z)?this._toVariables({semantic:z},u):{},rt=h(J)?this._toVariables({light:J},u):{},yt=h(Q)?this._toVariables({dark:Q},u):{},St=h(W)?this._toVariables({semantic:W},u):{},Et=h(et)?this._toVariables({light:et},u):{},_t=h(tt)?this._toVariables({dark:tt},u):{},[jt,Yt]=[(o=it.declarations)!=null?o:"",it.tokens],[zt,qt]=[(s=nt.declarations)!=null?s:"",nt.tokens||[]],[Zt,Qt]=[(c=rt.declarations)!=null?c:"",rt.tokens||[]],[Jt,Xt]=[(l=yt.declarations)!=null?l:"",yt.tokens||[]],[te,ee]=[(a=St.declarations)!=null?a:"",St.tokens||[]],[ie,ne]=[(p=Et.declarations)!=null?p:"",Et.tokens||[]],[re,se]=[(f=_t.declarations)!=null?f:"",_t.tokens||[]];g=this.transformCSS(t,jt,"light","variable",u,n,r),S=Yt;let oe=this.transformCSS(t,`${zt}${Zt}`,"light","variable",u,n,r),ae=this.transformCSS(t,`${Jt}`,"dark","variable",u,n,r);N=`${oe}${ae}`,I=[...new Set([...qt,...Qt,...Xt])];let ce=this.transformCSS(t,`${te}${ie}color-scheme:light`,"light","variable",u,n,r),le=this.transformCSS(t,`${re}color-scheme:dark`,"dark","variable",u,n,r);x=`${ce}${le}`,D=[...new Set([...ee,...ne,...se])],b=_(d.css,{dt:H})}return{primitive:{css:g,tokens:S},semantic:{css:N,tokens:I},global:{css:x,tokens:D},style:b}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:o,selector:s}){var c,l,a;let p,f,d;if(h(i)&&e.transform!=="strict"){let u=t.replace("-directive",""),g=i,{colorScheme:S,extend:N,css:I}=g,x=w(g,["colorScheme","extend","css"]),D=N||{},{colorScheme:b}=D,G=w(D,["colorScheme"]),K=S||{},{dark:j}=K,$=w(K,["dark"]),Y=b||{},{dark:z}=Y,q=w(Y,["dark"]),Z=h(x)?this._toVariables({[u]:v(v({},x),G)},e):{},W=h($)?this._toVariables({[u]:v(v({},$),q)},e):{},U=h(j)?this._toVariables({[u]:v(v({},j),z)},e):{},[Q,J]=[(c=Z.declarations)!=null?c:"",Z.tokens||[]],[X,tt]=[(l=W.declarations)!=null?l:"",W.tokens||[]],[et,it]=[(a=U.declarations)!=null?a:"",U.tokens||[]],nt=this.transformCSS(u,`${Q}${X}`,"light","variable",e,r,o,s),rt=this.transformCSS(u,et,"dark","variable",e,r,o,s);p=`${nt}${rt}`,f=[...new Set([...J,...tt,...it])],d=_(I,{dt:H})}return{css:p,tokens:f,style:d}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let{preset:s,options:c}=i,l=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:l,options:c,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let s=t.replace("-directive",""),{preset:c,options:l}=i,a=(o=c?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:a,options:l,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${_(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:i,params:e,set:r,defaults:o}),c=Object.entries(n).reduce((l,[a,p])=>l.push(`${a}="${p}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[a,p])=>{if(p?.css){let f=F(p?.css),d=`${a}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${d}" ${c}>${f}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){var s;let c={name:t,theme:i,params:e,set:r,defaults:o},l=(s=t.includes("-directive")?this.getPresetD(c):this.getPresetC(c))==null?void 0:s.css,a=Object.entries(n).reduce((p,[f,d])=>p.push(`${f}="${d}"`)&&p,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${a}>${F(l)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([o,s])=>{let c=E(o,i.variable.excludedKeyRegex)?e:e?`${e}.${dt(o)}`:dt(o),l=n?`${n}.${o}`:o;L(s)?this.createTokens(s,i,c,l,r):(r[c]||(r[c]={paths:[],computed(a,p={}){var f,d;return this.paths.length===1?(f=this.paths[0])==null?void 0:f.computed(this.paths[0].scheme,p.binding):a&&a!=="none"?(d=this.paths.find(u=>u.scheme===a))==null?void 0:d.computed(a,p.binding):this.paths.map(u=>u.computed(u.scheme,p[u.scheme]))}}),r[c].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(a,p={}){let f=/{([^}]*)}/g,d=s;if(p.name=this.path,p.binding||(p.binding={}),E(s,f)){let g=s.trim().replaceAll(f,I=>{var x;let D=I.replace(/{|}/g,""),b=(x=r[D])==null?void 0:x.computed(a,p);return ot(b)&&b.length===2?`light-dark(${b[0].value},${b[1].value})`:b?.value}),S=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,N=/var\([^)]+\)/g;d=E(g.replace(N,"0"),S)?`calc(${g})`:g}return V(p.binding)&&delete p.binding,{colorScheme:a,path:this.path,paths:p,value:d.includes("undefined")?void 0:d}}}))}),r},getTokenValue(t,i,e){var n;let o=(l=>l.split(".").filter(p=>!E(p.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,c=[(n=t[o])==null?void 0:n.computed(s)].flat().filter(l=>l);return c.length===1?c[0].value:c.reduce((l={},a)=>{let p=a,{colorScheme:f}=p,d=w(p,["colorScheme"]);return l[f]=d,l},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?k(h(i)?`${t}${i},${t} ${i}`:t,n):k(t,h(i)?k(i,n):n)},transformCSS(t,i,e,n,r={},o,s,c){if(h(i)){let{cssLayer:l}=r;if(n!=="style"){let a=this.getColorSchemeOption(r,s);i=e==="dark"?a.reduce((p,{type:f,selector:d})=>(h(d)&&(p+=d.includes("[CSS]")?d.replace("[CSS]",i):this.getSelectorRule(d,c,f,i)),p),""):k(c??":root",i)}if(l){let a={name:"primeui",order:"primeui"};L(l)&&(a.name=_(l.name,{name:t,type:n})),h(a.name)&&(i=k(`@layer ${a.name}`,i),o?.layerNames(a.name))}return i}return""}},m={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=ht(v({},i),{options:v(v({},this.defaults.options),i.options)}),this._tokens=T.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),O.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=ht(v({},this.theme),{preset:t}),this._tokens=T.createTokens(t,this.defaults),this.clearLoadedStyleNames(),O.emit("preset:change",t),O.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=ht(v({},this.theme),{options:t}),this.clearLoadedStyleNames(),O.emit("options:change",t),O.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return T.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return T.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return T.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return T.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return T.getPreset(r)},getLayerOrderCSS(t=""){return T.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return T.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return T.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return T.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),O.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&O.emit("theme:load"))}};var Te=0,Gt=(()=>{class t{document=R(st);use(e,n={}){let r=!1,o=e,s=null,{immediate:c=!0,manual:l=!1,name:a=`style_${++Te}`,id:p=void 0,media:f=void 0,nonce:d=void 0,first:u=!1,props:g={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${a}"]`)||p&&this.document.getElementById(p)||this.document.createElement("style"),!s.isConnected){o=e;let S=this.document.head;u&&S.firstChild?S.insertBefore(s,S.firstChild):S.appendChild(s),ut(s,{type:"text/css",media:f,nonce:d,"data-primeng-style-id":a})}return s.textContent!==o&&(s.textContent=o),{id:p,name:a,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ai={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},ve=({dt:t})=>`
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
`,Oe=({dt:t})=>`
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
`,Kt=(()=>{class t{name="base";useStyle=R(Gt);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},r=o=>o)=>{let o=r(_(e,{dt:H}));return o?this.useStyle.use(F(o),C({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>m.transformCSS(e.name||this.name,`${r}${n}`));loadGlobalCSS=(e={})=>this.load(Oe,e);loadGlobalTheme=(e={},n="")=>this.load(ve,e,(r="")=>m.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>m.getCommon(this.name,e);getComponentTheme=e=>m.getComponent(this.name,e);getDirectiveTheme=e=>m.getDirective(this.name,e);getPresetTheme=(e,n,r)=>m.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>m.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=_(this.css,{dt:H}),o=F(`${r}${e}`),s=Object.entries(n).reduce((c,[l,a])=>c.push(`${l}="${a}"`)&&c,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>m.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[m.getStyleSheet(this.name,e,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=_(this.theme,{dt:H}),c=F(m.transformCSS(o,s)),l=Object.entries(n).reduce((a,[p,f])=>a.push(`${p}="${f}"`)&&a,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${l}>${c}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ce=(()=>{class t{theme=M(void 0);csp=M({nonce:void 0});isThemeChanged=!1;document=R(st);baseStyle=R(Kt);constructor(){pt(()=>{O.on("theme:change",e=>{It(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),pt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){m.clearLoadedStyleNames(),O.clear()}onThemeChange(e){m.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!m.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,C({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,C({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},s),o),m.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ae=(()=>{class t extends Ce{ripple=M(!1);platformId=R(Ct);inputStyle=M(null);inputVariant=M(null);overlayOptions={};csp=M({nonce:void 0});filterMatchModeOptions={text:[y.STARTS_WITH,y.CONTAINS,y.NOT_CONTAINS,y.ENDS_WITH,y.EQUALS,y.NOT_EQUALS],numeric:[y.EQUALS,y.NOT_EQUALS,y.LESS_THAN,y.LESS_THAN_OR_EQUAL_TO,y.GREATER_THAN,y.GREATER_THAN_OR_EQUAL_TO],date:[y.DATE_IS,y.DATE_IS_NOT,y.DATE_BEFORE,y.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new B;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=C(C({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:o,inputVariant:s,theme:c,overlayOptions:l,translation:a,filterMatchModeOptions:p}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),o&&this.inputStyle.set(o),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),a&&this.setTranslation(a),p&&(this.filterMatchModeOptions=p),c&&this.setThemeConfig({theme:c,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ot(t)))(r||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Re=new Tt("PRIME_NG_CONFIG");function Fi(...t){let i=t?.map(n=>({provide:Re,useValue:n,multi:!1})),e=Nt(()=>{let n=R(Ae);t?.forEach(r=>n.setConfig(r))});return vt([...i,e])}export{we as a,V as b,Ft as c,De as d,ei as e,ii as f,ni as g,O as h,m as i,Ai as j,Kt as k,Ae as l,Fi as m};
