import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
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
                    console.log(res);
                    dispatch(success(res));
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
    return { type: userConstants.LOGOUT };
}

function register(user, history) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                res => {
                    dispatch(success(res.user));
                    history.push('/');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}