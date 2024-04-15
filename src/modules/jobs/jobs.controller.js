const JobsService = require('./jobs.service');

const JobsController = {
    getAll: async (req, res, next) => {
        const jobs = await JobsService.getAll();
        return res.json({ jobs });
    },

    upsert: async (req, res) => {
        try {
            await JobsService.addJob(req.body.title, req.body.description, req.body.company);
            return res.status(202).send("Job ajouté !");
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
};

module.exports = JobsController;
