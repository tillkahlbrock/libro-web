import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from 'components/Layout';

describe('Layout', () => {
    let defaultProps;

    beforeEach(() => {
        defaultProps = {
            username: null,
            password: null,
            loggedIn: false,
            onUsernameInputChange: () => null,
            onPasswordInputChange: () => null,
            onLoginButtonClick: () => null,
        };
    });

    it('should ask for credentials, if the user is not logged in', () => {
        const wrapper = shallow(
            <Layout
                { ...defaultProps }
                loggedIn={false}
            />
        );

        expect(wrapper.find('Login').length).toEqual(1);
    });

    it('should not ask for credentials, if the user is logged in', () => {
        const wrapper = shallow(
            <Layout
                { ...defaultProps }
                loggedIn={true}
            />
        );

        expect(wrapper.find('Login').length).toEqual(0);
    });
});

