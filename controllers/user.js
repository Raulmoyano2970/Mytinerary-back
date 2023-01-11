const User = require('../models/User')
const bcryptjs = require('bcryptjs') //de esta libreria vamos a utilizar el método hashSync para encriptar la contraseña
const crypto = require('crypto')//de este modulo vamos a requerir el método randomBytes
const accountVerificationEmail = require('../middlewares/accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require('../config/response')
const jwt = require('jsonwebtoken')


const controlador = {

    register: async(req,res,next) => {
        //método para que un usuario se registre
        //luego de pasar por todas las validaciones:
            //desestructura el cuerpo
            let { name , lastName ,photo, age, email, password} = req.body
            let role = "user"
            //define las propiedades "extras" que necesite (online, codigo y verificado)
            let verified = false //por default es false
            let logged = false
            let code = crypto.randomBytes(10).toString('hex')//randomBytes es el id del moongose
            //encripto o hasheo la contraseña
            password = bcryptjs.hashSync(password,10)//encripto contraseña ccon la libreia//el 10 grado de seguridad
            console.log(password)     
        try { //crea el usuario
           
            await User.create({ name , lastName , role, photo, age, email, password, verified , logged , code })
            //envía mail de verificación (con transportador)
            await accountVerificationEmail(email,code)
            return userSignedUpResponse(req,res)
        } catch(error) {
            next(error)
        }
    },

    check: async(req,res,next) => {
        //método para que un usuario verifique su cuenta
        //requiere por params el código a verificar
        //busca un usuario que coincida el código
        //y cambia verificado de false a true
            //si tiene éxito debe redirigir a alguna página (home, welcome, login)
            //si no tiene éxito debe responder con el error
        let { code } = req.params

        try {
            let user = await User.findOneAndUpdate({code: code}, {verified:true}, {new:true} )
            if  (user){
                return res.redirect('https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif')
            }else{ 
                return userNotFoundResponse(req,res)
            }
        } catch(error) {
            next(error)//sirce para pasar a otro midlweare
        }
    },

    logIn: async (req, res, next) => {
        let { password } = req.body;
        let { user } = req;
        try {
            const verifyPassword = bcryptjs.compareSync(password, user.password)
            if (verifyPassword) {
                await User.findOneAndUpdate({ email: user.email }, { logged: true })
                let token = jwt.sign(
                    { id: user.id },
                    process.env.KEY_JWT,
                    { expiresIn: 60 * 60 * 365 }
                    
                )
                user = {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    photo: user.photo,
                    role: user.role,
                }
                return res.status(200).json({
                    response: { user, token },
                    success: true,
                    message: 'Welcome ' + user.name + ', we are happy to see you again'
                })
            }
            return invalidCredentialsResponse(req, res)
        } catch (error) {
            next(error)
        }
    },

    loginWithToken: async (req, res, next) => {

        let { user } = req;
        try{
            return res.json({
                response: {
                    user
                },
                success: true,
                message: `Welcome ${user.name}`})

        }catch(error){
            next(error)
        }
    },

    exit: async (req, res,next) => {
        let { email } = req.user
        try {
            await User.findOneAndUpdate({ email }, { logged: false }, { new: true })
            return userSignedOutResponse(req, res)
        } catch (error) {
            next(error)
        }

    },
    readOne: async (req, res, next) => {
        let id = req.params.id;
        try {
            let user = await User.findById({ _id: id })
            if (user) {
                res.status(200).json({
                    success: true,
                    message: 'the user was found successfully!.',
                    data: user,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'the user was not found.',
                })
            }
        } catch (error) {
            next(error)
        }
    },

    update: async (req, res, next) => {
        let id = req.params.id;
        if (req.body.password) {
            let { password } = req.body;
            password = bcryptjs.hashSync(password, 10);
            req.body.password = password;
        }


        try {
            let user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });

            if (user) {
                res.status(200).json({
                    success: true,
                    message: "The user was successfully modified!",
                    data: user,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "The user was not found",
                });
            }
        } catch (error) {
            next(error)
        }

}
}


module.exports = controlador
