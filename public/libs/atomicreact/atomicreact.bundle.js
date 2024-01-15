Object.defineProperty(this, "PACKAGE_NAME", { value: "production_simple_frontend", configurable: true })

if (this[ATOMIC_REACT][ATOMS][PACKAGE_NAME] == undefined) {
    Object.defineProperty(this[ATOMIC_REACT][ATOMS], `${PACKAGE_NAME}`, { value: {} });
}
define("global.module.css", ["require", "exports", "atomicreact"], function (require, exports, atomicreact_1) {
    "use strict";
    Object.defineProperties(exports, {"__esModule": { value: true }, "default": { value: {} }});
    eval(`["app","largerText"]`)
        .forEach(token => {
            exports.default[token] = `a2d554a8 ${token}`;
            Object.defineProperty(exports, token, {get: function(){
                return exports.default[token]
            }}) 
        })
});define("my_atoms/my_first_atom.module.css", ["require", "exports", "atomicreact"], function (require, exports, atomicreact_1) {
    "use strict";
    Object.defineProperties(exports, {"__esModule": { value: true }, "default": { value: {} }});
    eval(`["atom","main-buttons","bottom"]`)
        .forEach(token => {
            exports.default[token] = `a5f7e580 ${token}`;
            Object.defineProperty(exports, token, {get: function(){
                return exports.default[token]
            }}) 
        })
});define("my_atoms/pizza/style.module.css", ["require", "exports", "atomicreact"], function (require, exports, atomicreact_1) {
    "use strict";
    Object.defineProperties(exports, {"__esModule": { value: true }, "default": { value: {} }});
    eval(`["atom"]`)
        .forEach(token => {
            exports.default[token] = `ac4b036d ${token}`;
            Object.defineProperty(exports, token, {get: function(){
                return exports.default[token]
            }}) 
        })
});define("app", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact", "./my_atoms/my_first_atom.jsx", "./app.module.css"], function (require, exports, jsx_runtime_1, atomicreact_1, my_first_atom_jsx_1, app_module_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppAtom = void 0;
    class AppAtom extends atomicreact_1.AtomicClass {
        onRender() {
            console.log("App was rendered!");
        }
        struct = (props, atom) => ((0, jsx_runtime_1.jsxs)("div", { class: app_module_css_1.app, children: [(0, jsx_runtime_1.jsxs)("h2", { children: ["Im App Atom (#", atom.id, ")"] }), (0, jsx_runtime_1.jsxs)(my_first_atom_jsx_1.MyFirstAtom, { title: "This is my Title", description: "And this is my Description", claps: 17, onRendered: (id) => {
                        console.log(`Atom #${id} was rendered`);
                        this.someAction();
                    }, sub: "myAtom", children: [(0, jsx_runtime_1.jsx)("h4", { children: "Im in nucleus of my_first_atom" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "item A" }), (0, jsx_runtime_1.jsx)("li", { sub: "itemB", children: "item B" }), (0, jsx_runtime_1.jsx)("li", { children: "item C" })] })] })] }));
        someAction = () => {
            console.log(`#${this.id}`, "someAction() fired");
        };
    }
    exports.AppAtom = AppAtom;
});
define("index", ["require", "exports", "atomicreact", "./app.jsx"], function (require, exports, atomicreact_1, app_jsx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    atomicreact_1.AtomicReact.onLoad = () => {
        console.log(`AtomicReact loaded! Rendering atoms...`);
        atomicreact_1.AtomicReact.renderElement((new app_jsx_1.AppAtom()), document.getElementById("app"));
    };
});
define("my_atoms/my_first_atom", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact", "./pizza/index.jsx", "./my_first_atom.module.css", "../global.module.css"], function (require, exports, jsx_runtime_1, atomicreact_1, index_jsx_1, my_first_atom_module_css_1, global_module_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MyFirstAtom = void 0;
    var Subs;
    (function (Subs) {
        Subs[Subs["ClapButton"] = 0] = "ClapButton";
        Subs["ClapSpan"] = "ClapSpan";
        Subs["PizzaButton"] = "PizzaButton";
    })(Subs || (Subs = {}));
    class MyFirstAtom extends atomicreact_1.AtomicClass {
        props;
        clapButton;
        clapSpan;
        pizzaButton;
        constructor(props) {
            super(props);
            this.props = props;
        }
        struct = ({ title, description, claps, onRendered: someFunction }, atom) => ((0, jsx_runtime_1.jsxs)("div", { class: my_first_atom_module_css_1.default.atom, children: [(0, jsx_runtime_1.jsxs)("h3", { children: [atom.key, " | ", title, " (#", this.id, ")"] }), (0, jsx_runtime_1.jsx)("p", { children: description }), (0, jsx_runtime_1.jsx)("button", { class: my_first_atom_module_css_1.default["main-buttons"], sub: Subs.PizzaButton, children: "Give slice of \uD83C\uDF55" }), (0, jsx_runtime_1.jsx)("div", { nucleus: true }), (0, jsx_runtime_1.jsxs)("div", { class: my_first_atom_module_css_1.bottom, children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { class: global_module_css_1.largerText, sub: Subs.ClapSpan, children: claps }), " \uD83D\uDC4F"] }), (0, jsx_runtime_1.jsx)("button", { sub: Subs.ClapButton, children: "\uD83D\uDC4F this Atom" })] })] }));
        onRender() {
            console.log(`on render of atom #${this.id} with props`, this.props, "Subs: ", Subs);
            this.clapButton = this.getSub(Subs.ClapButton);
            this.clapSpan = this.getSub(Subs.ClapSpan);
            this.pizzaButton = this.getSub(Subs.PizzaButton);
            this.clapButton.onclick = this.clap.bind(this);
            this.pizzaButton.onclick = this.addPizza.bind(this);
            if (this.props.onRendered)
                this.props.onRendered(this.id);
        }
        clap(ev) {
            ev.preventDefault();
            console.log("Clap button fired!");
            this.props.claps++;
            this.clapSpan.innerText = `${this.props.claps}`;
        }
        addPizza(ev) {
            const randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
            this.add(new index_jsx_1.PizzaAtom({ bgColor: `#${randomColor}` }));
        }
    }
    exports.MyFirstAtom = MyFirstAtom;
});
define("my_atoms/pizza/index", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact", "./style.module.css"], function (require, exports, jsx_runtime_1, atomicreact_1, style_module_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PizzaAtom = void 0;
    class PizzaAtom extends atomicreact_1.AtomicClass {
        props;
        constructor(props) {
            super(props);
            this.props = props;
        }
        struct = () => ((0, jsx_runtime_1.jsx)("div", { class: style_module_css_1.atom, style: `background-color: ${this.props.bgColor || "#00000000"}`, children: "\uD83C\uDF55" }));
    }
    exports.PizzaAtom = PizzaAtom;
});
if (Object.keys(this[ATOMIC_REACT][DEFINES]).length == 0) {
    
    window.addEventListener(this[ATOMIC_REACT][LIB].AtomicReact.AtomicEvents.LOGIC_LOADED, function (event) {
        window.addEventListener("load", function (event) {
            if (this[ATOMIC_REACT][LIB].AtomicReact.onLoad) this[ATOMIC_REACT][LIB].AtomicReact.onLoad()
        });
    });

    window.dispatchEvent(new CustomEvent(this[ATOMIC_REACT].lib.AtomicReact.AtomicEvents.LOGIC_LOADED))
}

