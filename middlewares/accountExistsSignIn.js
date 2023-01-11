const User = require("../models/User");
const { invalidCredentialsResponse } = require("../config/response");

async function accountExistsSignIn(req, res, next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        req.user = {
            id: user._id,
            name: user.name,
            lastName: user.lastName,
            photo: user.photo,
            email: user.email,
            password: user.password,
            role: user.role,
            verified: user.verified,
        }
        return next()
    }
    return invalidCredentialsResponse(req,res)
}

module.exports = accountExistsSignIn