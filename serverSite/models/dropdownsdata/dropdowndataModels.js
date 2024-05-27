const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  value: String,
  label: String
});

const OptionsSchema = new mongoose.Schema({
  options: [optionSchema],
  secondaryOptions: {
    type: Map,
    of: [optionSchema]
  },
  thirdOptions: {
    type: Map,
    of: [optionSchema]
  },
  difficultyOptions: [optionSchema]
});

const Options = mongoose.model('Options', OptionsSchema);
module.exports = Options;
