const { Router } = require('express');
const ApplicationsController = require('./applications.controller');
const validator = require("../../common/middleware/validator.middleware");
const {createApplication} = require("./applications.dtos");
const applicationsRouter = Router();

applicationsRouter.post('/', validator.body(createApplication), ApplicationsController.upsert);

module.exports = applicationsRouter;
