import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../history';

class Link extends Component {
    static propTypes = {
        to: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
    };

    handleClick = (e) => {
        e.preventDefault();
        history.push({
            pathname: e.currentTarget.pathname,
        });
    }

    render() {
        const { to, children, ...otherProps } = this.props;

        return (
            <a href={to} onClick={this.handleClick} {...otherProps}>
                {children}
            </a>
        );
    }
}

export default Link;
