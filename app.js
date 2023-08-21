#! /usr/bin/env node

"use strict";

process.title = "Suitability Score";

// Args
const argv = require('./lib/myyargs');
const assignAddress = require('./lib/assignAddress');

if (argv.addresses && argv.drivers) {
    console.log(assignAddress(argv.addresses, argv.drivers));
} 
