import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/item';
import Link from '../../components/atoms/link/Link';
import s from './home.css';

const Home = ({ getItems, item: { items } }) => {
    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className={s.home}>
            <h1>Dashboard</h1>
            {items.map(({ _id, name }) => (
                <Link to={`/item/${_id}`} key={_id}>
                    <div className={s.item}>{name}</div>
                </Link>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    item: state.item,
    user: state.user,
});

Home.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.shape({
        items: PropTypes.arrayOf.isRequired,
    }).isRequired,
};

export default connect(mapStateToProps, actions)(Home);
