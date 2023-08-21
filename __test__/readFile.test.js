const mock = require('mock-fs')
const readFile = require('../lib/readFile')

describe(`readFile script`, () => {
    beforeAll(() => {
        mock({
            'tmp': {
                'file.txt': "Address  one",
                'json-file.json': "['Adress one']"
            }
        })
    });

    afterAll(() => {
        mock.restore();
    });

    test(`should get an array of strings from a file`, async () => {
        const file = `${process.cwd()}/tmp/file.txt`;
        expect(readFile(file)).toStrictEqual(['Address one']);
    })

    test(`you should get a warning when the file does not have the 'txt' extension`,
        async () => {
            const jsonFile = `${process.cwd()}/tmp/json-file.json`;
            const consoleWarnSpy = jest
                .spyOn(console, 'warn')
                .mockImplementation(() => { });
            const processExit = jest
                .spyOn(process, 'exit')
                .mockImplementation(() => { });

            readFile(jsonFile);

            expect(consoleWarnSpy).toHaveBeenCalled();
            expect(processExit).toHaveBeenCalledWith(1);
        });

    test(`should get an error when the file does not exist`, async () => {
        const file = `${process.cwd()}/tmp/non-existent-file.txt`;
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
