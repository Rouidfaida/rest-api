let mongoose=require('mongoose')
let Schema=mongoose.Schema
let productSchema=Schema({
    name:String,
    price:String,
    quantite:String,
})
module.exports=mongoose.model('Product',productSchema)