"use strict";

const readFile = require('./readFile');
const getSuitabilityScore = require('./getSuitabilityScore');

module.exports = function (addressesFilePath, driversFilePath) {
    // Files are read
    const addressesData = readFile(addressesFilePath);
    const driversData = readFile(driversFilePath);

    // The scores are obtained
    const addressesDataWithScore = getSuitabilityScore(addressesData, driversData);

    const assignedAddressList = [];
    const tempAssignedDrivers = [];

    // The array is traversed with scores
    // A temp array is created to store the assigned drivers to avoid duplication
    // The final array is created with the address, the driver and the total SS
    addressesDataWithScore.forEach(item => {
        const drivers = item.drivers.map(({ name }) => name);
        const difference = drivers.filter(x => !tempAssignedDrivers.includes(x));

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
