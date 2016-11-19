export const CHANGE_USERNAME_INPUT_REQUESTED = 'change username input requested';
export const CHANGE_PASSWORD_INPUT_REQUESTED = 'change password input requested';
export const LOGIN_REQUESTED = 'login requested';

export const changeUsernameInput = (text) => ({ type: CHANGE_USERNAME_INPUT_REQUESTED, payload: { text } });

export const changePasswordInput = (text) => ({ type: CHANGE_PASSWORD_INPUT_REQUESTED, payload: { text } });

export const login = () => ({ type: LOGIN_REQUESTED });