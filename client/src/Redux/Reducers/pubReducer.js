import {
  LOAD_PUB,
  GET_ALL_PUB_SUCCESS,
  GET_ALL_PUB_FAIL,
  GET_ONE_PUB,
  CREATE_PUB,
  DELETE_PUB,
  UPDATE_PUB,
} from "../Constants/pubConst";

const initialState = {
  pub: JSON.parse(localStorage.getItem("pub")) || {},
  pubs: [],
  loadPub: false,
  error: null,
};
export const pubReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_PUB: {
      return { ...state, loadPub: true };
    }
    case GET_ALL_PUB_SUCCESS:
      return { ...state, loadPub: false, pubs: payload };

    default:
      return state;
  }
};
