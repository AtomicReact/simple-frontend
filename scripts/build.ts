import { Atomic, IBundlerConfig } from "atomicreact-ts"

export const buildConfig: IBundlerConfig = {
    atomicDir: "src",
    bundleDir: "public/libs/atomicreact",
    verbose: true,
    packageName: "production_simple_frontend"
}

export async function build() {
    return await (new Atomic(buildConfig)).bundle()
}

build()