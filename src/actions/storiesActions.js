import { FETCH_STORIES, CREATE_SEARCH } from './types';

export const fetchStories = ( query = "JavaScript") => dispatch => {
    console.log("fetching");
    fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
        .then(res => res.json())
        .then((stories) => {
            dispatch({
                type: FETCH_STORIES,
                payload: stories.hits
            })
    })
}

export const createSearch = (searchData) => dispatch => {
    console.log(searchData);
    dispatch({
        type: CREATE_SEARCH,
        payload: searchData
    })
}
