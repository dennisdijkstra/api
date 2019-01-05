import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropdown from '../dropdown/Dropdown';
import MenuItems from '../menuItems/MenuItems';
import Link from '../../atoms/link/Link';
import s from './Header.css';

class Header extends Component {
    static propTypes = {
        user: PropTypes.shape({
            user: PropTypes.shape({
                firstname: PropTypes.string,
                lastname: PropTypes.string,
            }),
        }).isRequired,
    };

    render() {
        const { user: { user: { firstname } } } = this.props;

        return (
            <header className={s.header}>
                <Link to="/">Home</Link>
                <Dropdown
                    render={({ toggleMenu, closeMenu }) => (
                        <button
                            type="button"
                            onClick={() => toggleMenu()}
                            onBlur={e => closeMenu(e)}
                        >
                            {firstname}
                        </button>
                    )}
                >
                    <MenuItems />
                </Dropdown>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(Header);
