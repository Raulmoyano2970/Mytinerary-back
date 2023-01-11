const joi = require(`joi`)

const schema = joi.object({
    email: joi
        .string()
        .required()
        .email()
        .messages({
            "string.required": "the field is required, please enter your email",
            "string.empty": "you can't leave this field empty",
            "string.email": "please enter a valid email",
            "string.base": "only letters and numbers are valid"
        }),
    password: joi
        .string()
        .required()
        .messages({
            "string.required": "the field is required, please enter your password",
            "string.empty": "you can't leave this field empty",
            "string.base": "only letters and numbers are valid"
        }),
})

module.exports=schema;