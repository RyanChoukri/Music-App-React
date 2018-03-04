import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { tracksAction, favoritesActions } from '../_actions'
import TracklistContainer from '../_containers/TracklistContainer'

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Bienvenue sur Music</h1>
        {this.props.user && Object.keys(this.props.user).length ?
          (
            <div>
              <p>Selection musicale</p>
              <TracklistContainer { ...this.props} trackList={this.props.tracks}/>
            </div>
          ) : (
            <div>
              <Link to="/login">Connectez-vous</Link>
              <div>Ou</div>
              <Link to="/register">Inscrivez-vous</Link>
            </div>
          )
        }
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { favorites, authentication, tracks } = state;
  return {
    user : authentication.user,
    favorites,
    tracks
  };
}
const HomePage = connect(mapStateToProps)(Home);
export { HomePage as Home };