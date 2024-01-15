/*<Loader>*/
if (this["PACKAGE_NAME"] == undefined) {
    Object.defineProperty(this, "PACKAGE_NAME", { value: "default", configurable: true });
}

const ATOMIC_REACT = "atomicreact"
const DEFINES = "defines"
const ATOMS = "atoms"
const LIB = "lib"

if (this[ATOMIC_REACT] == undefined) {
    Object.defineProperty(this, ATOMIC_REACT, { value: {} })
}
if (this[ATOMIC_REACT][DEFINES] == undefined) {
    Object.defineProperty(this[ATOMIC_REACT], DEFINES, { value: {} });
}
if (this[ATOMIC_REACT][ATOMS] == undefined) {
    Object.defineProperty(this[ATOMIC_REACT], ATOMS, { value: {} });
}


if (gotoEndOfPath == undefined) {
    function gotoEndOfPath(context, next, paths, contextPath = "") {

        if (context[next] == undefined) {
            Object.defineProperty(context, next, { value: {}, configurable: true })
        }

        if (paths.length == 1) {
            return { context: context[next], path: paths[0], contextPath }
        }

        context = context[next]
        next = paths[0]
        paths.shift()
        contextPath += `${contextPath == "" ? "" : "/"}${next}`
        return gotoEndOfPath(context, next, paths, contextPath)
    }
}

if (getValueOfPath == undefined) {
    function getValueOfPath(context, paths) {
        if (paths.length == 1) {
            return context[paths[0]] || null
        }
        const next = paths[0]
        if (context[next] == undefined) {
            return null
        }
        paths.shift()
        return getValueOfPath(context[next], paths)
    }
}

if (resolveModuleName == undefined) {
    function resolveModuleName(moduleName) {
        return moduleName.replaceAll("../", "").replaceAll("./", "").replaceAll(".tsx", "").replaceAll(".jsx", "").replaceAll(".ts", "").replaceAll(".js", "")
    }
}

if (isLocalModule == undefined) {
    function isLocalModule(moduleName) {
        return (moduleName.indexOf("./") == 0 && moduleName.indexOf("../") == -1)
    }
}

if (sumPath == undefined) {
    function sumPath(absolutePath, relativePath) {
        let absolute = absolutePath.split("/")
        const backTimes = relativePath.split("../").length - 1
        if (absolute.length <= backTimes) return resolveModuleName(relativePath)
        absolute.splice(absolute.length - backTimes)
        return resolveModuleName(`${absolute.join("/")}${absolutePath == "" ? "" : "/"}${relativePath}`)
    }
}

if (require == undefined) {
    function require(moduleName, contextPath = "") {

        const moduleParts = moduleName.split("/")
        if (moduleParts[0] === ATOMIC_REACT) {
            if (moduleParts.length == 1) return (this[ATOMIC_REACT][LIB] || this[ATOMIC_REACT])
            else return getValueOfPath(this, moduleParts)
        }

        if (moduleName.indexOf("./") >= 0) {

            const path = sumPath(contextPath, moduleName)
            const paths = path.split("/")

            return getValueOfPath(this[ATOMIC_REACT][ATOMS][PACKAGE_NAME], paths)
        }

        return (this[ATOMIC_REACT][ATOMS][resolveModuleName(moduleName)] || this[ATOMIC_REACT])
    }
}

if (define == undefined) {
    function define(moduleName, inputs, func, forceDefine = false) {

        let _exports = { "__esModule": true }

        if (moduleName === ATOMIC_REACT && !ATOMIC_REACT[moduleName]) {
            func(require, _exports, ...inputs.slice(2).map(i => require(i)))

            if (this[ATOMIC_REACT].lib == undefined) {
                Object.defineProperty(this[ATOMIC_REACT], "lib", { value: _exports })
            }
            if (this.AtomicReact == undefined) {
                Object.defineProperty(this, "AtomicReact", { value: this[ATOMIC_REACT].lib.AtomicReact })
            }
            if (this.JSX == undefined) {
                Object.defineProperty(this, "JSX", { value: this[ATOMIC_REACT].lib.JSX })
            }

            return
        }

        const paths = moduleName.split("/")

        let { context, path, contextPath } = gotoEndOfPath(this[ATOMIC_REACT][ATOMS], PACKAGE_NAME, paths)

        const imports = [require, _exports, ...inputs.slice(2).map(i => require(i, contextPath))]

        let importFail = false
        for (let i = 0; i < imports.length; i++) {
            if (imports[i] !== null) continue

            importFail = true

            /* let's schedule to define this module when the import was defined */
            let moduleNameFuture = sumPath(contextPath, inputs[i])

            if (this[ATOMIC_REACT][DEFINES][moduleNameFuture] == undefined) {
                Object.defineProperty(this[ATOMIC_REACT][DEFINES], moduleNameFuture, { value: {}, configurable: true })
            }

            /* Define dependency */
            Object.defineProperty(this[ATOMIC_REACT][DEFINES][moduleNameFuture], moduleName, {
                value: () => {
                    define(moduleName, inputs, func, true)
                }, configurable: true
            })
        }

        try {
            func(...imports)
        } catch (e) {
            importFail = true
        }

        if (importFail) return

        /* Declare this atom */
        Object.defineProperty(context, path, { value: _exports, configurable: true })

        if (this[ATOMIC_REACT][DEFINES][moduleName] != undefined) {
            /* ReDefines atoms that are importing this atom */
            for (let dependent of Object.getOwnPropertyNames(this[ATOMIC_REACT][DEFINES][moduleName])) {
                this[ATOMIC_REACT][DEFINES][moduleName][dependent]()
            }
            /* Remove from defines */
            delete this[ATOMIC_REACT][DEFINES][moduleName]
        }

    }
}
/*</Loader>*/
define("atomicreact", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JSX = exports.resolveModuleName = exports.AtomicClass = exports.AtomicReact = exports.EAtomicEvent = void 0;
    (function (EAtomicEvent) {
        EAtomicEvent["LOGIC_LOADED"] = "<ATOMIC.LOGIC_LOADED>";
    })(exports.EAtomicEvent || (exports.EAtomicEvent = {}));
    class AtomicReact {
        static atoms = [];
        static hotReload;
        static onLoad = null;
        static ClientVariables = {
            Id: "data-atomic-id",
            Key: "data-atomic-key",
            Nucleus: "data-atomic-nucleus",
            Sub: "data-atomic-sub",
            SubOf: "data-atomic-subof"
        };
        static AtomicVariables = {
            Nucleus: "nucleus",
            Sub: "sub"
        };
        static AtomicEvents = {
            LOGIC_LOADED: exports.EAtomicEvent.LOGIC_LOADED
        };
        static enableHotReloadOnClient(addrs, port) {
            if (this["WebSocketClient"] != null && this["WebSocketClient"] != undefined) {
                return;
            }
            this["WebSocketClient"] = new WebSocket("ws://" + addrs + ":" + port);
            this["WebSocketClient"].onmessage = function (e) {
                console.log(e.data);
                if (e.data == "<atomicreact.hotreload.RELOAD>") {
                    location.reload();
                }
            };
        }
        static makeID(length = 8) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            return result;
        }
        static renderElement(atomicClass, domElement, insertPosition) {
            const renderedAtom = atomicClass.render(atomicClass.props || {}, {
                id: atomicClass.id,
                key: atomicClass["__proto__"]["constructor"]["name"],
            });
            if (!insertPosition) {
                domElement.innerHTML = renderedAtom;
            }
            else {
                domElement.insertAdjacentHTML(insertPosition, renderedAtom);
            }
            const rootAtom = document.querySelector(`[${AtomicReact.ClientVariables.Id}="${atomicClass.id}"]`);
            rootAtom.Atomic = {
                id: atomicClass.id,
                key: atomicClass["__proto__"]["constructor"]["name"],
                main: atomicClass
            };
            exports.JSX["jsx-runtime"].queue.reverse().forEach((item) => {
                let atom = document.querySelector(`[${AtomicReact.ClientVariables.Id}="${item.id}"]`);
                atom.Atomic = {
                    id: item.id,
                    key: item.atomicClass["prototype"]["constructor"]["name"],
                    main: new (item.atomicClass)(item.props, item.id)
                };
                atom.Atomic.main.id = item.id;
                if (atom.Atomic.main.onRender)
                    atom.Atomic.main.onRender();
            });
            exports.JSX["jsx-runtime"].queue = [];
            rootAtom.Atomic.main.onRender();
            return rootAtom;
        }
        static getSub(atomElement, subName) {
            return (atomElement.querySelector(`[${AtomicReact.ClientVariables.SubOf}="${atomElement.getAttribute(AtomicReact.ClientVariables.Id)}"][${AtomicReact.ClientVariables.Sub}="${subName}"]`));
        }
        static getAtomicSub(atomElement, subName) {
            return atomElement.querySelector(`[${AtomicReact.ClientVariables.SubOf}="${atomElement.getAttribute(AtomicReact.ClientVariables.Id)}"][${AtomicReact.ClientVariables.Sub}="${subName}"]`).Atomic.main;
        }
        static getNucleus(atomElement) {
            return document.querySelector(`[${AtomicReact.ClientVariables.Nucleus}="${atomElement.getAttribute(AtomicReact.ClientVariables.Id)}"]`);
        }
        static getElement(atomId) {
            return document.querySelector(`[${AtomicReact.ClientVariables.Id}="${atomId}"]`);
        }
        static add(atomElement, atomicClass, insertPosition) {
            insertPosition = insertPosition || "beforeend";
            const nucleusElement = AtomicReact.getNucleus(atomElement);
            const insertedAtom = AtomicReact.renderElement(atomicClass, nucleusElement, insertPosition);
            if (atomElement.Atomic.main && atomElement.Atomic.main.onAdded) {
                atomElement.Atomic.main.onAdded(insertedAtom);
            }
            return insertedAtom;
        }
    }
    exports.AtomicReact = AtomicReact;
    class AtomicClass {
        props;
        id;
        struct = null;
        constructor(props, id) {
            this.props = props;
            this.id = id;
            if (!this.props)
                this.props = {};
            if (!this.id)
                this.id = AtomicReact.makeID();
            if (this.props["children"])
                delete this.props["children"];
        }
        render(props, atom) {
            if (!this.struct)
                return "";
            const beforeAtom = Object.assign({}, exports.JSX["jsx-runtime"].atom);
            exports.JSX["jsx-runtime"].atom = {
                id: this.id,
                key: this["__proto__"]["constructor"]["name"]
            };
            let rendered = this.struct(props, atom);
            const tag = rendered.trim();
            if (tag.startsWith("<") && tag.endsWith(">")) {
                const posToSplit = (tag.at(tag.length - 2) == "/") ? tag.length - 2 : tag.indexOf(">");
                rendered = `${tag.slice(0, posToSplit)} ${AtomicReact.ClientVariables.Key}="${this["__proto__"]["constructor"]["name"]}" ${AtomicReact.ClientVariables.Id}="${this.id}"${tag.slice(posToSplit, tag.length)}`;
            }
            exports.JSX["jsx-runtime"].atom = Object.assign({}, beforeAtom);
            return rendered;
        }
        getElement() {
            return AtomicReact.getElement(this.id);
        }
        add(atomicClass, insertPosition) {
            return AtomicReact.add(this.getElement(), atomicClass, insertPosition);
        }
        getNucleus() {
            return AtomicReact.getNucleus(this.getElement());
        }
        getSub(subName) {
            return AtomicReact.getSub(this.getElement(), subName);
        }
        getAtomicSub(subName) {
            return AtomicReact.getAtomicSub(this.getElement(), subName);
        }
        onRender() { }
        onAdded(atomAdded) { }
    }
    exports.AtomicClass = AtomicClass;
    function resolveModuleName(moduleName) {
        return moduleName.replaceAll("\\", "/").replaceAll("../", "").replaceAll("./", "").replaceAll(".tsx", "").replaceAll(".jsx", "").replaceAll(".ts", "").replaceAll(".js", "");
    }
    exports.resolveModuleName = resolveModuleName;
    exports.JSX = {
        ["jsx-runtime"]: {
            atom: null,
            queue: [],
            jsxs(source, props) {
                props = props || {};
                let atom = null;
                if (typeof source == "function") {
                    atom = {
                        key: source.name,
                        id: AtomicReact.makeID()
                    };
                    if (source["__proto__"]["name"] && source["__proto__"]["name"] === "AtomicClass") {
                        let instance = new source(Object.assign({}, props));
                        instance.id = atom.id;
                        exports.JSX["jsx-runtime"].queue.push({
                            id: atom.id,
                            atomicClass: source,
                            props
                        });
                        source = instance.struct ? instance.struct : () => ("");
                    }
                    let beforeAtom = Object.assign({}, exports.JSX["jsx-runtime"].atom);
                    exports.JSX["jsx-runtime"].atom = Object.assign({}, atom);
                    source = source.call(this, props, atom);
                    exports.JSX["jsx-runtime"].atom = Object.assign({}, beforeAtom);
                }
                if (!props["children"])
                    props["children"] = [];
                if (typeof props["children"] == "string")
                    props["children"] = [props["children"]];
                let attributes = Object.keys(props)
                    .map(key => {
                    if (key === "children")
                        return null;
                    if (key === AtomicReact.AtomicVariables.Nucleus)
                        return `${AtomicReact.ClientVariables.Nucleus}="${exports.JSX["jsx-runtime"].atom.id}"`;
                    const value = props[key];
                    if (key === AtomicReact.AtomicVariables.Sub)
                        return `${AtomicReact.ClientVariables.SubOf}="${exports.JSX["jsx-runtime"].atom.id}" ${AtomicReact.ClientVariables.Sub}="${value}"`;
                    return `${key}="${value}"`;
                })
                    .filter(i => i != null);
                if (atom) {
                    attributes.push(...[`${AtomicReact.ClientVariables.Key}="${atom.key}"`, `${AtomicReact.ClientVariables.Id}="${atom.id}"`]);
                    if (props["children"] && props["children"].length > 0) {
                        let regExpNucleusTag = new RegExp('<(.)*' + AtomicReact.ClientVariables.Nucleus + '[^>]*', 'gi');
                        let openEndNucleusTag = -1;
                        while (regExpNucleusTag.exec(source)) {
                            openEndNucleusTag = regExpNucleusTag.lastIndex + 1;
                        }
                        if (openEndNucleusTag != -1) {
                            source = `${source.slice(0, openEndNucleusTag)}${props["children"].join("")}${source.slice(openEndNucleusTag, source.length)}`;
                        }
                    }
                }
                const attributesAsString = attributes.join(" ");
                const tag = source.trim();
                if (tag.startsWith("<") && tag.endsWith(">")) {
                    const posToSplit = (tag.at(tag.length - 2) == "/") ? tag.length - 2 : tag.indexOf(">");
                    source = `${tag.slice(0, posToSplit)} ${attributesAsString}${tag.slice(posToSplit, tag.length)}`;
                }
                else {
                    source = `<${source} ${attributesAsString}> ${((props["children"]).join) ? (props["children"]).join("") : (props["children"])}</${source}>`;
                }
                return source;
            },
            jsx(name, props) {
                return exports.JSX["jsx-runtime"].jsxs(name, props);
            },
        }
    };
});
