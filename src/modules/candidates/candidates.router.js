const { Router } = require('express');
const CandidatesController = require('./candidates.controller');
const validator = require("../../common/middleware/validator.middleware");
const {createCandidate} = require("./candidates.dtos");
const candidatesRouter = Router();

// A user
candidatesRouter.post('/', validator.body(createCandidate), CandidatesController.upsert);
candidatesRouter.post('/addAll/', CandidatesController.upsertAll);

module.exports = candidatesRouter;
