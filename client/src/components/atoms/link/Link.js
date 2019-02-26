import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';
import s from './Link.css';

const Link = ({ to, children, ...otherProps }) => {
    const handleClick = (e) => {
        e.preventDefault();
        history.push({
            pathname: e.currentTarget.pathname,
        });
    };

    return (
        <a href={to} onClick={handleClick} className={s.link} {...otherProps}>
            {children}
        </a>
    );
};

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Link;
