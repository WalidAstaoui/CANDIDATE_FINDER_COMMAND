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

    describe('addJobs', () => {
        it('should add multiple jobs', async () => {
            const jobs = [
                { title: 'Software Engineer', description: 'Develop and maintain software', company: 'Tech Company' },
                { title: 'Data Analyst', description: 'Analyze and interpret data', company: 'Data Company' },
                { title: 'Product Manager', description: 'Manage product development', company: 'Product Company' },
            ];
            client.query.mockResolvedValueOnce({ rows: jobs });

            await JobsService.addJobs(jobs);
            expect(client.connect).toBeCalledTimes(1);
            jobs.forEach((job, index) => {
                expect(client.query).toHaveBeenNthCalledWith(
                    index + 1,
                    "INSERT INTO jobs (title, description, company) VALUES ($1, $2, $3)",
                    [job.title, job.description, job.company]
                );
            });
        });
    });
});