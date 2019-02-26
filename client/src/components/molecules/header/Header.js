import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropdown from '../dropdown/Dropdown';
import MenuItems from '../menuItems/MenuItems';
import Link from '../../atoms/link/Link';
import s from './Header.css';

const Header = ({ user: { user: { firstname } } }) => (
    <header className={s.header}>
        <Link to="/">Home</Link>
        <Dropdown title={firstname}>
            <MenuItems />
        </Dropdown>
    </header>
);

const mapStateToProps = state => ({
    user: state.user,
});

Header.propTypes = {
    user: PropTypes.shape({
        user: PropTypes.shape({
            firstname: PropTypes.string,
            lastname: PropTypes.string,
        }),
    }).isRequired,
};

export default connect(mapStateToProps)(Header);
