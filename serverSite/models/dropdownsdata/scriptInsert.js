const mongoose = require('mongoose');
const Options = require('./dropdowndataModels');

const data = new Options({
  options: [
    { value: 'ISICMILEVEL24', label: 'ISI CMI LEVEL 24' },
    { value: 'MathOLYMPAIDLEVEL26', label: 'Math OLYMPAID LEVEL 26' },
    { value: 'MathOLYMPAIDLEVEL2', label: 'Math OLYMPAID LEVEL 2' },
    { value: 'Statistics', label: 'Statistics' }
  ],
  secondaryOptions: {
    ISICMILEVEL24: [
      { value: 'ALGEBRAIV', label: 'ALGEBRA IV' },
      { value: 'COMBINATORSIV', label: 'COMBINATORS IV' },
      { value: 'GEOMETRYIV', label: 'GEOMETRY IV' }
    ],
    MathOLYMPAIDLEVEL26: [
      { value: 'ALGEBRAV', label: 'ALGEBRA V' },
      { value: 'COMBINATORSV', label: 'COMBINATORS V' },
      { value: 'GEOMETRYV', label: 'GEOMETRY V' }
    ]
  },
  thirdOptions: {
    ALGEBRAIV: [
      { value: 'CEVASTHEOREM', label: 'CEVAS THEOREM' },
      { value: 'MENELAUSTHEOREM', label: 'MENELAUS THEOREM' }
    ],
    COMBINATORSIV: [
      { value: 'ANGLES', label: 'ANGLES' },
      { value: 'ANGLESINPARALLELLINES', label: 'ANGLES IN PARALLEL LINES' }
    ],
    GEOMETRYIV: [
      { value: 'AREAOFPEREMETEROFRECTANGLE', label: 'AREA OF PEREMETER OF RECTANGLE' },
      { value: 'AREAOFPEREMETEROFTRIANGLE', label: 'AREA OF PEREMETER OF TRIANGLE' }
    ]
  },
  difficultyOptions: [
    { value: 1, label: 'Level 1' },
    { value: 2, label: 'Level 2' },
    { value: 3, label: 'Level 3' },
    { value: 4, label: 'Level 4' },
    { value: 5, label: 'Level 5' }
  ]
});

const URI = process.env.MongoDBurl;

if (!URI) {
  console.error('MongoDB URL not set in environment variables');
  process.exit(1); 
}

const insertDropdownData = async () => {
  try {
    const existingData = await Options.findOne({});
    if (existingData) {
      console.log("Data already exists in the database.");
      return;
    }

    const savedData = await data.save();
    console.log("Data saved successfully");
  } catch (err) {
    console.error("Error saving data:", err);
  }
};

module.exports = insertDropdownData;
