#! /usr/bin/env node

"use strict";

process.title = "Suitability Score";

// Args
const argv = require('./lib/myyargs');

// Require the main library
const assignAddress = require('./lib/assignAddress');

// Validate if the arguments addresses and drivers are existing
if (argv.addresses && argv.drivers) {
    console.log(assignAddress(argv.addresses, argv.drivers));
} 
