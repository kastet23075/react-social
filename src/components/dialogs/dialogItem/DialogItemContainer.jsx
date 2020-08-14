import React from 'react';
import DialogItem from "./DialogItem";

const DialogItemContainer = (props) => {
    return (
        <DialogItem
            userId={props.dialog.userId}
            userName={props.dialog.userName}
            avatar={props.dialog.avatar}
        />
    );
}

export default DialogItemContainer;