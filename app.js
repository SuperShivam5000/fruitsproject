const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type:String,
    required:[true, "No Name Given"]
  },
  rating: {
    type:Number,
    min:1,
    max:10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty Good"
});
// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "John",
//   age: 37
// });
// person.save();
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Extremely Good"
});
  const orange = new Fruit({
    name: "Orange",
    rating: 3,
    review: "Meh"
});

// Fruit.insertMany([kiwi,orange],function(err){
//   if (err) console.log(err);
// });

// Fruit.updateOne({ _id: "63464294c5f9ff70dfec2d48"}, {name: "Pineapple"}, function(err){
//   if(err) console.log(err);
// });

// Fruit.deleteOne({ _id: "63464294c5f9ff70dfec2d48"}, function(err){
//   if(err) console.log(err);
// });

// Fruit.deleteMany({ _id: "63464294c5f9ff70dfec2d48"}, function(err){
//   if(err) console.log(err);
// });

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 9,
//   review: "Very Good"
// });
// pineapple.save();
// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });
// person.save();

const grape = new Fruit({
  name: "Grape",
  rating: 9,
  review: "Excellent"
});
// grape.save();

// Person.updateOne({_id: "63463e9435ce27dbd2dd5b82"}, {favouriteFruit: grape}, function(err){
//   if(err) console.log(err);
// });

Fruit.find(function(err,fruits){
  if(err) console.log(err);
  else console.log(fruits);
  // for(i=0 ; i<fruits.length ; i++)
  // {
  //   console.log(fruits[i].name);
  // }
});
