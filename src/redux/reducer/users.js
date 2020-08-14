import {usersAPI} from '../../api/api';
import {updateObjectInArray} from '../../utils/objects-helpers';

const FOLLOW = 'tutorial/users/FOLLOW';
const UNFOLLOW = 'tutorial/users/UNFOLLOW';
const SET_USERS = 'tutorial/users/SET_USERS';
const SET_CURRENT_PAGE = 'tutorial/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'tutorial/users/SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'tutorial/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'tutorial/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return  {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                /*state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })*/
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id != action.userId)
            };
        }
        default:
            return state;
    }
}

    // Action creaters
export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId: userId
});
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId: userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

    // Thunks
export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let response = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
}

const followUnfollowFlow = async (dispatch, apiMethod, actionCreator, userId) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}
export const follow = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, usersAPI.followUser.bind(usersAPI), followSuccess, userId);
}
export const unfollow = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess, userId);
}

export default usersReducer;