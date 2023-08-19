#! /usr/bin/env node

"use strict";

process.title = "Suitability Score";

// Args
var argv = require('./lib/myyargs');
var readFile = require('./lib/readFile')

if (argv.addresses) {
    console.log(readFile(argv.addresses))
}

if (argv.drivers) {
    console.log(readFile(argv.drivers))
}
