const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');
const fs = require('fs');

const Recipe = require('./Recipe.js');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


Recipe.create({
  title: 'Asian Glazed Chicken Thighs',
  level: 'Amateur Chef',
  ingredients: ['1/2 cup rice vinegar', '5 tablespoons honey', '1/3 cup soy sauce (such as Silver Swan®)', '1/4 cup Asian (toasted) sesame oil', '3 tablespoons Asian chili garlic sauce', '3 tablespoons minced garlic', 'salt to taste', '8 skinless, boneless chicken thighs'],
  cuisine: 'Asian',
  dishType: ['Dish'],
  image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
  duration: 40,
  creator: 'Chef LePapu'
},
  (err)=>console.log(err)
);

Recipe.findById('5c7913be0b53764a2846cf93')
  .then(result=>{
    console.log(result.title);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));



Recipe.insertMany(data)
  .then(result=> {
    console.log(result);
    mongoose.connection.close();
  })
  .catch(err=> console.log(err))


Recipe.find()
  .then(result=>{
      result.forEach(function(e){
        console.log(e.title);
      });
    mongoose.connection.close();
  })
  .catch(err => console.log(err));


Recipe.findByIdAndUpdate('5c791764eb4fb34cea8fae9a', {duration: 100}, {new:true})
  .then(result=>{
    console.log('Success updating element');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));


Recipe.deleteOne({_id:'5c79171ed576764cc097cc83'})
.then(result=>{
  console.log('Success removing element');
  mongoose.connection.close();
})
.catch(err => console.log(err));