(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=n("q1tI"),o=a(r),i=a(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),m.canUseDOM?t(u):n&&(u=n(u))}var m=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return u},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var c=r.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},c.render=function(){return o.createElement(a,this.props)},r}(r.Component);return c(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),c(m,"canUseDOM",l),m}}},Gytx:function(e,t){e.exports=function(e,t,n,a){var r=n?n.call(a,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!c(u))return!1;var s=e[u],f=t[u];if(!1===(r=n?n.call(a,s,f,u):void 0)||void 0===r&&s!==f)return!1}return!0}},Kfvu:function(e,t,n){"use strict";var a=n("mBgD");t.__esModule=!0,t.OutboundLink=c,t.trackCustomEvent=function(e){var t=e.category,n=e.action,a=e.label,r=e.value,o=e.nonInteraction,i=void 0===o||o,c=e.transport,l=e.hitCallback,u=e.callbackTimeout,s=void 0===u?1e3:u;if("undefined"!=typeof window&&window.ga){var f={eventCategory:t,eventAction:n,eventLabel:a,eventValue:r,nonInteraction:i,transport:c};l&&"function"==typeof l&&(f.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,a=function(){n||(n=!0,e())};return setTimeout(a,t),a}(l,s)),window.ga("send","event",f)}};var r=a(n("SM4Z")),o=a(n("q1tI")),i=a(n("17x9"));function c(e){return o.default.createElement("a",(0,r.default)({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick(t);var n=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(n=!1),e.target&&"_self"!==e.target.toLowerCase()&&(n=!1),window.ga?window.ga("send","event",{eventCategory:"Outbound Link",eventAction:"click",eventLabel:e.href,transport:n?"beacon":"",hitCallback:function(){n&&(document.location=e.href)}}):n&&(document.location=e.href),!1}}))}c.propTypes={href:i.default.string,target:i.default.string,onClick:i.default.func}},PBij:function(e){e.exports=JSON.parse('["soundcloud producer","amateur guitarist","regular gymgoer","retired barber","ultimate frisbee player","twitch streamer","semi-frequent reader","veteran gamer","wadoryu shodan","startup dreamer","anime viewer","ttc rider","rusty german speaker","vex world championship participant","ex dollarama cashier","plant protector","fervent recycler","meal prepper","high school jazz trumpeter","blockchain baller","dumpster (treasure) diver"]')},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("TJpk"),i=(n("rMck"),n("fVm7"),function(e){var t=e.icon;return r.a.createElement("i",{className:t})}),c=function(){var e=Object(a.useState)("hidden"),t=e[0],n=e[1],o=function(e,t){t("hidden"===e?"container nav navrows":"hidden")};return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container nav"},r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("a",{href:"#top"},"javangraham.me"))),r.a.createElement("div",{className:"navlinks"},r.a.createElement("button",{className:"navbutton",onClick:function(){o(t,n)}},r.a.createElement(i,{icon:"fas fa-bars"})),r.a.createElement("a",{href:"#about"},"about"),r.a.createElement("a",{href:"#projects"},"projects"),r.a.createElement("a",{href:"#experience"},"experience"))),r.a.createElement("div",{className:t},r.a.createElement("a",{href:"#about",onClick:function(){o(t,n)}},"about"),r.a.createElement("a",{href:"#projects",onClick:function(){o(t,n)}},"projects"),r.a.createElement("a",{href:"#experience",onClick:function(){o(t,n)}},"experience")))},l=function(e){var t=e.icon,n=e.text,a=e.children;return r.a.createElement("div",{className:"entry"},r.a.createElement("h2",{id:n.toLowerCase()},r.a.createElement(i,{icon:t})," ",n),a)},u=function(e){var t=e.company,n=e.companyUrl,a=e.subtitle,o=e.role,c=e.children;return r.a.createElement("div",{className:"entry"},r.a.createElement("h3",null,r.a.createElement("a",{href:n},t)),o&&r.a.createElement("h4",{className:"subtitle"},r.a.createElement(i,{icon:"fa fa-briefcase"})," ",o),a&&r.a.createElement("h5",{className:"subtitle"},r.a.createElement(i,{icon:"fas fa-map-marker-alt"})," ",a),c)},s=n("Kfvu"),f=function(){var e=Object(a.useState)("cs student..."),t=e[0],o=e[1],i=Object(a.useState)(n("PBij")),c=i[0],l=i[1];return r.a.createElement("button",{className:"motd",type:"button",onClick:function(){!function(e,t,n){var a=Math.floor(Math.random()*e.length);e.length>0?(t(e[a]),e.splice(a,1),n(e)):t("that's all folks ;)")}(c,o,l)}},r.a.createElement("h2",null,"software developer / ",r.a.createElement("i",null,t)))},m=function(e){var t=e.toString();return t.length<2?"0"+t:t};t.default=function(){var e=Object(a.useState)("#000000"),t=e[0],n=e[1];return setInterval((function(){!function(e){var t=new Date;e("#"+m(t.getHours())+m(Math.ceil(t.getMinutes()/2))+m(Math.ceil(t.getSeconds()/2)))}(n)}),1e3),r.a.createElement("main",null,r.a.createElement(o.Helmet,{style:[{cssText:"\n            html {\n                background-color: "+t+";\n            }\n        "}]},r.a.createElement("title",null,"Javan Graham | Software Developer"),r.a.createElement("meta",{name:"description",content:"Toronto based software developer and computer science student at UofT"}),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("meta",{name:"theme-color",content:"#000000"}),r.a.createElement("meta",{name:"msapplication-navbutton-color",content:"#000000"}),r.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"#000000"})),r.a.createElement(c,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"howdy"},r.a.createElement("h1",null,"Howdy, I'm Javan, and I am a"),r.a.createElement(f,null)),r.a.createElement(l,{icon:"fa fa-user",text:"About"},r.a.createElement("p",null,"Since September, I've been doing an internship at ",r.a.createElement("a",{href:"https://bluecatnetworks.com/"},r.a.createElement(i,{icon:"fas fa-cat"})," a DDI company"),", ending in April. This summer I'm looking for one last internship before going back to ",r.a.createElement("a",{href:"https://web.cs.toronto.edu/"},r.a.createElement(i,{icon:"fa fa-university"})," UofT")," in the fall for my final year ",r.a.createElement(i,{icon:"fas fa-user-graduate"}),"."),r.a.createElement("p",null,"I took up programming as a kid, at first because ",r.a.createElement("a",{href:"https://www.minecraft.net/en-us/"},r.a.createElement(i,{icon:"fas fa-gamepad"})," Minecraft")," was so inspirational to me, that I wanted to know how it was made. Right now I'm learning ",r.a.createElement("a",{href:"https://crystal-lang.org/"},"Crystal")," and looking into using ",r.a.createElement("a",{href:"https://amberframework.org/"},"Amber")," for a project I'm working on."),r.a.createElement("p",null,"Here's my ",r.a.createElement("a",{href:"https://github.com/javanag"}," ",r.a.createElement(i,{icon:"fab fa-github-alt"})," GitHub"),", find me on ",r.a.createElement("a",{href:"https://ca.linkedin.com/in/javan-graham-baabb1195"},r.a.createElement(i,{icon:"fab fa-linkedin"})," LinkedIn"),", and talk to me at ",r.a.createElement("span",{className:"email"},r.a.createElement(i,{icon:"fa fa-envelope"}),r.a.createElement("b",null," javan.graham (at) mail (dot) utoronto (dot) ca")),".")),r.a.createElement(l,{icon:"fa fa-hammer",text:"Projects"},r.a.createElement("blockquote",{className:"subtitle"},'"What I cannot create, I do not understand."',r.a.createElement("br",null),r.a.createElement("footer",null," - ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Richard_Feynman"},"Richard Feynman"))),r.a.createElement("div",{className:"project-header"},r.a.createElement("h3",null,r.a.createElement("a",{href:"https://imagefy-image-repository.herokuapp.com/"},r.a.createElement(i,{icon:"fas fa-images"})," imagefy!")),r.a.createElement("h4",null,r.a.createElement("i",null,"Image uploading and sharing platform")),r.a.createElement("h5",null,r.a.createElement("a",{href:"https://github.com/javanag/imagefy"},r.a.createElement(i,{icon:"fab fa-github"})," GitHub"))),r.a.createElement("div",{className:"project"},r.a.createElement("div",{className:"project-description-container"},r.a.createElement("p",null,"Users can register and upload images with metadata, and set access controls per-image. Open images are indexed on the homepage stream of images for all users, unlisted images are viewable to all with a direct link, secret images are only visible to the uploader. Click the surprise link to be taken to a random public image!"),r.a.createElement("p",null,"Built with Ruby on Rails, using Postgres. Image uploads are stored on AWS S3. Containerized using Docker to make it easy to develop, and run a GitHub Actions test pipeline on pushes or pull requests. Deployed automatically from master to Heroku.")),r.a.createElement("div",{className:"project-image-container"},r.a.createElement("img",{src:"imagefy.jpg",alt:"A screenshot of the imagefy user interface."})))),r.a.createElement(l,{icon:"fa fa-laptop-code",text:"Experience"},r.a.createElement(u,{company:"BlueCat Networks",companyUrl:"https://bluecatnetworks.com/",subtitle:"Toronto (Remote), September 2020 -",role:"Software Engineer Co-op"},r.a.createElement("p",null,"Here I've been working on the main ",r.a.createElement("a",{href:"https://bluecatnetworks.com/glossary/what-is-ddi/"},r.a.createElement(i,{icon:"fas fa-server"})," DDI")," service control appliances written in ",r.a.createElement(i,{icon:"fab fa-java"})," Java. I built handlers for many of the new JSON REST service configuration API endpoints, and updated the existing UI to integrate them. Then I wrote some tests for it all using a mix of a JUnit and Selenium in-house combo. Now I am fixing ",r.a.createElement(i,{icon:"fas fa-bug"})," bugs as we are preparing for a release this Spring.")),r.a.createElement(u,{company:"Overbond",companyUrl:"https://www.overbond.com/",subtitle:"Toronto, May 2019 - May 2020",role:"Full Stack Developer"},r.a.createElement("p",null,"The team was small, so I took the opportunity to gain broad experience by wearing many hats ",r.a.createElement(i,{icon:"fas fa-hat-cowboy"}),". I mostly worked on the ",r.a.createElement(i,{icon:"fas fa-gem"})," Ruby on Rails app, using ",r.a.createElement(i,{icon:"fab fa-react"})," React on the front end, building features or demos."),r.a.createElement("p",null,"Later on I learned a lot about ",r.a.createElement(i,{icon:"fab fa-aws"})," cloud services when we started building a data platform with ",r.a.createElement(i,{icon:"fab fa-python"})," Python services inside ",r.a.createElement(i,{icon:"fab fa-docker"})," Docker containers. My component captured real time data, passed it through a ",r.a.createElement(i,{icon:"fas fa-project-diagram"})," Kinesis topic where it was eventually consumed and put into an ",r.a.createElement(i,{icon:"fas fa-database"})," RDS instance."),r.a.createElement("p",null,"I also hired other software developer applicants / interns by ",r.a.createElement(i,{icon:"fas fa-chalkboard-teacher"})," conducting interviews, ",r.a.createElement(i,{icon:"fas fa-tasks"})," grading online assessment submissions, and ",r.a.createElement(i,{icon:"fas fa-lightbulb"})," creating new assessments tailored to evaluate the desired skill sets.")),r.a.createElement(u,{company:"Rotary Club Burlington Lakeshore",companyUrl:"https://rotaryburlington.com/",subtitle:"Burlington, July 2018 - August 2018",role:"Web Developer"},r.a.createElement("p",null,"I created a static site as part of a marketing campaign for a pilot event the Rotary Club was hosting the night before ",r.a.createElement("a",{href:"http://www.canadaslargestribfest.com/"},"Canada's Largest Ribfest"),"."),r.a.createElement("p",null,"After gathering the club's needs and designs for the web page, I implemented them using ",r.a.createElement(i,{icon:"fa fa-code"})," HTML, CSS and JavaScript with Bootstrap. After publishing, we tracked ad campaign impact on web page traffic with ",r.a.createElement(i,{icon:"fab fa-google"}),"  Google Analytics.")))),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement(s.OutboundLink,{href:"https://cabbagecanfly.com"},"2 "),r.a.createElement(s.OutboundLink,{href:"https://www.reecemartin.ca/"},"0 "),r.a.createElement(s.OutboundLink,{href:"https://www.shanshan-li.com/"},"2 "),"1")))}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=f(n("q1tI")),i=f(n("17x9")),c=f(n("8+s/")),l=f(n("bmMU")),u=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,T,h,b=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),A=(E=b,h=T=function(e){function t(){return p(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return a({},r,((t={})[n.type]=[].concat(r[n.type]||[],[a({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(r.type){case s.TAG_NAMES.TITLE:return a({},o,((t={})[r.type]=c,t.titleAttributes=a({},i),t));case s.TAG_NAMES.BODY:return a({},o,{bodyAttributes:a({},i)});case s.TAG_NAMES.HTML:return a({},o,{htmlAttributes:a({},i)})}return a({},o,((n={})[r.type]=a({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=a({},t);return Object.keys(e).forEach((function(t){var r;n=a({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,i=m(r,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=m(e,["children"]),r=a({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.default.createElement(E,r)},r(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(o.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=E.peek,T.rewind=function(){var e=E.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},bmMU:function(e,t,n){"use strict";var a=Array.isArray,r=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,u,s=a(t),f=a(n);if(s&&f){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=f)return!1;var m=t instanceof Date,p=n instanceof Date;if(m!=p)return!1;if(m&&p)return t.getTime()==n.getTime();var d=t instanceof RegExp,E=n instanceof RegExp;if(d!=E)return!1;if(d&&E)return t.toString()==n.toString();var T=r(t);if((l=T.length)!==r(n).length)return!1;for(c=l;0!=c--;)if(!o.call(n,T[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(u=T[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},fVm7:function(e,t,n){},"hFT/":function(e,t,n){n("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var a=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(a).map((function(e){return a[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[a.NOSCRIPT,a.SCRIPT,a.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},rMck:function(e,t,n){},v1p5:function(e,t,n){(function(e){n("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=l(n("q1tI")),i=l(n("YVoz")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=T(e,c.TAG_NAMES.TITLE),n=T(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var a=T(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||a||void 0},m=function(e){return T(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return r({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var a=Object.keys(n),r=0;r<a.length;r++){var o=a[r].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},E=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],u=l.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),l=0;l<o.length;l++){var u=o[l],s=(0,i.default)({},r[u],a[u]);r[u]=s}return e}),[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var a=e[n];if(a.hasOwnProperty(t))return a[t]}return null},h=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){h(e)}),0)}),b=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,S=function(e,t){var n=e.baseTag,a=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,m=e.title,p=e.titleAttributes;R(c.TAG_NAMES.BODY,a),R(c.TAG_NAMES.HTML,r),_(m,p);var d={baseTag:I(c.TAG_NAMES.BASE,n),linkTags:I(c.TAG_NAMES.LINK,o),metaTags:I(c.TAG_NAMES.META,i),noscriptTags:I(c.TAG_NAMES.NOSCRIPT,l),scriptTags:I(c.TAG_NAMES.SCRIPT,s),styleTags:I(c.TAG_NAMES.STYLE,f)},E={},T={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,a=t.oldTags;n.length&&(E[e]=n),a.length&&(T[e]=d[e].oldTags)})),t&&t(),u(e,E,T)},w=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=w(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var a=n.getAttribute(c.HELMET_ATTRIBUTE),r=a?a.split(","):[],o=[].concat(r),i=Object.keys(t),l=0;l<i.length;l++){var u=i[l],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===r.indexOf(u)&&r.push(u);var f=o.indexOf(u);-1!==f&&o.splice(f,1)}for(var m=o.length-1;m>=0;m--)n.removeAttribute(o[m]);r.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},I=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),a=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),r=Array.prototype.slice.call(a),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(a===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[a]?"":t[a];n.setAttribute(a,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),r.some((function(e,t){return i=t,n.isEqualNode(e)}))?r.splice(i,1):o.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:o}},O=function(e){return Object.keys(e).reduce((function(t,n){var a=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+a:a}),"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},M=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[c.HELMET_ATTRIBUTE]=!0,r=P(n,a),[o.default.createElement(c.TAG_NAMES.TITLE,r,e)];var e,n,a,r},toString:function(){return function(e,t,n,a){var r=O(n),o=w(t);return r?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+r+">"+s(o,a)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(o,a)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,r=((a={key:n})[c.HELMET_ATTRIBUTE]=!0,a);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var a=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:a}}else r[n]=t[e]})),o.default.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,a){var r=Object.keys(a).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var r=void 0===a[t]?t:t+'="'+s(a[t],n)+'"';return e?e+" "+r:r}),""),o=a.innerHTML||a.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+r+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&y(v),e.defer?v=A((function(){S(e,(function(){v=null}))})):(S(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,a=e.encode,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,m=void 0===f?"":f,p=e.titleAttributes;return{base:M(c.TAG_NAMES.BASE,t,a),bodyAttributes:M(c.ATTRIBUTE_NAMES.BODY,n,a),htmlAttributes:M(c.ATTRIBUTE_NAMES.HTML,r,a),link:M(c.TAG_NAMES.LINK,o,a),meta:M(c.TAG_NAMES.META,i,a),noscript:M(c.TAG_NAMES.NOSCRIPT,l,a),script:M(c.TAG_NAMES.SCRIPT,u,a),style:M(c.TAG_NAMES.STYLE,s,a),title:M(c.TAG_NAMES.TITLE,{title:m,titleAttributes:p},a)}},t.reducePropsToState=function(e){return{baseTag:d([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:T(e,c.HELMET_PROPS.DEFER),encode:T(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:m(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=g}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-7e32806849800b128b83.js.map