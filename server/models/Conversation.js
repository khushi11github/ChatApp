const mongoose = require('mongoose');

const coverstionSchema = new mongoose.Schema({
    sender:{
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'

    },
    receiver:{
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:'User'
    },
    messages:[
        {
            type: mongoose.Schema.ObjectId,
    
        ref:'Message'
        }
    ]
},
{
    timestamps:true
})


const messageSchema = new mongoose.Schema({
    text:{
      type: String,
      default:""
    },
    imageUrl:{
        type:String,
        default:""
    },
    videoUrl:{ 
        type:String,
        default:""
},
seen: {
    type: Boolean,
    default: false
}
},{
    timestamps:true
})

const MessgaeModel = mongoose.model('Message',messageSchema)
const CoverstionModel = mongoose.model('Conversation',conversationSchema)

module.exports ={
    MessgaeModel,
    CoverstionModel
}
