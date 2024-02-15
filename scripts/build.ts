import { Atomic, IAtomicConfig } from "atomicreact-ts"

export const buildConfig: IAtomicConfig = {
    atomicDir: "src",
    bundleDir: "public/libs/atomicreact",
    verbose: true,
    packageName: "production_simple_frontend"
}

export async function build() {
    return await (new Atomic(buildConfig)).bundle()
}

build()