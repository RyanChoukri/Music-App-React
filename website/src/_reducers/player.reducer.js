import { playerConstants } from '../_constants';

const initalstate = { music : {}}
export function player(state = initalstate, action) {
  switch (action.type) {
    case playerConstants.PLAYER_PLAY:
      return {
        music: action.music
      };
    case playerConstants.PLAYER_PAUSE:
      return {
        music: action.music
      };
    case playerConstants.PLAYER_STOP:
      return {music : {}};
    default:
      return state
  }
}
