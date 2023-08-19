"use strict";

module.exports = require('yargs').
    usage('Usage: $0 <assigns> --addresses [list-addresses-filename] --drivers [list-drivers-filename]').
    help('help').
    alias('help', 'h').
    example('$0 assigns --addresses 10-list-addresses.txt --drivers 10-list-drivers.txt').
    version().
    alias('version', 'v').
    demand(['addresses', 'drivers']).
    argv;
