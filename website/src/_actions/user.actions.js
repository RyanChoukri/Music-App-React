import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions, initActions } from './';
// import { browserHistory } from 'react-router'


export const userActions = {
    login,
    register,
    logout
};


function login(user, history) {
    return dispatch => {
        dispatch(request(user));

        userService.login(user)
            .then(
                res => {
                    dispatch(success(res));
                    dispatch(initActions.fetchInitData());
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(history) {
    userService.logout();
    history.push('/');
    return { type: userConstants.USERS_LOGOUT };
}

function register(user, history) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                res => {
                    dispatch(success(res.user));
                    history.push('/');
                    dispatch(initActions.fetchInitData());
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}