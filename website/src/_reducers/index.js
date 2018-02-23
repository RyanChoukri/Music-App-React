import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { player } from './player.reducer';
import { favorites } from './favorites.reducer';



const rootReducer = combineReducers({
  alert,
  favorites,
  player,
  authentication,
});

export default rootReducer;