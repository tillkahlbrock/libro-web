import React, { PropTypes } from 'react';
import { map } from 'lodash';

const MediaList = props => {
    const { mediaList } = props;

    return <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Fällig</th>
                    <th>Titel</th>
                    <th>Verlängert</th>
                </tr>
            </thead>
            <tbody>
                {map(mediaList, medium => {
                    return (<tr key={medium.id}>
                        <td>{medium.id}</td>
                        <td>{medium.date}</td>
                        <td>{medium.title}</td>
                        <td>{medium.renewal}</td>
                    </tr>);
                })}
            </tbody>
        </table>
    </div>;
};

MediaList.propTypes = {
    mediaList: PropTypes.array.isRequired,
};

export default MediaList;