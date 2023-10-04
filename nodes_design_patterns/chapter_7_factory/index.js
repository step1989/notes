const {createProfiler} =  require("./factory");

function test(num) {
    const profiler = createProfiler(`finding all factors of ${num}`);

    profiler.start();

    const factors = new Set();
    for (let factor = 2; factor <= num; factor++) {
        while ((num % factor) === 0) {
            factors.add(factor);
            num = num / factor;
        }
    }

    profiler.end()

    return factors;
}

const num = process.argv[2];

const factors = test(num);

console.log(factors);