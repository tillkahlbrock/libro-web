import React from 'react';
import { shallow } from 'enzyme';
import Login from 'components/Login';

describe('Login', () => {
    let defaultProps;

    beforeEach(() => {
        defaultProps = {
            onUsernameInputChange: () => null,
            onPasswordInputChange: () => null,
            onLoginButtonClick: () => null,
        };
    });

    it('should store the password and the username instantly', () => {
        const onUsernameInputChange = jasmine.createSpy('onUsernameInputChange');
        const onPasswordInputChange = jasmine.createSpy('onPasswordInputChange');

        const wrapper = shallow(
            <Login
                { ...defaultProps }
                onUsernameInputChange={onUsernameInputChange}
                onPasswordInputChange={onPasswordInputChange}
            />
        );

        wrapper.find('input').at(0).simulate('change', { target: { value: 'the_user' }});
        wrapper.find('input').at(1).simulate('change', { target: { value: 'and_her_password' }});

        expect(onUsernameInputChange).toHaveBeenCalledWith('the_user');
        expect(onPasswordInputChange).toHaveBeenCalledWith('and_her_password');
    });

    it('should mark the user as logged in', () => {
        const onLoginButtonClick = jasmine.createSpy('onLoginButtonClick');

        const wrapper = shallow(<Login
            { ...defaultProps }
            onLoginButtonClick={onLoginButtonClick}
        />);

        wrapper.find('button').first().simulate('click');

        expect(onLoginButtonClick).toHaveBeenCalled();
    });
});

