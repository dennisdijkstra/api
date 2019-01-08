import React, { Component } from 'react';
import { NotificationContext } from '../../../context';


class NotificationBar extends Component {
    render() {
        return (
            <NotificationContext.Consumer>
                {({ isOpen, message, close }) => {
                    <p>{message}</p>
                }}
            </NotificationContext.Consumer>
        );
    }
}

export default NotificationBar;
