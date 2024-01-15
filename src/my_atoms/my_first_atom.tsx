import { AtomicClass, IAtomic } from "atomicreact-ts"

import { PizzaAtom } from "./pizza/index.jsx"

import style, { bottom as botttomStyle } from "./my_first_atom.module.css"
import { largerText } from "../global.module.css"

interface IAtomicProps {
    sub?: string,
    nucleus?: boolean
}

interface IProps extends IAtomicProps {
    title: string,
    description?: string,
    claps: number,
    onRendered?: (id: string) => void
}

enum Subs { /* Sub atoms */
    ClapButton,
    ClapSpan = "ClapSpan",
    PizzaButton = "PizzaButton"
}

export class MyFirstAtom extends AtomicClass {

    clapButton: HTMLButtonElement
    clapSpan: HTMLSpanElement
    pizzaButton: HTMLButtonElement

    constructor(public props: IProps) {
        super(props);
    }

    struct = ({ title, description, claps, onRendered: someFunction }: IProps, atom: IAtomic) => (
        <div class={style.atom}>
            <h3>{atom.key} | {title} (#{this.id})</h3>
            <p>{description}</p>

            <button class={style["main-buttons"]} sub={Subs.PizzaButton}>Give slice of 🍕</button>
            <div nucleus></div>

            <div class={botttomStyle}>
                <p><span class={largerText} sub={Subs.ClapSpan}>{claps}</span> 👏</p>
                <button sub={Subs.ClapButton}>👏 this Atom</button>
            </div>
        </div>
    );

    onRender() {
        console.log(`on render of atom #${this.id} with props`, this.props, "Subs: ", Subs)

        this.clapButton = this.getSub(Subs.ClapButton) as HTMLButtonElement
        this.clapSpan = this.getSub(Subs.ClapSpan) as HTMLSpanElement
        this.pizzaButton = this.getSub(Subs.PizzaButton) as HTMLButtonElement

        this.clapButton.onclick = this.clap.bind(this)
        this.pizzaButton.onclick = this.addPizza.bind(this)

        if (this.props.onRendered) this.props.onRendered(this.id)
    }

    clap(ev?: MouseEvent) {
        ev.preventDefault()
        console.log("Clap button fired!")

        this.props.claps++;
        this.clapSpan.innerText = `${this.props.claps}`
    }

    addPizza(ev?: MouseEvent) {
        const randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0")
        this.add(new PizzaAtom({ bgColor: `#${randomColor}` }))

    }
}