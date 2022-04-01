import { combineReducers } from "redux";
import {
  GET_ALL_COMMENTS,
  GET_ALL_COMMENTS_FAILURE,
  GET_ALL_COMMENTS_SUCCESS,
} from "../../constants";

const initState = {
  isLoading: true,
  isError: false,
  data: [],
  errorMessage: "",
};

const CommentsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_ALL_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

const rootReducer = combineReducers({
  CommentsReducer,
});

export default rootReducer;
