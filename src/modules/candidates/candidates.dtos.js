const Joi = require('joi');

const CandidateDtos = {
    createCandidate: Joi.object().keys({
        name: Joi.string().required().min(1).max(150),
        email: Joi.string().required().email().min(1).max(150),
        phone: Joi.string().required().min(1).max(50),
        cv: Joi.string().required().min(1).max(5000),
    }),
};

module.exports = CandidateDtos;
