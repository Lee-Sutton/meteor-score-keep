import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';


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
      Players.update(player._id, {$inc: {score: 1}})
    }}>
    +</button>
    <button onClick={() => {
      Players.update(player._id, {$inc: {score: -1}})}
    }>
    -</button>
    <button onClick={() => Players.remove(player._id)}>X</button>
    </p>
  );
  });
};



/**
* Initialize the players array upon startup
*/
Meteor.startup(() => {
  console.log('Adding a player');
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let jsx = (
      <div>
        <TitleBar title={title}/>
        {renderPlayers(players)}
        <AddPlayer score={10}/>
      </div>
    );
    ReactDom.render(jsx, document.getElementById('app'));

  });
});

