import {authAPI} from '../../api/api';
import {stopSubmit} from 'redux-form';
import {getAuthUserData} from './authentication';

const INITIALIZED_SUCCESS = 'tutorial/app/INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return  {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

// Action creaters
const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
});

// Thunks
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
        // Когда все промисы зарезолвились, диспатчим initializedSuccess
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}

export default appReducer;