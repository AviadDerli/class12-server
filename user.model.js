const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    permission: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    password:{
        type:String,
        select : false
    },
    createdDate : {
        type : Date,
        default :  Date.now
    },
    isActive:{
        type:Boolean,
        default:true
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

let user = {
    fName: "haim",
    lName: "cohen",
    email: "haim@gmail.com",
    password : "123456"
}


const starter = async ()=>{
    const db = require('./db')
    await db.connect()

    // let result = await userModel.create(user)

    let result = await userModel.find({lName : "cohen"})
    result.forEach(u=>console.log(u.email, u.lName,u.fName))
}

starter()
// connect
// 