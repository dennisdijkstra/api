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

    render() {
        const { render, children } = this.props;
        const { isOpen } = this.state;

        return (
            <div>
                {render({ toggleMenu: this.toggleMenu })}
                { isOpen && (
                    <div className={s.items}>
                        { children }
                    </div>
                )}
            </div>
        );
    }
}

export default Dropdown;
