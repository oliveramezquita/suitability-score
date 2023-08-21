"use strict";

const fs = require('fs');

module.exports = function (filePath) {
    // Validate if the file is a txt document
    const regex = new RegExp("(.*?)\.(txt)$");
    if (!(regex.test(filePath))) {
        console.warn(`Please enter a correct file with the extension 'txt'`);
        process.exit(1);
    }

    // An array is created from the file read
    // Any double spaces or tabs are removed from each item of the array
    try {
        let data = [];
        const content = fs.readFileSync(filePath.toString(), 'utf8').toString()
            .replace(/\r\n/g, '\n').split('\n');
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
