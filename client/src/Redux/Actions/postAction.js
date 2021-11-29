import {
  LOAD_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  CREATE_POST,
  CREATE_POST_FAIL,
  GET_POST_BY_ID,
  GET_POST_BY_ID_FAIL,
  LOAD_POST,
} from "../Constants/postConst";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
  dispatch({ type: LOAD_POSTS });

  try {
    const posts = await axios.get(`http://localhost:5000/api/posts`);

    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: posts.data,
    });
    console.log("ali", posts.data);
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAIL,
      payload: error,
    });
  }
};

export const createPost = (post) => async (dispatch) => {
  console.log("called");
  try {
    const result = await axios.post(`http://localhost:5000/api/posts`, post, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    dispatch({
      type: CREATE_POST,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAIL,
      payload: error,
    });
  }
};

export const getPostById = (id) => async (dispatch) => {
  dispatch({ type: LOAD_POST });
  try {
    const result = await axios.get(`/api/posts/${id}`);

    dispatch({
      type: GET_POST_BY_ID,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: GET_POST_BY_ID_FAIL,
      payload: error,
    });
  }
};
