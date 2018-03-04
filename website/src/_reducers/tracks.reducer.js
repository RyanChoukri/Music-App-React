import { tracksConstants } from '../_constants';

const initalstate = [];


export function tracks(state = initalstate, action) {
  switch (action.type) {
    case tracksConstants.TRACKS_FETCH:
      return action.tracks;
      // return { tracks : action.tracks , isFetching : true }
    default:
      return state
  }
}
