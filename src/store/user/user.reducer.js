import { USER_ACTION_TYPE } from "./user.types";

//default value -- useReducer
export const INITIAL_STATE = {
    currentUser: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const {type,payload} = action;

    switch (type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state, // spread the rest values except 
                currentUser: payload, //value to be overwritten
            }
            default:
                return state;
    }
}
