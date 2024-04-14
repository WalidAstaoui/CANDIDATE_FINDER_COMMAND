const express = require('express');
const candidatesRouter = require("./modules/candidates/candidates.router");
const applicationsRouter = require("./modules/applications/applications.router");
const jobsRouter = require("./modules/jobs/jobs.router");

const router = express.Router();

router.use('/jobs', jobsRouter);
router.use('/candidates', candidatesRouter);
router.use('/applications', applicationsRouter);

module.exports = router;