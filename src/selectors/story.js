// ---ES6
const isNotArchived = archivedIds => story =>
    archivedIds.indexOf(story.objectID) === -1;

const getReadableStories = ({ storyState, archiveState }) =>
    storyState.filter(isNotArchived(archiveState));

    const getFetchError = ({ storyState }) =>
  storyState.error;

export {
    getReadableStories,
    getFetchError
};

// ---equivalent in javascript
/*
function isNotArchived(archivedIds) {
  return function (story) {
    return archivedIds.indexOf(story.objectID) === -1;
  };
}

function getReadableStories(state) {
  return state.storyState.filter(isNotArchived(state.archiveState));
}

export {
  getReadableStories,
};
*/