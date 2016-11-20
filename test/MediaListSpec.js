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
                some: 'thing',
            },
            {
                id: 2,
                some: 'thing else',
            },
        ];

        const wrapper = shallow(<MediaList mediaList={mediaList}/>)

        expect(wrapper.find('tbody > tr').length).toEqual(2);
    });

    it('should render a list of the given media', () => {
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

        const wrapper = shallow(<MediaList mediaList={mediaList}/>);

        expect(wrapper.find('tbody > tr > td').at(0).text()).toEqual('1');
        expect(wrapper.find('tbody > tr > td').at(1).text()).toEqual('2012-12-12');
        expect(wrapper.find('tbody > tr > td').at(2).text()).toEqual('Some fancy cooking book');
        expect(wrapper.find('tbody > tr > td').at(3).text()).toEqual('1');

        expect(wrapper.find('tbody > tr > td').at(4).text()).toEqual('2');
        expect(wrapper.find('tbody > tr > td').at(5).text()).toEqual('2012-12-11');
        expect(wrapper.find('tbody > tr > td').at(6).text()).toEqual('Some scarry horror movie');
        expect(wrapper.find('tbody > tr > td').at(7).text()).toEqual('0');
    });
});

