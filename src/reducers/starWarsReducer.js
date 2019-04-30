import {FETCHING, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [],
  error: '',
  isFetching: false,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action); 
  switch (action.type) {
    case FETCHING:
      return{
        ...state,
        error: '',
        isFetching: true
      }

    case SUCCESS: 
      return{
        ...state, 
        error: '',
        isFetching: false, 
        characters: action.payload
      }

    case FAILURE: 
      return{
        ...state,
        error: '',
        isFetching: false,
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

export  default charsReducer; 



