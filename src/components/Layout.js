import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';

import Login from './Login';
import MediaList from './MediaList';
import * as actions from '../actions';

const Layout  = props => {
    const {
        username,
        loggedIn,
        mediaList,

        onUsernameInputChange,
        onPasswordInputChange,
        onLoginButtonClick,
    } = props;

    const showNoMediaNotification = loggedIn && isEmpty(mediaList);
    const showMediaList = loggedIn && !isEmpty(mediaList);

    return <div>
        { !loggedIn && <Login
            onUsernameInputChange={onUsernameInputChange}
            onPasswordInputChange={onPasswordInputChange}
            onLoginButtonClick={onLoginButtonClick}
        /> }
        { showNoMediaNotification && <div className="alert alert-success" role="alert">Keine Medien ausgeliehen.</div> }
        { showMediaList && <MediaList mediaList={mediaList}/>}
    </div>;
};

Layout.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    loggedIn: PropTypes.bool.isRequired,
    mediaList: PropTypes.array.isRequired,
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
            mediaList,
        } = state;

        return {
            username,
            password,
            loggedIn,
            mediaList,
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