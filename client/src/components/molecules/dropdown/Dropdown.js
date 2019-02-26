import React from 'react';
import PropTypes from 'prop-types';
import useDropdown from '../../../hooks';
import s from './Dropdown.css';

const Dropdown = ({ title, children }) => {
    const [isOpen, toggleMenu, closeMenu] = useDropdown();

    return (
        <div>
            <button
                type="button"
                onClick={toggleMenu}
                onBlur={e => closeMenu(e)}
            >
                {title}
            </button>
            <div className={s.dropdown}>
                { isOpen && (
                    <div className={s.content}>
                        { children }
                    </div>
                )}
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default Dropdown;
