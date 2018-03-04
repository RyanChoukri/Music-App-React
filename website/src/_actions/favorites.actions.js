import { favoritesConstants } from '../_constants';
import { favoritesService } from '../_services';
import { alertActions } from './';
// import { browserHistory } from 'react-router'


export const favoritesActions = {
    fetch,
    add,
    remove
};



function fetch (music) {
    return dispatch => {
        favoritesService.fetchFavoritesTracks()
            .then(res => {
                if (!res) dispatch(alertActions.error(res));
                dispatch(send(res.tracks));
            },
            error => {
                dispatch(alertActions.error(error));
            });
    }

    function send(music) { return { type: favoritesConstants.FAVORITES_FETCH, music } }
}

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