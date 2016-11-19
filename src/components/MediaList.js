import React, { PropTypes } from 'react';
import { map } from 'lodash';

const MediaList = props => {
    const { mediaList } = props;

    return <div>
        {map(mediaList, medium => {
            return <div key={medium.id} className="medium">{medium.title}</div>
        })}
    </div>;
};

MediaList.propTypes = {
    mediaList: PropTypes.array.isRequired,
};

export default MediaList;