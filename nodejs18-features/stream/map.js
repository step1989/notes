import {Readable} from 'node:stream';
import {Resolver} from 'node:dns/promises';
import {createReadStream} from "node:fs";

const map = async () => {
    const stream = createReadStream('./stream/example.txt', {encoding: "utf-8", highWaterMark: 1});
    for await (const chunk of stream.map((x) => `Boom - ${x}`)) {
        console.log(chunk)
    }
}

const asyncMap = async () => {
    const resolver = new Resolver();
    const dnsResults = Readable.from([
        'nodejs.org',
        'openjsf.org',
        'www.linuxfoundation.org'
    ]).map((domain) => resolver.resolve4(domain), { concurrency: 2 });
    for await (const result of dnsResults) {
        console.log(result); //
    }
}
await asyncMap()
console.log('******************************')
await map();
