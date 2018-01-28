import {CHANGE_AUTH} from "../actions/header.actions";


export  function headerReducer(state = false, action) {
    switch (action.type) {
        case CHANGE_AUTH:
            return action.payload;
    }
    return state;
}