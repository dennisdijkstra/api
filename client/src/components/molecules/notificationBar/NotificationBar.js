import React, { Component } from 'react';
import { NotificationConsumer } from '../../../context';


class NotificationBar extends Component {
    render() {
        return (
            <NotificationConsumer>
                {({ isOpen, message, close }) => {
                    <p>{message}</p>
                }}
            </NotificationConsumer>
        );
    }
}

export default NotificationBar;
