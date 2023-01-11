const router = require('express').Router();
const {create, readItineraries, update, destroy} = require('../controllers/itinerary')
const passport = require("../config/passport")
const validator = require ("../middlewares/validator")
const schema = require ("../schemas/itinerary")

router.get('/', readItineraries)
router.post('/', validator (schema) , create)
router.put('/:id',passport.authenticate('jwt', { session:false }), update)
router.delete('/:id',passport.authenticate('jwt', { session:false }), destroy)

module.exports = router;
