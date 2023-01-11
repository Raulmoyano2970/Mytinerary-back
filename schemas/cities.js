const joi = require('joi')

const schema = joi.object({
    name: joi.string().required().min(3).max(50).messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 3 characters long',
        'string.max': 'Name must be at most 50 charecters long',
        'any.required': 'Name is required',
        }),
    continent: joi.string().required().min(5).max(7).messages({
        'string.empty': 'Continent is required',
        'string.min': 'Continent must be at least 5 characters long',
        'string.max': 'Continent must be at most 7 charecters long',
        'any.required': 'Continent is required',
    }),
    photo: joi.string().required().uri().messages({
        'string.empty': 'Photo is required',
        'string.uri': 'Photo does not have url format',
        'any.required': 'Photo is required',
    }),
    population: joi.number().required().messages({
        'number.empty': 'Population is required',
        'any.required': 'Population is required',
    }),
    userId: joi.string().required().messages({
        'object.empty': 'UserId is required',
        'any.required': 'UserId is required',
    }),
})

module.exports = schema