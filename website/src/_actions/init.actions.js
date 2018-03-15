import { favoritesConstants } from '../_constants';
import { favoritesService } from '../_services';
import { tracksAction, favoritesActions } from './';
// import { browserHistory } from 'react-router'


export const initActions = {
    fetchInitData,

};


function fetchInitData () {
    return dispatch => {
        dispatch(tracksAction.fetch());
        dispatch(favoritesActions.fetch());
    }
}
