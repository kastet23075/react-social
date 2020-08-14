import {profileAPI, usersAPI} from '../../api/api';

const ADD_POST = 'tutorial/profile/ADD_POST';
const SET_USER_PROFILE = 'tutorial/profile/SET_USER_PROFILE';
const SET_STATUS = 'tutorial/profile/SET_STATUS';
const DELETE_POST = 'tutorial/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'tutorial/profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    profile: null,
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
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPost,
                likeCount: 0,
                avatar: 'https://sun9-24.userapi.com/c857736/v857736758/fe647/Ni_nV2CqFXw.jpg?ava=1'
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        default:
            return state;
    }
}

    // Action creaters
export const addPostActionCreator = (newPost) => ({
    type: ADD_POST,
    newPost
});
const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
const setStatus = (status) => ({
    type: SET_STATUS,
    status
});
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
});
const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});

    // Thunks
export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        debugger;
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;