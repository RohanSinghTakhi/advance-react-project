const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        require:true },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    contactNumber: {
        type: String
    }
})
userSchema.virtual('password')
    .set(function (password) {
        this.hash_password = bcrypt.hashSync(password, 10)
    })

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hash_password)
    }}

module.exports = mongoose.model('users', userSchema)
