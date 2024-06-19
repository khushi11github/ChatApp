const jwt = require('jsonwebtoken')
const UserModel = require('../models/UserModel')


const getUserDetailsFromToken = async(token)=>{
    if(!token){
        return {
  message:"session out",
  logout: true,

        }

        
}

const decode = await jwt.verify(token,process.env.SECRET_KEY)
const user = await UserModel.findById(decode.id)

return user

}

 module.exports = getUserDetailsFromToken