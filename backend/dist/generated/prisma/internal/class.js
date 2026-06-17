import * as runtime from "@prisma/client/runtime/client";
const config = {
    "previewFeatures": [],
    "clientVersion": "7.8.0",
    "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
    "activeProvider": "sqlite",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n}\n\nmodel Book {\n  id        Int      @id @default(autoincrement())\n  title     String\n  filename  String\n  path      String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Book\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"filename\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"path\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"Book.findUnique\",\"Book.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"Book.findFirst\",\"Book.findFirstOrThrow\",\"Book.findMany\",\"data\",\"Book.createOne\",\"Book.createMany\",\"Book.createManyAndReturn\",\"Book.updateOne\",\"Book.updateMany\",\"Book.updateManyAndReturn\",\"create\",\"update\",\"Book.upsertOne\",\"Book.deleteOne\",\"Book.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Book.groupBy\",\"Book.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"title\",\"filename\",\"path\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "MAsQCRwAACUAMB0AAAQAEB4AACUAMB8CAAAAASABACcAISEBACcAISIBACcAISNAACgAISRAACgAIQEAAAABACABAAAAAQAgCRwAACUAMB0AAAQAEB4AACUAMB8CACYAISABACcAISEBACcAISIBACcAISNAACgAISRAACgAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAGHwIAAAABIAEAAAABIQEAAAABIgEAAAABI0AAAAABJEAAAAABAQgAAAkAIAYfAgAAAAEgAQAAAAEhAQAAAAEiAQAAAAEjQAAAAAEkQAAAAAEBCAAACwAwAQgAAAsAMAYfAgAwACEgAQAuACEhAQAuACEiAQAuACEjQAAvACEkQAAvACECAAAAAQAgCAAADgAgBh8CADAAISABAC4AISEBAC4AISIBAC4AISNAAC8AISRAAC8AIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAACkAIBYAACoAIBcAAC0AIBgAACwAIBkAACsAIAkcAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAQAcACEjQAAdACEkQAAdACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAkcAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAQAcACEjQAAdACEkQAAdACENFQAAHwAgFgAAJAAgFwAAHwAgGAAAHwAgGQAAHwAgJQIAAAABJgIAAAAEJwIAAAAEKAIAAAABKQIAAAABKgIAAAABKwIAAAABLAIAIwAhDhUAAB8AIBgAACIAIBkAACIAICUBAAAAASYBAAAABCcBAAAABCgBAAAAASkBAAAAASoBAAAAASsBAAAAASwBACEAIS0BAAAAAS4BAAAAAS8BAAAAAQsVAAAfACAYAAAgACAZAAAgACAlQAAAAAEmQAAAAAQnQAAAAAQoQAAAAAEpQAAAAAEqQAAAAAErQAAAAAEsQAAeACELFQAAHwAgGAAAIAAgGQAAIAAgJUAAAAABJkAAAAAEJ0AAAAAEKEAAAAABKUAAAAABKkAAAAABK0AAAAABLEAAHgAhCCUCAAAAASYCAAAABCcCAAAABCgCAAAAASkCAAAAASoCAAAAASsCAAAAASwCAB8AIQglQAAAAAEmQAAAAAQnQAAAAAQoQAAAAAEpQAAAAAEqQAAAAAErQAAAAAEsQAAgACEOFQAAHwAgGAAAIgAgGQAAIgAgJQEAAAABJgEAAAAEJwEAAAAEKAEAAAABKQEAAAABKgEAAAABKwEAAAABLAEAIQAhLQEAAAABLgEAAAABLwEAAAABCyUBAAAAASYBAAAABCcBAAAABCgBAAAAASkBAAAAASoBAAAAASsBAAAAASwBACIAIS0BAAAAAS4BAAAAAS8BAAAAAQ0VAAAfACAWAAAkACAXAAAfACAYAAAfACAZAAAfACAlAgAAAAEmAgAAAAQnAgAAAAQoAgAAAAEpAgAAAAEqAgAAAAErAgAAAAEsAgAjACEIJQgAAAABJggAAAAEJwgAAAAEKAgAAAABKQgAAAABKggAAAABKwgAAAABLAgAJAAhCRwAACUAMB0AAAQAEB4AACUAMB8CACYAISABACcAISEBACcAISIBACcAISNAACgAISRAACgAIQglAgAAAAEmAgAAAAQnAgAAAAQoAgAAAAEpAgAAAAEqAgAAAAErAgAAAAEsAgAfACELJQEAAAABJgEAAAAEJwEAAAAEKAEAAAABKQEAAAABKgEAAAABKwEAAAABLAEAIgAhLQEAAAABLgEAAAABLwEAAAABCCVAAAAAASZAAAAABCdAAAAABChAAAAAASlAAAAAASpAAAAAAStAAAAAASxAACAAIQAAAAAAATABAAAAAQEwQAAAAAEFMAIAAAABMQIAAAABMgIAAAABMwIAAAABNAIAAAABAAAAAAUVAAYWAAcXAAgYAAkZAAoAAAAAAAUVAAYWAAcXAAgYAAkZAAoBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIaGAUbGQs"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
export function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map