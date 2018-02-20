import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';
import App from './../imports/ui/App';

/**
* Initialize the players array upon startup
*/
Meteor.startup(() => {
  Tracker.autorun(() => {
    // List players with highest score first
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let title = 'Score Keep';
    ReactDom.render(<App title={title} players={players}/>, 
      document.getElementById('app'));
  });
});

