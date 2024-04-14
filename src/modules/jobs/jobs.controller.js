const JobsService = require('./jobs.service');

const JobsController = {
    getAll: async (req, res, next) => {
        const jobs = await JobsService.getAll();
        return res.json({ jobs });
    },

    upsert: async (req, res) => {
        const created = await JobsService.upsert(req.body.title, req.body.description, req.body.company);
        return res.status(created ? 201 : 200).send();
    },
};

module.exports = JobsController;
