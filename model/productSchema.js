const mongoose = require('mongoose')
const {Schema} = mongoose;
const MySchema = new Schema({
    admin_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register"
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    product:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:[
        {
        type:String,
        required:false
        }
    ],
})
module.exports=mongoose.model("product",MySchema)