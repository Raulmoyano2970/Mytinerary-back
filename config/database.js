const mongoose = require ('mongoose')

const connection= async()=>{
    try{
        mongoose.connect(
            process.env.DB_LINK, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        )
        console.log('connected to dabase')
    }catch(error){
        console.log(error.message)
    }
}
connection()