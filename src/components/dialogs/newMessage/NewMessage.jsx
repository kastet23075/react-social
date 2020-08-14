import React from "react";
import style from './NewMessage.nodule.css';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../common/formsControls/FormsControl';
import {maxLengthCreator, required} from '../../../utils/validators/validators';

const maxLength15 = maxLengthCreator(15);

const NewMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'newMessage'}
                value={props.newMessage}
                validate={[
                    required,
                    maxLength15
                ]}
            />
            <button>Send</button>
        </form>
    );
}

const NewMessageReduxForm = reduxForm({
    form: 'newMessage'
})(NewMessageForm);

const NewMessage = (props) => {

    let onSendMessage = (formData) => {
        props.sendMessage(formData.newMessage);
    }

    return (
        <NewMessageReduxForm
            onSubmit={onSendMessage}
        />
    );
}

export default NewMessage;