import React, { PropTypes } from 'react';

const Login = props => {
    return <div className="login-form-container row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <form>
                <div className="form-group">
                    <label htmlFor="loginInputEmail1">Username</label>
                    <input
                        onChange={event => props.onUsernameInputChange(event.target.value)}
                        type="text"
                        className="form-control"
                        id="loginInputEmail"
                        placeholder="Username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="loginInputPassword1">Password</label>
                    <input
                        onChange={event => props.onPasswordInputChange(event.target.value)}
                        type="password"
                        className="form-control"
                        id="loginInputPassword"
                        placeholder="Password"
                    />
                </div>
                <button
                    onClick={props.onLoginButtonClick}
                    type="button"
                    className="btn btn-default"
                >
                    Login
                </button>
            </form>
        </div>
        <div className="col-md-4"></div>
    </div>;
};

Login.propTypes = {
    onUsernameInputChange: PropTypes.func.isRequired,
    onPasswordInputChange: PropTypes.func.isRequired,
    onLoginButtonClick: PropTypes.func.isRequired,
};

export default Login;