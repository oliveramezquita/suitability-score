"use strict";

module.exports = function (addressesData, driversData) {
    const tempAddressesData = [];

    if (Array.isArray(addressesData) || addressesData.length > 0) {
        // First the array of addresses is traversed
        // The length of the address is obtained by removing the spaces
        addressesData.forEach(address => {
            const addressLength = address.replace(/[^0-9A-Z]+/gi, "").length;
            const drivers = [];
            let totalSS = 0;

            // The drivers array is then traversed and the SS rules are applied
            // The total of the scores for each address is obtained
            if (Array.isArray(driversData)) {
                driversData.forEach(driver => {
                    const item = { 'name': driver, 'ss': 0 }
                    const vowelsCount = driver.match(/[AaEeIiOoUu]/gi).length;

                    if (addressLength % 2 == 0)
                        item.ss = vowelsCount * 1.5;
                    else
                        item.ss = driver.match(/[a-zA-z]/g).length - vowelsCount;

                    if (item.ss > 1 && addressLength % item.ss == 0)
                        item.ss = item.ss * 1.5

                    drivers.push(item);
                    totalSS = totalSS + item.ss
                });
            }

            // An array is created for each address with the total scores and each ↵
            // driver array with its individual score
            tempAddressesData.push({
                'address': address,
                'totalSS': totalSS,
                'drivers': drivers.sort((a, b) => b.ss - a.ss)
            });
        });
    }

    // The array ordered by the total SS from highest to lowest is returned
    return tempAddressesData.sort((a, b) => b.totalSS - a.totalSS);
}
