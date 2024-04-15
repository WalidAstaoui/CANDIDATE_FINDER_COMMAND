const ApplicationsService = require('./applications.service');

const ApplicationsController = {
    upsert: async (req, res) => {
        try {
            await ApplicationsService.addApplication(req.body.candidateId, req.body.jobId);
            return res.status(203).send("Candidature ajoutée !");
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
};

module.exports = ApplicationsController;
