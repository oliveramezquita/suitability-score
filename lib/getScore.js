"use strict";

module.exports = function (addressesData, driversData, assign = false) {
    let tempAddressesData = [];

    addressesData.forEach(address => {
        let addressLength = address.replace(/[^0-9A-Z]+/gi, "").length;
        let drivers = [];
        let totalSS = 0;

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
            totalSS = totalSS + item.ss
        });
        tempAddressesData.push({
            'address': address,
            'totalSS': totalSS,
            'drivers': drivers.sort((a, b) => b.ss - a.ss)
        });
    });

    return tempAddressesData.sort((a, b) => b.totalSS - a.totalSS);
}
