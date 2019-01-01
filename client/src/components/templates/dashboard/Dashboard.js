import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setCurrentUser from '../../../actions/user';
import history from '../../../history';
import s from './Dashboard.css';

class Dashboard extends Component {
    static propTypes = {
        user: PropTypes.shape({
            user: PropTypes.shape({
                firstname: PropTypes.string,
                lastname: PropTypes.string,
            }),
        }).isRequired,
        children: PropTypes.node.isRequired,
        setCurrentUser: PropTypes.func.isRequired,
    };

    logOut = () => {
        const { setCurrentUser: setUser } = this.props;

        localStorage.removeItem('jwtToken');
        setUser({});
        history.push('/');
    };

    render() {
        const { children } = this.props;
        const { user: { user: { firstname } } } = this.props;

        return (
            <>
                <header>
                    <p>Hi, <span style={{ fontWeight: 'bold' }}>{firstname}</span></p>
                    <button type="button" onClick={this.logOut} className={s.button}>Logout</button>
                </header>
                <div>
                    {children}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, { setCurrentUser })(Dashboard);
