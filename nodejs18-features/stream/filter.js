import {Readable} from 'node:stream';
import {Resolver} from 'node:dns/promises';
import {createReadStream} from "node:fs";
import * as rd from "node:readline"

export const asyncFilter = async () => {
    const resolver = new Resolver();
    const dnsResults = Readable.from([
        'nodejs.org',
        'openjsf.org',
        'www.linuxfoundation.org',
    ]).filter(async (domain) => {
        const [{ttl}] = await resolver.resolve4(domain, {ttl: true});
        return ttl > 100;
    });
    for await (const result of dnsResults) {
        console.log(result); // Logs the DNS result of resolver.resolve4.
    }
}
export const filter = async () => {
    const stream = createReadStream('./stream/example.txt', {encoding: "utf-8", highWaterMark: 1});
    for await (const chunk of stream.filter((x) => x !== "a")) {
        console.log(chunk)
    }
}

await asyncFilter();
    console.log('******************************')
await filter();

