import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

/**
* @param {[Player]} playersList renders the input playersList to jsx paragraphs
*/
const renderPlayers = (playersList) => {
};

export default class PlayerList extends React.Component {
  renderPlayers() {
    let playersList = this.props.players;
    if (playersList.length === 0) {
      return (
        <div className="item">
          <p>Add your first player to get started</p>
        </div>);
    }

    return playersList.map((player) => {
      return <Player key={player._id} player={player}/>;
    });
  }
  render() {
    return (
    <div>
      {this.renderPlayers()}
    </div>
  );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};