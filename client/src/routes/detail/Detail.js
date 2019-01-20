import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Detail extends Component {
    static propTypes = {
        data: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            userId: PropTypes.string.isRequired,
        }).isRequired,
    }

    render() {
        const { data: { name, _id: id, userId } } = this.props;
        return (
            <>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>userId: {userId}</p>
            </>
        );
    }
}

export default Detail;
