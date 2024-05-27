const mongoose = require('mongoose');

// Define the option schema
const optionSchema = new mongoose.Schema({
    text: String,
    isChecked: Boolean,
  });
  
  // Define the admin data schema
  const admindataSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      sparse: true,  
    },
    goals: [{ value: String, label: String }],
    courses: [{ value: String, label: String }],
    topics: [{ value: String, label: String }],
    selectedDifficulty: { value: Number, label: String },
    selectedQuestionType: { value: String, label: String },
    topics: [{ value: String, label: String }],
    questionTextarea: String,
    hintquestion:String,
    solutionanswer:String,
    optionsAndAnswers: [optionSchema],
    dynamicInputs: {
        type: Map,
        of: String,  
      },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('AdminData', admindataSchema);
