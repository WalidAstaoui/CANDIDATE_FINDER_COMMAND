const { Router } = require('express');
const CandidatesController = require('./candidates.controller');
const validator = require("../../common/middleware/validator.middleware");
const {createCandidate} = require("./candidates.dtos");
const candidatesRouter = Router();

// A user
candidatesRouter.get('/', CandidatesController.getAll);

candidatesRouter.post('/', validator.body(createCandidate), CandidatesController.upsert);

module.exports = candidatesRouter;
