const {mustBeTheOwner} = require("../config/response")

const userIdExists = model => [ 
    async(req,res,next) => {
        let city = await model.findOne({_id: req.params.id})
        if(city.userId.equals(req.user._id)){
            return next()
        } else{
            return mustBeTheOwner(req, res)
        }
    }
]

module.exports = userIdExists