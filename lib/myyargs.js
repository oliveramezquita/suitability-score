"use strict";

// Setup of yargs
module.exports = require('yargs').
    usage('Usage: $0 --addresses <path/to/list-addresses-file> --drivers <path/to/list-drivers-file>').
    help('help').
    alias('help', 'h').
    example('$0 --addresses list-addresses.txt --drivers list-drivers.txt').
    version().
    alias('version', 'v').
    demand(['addresses', 'drivers']).
    argv;
