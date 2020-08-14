const SEND_MESSAGE = 'tutorial/dialogs/SEND_MESSAGE';

let initialState = {
    dialogs: [
        {
            userId: 1,
            userName: 'name1',
            avatar: 'https://sun9-24.userapi.com/c857736/v857736758/fe647/Ni_nV2CqFXw.jpg?ava=1'
        },
        {
            userId: 2,
            userName: 'name2',
            avatar: 'https://awssgp0-files.fds.api.xiaomi.com/user-avatar/97fe403d-f896-48a1-b7ea-6ed4d659cf7a.png'
        },
        {
            userId: 3,
            userName: 'name3',
            avatar: 'https://sun9-24.userapi.com/c857736/v857736758/fe647/Ni_nV2CqFXw.jpg?ava=1'
        },
    ],
    messages: [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'Mahalay!'},
        {id: 3, text: 'Thank\'s a lot!'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessage;
            return {
                ...state,
                messages: [...state.messages, {id: 4, text: body}]
            };
        }

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessage) => ({
    type: SEND_MESSAGE,
    newMessage
});


export default dialogsReducer;