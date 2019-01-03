import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Dropdown.css';

class Dropdown extends Component {
    static propTypes = {
        render: PropTypes.func.isRequired,
        children: PropTypes.node.isRequired,
    }

    state = {
        isOpen: false,
    }

    toggleMenu = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    closeMenu = (e) => {
        if (e.relatedTarget) return;
        this.setState({ isOpen: false });
    }

    render() {
        const { render, children } = this.props;
        const { isOpen } = this.state;

        return (
            <div className={s.dropdown}>
                {render({ toggleMenu: this.toggleMenu, closeMenu: this.closeMenu })}
                { isOpen && (
                    <div className={s.content}>
                        { children }
                    </div>
                )}
            </div>
        );
    }
}

export default Dropdown;
