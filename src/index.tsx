import { AtomicReact } from "atomicreact-ts"
import { AppAtom } from "./app.jsx"

AtomicReact.onLoad = () => {
    console.log(`AtomicReact loaded! Rendering atoms...`)
    AtomicReact.renderElement((new AppAtom()), document.getElementById("app"))
}
