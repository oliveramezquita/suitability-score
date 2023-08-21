const mock = require('mock-fs')
const assignAddress = require('../lib/assignAddress');

describe('assignAddress file', () => {
    beforeAll(() => {
        mock({
            'tmp': {
                'list-addresses.txt': "Address one",
                'list-drivers.txt': "Driver name"
            }
        })
    });

    afterAll(() => {
        mock.restore();
    });

    test(`should receive an ordered list of addresses with the total suitability 
    score and the assigned driver`, () => {
        const listAddresses = `${process.cwd()}/tmp/list-addresses.txt`;
        const listDrivers = `${process.cwd()}/tmp/list-drivers.txt`;

        expect(assignAddress(listAddresses, listDrivers)).toEqual([{
            'address': "Address one",
            'driver': "Driver name",
            'totalSS': 6
        }]);
    });
});