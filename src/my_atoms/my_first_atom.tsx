import { Atom } from "atomicreact-ts"

import { PizzaAtom } from "./pizza/index.jsx"

import { largerText } from "../global.module.css"
import style, { bottom as botttomStyle } from "./my_first_atom.module.css"
import { Tag } from "./tag/index.jsx"

interface Props {
    title: string,
    description?: string,
    claps: number,
    onRendered?: (id: string) => void
}

interface Subs { /* Sub atoms */
    clapButton: HTMLButtonElement,
    clapSpan: HTMLSpanElement,
    pizzaButton: HTMLButtonElement,
    myPizza: PizzaAtom
}

export class MyFirstAtom extends Atom<{ sub: Subs, prop: Props }> {

    pizzas: PizzaAtom[] = []

    struct = () => (
        <div class={style.atom}>
            <Tag label={this.id}></Tag>
            <h3 class={style.title}>{this.prop.title}</h3>
            <p>{this.prop.description}</p>
            <PizzaAtom sub={this.sub.myPizza}></PizzaAtom>
            <br />
            <button class={style["main-buttons"]} sub={this.sub.pizzaButton}>Give slice of 🍕</button>
            <div nucleus></div>
            <div class={botttomStyle}>
                <p><span class={largerText} sub={this.sub.clapSpan}>{this.prop.claps}</span> 👏</p>
                <button class={style["main-buttons"]} sub={this.sub.clapButton}>👏 this Atom</button>
            </div>
        </div>
    );

    onRender() {
        console.log(`on render of atom #${this.id} with props`, this.prop)

        this.sub.clapButton.onclick = this.clap.bind(this)
        this.sub.pizzaButton.onclick = this.addPizza.bind(this)

        if (this.prop.onRendered) this.prop.onRendered(this.id)
    }

    onAdded(atom: Atom): void {
        console.log(`Atom added #${atom.id}`)
    }

    updateClaps(claps: Props["claps"]) {
        this.prop.claps = claps
        this.sub.clapSpan.innerText = `${this.prop.claps}`
    }

    clap(ev?: MouseEvent) {
        if (ev) ev.preventDefault()
        console.log("Clap button fired!")

        this.updateClaps(this.prop.claps + 1)

        this.sub.myPizza.changeColor()
    }

    addPizza(ev?: MouseEvent) {
        if (ev) ev.preventDefault()
        const randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0")
        const pizza = new PizzaAtom({ bgColor: `#${randomColor}` })
        this.pizzas.push(pizza)
        this.add(pizza)
    }

    reset() {
        this.pizzas.forEach(pizza => pizza.getElement().remove())
        this.pizzas = []

        this.updateClaps(0)
    }
}