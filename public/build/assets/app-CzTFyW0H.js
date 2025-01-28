function Le(e,t){return function(){return e.apply(t,arguments)}}const{toString:et}=Object.prototype,{getPrototypeOf:le}=Object,W=(e=>t=>{const n=et.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>W(t)===e),K=e=>t=>typeof t===e,{isArray:D}=Array,j=K("undefined");function tt(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ne=C("ArrayBuffer");function nt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ne(e.buffer),t}const rt=K("string"),x=K("function"),Fe=K("number"),X=e=>e!==null&&typeof e=="object",st=e=>e===!0||e===!1,H=e=>{if(W(e)!=="object")return!1;const t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ot=C("Date"),it=C("File"),at=C("Blob"),ct=C("FileList"),lt=e=>X(e)&&x(e.pipe),ut=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=W(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},ft=C("URLSearchParams"),[dt,ht,mt,pt]=["ReadableStream","Request","Response","Headers"].map(C),yt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),D(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Pe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const _=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_e=e=>!j(e)&&e!==_;function re(){const{caseless:e}=_e(this)&&this||{},t={},n=(r,s)=>{const o=e&&Pe(t,s)||s;H(t[o])&&H(r)?t[o]=re(t[o],r):H(r)?t[o]=re({},r):D(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&q(arguments[r],n);return t}const gt=(e,t,n,{allOwnKeys:r}={})=>(q(t,(s,o)=>{n&&x(s)?e[o]=Le(s,n):e[o]=s},{allOwnKeys:r}),e),wt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),bt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Et=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},St=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Rt=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ot=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&le(Uint8Array)),Tt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},At=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},xt=C("HTMLFormElement"),Ct=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),me=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Lt=C("RegExp"),ke=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};q(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Nt=e=>{ke(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ft=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return D(e)?r(e):r(String(e).split(t)),n},Pt=()=>{},_t=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Y="abcdefghijklmnopqrstuvwxyz",pe="0123456789",Be={DIGIT:pe,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+pe},kt=(e=16,t=Be.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Bt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Dt=e=>{const t=new Array(10),n=(r,s)=>{if(X(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=D(r)?[]:{};return q(r,(i,c)=>{const f=n(i,s+1);!j(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Ut=C("AsyncFunction"),It=e=>e&&(X(e)||x(e))&&x(e.then)&&x(e.catch),De=((e,t)=>e?setImmediate:t?((n,r)=>(_.addEventListener("message",({source:s,data:o})=>{s===_&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),_.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",x(_.postMessage)),jt=typeof queueMicrotask<"u"?queueMicrotask.bind(_):typeof process<"u"&&process.nextTick||De,a={isArray:D,isArrayBuffer:Ne,isBuffer:tt,isFormData:ut,isArrayBufferView:nt,isString:rt,isNumber:Fe,isBoolean:st,isObject:X,isPlainObject:H,isReadableStream:dt,isRequest:ht,isResponse:mt,isHeaders:pt,isUndefined:j,isDate:ot,isFile:it,isBlob:at,isRegExp:Lt,isFunction:x,isStream:lt,isURLSearchParams:ft,isTypedArray:Ot,isFileList:ct,forEach:q,merge:re,extend:gt,trim:yt,stripBOM:wt,inherits:bt,toFlatObject:Et,kindOf:W,kindOfTest:C,endsWith:St,toArray:Rt,forEachEntry:Tt,matchAll:At,isHTMLForm:xt,hasOwnProperty:me,hasOwnProp:me,reduceDescriptors:ke,freezeMethods:Nt,toObjectSet:Ft,toCamelCase:Ct,noop:Pt,toFiniteNumber:_t,findKey:Pe,global:_,isContextDefined:_e,ALPHABET:Be,generateString:kt,isSpecCompliantForm:Bt,toJSONObject:Dt,isAsyncFn:Ut,isThenable:It,setImmediate:De,asap:jt};function p(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(p,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Ue=p.prototype,Ie={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ie[e]={value:e}});Object.defineProperties(p,Ie);Object.defineProperty(Ue,"isAxiosError",{value:!0});p.from=(e,t,n,r,s,o)=>{const i=Object.create(Ue);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),p.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const qt=null;function se(e){return a.isPlainObject(e)||a.isArray(e)}function je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map(function(s,o){return s=je(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(se)}const Mt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,m){return!a.isUndefined(m[y])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!f&&a.isBlob(h))throw new p("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?f&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function u(h,y,m){let w=h;if(h&&!m&&typeof h=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&zt(h)||(a.isFileList(h)||a.endsWith(y,"[]"))&&(w=a.toArray(h)))return y=je(y),w.forEach(function(R,N){!(a.isUndefined(R)||R===null)&&t.append(i===!0?ye([y],N,o):i===null?y:y+"[]",l(R))}),!1}return se(h)?!0:(t.append(ye(m,y,o),l(h)),!1)}const d=[],g=Object.assign(Mt,{defaultVisitor:u,convertValue:l,isVisitable:se});function E(h,y){if(!a.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(h),a.forEach(h,function(w,S){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(S)?S.trim():S,y,g))===!0&&E(w,y?y.concat(S):[S])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function ge(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ue(e,t){this._pairs=[],e&&G(e,this,t)}const qe=ue.prototype;qe.append=function(t,n){this._pairs.push([t,n])};qe.toString=function(t){const n=t?function(r){return t.call(this,r,ge)}:ge;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ht(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ze(e,t,n){if(!t)return e;const r=n&&n.encode||Ht;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ue(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class we{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vt=typeof URLSearchParams<"u"?URLSearchParams:ue,Jt=typeof FormData<"u"?FormData:null,$t=typeof Blob<"u"?Blob:null,Vt={isBrowser:!0,classes:{URLSearchParams:vt,FormData:Jt,Blob:$t},protocols:["http","https","file","blob","url","data"]},fe=typeof window<"u"&&typeof document<"u",oe=typeof navigator=="object"&&navigator||void 0,Wt=fe&&(!oe||["ReactNative","NativeScript","NS"].indexOf(oe.product)<0),Kt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Xt=fe&&window.location.href||"http://localhost",Gt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:fe,hasStandardBrowserEnv:Wt,hasStandardBrowserWebWorkerEnv:Kt,navigator:oe,origin:Xt},Symbol.toStringTag,{value:"Module"})),O={...Gt,...Vt};function Qt(e,t){return G(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Zt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Yt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function He(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Yt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Zt(r),s,n,0)}),n}return null}function en(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const z={transitional:Me,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(He(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return G(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),en(t)):t}],transformResponse:[function(t){const n=this.transitional||z.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?p.from(c,p.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{z.headers[e]={}});const tn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&tn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},be=Symbol("internals");function I(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function rn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const sn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ee(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function on(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function an(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class A{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=I(f);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||f]=v(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!sn(t))i(nn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=I(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return rn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=I(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ee(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=I(i),i){const c=a.findKey(r,i);c&&(!n||ee(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ee(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=v(s),delete n[o];return}const c=t?on(o):String(o).trim();c!==o&&delete n[o],n[c]=v(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[be]=this[be]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=I(i);r[c]||(an(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function te(e,t){const n=this||z,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ve(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){p.call(this,e??"canceled",p.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,p,{__CANCEL__:!0});function Je(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new p("Request failed with status code "+n.status,[p.ERR_BAD_REQUEST,p.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function cn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ln(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let d=o,g=0;for(;d!==s;)g+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const E=u&&l-u;return E?Math.round(g*1e3/E):void 0}}function un(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const $=(e,t,n=3)=>{let r=0;const s=ln(50,250);return un(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},Ee=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Se=e=>(...t)=>a.asap(()=>e(...t)),fn=O.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,O.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,dn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function hn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function mn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function $e(e,t){return e&&!hn(t)?mn(e,t):t}const Re=e=>e instanceof A?{...e}:e;function B(e,t){t=t||{};const n={};function r(l,u,d,g){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:g},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,d,g){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,d,g)}else return r(l,u,d,g)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,d)=>s(Re(l),Re(u),d,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=f[u]||s,g=d(e[u],t[u],u);a.isUndefined(g)&&d!==c||(n[u]=g)}),n}const Ve=e=>{const t=B({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=ze($e(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&fn(t.url))){const l=s&&o&&dn.read(o);l&&i.set(s,l)}return t},pn=typeof XMLHttpRequest<"u",yn=pn&&function(e){return new Promise(function(n,r){const s=Ve(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=s,u,d,g,E,h;function y(){E&&E(),h&&h(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function w(){if(!m)return;const R=A.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),T={data:!c||c==="text"||c==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:R,config:e,request:m};Je(function(P){n(P),y()},function(P){r(P),y()},T),m=null}"onloadend"in m?m.onloadend=w:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(w)},m.onabort=function(){m&&(r(new p("Request aborted",p.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new p("Network Error",p.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let N=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||Me;s.timeoutErrorMessage&&(N=s.timeoutErrorMessage),r(new p(N,T.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,e,m)),m=null},o===void 0&&i.setContentType(null),"setRequestHeader"in m&&a.forEach(i.toJSON(),function(N,T){m.setRequestHeader(T,N)}),a.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),c&&c!=="json"&&(m.responseType=s.responseType),l&&([g,h]=$(l,!0),m.addEventListener("progress",g)),f&&m.upload&&([d,E]=$(f),m.upload.addEventListener("progress",d),m.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(u=R=>{m&&(r(!R||R.type?new U(null,e,m):R),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=cn(s.url);if(S&&O.protocols.indexOf(S)===-1){r(new p("Unsupported protocol "+S+":",p.ERR_BAD_REQUEST,e));return}m.send(o||null)})},gn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof p?u:new U(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new p(`timeout ${t} of ms exceeded`,p.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}},wn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},bn=async function*(e,t){for await(const n of En(e))yield*wn(n,t)},En=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Oe=(e,t,n,r)=>{const s=bn(e,t);let o=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:l,value:u}=await s.next();if(l){c(),f.close();return}let d=u.byteLength;if(n){let g=o+=d;n(g)}f.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Q=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",We=Q&&typeof ReadableStream=="function",Sn=Q&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ke=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Rn=We&&Ke(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Te=64*1024,ie=We&&Ke(()=>a.isReadableStream(new Response("").body)),V={stream:ie&&(e=>e.body)};Q&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!V[t]&&(V[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new p(`Response type '${t}' is not supported`,p.ERR_NOT_SUPPORT,r)})})})(new Response);const On=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Sn(e)).byteLength},Tn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??On(t)},An=Q&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:g}=Ve(e);l=l?(l+"").toLowerCase():"text";let E=gn([s,o&&o.toAbortSignal()],i),h;const y=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let m;try{if(f&&Rn&&n!=="get"&&n!=="head"&&(m=await Tn(u,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),F;if(a.isFormData(r)&&(F=T.headers.get("content-type"))&&u.setContentType(F),T.body){const[P,M]=Ee(m,$(Se(f)));r=Oe(T.body,Te,P,M)}}a.isString(d)||(d=d?"include":"omit");const w="credentials"in Request.prototype;h=new Request(t,{...g,signal:E,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:w?d:void 0});let S=await fetch(h);const R=ie&&(l==="stream"||l==="response");if(ie&&(c||R&&y)){const T={};["status","statusText","headers"].forEach(he=>{T[he]=S[he]});const F=a.toFiniteNumber(S.headers.get("content-length")),[P,M]=c&&Ee(F,$(Se(c),!0))||[];S=new Response(Oe(S.body,Te,P,()=>{M&&M(),y&&y()}),T)}l=l||"text";let N=await V[a.findKey(V,l)||"text"](S,e);return!R&&y&&y(),await new Promise((T,F)=>{Je(T,F,{data:N,headers:A.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:h})})}catch(w){throw y&&y(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new p("Network Error",p.ERR_NETWORK,e,h),{cause:w.cause||w}):p.from(w,w&&w.code,e,h)}}),ae={http:qt,xhr:yn,fetch:An};a.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ae=e=>`- ${e}`,xn=e=>a.isFunction(e)||e===null||e===!1,Xe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!xn(n)&&(r=ae[(i=String(n)).toLowerCase()],r===void 0))throw new p(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ae).join(`
`):" "+Ae(o[0]):"as no adapter specified";throw new p("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ae};function ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function xe(e){return ne(e),e.headers=A.from(e.headers),e.data=te.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xe.getAdapter(e.adapter||z.adapter)(e).then(function(r){return ne(e),r.data=te.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return ve(r)||(ne(e),r&&r.response&&(r.response.data=te.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Ge="1.7.9",Z={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Z[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ce={};Z.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ge+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new p(s(i," has been removed"+(n?" in "+n:"")),p.ERR_DEPRECATED);return n&&!Ce[i]&&(Ce[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};Z.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Cn(e,t,n){if(typeof e!="object")throw new p("options must be an object",p.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new p("option "+o+" must be "+f,p.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new p("Unknown option "+o,p.ERR_BAD_OPTION)}}const J={assertOptions:Cn,validators:Z},L=J.validators;class k{constructor(t){this.defaults=t,this.interceptors={request:new we,response:new we}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&J.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:J.assertOptions(s,{encode:L.function,serialize:L.function},!0)),J.assertOptions(n,{baseUrl:L.spelling("baseURL"),withXsrfToken:L.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=A.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,d=0,g;if(!f){const h=[xe.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,l),g=h.length,u=Promise.resolve(n);d<g;)u=u.then(h[d++],h[d++]);return u}g=c.length;let E=n;for(d=0;d<g;){const h=c[d++],y=c[d++];try{E=h(E)}catch(m){y.call(this,m);break}}try{u=xe.call(this,E)}catch(h){return Promise.reject(h)}for(d=0,g=l.length;d<g;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=B(this.defaults,t);const n=$e(t.baseURL,t.url);return ze(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){k.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(B(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}k.prototype[t]=n(),k.prototype[t+"Form"]=n(!0)});class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new U(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}function Ln(e){return function(n){return e.apply(null,n)}}function Nn(e){return a.isObject(e)&&e.isAxiosError===!0}const ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ce).forEach(([e,t])=>{ce[t]=e});function Qe(e){const t=new k(e),n=Le(k.prototype.request,t);return a.extend(n,k.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Qe(B(e,s))},n}const b=Qe(z);b.Axios=k;b.CanceledError=U;b.CancelToken=de;b.isCancel=ve;b.VERSION=Ge;b.toFormData=G;b.AxiosError=p;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=Ln;b.isAxiosError=Nn;b.mergeConfig=B;b.AxiosHeaders=A;b.formToJSON=e=>He(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=Xe.getAdapter;b.HttpStatusCode=ce;b.default=b;window.axios=b;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("contrast-mode")==="high-contrast"&&document.documentElement.classList.add("high-contrast")});localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");var Ze=document.getElementById("theme-toggle-dark-icon"),Ye=document.getElementById("theme-toggle-light-icon");localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?Ye.classList.remove("hidden"):Ze.classList.remove("hidden");var Fn=document.getElementById("theme-toggle");Fn.addEventListener("click",function(){Ze.classList.toggle("hidden"),Ye.classList.toggle("hidden"),localStorage.getItem("color-theme")?localStorage.getItem("color-theme")==="light"?(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"))});function Pn(){const e=document.documentElement;localStorage.getItem("contrast-mode")==="high-contrast"?(e.classList.remove("high-contrast"),localStorage.setItem("contrast-mode","normal")):(e.classList.add("high-contrast"),localStorage.setItem("contrast-mode","high-contrast"))}function _n(){const e=document.documentElement,t=parseInt(getComputedStyle(e).fontSize),n=Math.min(t+2,32);e.style.fontSize=`${n}px`,localStorage.setItem("font-size",n)}function kn(){const e=document.documentElement,t=parseInt(getComputedStyle(e).fontSize),n=Math.max(t-2,12);e.style.fontSize=`${n}px`,localStorage.setItem("font-size",n)}function Bn(){const e=document.documentElement,t=16;e.style.fontSize=`${t}px`,localStorage.setItem("font-size",t)}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("font-size");e&&(document.documentElement.style.fontSize=`${e}px`)});window.toggleContrast=Pn;window.increaseFontSize=_n;window.decreaseFontSize=kn;window.resetFontSize=Bn;
