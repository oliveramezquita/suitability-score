const getSuitabilityScore = require('../lib/getSuitabilityScore');

describe(`getSuitabilityScore script`, () => {
    test(`should get list of addresses when their length is even`, () => {
        const addressList = ['Address one'];
        const driversList = ['Driver name'];

        expect(getSuitabilityScore(addressList, driversList)).toEqual([
            {
                'address': 'Address one',
                'totalSS': 6,
                'drivers': [
                    {
                        'name': 'Driver name',
                        "ss": 6
                    }
                ]
            }
        ])
    });

    test(`should get list of addresses when their length is odd`, () => {
        const addressList = ['Address four'];
        const driversList = ['Driver name'];

        expect(getSuitabilityScore(addressList, driversList)).toEqual([
            {
                'address': 'Address four',
                'totalSS': 6,
                'drivers': [
                    {
                        'name': 'Driver name',
                        "ss": 6
                    }
                ]
            }
        ])
    });

    test(`should get list of addresses and suitability score is common factor`,
        () => {
            const addressList = ['Address three'];
            const driversList = ['Driver'];

            expect(getSuitabilityScore(addressList, driversList)).toEqual([
                {
                    'address': 'Address three',
                    'totalSS': 4.5,
                    'drivers': [
                        {
                            'name': 'Driver',
                            "ss": 4.5
                        }
                    ]
                }
            ])
        });

    test(`should get an empty array when the address list is empty or not an 
    array type`, () => {
        expect(getSuitabilityScore([], expect.any(Array))).toEqual([]);
        expect(getSuitabilityScore(1, expect.any(Array))).toEqual([]);
    });

    test(`should a empty drivers list empty when the driver's data is empty
    array or not an array type`, () => {
        const addressList = ['Address one'];
        const expectedArray = [
            {
                'address': 'Address one',
                'totalSS': 0,
                'drivers': [],

            }
        ];

        expect(getSuitabilityScore(addressList, [])).toEqual(expectedArray);
        expect(getSuitabilityScore(addressList, 1)).toEqual(expectedArray);
    });
});
