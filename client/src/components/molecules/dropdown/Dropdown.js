import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
    static propTypes = {
        render: PropTypes.func.isRequired,
        menuItems: PropTypes.arrayOf(
            PropTypes.string,
        ).isRequired,
    }

    state = {
        isOpen: false,
    }

    toggleMenu = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    render() {
        const { render, menuItems } = this.props;
        const { isOpen } = this.state;

        return (
            <div>
                {render({ toggleMenu: this.toggleMenu })}
                { isOpen && (
                    <ul>
                        {menuItems.map(menuItem => <li>{menuItem}</li>)}
                    </ul>
                )}
            </div>
        );
    }
}

export default Dropdown;
