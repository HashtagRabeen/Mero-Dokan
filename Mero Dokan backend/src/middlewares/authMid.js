const jwt=require("jsonwebtoken");

const AuthMid=(req,res,next)=>{
    const token =req.headers.authorization.split(" ")[1].trim()
    if(!token){
        return res.status(401).json({msg:"Token is required"})
    }else{
        const decoded=jwt.verify(token,"ddsvnbcvnevdcnwsmdnsahhbcdhjslbndvb")
        console.log(decoded);
        req.user=decoded
    }
    next()
}

module.exports=AuthMid;