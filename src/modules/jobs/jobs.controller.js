const { upsertAll } = require('../candidates/candidates.controller');
const JobsService = require('./jobs.service');

const JobsController = {
    upsert: async (req, res) => {
        try {
            await JobsService.addJob(req.body.title, req.body.description, req.body.company);
            return res.status(202).send("Job ajouté !");
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    upsertAll: async (req, res) => {
        const jobs = req.body;

        try {
            await JobsService.addJobs(jobs);
            return res.status(202).send("Jobs ajoutés !");
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
};

module.exports = JobsController;
