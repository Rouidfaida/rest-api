let express = require('express')
const connectDB = require('./config/connectDB')
const Product = require('./models/product')
const user = require('./models/user')
const User = require('./models/user')
let app= express()
require('dotenv').config({ path: './config/.env' })
connectDB()
app.use(express.json())
// CRUS
// add user
app.post('/user/post',async(req,res)=>
{
    let {name,email,number}=req.body
try {
    let newUser= User({
        name,email,number
    })
    await newUser.save()
    res.send(newUser)
} catch (error) {
    console.log(error.message)
}
})
//delete user
app.delete('/user/delete/:id',async(req,res)=>{
    try {
    let deleteUser= await User.findByIdAndDelete(req.params.id)  
    res.send('user is deleted')
    } catch (error) {
        console.log(error.message)
    }
})
// // update user
app.put('/user/put/:id',async(req,res)=>{
    try {
        let updateUser=await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(updateUser)
    } catch (error) {
        console.log(error.message)
    }
})
// get user
app.get('/user/get',async(req,res)=>{
    try {
      let getUser= await User.find()
      res.send(getUser)
    } catch (error) {
     console.log(error.message)   
    }
})
//get user by id
app.get('/user/get/:id',async(req,res)=>
{
    try {
      let getUserId=await User.findById(req.params.id)  
      res.send(getUserId)
    } catch (error) {
        console.log(error.message)
    }
})

//add product
app.post('/product/post', async(req,res)=>{
    try {
       let {name,price,quantite} =req.body
       let newProduct= Product({
           name,price,quantite
       })
       await newProduct.save()
       res.send(newProduct)
    } catch (error) {
        console.log(error.message)
    }
})

//delete product
app.delete('/product/delete/:id', async(req,res)=>{
    try {
      let productDeleted= await Product.findByIdAndDelete(req.params.id)
      res.send('product is deleted')  
    } catch (error) {
        console.log(error.message)
    }
})
let PORT =process.env.PORT ||5000
app.listen(PORT,(err)=>
err ? console.log(err) : console.log('server is running'));
// get product
app.get('/product/get/',async(req,res)=>{
    try {
        let getProduct =await Product.find()
        res.send(getProduct)
    } catch (error) {
        console.log(error.message)
    }
})
//get product by id
app.get('/product/get/:id',async(req,res)=>{
   try {
    let getProductId=await Product.findById(req.params.id)
    res.send(getProductId)
   } catch (error) {
       console.log(error.message)
   }
})
//update product
app.put('/product/put/:id',async(req,res)=>{

try {
    let newProductEdited= await Product.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
res.send(newProductEdited)
} catch (error) {
    console.log(error.message)
}
})