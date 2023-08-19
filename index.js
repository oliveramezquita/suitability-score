#! /usr/bin/env node

"use strict";

process.title = "Suitability Score";

// Args
var argv = require('./lib/myyargs');
var getScore = require('./lib/getScore');

if (argv.addresses && argv.drivers) {
    getScore(argv.addresses, argv.drivers);
} 
