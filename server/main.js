import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {
});

// Object spread operator
let user = {
  name: 'Lee',
  location: 'Vancouver'
};

// Object spread
let person = {
  ...user,
  age: 26
}

// Object property shorthand
let bike = 'Kona';
let stuff = {
  bike
};

let house = {
  bedrooms: 2,
  bathrooms: 1.5
};

let yearBuilt = 1995;

let obj = {
  ...house,
};
