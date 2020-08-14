import profileReducer, {addPostActionCreator, deletePost} from './profile';
import React from 'react';

let state = {
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
    ]
};

test('profileReducer: lenght of posts should be incremented', () => {
        // 1. Test data
    let action = addPostActionCreator('This is a new post text!');

        // 2. Action
    let newState = profileReducer(state, action);

        // 3. Expectation
    expect(newState.posts.length).toBe(3);
});

test('profileReducer: message of new post should be \'This is a new post text!\'', () => {
    // 1. Test data
    let action = addPostActionCreator('This is a new post text!');

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
   expect(newState.posts[2].message).toBe('This is a new post text!');
});

test('profileReducer: after deleting length of posts should be decremented', () => {
    // 1. Test data
    let action = deletePost(1);

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(1);
});

test('profileReducer: after deleting length shouldn\'t be decrement if Id is incorrect', () => {
    // 1. Test data
    let action = deletePost(3);

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(2);
});