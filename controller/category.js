const CatSchema= require('../model/categorySchema')
const Insert = async(req,res)=>{
    try{
        const {name,status}=req.body;
        const data = await new CatSchema({name,status});
        const savedData =await data.save()
        console.log("insertion success")
        res.send({"insertion successful":true,savedData})
    }   
    catch(error){
        console.error("some error occured!!"+error)
        res.status(500).json("some internal error!!!")
    }
}

const View=async(req,res)=>{
    try{
        const data =await CatSchema.find()
        console.log(data)
        res.json(data)
    }
    catch(error){
        console.error("some error occured"+error)
        res.status(500).json("some internal error")
    }
}
module.exports={Insert,View};