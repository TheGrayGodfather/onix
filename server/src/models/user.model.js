const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    verified: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = {User}