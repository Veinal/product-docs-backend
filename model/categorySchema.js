const mongoose = require('mongoose')
const {Schema} = mongoose;
const CatSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("category",CatSchema)