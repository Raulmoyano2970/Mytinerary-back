
const router = require("express").Router();
const schema = require("../schemas/cities");
const validator = require("../middlewares/validator");
const passport = require("../config/passport")
const {
  create,
  read,
  readOnlyOne,
  update,
  destroy,
} = require("../controllers/city");

router.post("/", validator(schema), create);
router.get("/", read);
router.get("/:id", readOnlyOne);
router.put('/:id', passport.authenticate('jwt', { session:false }), update)
router.delete('/:id',  passport.authenticate('jwt', { session:false }), destroy)

module.exports = router;
