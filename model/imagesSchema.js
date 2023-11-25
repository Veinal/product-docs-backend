const mongoose=require('mongoose')
const {Schema}= mongoose
const imageSchema = new Schema({
    name:{
        type:String,
        required:false
    },
    image:[
        {
            type:String,
            required:false
        }
    ],
})
module.exports=mongoose.model("image",imageSchema)