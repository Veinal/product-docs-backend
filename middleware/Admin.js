const jwt = require('jsonwebtoken')
const JWT_SECRET = "veinal"

const fetchAdmin= (req,res,next)=>{
    const token = req.header("Token")
    if(!token){
        res.status(401).send({error:"Access denied! No token provided"})

    }
    try{
        const data = jwt.verify(token,JWT_SECRET)
        console.log("user id:",data);
        req.admin=data
        next()

    }
    catch(err){
        res.status(403).send({message:"Invalid Token!"})

    }
}
module.exports=fetchAdmin;