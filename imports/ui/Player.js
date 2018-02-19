import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class Player extends React.Component {
    render() {
        let player = this.props.player;
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
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
};