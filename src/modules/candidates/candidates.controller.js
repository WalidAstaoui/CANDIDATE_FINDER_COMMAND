const CandidatesService = require('./candidates.service');

const CandidatesController = {
    getAll: async (req, res) => {
        const candidates = await CandidatesService.getAll();
        res.json({ result });
    },

    addCandidate: async (req, res) => {
        const { name, email, phone, cv } = req.body;
        if (!name || !email || !phone || !cv) {
            return res.status(400).send("Il manque des données !");
        }

        try {
            await CandidatesService.addCandidate(name, email, phone, cv);
            return res.status(201).send("Candidat ajouté !");
        } catch (error) {
            console.log(err);
            throw err;
        }
    },

    upsert: async (req, res) => {
        const created = await CandidatesService.upsert(req.body.name, req.body.email, req.body.phone, req.body.cv);
        return res.status(200).send();
    },
};

module.exports = CandidatesController;
