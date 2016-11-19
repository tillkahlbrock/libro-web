import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from './Login';
import * as actions from '../actions';

const Layout  = props => {
    const {
        username,
        loggedIn,

        onUsernameInputChange,
        onPasswordInputChange,
        onLoginButtonClick,
    } = props;

    return <div>
        { loggedIn ?
            <div>User {username} logged in successfully!</div> :
            <Login
                onUsernameInputChange={onUsernameInputChange}
                onPasswordInputChange={onPasswordInputChange}
                onLoginButtonClick={onLoginButtonClick}
            />
        }
    </div>;
};

Layout.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    loggedIn: PropTypes.bool.isRequired,
    onUsernameInputChange: PropTypes.func.isRequired,
    onPasswordInputChange: PropTypes.func.isRequired,
    onLoginButtonClick: PropTypes.func.isRequired,
};

export { Layout };

export default () => {
    const mapStateToProps = state => {
        const {
            username,
            password,
            loggedIn,
        } = state;

        return {
            username,
            password,
            loggedIn,
        };
    };

    const mapDispatchToProps = dispatch => (
        bindActionCreators({
            onUsernameInputChange: actions.changeUsernameInput,
            onPasswordInputChange: actions.changePasswordInput,
            onLoginButtonClick: actions.login,
        }, dispatch)
    );

    return connect(mapStateToProps, mapDispatchToProps)(Layout);
};