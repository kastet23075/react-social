import React from 'react';
import Message from "./Message";

const MessageContainer = (props) => {
    return(
        <Message id={props.message.id} text={props.message.text} />
    );
}

export default MessageContainer;