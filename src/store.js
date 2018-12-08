import { createStore } from "redux";
import { search } from "./lib";

/**
 * Action type
 */
const FETCH_ADS = "FETCH_ADS";

/**
 * Action creator
 */
export function fetchAdsAction(query) {
  return { type: FETCH_ADS, query };
}

/**
 * Reducer
 */
function fetchAdsReducer(
  state = {
    query: "",
    hits: []
  },
  action
) {
  if (action.type === FETCH_ADS) {
    return {
      query: action.query,
      hits: search(action.query) // not async, it's just for testing purposes
    };
  }

  return state;
}

const store = createStore(fetchAdsReducer);

export default store;
