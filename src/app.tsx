
import { Atom } from "atomicreact-ts"

import { MyFirstAtom } from "./my_atoms/my_first_atom.jsx"

import { title } from "./global.module.css"
import { app, reset } from "./app.atom.css"
import { Tag } from "./my_atoms/tag/index.jsx"
import { PizzaAtom } from "./my_atoms/pizza/index.jsx"

import { TinyChipmunkButton } from "simple_frontend_library/atoms/buttons/tiny_chipmunk.jsx"

interface ISubs {
    MyAtom: MyFirstAtom,
    MyOtherAtom: MyFirstAtom,
    ResetButton: HTMLButtonElement,
    Test: HTMLDivElement,
    myAppPizza: PizzaAtom
}

export class AppAtom extends Atom<{ sub: ISubs }> {

    onRender(): void {
        console.log("App was rendered!")

        this.sub.ResetButton.onclick = () => {
            this.sub.MyAtom.reset()
            this.sub.MyOtherAtom.reset()
        }

    }

    struct = () => (
        <div class={app}>
            <Tag label={this.id}></Tag>
            <h2 id={title}>Im App Atom!!!</h2>

            <div sub={this.sub.Test} id="test">
                <MyFirstAtom
                    title="This is my Title"
                    description="And this is my Description"
                    claps={17}
                    onRendered={(id) => {
                        console.log(`Atom #${id} was rendered`)
                        this.someAction()
                    }}
                    sub={this.sub.MyAtom}
                    extraSection={<div>This is a extra section as prop. Take your slice of <PizzaAtom bgColor={"#0F00FF"}></PizzaAtom></div>}
                >
                    <h4>Im in nucleus placed by #{this.id}</h4>
                    <ul>
                        <li>item A</li>
                        <li sub="itemB">item B</li>
                        <li>item C</li>
                        <li>item D</li>
                    </ul>
                </MyFirstAtom>
                <br />
            </div>

            <section>
                <h4>Feature: import external libraries</h4>
                <p>Lets use some atoms from <a href="https://github.com/AtomicReact/simple-frontend-library">https://github.com/AtomicReact/simple-frontend-library</a></p>
                <TinyChipmunkButton
                    label={"Hi Button"}
                    action={"Go"}
                    started={"Uhuu"}
                    onClick={(btn)=>{
                        btn.toogle()
                        console.log("Is started:", btn.isStarted())
                    }}
                ></TinyChipmunkButton>
                <br />
            </section>

            <MyFirstAtom
                title="Lorem Ipsum Title"
                description="Some description here"
                claps={0}
                sub={this.sub.MyOtherAtom}
                extraSection={<h3>This is another extra section</h3>}>
            </MyFirstAtom>


            <button class={reset} sub={this.sub.ResetButton}>Reset</button>

        </div >
    )

    someAction = () => {
        console.log(`#${this.id}`, "someAction() fired")
    }
}