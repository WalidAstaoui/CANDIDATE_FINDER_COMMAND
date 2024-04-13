const Joi = require('joi');

const ApplicationDtos = {
    createApplication: Joi.object().keys({
        jobId: Joi.string().required().alphanum().min(1).max(50),
        candidateId: Joi.string().required().alphanum().min(1).max(50),
    }),
};

module.exports = ApplicationDtos;
