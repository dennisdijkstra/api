import React from 'react';
import PropTypes from 'prop-types';
import s from './Prompt.css';

const Prompt = ({ children }) => (
    <div className={s.container}>
        <div>
            {children}
        </div>
    </div>
);

Prompt.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Prompt;
