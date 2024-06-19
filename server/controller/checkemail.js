// const UserModel = require("../models/UserModel");


// async function checkEmail(request,response){

//     try{
//         const {email} = request.body;
//         const checkemail = await UserModel.findOne({email}).select("-password")
//         if(!checkemail){
//             return response.status(400).json({
//                 message:"Email is not registered",
//                 error:true
//             })
//         }
//         return response.status(200).json({
//             message:"email verify",
//             succes:true,
//             data:checkemail
//         })

//     }catch(error){
     

//         return response.status(500).json({
//             message:error.message,
//             error:true

//         })
//     }

// }
// module.exports = checkEmail





const UserModel = require("../models/UserModel");

async function checkEmail(request, response) {
    try {
        const { email } = request.body;
        
        // Validate email existence in request body
        if (!email) {
            return response.status(400).json({
                message: "Email is required",
                error: true
            });
        }

        const checkemail = await UserModel.findOne({ email }).select("-password");
        
        if (!checkemail) {
            return response.status(400).json({
                message: "Email is not registered",
                error: true
            });
        }
        
        return response.status(200).json({
            message: "Email verified",
            success: true,
            data: checkemail
        });

    } catch (error) {
        return response.status(500).json({
            message: error.message,
            error: true
        });
    }
}

module.exports = checkEmail;
