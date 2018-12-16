import { createStore } from "redux";
import isEqual from 'lodash/isEqual'
import { search } from "./lib";

/**
 * Action type
 */
const FETCH_ADS = "FETCH_ADS";

/**
 * Action creator
 */
export function fetchAdsAction(query) {
  return { 
    type: FETCH_ADS, 
    payload: {
      query,
      hits: search(query) // not async, it's just for testing purposes
    }
  };
}

/**
 * Reducer
 */
function fetchAdsReducer(
  state = {
    query: "",
    hits: []
  },
  {
    type,
    payload
  }
) {
  if (type === FETCH_ADS) {
    if (isEqual(payload.hits, state.hits)) {
      return {
        ...state,
        query: payload.query
      }
    }

    return {
      ...state,
      query: payload.query,
      hits: payload.hits
    };
  }

  return state;
}

const store = createStore(fetchAdsReducer);

export default store;
