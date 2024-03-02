const { default: mongoose } = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    requestedUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    requestMessage: String
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);

module.exports = { Request };