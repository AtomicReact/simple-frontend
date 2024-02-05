import { Atom } from "atomicreact-ts";

import { atomID } from "./style.module.css"

export class Tag extends Atom<{ prop: { label: string } }> {
    struct = () => (<div class={atomID}>#{this.prop.label}</div>)
    onRender(): void {
        this.getElement().parentElement.style.position = "relative"
    }
}