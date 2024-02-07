function e(e,t,i=this,n,c={}){null==this[e]&&Object.defineProperty(i,e,{value:t,...c}),n&&n()}e("ATOMIC_REACT","atomicreact"),e("ATOMIC_REACT_ALIAS",[ATOMIC_REACT,"atomicreact-ts"]),e("DEFINES","defines"),e("ATOMS","atoms"),e("MODULES","modules"),e("LIB","lib"),e("LOAD","load"),e(ATOMIC_REACT,{}),e(DEFINES,{},this[ATOMIC_REACT]),e(ATOMS,{},this[ATOMIC_REACT]),e(LOAD,(()=>{window.addEventListener(this[ATOMIC_REACT][LIB].AtomicReact.AtomicEvents.LOADED,(function(e){window.addEventListener("load",(function(e){this[ATOMIC_REACT][LIB].AtomicReact.load()}))})),0==Object.keys(this[ATOMIC_REACT][DEFINES]).length&&window.dispatchEvent(new CustomEvent(this[ATOMIC_REACT][LIB].AtomicReact.AtomicEvents.LOADED))}),this[ATOMIC_REACT]),e("gotoEndOfPath",(function(e,t,i,n=""){return null==e[t]&&Object.defineProperty(e,t,{value:{},configurable:!0}),1==i.length?{context:e[t],path:i[0],contextPath:n}:(e=e[t],t=i[0],i.shift(),n+=`${""==n?"":"/"}${t}`,gotoEndOfPath(e,t,i,n))})),e("getValueOfPath",(function e(t,i){if(1==i.length)return t[i[0]]||null;const n=i[0];return null==t[n]?null:(i.shift(),e(t[n],i))})),e("resolveModuleName",(function(e){return e.replaceAll("../","").replaceAll("./","").replaceAll(".tsx","").replaceAll(".jsx","").replaceAll(".ts","").replaceAll(".js","")})),e("isLocalModule",(function(e){return 0==e.indexOf("./")&&-1==e.indexOf("../")})),e("sumPath",(function(e,t){let i=e.split("/");const n=t.split("../").length-1;return i.length<=n?resolveModuleName(t):(i.splice(i.length-n),resolveModuleName(`${i.join("/")}${""==e?"":"/"}${t}`))})),e("require",(function(e,t=""){const i=e.split("/");if(ATOMIC_REACT_ALIAS.includes(i[0]))return 1==i.length?this[ATOMIC_REACT][LIB]||this[ATOMIC_REACT]:getValueOfPath(this,i);if(e.indexOf("./")>=0){const i=sumPath(t,e);return new Proxy({path:i},{get:(e,t)=>getValueOfPath(window[ATOMIC_REACT],e.path.split("/"))[t]})}return this[ATOMIC_REACT]})),e("define",(function(t,i,n){let c={__esModule:!0};if(ATOMIC_REACT_ALIAS.includes(t)&&!ATOMIC_REACT[t])return n(require,c,...i.slice(2).map((e=>require(e)))),e("lib",c,this[ATOMIC_REACT]),e("AtomicReact",this[ATOMIC_REACT].lib.AtomicReact),e("global",this[ATOMIC_REACT],AtomicReact),void e("JSX",this[ATOMIC_REACT].lib.JSX);const o=t.split("/"),r=gotoEndOfPath(this,ATOMIC_REACT,o);let l=r.context,a=r.path,s=r.contextPath;const u=[require,c,...i.slice(2).map((e=>require(e,s)))];let A=!1;for(let e=0;e<u.length;e++){if(null!==u[e])continue;A=!0;let c=sumPath(s,i[e]);null==this[ATOMIC_REACT][DEFINES][c]&&Object.defineProperty(this[ATOMIC_REACT][DEFINES],c,{value:{},configurable:!0}),Object.defineProperty(this[ATOMIC_REACT][DEFINES][c],t,{value:()=>{define(t,i,n,!0)},configurable:!0})}if(!A){try{n(...u)}catch(e){return}if(Object.defineProperty(l,a,{value:c,configurable:!0}),Object.getOwnPropertyNames(c).forEach((e=>{[this[ATOMIC_REACT][LIB].Atom.name].includes(Object.getPrototypeOf(c[e]).name)&&Object.defineProperty(c[e].prototype,"__factory",{value:`${t}`,configurable:!0})})),null!=this[ATOMIC_REACT][DEFINES][t]){let e=Object.getOwnPropertyNames(this[ATOMIC_REACT][DEFINES][t]);for(let i=0;i<e.length;i++){let n=e[i];this[ATOMIC_REACT][DEFINES][t][n]()}delete this[ATOMIC_REACT][DEFINES][t]}}}),this),e("dA",(function(e,t,i){return define(`${ATOMS}/${e}`,t,i)})),e("dM",(function(e,t,i){return define(`${MODULES}/${e}`,t,i)})),e("dS",(function(e,t,i){dA(e,["require","exports",ATOMIC_REACT],(function(e,n,c){Object.defineProperties(n,{__esModule:{value:!0},default:{value:{}}}),i.forEach((e=>{n.default[e]=`${t}_${e}`,Object.defineProperty(n,e,{get:function(){return n.default[e]}})}))}))})),define("atomicreact",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JSX=t.resolveModuleName=t.Atom=t.AtomicReact=t.EAtomicEvent=void 0,(t.EAtomicEvent||(t.EAtomicEvent={})).LOADED="<ATOMIC.LOADED>";class AtomicReact{static hotReload;static onLoads=[];static set onLoad(e){AtomicReact.onLoads.push(e)}static load(){for(let e=0;e<AtomicReact.onLoads.length;e++)try{AtomicReact.onLoads[e]()}catch(e){}}static ClientVariables={Id:"a-i",Nucleus:"a-n",Sub:"a-s",SubOf:"a-sof"};static AtomicVariables={Nucleus:"nucleus",Sub:"sub"};static AtomicEvents={LOADED:t.EAtomicEvent.LOADED};static global;static makeID(e=6){let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(65+Math.floor(25*Math.random()));return AtomicReact.getElement(t)?AtomicReact.makeID(e):t}static render(e,i={[AtomicReact.ClientVariables.Id]:e.id}){if(!e.struct)return"";const n=Object.assign({},t.JSX["jsx-runtime"].atom);t.JSX["jsx-runtime"].atom={atom:e};let c=e.struct(),o="";Object.getOwnPropertyNames(i).forEach((e=>{o+=` ${e}="${i[e]}"`}));const r=c.trim();if(r.startsWith("<")&&r.endsWith(">")){const e="/"==r.charAt(r.length-2)?r.length-2:r.indexOf(">");c=`${r.slice(0,e)}${o}${r.slice(e,r.length)}`}return t.JSX["jsx-runtime"].atom=Object.assign({},n),c}static renderElement(e,i,n,c){if(n)if("replace"===n){if(!i.parentNode)throw new Error("Can't replace element. Element don't have parent node");i.innerHTML="";const t=document.createElement("div");t.innerHTML=AtomicReact.render(e,c),i.parentElement.replaceChild(t.firstChild,i)}else i.insertAdjacentHTML(n,AtomicReact.render(e,c));else i.innerHTML=AtomicReact.render(e,c);const o=document.querySelector(`[${AtomicReact.ClientVariables.Id}="${e.id}"]`);return o.Atomic={atom:e},t.JSX["jsx-runtime"].queue.reverse().forEach((e=>{let t=document.querySelector(`[${AtomicReact.ClientVariables.Id}="${e.atom.id}"]`);t&&(t.Atomic={atom:e.atom},t.Atomic.atom.onRender&&t.Atomic.atom.onRender())})),t.JSX["jsx-runtime"].queue=[],o.Atomic.atom.onRender(),o}static getSub(e,t){return document.querySelector(`[${AtomicReact.ClientVariables.SubOf}="${e.id}"][${AtomicReact.ClientVariables.Sub}="${t}"]`)}static getAtomicSub(e,t){return AtomicReact.getAtom(AtomicReact.getSub(e,t))}static getNucleus(e){return document.querySelector(`[${AtomicReact.ClientVariables.Nucleus}="${e.id}"]`)}static getElement(e){return document.querySelector(`[${AtomicReact.ClientVariables.Id}="${e}"]`)}static getAtom(e){return e&&e.Atomic&&e.Atomic.atom?e.Atomic.atom:null}static add(e,t,i){i=i||"beforeend",AtomicReact.renderElement(t,e.nucleus,i),e.onAdded&&e.onAdded(t)}}t.AtomicReact=AtomicReact;class Atom{prop;id;struct=null;sub;constructor(e,t){this.prop=e,this.id=t,this.prop||(this.prop={}),this.id||(this.id=AtomicReact.makeID()),this.prop.children&&delete this.prop.children,this.sub=new Proxy({},{get:(e,t)=>AtomicReact.getAtomicSub(this,t)||AtomicReact.getSub(this,t)||t})}getElement(){return AtomicReact.getElement(this.id)}add(e,t){AtomicReact.add(this,e,t)}get nucleus(){return AtomicReact.getNucleus(this)}onRender(){}onAdded(e){}}t.Atom=Atom,t.resolveModuleName=function(e){return e.replaceAll("\\","/").replaceAll("../","").replaceAll("./","").replaceAll(".tsx","").replaceAll(".jsx","").replaceAll(".ts","").replaceAll(".js","")},t.JSX={"jsx-runtime":{atom:null,queue:[],jsxs(e,i){i=i||{};let n=null;if("function"==typeof e){if(n={atom:null},Object.getPrototypeOf(e).name&&Object.getPrototypeOf(e).name===Atom.name){let c=new e(Object.assign({},i));t.JSX["jsx-runtime"].queue.push({atom:c}),n.atom=c,e=c.struct?c.struct:()=>""}let c=Object.assign({},t.JSX["jsx-runtime"].atom);t.JSX["jsx-runtime"].atom=Object.assign({},n),e=e.call(this),t.JSX["jsx-runtime"].atom=Object.assign({},c)}void 0===i.children&&(i.children=[]),"string"==typeof i.children&&(i.children=[i.children]);let c=Object.keys(i).map((e=>{if("children"===e)return null;if(e===AtomicReact.AtomicVariables.Nucleus)return`${AtomicReact.ClientVariables.Nucleus}="${t.JSX["jsx-runtime"].atom.atom.id}"`;const c=i[e];return e===AtomicReact.AtomicVariables.Sub?`${AtomicReact.ClientVariables.SubOf}="${t.JSX["jsx-runtime"].atom.atom.id}" ${AtomicReact.ClientVariables.Sub}="${c}"`:n?null:`${e}="${c}"`})).filter((e=>null!=e));if(n&&(c.push(`${AtomicReact.ClientVariables.Id}="${n.atom.id}"`),i.children&&i.children.length>0)){Object.defineProperty(n.atom,"__nucleus_children",{value:i.children.join("")});let t=new RegExp("<(.)*"+AtomicReact.ClientVariables.Nucleus+"[^>]*","gi"),c=-1;for(;t.exec(e);)c=t.lastIndex+1;-1!=c&&(e=`${e.slice(0,c)}${i.children.join("")}${e.slice(c,e.length)}`)}const o=c.join(" "),r=e.trim();if(r.startsWith("<")&&r.endsWith(">")){const t="/"==r.charAt(r.length-2)?r.length-2:r.indexOf(">");e=`${r.slice(0,t)} ${o}${r.slice(t,r.length)}`}else e=`<${e} ${o}> ${i.children.join?i.children.join(""):i.children}</${e}>`;return e},jsx:(e,i)=>t.JSX["jsx-runtime"].jsxs(e,i)}}}));dM("HotReload/lib", ["require", "exports", "../../lib.js"], function (require, exports, lib_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Client = exports.CommandType = exports.__config = void 0;
    exports.__config = {
        host: "127.0.0.1",
        port: 1337,
        verbose: false
    };
    (function (CommandType) {
        CommandType[CommandType["CSS"] = 0] = "CSS";
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
                        case exports.CommandType.CSS:
                            this.redefineCSS(msgData.uid, msgData.command.content);
                            break;
                        case exports.CommandType.SCRIPT:
                            this.redefineScript(msgData.command.moduleName, msgData.command.content);
                            break;
                        case exports.CommandType.EVAL:
                            eval(msgData.command.content);
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
        static redefineScript(moduleName, script) {
            eval(script);
            const context = getValueOfPath(lib_js_1.AtomicReact.global, moduleName.split("/"));
            document.querySelectorAll(`[a-i]`).forEach((atomEl) => {
                if (!atomEl || !atomEl.Atomic || !atomEl.Atomic.atom)
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
        static redefineCSS(uid, css) {
            let style = document.querySelector(`style[for="${uid}"]`);
            if (!style) {
                style = document.createElement("style");
                style.setAttribute("for", uid);
                document.head.appendChild(style);
            }
            style.innerHTML = css;
        }
        static refreshBundle(version) {
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
    exports.__config = Object.assign((exports.__config) ? exports.__config : {}, { "host": "127.0.0.1", "port": 1717, "verbose": false });
});
dS("simple_frontend/app.atom.css","a8c266da",["app","reset"]);dA("simple_frontend/app", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./my_atoms/my_first_atom.jsx", "./global.module.css", "./app.atom.css", "./my_atoms/tag/index.jsx", "./my_atoms/pizza/index.jsx"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, my_first_atom_jsx_1, global_module_css_1, app_atom_css_1, index_jsx_1, index_jsx_2) {
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
        struct = () => ((0, jsx_runtime_1.jsxs)("div", { class: app_atom_css_1.app, children: [(0, jsx_runtime_1.jsx)(index_jsx_1.Tag, { label: this.id }), (0, jsx_runtime_1.jsx)("h2", { id: global_module_css_1.title, children: "Im App Atom" }), (0, jsx_runtime_1.jsxs)("div", { sub: this.sub.Test, id: "test", children: [(0, jsx_runtime_1.jsxs)(my_first_atom_jsx_1.MyFirstAtom, { title: "This is my Title", description: "And this is my Description", claps: 17, onRendered: (id) => {
                                console.log(`Atom #${id} was rendered`);
                                this.someAction();
                            }, sub: this.sub.MyAtom, extraSection: (0, jsx_runtime_1.jsxs)("div", { children: ["This is a extra section as prop. Take your slice of ", (0, jsx_runtime_1.jsx)(index_jsx_2.PizzaAtom, { bgColor: "#0F00FF" })] }), children: [(0, jsx_runtime_1.jsxs)("h4", { children: ["Im in nucleus placed by #", this.id] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "item A" }), (0, jsx_runtime_1.jsx)("li", { sub: "itemB", children: "item B" }), (0, jsx_runtime_1.jsx)("li", { children: "item C" }), (0, jsx_runtime_1.jsx)("li", { children: "item D" })] })] }), (0, jsx_runtime_1.jsx)("br", {})] }), (0, jsx_runtime_1.jsx)(my_first_atom_jsx_1.MyFirstAtom, { title: "Lorem Ipsum Title", description: "Some description here", claps: 0, sub: this.sub.MyOtherAtom, extraSection: (0, jsx_runtime_1.jsx)("h3", { children: "This is another extra section" }) }), (0, jsx_runtime_1.jsx)("button", { class: app_atom_css_1.reset, sub: this.sub.ResetButton, children: "Reset" })] }));
        someAction = () => {
            console.log(`#${this.id}`, "someAction() fired");
        };
    }
    exports.AppAtom = AppAtom;
});
dS("simple_frontend/global.module.css","a3532267",["largerText","title"]);dA("simple_frontend/index", ["require", "exports", "atomicreact-ts", "./app.jsx"], function (require, exports, atomicreact_ts_1, app_jsx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    atomicreact_ts_1.AtomicReact.onLoad = () => {
        console.log(`AtomicReact loaded! Rendering atoms...`);
        atomicreact_ts_1.AtomicReact.renderElement((new app_jsx_1.AppAtom()), document.getElementById("app"));
    };
});
dS("simple_frontend/my_atoms/my_first_atom.module.css","a2dd7b38",["atom","title","main-buttons","bottom"]);dA("simple_frontend/my_atoms/my_first_atom", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./pizza/index.jsx", "../global.module.css", "./my_first_atom.module.css", "./tag/index.jsx"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, index_jsx_1, global_module_css_1, my_first_atom_module_css_1, index_jsx_2) {
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
dA("simple_frontend/my_atoms/pizza/index", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./style.module.css"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, style_module_css_1) {
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
dS("simple_frontend/my_atoms/pizza/style.module.css","a8c973c5",["atom"]);dA("simple_frontend/my_atoms/tag/index", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./style.module.css"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, style_module_css_1) {
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
dS("simple_frontend/my_atoms/tag/style.module.css","a0baefa2",["atomID"]);atomicreact.load();