const MySchema= require('../model/productSchema')
const Insert = async(req,res)=>{
    try{
        const {product,quantity,price,description,category}=req.body;
        const image=req.files.map((file)=>file.filename);
        const data = await new MySchema({product,quantity,price,description,image,admin_id:req.admin,category_id:category});
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
        const data =await MySchema.find({admin_id:req.admin}).populate("category_id")
        console.log(data)
        res.json(data)
    }
    catch(error){
        console.error("some error occured"+error)
        res.status(500).json("some internal error")
    }
}

const Singleview = async(req,res)=>{
    try{
        let data = await MySchema.findById(req.params.id);
        if(!data){
            console.log("data not found with this ID");
            return res.status(404).send("Data does not exist with this ID");
        }else{
          
            console.log(data);
            res.json(data);
        }
        
    }
    catch(error){
        console.error("some error occured"+ error)
        res.status(500).json("some internal error!!!")
    }
}

const Delete= async(req,res)=>{
    try{
        let data = await MySchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this ID");
            return res.status(404).send("Data does not exist with this ID");
        }
        else{
            data = await MySchema.findByIdAndDelete(req.params.id);
            console.log("Data deleted successsfully..");
            res.json({"Success":true,"Deleted Data":data})
        }
    }
    catch(error){
        console.error("some error occured"+ error)
        res.status(500).json("some internal error!!!")
    }
}

const Update = async(req,res)=> {
    const { product,quantity,price,description } = req.body;
    try{
        const newData  = {}
        if(product){newData.product=product}
        if(quantity){newData.quantity=quantity}
        if(price){newData.price=price}
        if(description){newData.description=description}

        let data = await MySchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this ID");
            return res.status(404).send("Data does not exist with this ID");
        }else{
            data = await MySchema.findByIdAndUpdate(req.params.id,{$set:newData});
            // console.log("Updated data: "+ data)
            res.json({data});
        }

    }
    catch(error){
        console.error("some error occured"+ error)
        res.status(500).json("some internal error!!!")
    }
}
module.exports= {Insert,View,Singleview,Delete,Update};