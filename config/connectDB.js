let mongoose = require('mongoose')


let connectDB = async()=>{
try {
    await mongoose.connect(process.env.db)
    console.log("data base is connect")
} catch (error) {
    console.log(error.message)
}
}
module.exports= connectDB