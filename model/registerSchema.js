const mongoose = require('mongoose')
const {Schema} = mongoose;
const RegSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("register",RegSchema)