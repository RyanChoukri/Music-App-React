import React from 'react'
import { playerActions } from '../_actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Song from '../_components/Song/Song'


class Music extends React.Component {

  handleSubmit(e, music) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(playerActions.play(music));
  }

  getMusic() {
    return this.props.favorites.map((music, key) => {
      return (
        <ul className="col-lg-6">
          <Song { ...this.props} music={music} />
        </ul>
      )
    });
  }

  render() {
    return (
      <div>
        <h1>Vos musiques favorites</h1>
        {this.props.favorites.length ?
          (
            <ul>
              { this.getMusic() }
            </ul>
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
const MusicPage = connect(mapStateToProps)(Music);
export { MusicPage as Music };