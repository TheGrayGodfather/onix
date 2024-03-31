const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    avatar: String,
    name: String,
    email: String,
    password: String,
    role: String,
    verified: {
        type: Boolean,
        default: false
    },
    myProblemSets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProblemSet"
    }],
    myBlogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }]
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = {User}