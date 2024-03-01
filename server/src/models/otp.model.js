const { default: mongoose } = require("mongoose");

const optSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    OTP: String,
    expiredAt: Date,
  },
  { new: true }
);

const OTP = mongoose.model("OTP", optSchema);

module.exports = { OTP };