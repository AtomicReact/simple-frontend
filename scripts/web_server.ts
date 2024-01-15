import { Atomic, HotReload } from "atomicreact-ts"
import express, { Express } from "express"
import { resolve } from "path"

const app: Express = express()

app.use(express.static(resolve(process.cwd(), 'public'))); //static files to web

app.listen(3000, () => {
    console.log(`HTTP Web Server is running at`, 'http://localhost:3000');

    let enviroment = (process.argv[2]) ? process.argv[2].toLowerCase() : "production"

    /* If DEVELOPMENT enviroment, build and watch AtomicReact */
    if (["development", "--dev"].includes(enviroment)) {
        const atomic = new Atomic({
            atomicDir: "src",
            bundleDir: "public/libs/atomicreact",
            verbose: false,
            packageName: "simple_frontend"
        }, new HotReload(1337, "localhost"))
    }
    console.log('Enviroment: ', enviroment)
});