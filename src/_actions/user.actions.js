import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAssets
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAssets() {
    return dispatch => {
        dispatch(request());

        userService.getAssets()
            .then(
                assets => dispatch(success(assets)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GET_ASSETS_REQUEST } }
    function success(assets) { return { type: userConstants.GET_ASSETS_SUCCESS, assets } }
    function failure(error) { return { type: userConstants.GET_ASSETS_FAILURE, error } }
}