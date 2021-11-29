import {
  LOAD_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  CREATE_POST,
  CREATE_POST_FAIL,
  GET_POST_BY_ID,
} from "../Constants/postConst";

const initialState = {
  post: JSON.parse(localStorage.getItem("post")) || {},
  posts: [],
  loadPost: false,
  error: null,
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_POSTS: {
      return { ...state, loadPost: true };
    }

    case GET_POSTS_SUCCESS: {
      console.log("Ali", payload);
      return { ...state, loadPost: false, posts: payload };
    }
    case CREATE_POST: {
      localStorage.getItem("token", payload.token);
      return {
        ...state,
        post: payload,
      };
    }

    // case CREATE_POST_FAIL:
    //   return {
    //     ...state,
    //     post: payload,
    //   };
    case GET_POST_BY_ID:
      return { ...state, loadPost: false, post: payload };

    default:
      return state;
  }
};
