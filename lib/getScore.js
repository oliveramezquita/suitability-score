"use strict";

var readFile = require('./readFile');

module.exports = function (addressesFilePath, driversFilePath) {

    const addressesData = readFile(addressesFilePath);
    let driversData = readFile(driversFilePath);
    let assignedDrivers = [];

    addressesData.forEach(address => {
        let addressLength = address.replace(/[^0-9A-Z]+/gi, "").length;

        let drivers = [];
        driversData.forEach(driver => {
            let item = { 'name': driver, 'ss': 0 }
            let vowelsCount = driver.match(/[AaEeIiOoUu]/gi).length;

            if (addressLength % 2 == 0)
                item.ss = vowelsCount * 1.5;
            else
                item.ss = driver.match(/[a-zA-z]/g).length - vowelsCount;

            if (item.ss > 1 && addressLength % item.ss == 0)
                item.ss = item.ss * 1.5

            drivers.push(item);
        });
        drivers.sort((a, b) => b.ss - a.ss);
        assignedDrivers.push(
            {
                'address': address,
                'driver': drivers[0].name
            }
        );
        const index = driversData.indexOf(drivers[0].name);
        driversData.splice(index, 1);
    });

    console.log(assignedDrivers);
}
