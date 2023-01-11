const router = require('express').Router();
const schema  = require('../schemas/user');
const validator = require('../middlewares/validator')
const {register, check, logIn, loginWithToken, readOne, update, exit} = require('../controllers/user');
const {accountExists} = require ("../middlewares/accountExistsSignUp")
const accountExistsSignIn = require ("../middlewares/accountExistsSignIn")
const schemaSignIn = require('../schemas/signin')
const {accountHasBeenVerified} = require('../middlewares/accountHasBeenVerified')
const passport = require('../config/passport')
const mustSignIn = require('../middlewares/mustSignIn')

router.post('/sign-up',validator(schema)  , accountExists, register)
router.post('/sign-in', validator(schemaSignIn), accountExistsSignIn, accountHasBeenVerified, logIn)
router.post("/sign-out", passport.authenticate("jwt",{session:false}), exit)
router.get('/me/:id', readOne)
router.patch('/me/:id', update)



router.get("/verify/:code" , check)
router.post('/token', passport.authenticate('jwt', {session: false}), mustSignIn, loginWithToken )

module.exports = router;
