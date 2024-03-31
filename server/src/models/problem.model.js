const { default: mongoose } = require("mongoose");

const testCaseSchema = new Schema({
  input: String,
  output: String,
});

const problemSchema = new mongoose.Schema(
  {
    name: String,
    description: String, // markup
    examples: [String], // markup
    constrains: String, // list markup
    level: String, // easy, medium, hard
    category: String, // separated by comma markup
    points: Number,
    referenceLink: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    starterCode: String, // code in string
    testCase: [testCaseSchema],
    executionFunction: String,
    problemSet: { type: mongoose.Schema.Types.ObjectId, ref: "ProblemSet" }
  },
  { timestamps: true }
);

const Problem = mongoose.model("Problem", problemSchema);

module.exports = { Problem };