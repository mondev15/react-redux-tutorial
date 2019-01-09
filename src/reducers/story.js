import { STORIES_ADD, STORIES_FETCH_ERROR } from '../constants/actionTypes';

const INITIAL_STATE = [];

const applyAddStories = (state, action) =>
    action.stories;

    const applyFetchErrorStories = (state, action) => ({
        stories: [],
        error: action.error,
      });

// INITIAL_STATE is an initial state of stories
function storyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case STORIES_ADD: {
            return applyAddStories(state, action);
        }
        case STORIES_FETCH_ERROR: {
            return applyFetchErrorStories(state, action);
        }
        default: return state;
    }
}

export default storyReducer;