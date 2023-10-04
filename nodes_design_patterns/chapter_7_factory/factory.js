const {Profiler} = require("./profiler");

class NoopProfiler {
    start(){}
    end(){}
}

function createProfiler(label) {
    if (process.env.NODE_ENV === 'prod') {
        return new NoopProfiler()
    }

    return new Profiler(label)
}

module.exports = { createProfiler }