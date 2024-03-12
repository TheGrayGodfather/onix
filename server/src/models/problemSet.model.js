const { default: mongoose } = require("mongoose");

const problemSetSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    problems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Problem" }],
    relatedBlogs: [mongoose.Schema.Types.ObjectId],
    priceINR: Number,
    isAdminVerified: Boolean,
  },
  { timestamps: true }
);

const ProblemSet = mongoose.model("ProblemSet", problemSetSchema);

module.exports = { ProblemSet };