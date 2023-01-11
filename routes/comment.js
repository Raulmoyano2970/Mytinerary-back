let router = require('express').Router();
let { read, create, update, destroy  } = require('../controllers/comment');
const schema = require('../schemas/comment');
const validator = require('../middlewares/validator');
const passport = require('../config/passport');
const verifyUser = require('../middlewares/verifyUser');
const Comment = require('../models/Comment');

router.get('/', read);
router.post("/", passport.authenticate("jwt", { session: false }), validator(schema), create);
router.put("/:id", passport.authenticate("jwt", { session: false }),verifyUser(Comment) , validator(schema), update);
router.delete("/:id", passport.authenticate("jwt", { session: false }),verifyUser(Comment), destroy);


module.exports = router;