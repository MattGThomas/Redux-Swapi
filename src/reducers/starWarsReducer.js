/* we need our action types here*/
import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  errorMessage: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: {
      return {
        ...state,
        fetching: true
      }
    }
    case SUCCESS:  {
      const { characters } = action.payload
      return {
        ...state,
        characters,
        fetching: false,
        errorMessage: null
      }
    }
    case FAILURE: {
      return {
        ...state,
        fetching: false,
        errorMessage: action.payload
      }
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
