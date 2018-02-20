import React from 'react';
import {Players} from './../api/players';


export default class AddPlayer extends React.Component {
  handleSubmit(event) {
    let playerName = event.target.playerName.value;

    event.preventDefault();
    if (playerName) {
      // Clear out the value in the form
      event.target.playerName.value = '';
      
      // Insert the player
      Players.insert({name: playerName, score: 0});
    }
  }
  
  render() {
    return(
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player Name"/>
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}