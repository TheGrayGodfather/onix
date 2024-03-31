const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    category: Strings, // separated by comma
    content: String, // markup
    coverPicture: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    problemSet: { type: mongoose.Schema.Types.ObjectId, ref: "ProblemSet" },
    isAdminVerified: Boolean,
}, { timestamps: true })

const Blog = mongoose.model("Blog", blogSchema)

module.exports = { Blog }