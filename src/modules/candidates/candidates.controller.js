const CandidatesService = require('./candidates.service');

const CandidatesController = {
    upsert: async (req, res) => {
        const { name, email, phone, cv } = req.body;

        try {
            await CandidatesService.addCandidate(name, email, phone, cv);
            return res.status(201).send("Candidat ajouté !");
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
    
    upsertAll: async (req, res) => {
        const candidates = req.body;

        try {
            await CandidatesService.addCandidates(candidates);
            return res.status(201).send("Candidats ajoutés !");
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
};

module.exports = CandidatesController;
