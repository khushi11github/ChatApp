const UserModel = require("../models/UserModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
async function checkPassword(request,response){
    try{
        const{ password, userId }= request.body
        const user = await UserModel.findById(userId)
           const verifypassword = await bcrypt.compare(password, user.password)
           if(!verifypassword){
            
            return response.status(400).json({
                message:"please check your password",
                error:true
            })
            
           }
           const tokenData ={
            id: user._id,
            email: user.email
           }
           const token = jwt.sign(tokenData,process.env.SECRET_KEY,{ expiresIn :'1d'})
           const cookieOption ={
            http:true,
            secure:true
           }


           return response.cookie('token',token,cookieOption).status(200).json({
            message:"Password verified successfully",
           token:token,
           success:true
           })
    }catch(error){
        return response.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}
module.exports = checkPassword