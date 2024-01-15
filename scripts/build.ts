import { Atomic, IConfig } from "atomicreact-ts"

export const buildConfig: IConfig = {
    atomicDir: "src",
    bundleDir: "public/libs/atomicreact",
    verbose: true,
    packageName: "production_simple_frontend"
}

export function build() : Atomic {
    return new Atomic(buildConfig)
}

build()