// jobs.service.test.js
const pg = require('pg');
const JobsService = require('../../../src/modules/jobs/jobs.service.js');

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

describe('JobsService', () => {
    let client;

    beforeEach(() => {
        client = new pg.Client();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getAll', () => {
        it('should get all jobs', async () => {
            const rows = [{ id: 1 }, { id: 2 }];
            client.query.mockResolvedValueOnce({ rows });

            const result = await JobsService.getAll();

            expect(result).toEqual(rows);
            expect(client.connect).toBeCalledTimes(1);
            expect(client.query).toBeCalledWith('SELECT * FROM jobs');
        });
    });

    describe('addJob', () => {
        it('should add a new job', async () => {
            const title = 'Software Engineer';
            const description = 'Develop and maintain software';
            const company = 'Tech Company';
            const newJob = { title, description, company };
            client.query.mockResolvedValueOnce({ rows: [newJob] });

            await JobsService.addJob(title, description, company);
            expect(client.connect).toBeCalledTimes(1);
            expect(client.query).toBeCalledWith(
                "INSERT INTO jobs (title, description, company) VALUES ($1, $2, $3)",
                [title, description, company]
            );
        });
    });
});