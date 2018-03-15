import React from 'react'
import { playerActions, favoritesActions } from './../../_actions'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlay, faCoffee } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faPlay, faCoffee);

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlaySong = this.handlePlaySong.bind(this);
        this.handleAddFavorite = this.handleAddFavorite.bind(this);
    }

    handlePlaySong(e, track) {
        e.preventDefault();
        this.props.dispatch(playerActions.play(track));
    }

    handleAddFavorite(e, track) {
        e.preventDefault();
        this.props.dispatch(favoritesActions.add(track));
    }

    handleRemoveFavorite(e, track) {
        e.preventDefault();
        this.props.dispatch(favoritesActions.remove(track));
    }

    render() {
        const { track } = this.props;
        const isFavorite = this.props.favorites.find(favorite => favorite.track === track._id);
        return (
            <div className="col-md-3 track-block">
              <div className="track">
                <div className="track-picture">
                  <img alt="trackPic" src={track.cover}/>
                </div>
                <div className="track-content">
                  <hr className={isFavorite ? "fav-band fav-band-active": "fav-band"}/>
                  <div className="track-artist">
                    {track.artist}
                  </div>
                  <div className="track-title">
                  {track.title}
                  </div>

                  <div className="clearfix">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="play-img"
                      onClick={(e) => this.handlePlaySong(e, track)}
                    />
                    {isFavorite ?
                      (
                        <button
                          className="btn btn-fav-remove float-right"
                          onClick={(e) => this.handleRemoveFavorite(e, track)}
                        >
                        -
                        </button>
                      ) : (
                        <button
                          className="btn btn-fav float-right"
                          onClick={(e) => this.handleAddFavorite(e, track)}
                        >
                        +
                        </button>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          )
    }
}

export default Track