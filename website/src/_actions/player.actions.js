import { playerConstants } from '../_constants';
// import { userService } from '../_services';
// import { alertActions } from './';
// import { browserHistory } from 'react-router'


export const playerActions = {
    play
};


function play (music) {
    return dispatch => {
        music.status = 'play';
        dispatch(send(music));
    }

    function send(music) { return { type: playerConstants.PLAYER_PLAY, music } }
}