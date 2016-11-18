import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';

const Layout  = props => {
    const {
        username,
        password,
    } = props;

    const showLogin = !(username && password);
    return <div>
        { showLogin && <Login/>}
    </div>;
};

Layout.propTypes = {};

export { Layout };

export default () => {
    const mapStateToProps = state => {
        const {
            username,
            password,
        } = state;
        return {
            test: state.test,
        };
    };

    const mapDispatchToProps = dispatch => (
        bindActionCreators({}, dispatch)
    );

    return connect(mapStateToProps, mapDispatchToProps)(Layout);
};