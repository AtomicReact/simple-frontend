function t(t,e,i=this,n,c={}){null==this[t]&&Object.defineProperty(i,t,{value:e,...c}),n&&n()}t("ATOMIC_REACT","atomicreact"),t("ATOMIC_REACT_ALIAS",[ATOMIC_REACT,"atomicreact-ts"]),t("DEFINES","defines"),t("ATOMS","atoms"),t("MODULES","modules"),t("LIB","lib"),t("LOAD","load"),t(ATOMIC_REACT,{}),t(DEFINES,{},this[ATOMIC_REACT]),t(ATOMS,{},this[ATOMIC_REACT]),t(LOAD,(()=>{window.addEventListener(this[ATOMIC_REACT][LIB].AtomicReact.AtomicEvents.LOADED,(function(t){window.addEventListener("load",(function(t){this[ATOMIC_REACT][LIB].AtomicReact.load()}))})),0==Object.keys(this[ATOMIC_REACT][DEFINES]).length&&window.dispatchEvent(new CustomEvent(this[ATOMIC_REACT][LIB].AtomicReact.AtomicEvents.LOADED))}),this[ATOMIC_REACT]),t("gotoEndOfPath",(function(t,e,i,n=""){return null==t[e]&&Object.defineProperty(t,e,{value:{},configurable:!0}),1==i.length?{context:t[e],path:i[0],contextPath:n}:(t=t[e],e=i[0],i.shift(),n+=`${""==n?"":"/"}${e}`,gotoEndOfPath(t,e,i,n))})),t("getValueOfPath",(function t(e,i){if(1==i.length)return e[i[0]]||null;const n=i[0];return null==e[n]?null:(i.shift(),t(e[n],i))})),t("normalizeModuleName",(function(t){return t.replaceAll("../","").replaceAll("./","").replaceAll(".tsx","").replaceAll(".jsx","").replaceAll(".ts","").replaceAll(".js","")})),t("isLocalModule",(function(t){return 0==t.indexOf("./")&&-1==t.indexOf("../")})),t("sumPath",(function(t,e){let i=t.split("/");const n=e.split("../").length-1;return i.length<=n?normalizeModuleName(e):(i.splice(i.length-n),normalizeModuleName(`${i.join("/")}${""==t?"":"/"}${e}`))})),t("require",(function(t,e=""){const i=t.split("/");if(ATOMIC_REACT_ALIAS.includes(i[0]))return 1==i.length?this[ATOMIC_REACT][LIB]||this[ATOMIC_REACT]:getValueOfPath(this,i);let n="";return n=t.indexOf("./")>=0?sumPath(e,t):sumPath(ATOMS,t),new Proxy({path:n},{get:(t,e)=>getValueOfPath(window[ATOMIC_REACT],t.path.split("/"))[e]})})),t("define",(function(e,i,n){let c={__esModule:!0};if(ATOMIC_REACT_ALIAS.includes(e)&&!ATOMIC_REACT[e])return n(require,c,...i.slice(2).map((t=>require(t)))),t("lib",c,this[ATOMIC_REACT]),t("AtomicReact",this[ATOMIC_REACT].lib.AtomicReact),t("global",this[ATOMIC_REACT],AtomicReact),void t("JSX",this[ATOMIC_REACT].lib.JSX);const o=e.split("/"),r=gotoEndOfPath(this,ATOMIC_REACT,o);let a=r.context,l=r.path,s=r.contextPath;const u=[require,c,...i.slice(2).map((t=>require(t,s)))];let A=!1;for(let t=0;t<u.length;t++){if(null!==u[t])continue;A=!0;let c=sumPath(s,i[t]);null==this[ATOMIC_REACT][DEFINES][c]&&Object.defineProperty(this[ATOMIC_REACT][DEFINES],c,{value:{},configurable:!0}),Object.defineProperty(this[ATOMIC_REACT][DEFINES][c],e,{value:()=>{define(e,i,n,!0)},configurable:!0})}if(!A){try{n(...u)}catch(t){return}if(Object.defineProperty(a,l,{value:c,configurable:!0}),Object.getOwnPropertyNames(c).forEach((t=>{[this[ATOMIC_REACT][LIB].Atom.name].includes(Object.getPrototypeOf(c[t]).name)&&Object.defineProperty(c[t].prototype,"__factory",{value:`${e}`,configurable:!0})})),null!=this[ATOMIC_REACT][DEFINES][e]){let t=Object.getOwnPropertyNames(this[ATOMIC_REACT][DEFINES][e]);for(let i=0;i<t.length;i++){let n=t[i];this[ATOMIC_REACT][DEFINES][e][n]()}delete this[ATOMIC_REACT][DEFINES][e]}}}),this),t("dA",(function(t,e,i){return define(`${ATOMS}/${t}`,e,i)})),t("dM",(function(t,e,i){return define(`${MODULES}/${t}`,e,i)})),t("dS",(function(t,e,i){dA(t,["require","exports",ATOMIC_REACT],(function(t,n,c){Object.defineProperties(n,{__esModule:{value:!0},default:{value:{}}}),i.forEach((t=>{n.default[t]=`${e}_${t}`,Object.defineProperty(n,t,{get:function(){return n.default[t]}})}))}))})),define("atomicreact",["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JSX=e.Atom=e.AtomicReact=e.EAtomicEvent=void 0,(e.EAtomicEvent||(e.EAtomicEvent={})).LOADED="<ATOMIC.LOADED>";class AtomicReact{static hotReload;static onLoads=[];static set onLoad(t){AtomicReact.onLoads.push(t)}static load(){for(let t=0;t<AtomicReact.onLoads.length;t++)try{AtomicReact.onLoads[t]()}catch(t){}}static ClientVariables={Id:"a-i",Nucleus:"a-n",Sub:"a-s",SubOf:"a-sof"};static AtomicVariables={Nucleus:"nucleus",Sub:"sub"};static AtomicEvents={LOADED:e.EAtomicEvent.LOADED};static global;static makeID(t=6){let e="";for(let i=0;i<t;i++)e+=String.fromCharCode(65+Math.floor(25*Math.random()));return AtomicReact.getElement(e)?AtomicReact.makeID(t):e}static render(t,i={[AtomicReact.ClientVariables.Id]:t.id}){if(t.preRender)try{t.preRender()}catch(t){console.error(t)}if(!t.struct)return"";const n=Object.assign({},e.JSX["jsx-runtime"].atom);e.JSX["jsx-runtime"].atom={atom:t};let c=t.struct(),o="";Object.getOwnPropertyNames(i).forEach((t=>{o+=` ${t}="${i[t]}"`}));const r=c.trim();if(r.startsWith("<")&&r.endsWith(">")){const t="/"==r.charAt(r.length-2)?r.length-2:r.indexOf(">");c=`${r.slice(0,t)}${o}${r.slice(t,r.length)}`}return e.JSX["jsx-runtime"].atom=Object.assign({},n),c}static renderElement(t,i,n,c){if(n)if("replace"===n){if(!i.parentNode)throw new Error("Can't replace element. Element don't have parent node");i.innerHTML="";const e=document.createElement("div");e.innerHTML=AtomicReact.render(t,c),i.parentElement.replaceChild(e.firstChild,i)}else i.insertAdjacentHTML(n,AtomicReact.render(t,c));else i.innerHTML=AtomicReact.render(t,c);const o=document.querySelector(`[${AtomicReact.ClientVariables.Id}="${t.id}"]`);if(o.Atomic={atom:t},e.JSX["jsx-runtime"].queue.reverse().forEach((t=>{let e=document.querySelector(`[${AtomicReact.ClientVariables.Id}="${t.atom.id}"]`);if(e&&(e.Atomic={atom:t.atom},e.Atomic.atom.onRender))try{e.Atomic.atom.onRender()}catch(t){console.error(t)}})),e.JSX["jsx-runtime"].queue=[],o.Atomic.atom.onRender)try{o.Atomic.atom.onRender()}catch(t){console.error(t)}return o}static getSub(t,e){return document.querySelector(`[${AtomicReact.ClientVariables.SubOf}="${t.id}"][${AtomicReact.ClientVariables.Sub}="${e}"]`)}static getAtomicSub(t,e){return AtomicReact.getAtom(AtomicReact.getSub(t,e))}static getNucleus(t){return document.querySelector(`[${AtomicReact.ClientVariables.Nucleus}="${t.id}"]`)}static getElement(t){return document.querySelector(`[${AtomicReact.ClientVariables.Id}="${t}"]`)}static getAtom(t){return t&&t.Atomic&&t.Atomic.atom?t.Atomic.atom:null}static add(t,e,i){i=i||"beforeend",AtomicReact.renderElement(e,t.nucleus,i),t.onAdded&&t.onAdded(e)}}e.AtomicReact=AtomicReact;class Atom{prop;id;struct=null;preRender;sub;constructor(t,e){this.prop=t,this.id=e,this.prop||(this.prop={}),this.id||(this.id=AtomicReact.makeID()),this.prop.children&&delete this.prop.children,this.sub=new Proxy({},{get:(t,e)=>AtomicReact.getAtomicSub(this,e)||AtomicReact.getSub(this,e)||e})}getElement(){return AtomicReact.getElement(this.id)}add(t,e){AtomicReact.add(this,t,e)}get nucleus(){return AtomicReact.getNucleus(this)}onRender(){}onAdded(t){}}e.Atom=Atom,e.JSX={"jsx-runtime":{atom:null,queue:[],jsxs(t,i){i=i||{};let n=null;if("function"==typeof t){if(n={atom:null},Object.getPrototypeOf(t).name&&Object.getPrototypeOf(t).name===Atom.name){let c=new t(Object.assign({},i));if(e.JSX["jsx-runtime"].queue.push({atom:c}),n.atom=c,c.preRender)try{c.preRender()}catch(t){console.error(t)}t=c.struct?c.struct:()=>""}let c=Object.assign({},e.JSX["jsx-runtime"].atom);e.JSX["jsx-runtime"].atom=Object.assign({},n),t=t.call(this),e.JSX["jsx-runtime"].atom=Object.assign({},c)}void 0===i.children&&(i.children=[]),"string"==typeof i.children&&(i.children=[i.children]);let c=Object.keys(i).map((t=>{if("children"===t)return null;if(t===AtomicReact.AtomicVariables.Nucleus)return`${AtomicReact.ClientVariables.Nucleus}="${e.JSX["jsx-runtime"].atom.atom.id}"`;const c=i[t];return t===AtomicReact.AtomicVariables.Sub?`${AtomicReact.ClientVariables.SubOf}="${e.JSX["jsx-runtime"].atom.atom.id}" ${AtomicReact.ClientVariables.Sub}="${c}"`:n?null:`${t}="${c}"`})).filter((t=>null!=t));if(n&&(c.push(`${AtomicReact.ClientVariables.Id}="${n.atom.id}"`),i.children&&i.children.length>0)){Object.defineProperty(n.atom,"__nucleus_children",{value:i.children.join("")});let e=new RegExp("<(.)*"+AtomicReact.ClientVariables.Nucleus+"[^>]*","gi"),c=-1;for(;e.exec(t);)c=e.lastIndex+1;-1!=c&&(t=`${t.slice(0,c)}${i.children.join("")}${t.slice(c,t.length)}`)}const o=c.join(" "),r=t.trim();if(r.startsWith("<")&&r.endsWith(">")){const e="/"==r.charAt(r.length-2)?r.length-2:r.indexOf(">");t=`${r.slice(0,e)} ${o}${r.slice(e,r.length)}`}else t=`<${t} ${o}> ${i.children.join?i.children.join(""):i.children}</${t}>`;return t},jsx:(t,i)=>e.JSX["jsx-runtime"].jsxs(t,i)}}}));dM("HotReload/lib", ["require", "exports", "../../lib.js"], function (require, exports, lib_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Client = exports.CommandType = exports.__config = void 0;
    exports.__config = {
        host: "127.0.0.1",
        port: 1337,
        verbose: false
    };
    (function (CommandType) {
        CommandType[CommandType["STYLE"] = 0] = "STYLE";
        CommandType[CommandType["SCRIPT"] = 1] = "SCRIPT";
        CommandType[CommandType["EVAL"] = 2] = "EVAL";
        CommandType[CommandType["REFRESH_BUNDLE"] = 3] = "REFRESH_BUNDLE";
    })(exports.CommandType || (exports.CommandType = {}));
    class Client {
        static client;
        static connect(host = exports.__config.host, port = exports.__config.port) {
            const wsServerURL = `ws://${host}:${port}`;
            if (!this.client || this.client.readyState !== WebSocket.OPEN) {
                this.client = new WebSocket(wsServerURL);
            }
            else if (this.client.url.indexOf(wsServerURL) === -1) {
                if (exports.__config.verbose)
                    console.log(`[LiveReload] Client will change connection to ${wsServerURL}`);
                this.client.close(4000, `Closed. Connection changed to ${wsServerURL}`);
                return this.connect(host, port);
            }
            else {
                if (exports.__config.verbose)
                    console.log(`[LiveReload] Client already connected on ${wsServerURL}`);
            }
            this.client.onopen = (e) => {
                if (exports.__config.verbose)
                    console.log(`[LiveReload] Client connected on ${wsServerURL}`);
            };
            this.client.onmessage = (e) => {
                try {
                    const msgData = JSON.parse(e.data);
                    if (exports.__config.verbose)
                        console.log("[LiveReload] on message:", msgData);
                    switch (msgData.command.type) {
                        case exports.CommandType.STYLE:
                            this.redefineCSS(msgData.uid, msgData.command.content);
                            break;
                        case exports.CommandType.SCRIPT:
                            this.redefineScript(msgData.command.content);
                            break;
                        case exports.CommandType.EVAL:
                            eval(msgData.command.content.js);
                            break;
                        case exports.CommandType.REFRESH_BUNDLE:
                            this.refreshBundle(msgData.command.content);
                            break;
                        default:
                            break;
                    }
                }
                catch (e) {
                    console.error(`[LiveReload] Client onmessage error`, e);
                }
            };
        }
        static redefineScript({ js, moduleName }) {
            eval(js);
            const context = getValueOfPath(lib_js_1.AtomicReact.global, moduleName.split("/"));
            document.querySelectorAll(`[a-i]`).forEach((atomEl) => {
                if (!atomEl || !atomEl.Atomic || !atomEl.Atomic.atom || !atomEl.Atomic.atom.getElement())
                    return;
                const oldAtom = atomEl.Atomic.atom;
                const factory = Object.getPrototypeOf(oldAtom).__factory;
                if (factory !== moduleName)
                    return;
                const atomKey = oldAtom.constructor.name;
                if (context[atomKey] === undefined)
                    return;
                const newAtom = new context[atomKey](oldAtom.prop, oldAtom.id);
                if (oldAtom.__nucleus_children)
                    Object.defineProperty(newAtom, "__nucleus_children", { value: oldAtom.__nucleus_children });
                let attrs = {};
                Object.values(lib_js_1.AtomicReact.ClientVariables).forEach((attrName) => {
                    const attrValue = oldAtom.getElement().attributes.getNamedItem(attrName);
                    if (attrValue) {
                        attrs[attrName] = attrValue.value;
                    }
                });
                lib_js_1.AtomicReact.renderElement(newAtom, oldAtom.getElement(), "replace", attrs);
                if (oldAtom.__nucleus_children)
                    newAtom.nucleus.innerHTML = newAtom.__nucleus_children;
            });
        }
        static redefineCSS(uid, { css, js }) {
            let style = document.querySelector(`style[for="${uid}"]`);
            if (!style) {
                style = document.createElement("style");
                style.setAttribute("for", uid);
                document.head.appendChild(style);
            }
            style.innerHTML = css;
            if (js) {
                eval(js);
            }
        }
        static refreshBundle({ version }) {
            function addRandomParam(url) {
                const _url = (new URL(url));
                _url.searchParams.append("atomic_react", version);
                return _url.toString();
            }
            document.head.querySelectorAll("link").forEach(linkElement => {
                linkElement.href = addRandomParam(linkElement.href);
            });
            document.head.querySelectorAll("script").forEach(linkElement => {
                linkElement.src = addRandomParam(linkElement.src);
            });
        }
    }
    exports.Client = Client;
    lib_js_1.AtomicReact.onLoad = () => {
        Client.connect();
    };
    exports.__config = Object.assign((exports.__config) ? exports.__config : {}, { "host": "127.0.0.1", "port": 1717, "verbose": true });
});
dS("simple_frontend/my_atoms/pizza/style.module.css","a2840bfc",["atom"]);dA("simple_frontend/my_atoms/pizza/index", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./style.module.css"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, style_module_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PizzaAtom = void 0;
    class PizzaAtom extends atomicreact_ts_1.Atom {
        struct = () => ((0, jsx_runtime_1.jsx)("div", { class: style_module_css_1.atom, style: `background-color: ${this.prop.bgColor || "#00000000"}`, children: "\uD83C\uDF55" }));
        changeColor = (color) => {
            this.prop.bgColor = `#${color || Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0")}`;
            this.getElement().style.backgroundColor = this.prop.bgColor;
        };
    }
    exports.PizzaAtom = PizzaAtom;
});
dS("simple_frontend/global.module.css","a80d065d",["largerText","title"]);dS("simple_frontend/my_atoms/my_first_atom.module.css","a73b215b",["atom","title","main-buttons","bottom"]);dS("simple_frontend/my_atoms/tag/style.module.css","a9e83a0a",["atomID"]);dA("simple_frontend/my_atoms/tag/index", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./style.module.css"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, style_module_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tag = void 0;
    class Tag extends atomicreact_ts_1.Atom {
        struct = () => ((0, jsx_runtime_1.jsxs)("div", { class: style_module_css_1.atomID, children: ["#", this.prop.label] }));
        onRender() {
            this.getElement().parentElement.style.position = "relative";
        }
    }
    exports.Tag = Tag;
});
dA("simple_frontend/my_atoms/my_first_atom", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./pizza/index.jsx", "../global.module.css", "./my_first_atom.module.css", "./tag/index.jsx"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, index_jsx_1, global_module_css_1, my_first_atom_module_css_1, index_jsx_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MyFirstAtom = void 0;
    class MyFirstAtom extends atomicreact_ts_1.Atom {
        pizzas = [];
        struct = () => ((0, jsx_runtime_1.jsxs)("div", { class: my_first_atom_module_css_1.default.atom, children: [(0, jsx_runtime_1.jsx)(index_jsx_2.Tag, { label: this.id }), (0, jsx_runtime_1.jsx)("h3", { class: my_first_atom_module_css_1.default.title, children: this.prop.title }), (0, jsx_runtime_1.jsx)("p", { children: this.prop.description }), (0, jsx_runtime_1.jsx)(index_jsx_1.PizzaAtom, { sub: this.sub.myPizza }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("button", { class: my_first_atom_module_css_1.default["main-buttons"], sub: this.sub.pizzaButton, children: "Give slice of \uD83C\uDF55" }), (0, jsx_runtime_1.jsx)("div", { nucleus: true, children: (0, jsx_runtime_1.jsx)("h4", { children: "This is the Atom's Nucleus" }) }), (0, jsx_runtime_1.jsx)("section", { children: this.prop.extraSection }), (0, jsx_runtime_1.jsxs)("div", { class: my_first_atom_module_css_1.bottom, children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { class: global_module_css_1.largerText, sub: this.sub.clapSpan, children: this.prop.claps }), " \uD83D\uDC4F"] }), (0, jsx_runtime_1.jsx)("button", { class: my_first_atom_module_css_1.default["main-buttons"], sub: this.sub.clapButton, children: "\uD83D\uDC4F this Atom" })] })] }));
        onRender() {
            console.log(`on render of atom #${this.id} with props`, this.prop);
            this.sub.clapButton.onclick = this.clap.bind(this);
            this.sub.pizzaButton.onclick = this.addPizza.bind(this);
            if (this.prop.onRendered)
                this.prop.onRendered(this.id);
        }
        onAdded(atom) {
            console.log(`Atom added #${atom.id}`);
        }
        updateClaps(claps) {
            this.prop.claps = claps;
            this.sub.clapSpan.innerText = `${this.prop.claps}`;
        }
        clap(ev) {
            if (ev)
                ev.preventDefault();
            console.log("Clap button fired!");
            this.updateClaps(this.prop.claps + 1);
            this.sub.myPizza.changeColor();
        }
        addPizza(ev) {
            if (ev)
                ev.preventDefault();
            const randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
            const pizza = new index_jsx_1.PizzaAtom({ bgColor: `#${randomColor}` });
            this.pizzas.push(pizza);
            this.add(pizza);
        }
        reset() {
            this.pizzas.forEach(pizza => pizza.getElement().remove());
            this.pizzas = [];
            this.updateClaps(0);
        }
    }
    exports.MyFirstAtom = MyFirstAtom;
});
dS("simple_frontend/global.module.css","a80d065d",["largerText","title"]);dS("simple_frontend/app.atom.css","ae906fb7",["app","reset"]);dS("simple_frontend/my_atoms/tag/style.module.css","a9e83a0a",["atomID"]);dA("simple_frontend/my_atoms/tag/index", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./style.module.css"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, style_module_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tag = void 0;
    class Tag extends atomicreact_ts_1.Atom {
        struct = () => ((0, jsx_runtime_1.jsxs)("div", { class: style_module_css_1.atomID, children: ["#", this.prop.label] }));
        onRender() {
            this.getElement().parentElement.style.position = "relative";
        }
    }
    exports.Tag = Tag;
});
dS("simple_frontend/my_atoms/pizza/style.module.css","a2840bfc",["atom"]);dA("simple_frontend/my_atoms/pizza/index", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./style.module.css"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, style_module_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PizzaAtom = void 0;
    class PizzaAtom extends atomicreact_ts_1.Atom {
        struct = () => ((0, jsx_runtime_1.jsx)("div", { class: style_module_css_1.atom, style: `background-color: ${this.prop.bgColor || "#00000000"}`, children: "\uD83C\uDF55" }));
        changeColor = (color) => {
            this.prop.bgColor = `#${color || Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0")}`;
            this.getElement().style.backgroundColor = this.prop.bgColor;
        };
    }
    exports.PizzaAtom = PizzaAtom;
});
dS("simple_frontend_library/atoms/buttons/tiny_chipmunk.atom.css","a8aeb270",["container","buttons","button","span","p","start"]);dA("simple_frontend_library/atoms/buttons/tiny_chipmunk", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./tiny_chipmunk.atom.css"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, tiny_chipmunk_atom_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TinyChipmunkButton = void 0;
    class TinyChipmunkButton extends atomicreact_ts_1.Atom {
        preRender = () => {
            console.log("TinyChipmunkButton pre render");
            if (!this.prop.started)
                this.prop.started = "Started";
        };
        onRender() {
            console.log("TinyChipmunkButton on render");
            if (this.prop.onClick) {
                this.sub.button.onclick = (ev) => {
                    ev.preventDefault();
                    this.prop.onClick(this);
                };
            }
        }
        struct = () => ((0, jsx_runtime_1.jsx)("div", { class: tiny_chipmunk_atom_css_1.container, children: (0, jsx_runtime_1.jsx)("div", { class: tiny_chipmunk_atom_css_1.buttons, children: (0, jsx_runtime_1.jsxs)("button", { sub: this.sub.button, children: [(0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("p", { "data-start": this.prop.started, "data-action": this.prop.action, "data-label": this.prop.label })] }) }) }));
        start() {
            this.sub.button.classList.add(tiny_chipmunk_atom_css_1.start);
        }
        stop() {
            this.sub.button.classList.remove(tiny_chipmunk_atom_css_1.start);
        }
        toogle() {
            this.sub.button.classList.toggle(tiny_chipmunk_atom_css_1.start);
        }
        isStarted() {
            return this.sub.button.classList.contains(tiny_chipmunk_atom_css_1.start);
        }
    }
    exports.TinyChipmunkButton = TinyChipmunkButton;
});
dA("simple_frontend/app", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./my_atoms/my_first_atom.jsx", "./global.module.css", "./app.atom.css", "./my_atoms/tag/index.jsx", "./my_atoms/pizza/index.jsx", "simple_frontend_library/atoms/buttons/tiny_chipmunk.jsx"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, my_first_atom_jsx_1, global_module_css_1, app_atom_css_1, index_jsx_1, index_jsx_2, tiny_chipmunk_jsx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppAtom = void 0;
    class AppAtom extends atomicreact_ts_1.Atom {
        onRender() {
            console.log("App was rendered!");
            this.sub.ResetButton.onclick = () => {
                this.sub.MyAtom.reset();
                this.sub.MyOtherAtom.reset();
            };
        }
        struct = () => ((0, jsx_runtime_1.jsxs)("div", { class: app_atom_css_1.app, children: [(0, jsx_runtime_1.jsx)(index_jsx_1.Tag, { label: this.id }), (0, jsx_runtime_1.jsx)("h2", { id: global_module_css_1.title, children: "Im App Atom!!!" }), (0, jsx_runtime_1.jsxs)("div", { sub: this.sub.Test, id: "test", children: [(0, jsx_runtime_1.jsxs)(my_first_atom_jsx_1.MyFirstAtom, { title: "This is my Title", description: "And this is my Description", claps: 17, onRendered: (id) => {
                                console.log(`Atom #${id} was rendered`);
                                this.someAction();
                            }, sub: this.sub.MyAtom, extraSection: (0, jsx_runtime_1.jsxs)("div", { children: ["This is a extra section as prop. Take your slice of ", (0, jsx_runtime_1.jsx)(index_jsx_2.PizzaAtom, { bgColor: "#0F00FF" })] }), children: [(0, jsx_runtime_1.jsxs)("h4", { children: ["Im in nucleus placed by #", this.id] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "item A" }), (0, jsx_runtime_1.jsx)("li", { sub: "itemB", children: "item B" }), (0, jsx_runtime_1.jsx)("li", { children: "item C" }), (0, jsx_runtime_1.jsx)("li", { children: "item D" })] })] }), (0, jsx_runtime_1.jsx)("br", {})] }), (0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h4", { children: "Feature: import external libraries" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Lets use some atoms from ", (0, jsx_runtime_1.jsx)("a", { href: "https://github.com/AtomicReact/simple-frontend-library", children: "https://github.com/AtomicReact/simple-frontend-library" })] }), (0, jsx_runtime_1.jsx)(tiny_chipmunk_jsx_1.TinyChipmunkButton, { label: "Hi Button", action: "Go", started: "Uhuu", onClick: (btn) => {
                                btn.toogle();
                                console.log("Is started:", btn.isStarted());
                            } })] }), (0, jsx_runtime_1.jsx)(my_first_atom_jsx_1.MyFirstAtom, { title: "Lorem Ipsum Title", description: "Some description here", claps: 0, sub: this.sub.MyOtherAtom, extraSection: (0, jsx_runtime_1.jsx)("h3", { children: "This is another extra section" }) }), (0, jsx_runtime_1.jsx)("button", { class: app_atom_css_1.reset, sub: this.sub.ResetButton, children: "Reset" })] }));
        someAction = () => {
            console.log(`#${this.id}`, "someAction() fired");
        };
    }
    exports.AppAtom = AppAtom;
});
dA("simple_frontend/index", ["require", "exports", "atomicreact-ts", "./app.jsx"], function (require, exports, atomicreact_ts_1, app_jsx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    atomicreact_ts_1.AtomicReact.onLoad = () => {
        console.log(`AtomicReact loaded! Rendering atoms...`);
        atomicreact_ts_1.AtomicReact.renderElement((new app_jsx_1.AppAtom()), document.getElementById("app"));
    };
});
atomicreact.load();