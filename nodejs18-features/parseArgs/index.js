import { parseArgs } from 'node:util';
const options = {
    start: {

        type: 'string',
        short: 's',
    },
    end: {
        type: 'string',
        short: 'e'
    },
    isActive: {
        type: 'boolean',
        short: 'a',
        default: false
    }
};
const { values  } = parseArgs({ options });
console.log(process.argv)
console.log(values);
