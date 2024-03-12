const { default: mongoose } = require("mongoose");

const solutionSchema = new mongoose.Schema(
  {
    solver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    problem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
    },
    submittedCode: String,
    durationInMilliseconds: Number,
    status: [Boolean], // success or failed
    terminalExecution: String
  },
  { timestamps: true }
);

const Solution = mongoose.model("Solution", solutionSchema);

module.exports = { Solution };