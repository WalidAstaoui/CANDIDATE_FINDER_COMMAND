// applications.service.test.js
const pg = require('pg');
const ApplicationsService = require('../../../src/modules/applications/applications.service.js');

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

describe('ApplicationsService', () => {
    let client;

    beforeEach(() => {
        client = new pg.Client();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('addApplication', () => {
        it('should add a new application', async () => {
            const candidateId = '10';
            const jobId = '5';
            client.query.mockResolvedValueOnce({ rows: [] });

            await ApplicationsService.addApplication(candidateId, jobId);
            expect(client.connect).toBeCalledTimes(1);
            expect(client.query).toBeCalledWith(
                "INSERT INTO applications (candidateId, jobId) VALUES ($1, $2) ON CONFLICT (candidateId, jobId) DO NOTHING",
                [candidateId, jobId]
            );
        });
    });
});