import { tracksConstants } from '../_constants';
import { tracksService } from '../_services';
import { alertActions } from './';
import { Login } from '../pages/Login';
// import { browserHistory } from 'react-router'


export const tracksAction = {
    fetch
};


function fetch () {
    return dispatch => {
        tracksService.fetchTracks()
            .then(res => {
                if (!res) dispatch(alertActions.error(res));
                dispatch(send(res.tracks));
            },
            error => {
                dispatch(alertActions.error(error));
            });
    }

    function send(tracks) { return { type: tracksConstants.TRACKS_FETCH, tracks } }
}