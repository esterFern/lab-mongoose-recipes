const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const recipeSchema = new Schema({
  title:{
    type: String,
    required: true,
    unique: true,

  },
  level:{
    type: String,
    required: true
  },

  ingredients:{
    type: Array,
    required: true
  },
  cuisine:{
    type: String,
    required: true
  },
  dishType:{
    type: Array,
    required: true
  },
  image:{
    type: String,
    required: true
  }, 
  duration:{
    type: Number,
    required: true
  }, 
  creator:{
    type: String,
    required: true
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;