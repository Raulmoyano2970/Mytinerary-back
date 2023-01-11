const joi = require('joi')

const schema = joi.object({
    citiId: joi.string()
        .required()
        .messages({
            'any.required': 'City is required',
        }),
    name: joi.string()
        .required()
        .min(3)
        .max(30)
        .messages({
            'any.required': 'Name is require',
            'string.empty': 'Name is require',
            'string.min': 'A minimum of 3 characters is requested',
            'string.max': 'A maximum of 30 characters is requested',
        }),
    description: joi.string()
        .required()
        .min(3)
        .messages({
            'any.required': 'Description is require',
            'string.empty': 'Description is require',
            'string.min': 'A minimum of 3 characters is requested',
        }),
        photo: joi.array().
        items(joi.string()
        .uri())
        .length(3)
        .required()
        .messages({
            "any.required": "The field 'photo' is required, please enter it",
            "string.empty": "The field 'photo' is required, please enter it",
            "string.base": "Enter the photo of the itinerary please",
            "array.length": "The field 'photo' must have 3 photos",
        }),
    price: joi.number()
        .messages({
            'any.required': 'Price is required',
            'number.empty': 'Price is required',
        }),
    duration: joi.string()
        .messages({
            'any.required': 'Duration is required',
            'string.empty': 'Duration is required',
        }),
})

module.exports = schema