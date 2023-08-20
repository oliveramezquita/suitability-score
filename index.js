#! /usr/bin/env node

"use strict";

process.title = "Suitability Score";

// Args
var argv = require('./lib/myyargs');
var assignAddress = require('./lib/assignAddress');

if (argv.addresses && argv.drivers) {
    console.log(assignAddress(argv.addresses, argv.drivers));
} 
