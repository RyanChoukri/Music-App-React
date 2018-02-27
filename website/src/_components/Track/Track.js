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
        const { track } = this.props;
        const isFavorite = this.props.favorites.find(favorite => favorite.id === track.id);
        return (
            <div className="col-md-3 track-block">
              <div className="track">
                <div className="track-picture">
                  <img alt="trackPic" src="https://i1.sndcdn.com/artworks-000182755511-wz2o9f-t500x500.jpg"/>
                </div>
                <div className="track-content">
                  <hr className={isFavorite ? "fav-band fav-band-active": "fav-band"}/>
                  <div className="track-artist">
                    {track.artist}
                  </div>
                  <div className="track-title">
                  {track.title}
                  </div>
                  {/* <span className="song-info"> {track.title} by <span className="font-italic font-weight-light">{track.artist} </span><span>genre </span><span className="font-italic font-weight-light">{track.type}</span></span> */}
                
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