import React from 'react'
import { playerActions, favoritesActions } from './../_actions'
import Track from '../_components/Track/Track'

class trackListContainer extends React.Component {
  getTrackList() {
    // if(!this.props.trackList) return <Loader/>
    return this.props.trackList.map((track, key) => {
      return (
          <Track { ...this.props} key={track._id} track={track} />
      )
    });
  }

  render() {
      return (
          <div className="row tracklist">
            {this.getTrackList()}
          </div>
        )
  }
}

export default trackListContainer