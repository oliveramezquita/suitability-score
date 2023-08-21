const mock = require('mock-fs')
const readFile = require('../lib/readFile')

describe('readFile script', () => {
    beforeAll(() => {
        mock({
            'tmp': {
                'item-addresses.txt': 'Address one'
            }
        })
    });

    afterAll(() => {
        mock.restore();
    })

    test('should get an array of strings from a file', async () => {
        const file = `${process.cwd()}/tmp/item-addresses.txt`;
        expect(readFile(file)).toStrictEqual(expect.any(Array));
    })

    test('should get an error when the file does not exist', async () => {
        const file = `${process.cwd()}/tmp/item-drivers.txt`;
        const consoleErrorSpy = jest
            .spyOn(console, 'error')
            .mockImplementation(() => { });
        const consoleWarnSpy = jest
            .spyOn(console, 'warn')
            .mockImplementation(() => { });
        const processExit = jest
            .spyOn(process, 'exit')
            .mockImplementation(() => { });
        readFile(file);
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(consoleWarnSpy).toHaveBeenCalled();
        expect(processExit).toHaveBeenCalledWith(1);
    });
})
