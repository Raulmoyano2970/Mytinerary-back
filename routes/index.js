const router = require("express").Router();
const user = require("./user");
const city = require("./city");
const itinerary = require("./itinerary");
const hotel = require("./hotel");
const show = require("./show");
const reaction = require("./reaction");
const comment = require('./comment');



router.use("/api/auth", user);
router.use("/api/cities", city);
router.use("/api/itineraries", itinerary);
router.use("/api/hotels", hotel);
router.use("/api/shows", show);
router.use("/api/reactions", reaction)
router.use('/api/comments', comment);

module.exports = router;
