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
            mediaList: [],
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

    it('should notify the user if no media is borrowed', () => {
        const wrapper = shallow(
            <Layout
                { ...defaultProps }
                loggedIn={true}
                mediaList={[]}
            />
        );

        expect(wrapper.find('.alert').first().text()).toEqual('Keine Medien ausgeliehen.');
        expect(wrapper.find('MediaList').length).toEqual(0);
    });

    it('should show a list of borrowed media', () => {
        const wrapper = shallow(
            <Layout
                { ...defaultProps }
                loggedIn={true}
                mediaList={[{ key1: 'some', key2: 'media' }]}
            />
        );

        expect(wrapper.find('MediaList').length).toEqual(1);
    });
});

