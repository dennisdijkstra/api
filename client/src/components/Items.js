import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/itemActions';

class Items extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        addItem: PropTypes.func.isRequired,
        updateItem: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        setIsEditable: PropTypes.func.isRequired,
        item: PropTypes.shape({
            items: PropTypes.arrayOf.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        const { getItems } = this.props;
        getItems();
    }

    addItem = () => {
        const { addItem } = this.props;
        const newItem = {
            name: this.item.value,
        };
        addItem(newItem);
    }

    updateItem = (id) => {
        const { updateItem } = this.props;
        const updatedItem = {
            name: this.update.value,
        };
        updateItem(id, updatedItem);
    }

    deleteItem = (id) => {
        const { deleteItem } = this.props;
        deleteItem(id);
    }

    showEdit = (id) => {
        const { setIsEditable } = this.props;
        setIsEditable(id);
    }

    render() {
        const { item: { items, isEditable } } = this.props;

        return (
            <>
                <form style={{ display: 'inline-block' }}>
                    <input type="text" ref={item => this.item = item} />
                </form>
                <button
                    type="button"
                    style={{ display: 'inline-block' }}
                    onClick={() => this.addItem()}
                >
                    Add
                </button>
                <ul style={{ padding: 0 }}>
                    {items.map(({ _id, name }) => (
                        <li key={_id} style={{ listStyle: 'none' }}>
                            { isEditable === _id
                                ? <>
                                    <input type="text" ref={item => this.update = item} />
                                    <button type="button" onClick={() => this.updateItem(_id)} style={{ display: 'inline-block' }}>Update</button>
                                </>
                                : <>
                                    <p style={{ display: 'inline-block' }}>{name}</p>
                                    <button type="button" onClick={() => this.showEdit(_id)} style={{ display: 'inline-block' }}>Edit</button>
                                </>
                            }
                            <button type="button" onClick={() => this.deleteItem(_id)} style={{ display: 'inline-block' }}>Delete</button>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
});

export default connect(mapStateToProps, actions)(Items);
