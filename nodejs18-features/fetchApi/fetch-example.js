import * as fsPromises from "fs/promises";
import * as fs from "fs";
import {Readable} from 'node:stream';

export const firstExample = async () => {
    const res = await fetch("https://nodejs.org/api/documentation.json");

    if (res.ok) {
        const data = await res.json();
        await fsPromises.writeFile("response.json", JSON.stringify(data));
    }
};

// response.body is stream

export const secondExample = async () => {
    const res = await fetch("https://nodejs.org/api/documentation.json");
    if (res.ok) {
        const nodeJsStream = Readable.fromWeb(res.body);
        nodeJsStream.pipe(fs.createWriteStream(("response-second.json")))
    }
};

await firstExample();
await secondExample();
