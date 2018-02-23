import React from 'react'
import { playerActions, favoritesActions } from './../../_actions'


class Song extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlaySong = this.handlePlaySong.bind(this);
        this.handleAddFavorite = this.handleAddFavorite.bind(this);
    }

    handlePlaySong(e, music) {
        e.preventDefault();
        this.props.dispatch(playerActions.play(music));
    }

    handleAddFavorite(e, music) {
        e.preventDefault();
        console.log(music);
        this.props.dispatch(favoritesActions.add(music));
    }

    handleRemoveFavorite(e, music) {
        e.preventDefault();
        this.props.dispatch(favoritesActions.remove(music));
    }

    render() {
        const { music } = this.props
        return (
            <li key={music.id}>
              <div className="song-component">
                <img
                  className="play-img"
                  alt="play-img"
                  src="https://image.flaticon.com/icons/svg/149/149668.svg"
                  onClick={(e) => this.handlePlaySong(e, music)}
                />
                <span className="song-info"> {music.title} by <span className="font-italic font-weight-light">{music.artist} </span><span>genre </span><span className="font-italic font-weight-light">{music.type}</span></span>
                {this.props.favorites.find(favorite => favorite.id === music.id) ?
                (
                  <button
                    className="btn btn-danger float-right"
                    onClick={(e) => this.handleRemoveFavorite(e, music)}
                  >
                  -
                  </button>
                ) : (
                  <button
                    className="btn btn-primary float-right"
                    onClick={(e) => this.handleAddFavorite(e, music)}
                  >
                  +
                  </button>
                )
                }
              </div>
              <br/>
            </li>
          )
    }
}

export default Song