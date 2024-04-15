const CandidatesService = require('./candidates.service');

const CandidatesController = {
    getAll: async (req, res) => {
        const candidates = await CandidatesService.getAll();
        res.json({ candidates });
    },

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
};

module.exports = CandidatesController;
