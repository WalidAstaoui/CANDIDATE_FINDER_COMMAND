const Joi = require('joi');

const JobDtos = {
    createJob: Joi.object().keys({
        title: Joi.string().required().min(1).max(200),
        description: Joi.string().required().min(0).max(10000),
        company: Joi.string().min(0).max(150)
    }),
};

module.exports = JobDtos;
