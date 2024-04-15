const pg = require('pg');

const config = {
    host:"candidate-finder-db.postgres.database.azure.com", 
    user:"asta_admin", 
    password:"Postgre454545Wa", 
    database:"postgres", 
    port:5432,
    ssl: true
};

const ApplicationsService = {
    addApplication: async (candidateId, jobId) => {
        const client = new pg.Client(config);
        await client.connect();

        try {
            const query = 'INSERT INTO applications (candidateId, jobId) VALUES ($1, $2) ON CONFLICT (candidateId, jobId) DO NOTHING';
            const values = [candidateId, jobId];
            await client.query(query, values);
            return true;
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            await client.end();
        }
    }
};

module.exports = ApplicationsService;