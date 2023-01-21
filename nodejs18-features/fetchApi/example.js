import * as fsPromises from "node:fs/promises";

await ( async () => {
    const beforeUsedMemory = process.memoryUsage().heapUsed / 1024 / 1024;
    const res = await fetch("https://github.com/json-iterator/test-data/raw/master/large-file.json");

    if (res.ok) {
        const data = await res.json();
        await fsPromises.writeFile("response.json", JSON.stringify(data));
    }
    const afterUsedMemory = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log("before used memory: ", beforeUsedMemory, "Mb", "|", "after used memory: ", afterUsedMemory, "Mb")
})();


