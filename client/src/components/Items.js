import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';

class Items extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.shape({
            items: PropTypes.arrayOf.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        const { getItems: getAllItems } = this.props;
        getAllItems();
    }

    render() {
        const { item: { items } } = this.props;

        return (
            <div>
                {items.map(({ number, name }) => (
                    <div>
                        <p>{number}</p>
                        <p>{name}</p>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
});

export default connect(mapStateToProps, { getItems })(Items);
