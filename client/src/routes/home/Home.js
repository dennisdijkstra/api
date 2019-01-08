import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/item';
import Link from '../../components/atoms/link/Link';
import { NotificationContext } from '../../context';
import s from './home.css';


class Home extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.shape({
            items: PropTypes.arrayOf.isRequired,
        }).isRequired,
    };

    static contextType = NotificationContext;

    componentDidMount() {
        const { getItems } = this.props;
        const { open } = this.context;
        open('Send test notification');
        getItems();
    }

    render() {
        const { item: { items } } = this.props;

        return (
            <div className={s.home}>
                <h1>Dashboard</h1>
                {items.map(({ _id, name }) => (
                    <Link to={`/${_id}`} key={_id}>
                        <div className={s.item}>{name}</div>
                    </Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    user: state.user,
});

export default connect(mapStateToProps, actions)(Home);
