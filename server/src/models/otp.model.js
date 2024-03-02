const { default: mongoose } = require("mongoose");

const optSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    OTP: String,
    expiredAt: {
      type: Date,
      default: new Date(Date.now() + 2 * 60 * 1000)
    },
  },
  { timestamps: true }
);

const OTP = mongoose.model("OTP", optSchema);

module.exports = { OTP };