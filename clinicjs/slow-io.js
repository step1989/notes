import {createServer} from "node:http";
import {readFileSync} from "node:fs";
import {readFile} from "node:fs/promises";

const bad = () => {
    const file = readFileSync("example.json", "utf-8");
    return file;
}

const good = async () => {
    return readFile("example.json", "utf-8");
}

const server = createServer(async (req, res) => {
    const random = Math.floor(Math.random() * (10 - 1) + 1)

    if (random > 1) {
        const file = await good();
    }

    res.end("ok");
})

server.listen(3000, () => console.log("Server has started"));