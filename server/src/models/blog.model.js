const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    topics: Strings, // separated by comma
    content: String, // markup
    coverPicture: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    isAdminVerified: Boolean,
}, { timestamps: true })

const Blog = mongoose.model("Blog", blogSchema)

module.exports = { Blog }