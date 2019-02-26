import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../../actions/user';
import history from '../../../history';
import Link from '../../atoms/link/Link';

const MenuItems = ({ setCurrentUser: setUser }) => {
    const logOut = () => {
        localStorage.removeItem('jwtToken');
        setUser({});
        history.push('/');
    };

    return (
        <>
            <Link to="/settings">Profile settings</Link>
            <button type="button" onClick={logOut}>Logout</button>
        </>
    );
};

MenuItems.propTypes = {
    setCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, { setCurrentUser })(MenuItems);
