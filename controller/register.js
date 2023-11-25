const RegSchema= require('../model/registerSchema')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "veinal"
const Register = async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        const image=req.file.filename; 
        const salt=await bcrypt.genSalt(10)
        console.log();
        const secpass=await bcrypt.hash(password,salt)
        

        const data = await new RegSchema({name,email,password:secpass,image,role});
        const savedData =await data.save()
        console.log("Registration successful")
        res.send({"registered successfully":true,savedData})
    }   
    catch(error){
        console.error("some error occured!!"+error)
        res.status(500).json("some internal error!!!")
    }
}
const Login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        let admin=await RegSchema.findOne({email})
        console.log(admin,987);
        if(!admin){
            return res.json({error: "Invalid credential email"})
        }
        const passwordCompare=await bcrypt.compare(password,admin.password)
        if(!passwordCompare){
            const success=false;
            return res.json({success,error: "Invalid credential pass"})
        }
        const data=admin.id;
        console.log(admin.id);
        const authtoken=jwt.sign(data, JWT_SECRET)
        const success=true;
        res.json({success,authtoken,admin})
    }catch(error){
        console.error(error.message);
        res.send("internal error occurred")
    }
}

const View=async(req,res)=>{
    try{
        const data =await RegSchema.find()
        console.log(data)
        res.json(data)
    }
    catch(error){
        console.error("some error occured"+error)
        res.status(500).json("some internal error")
    }
}

const SingleAdminView=async(req,res)=>{
    try{
        let data= await RegSchema.findById(req.params.id);
        if(!data){
            res.status(404).send("NOT FOUND")
        }
        res.json(data)
    }
    catch(error){
        console.error("some error occured"+error)
        res.status(500).json("some internal error")
    }
}
module.exports= {Register,Login,View,SingleAdminView};
