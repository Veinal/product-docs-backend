const imageSchema= require('../model/imagesSchema')
const Insert = async(req,res)=>{
    try{
        const {name}=req.body;
        const image=req.files.map((file)=>file.filename);
        const data = await new imageSchema({
            name,image
        });
        const savedData =await data.save()
        console.log("insertion success")
        res.send({"insertion successful":true,savedData})
    }   
    catch(error){
        console.error("some error occured!!"+error)
        res.status(500).json("some internal error!!!")
    }
}
module.exports= {Insert};
