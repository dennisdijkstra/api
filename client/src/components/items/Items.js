import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/item';
import s from './Items.css';

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
        user: PropTypes.shape({
            user: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }),
        }).isRequired,
    };

    componentDidMount() {
        const { getItems } = this.props;
        getItems();
    }

    addItem = () => {
        const { addItem, user: { user: { id } } } = this.props;
        const newItem = {
            name: this.item.value,
            userId: id,
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
            <div className={s.container}>
                <form>
                    <div className={s.add}>
                        <input type="text" ref={item => this.item = item} placeholder="Add new item" />
                        <button
                            type="button"
                            onClick={() => this.addItem()}
                        >
                            Add
                        </button>
                    </div>
                    <ul className={s.items}>
                        {items.map(({ _id, name }) => (
                            <li key={_id} className={s.item}>
                                { isEditable === _id
                                    ? <>
                                        <input type="text" ref={item => this.update = item} />
                                        <button type="button" onClick={() => this.updateItem(_id)}>Update</button>
                                    </>
                                    : <>
                                        <p>{name}</p>
                                        <button type="button" onClick={() => this.showEdit(_id)}>Edit</button>
                                    </>
                                }
                                <button type="button" onClick={() => this.deleteItem(_id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    user: state.user,
});

export default connect(mapStateToProps, actions)(Items);
