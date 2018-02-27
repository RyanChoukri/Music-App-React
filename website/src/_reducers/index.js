import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { player } from './player.reducer';
import { favorites } from './favorites.reducer';
import { tracks } from './tracks.reducer';



const rootReducer = combineReducers({
  alert,
  favorites,
  tracks,
  player,
  authentication,
  registration,
});

export default rootReducer;