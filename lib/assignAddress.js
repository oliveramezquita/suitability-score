"use strict";

var readFile = require('./readFile');
var getSuitabilityScore = require('./getSuitabilityScore');

module.exports = function (addressesFilePath, driversFilePath) {

    const addressesData = readFile(addressesFilePath);
    let driversData = readFile(driversFilePath);

    // Get total SS by address and order from highest to lowest
    let addressesDataWithScore = getSuitabilityScore(addressesData, driversData);

    let assignedAddressList = [];
    let tempAssignedDrivers = [];
    addressesDataWithScore.forEach(item => {
        let drivers = item.drivers.map(({ name }) => name);
        let difference = drivers.filter(x => !tempAssignedDrivers.includes(x));

        assignedAddressList.push({
            'address': item.address,
            'totalSS': item.totalSS,
            'driver': difference[0]
        });
        if (!tempAssignedDrivers.includes(difference[0]))
            tempAssignedDrivers.push(difference[0]);
    });

    return assignedAddressList;
}
