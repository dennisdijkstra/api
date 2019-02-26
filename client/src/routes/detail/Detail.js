import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ data: { name, _id: id, userId } }) => (
    <>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>userId: {userId}</p>
    </>
);

Detail.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
    }).isRequired,
};

export default Detail;
