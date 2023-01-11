const router = require("express").Router();
const { create, readShows, update, destroy } = require("../controllers/show");
const passport = require("../config/passport")
const validator = require ("../middlewares/validator")
const schema = require ("../schemas/show")

router.get("/", readShows);
router.post("/", validator(schema),create);
router.patch("/:id",passport.authenticate('jwt', { session:false }), update);
router.delete("/:id",passport.authenticate('jwt', { session:false }), destroy);
module.exports = router;
