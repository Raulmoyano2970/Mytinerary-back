let router = require('express').Router();
let { createReaction, updateReaction, read, destroy } = require('../controllers/reaction');
const validator = require('../middlewares/validator');
const schema = require('../schemas/reaction');
const passport = require('passport');
const Reaction = require('../models/Reaction');
const verifyUser = require('../middlewares/verifyUser');


router.get('/', read);
router.post('/', validator(schema), createReaction);
router.put('/', passport.authenticate("jwt", { session: false }), updateReaction);
router.put('/:id', passport.authenticate("jwt", { session: false }), verifyUser(Reaction), destroy)
module.exports = router;
