import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player'


/**
 * 
 * @param {[Player]} playersList renders the input playersList to jsx paragraphs
 */
const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return <Player key={player._id} player={player}/>;
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
        <AddPlayer/>
      </div>
    );
    ReactDom.render(jsx, document.getElementById('app'));

  });
});

