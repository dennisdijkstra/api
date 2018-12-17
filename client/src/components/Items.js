import React, { Component } from 'react';

class Items extends Component {
    state = {
        items: [
            { number: 1, name: 'Item 1' },
            { number: 2, name: 'Item 2' },
            { number: 3, name: 'Item 3' },
            { number: 4, name: 'Item 4' },
        ],
    }

    render() {
        const { items } = this.state;

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

export default Items;
