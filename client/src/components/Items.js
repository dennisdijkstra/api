import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem, getItems, deleteItem, setIsEditable } from '../actions/itemActions';

class Items extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        addItem: PropTypes.func.isRequired,
        setIsEditable: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        item: PropTypes.shape({
            items: PropTypes.arrayOf.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        const { getItems: get } = this.props;
        get();
    }

    addItem = () => {
        const { addItem: add } = this.props;
        const newItem = {
            name: this.item.value,
        };

        add(newItem);
    }

    showEdit = (id) => {
        const { setIsEditable: setEditId } = this.props;
        setEditId(id);
    }

    updateItem = (id) => {
        const { setIsEditable: setEditId } = this.props;
        console.log(id);
        console.log(this.edit.value);
        setEditId('');
    }

    deleteItem = (id) => {
        const { deleteItem: remove } = this.props;
        remove(id);
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
                                    <input type="text" ref={item => this.edit = item} />
                                    <button type="button" onClick={() => this.updateItem(_id)} style={{ display: 'inline-block' }}>Update</button>
                                </>
                                : <>
                                    <p style={{ display: 'inline-block' }}>{name}</p>
                                    <button type="button" onClick={() => this.showEdit(_id)} style={{ display: 'inline-block' }}>Edit</button>
                                </>
                            }
                            <button type="button" onClick={() => this.deleteItem(_id)} style={{ display: 'inline-block' }}>X</button>
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

export default connect(mapStateToProps, { addItem, getItems, deleteItem, setIsEditable })(Items);
