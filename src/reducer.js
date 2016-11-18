import { assign } from 'lodash';
import * as actions from './actions';

const initialState = {
    username: null,
    password: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return assign({}, state);
    }
}