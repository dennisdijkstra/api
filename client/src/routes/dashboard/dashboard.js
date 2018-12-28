import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setCurrentUser from '../../actions/user';
import setAuthToken from '../../utils/setAuthToken';
import history from '../../history';
import Items from '../../components/items/Items';
import s from './dashboard.css';


class Dashboard extends Component {
    static propTypes = {
        user: PropTypes.shape({
            user: PropTypes.shape({
                firstname: PropTypes.string,
                lastname: PropTypes.string,
            }),
        }).isRequired,
        setCurrentUser: PropTypes.func.isRequired,
    };

    getCurrentUser = async () => {
        const response = await fetch('/api/user/currentuser', {
            headers: setAuthToken({
                'Content-Type': 'application/json',
            }),
        });
        const json = await response.json();

        if (response.status !== 200) {
            console.log(json);
        } else {
            console.log(json);
        }
    };

    logOut = () => {
        const { setCurrentUser: setUser } = this.props;

        localStorage.removeItem('jwtToken');
        setUser({});
        history.push('/');
    };

    render() {
        const { user: { user: { firstname, lastname } } } = this.props;

        return (
            <div className={s.dashboard}>
                <h1>Dashboard</h1>
                <p>You&#39;re logged in as {firstname} {lastname}</p>
                <button type="button" onClick={this.getCurrentUser}>Get current user</button>
                <button type="button" onClick={this.logOut}>Logout</button>
                <Items />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, { setCurrentUser })(Dashboard);
