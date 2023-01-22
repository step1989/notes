import {Readable} from 'node:stream';
import {Resolver} from 'node:dns/promises';
import {createReadStream} from "node:fs";
import * as rd from "node:readline"
const reduce = async () => {
    const stream = createReadStream('./stream/example.txt', {encoding: "utf-8", highWaterMark: 1});

    const result = await stream
        .filter((x) => x !== "a")
        .map((x) => `|${x}|`)
        .reduce((acc, value) => acc + value)

    console.log(result);
}


await reduce();

