import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {
    Players.insert({
        name: 'Ali',
        score: 12
    });
    console.log(Players.find().fetch());
});

