import {
  LOAD_PUB,
  GET_ALL_PUB_SUCCESS,
  GET_ALL_PUB_FAIL,
  GET_ONE_PUB,
  CREATE_PUB,
  DELETE_PUB,
  UPDATE_PUB,
} from "../Constants/pubConst";
import axios from "axios";

export const getPubs = () => async (dispatch) => {
  dispatch({ type: LOAD_PUB });
  try {
    const pubs = await axios.get(`http://localhost:5000/api/pub`);

    dispatch({
      type: GET_ALL_PUB_SUCCESS,
      payload: pubs.data,
    });
    console.log("ali", pubs.data);
  } catch (error) {
    dispatch({
      type: GET_ALL_PUB_FAIL,
      payload: error,
    });
  }
};
