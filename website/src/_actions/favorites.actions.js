import { favoritesConstants } from '../_constants';
// import { userService } from '../_services';
// import { alertActions } from './';
// import { browserHistory } from 'react-router'


export const favoritesActions = {
    add,
    remove
};


function add (music) {
    return dispatch => {
        dispatch(send(music));
    }

    function send(music) { return { type: favoritesConstants.FAVORITES_ADD, music } }
}

function remove (music) {
    return dispatch => {
        dispatch(send(music));
    }

    function send(music) { return { type: favoritesConstants.FAVORITES_REMOVE, music } }
}