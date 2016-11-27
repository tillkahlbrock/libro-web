import { assign } from 'lodash';
import * as actions from './actions';

const initialState = {
    username: null,
    password: null,
    loggedIn: false,
    mediaList: [],
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.CHANGE_USERNAME_INPUT_REQUESTED:
            return assign({}, state, { username: payload.text });

        case actions.CHANGE_PASSWORD_INPUT_REQUESTED:
            return assign({}, state, { password: payload.text });

        case actions.LOGIN_SUCCEEDED:
            return assign({}, state, { loggedIn: true });

        case actions.FETCH_INITIAL_DATA_SUCCEEDED:
            return assign({}, state, { mediaList: payload.mediaList });

        case actions.TOKEN_LOADING_FAILED:
            return assign({}, state, { loggedIn: false });

        case actions.TOKEN_LOADING_SUCCEEDED:
            return assign({}, state, { token: payload.token, loggedIn: true });

        default:
            return assign({}, state);
    }
}