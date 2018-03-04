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
    return (
      <div>
        <h1>Vos musiques favorites</h1>
        {this.props.favorites.length ?
          (
            <TracklistContainer { ...this.props} trackList={this.props.favorites}/>
          ) : (
            <Link to="/">Ajouter des musiques</Link>
          )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { favorites } = state;
  return {
    favorites
  };
}
const FavoritePage = connect(mapStateToProps)(Favorite);
export { FavoritePage as Favorite };