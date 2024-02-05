
import { Atom } from "atomicreact-ts"

import { MyFirstAtom } from "./my_atoms/my_first_atom.jsx"

import { title } from "./global.module.css"
import { app, reset } from "./app.atom.css"
import { Tag } from "./my_atoms/tag/index.jsx"

interface ISubs {
    MyAtom: MyFirstAtom,
    MyOtherAtom: MyFirstAtom,
    ResetButton: HTMLButtonElement,
    Test: HTMLDivElement
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
            <h2 id={title}>Im App Atom</h2>

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
                >
                    <h4>Im in nucleus placed by #{this.id}</h4>
                    <ul>
                        <li>item A</li>
                        <li sub="itemB">item B</li>
                        <li>item C</li>
                    </ul>
                </MyFirstAtom>
                <br />
            </div>
            
            <MyFirstAtom
                title="Lorem Ipsum Title"
                description="Some description here"
                claps={0}
                sub={this.sub.MyOtherAtom}>
            </MyFirstAtom>


            <button class={reset} sub={this.sub.ResetButton}>Reset</button>

        </div>
    )

    someAction = () => {
        console.log(`#${this.id}`, "someAction() fired")
    }
}