import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { player } from './player.reducer';
import { favorites } from './favorites.reducer';
import { tracks } from './tracks.reducer';

import { userConstants } from '../_constants';

const appReducer = combineReducers({
  alert,
  favorites,
  tracks,
  player,
  authentication,
  registration,
});

const initialState = appReducer({}, {})

const rootReducer = (state, action) => {
  if (action.type === userConstants.USERS_LOGOUT) {
    localStorage.removeItem('user');
    return state = {
      'alert' : {},
      'favorites' : [],
      'tracks' : [],
      'player' : {},
      'authentication' : {},
      'registration' : {}
    };
  }
  return appReducer(state, action)
}


export default rootReducer;