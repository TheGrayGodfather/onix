const { default: mongoose } = require("mongoose");

const requestPayload = new mongoose.Schema({
  type: String, // message, problemSet, blog
  message: String,
  problemSet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProblemSet",
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
  },
});

const requestSchema = new mongoose.Schema(
  {
    requestedUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    requestPayload,
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);

module.exports = { Request };
