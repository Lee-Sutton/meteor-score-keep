import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class Player extends React.Component {
    render() {
        let player = this.props.player;
        let itemClassName = `item item--position-${player.rank}`;
        return (
            <div className={itemClassName} key={player._id}>
             <div className="player">
              <div>
                <h3 className="player__name">{player.name}</h3>
                <p className="player__stats">{player.position} place with {player.score} points </p>
              </div>
              <div className="player__actions">
                <button className="button button--round" onClick={() => {
                  Players.update(player._id, {$inc: {score: 1}})
                }}>+1</button>
                <button className="button button--round" onClick={() => {
                  Players.update(player._id, {$inc: {score: -1}})}
                }>-1</button>
                <button className="button button--round" onClick={() => Players.remove(player._id)}>X</button>
              </div>
             </div>
           </div>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
};