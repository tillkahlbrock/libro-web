import React from 'react';
import { shallow } from 'enzyme';
import MediaList from 'components/MediaList';

describe('MediaList', () => {
    let defaultProps;

    beforeEach(() => {
        defaultProps = {
            mediaList: [],
        };
    });

    it('should render a list item per medium', () => {
        const mediaList = [
            {
                id: 1,
                date: '2012-12-12',
                renewal: 1,
                title: 'Some fancy cooking book',
            },
            {
                id: 2,
                date: '2012-12-11',
                renewal: 0,
                title: 'Some scarry horror movie',
            },
        ];

        const wrapper = shallow(<MediaList mediaList={mediaList}/>)

        expect(wrapper.find('.medium').length).toEqual(2);
    });
});

