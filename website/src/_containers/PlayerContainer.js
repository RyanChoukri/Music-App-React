import React, { Component } from 'react'
class PlayerContainer extends Component {

  render() {
      return (
        <div className="player">
            <img className="playerPicture" alt="playerPicture" src={this.props.player.music.cover} />
            <p>{this.props.player.music.title}</p>
            <p>Artiste : {this.props.player.music.artist}</p>
            <p>Genre : {this.props.player.music.type}</p>
            <audio
            src={this.props.player.music.song} autoPlay controls="controls">
            Votre navigateur ne supporte pas l'élément <code>audio</code>.
            </audio>
        </div>
        )
  }
}

export default PlayerContainer