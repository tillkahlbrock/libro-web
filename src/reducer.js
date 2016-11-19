import { assign } from 'lodash';
import * as actions from './actions';

const initialState = {
    username: null,
    password: null,
    loggedIn: false,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.CHANGE_USERNAME_INPUT_REQUESTED:
            return assign({}, state, { username: payload.text });

        case actions.CHANGE_PASSWORD_INPUT_REQUESTED:
            return assign({}, state, { password: payload.text });

        case actions.LOGIN_REQUESTED:
            return assign({}, state, { loggedIn: true });

        default:
            return assign({}, state);
    }
}