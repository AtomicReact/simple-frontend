import { AtomicClass, IAtomic } from "atomicreact-ts";

import { atom } from "./style.module.css"

interface IProps {
    bgColor?: string /* HEX color of background */
}
export class PizzaAtom extends AtomicClass {

    constructor(public props: IProps) {
        super(props)
    }

    struct = () => (
        <div class={atom} style={`background-color: ${this.props.bgColor || "#00000000"}`}>🍕</div>
    );
}