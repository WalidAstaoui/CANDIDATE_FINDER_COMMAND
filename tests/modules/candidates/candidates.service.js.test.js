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

    describe('addCandidates', () => {
        it('should add multiple candidates', async () => {
            const candidates = [
                { name: 'John Doe', email: 'john.doe@gmail.com', phone: '0123456789', cv: 'Some CV details' },
                { name: 'Jane Smith', email: 'jane.smith@gmail.com', phone: '9876543210', cv: 'Some other CV details' },
            ];
            client.query.mockResolvedValueOnce({ rows: candidates });
    
            await CandidatesService.addCandidates(candidates);
            expect(client.connect).toBeCalledTimes(1);
            candidates.forEach((candidate, index) => {
                expect(client.query).toHaveBeenNthCalledWith(
                    index + 1,
                    "INSERT INTO candidates (name, email, phone, cv) VALUES ($1, $2, $3, $4)",
                    [candidate.name, candidate.email, candidate.phone, candidate.cv]
                );
            });
        });
    });

    
});