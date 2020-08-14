import React from 'react';
import style from './Dialogs.module.css';
import NewMessageContainer from "./newMessage/NewMessageContainer";
import DialogItemContainer from "./dialogItem/DialogItemContainer";
import MessageContainer from "./message/MessageContainer";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(
        dialog => <DialogItemContainer
            dialog={dialog}
            key={dialog.id}
        />
    );
    let messagesElements = props.messages.map(
        message => <MessageContainer
            message={message}
            key={message.id}
        />
    );

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.newMessageBlock}>
                    <NewMessageContainer
                    />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;