const joi = require('joi')

const schema = joi.object({
    hotelId: joi.string().required().messages({
            'any.required': 'Show is required',
        }),
    name: joi.string().required().min(3).max(50).messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 3 characters long',
        'string.max': 'Name must be at most 50 charecters long',
        'any.required': 'Name is required',
        }),
    description: joi.string().required().messages({
        'string.empty': 'Description is required',
        'any.required': 'Description is required',
    }),
    photo: joi.string().required().uri().messages({
        'string.empty': 'Photo is required',
        'string.uri': 'Photo does not have url format',
        'any.required': 'Photo is required',
    }),
    price: joi.number().required().messages({
        'number.empty': 'Price is required',
        'any.required': 'Price is required',
    }),
    date: joi.string().required().messages({
        'number.empty': 'Date is required',
        'any.required': 'Date is required',
    }),
    userId: joi.string().required().messages({
        'any.required': 'User is required',
    }),
})

module.exports = schema