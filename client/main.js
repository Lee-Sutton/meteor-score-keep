import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

Tracker.autorun(function() {
    console.log('Players list', Players.find().fetch());
});

/**
 * Player class
 */
class Player {
    constructor(playerId, name, score = 0) {
        this._id = playerId
        this.name = name;
        this.score = score;
    }

    get playerId() {
        return this._id;
    }

    set playerId(val) {
        this._id = val;
    }
}

/**
 * Players array
 */
const players = [
    new Player(1, 'Lee', 99),
    new Player(2, 'John', -1),
    new Player(3, 'Andrew', -12),
];

const renderPlayers = (playersList) => {
    return playersList.map((player) => {
        return <p key={player.playerId}>{player.name}</p>
    });
};

Meteor.startup(function() {
  let title = 'Account Settings';
  let name = 'Lee';
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>This is from {name}</p>
      <p>This is my second</p>
      {renderPlayers(players)}
    </div>
  );

  ReactDom.render(jsx, document.getElementById('app'));
});
