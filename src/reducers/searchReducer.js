import { FETCH_STORIES, CREATE_SEARCH } from '../actions/types';

let initialState = {
    items: [],
    searchQuery: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_STORIES:
        console.log("reducer");
            return {
                ...state,
                items: action.payload,
            }
        case CREATE_SEARCH:
            return {
                ...state,
                item: action.payload,
            }
            default:
            return state;
    }
}