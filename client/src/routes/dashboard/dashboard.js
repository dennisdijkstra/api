import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        console.log(this.props);

        return (
            <h1>Dashboard</h1>
        );
    }
}

export default connect()(Dashboard);
