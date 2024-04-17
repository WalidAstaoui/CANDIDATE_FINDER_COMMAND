const { Router } = require('express');
const JobsController = require('./jobs.controller');
const validator = require('../../common/middleware/validator.middleware');
const { createJob } = require('./jobs.dtos');
const jobsRouter = Router();

jobsRouter.post('/', validator.body(createJob), JobsController.upsert);
jobsRouter.post('/addAll/', JobsController.upsertAll);

module.exports = jobsRouter;