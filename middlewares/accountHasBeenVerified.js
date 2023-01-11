const { verifyResponse } = require("../config/response")

function accountHasBeenVerified(req, res, next) {
    if (req.user.verified) {
        return next()
    }
   return verifyResponse(req,res)
}

module.exports = { accountHasBeenVerified }