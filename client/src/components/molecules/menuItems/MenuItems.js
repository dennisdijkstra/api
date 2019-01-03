import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setCurrentUser from '../../../actions/user';
import history from '../../../history';
import Link from '../../atoms/link/Link';

class MenuItems extends Component {
    static propTypes = {
        setCurrentUser: PropTypes.func.isRequired,
    };

    logOut = () => {
        const { setCurrentUser: setUser } = this.props;

        localStorage.removeItem('jwtToken');
        setUser({});
        history.push('/');
    };

    render() {
        return (
            <>
                <Link to="/settings">Profile settings</Link>
                <button type="button" onClick={this.logOut}>Logout</button>
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, { setCurrentUser })(MenuItems);
