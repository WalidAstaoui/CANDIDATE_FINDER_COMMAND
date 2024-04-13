const ApplicationsService = require('./applications.service');

const ApplicationsController = {
    upsert: async (req, res) => {
        const created = await ApplicationsService.upsert(req.body.candidateId, req.body.jobId);
        return res.status(created ? 201 : 200).send();
    },
};

module.exports = ApplicationsController;
