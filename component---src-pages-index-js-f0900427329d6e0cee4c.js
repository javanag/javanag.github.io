(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),p.canUseDOM?t(u):n&&(u=n(u))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},c.render=function(){return o.createElement(r,this.props)},a}(a.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(p,"canUseDOM",l),p}}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!c(u))return!1;var s=e[u],f=t[u];if(!1===(a=n?n.call(r,s,f,u):void 0)||void 0===a&&s!==f)return!1}return!0}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),l=n("C/va"),u=r.RegExp,s=u,f=u.prototype,p=/a/g,T=/a/g,E=new u(p)!==p;if(n("nh4g")&&(!E||n("eeVq")((function(){return T[n("K0xU")("match")]=!1,u(p)!=p||u(T)==T||"/a/i"!=u(p,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(E?new s(r&&!o?e.source:e,t):s((r=e instanceof u)?e.source:e,r&&o?l.call(e):t),n?this:f,u)};for(var m=function(e){e in u||o(u,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},d=i(s),h=0;d.length>h;)m(d[h++]);f.constructor=u,u.prototype=f,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},PBij:function(e){e.exports=JSON.parse('["soundcloud producer","amateur guitarist","regular gymgoer","retired barber","ultimate frisbee player","twitch streamer","semi-frequent reader","veteran gamer","wadoryu shodan","startup dreamer","anime viewer","ttc rider","rusty german speaker","vex world championship participant","ex dollarama cashier","plant protector","fervent recycler","meal prepper","high school jazz trumpeter"]')},RXBc:function(e,t,n){"use strict";n.r(t);n("a1Th"),n("Btvt");var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=(n("rMck"),n("fVm7"),function(){var e=Object(r.useState)("cs student"),t=e[0],o=e[1],i=Object(r.useState)(n("PBij")),c=i[0],l=i[1];return a.a.createElement("div",null,a.a.createElement("div",{style:{float:"left",marginBottom:"1.25em"}},a.a.createElement("h1",{style:{marginBottom:0}},"Javan Graham"),a.a.createElement("button",{className:"motd",type:"button",onClick:function(){!function(e,t,n){var r=Math.floor(Math.random()*e.length);e.length>0?(t(e[r]),e.splice(r,1),n(e)):t("that's all folks ;)")}(c,o,l)}},"software developer / ",a.a.createElement("i",null,t))),a.a.createElement("div",{style:{float:"right"}},a.a.createElement("ul",{className:"nav"},a.a.createElement("li",null,a.a.createElement("a",{className:"link",href:"#about"},"about")),a.a.createElement("li",null,a.a.createElement("a",{className:"link",href:"#projects"},"projects")),a.a.createElement("li",null,a.a.createElement("a",{className:"link",href:"#experience"},"experience")))),a.a.createElement("div",{style:{clear:"both"}}))}),c=function(e){var t=e.icon;return a.a.createElement("i",{className:t})},l=function(e){var t=e.icon,n=e.text,r=e.children;return a.a.createElement("div",{className:"entry"},a.a.createElement("h2",{id:n.toLowerCase()},a.a.createElement(c,{icon:t})," ",n),r)},u=function(e){var t=e.company,n=e.companyUrl,r=e.subtitle,o=e.children;return a.a.createElement("div",{className:"entry"},a.a.createElement("h3",null,a.a.createElement("a",{href:n},t)),a.a.createElement("h4",{className:"subtitle"},a.a.createElement(c,{icon:"fas fa-map-marker-alt"})," ",r),o)},s=function(e){var t=e.toString();return t.length<2?"0"+t:t};t.default=function(){var e=Object(r.useState)("#000000"),t=e[0],n=e[1];return setInterval((function(){!function(e){var t=new Date;e("#"+s(t.getHours())+s(Math.ceil(t.getMinutes()/2))+s(Math.ceil(t.getSeconds()/2)))}(n)}),1e3),a.a.createElement("main",{className:"container"},a.a.createElement(o.Helmet,{style:[{cssText:"\n            html {\n                background-color: "+t+";\n            }\n        "}]},a.a.createElement("title",null,"Javan Graham | Software Developer"),a.a.createElement("meta",{name:"description",content:"Toronto based software developer and computer science student at UofT"}),a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("meta",{name:"theme-color",content:"#000000"}),a.a.createElement("meta",{name:"msapplication-navbutton-color",content:"#000000"}),a.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),a.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"#000000"})),a.a.createElement(i,null),a.a.createElement(l,{icon:"fa fa-user",text:"About"},a.a.createElement("p",null,"Howdy, I'm Javan, a student in the Computer Science Specialist program at the ",a.a.createElement(c,{icon:"fa fa-university"})," University of Toronto. After completing my third year, I have been on ",a.a.createElement("a",{href:"https://web.cs.toronto.edu/undergraduate/pey"},"PEY")," working at ",a.a.createElement("a",{href:"https://www.overbond.com/"}," ",a.a.createElement(c,{icon:"fa fa-briefcase"})," Overbond")," since May 2019 as a software developer. After my internship I look forward to returning to school in the fall to complete my studies and graduate in ",a.a.createElement(c,{icon:"fa fa-graduation-cap"})," 2021."),a.a.createElement("p",null,"Read on to see some selected projects and work experience. I first got into programming as a kid by playing Minecraft and being inspired to learn how to create a game like that. To find out more about me,",a.a.createElement("i",null," keep clicking the subtitle under my name above"),". Check out my ",a.a.createElement("a",{href:"https://github.com/javanag"}," ",a.a.createElement(c,{icon:"fab fa-github-alt"})," GitHub")," to see more, peep my ",a.a.createElement("a",{href:"https://ca.linkedin.com/in/javan-graham-baabb1195"}," ",a.a.createElement(c,{icon:"fab fa-linkedin"})," LinkedIn"),", and send me an email at ",a.a.createElement("span",{className:"email"},a.a.createElement(c,{icon:"fa fa-envelope"}),a.a.createElement("b",null," javan.graham (at) mail.utoronto.ca"))," if you'd like to discuss anything!")),a.a.createElement(l,{icon:"fa fa-hammer",text:"Projects"},a.a.createElement("blockquote",{className:"subtitle"},'"What I cannot create, I do not understand."',a.a.createElement("br",null),a.a.createElement("footer",null," - ",a.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Richard_Feynman"},"Richard Feynman"))),a.a.createElement("p",{className:"footer"},"(I'd like to take some more time to get this right. For now please see my ",a.a.createElement("a",{href:"https://github.com/javanag"},"GitHub"),")")),a.a.createElement(l,{icon:"fa fa-laptop-code",text:"Experience"},a.a.createElement(u,{company:"Overbond",companyUrl:"https://www.overbond.com/",subtitle:"Toronto, May 2019 - Now"},a.a.createElement("p",null,"I recently started an ongoing internship here as a ",a.a.createElement(c,{icon:"fa fa-briefcase"})," ",a.a.createElement("b",null,"Full Stack Developer"),". Responsibilities include:"),a.a.createElement("ul",null,a.a.createElement("li",null,"Implementing features for flagship ",a.a.createElement(c,{icon:"fas fa-gem"})," Ruby on Rails and ",a.a.createElement(c,{icon:"fas fa-atom"})," React web app"),a.a.createElement("li",null,"Creating applications to intake data from financial APIs into ",a.a.createElement(c,{icon:"fas fa-database"}),"  Postgres using ",a.a.createElement(c,{icon:"fab fa-python"})," Python"),a.a.createElement("li",null,"Writing design docs, planning sprints, maintaining documentation and tests together with code changes"))),a.a.createElement(u,{company:"Rotary Club Burlington Lakeshore",companyUrl:"https://rotaryburlington.com/",subtitle:"Burlington, July 2018 - August 2018"},a.a.createElement("p",null,"I got the opportunity to create a static site as part of a marketing campaign for a pilot event the Rotary Club was hosting the night before ",a.a.createElement("a",{href:"http://www.canadaslargestribfest.com/"},"Canada's Largest Ribfest"),". I learned how to:"),a.a.createElement("ul",null,a.a.createElement("li",null,"Interpret club needs for web page, worked with marketing team to implement design as static site using ",a.a.createElement(c,{icon:"fa fa-code"})," HTML, CSS and JavaScript with Bootstrap"),a.a.createElement("li",null,"Track ad campaign impact on web page traffic with Google Analytics")),a.a.createElement("p",null,"Once published, it was ",a.a.createElement(c,{icon:"fas fa-eye"})," viewed by thousands of unique visitors during the month of August. I'm glad that my first user-facing site (and first attempt at consulting-style work) had a chance to provide real impact."))),a.a.createElement("div",{className:"footer"},a.a.createElement("p",null,"© 2020 Javan Graham")))}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n("q1tI")),i=f(n("17x9")),c=f(n("8+s/")),l=f(n("bmMU")),u=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,d,h,A=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),y=(m=A,h=d=function(e){function t(){return T(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=p(a,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(o.default.Component),d.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=m.peek,d.rewind=function(){var e=m.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,u,s=r(t),f=r(n);if(s&&f){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=f)return!1;var p=t instanceof Date,T=n instanceof Date;if(p!=T)return!1;if(p&&T)return t.getTime()==n.getTime();var E=t instanceof RegExp,m=n instanceof RegExp;if(E!=m)return!1;if(E&&m)return t.toString()==n.toString();var d=a(t);if((l=d.length)!==a(n).length)return!1;for(c=l;0!=c--;)if(!o.call(n,d[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(u=d[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n("q1tI")),i=l(n("MgzW")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=d(e,c.TAG_NAMES.TITLE),n=d(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return d(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},m=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],u=l.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),l=0;l<o.length;l++){var u=o[l],s=(0,i.default)({},a[u],r[u]);a[u]=s}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){h(e)}),0)}),A=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,p=e.title,T=e.titleAttributes;w(c.TAG_NAMES.BODY,r),w(c.TAG_NAMES.HTML,a),R(p,T);var E={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,o),metaTags:P(c.TAG_NAMES.META,i),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,l),scriptTags:P(c.TAG_NAMES.SCRIPT,s),styleTags:P(c.TAG_NAMES.STYLE,f)},m={},d={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(d[e]=E[e].oldTags)})),t&&t(),u(e,m,d)},_=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),w(c.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var u=i[l],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var f=o.indexOf(u);-1!==f&&o.splice(f,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},P=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},I=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=M(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=O(n),o=_(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&b(S),e.defer?S=y((function(){v(e,(function(){S=null}))})):(v(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,p=void 0===f?"":f,T=e.titleAttributes;return{base:I(c.TAG_NAMES.BASE,t,r),bodyAttributes:I(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(c.ATTRIBUTE_NAMES.HTML,a,r),link:I(c.TAG_NAMES.LINK,o,r),meta:I(c.TAG_NAMES.META,i,r),noscript:I(c.TAG_NAMES.NOSCRIPT,l,r),script:I(c.TAG_NAMES.SCRIPT,u,r),style:I(c.TAG_NAMES.STYLE,s,r),title:I(c.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:E([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:d(e,c.HELMET_PROPS.DEFER),encode:d(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=g}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-f0900427329d6e0cee4c.js.map