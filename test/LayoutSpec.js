import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from 'components/Layout';

describe('Layout', () => {
    it('should ask the user for credentials', () => {
        const wrapper = shallow(
            <Layout
                username={null}
                password={null}
            />
        );

        expect(wrapper.find('Login').length).toEqual(1);
    });
});

