const joi = require('joi')

const schema = joi.object({
    name: joi.string()
    .required()
    .min(3)
    .max(50)
    .messages({
        'any.required': 'Name is required',
        'string.empty': 'Name is required',
        'string.min': 'A minimun be at most 3 charecters requested',
        'string.max': 'A maximum be at most 50 charecters requested',
        }),
    lastName: joi.string()
    .required()
    .min(1)
    .max(30)
    .messages({
        'any.required': 'Name is required',
        'string.empty': 'Name is required',
        'string.min': 'A minimun be at most 1 charecters requested',
        'string.max': 'A maximum be at most 30 charecters requested',
    }),
    role: joi.string().valid("user", "admin"),
    photo: joi.string().required().uri().messages({
        'any.required': 'Image is required',
        'string.empty': 'Image is required',
        'string.uri': 'A valid url ir requested',
    }),
    age: joi.number().required().min(18).messages({
        'any.required': 'Age is required',
        'number.empty': 'Age is required',
        'number.min': 'You must be over 18 years old',
    }),
    email: joi.string().email({minDomainSegments:2}).required().messages({//.email({minDomainSegments:2})nombre y dominio
        'any.required': 'Email is required',
        'string.empty': 'Email is required',
        'string.email': 'Must be a valid email',
    }),
    password: joi.string().required().messages({
        'any.required': 'Password is required',
        'string.empty': 'Password is required',
})

})
module.exports = schema