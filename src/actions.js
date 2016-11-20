export const CHANGE_USERNAME_INPUT_REQUESTED = 'change username input requested';
export const CHANGE_PASSWORD_INPUT_REQUESTED = 'change password input requested';
export const LOGIN_REQUESTED = 'login requested';
export const FETCH_INITIAL_DATA_SUCCEEDED = 'fetch initial data succeeded';

export const changeUsernameInput = (text) => ({ type: CHANGE_USERNAME_INPUT_REQUESTED, payload: { text } });

export const changePasswordInput = (text) => ({ type: CHANGE_PASSWORD_INPUT_REQUESTED, payload: { text } });

export const login = () => (dispatch, getState) => {
    dispatch({ type: LOGIN_REQUESTED });

    const state = getState();
    fetchInitialData(dispatch, state.username, state.password);
};

const fetchInitialData = (dispatch, username, password) => {
    const url = 'https://libro-server.herokuapp.com';

    const params = {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
    };

    fetch(url, params)
        .then(res => res.json())
        .then(mediaList => dispatch({ type: FETCH_INITIAL_DATA_SUCCEEDED, payload: { mediaList } }))
        .catch(e => console.log("Failled to load media list: ", e));
};
