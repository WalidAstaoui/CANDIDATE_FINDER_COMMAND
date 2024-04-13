const CandidatesService = require('./candidates.service');

const CandidatesController = {
    getAll: async (req, res) => {
        const candidates = await CandidatesService.getAll();
        res.json({ result });
    },

    upsert: async (req, res) => {
        const created = await CandidatesService.upsert(req.body.name, req.body.email, req.body.phone, req.body.cv);
        return res.status(200).send();
    },
};

module.exports = CandidatesController;
