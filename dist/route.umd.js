!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t||self).ziggyJs=n()}(this,function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function r(){return r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},r.apply(this,arguments)}function e(t){return e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(t)}function i(t,n){return i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},i(t,n)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function u(t,n,r){return u=o()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var o=new(Function.bind.apply(t,e));return r&&i(o,r.prototype),o},u.apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,e(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,t)},f(t)}var c=String.prototype.replace,a=/%20/g,l="RFC3986",s={default:l,formatters:{RFC1738:function(t){return c.call(t,a,"+")},RFC3986:function(t){return String(t)}},RFC1738:"RFC1738",RFC3986:l},v=Object.prototype.hasOwnProperty,d=Array.isArray,p=function(){for(var t=[],n=0;n<256;++n)t.push("%"+((n<16?"0":"")+n.toString(16)).toUpperCase());return t}(),y=function(t,n){for(var r=n&&n.plainObjects?Object.create(null):{},e=0;e<t.length;++e)void 0!==t[e]&&(r[e]=t[e]);return r},h={arrayToObject:y,assign:function(t,n){return Object.keys(n).reduce(function(t,r){return t[r]=n[r],t},t)},combine:function(t,n){return[].concat(t,n)},compact:function(t){for(var n=[{obj:{o:t},prop:"o"}],r=[],e=0;e<n.length;++e)for(var i=n[e],o=i.obj[i.prop],u=Object.keys(o),f=0;f<u.length;++f){var c=u[f],a=o[c];"object"==typeof a&&null!==a&&-1===r.indexOf(a)&&(n.push({obj:o,prop:c}),r.push(a))}return function(t){for(;t.length>1;){var n=t.pop(),r=n.obj[n.prop];if(d(r)){for(var e=[],i=0;i<r.length;++i)void 0!==r[i]&&e.push(r[i]);n.obj[n.prop]=e}}}(n),t},decode:function(t,n,r){var e=t.replace(/\+/g," ");if("iso-8859-1"===r)return e.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(e)}catch(t){return e}},encode:function(t,n,r,e,i){if(0===t.length)return t;var o=t;if("symbol"==typeof t?o=Symbol.prototype.toString.call(t):"string"!=typeof t&&(o=String(t)),"iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var u="",f=0;f<o.length;++f){var c=o.charCodeAt(f);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||i===s.RFC1738&&(40===c||41===c)?u+=o.charAt(f):c<128?u+=p[c]:c<2048?u+=p[192|c>>6]+p[128|63&c]:c<55296||c>=57344?u+=p[224|c>>12]+p[128|c>>6&63]+p[128|63&c]:(c=65536+((1023&c)<<10|1023&o.charCodeAt(f+=1)),u+=p[240|c>>18]+p[128|c>>12&63]+p[128|c>>6&63]+p[128|63&c])}return u},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,n){if(d(t)){for(var r=[],e=0;e<t.length;e+=1)r.push(n(t[e]));return r}return n(t)},merge:function t(n,r,e){if(!r)return n;if("object"!=typeof r){if(d(n))n.push(r);else{if(!n||"object"!=typeof n)return[n,r];(e&&(e.plainObjects||e.allowPrototypes)||!v.call(Object.prototype,r))&&(n[r]=!0)}return n}if(!n||"object"!=typeof n)return[n].concat(r);var i=n;return d(n)&&!d(r)&&(i=y(n,e)),d(n)&&d(r)?(r.forEach(function(r,i){if(v.call(n,i)){var o=n[i];o&&"object"==typeof o&&r&&"object"==typeof r?n[i]=t(o,r,e):n.push(r)}else n[i]=r}),n):Object.keys(r).reduce(function(n,i){var o=r[i];return n[i]=v.call(n,i)?t(n[i],o,e):o,n},i)}},b=Object.prototype.hasOwnProperty,g={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,n){return t+"["+n+"]"},repeat:function(t){return t}},m=Array.isArray,j=String.prototype.split,O=Array.prototype.push,w=function(t,n){O.apply(t,m(n)?n:[n])},R=Date.prototype.toISOString,E=s.default,S={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:h.encode,encodeValuesOnly:!1,format:E,formatter:s.formatters[E],indices:!1,serializeDate:function(t){return R.call(t)},skipNulls:!1,strictNullHandling:!1},k=function t(n,r,e,i,o,u,f,c,a,l,s,v,d,p){var y,b=n;if("function"==typeof f?b=f(r,b):b instanceof Date?b=l(b):"comma"===e&&m(b)&&(b=h.maybeMap(b,function(t){return t instanceof Date?l(t):t})),null===b){if(i)return u&&!d?u(r,S.encoder,p,"key",s):r;b=""}if("string"==typeof(y=b)||"number"==typeof y||"boolean"==typeof y||"symbol"==typeof y||"bigint"==typeof y||h.isBuffer(b)){if(u){var g=d?r:u(r,S.encoder,p,"key",s);if("comma"===e&&d){for(var O=j.call(String(b),","),R="",E=0;E<O.length;++E)R+=(0===E?"":",")+v(u(O[E],S.encoder,p,"value",s));return[v(g)+"="+R]}return[v(g)+"="+v(u(b,S.encoder,p,"value",s))]}return[v(r)+"="+v(String(b))]}var k,x=[];if(void 0===b)return x;if("comma"===e&&m(b))k=[{value:b.length>0?b.join(",")||null:void 0}];else if(m(f))k=f;else{var T=Object.keys(b);k=c?T.sort(c):T}for(var C=0;C<k.length;++C){var N=k[C],F="object"==typeof N&&void 0!==N.value?N.value:b[N];if(!o||null!==F){var D=m(b)?"function"==typeof e?e(r,N):r:r+(a?"."+N:"["+N+"]");w(x,t(F,D,e,i,o,u,f,c,a,l,s,v,d,p))}}return x},x=Object.prototype.hasOwnProperty,T=Array.isArray,C={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:h.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},N=function(t){return t.replace(/&#(\d+);/g,function(t,n){return String.fromCharCode(parseInt(n,10))})},F=function(t,n){return t&&"string"==typeof t&&n.comma&&t.indexOf(",")>-1?t.split(","):t},D=function(t,n,r,e){if(t){var i=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/g,u=r.depth>0&&/(\[[^[\]]*])/.exec(i),f=u?i.slice(0,u.index):i,c=[];if(f){if(!r.plainObjects&&x.call(Object.prototype,f)&&!r.allowPrototypes)return;c.push(f)}for(var a=0;r.depth>0&&null!==(u=o.exec(i))&&a<r.depth;){if(a+=1,!r.plainObjects&&x.call(Object.prototype,u[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(u[1])}return u&&c.push("["+i.slice(u.index)+"]"),function(t,n,r,e){for(var i=e?n:F(n,r),o=t.length-1;o>=0;--o){var u,f=t[o];if("[]"===f&&r.parseArrays)u=[].concat(i);else{u=r.plainObjects?Object.create(null):{};var c="["===f.charAt(0)&&"]"===f.charAt(f.length-1)?f.slice(1,-1):f,a=parseInt(c,10);r.parseArrays||""!==c?!isNaN(a)&&f!==c&&String(a)===c&&a>=0&&r.parseArrays&&a<=r.arrayLimit?(u=[])[a]=i:"__proto__"!==c&&(u[c]=i):u={0:i}}i=u}return i}(c,n,r,e)}},$=/*#__PURE__*/function(){function t(t,n,r){var e,i;this.name=t,this.definition=n,this.bindings=null!=(e=n.bindings)?e:{},this.wheres=null!=(i=n.wheres)?i:{},this.config=r}var r=t.prototype;return r.matchesUrl=function(t){if(!this.definition.methods.includes("GET"))return!1;var n=this.template.replace(/\/{[^}?]*\?}/g,"(/[^/?]+)?").replace(/{[^}?]*\?}/g,"([^/?]+)?").replace(/{[^}]+}/g,"[^/?]+").replace(/^\w+:\/\//,"");return new RegExp("^"+n+"$").test(t.replace(/\/+$/,"").split("?").shift())},r.compile=function(t){var n=this;return this.parameterSegments.length?this.template.replace(/{([^}?]+)\??}/g,function(r,e){var i,o;if([null,void 0].includes(t[e])&&n.parameterSegments.find(function(t){return t.name===e}).required)throw new Error("Ziggy error: '"+e+"' parameter is required for route '"+n.name+"'.");return n.parameterSegments[n.parameterSegments.length-1].name===e&&".*"===n.wheres[e]?null!=(o=t[e])?o:"":encodeURIComponent(null!=(i=t[e])?i:"")}).replace(/\/+$/,""):this.template},n(t,[{key:"template",get:function(){return((this.config.absolute?this.definition.domain?""+this.config.url.match(/^\w+:\/\//)[0]+this.definition.domain+(this.config.port?":"+this.config.port:""):this.config.url:"")+"/"+this.definition.uri).replace(/\/+$/,"")}},{key:"parameterSegments",get:function(){var t,n;return null!=(t=null==(n=this.template.match(/{[^}?]+\??}/g))?void 0:n.map(function(t){return{name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)}}))?t:[]}}]),t}(),A=/*#__PURE__*/function(t){var e,o;function u(n,e,i,o){var u;if(void 0===i&&(i=!0),(u=t.call(this)||this).t=null!=o?o:"undefined"!=typeof Ziggy?Ziggy:null==globalThis?void 0:globalThis.Ziggy,u.t=r({},u.t,{absolute:i}),n){if(!u.t.routes[n])throw new Error("Ziggy error: route '"+n+"' is not in the route list.");u.i=new $(n,u.t.routes[n],u.t),u.u=u.l(e)}return u}o=t,(e=u).prototype=Object.create(o.prototype),e.prototype.constructor=e,i(e,o);var f=u.prototype;return f.toString=function(){var t=this,n=Object.keys(this.u).filter(function(n){return!t.i.parameterSegments.some(function(t){return t.name===n})}).filter(function(t){return"_query"!==t}).reduce(function(n,e){var i;return r({},n,((i={})[e]=t.u[e],i))},{});return this.i.compile(this.u)+function(t,n){var r,e=t,i=function(t){if(!t)return S;if(null!=t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var n=t.charset||S.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=s.default;if(void 0!==t.format){if(!b.call(s.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var e=s.formatters[r],i=S.filter;return("function"==typeof t.filter||m(t.filter))&&(i=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:S.addQueryPrefix,allowDots:void 0===t.allowDots?S.allowDots:!!t.allowDots,charset:n,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:S.charsetSentinel,delimiter:void 0===t.delimiter?S.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:S.encode,encoder:"function"==typeof t.encoder?t.encoder:S.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:S.encodeValuesOnly,filter:i,format:r,formatter:e,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:S.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:S.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:S.strictNullHandling}}(n);"function"==typeof i.filter?e=(0,i.filter)("",e):m(i.filter)&&(r=i.filter);var o=[];if("object"!=typeof e||null===e)return"";var u=g[n&&n.arrayFormat in g?n.arrayFormat:n&&"indices"in n?n.indices?"indices":"repeat":"indices"];r||(r=Object.keys(e)),i.sort&&r.sort(i.sort);for(var f=0;f<r.length;++f){var c=r[f];i.skipNulls&&null===e[c]||w(o,k(e[c],c,u,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.format,i.formatter,i.encodeValuesOnly,i.charset))}var a=o.join(i.delimiter),l=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&(l+="iso-8859-1"===i.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),a.length>0?l+a:""}(r({},n,this.u._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:function(t,n){return"boolean"==typeof t?Number(t):n(t)}})},f.current=function(t,n){var r=this,e=this.t.absolute?this.v().host+this.v().pathname:this.v().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"),i=Object.entries(this.t.routes).find(function(n){return new $(t,n[1],r.t).matchesUrl(e)})||[void 0,void 0],o=i[0],u=i[1];if(!t)return o;var f=new RegExp("^"+t.replace(/\./g,"\\.").replace(/\*/g,".*")+"$").test(o);if([null,void 0].includes(n)||!f)return f;var c=new $(o,u,this.t);n=this.l(n,c);var a=this.p(u);return!(!Object.values(n).every(function(t){return!t})||Object.values(a).length)||Object.entries(n).every(function(t){return a[t[0]]==t[1]})},f.v=function(){var t,n,r,e,i,o,u="undefined"!=typeof window?window.location:{},f=u.host,c=u.pathname,a=u.search;return{host:null!=(t=null==(n=this.t.location)?void 0:n.host)?t:void 0===f?"":f,pathname:null!=(r=null==(e=this.t.location)?void 0:e.pathname)?r:void 0===c?"":c,search:null!=(i=null==(o=this.t.location)?void 0:o.search)?i:void 0===a?"":a}},f.has=function(t){return Object.keys(this.t.routes).includes(t)},f.l=function(t,n){var e=this;void 0===t&&(t={}),void 0===n&&(n=this.i),t=["string","number"].includes(typeof t)?[t]:t;var i=n.parameterSegments.filter(function(t){return!e.t.defaults[t.name]});if(Array.isArray(t))t=t.reduce(function(t,n,e){var o,u;return r({},t,i[e]?((o={})[i[e].name]=n,o):((u={})[n]="",u))},{});else if(1===i.length&&!t[i[0].name]&&(t.hasOwnProperty(Object.values(n.bindings)[0])||t.hasOwnProperty("id"))){var o;(o={})[i[0].name]=t,t=o}return r({},this.h(n),this.g(t,n))},f.h=function(t){var n=this;return t.parameterSegments.filter(function(t){return n.t.defaults[t.name]}).reduce(function(t,e,i){var o,u=e.name;return r({},t,((o={})[u]=n.t.defaults[u],o))},{})},f.g=function(t,n){var e=n.bindings,i=n.parameterSegments;return Object.entries(t).reduce(function(t,n){var o,u,f=n[0],c=n[1];if(!c||"object"!=typeof c||Array.isArray(c)||!i.some(function(t){return t.name===f}))return r({},t,((u={})[f]=c,u));if(!c.hasOwnProperty(e[f])){if(!c.hasOwnProperty("id"))throw new Error("Ziggy error: object passed as '"+f+"' parameter is missing route model binding key '"+e[f]+"'.");e[f]="id"}return r({},t,((o={})[f]=c[e[f]],o))},{})},f.p=function(t){var n,e=this.v().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,""),i=function(t,n,e){void 0===n&&(n="");var i=[t,n].map(function(t){return t.split(e)}),o=i[0];return i[1].reduce(function(t,n,e){var i;return/{[^}?]+\??}/.test(n)&&o[e]?r({},t,((i={})[n.replace(/.*{|\??}.*/g,"")]=o[e].replace(n.match(/^[^{]*/g),"").replace(n.match(/[^}]*$/g),""),i)):t},{})};return r({},i(this.v().host,t.domain,"."),i(e,t.uri,"/"),function(t,n){var r=C;if(""===t||null==t)return r.plainObjects?Object.create(null):{};for(var e="string"==typeof t?function(t,n){var r,e={},i=(n.ignoreQueryPrefix?t.replace(/^\?/,""):t).split(n.delimiter,Infinity===n.parameterLimit?void 0:n.parameterLimit),o=-1,u=n.charset;if(n.charsetSentinel)for(r=0;r<i.length;++r)0===i[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===i[r]?u="utf-8":"utf8=%26%2310003%3B"===i[r]&&(u="iso-8859-1"),o=r,r=i.length);for(r=0;r<i.length;++r)if(r!==o){var f,c,a=i[r],l=a.indexOf("]="),s=-1===l?a.indexOf("="):l+1;-1===s?(f=n.decoder(a,C.decoder,u,"key"),c=n.strictNullHandling?null:""):(f=n.decoder(a.slice(0,s),C.decoder,u,"key"),c=h.maybeMap(F(a.slice(s+1),n),function(t){return n.decoder(t,C.decoder,u,"value")})),c&&n.interpretNumericEntities&&"iso-8859-1"===u&&(c=N(c)),a.indexOf("[]=")>-1&&(c=T(c)?[c]:c),e[f]=x.call(e,f)?h.combine(e[f],c):c}return e}(t,r):t,i=r.plainObjects?Object.create(null):{},o=Object.keys(e),u=0;u<o.length;++u){var f=o[u],c=D(f,e[f],r,"string"==typeof t);i=h.merge(i,c,r)}return h.compact(i)}(null==(n=this.v().search)?void 0:n.replace(/^\?/,"")))},f.valueOf=function(){return this.toString()},n(u,[{key:"params",get:function(){return this.p(this.t.routes[this.current()])}}]),u}(/*#__PURE__*/f(String));return route=function(t,n,r,e){var i=new A(t,n,r,e);return t?i.toString():i}});