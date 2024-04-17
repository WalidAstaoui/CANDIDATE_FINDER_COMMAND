const pg = require('pg');

const config = {
    host:"candidate-finder-db.postgres.database.azure.com", 
    user:"asta_admin", 
    password:"Postgre454545Wa", 
    database:"postgres", 
    port:5432,
    ssl: true
};

const JobsService = {

    addJob: async (title, description, company) => {
        const client = new pg.Client(config);
        await client.connect();

        try {
            const query = 'INSERT INTO jobs (title, description, company) VALUES ($1, $2, $3)';
            const values = [title, description, company];
            await client.query(query, values);
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            await client.end();
        }
    },

    addJobs: async (jobs) => {
        const client = new pg.Client(config);
        await client.connect();

        try {
            for (const job of jobs) {
                const { title, description, company } = job;
                const query = 'INSERT INTO jobs (title, description, company) VALUES ($1, $2, $3)';
                const values = [title, description, company];
                await client.query(query, values);
            }
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            await client.end();
        }
    },
};

module.exports = JobsService;