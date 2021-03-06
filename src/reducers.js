/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { fromJS } from "immutable"
import { combineReducers } from "redux-immutable"
import { postsReducers, commentsReducers } from "./modules/Posts/reducers"
// import globalReducer from 'containers/App/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null
})

export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

const chatInitialState = fromJS({
  rooms: [],
  user: {}
})

export function chatReducer(state = chatInitialState, action) {
  switch (action.type) {
    case "UPDATE_CHAT_ROOM_LIST":
      return state.set("rooms", action.payload)
    case "SUBMIT_CURRENT_CHAT_USER":
      return state.set("user", {
        name: action.payload.name,
        room: action.payload.room
      })
    default:
      return state
  }
}

const uiInitState = fromJS({
  loading: false
})
const uiReducer = (state = uiInitState, action) => {
  switch (action.type) {
    case "UPDATE_LOADING_STATUS":
      return state.set("loading", action.payload)
    default:
      return state
  }
}
/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer() {
  return combineReducers({
    route: routeReducer,
    chat: chatReducer,
    posts: postsReducers,
    comments: commentsReducers,
    ui: uiReducer
  })
}
