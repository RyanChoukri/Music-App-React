import React, { Component } from 'react'
import { playerActions, favoritesActions } from '../_actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import TracklistContainer from '../_containers/TracklistContainer'


class Favorite extends Component {

  componentDidMount() {
    this.props.dispatch(favoritesActions.fetch());
  }

  render() {
    const { favorites, tracks } = this.props;
    const favoritesTrack = tracks.filter(item => {
      return favorites.find(favorite => item._id === favorite.track);
    });

    return (
      <div>
        <h1>Vos musiques favorites</h1>
        {this.props.favorites.length ?
          (
            <TracklistContainer { ...this.props} trackList={favoritesTrack}/>
          ) : (
            <Link to="/">Ajouter des musiques</Link>
          )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { favorites, tracks } = state;
  return {
    tracks,
    favorites
  };
}
const FavoritePage = connect(mapStateToProps)(Favorite);
export { FavoritePage as Favorite };