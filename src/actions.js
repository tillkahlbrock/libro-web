import { SERVER_BASE_URL } from './config';

export const CHANGE_USERNAME_INPUT_REQUESTED = 'change username input requested';
export const CHANGE_PASSWORD_INPUT_REQUESTED = 'change password input requested';
export const FETCH_INITIAL_DATA_SUCCEEDED = 'fetch initial data succeeded';
export const LOGIN_SUCCEEDED = 'login succeeded';
export const TOKEN_LOADING_SUCCEEDED = 'token loading succeeded';
export const TOKEN_LOADING_FAILED = 'token loading failed';

export const changeUsernameInput = (text) => ({ type: CHANGE_USERNAME_INPUT_REQUESTED, payload: { text } });
export const changePasswordInput = (text) => ({ type: CHANGE_PASSWORD_INPUT_REQUESTED, payload: { text } });

export const initApp = () => {
    const token = localStorage.getItem('id_token');

    if (!token) {
        return (dispatch) => dispatch({ type: TOKEN_LOADING_FAILED });
    }

    return (dispatch) => {
        dispatch({ type: TOKEN_LOADING_SUCCEEDED, payload: { token } });
        fetchInitialData(token)
            .then(res => res.json())
            .then(mediaList => dispatch({ type: FETCH_INITIAL_DATA_SUCCEEDED, payload: { mediaList } }))
            .catch(console.log('Failed to load initial data :('));
    };
};

export const login = () => (dispatch, getState) => {
    const { username, password } = getState();

    fetchNewToken(username, password)
        .then(tokenResponse => {
            return tokenResponse.text();
        })
        .then(token => {
            localStorage.setItem('id_token', token);
            dispatch({ type: TOKEN_LOADING_SUCCEEDED, payload: { token } });
        })
        .then((token) => {
            dispatch({ type: LOGIN_SUCCEEDED });
            return fetchInitialData(token);
        })
        .then(res => res.json())
        .then(mediaList => dispatch({ type: FETCH_INITIAL_DATA_SUCCEEDED, payload: { mediaList } }))
        .catch(console.log('Failed to load initial data :('));
};

const fetchNewToken = (username, password) => {
    return fetch(
        SERVER_BASE_URL + '/token/create',
        { method: 'POST', body: JSON.stringify({ username, password }) }
    );
};

const fetchInitialData = token => {
    const url = SERVER_BASE_URL;

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    };

    return fetch(url, params);
};
