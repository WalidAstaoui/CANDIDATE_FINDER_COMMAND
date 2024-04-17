const pg = require('pg');

const config = {
    host:"candidate-finder-db.postgres.database.azure.com", 
    user:"asta_admin", 
    password:"Postgre454545Wa", 
    database:"postgres", 
    port:5432,
    ssl: true
};

const CandidatesService = {

    addCandidate: async (name, email, phone, cv) => {
        const client = new pg.Client(config);
        await client.connect();

        try {
            const query = 'INSERT INTO candidates (name, email, phone, cv) VALUES ($1, $2, $3, $4)';
            const values = [name, email, phone, cv];
            await client.query(query, values);
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            await client.end();
        }
    },

    addCandidates: async (candidates) => {
        const client = new pg.Client(config);
        await client.connect();

        try {
            for (const candidate of candidates) {
                const { name, email, phone, cv } = candidate;
                const query = 'INSERT INTO candidates (name, email, phone, cv) VALUES ($1, $2, $3, $4)';
                const values = [name, email, phone, cv];
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

module.exports = CandidatesService;