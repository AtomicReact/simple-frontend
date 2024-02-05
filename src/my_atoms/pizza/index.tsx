import { Atom } from "atomicreact-ts";

import { atom } from "./style.module.css"

interface IProps {
    bgColor?: string /* HEX color of background */
}
export class PizzaAtom extends Atom<{ prop: IProps }> {

    struct = () => (
        <div class={atom} style={`background-color: ${this.prop.bgColor || "#00000000"}`}>🍕</div>
    )

    changeColor = (color?: string) => {
        color = color || Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0")
        this.getElement().style.backgroundColor = `#${color}`
    }
}