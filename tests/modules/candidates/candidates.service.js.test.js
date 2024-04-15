// candidates.service.test.js
const pg = require('pg');
const CandidatesService = require('../../../src/modules/candidates/candidates.service.js');

jest.mock('pg', () => {
    const mClient = {
        connect: jest.fn(),
        query: jest.fn(),
        end: jest.fn(),
    };
    return {
        Client: jest.fn(() => mClient),
    };
});

describe('CandidatesService', () => {
    let client;

    beforeEach(() => {
        client = new pg.Client();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getAll', () => {
        it('should get all candidates', async () => {
            const rows = [{ id: 1 }, { id: 2 }];
            client.query.mockResolvedValueOnce({ rows });

            const result = await CandidatesService.getAll();

            expect(result).toEqual(rows);
            expect(client.connect).toBeCalledTimes(1);
            expect(client.query).toBeCalledWith('SELECT * FROM candidates');
        });
    });

    describe('addCandidate', () => {
        it('should add a new candidate', async () => {
            const name = 'John Doe';
            const email = 'john.doe@gmail.com';
            const phone = '0123456789';
            const cv = 'Some CV details';
            const newCandidate = { name, email, phone, cv };
            client.query.mockResolvedValueOnce({ rows: [newCandidate] });

            await CandidatesService.addCandidate(name, email, phone, cv);
            expect(client.connect).toBeCalledTimes(1);
            expect(client.query).toBeCalledWith(
                "INSERT INTO candidates (name, email, phone, cv) VALUES ($1, $2, $3, $4)",
                [name, email, phone, cv]
            );});
    });
});