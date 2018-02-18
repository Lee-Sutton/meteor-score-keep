import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';


/** 
 * Player class represents each player on the scoreboard
*/
class Player {
  constructor(playerId, name, score = 0) {
    this._id = playerId
    this.name = name;
    this.score = score;
  }
}

/**
 * 
 * @param {[Player]} playersList renders the input playersList to jsx paragraphs
 */
const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return <p key={player._id}>{player.name} has {player.score} points</p>
  });
};

/**
* Initialize the players array upon startup
*/
Meteor.startup(function () {
  console.log('Adding a player');
  Players.insert({
    name: 'client',
    score: -12
  });
  Tracker.autorun(function () {
    let players = Players.find().fetch();
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
});

