import profileReducer from "./reducer/profile";
import dialogsReducer from "./reducer/dialogs";
import sidebarReducer from "./reducer/sidebar";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hey ;)',
                    likeCount: 5,
                    avatar: 'https://awssgp0-files.fds.api.xiaomi.com/user-avatar/97fe403d-f896-48a1-b7ea-6ed4d659cf7a.png'
                },
                {
                    id: 2,
                    message: 'Okay!!!',
                    likeCount: 41,
                    avatar: 'https://sun9-24.userapi.com/c857736/v857736758/fe647/Ni_nV2CqFXw.jpg?ava=1'
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            ],
            newMessageText: ''
        },
        sidebar: {}
    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;