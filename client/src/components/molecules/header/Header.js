import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setCurrentUser from '../../../actions/user';
import history from '../../../history';
import Dropdown from '../dropdown/Dropdown';
import s from './Header.css';

class Header extends Component {
    static propTypes = {
        user: PropTypes.shape({
            user: PropTypes.shape({
                firstname: PropTypes.string,
                lastname: PropTypes.string,
            }),
        }).isRequired,
        setCurrentUser: PropTypes.func.isRequired,
    };

    logOut = () => {
        const { setCurrentUser: setUser } = this.props;

        localStorage.removeItem('jwtToken');
        setUser({});
        history.push('/');
    };

    render() {
        const { user: { user: { firstname } } } = this.props;

        return (
            <header>
                <p>Hi, <span style={{ fontWeight: 'bold' }}>{firstname}</span></p>
                <button type="button" onClick={this.logOut} className={s.button}>Logout</button>
                <Dropdown
                    menuItems={['A', 'B']}
                    render={({ toggleMenu }) => (
                        <button type="button" onClick={() => toggleMenu()}>Toggle</button>
                    )}
                />
            </header>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, { setCurrentUser })(Header);
