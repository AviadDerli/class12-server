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