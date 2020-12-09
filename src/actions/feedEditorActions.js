export const openFeedEditor = () => {
  return {
    type: 'OPEN_FEED_EDITOR',
  }
}

export const closeFeedEditor = () => {
  return {
    type: 'CLOSE_FEED_EDITOR',
  }
}

export const changeFeedEditorTab = (newValue) => {
  return {
    type: 'FEED_EDITOR_CHANGE_TABS',
    data: {value: newValue},
  }
}

export const deleteFeedEditorTab = () => {
  return {
    type: 'FEED_EDITOR_DELETE_TAB',
  }
}

export const addFeedEditorTab = (activeTab) => {
  return {
    type: 'FEED_EDITOR_ADD_TAB',
    data: {
      index_1: activeTab
    }
  }
}
