import { USER_LOGIN, USER_REGISTER, USER_LOGOUT } from "../Constants/userConst";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  users: [],
  loadUser: false,
  loadUsers: false,
  isAuth: localStorage.getItem("token") ? true : false,
  errors: null,
};
export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log("User-Register1", action);

  switch (type) {
    case USER_REGISTER: {
      // console.log("User-Register", payload);
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, isAuth: true, loadUser: false };
    }
    case USER_LOGIN:
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, isAuth: true, loaderUser: false };

    case USER_LOGOUT:
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return { user: {}, isAuth: false, loaderUser: false };
    default:
      return state;
  }
};
