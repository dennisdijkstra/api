import React, { Component } from 'react';
import classNames from 'classnames';
import { NotificationContext } from '../../../context';
import s from './NotificationBar.css';


class NotificationBar extends Component {
    render() {
        return (
            <NotificationContext.Consumer>
                {({ isOpen, message, close }) => {
                    const className = classNames({
                        [`${s.bar}`]: true,
                        [`${s.isOpen}`]: isOpen,
                    });
                    return (
                        <div className={className}>
                            <p>{message}</p>
                            <button type="button" className={s.closeButton} onClick={() => close()}>Close</button>
                        </div>
                    );
                }}
            </NotificationContext.Consumer>
        );
    }
}

export default NotificationBar;
