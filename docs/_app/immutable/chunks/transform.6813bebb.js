import{a as gn,t as wn}from"./index.f7b93ffc.js";import{I as yn}from"./scheduler.b11396de.js";function Di(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function xn(t,n){wn(t,1,1,()=>{n.delete(t.key)})}function Pi(t,n){t.f(),xn(t,n)}function Oi(t,n,e,r,i,s,o,a,u,f,l,h){let c=t.length,p=s.length,d=c;const _={};for(;d--;)_[t[d].key]=d;const y=[],q=new Map,k=new Map,T=[];for(d=p;d--;){const g=h(i,s,d),b=e(g);let N=o.get(b);N?r&&T.push(()=>N.p(g,n)):(N=f(b,g),N.c()),q.set(b,y[d]=N),b in _&&k.set(b,Math.abs(d-_[b]))}const D=new Set,P=new Set;function ht(g){gn(g,1),g.m(a,l),o.set(g.key,g),l=g.first,p--}for(;c&&p;){const g=y[p-1],b=t[c-1],N=g.key,J=b.key;g===b?(l=g.first,c--,p--):q.has(J)?!o.has(N)||D.has(N)?ht(g):P.has(J)?c--:k.get(N)>k.get(J)?(P.add(N),ht(g)):(D.add(J),c--):(u(b,o),c--)}for(;c--;){const g=t[c];q.has(g.key)||u(g,o)}for(;p;)ht(y[p-1]);return yn(T),y}function Li(t,n){return t==null||n==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}var vn={value:()=>{}};function Bt(){for(var t=0,n=arguments.length,e={},r;t<n;++t){if(!(r=arguments[t]+"")||r in e||/[\s.]/.test(r))throw new Error("illegal type: "+r);e[r]=[]}return new tt(e)}function tt(t){this._=t}function mn(t,n){return t.trim().split(/^|\s+/).map(function(e){var r="",i=e.indexOf(".");if(i>=0&&(r=e.slice(i+1),e=e.slice(0,i)),e&&!n.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:r}})}tt.prototype=Bt.prototype={constructor:tt,on:function(t,n){var e=this._,r=mn(t+"",e),i,s=-1,o=r.length;if(arguments.length<2){for(;++s<o;)if((i=(t=r[s]).type)&&(i=bn(e[i],t.name)))return i;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++s<o;)if(i=(t=r[s]).type)e[i]=St(e[i],t.name,n);else if(n==null)for(i in e)e[i]=St(e[i],t.name,null);return this},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new tt(t)},call:function(t,n){if((i=arguments.length-2)>0)for(var e=new Array(i),r=0,i,s;r<i;++r)e[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=this._[t],r=0,i=s.length;r<i;++r)s[r].value.apply(n,e)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,s=r.length;i<s;++i)r[i].value.apply(n,e)}};function bn(t,n){for(var e=0,r=t.length,i;e<r;++e)if((i=t[e]).name===n)return i.value}function St(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=vn,t=t.slice(0,r).concat(t.slice(r+1));break}return e!=null&&t.push({name:n,value:e}),t}var _t="http://www.w3.org/1999/xhtml";const Ct={svg:"http://www.w3.org/2000/svg",xhtml:_t,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ft(t){var n=t+="",e=n.indexOf(":");return e>=0&&(n=t.slice(0,e))!=="xmlns"&&(t=t.slice(e+1)),Ct.hasOwnProperty(n)?{space:Ct[n],local:t}:t}function Nn(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===_t&&n.documentElement.namespaceURI===_t?n.createElement(t):n.createElementNS(e,t)}}function An(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function zt(t){var n=ft(t);return(n.local?An:Nn)(n)}function $n(){}function bt(t){return t==null?$n:function(){return this.querySelector(t)}}function kn(t){typeof t!="function"&&(t=bt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var s=n[i],o=s.length,a=r[i]=new Array(o),u,f,l=0;l<o;++l)(u=s[l])&&(f=t.call(u,u.__data__,l,s))&&("__data__"in u&&(f.__data__=u.__data__),a[l]=f);return new v(r,this._parents)}function En(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function Sn(){return[]}function Ut(t){return t==null?Sn:function(){return this.querySelectorAll(t)}}function Cn(t){return function(){return En(t.apply(this,arguments))}}function Tn(t){typeof t=="function"?t=Cn(t):t=Ut(t);for(var n=this._groups,e=n.length,r=[],i=[],s=0;s<e;++s)for(var o=n[s],a=o.length,u,f=0;f<a;++f)(u=o[f])&&(r.push(t.call(u,u.__data__,f,o)),i.push(u));return new v(r,i)}function Kt(t){return function(){return this.matches(t)}}function Gt(t){return function(n){return n.matches(t)}}var Mn=Array.prototype.find;function Rn(t){return function(){return Mn.call(this.children,t)}}function In(){return this.firstElementChild}function Fn(t){return this.select(t==null?In:Rn(typeof t=="function"?t:Gt(t)))}var Hn=Array.prototype.filter;function Xn(){return Array.from(this.children)}function qn(t){return function(){return Hn.call(this.children,t)}}function Dn(t){return this.selectAll(t==null?Xn:qn(typeof t=="function"?t:Gt(t)))}function Pn(t){typeof t!="function"&&(t=Kt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var s=n[i],o=s.length,a=r[i]=[],u,f=0;f<o;++f)(u=s[f])&&t.call(u,u.__data__,f,s)&&a.push(u);return new v(r,this._parents)}function Wt(t){return new Array(t.length)}function On(){return new v(this._enter||this._groups.map(Wt),this._parents)}function rt(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}rt.prototype={constructor:rt,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function Ln(t){return function(){return t}}function Vn(t,n,e,r,i,s){for(var o=0,a,u=n.length,f=s.length;o<f;++o)(a=n[o])?(a.__data__=s[o],r[o]=a):e[o]=new rt(t,s[o]);for(;o<u;++o)(a=n[o])&&(i[o]=a)}function Yn(t,n,e,r,i,s,o){var a,u,f=new Map,l=n.length,h=s.length,c=new Array(l),p;for(a=0;a<l;++a)(u=n[a])&&(c[a]=p=o.call(u,u.__data__,a,n)+"",f.has(p)?i[a]=u:f.set(p,u));for(a=0;a<h;++a)p=o.call(t,s[a],a,s)+"",(u=f.get(p))?(r[a]=u,u.__data__=s[a],f.delete(p)):e[a]=new rt(t,s[a]);for(a=0;a<l;++a)(u=n[a])&&f.get(c[a])===u&&(i[a]=u)}function Bn(t){return t.__data__}function zn(t,n){if(!arguments.length)return Array.from(this,Bn);var e=n?Yn:Vn,r=this._parents,i=this._groups;typeof t!="function"&&(t=Ln(t));for(var s=i.length,o=new Array(s),a=new Array(s),u=new Array(s),f=0;f<s;++f){var l=r[f],h=i[f],c=h.length,p=Un(t.call(l,l&&l.__data__,f,r)),d=p.length,_=a[f]=new Array(d),y=o[f]=new Array(d),q=u[f]=new Array(c);e(l,h,_,y,q,p,n);for(var k=0,T=0,D,P;k<d;++k)if(D=_[k]){for(k>=T&&(T=k+1);!(P=y[T])&&++T<d;);D._next=P||null}}return o=new v(o,r),o._enter=a,o._exit=u,o}function Un(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Kn(){return new v(this._exit||this._groups.map(Wt),this._parents)}function Gn(t,n,e){var r=this.enter(),i=this,s=this.exit();return typeof t=="function"?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),n!=null&&(i=n(i),i&&(i=i.selection())),e==null?s.remove():e(s),r&&i?r.merge(i).order():i}function Wn(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,s=r.length,o=Math.min(i,s),a=new Array(i),u=0;u<o;++u)for(var f=e[u],l=r[u],h=f.length,c=a[u]=new Array(h),p,d=0;d<h;++d)(p=f[d]||l[d])&&(c[d]=p);for(;u<i;++u)a[u]=e[u];return new v(a,this._parents)}function Jn(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r=t[n],i=r.length-1,s=r[i],o;--i>=0;)(o=r[i])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function Qn(t){t||(t=Zn);function n(h,c){return h&&c?t(h.__data__,c.__data__):!h-!c}for(var e=this._groups,r=e.length,i=new Array(r),s=0;s<r;++s){for(var o=e[s],a=o.length,u=i[s]=new Array(a),f,l=0;l<a;++l)(f=o[l])&&(u[l]=f);u.sort(n)}return new v(i,this._parents).order()}function Zn(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function jn(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function te(){return Array.from(this)}function ne(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,s=r.length;i<s;++i){var o=r[i];if(o)return o}return null}function ee(){let t=0;for(const n of this)++t;return t}function re(){return!this.node()}function ie(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i=n[e],s=0,o=i.length,a;s<o;++s)(a=i[s])&&t.call(a,a.__data__,s,i);return this}function se(t){return function(){this.removeAttribute(t)}}function oe(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ae(t,n){return function(){this.setAttribute(t,n)}}function ue(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function fe(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttribute(t):this.setAttribute(t,e)}}function le(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function ce(t,n){var e=ft(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((n==null?e.local?oe:se:typeof n=="function"?e.local?le:fe:e.local?ue:ae)(e,n))}function Jt(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function he(t){return function(){this.style.removeProperty(t)}}function pe(t,n,e){return function(){this.style.setProperty(t,n,e)}}function de(t,n,e){return function(){var r=n.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function _e(t,n,e){return arguments.length>1?this.each((n==null?he:typeof n=="function"?de:pe)(t,n,e??"")):H(this.node(),t)}function H(t,n){return t.style.getPropertyValue(n)||Jt(t).getComputedStyle(t,null).getPropertyValue(n)}function ge(t){return function(){delete this[t]}}function we(t,n){return function(){this[t]=n}}function ye(t,n){return function(){var e=n.apply(this,arguments);e==null?delete this[t]:this[t]=e}}function xe(t,n){return arguments.length>1?this.each((n==null?ge:typeof n=="function"?ye:we)(t,n)):this.node()[t]}function Qt(t){return t.trim().split(/^|\s+/)}function Nt(t){return t.classList||new Zt(t)}function Zt(t){this._node=t,this._names=Qt(t.getAttribute("class")||"")}Zt.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function jt(t,n){for(var e=Nt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function tn(t,n){for(var e=Nt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function ve(t){return function(){jt(this,t)}}function me(t){return function(){tn(this,t)}}function be(t,n){return function(){(n.apply(this,arguments)?jt:tn)(this,t)}}function Ne(t,n){var e=Qt(t+"");if(arguments.length<2){for(var r=Nt(this.node()),i=-1,s=e.length;++i<s;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof n=="function"?be:n?ve:me)(e,n))}function Ae(){this.textContent=""}function $e(t){return function(){this.textContent=t}}function ke(t){return function(){var n=t.apply(this,arguments);this.textContent=n??""}}function Ee(t){return arguments.length?this.each(t==null?Ae:(typeof t=="function"?ke:$e)(t)):this.node().textContent}function Se(){this.innerHTML=""}function Ce(t){return function(){this.innerHTML=t}}function Te(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n??""}}function Me(t){return arguments.length?this.each(t==null?Se:(typeof t=="function"?Te:Ce)(t)):this.node().innerHTML}function Re(){this.nextSibling&&this.parentNode.appendChild(this)}function Ie(){return this.each(Re)}function Fe(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function He(){return this.each(Fe)}function Xe(t){var n=typeof t=="function"?t:zt(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function qe(){return null}function De(t,n){var e=typeof t=="function"?t:zt(t),r=n==null?qe:typeof n=="function"?n:bt(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function Pe(){var t=this.parentNode;t&&t.removeChild(this)}function Oe(){return this.each(Pe)}function Le(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Ve(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Ye(t){return this.select(t?Ve:Le)}function Be(t){return arguments.length?this.property("__data__",t):this.node().__data__}function ze(t){return function(n){t.call(this,n,this.__data__)}}function Ue(t){return t.trim().split(/^|\s+/).map(function(n){var e="",r=n.indexOf(".");return r>=0&&(e=n.slice(r+1),n=n.slice(0,r)),{type:n,name:e}})}function Ke(t){return function(){var n=this.__on;if(n){for(var e=0,r=-1,i=n.length,s;e<i;++e)s=n[e],(!t.type||s.type===t.type)&&s.name===t.name?this.removeEventListener(s.type,s.listener,s.options):n[++r]=s;++r?n.length=r:delete this.__on}}}function Ge(t,n,e){return function(){var r=this.__on,i,s=ze(n);if(r){for(var o=0,a=r.length;o<a;++o)if((i=r[o]).type===t.type&&i.name===t.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=e),i.value=n;return}}this.addEventListener(t.type,s,e),i={type:t.type,name:t.name,value:n,listener:s,options:e},r?r.push(i):this.__on=[i]}}function We(t,n,e){var r=Ue(t+""),i,s=r.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var u=0,f=a.length,l;u<f;++u)for(i=0,l=a[u];i<s;++i)if((o=r[i]).type===l.type&&o.name===l.name)return l.value}return}for(a=n?Ge:Ke,i=0;i<s;++i)this.each(a(r[i],n,e));return this}function nn(t,n,e){var r=Jt(t),i=r.CustomEvent;typeof i=="function"?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function Je(t,n){return function(){return nn(this,t,n)}}function Qe(t,n){return function(){return nn(this,t,n.apply(this,arguments))}}function Ze(t,n){return this.each((typeof n=="function"?Qe:Je)(t,n))}function*je(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,s=r.length,o;i<s;++i)(o=r[i])&&(yield o)}var tr=[null];function v(t,n){this._groups=t,this._parents=n}function G(){return new v([[document.documentElement]],tr)}function nr(){return this}v.prototype=G.prototype={constructor:v,select:kn,selectAll:Tn,selectChild:Fn,selectChildren:Dn,filter:Pn,data:zn,enter:On,exit:Kn,join:Gn,merge:Wn,selection:nr,order:Jn,sort:Qn,call:jn,nodes:te,node:ne,size:ee,empty:re,each:ie,attr:ce,style:_e,property:xe,classed:Ne,text:Ee,html:Me,raise:Ie,lower:He,append:Xe,insert:De,remove:Oe,clone:Ye,datum:Be,on:We,dispatch:Ze,[Symbol.iterator]:je};function At(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function en(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function W(){}var B=.7,it=1/B,F="\\s*([+-]?\\d+)\\s*",z="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",A="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",er=/^#([0-9a-f]{3,8})$/,rr=new RegExp(`^rgb\\(${F},${F},${F}\\)$`),ir=new RegExp(`^rgb\\(${A},${A},${A}\\)$`),sr=new RegExp(`^rgba\\(${F},${F},${F},${z}\\)$`),or=new RegExp(`^rgba\\(${A},${A},${A},${z}\\)$`),ar=new RegExp(`^hsl\\(${z},${A},${A}\\)$`),ur=new RegExp(`^hsla\\(${z},${A},${A},${z}\\)$`),Tt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};At(W,U,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Mt,formatHex:Mt,formatHex8:fr,formatHsl:lr,formatRgb:Rt,toString:Rt});function Mt(){return this.rgb().formatHex()}function fr(){return this.rgb().formatHex8()}function lr(){return rn(this).formatHsl()}function Rt(){return this.rgb().formatRgb()}function U(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=er.exec(t))?(e=n[1].length,n=parseInt(n[1],16),e===6?It(n):e===3?new w(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):e===8?Q(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):e===4?Q(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=rr.exec(t))?new w(n[1],n[2],n[3],1):(n=ir.exec(t))?new w(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=sr.exec(t))?Q(n[1],n[2],n[3],n[4]):(n=or.exec(t))?Q(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=ar.exec(t))?Xt(n[1],n[2]/100,n[3]/100,1):(n=ur.exec(t))?Xt(n[1],n[2]/100,n[3]/100,n[4]):Tt.hasOwnProperty(t)?It(Tt[t]):t==="transparent"?new w(NaN,NaN,NaN,0):null}function It(t){return new w(t>>16&255,t>>8&255,t&255,1)}function Q(t,n,e,r){return r<=0&&(t=n=e=NaN),new w(t,n,e,r)}function cr(t){return t instanceof W||(t=U(t)),t?(t=t.rgb(),new w(t.r,t.g,t.b,t.opacity)):new w}function gt(t,n,e,r){return arguments.length===1?cr(t):new w(t,n,e,r??1)}function w(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}At(w,gt,en(W,{brighter(t){return t=t==null?it:Math.pow(it,t),new w(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?B:Math.pow(B,t),new w(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new w(R(this.r),R(this.g),R(this.b),st(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ft,formatHex:Ft,formatHex8:hr,formatRgb:Ht,toString:Ht}));function Ft(){return`#${M(this.r)}${M(this.g)}${M(this.b)}`}function hr(){return`#${M(this.r)}${M(this.g)}${M(this.b)}${M((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ht(){const t=st(this.opacity);return`${t===1?"rgb(":"rgba("}${R(this.r)}, ${R(this.g)}, ${R(this.b)}${t===1?")":`, ${t})`}`}function st(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function R(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function M(t){return t=R(t),(t<16?"0":"")+t.toString(16)}function Xt(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new x(t,n,e,r)}function rn(t){if(t instanceof x)return new x(t.h,t.s,t.l,t.opacity);if(t instanceof W||(t=U(t)),!t)return new x;if(t instanceof x)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),s=Math.max(n,e,r),o=NaN,a=s-i,u=(s+i)/2;return a?(n===s?o=(e-r)/a+(e<r)*6:e===s?o=(r-n)/a+2:o=(n-e)/a+4,a/=u<.5?s+i:2-s-i,o*=60):a=u>0&&u<1?0:o,new x(o,a,u,t.opacity)}function pr(t,n,e,r){return arguments.length===1?rn(t):new x(t,n,e,r??1)}function x(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}At(x,pr,en(W,{brighter(t){return t=t==null?it:Math.pow(it,t),new x(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?B:Math.pow(B,t),new x(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new w(pt(t>=240?t-240:t+120,i,r),pt(t,i,r),pt(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new x(qt(this.h),Z(this.s),Z(this.l),st(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=st(this.opacity);return`${t===1?"hsl(":"hsla("}${qt(this.h)}, ${Z(this.s)*100}%, ${Z(this.l)*100}%${t===1?")":`, ${t})`}`}}));function qt(t){return t=(t||0)%360,t<0?t+360:t}function Z(t){return Math.max(0,Math.min(1,t||0))}function pt(t,n,e){return(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)*255}const sn=t=>()=>t;function dr(t,n){return function(e){return t+e*n}}function _r(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function gr(t){return(t=+t)==1?on:function(n,e){return e-n?_r(n,e,t):sn(isNaN(n)?e:n)}}function on(t,n){var e=n-t;return e?dr(t,e):sn(isNaN(t)?n:t)}const Dt=function t(n){var e=gr(n);function r(i,s){var o=e((i=gt(i)).r,(s=gt(s)).r),a=e(i.g,s.g),u=e(i.b,s.b),f=on(i.opacity,s.opacity);return function(l){return i.r=o(l),i.g=a(l),i.b=u(l),i.opacity=f(l),i+""}}return r.gamma=t,r}(1);function C(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}var wt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,dt=new RegExp(wt.source,"g");function wr(t){return function(){return t}}function yr(t){return function(n){return t(n)+""}}function xr(t,n){var e=wt.lastIndex=dt.lastIndex=0,r,i,s,o=-1,a=[],u=[];for(t=t+"",n=n+"";(r=wt.exec(t))&&(i=dt.exec(n));)(s=i.index)>e&&(s=n.slice(e,s),a[o]?a[o]+=s:a[++o]=s),(r=r[0])===(i=i[0])?a[o]?a[o]+=i:a[++o]=i:(a[++o]=null,u.push({i:o,x:C(r,i)})),e=dt.lastIndex;return e<n.length&&(s=n.slice(e),a[o]?a[o]+=s:a[++o]=s),a.length<2?u[0]?yr(u[0].x):wr(n):(n=u.length,function(f){for(var l=0,h;l<n;++l)a[(h=u[l]).i]=h.x(f);return a.join("")})}var Pt=180/Math.PI,yt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function an(t,n,e,r,i,s){var o,a,u;return(o=Math.sqrt(t*t+n*n))&&(t/=o,n/=o),(u=t*e+n*r)&&(e-=t*u,r-=n*u),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,u/=a),t*r<n*e&&(t=-t,n=-n,u=-u,o=-o),{translateX:i,translateY:s,rotate:Math.atan2(n,t)*Pt,skewX:Math.atan(u)*Pt,scaleX:o,scaleY:a}}var j;function vr(t){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?yt:an(n.a,n.b,n.c,n.d,n.e,n.f)}function mr(t){return t==null||(j||(j=document.createElementNS("http://www.w3.org/2000/svg","g")),j.setAttribute("transform",t),!(t=j.transform.baseVal.consolidate()))?yt:(t=t.matrix,an(t.a,t.b,t.c,t.d,t.e,t.f))}function un(t,n,e,r){function i(f){return f.length?f.pop()+" ":""}function s(f,l,h,c,p,d){if(f!==h||l!==c){var _=p.push("translate(",null,n,null,e);d.push({i:_-4,x:C(f,h)},{i:_-2,x:C(l,c)})}else(h||c)&&p.push("translate("+h+n+c+e)}function o(f,l,h,c){f!==l?(f-l>180?l+=360:l-f>180&&(f+=360),c.push({i:h.push(i(h)+"rotate(",null,r)-2,x:C(f,l)})):l&&h.push(i(h)+"rotate("+l+r)}function a(f,l,h,c){f!==l?c.push({i:h.push(i(h)+"skewX(",null,r)-2,x:C(f,l)}):l&&h.push(i(h)+"skewX("+l+r)}function u(f,l,h,c,p,d){if(f!==h||l!==c){var _=p.push(i(p)+"scale(",null,",",null,")");d.push({i:_-4,x:C(f,h)},{i:_-2,x:C(l,c)})}else(h!==1||c!==1)&&p.push(i(p)+"scale("+h+","+c+")")}return function(f,l){var h=[],c=[];return f=t(f),l=t(l),s(f.translateX,f.translateY,l.translateX,l.translateY,h,c),o(f.rotate,l.rotate,h,c),a(f.skewX,l.skewX,h,c),u(f.scaleX,f.scaleY,l.scaleX,l.scaleY,h,c),f=l=null,function(p){for(var d=-1,_=c.length,y;++d<_;)h[(y=c[d]).i]=y.x(p);return h.join("")}}}var br=un(vr,"px, ","px)","deg)"),Nr=un(mr,", ",")",")"),X=0,L=0,O=0,fn=1e3,ot,V,at=0,I=0,lt=0,K=typeof performance=="object"&&performance.now?performance:Date,ln=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function $t(){return I||(ln(Ar),I=K.now()+lt)}function Ar(){I=0}function ut(){this._call=this._time=this._next=null}ut.prototype=cn.prototype={constructor:ut,restart:function(t,n,e){if(typeof t!="function")throw new TypeError("callback is not a function");e=(e==null?$t():+e)+(n==null?0:+n),!this._next&&V!==this&&(V?V._next=this:ot=this,V=this),this._call=t,this._time=e,xt()},stop:function(){this._call&&(this._call=null,this._time=1/0,xt())}};function cn(t,n,e){var r=new ut;return r.restart(t,n,e),r}function $r(){$t(),++X;for(var t=ot,n;t;)(n=I-t._time)>=0&&t._call.call(void 0,n),t=t._next;--X}function Ot(){I=(at=K.now())+lt,X=L=0;try{$r()}finally{X=0,Er(),I=0}}function kr(){var t=K.now(),n=t-at;n>fn&&(lt-=n,at=t)}function Er(){for(var t,n=ot,e,r=1/0;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:ot=e);V=t,xt(r)}function xt(t){if(!X){L&&(L=clearTimeout(L));var n=t-I;n>24?(t<1/0&&(L=setTimeout(Ot,t-K.now()-lt)),O&&(O=clearInterval(O))):(O||(at=K.now(),O=setInterval(kr,fn)),X=1,ln(Ot))}}function Lt(t,n,e){var r=new ut;return n=n==null?0:+n,r.restart(i=>{r.stop(),t(i+n)},n,e),r}var Sr=Bt("start","end","cancel","interrupt"),Cr=[],hn=0,Vt=1,vt=2,nt=3,Yt=4,mt=5,et=6;function ct(t,n,e,r,i,s){var o=t.__transition;if(!o)t.__transition={};else if(e in o)return;Tr(t,e,{name:n,index:r,group:i,on:Sr,tween:Cr,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:hn})}function kt(t,n){var e=m(t,n);if(e.state>hn)throw new Error("too late; already scheduled");return e}function $(t,n){var e=m(t,n);if(e.state>nt)throw new Error("too late; already running");return e}function m(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Tr(t,n,e){var r=t.__transition,i;r[n]=e,e.timer=cn(s,0,e.time);function s(f){e.state=Vt,e.timer.restart(o,e.delay,e.time),e.delay<=f&&o(f-e.delay)}function o(f){var l,h,c,p;if(e.state!==Vt)return u();for(l in r)if(p=r[l],p.name===e.name){if(p.state===nt)return Lt(o);p.state===Yt?(p.state=et,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete r[l]):+l<n&&(p.state=et,p.timer.stop(),p.on.call("cancel",t,t.__data__,p.index,p.group),delete r[l])}if(Lt(function(){e.state===nt&&(e.state=Yt,e.timer.restart(a,e.delay,e.time),a(f))}),e.state=vt,e.on.call("start",t,t.__data__,e.index,e.group),e.state===vt){for(e.state=nt,i=new Array(c=e.tween.length),l=0,h=-1;l<c;++l)(p=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(i[++h]=p);i.length=h+1}}function a(f){for(var l=f<e.duration?e.ease.call(null,f/e.duration):(e.timer.restart(u),e.state=mt,1),h=-1,c=i.length;++h<c;)i[h].call(t,l);e.state===mt&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){e.state=et,e.timer.stop(),delete r[n];for(var f in r)return;delete t.__transition}}function Mr(t,n){var e=t.__transition,r,i,s=!0,o;if(e){n=n==null?null:n+"";for(o in e){if((r=e[o]).name!==n){s=!1;continue}i=r.state>vt&&r.state<mt,r.state=et,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete e[o]}s&&delete t.__transition}}function Rr(t){return this.each(function(){Mr(this,t)})}function Ir(t,n){var e,r;return function(){var i=$(this,t),s=i.tween;if(s!==e){r=e=s;for(var o=0,a=r.length;o<a;++o)if(r[o].name===n){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function Fr(t,n,e){var r,i;if(typeof e!="function")throw new Error;return function(){var s=$(this,t),o=s.tween;if(o!==r){i=(r=o).slice();for(var a={name:n,value:e},u=0,f=i.length;u<f;++u)if(i[u].name===n){i[u]=a;break}u===f&&i.push(a)}s.tween=i}}function Hr(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r=m(this.node(),e).tween,i=0,s=r.length,o;i<s;++i)if((o=r[i]).name===t)return o.value;return null}return this.each((n==null?Ir:Fr)(e,t,n))}function Et(t,n,e){var r=t._id;return t.each(function(){var i=$(this,r);(i.value||(i.value={}))[n]=e.apply(this,arguments)}),function(i){return m(i,r).value[n]}}function pn(t,n){var e;return(typeof n=="number"?C:n instanceof U?Dt:(e=U(n))?(n=e,Dt):xr)(t,n)}function Xr(t){return function(){this.removeAttribute(t)}}function qr(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Dr(t,n,e){var r,i=e+"",s;return function(){var o=this.getAttribute(t);return o===i?null:o===r?s:s=n(r=o,e)}}function Pr(t,n,e){var r,i=e+"",s;return function(){var o=this.getAttributeNS(t.space,t.local);return o===i?null:o===r?s:s=n(r=o,e)}}function Or(t,n,e){var r,i,s;return function(){var o,a=e(this),u;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),u=a+"",o===u?null:o===r&&u===i?s:(i=u,s=n(r=o,a)))}}function Lr(t,n,e){var r,i,s;return function(){var o,a=e(this),u;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),u=a+"",o===u?null:o===r&&u===i?s:(i=u,s=n(r=o,a)))}}function Vr(t,n){var e=ft(t),r=e==="transform"?Nr:pn;return this.attrTween(t,typeof n=="function"?(e.local?Lr:Or)(e,r,Et(this,"attr."+t,n)):n==null?(e.local?qr:Xr)(e):(e.local?Pr:Dr)(e,r,n))}function Yr(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function Br(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function zr(t,n){var e,r;function i(){var s=n.apply(this,arguments);return s!==r&&(e=(r=s)&&Br(t,s)),e}return i._value=n,i}function Ur(t,n){var e,r;function i(){var s=n.apply(this,arguments);return s!==r&&(e=(r=s)&&Yr(t,s)),e}return i._value=n,i}function Kr(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;var r=ft(t);return this.tween(e,(r.local?zr:Ur)(r,n))}function Gr(t,n){return function(){kt(this,t).delay=+n.apply(this,arguments)}}function Wr(t,n){return n=+n,function(){kt(this,t).delay=n}}function Jr(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Gr:Wr)(n,t)):m(this.node(),n).delay}function Qr(t,n){return function(){$(this,t).duration=+n.apply(this,arguments)}}function Zr(t,n){return n=+n,function(){$(this,t).duration=n}}function jr(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Qr:Zr)(n,t)):m(this.node(),n).duration}function ti(t,n){if(typeof n!="function")throw new Error;return function(){$(this,t).ease=n}}function ni(t){var n=this._id;return arguments.length?this.each(ti(n,t)):m(this.node(),n).ease}function ei(t,n){return function(){var e=n.apply(this,arguments);if(typeof e!="function")throw new Error;$(this,t).ease=e}}function ri(t){if(typeof t!="function")throw new Error;return this.each(ei(this._id,t))}function ii(t){typeof t!="function"&&(t=Kt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var s=n[i],o=s.length,a=r[i]=[],u,f=0;f<o;++f)(u=s[f])&&t.call(u,u.__data__,f,s)&&a.push(u);return new S(r,this._parents,this._name,this._id)}function si(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,s=Math.min(r,i),o=new Array(r),a=0;a<s;++a)for(var u=n[a],f=e[a],l=u.length,h=o[a]=new Array(l),c,p=0;p<l;++p)(c=u[p]||f[p])&&(h[p]=c);for(;a<r;++a)o[a]=n[a];return new S(o,this._parents,this._name,this._id)}function oi(t){return(t+"").trim().split(/^|\s+/).every(function(n){var e=n.indexOf(".");return e>=0&&(n=n.slice(0,e)),!n||n==="start"})}function ai(t,n,e){var r,i,s=oi(n)?kt:$;return function(){var o=s(this,t),a=o.on;a!==r&&(i=(r=a).copy()).on(n,e),o.on=i}}function ui(t,n){var e=this._id;return arguments.length<2?m(this.node(),e).on.on(t):this.each(ai(e,t,n))}function fi(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function li(){return this.on("end.remove",fi(this._id))}function ci(t){var n=this._name,e=this._id;typeof t!="function"&&(t=bt(t));for(var r=this._groups,i=r.length,s=new Array(i),o=0;o<i;++o)for(var a=r[o],u=a.length,f=s[o]=new Array(u),l,h,c=0;c<u;++c)(l=a[c])&&(h=t.call(l,l.__data__,c,a))&&("__data__"in l&&(h.__data__=l.__data__),f[c]=h,ct(f[c],n,e,c,f,m(l,e)));return new S(s,this._parents,n,e)}function hi(t){var n=this._name,e=this._id;typeof t!="function"&&(t=Ut(t));for(var r=this._groups,i=r.length,s=[],o=[],a=0;a<i;++a)for(var u=r[a],f=u.length,l,h=0;h<f;++h)if(l=u[h]){for(var c=t.call(l,l.__data__,h,u),p,d=m(l,e),_=0,y=c.length;_<y;++_)(p=c[_])&&ct(p,n,e,_,c,d);s.push(c),o.push(l)}return new S(s,o,n,e)}var pi=G.prototype.constructor;function di(){return new pi(this._groups,this._parents)}function _i(t,n){var e,r,i;return function(){var s=H(this,t),o=(this.style.removeProperty(t),H(this,t));return s===o?null:s===e&&o===r?i:i=n(e=s,r=o)}}function dn(t){return function(){this.style.removeProperty(t)}}function gi(t,n,e){var r,i=e+"",s;return function(){var o=H(this,t);return o===i?null:o===r?s:s=n(r=o,e)}}function wi(t,n,e){var r,i,s;return function(){var o=H(this,t),a=e(this),u=a+"";return a==null&&(u=a=(this.style.removeProperty(t),H(this,t))),o===u?null:o===r&&u===i?s:(i=u,s=n(r=o,a))}}function yi(t,n){var e,r,i,s="style."+n,o="end."+s,a;return function(){var u=$(this,t),f=u.on,l=u.value[s]==null?a||(a=dn(n)):void 0;(f!==e||i!==l)&&(r=(e=f).copy()).on(o,i=l),u.on=r}}function xi(t,n,e){var r=(t+="")=="transform"?br:pn;return n==null?this.styleTween(t,_i(t,r)).on("end.style."+t,dn(t)):typeof n=="function"?this.styleTween(t,wi(t,r,Et(this,"style."+t,n))).each(yi(this._id,t)):this.styleTween(t,gi(t,r,n),e).on("end.style."+t,null)}function vi(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function mi(t,n,e){var r,i;function s(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&vi(t,o,e)),r}return s._value=n,s}function bi(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,mi(t,n,e??""))}function Ni(t){return function(){this.textContent=t}}function Ai(t){return function(){var n=t(this);this.textContent=n??""}}function $i(t){return this.tween("text",typeof t=="function"?Ai(Et(this,"text",t)):Ni(t==null?"":t+""))}function ki(t){return function(n){this.textContent=t.call(this,n)}}function Ei(t){var n,e;function r(){var i=t.apply(this,arguments);return i!==e&&(n=(e=i)&&ki(i)),n}return r._value=t,r}function Si(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,Ei(t))}function Ci(){for(var t=this._name,n=this._id,e=_n(),r=this._groups,i=r.length,s=0;s<i;++s)for(var o=r[s],a=o.length,u,f=0;f<a;++f)if(u=o[f]){var l=m(u,n);ct(u,t,e,f,o,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new S(r,this._parents,t,e)}function Ti(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(s,o){var a={value:o},u={value:function(){--i===0&&s()}};e.each(function(){var f=$(this,r),l=f.on;l!==t&&(n=(t=l).copy(),n._.cancel.push(a),n._.interrupt.push(a),n._.end.push(u)),f.on=n}),i===0&&s()})}var Mi=0;function S(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function _n(){return++Mi}var E=G.prototype;S.prototype={constructor:S,select:ci,selectAll:hi,selectChild:E.selectChild,selectChildren:E.selectChildren,filter:ii,merge:si,selection:di,transition:Ci,call:E.call,nodes:E.nodes,node:E.node,size:E.size,empty:E.empty,each:E.each,on:ui,attr:Vr,attrTween:Kr,style:xi,styleTween:bi,text:$i,textTween:Si,remove:li,tween:Hr,delay:Jr,duration:jr,ease:ni,easeVarying:ri,end:Ti,[Symbol.iterator]:E[Symbol.iterator]};function Ri(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Ii={time:null,delay:0,duration:250,ease:Ri};function Fi(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}function Hi(t){var n,e;t instanceof S?(n=t._id,t=t._name):(n=_n(),(e=Ii).time=$t(),t=t==null?null:t+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var o=r[s],a=o.length,u,f=0;f<a;++f)(u=o[f])&&ct(u,t,n,f,o,e||Fi(u,n));return new S(r,this._parents,t,n)}G.prototype.interrupt=Rr;G.prototype.transition=Hi;function Y(t,n,e){this.k=t,this.x=n,this.y=e}Y.prototype={constructor:Y,scale:function(t){return t===1?this:new Y(this.k*t,this.x,this.y)},translate:function(t,n){return t===0&n===0?this:new Y(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Y.prototype;export{v as S,U as a,Dt as b,sn as c,Li as d,Di as e,xr as f,Bt as g,Pi as h,C as i,tr as r,cn as t,Oi as u};
