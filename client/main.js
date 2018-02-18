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
    return (
    <p key={player._id}>
    {player.name} has {player.score} points

    <button onClick={() => {
      Players.update({_id: player._id}, {$inc: {score: 1}})
    }}>
    +</button>
    <button onClick={() => {
      Players.update({_id: player._id}, {$inc: {score: -1}})}
    }>
    -</button>
    <button onClick={() => Players.remove({_id: player._id})}>X</button>
    </p>
  );
  });
};

const handleSubmit = (event) => {
  let playerName = event.target.playerName.value;
  // Stop full page refresh
  event.preventDefault();

  if (playerName) {
    // Clear out the value in the form
    event.target.playerName.value = '';

    // Insert the player
    Players.insert({
      name: playerName,
      score: 0
  });

  }
};

/**
* Initialize the players array upon startup
*/
Meteor.startup(() => {
  console.log('Adding a player');
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Account Settings';
    let name = 'Lee';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>This is from {name}</p>
        <p>This is my second</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add Player</button>
        </form>
      </div>
    );

    ReactDom.render(jsx, document.getElementById('app'));

  });
});

