import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Detail extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    }

    render() {
        const { id } = this.props;
        return (
            <h1>{id}</h1>
        );
    }
}

export default Detail;
