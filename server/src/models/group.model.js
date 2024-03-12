const { default: mongoose } = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = { Group };