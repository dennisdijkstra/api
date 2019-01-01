import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/item';
import s from './dashboard.css';


class Dashboard extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.shape({
            items: PropTypes.arrayOf.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        const { getItems } = this.props;
        getItems();
    }

    render() {
        const { item: { items } } = this.props;

        return (
            <div className={s.dashboard}>
                <h1>Dashboard</h1>
                {items.map(({ _id, name }) => (
                    <div key={_id} className={s.item}>{name}</div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    user: state.user,
});

export default connect(mapStateToProps, actions)(Dashboard);
