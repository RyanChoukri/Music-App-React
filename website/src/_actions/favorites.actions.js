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
                dispatch(send(res.favorites));
            },
            error => {
                dispatch(alertActions.error(error));
            });
    }

    function send(music) { return { type: favoritesConstants.FAVORITES_FETCH, music } }
}

function add (item) {
    return dispatch => {
        favoritesService.addFavoritesTracks(item)
            .then(res => {
                dispatch(send(res));
            })
    }

    function send(music) { return { type: favoritesConstants.FAVORITES_ADD, music } }
}

function remove (item) {
    return dispatch => {
        favoritesService.removeFavoritesTracks(item)
            .then(res => {
                dispatch(send(res));
            })
    }

    function send(music) { return { type: favoritesConstants.FAVORITES_REMOVE, music } }
}