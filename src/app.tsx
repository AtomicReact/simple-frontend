
import { AtomicClass, IAtomic } from "atomicreact-ts"

import { MyFirstAtom } from "./my_atoms/my_first_atom.jsx"

import { app } from "./app.module.css"

export class AppAtom extends AtomicClass {

    onRender(): void {
        console.log("App was rendered!")
    }

    struct: (props?: any, atom?: IAtomic) => string = (props, atom) => (
        <div class={app}>
            <h2>Im App Atom (#{atom.id})</h2>

            <MyFirstAtom
                title="This is my Title"
                description="And this is my Description"
                claps={17}
                onRendered={(id) => {
                    console.log(`Atom #${id} was rendered`)
                    this.someAction()
                }}
                sub="myAtom"
            >
                <h4>Im in nucleus of my_first_atom</h4>
                <ul>
                    <li>item A</li>
                    <li sub="itemB">item B</li>
                    <li>item C</li>
                </ul>
            </MyFirstAtom>

        </div>
    )

    someAction = () => {
        console.log(`#${this.id}`, "someAction() fired")
    }
}