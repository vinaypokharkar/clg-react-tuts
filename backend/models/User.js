const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // username: {
    //     type:String,
    //     required:true,
    //     unique:true
    // },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})
    // phoneNumber: {
    //     type:Number,
    //     required:true
    // }

// )

const userModel = mongoose.model('bread', userSchema);
module.exports = userModel;