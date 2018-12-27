import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './dashboard.css';


class Dashboard extends Component {
    static propTypes = {
        user: PropTypes.shape({
            user: PropTypes.shape({
                firstname: PropTypes.string,
                lastname: PropTypes.string,
            }),
        }).isRequired,
    };

    render() {
        const { user: { user: { firstname, lastname } } } = this.props;

        return (
            <div className={s.dashboard}>
                <h1>Dashboard</h1>
                <p>Loggin in as {firstname} {lastname}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(Dashboard);
