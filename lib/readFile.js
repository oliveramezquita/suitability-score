"use strict";

const fs = require('fs');

module.exports = function (filePath) {

    try {
        let data = [];
        const content = fs.readFileSync(filePath.toString(), 'utf8').toString().replace(/\r\n/g, '\n').split('\n');
        for (let i in content) {
            if (content[i].length > 0)
                data.push(content[i].trim().split(/[\s,\t]+/).join(' '));
        }
        return data;
    } catch (err) {
        console.error('Error: ', err);
        console.warn('Error trying to read file');
        process.exit(1);
    }
}
