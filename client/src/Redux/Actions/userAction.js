import {
  LOAD_USER,
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGOUT,
} from "../Constants/userConst";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const userLoggedIn = (data) => ({
  type: USER_LOGIN,
  payload: data,
});

export const userRegister = (user, history) => async (dispatch) => {
  // console.log("Ali", user);
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/sign-up", user);
    // console.log("Ali-2", result);
    dispatch({
      type: USER_REGISTER,
      payload: { ...result.data, user },
    });
    // history.push("/service");
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/api/sign-in", user);
    dispatch({
      type: USER_LOGIN,
      payload: result.data,
    });

    // history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const userLogout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  // history.push("/login");
};
