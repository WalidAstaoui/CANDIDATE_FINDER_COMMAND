const { Router } = require('express');
const JobsController = require('./jobs.controller');
const validator = require('../../common/middleware/validator.middleware');
const { createJob } = require('./jobs.dtos');
const jobsRouter = Router();

jobsRouter.get('/', JobsController.getAll);
jobsRouter.post('/', validator.body(createJob), JobsController.upsert);

module.exports = jobsRouter;