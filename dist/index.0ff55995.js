function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t,r,n,o,i,a,s,c,u,l,d,p,f,h,v,m,g,y,_,b=globalThis;function w(e){return e&&e.__esModule?e.default:e}var k={},E={},S=b.parcelRequire3a11;null==S&&((S=function(e){if(e in k)return k[e].exports;if(e in E){var t=E[e];delete E[e];var r={id:e,exports:{}};return k[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){E[e]=t},b.parcelRequire3a11=S);var F=S.register;F("1is5Y",function(t,r){e(t.exports,"state",()=>i),e(t.exports,"loadRecipe",()=>s),e(t.exports,"loadSearchResults",()=>c),e(t.exports,"getSearchResultsPage",()=>u),e(t.exports,"updateServings",()=>l),e(t.exports,"addBookmark",()=>p),e(t.exports,"removeBookmark",()=>f),e(t.exports,"uploadRecipe",()=>h);var n=S("ge6e3"),o=S("fZ5A9");S("9NZOq");let i={recipe:{},search:{query:"",results:[],resultsPerPage:o.default.RES_PER_PAGE,page:1},bookmarks:[]},a=function(e){let{recipe:t}=e.data;return{cookingTime:t.cooking_time,id:t.id,imageUrl:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,sourceUrl:t.source_url,title:t.title,...t.key&&{key:t.key}}},s=async function(e){try{let t=await (0,n.AJAX)(`${o.default.API_URI}${e}?key=${o.default.API_KEY}`);i.recipe=a(t),console.log(i.recipe),i.bookmarks.some(e=>e.id===i.recipe.id)?i.recipe.bookmarked=!0:i.recipe.bookmarked=!1}catch(e){throw console.log(`${e.message}\u{1F631}\u{1F631}\u{1F631}`),e}},c=async function(e){i.search.query=e;try{let t=await (0,n.AJAX)(`${o.default.API_URI}?search=${e}&key=${o.default.API_KEY}`);i.search.results=t.data.recipes.map(e=>({id:e.id,imageUrl:e.image_url,publisher:e.publisher,title:e.title,...e.key&&{key:e.key}})),i.search.page=1}catch(e){throw console.log(`${e.message}\u{1F631}\u{1F631}\u{1F631}`),e}},u=function(e=i.search.page){i.search.page=e;let t=(e-1)*o.default.RES_PER_PAGE,r=t+o.default.RES_PER_PAGE;return i.search.results.slice(t,r)},l=function(e){this.state.recipe.ingredients.forEach(t=>{t.quantity=t.quantity/i.recipe.servings*e}),i.recipe.servings=e},d=function(){localStorage.setItem("bookmarks",JSON.stringify(i.bookmarks))},p=function(e){i.bookmarks.push(e),d(),e.id===i.recipe.id&&(i.recipe.bookmarked=!0)},f=function(e){let t=i.bookmarks.findIndex(t=>t.id===e);i.bookmarks.splice(t,1),d(),e===i.recipe.id&&(i.recipe.bookmarked=!1)};!function(){let e=localStorage.getItem("bookmarks");e&&(i.bookmarks=JSON.parse(e)),console.log(i.bookmarks)}();let h=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Wrong ingredient format, please use correct format");let[r,n,o]=t;return{quantity:r?Number(r):null,unit:n,description:o}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},s=await (0,n.AJAX)(`${o.default.API_URI}?key=${o.default.API_KEY}`,r);i.recipe=a(s),p(i.recipe)}catch(e){throw e}}}),F("ge6e3",function(t,r){e(t.exports,"AJAX",()=>o),S("9NZOq");var n=S("fZ5A9");let o=async function(e,t){try{var r;let o=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([o,(r=n.default.TIMEOUT_SEC,new Promise(function(e,t){setTimeout(function(){t(Error(`Request took too long! Timeout after ${r} second`))},1e3*r)}))]),a=await i.json();if(!i.ok)throw Error(`${a.message}(${i.status})`);return a}catch(e){throw e}}}),F("9NZOq",function(e,t){var r=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,i){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return o(c,"_invoke",{value:(a=new x(i||[]),s=p,function(r,o){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw o;return{value:t,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=function e(r,n){var o=n.method,i=r.iterator[o];if(i===t)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),v;var a=d(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(i,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};function m(){}function g(){}function y(){}var _={};u(_,a,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==r&&n.call(w,a)&&(_=w);var k=y.prototype=m.prototype=Object.create(_);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,s){var c=d(e[o],e,i);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function P(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw TypeError(typeof e+" is not iterable")}return g.prototype=y,o(k,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=e,a.arg=t,i)?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}),F("fZ5A9",function(t,r){e(t.exports,"default",()=>n);var n={API_URI:"https://forkify-api.herokuapp.com/api/v2/recipes/",API_KEY:"1611d4cc-50a6-419a-9bd6-cfc3fe67f71f",TIMEOUT_SEC:10,RES_PER_PAGE:10}});var O={},x={},P=function(e){return e&&e.Math===Math&&e};x=P("object"==typeof globalThis&&globalThis)||P("object"==typeof window&&window)||P("object"==typeof self&&self)||P("object"==typeof b&&b)||P("object"==typeof x&&x)||function(){return this}()||Function("return this")();var $={},j={};$=!(j=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var L={},M={};M=!j(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var R=Function.prototype.call;L=M?R.bind(R):function(){return R.apply(R,arguments)};var A={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;a=T&&!A.call({1:2},1)?function(e){var t=T(this,e);return!!t&&t.enumerable}:A;var I={};I=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var q={},N={},H={},C=Function.prototype,D=C.call,U=M&&C.bind.bind(D,D),B={},z=(H=M?U:function(e){return function(){return D.apply(e,arguments)}})({}.toString),G=H("".slice);B=function(e){return G(z(e),8,-1)};var W=Object,Y=H("".split);N=j(function(){return!W("z").propertyIsEnumerable(0)})?function(e){return"String"===B(e)?Y(e,""):W(e)}:W;var J={},Z={};Z=function(e){return null==e};var K=TypeError;J=function(e){if(Z(e))throw new K("Can't call method on "+e);return e},q=function(e){return N(J(e))};var X={},Q={},V={},ee={},et="object"==typeof document&&document.all;ee=void 0===et&&void 0!==et?function(e){return"function"==typeof e||e===et}:function(e){return"function"==typeof e},V=function(e){return"object"==typeof e?null!==e:ee(e)};var er={},en={};en=function(e,t){var r;return arguments.length<2?(r=x[e],ee(r)?r:void 0):x[e]&&x[e][t]};var eo={};eo=H({}.isPrototypeOf);var ei={},ea={},es={},ec={};ec="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eu=x.process,el=x.Deno,ed=eu&&eu.versions||el&&el.version,ep=ed&&ed.v8;ep&&(c=(s=ep.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!c&&ec&&(!(s=ec.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=ec.match(/Chrome\/(\d+)/))&&(c=+s[1]),es=c;var ef=x.String;ei=(ea=!!Object.getOwnPropertySymbols&&!j(function(){var e=Symbol("symbol detection");return!ef(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&es&&es<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eh=Object;er=ei?function(e){return"symbol"==typeof e}:function(e){var t=en("Symbol");return ee(t)&&eo(t.prototype,eh(e))};var ev={},em={},eg={},ey=String;eg=function(e){try{return ey(e)}catch(e){return"Object"}};var e_=TypeError;em=function(e){if(ee(e))return e;throw new e_(eg(e)+" is not a function")},ev=function(e,t){var r=e[t];return Z(r)?void 0:em(r)};var eb={},ew=TypeError;eb=function(e,t){var r,n;if("string"===t&&ee(r=e.toString)&&!V(n=L(r,e))||ee(r=e.valueOf)&&!V(n=L(r,e))||"string"!==t&&ee(r=e.toString)&&!V(n=L(r,e)))return n;throw new ew("Can't convert object to primitive value")};var ek={},eE={},eS={};eS=!1;var eF={},eO=Object.defineProperty;eF=function(e,t){try{eO(x,e,{value:t,configurable:!0,writable:!0})}catch(r){x[e]=t}return t};var ex="__core-js_shared__",eP=eE=x[ex]||eF(ex,{});(eP.versions||(eP.versions=[])).push({version:"3.36.0",mode:eS?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ek=function(e,t){return eE[e]||(eE[e]=t||{})};var e$={},ej={},eL=Object;ej=function(e){return eL(J(e))};var eM=H({}.hasOwnProperty);e$=Object.hasOwn||function(e,t){return eM(ej(e),t)};var eR={},eA=0,eT=Math.random(),eI=H(1..toString);eR=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eI(++eA+eT,36)};var eq=x.Symbol,eN=ek("wks"),eH=ei?eq.for||eq:eq&&eq.withoutSetter||eR,eC=TypeError,eD=(e$(eN,t="toPrimitive")||(eN[t]=ea&&e$(eq,t)?eq[t]:eH("Symbol."+t)),eN[t]);Q=function(e,t){if(!V(e)||er(e))return e;var r,n=ev(e,eD);if(n){if(void 0===t&&(t="default"),r=L(n,e,t),!V(r)||er(r))return r;throw new eC("Can't convert object to primitive value")}return void 0===t&&(t="number"),eb(e,t)},X=function(e){var t=Q(e,"string");return er(t)?t:t+""};var eU={},eB={},ez=x.document,eG=V(ez)&&V(ez.createElement);eB=function(e){return eG?ez.createElement(e):{}},eU=!$&&!j(function(){return 7!==Object.defineProperty(eB("div"),"a",{get:function(){return 7}}).a});var eW=Object.getOwnPropertyDescriptor;i=$?eW:function(e,t){if(e=q(e),t=X(t),eU)try{return eW(e,t)}catch(e){}if(e$(e,t))return I(!L(a,e,t),e[t])};var eY={},eJ={};eJ=$&&j(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eZ={},eK=String,eX=TypeError;eZ=function(e){if(V(e))return e;throw new eX(eK(e)+" is not an object")};var eQ=TypeError,eV=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,e1="enumerable",e2="configurable",e3="writable";u=$?eJ?function(e,t,r){if(eZ(e),t=X(t),eZ(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e3 in r&&!r[e3]){var n=e0(e,t);n&&n[e3]&&(e[t]=r.value,r={configurable:e2 in r?r[e2]:n[e2],enumerable:e1 in r?r[e1]:n[e1],writable:!1})}return eV(e,t,r)}:eV:function(e,t,r){if(eZ(e),t=X(t),eZ(r),eU)try{return eV(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eY=$?function(e,t,r){return u(e,t,I(1,r))}:function(e,t,r){return e[t]=r,e};var e9={},e6={},e4=Function.prototype,e7=$&&Object.getOwnPropertyDescriptor,e5=e$(e4,"name")&&(!$||$&&e7(e4,"name").configurable),e8={},te=H(Function.toString);ee(eE.inspectSource)||(eE.inspectSource=function(e){return te(e)}),e8=eE.inspectSource;var tt={},tr={},tn=x.WeakMap;tr=ee(tn)&&/native code/.test(String(tn));var to={},ti=ek("keys");to=function(e){return ti[e]||(ti[e]=eR(e))};var ta={};ta={};var ts="Object already initialized",tc=x.TypeError,tu=x.WeakMap;if(tr||eE.state){var tl=eE.state||(eE.state=new tu);tl.get=tl.get,tl.has=tl.has,tl.set=tl.set,l=function(e,t){if(tl.has(e))throw new tc(ts);return t.facade=e,tl.set(e,t),t},d=function(e){return tl.get(e)||{}},p=function(e){return tl.has(e)}}else{var tp=to("state");ta[tp]=!0,l=function(e,t){if(e$(e,tp))throw new tc(ts);return t.facade=e,eY(e,tp,t),t},d=function(e){return e$(e,tp)?e[tp]:{}},p=function(e){return e$(e,tp)}}var tf=(tt={set:l,get:d,has:p,enforce:function(e){return p(e)?d(e):l(e,{})},getterFor:function(e){return function(t){var r;if(!V(t)||(r=d(t)).type!==e)throw new tc("Incompatible receiver, "+e+" required");return r}}}).enforce,th=tt.get,tv=String,tm=Object.defineProperty,tg=H("".slice),ty=H("".replace),t_=H([].join),tb=$&&!j(function(){return 8!==tm(function(){},"length",{value:8}).length}),tw=String(String).split("String"),tk=e6=function(e,t,r){"Symbol("===tg(tv(t),0,7)&&(t="["+ty(tv(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e$(e,"name")||e5&&e.name!==t)&&($?tm(e,"name",{value:t,configurable:!0}):e.name=t),tb&&r&&e$(r,"arity")&&e.length!==r.arity&&tm(e,"length",{value:r.arity});try{r&&e$(r,"constructor")&&r.constructor?$&&tm(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return e$(n,"source")||(n.source=t_(tw,"string"==typeof t?t:"")),e};Function.prototype.toString=tk(function(){return ee(this)&&th(this).source||e8(this)},"toString"),e9=function(e,t,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:t;if(ee(r)&&e6(r,i,n),n.global)o?e[t]=r:eF(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:u(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tE={},tS={},tF={},tO={},tx={},tP={},t$=Math.ceil,tj=Math.floor;tP=Math.trunc||function(e){var t=+e;return(t>0?tj:t$)(t)},tx=function(e){var t=+e;return t!=t||0===t?0:tP(t)};var tL=Math.max,tM=Math.min;tO=function(e,t){var r=tx(e);return r<0?tL(r+t,0):tM(r,t)};var tR={},tA={},tT=Math.min;tA=function(e){var t=tx(e);return t>0?tT(t,9007199254740991):0},tR=function(e){return tA(e.length)};var tI=function(e){return function(t,r,n){var o,i=q(t),a=tR(i);if(0===a)return!e&&-1;var s=tO(n,a);if(e&&r!=r){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},tq={includes:tI(!0),indexOf:tI(!1)}.indexOf,tN=H([].push);tF=function(e,t){var r,n=q(e),o=0,i=[];for(r in n)!e$(ta,r)&&e$(n,r)&&tN(i,r);for(;t.length>o;)e$(n,r=t[o++])&&(~tq(i,r)||tN(i,r));return i};var tH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tF(e,tH)},h=Object.getOwnPropertySymbols;var tC=H([].concat);tS=en("Reflect","ownKeys")||function(e){var t=f(eZ(e));return h?tC(t,h(e)):t},tE=function(e,t,r){for(var n=tS(t),o=0;o<n.length;o++){var a=n[o];e$(e,a)||r&&e$(r,a)||u(e,a,i(t,a))}};var tD={},tU=/#|\.prototype\./,tB=function(e,t){var r=tG[tz(e)];return r===tY||r!==tW&&(ee(t)?j(t):!!t)},tz=tB.normalize=function(e){return String(e).replace(tU,".").toLowerCase()},tG=tB.data={},tW=tB.NATIVE="N",tY=tB.POLYFILL="P";tD=tB,O=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?x:l?x[c]||eF(c,{}):x[c]&&x[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tD(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tE(a,o)}(e.sham||o&&o.sham)&&eY(a,"sham",!0),e9(r,n,a,e)}};var tJ={},tZ={},tK=Function.prototype,tX=tK.apply,tQ=tK.call;tZ="object"==typeof Reflect&&Reflect.apply||(M?tQ.bind(tX):function(){return tQ.apply(tX,arguments)});var tV={},t0={},t1=(t0=function(e){if("Function"===B(e))return H(e)})(t0.bind);tV=function(e,t){return em(e),void 0===t?e:M?t1(e,t):function(){return e.apply(t,arguments)}};var t2={};t2=en("document","documentElement");var t3={};t3=H([].slice);var t9={},t6=TypeError;t9=function(e,t){if(e<t)throw new t6("Not enough arguments");return e};var t4={};t4=/(?:ipad|iphone|ipod).*applewebkit/i.test(ec);var t7={};t7="process"===B(x.process);var t5=x.setImmediate,t8=x.clearImmediate,re=x.process,rt=x.Dispatch,rr=x.Function,rn=x.MessageChannel,ro=x.String,ri=0,ra={},rs="onreadystatechange";j(function(){v=x.location});var rc=function(e){if(e$(ra,e)){var t=ra[e];delete ra[e],t()}},ru=function(e){return function(){rc(e)}},rl=function(e){rc(e.data)},rd=function(e){x.postMessage(ro(e),v.protocol+"//"+v.host)};t5&&t8||(t5=function(e){t9(arguments.length,1);var t=ee(e)?e:rr(e),r=t3(arguments,1);return ra[++ri]=function(){tZ(t,void 0,r)},m(ri),ri},t8=function(e){delete ra[e]},t7?m=function(e){re.nextTick(ru(e))}:rt&&rt.now?m=function(e){rt.now(ru(e))}:rn&&!t4?(y=(g=new rn).port2,g.port1.onmessage=rl,m=tV(y.postMessage,y)):x.addEventListener&&ee(x.postMessage)&&!x.importScripts&&v&&"file:"!==v.protocol&&!j(rd)?(m=rd,x.addEventListener("message",rl,!1)):m=rs in eB("script")?function(e){t2.appendChild(eB("script"))[rs]=function(){t2.removeChild(this),rc(e)}}:function(e){setTimeout(ru(e),0)});var rp=(tJ={set:t5,clear:t8}).clear;O({global:!0,bind:!0,enumerable:!0,forced:x.clearImmediate!==rp},{clearImmediate:rp});var rf=tJ.set,rh={},rv={};rv="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rm=x.Function,rg=/MSIE .\./.test(ec)||rv&&((r=x.Bun.version.split(".")).length<3||"0"===r[0]&&(r[1]<3||"3"===r[1]&&"0"===r[2]));rh=function(e,t){var r=t?2:1;return rg?function(n,o){var i=t9(arguments.length,1)>r,a=ee(n)?n:rm(n),s=i?t3(arguments,r):[],c=i?function(){tZ(a,this,s)}:a;return t?e(c,o):e(c)}:e};var ry=x.setImmediate?rh(rf,!1):rf;O({global:!0,bind:!0,enumerable:!0,forced:x.setImmediate!==ry},{setImmediate:ry});var r_=S("1is5Y"),rb={};rb=new URL("icons.c14567a0.svg",import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,o=num.split(" ");if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(n=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},o=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(n(this.denominator)){var e=o(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(n(this.numerator)){var e=o(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return(n.forEach(function(e){var t=o.indexOf(e);t>=0&&(r.push(e),o.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},_=Fraction;class rw{_parentElement;_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=[...document.createRange().createContextualFragment(t).querySelectorAll("*")],n=[...this._parentElement.querySelectorAll("*")];r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}renderSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${w(rb)}#icon-loader"></use>
          </svg>
        </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`<div class="error">
    <div>
      <svg>
        <use href="${w(rb)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${e}</p>
  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="message">
    <div>
      <svg>
        <use href="${w(rb)}#icon-smile"></use>
      </svg>
    </div>
    <p>${e}</p>
  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}class rk extends rw{_parentElement=document.querySelector(".recipe");_updateServingsButtons=document.querySelector(".recipe__info-buttons");_lnkDirections=document.querySelector(".recipe__btn");_errorMessage="We could not find that recipe. Please try another one";_message="";constructor(){super(),this.addHandlerDirectionsLink()}_generateMarkup(){return`<figure class="recipe__fig">
      <img src="${this._data.imageUrl}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${w(rb)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${w(rb)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button data-update-to="${this._data.servings-1}" class="btn--tiny btn--update-servings">
            <svg>
              <use href="${w(rb)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button data-update-to="${this._data.servings+1}" class="btn--tiny btn--update-servings">
            <svg>
              <use href="${w(rb)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
        <svg>
           <use href="${w(rb)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${w(rb)}#${this._data.bookmarked?"icon-bookmark-fill":"icon-bookmark"}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(e=>`<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${w(rb)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new _(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit?e.unit:""}</span>
        ${e.description}
      </div>
    </li>`).join("")}

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${w(rb)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,function(t){t.preventDefault(),e()}))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){t.preventDefault();let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerDirectionsLink(){this._parentElement.addEventListener("click",e=>{let t=e.target.closest(".recipe__btn");t&&window.open(t.href)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.preventDefault(),t.target.closest(".btn--bookmark")&&e()})}}var rE=new rk;class rS extends rw{_parentElement=document.querySelector(".search");_inputBox=document.querySelector(".search__field");addHandlerRender(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}getQuery(){let e=this._inputBox.value;return this._clearInputBox(),e}_clearInputBox(){this._inputBox.value=""}}var rF=new rS;class rO extends rw{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";_generateMarkup(){let e=window.location.hash.slice(1);return`<li class="preview">
    <a class="preview__link ${e===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.imageUrl}" alt="${this._data.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title}</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
        <div class="preview__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${w(rb)}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`}}var rx=new rO;class rP extends rw{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again";_message="";_generateMarkup(){return this._data.map(e=>rx.render(e,!1)).join("")}}var r$=new rP;class rj extends rw{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){t.preventDefault();let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
        <use href="${w(rb)}#icon-arrow-right"></use>
      </svg>
    </button>`:e===t&&t>1?`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
      <use href="${w(rb)}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._data.page-1}</span>
      </button>`:e<t?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
      <use href="${w(rb)}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._data.page-1}</span>
      </button>
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
      <use href="${w(rb)}#icon-arrow-right"></use>
      </svg>
      </button>`:""}}var rL=new rj;class rM extends rw{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";_generateMarkup(){return this._data.map(e=>rx.render(e,!1)).join("")}addHandlerRender(e){window.addEventListener("load",e)}}var rR=new rM;class rA extends rw{_parentElement=document.querySelector(".upload");_addRecipeWindow=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpenForm=document.querySelector(".nav__btn--add-recipe");_btnCloseForm=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerCloseWindow()}_addHandlerShowWindow(){this._btnOpenForm.addEventListener("click",this.toggleAddRecipeForm.bind(this))}_addHandlerCloseWindow(){this._btnCloseForm.addEventListener("click",this.toggleAddRecipeForm.bind(this))}_addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}toggleAddRecipeForm(){this._addRecipeWindow.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_generateMarkup(){}}var rT=new rA;S("9NZOq");const rI=async function(){try{let e=this.window.location.hash.slice(1);if(!e)return;r$.update(r_.getSearchResultsPage()),rR.update(r_.state.bookmarks),rE.renderSpinner(),await r_.loadRecipe(e);let t=r_.state.recipe;rE.render(t)}catch(e){console.error(e),rE.renderError()}},rq=async function(){try{let e=rF.getQuery();if(!e)return;await r_.loadSearchResults(e),r$.renderSpinner(),r$.render(r_.getSearchResultsPage()),rL.render(r_.state.search)}catch(e){console.log(e)}},rN=async function(e){r$.renderSpinner(),r$.render(r_.getSearchResultsPage(e)),rL.render(r_.state.search)},rH=async function(e){r_.updateServings(e);let t=r_.state.recipe;rE.update(t)},rC=async function(e){try{rT.renderSpinner(),await r_.uploadRecipe(e),console.log(r_.state.recipe),rE.render(r_.state.recipe),rT.renderMessage("Recipe uploaded"),rR.render(r_.state.bookmarks),window.history.pushState(null,"",`#${r_.state.recipe.id}`),setTimeout(function(){rT.toggleAddRecipeForm()},2e3)}catch(e){rT.renderError(e.message)}};rR.addHandlerRender(function(){rR.render(r_.state.bookmarks)}),rE.addHandlerRender(rI),rE.addHandlerUpdateServings(rH),rE.addHandlerAddBookmark(function(){r_.state.recipe.bookmarked?r_.removeBookmark(r_.state.recipe.id):r_.addBookmark(r_.state.recipe),rE.render(r_.state.recipe),rR.render(r_.state.bookmarks)}),rF.addHandlerRender(rq),rL.addHandlerClick(rN),rT._addHandlerUpload(rC);
//# sourceMappingURL=index.0ff55995.js.map
