import {
  loginStart,
  loginFailure,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/auth/login", user);
    // return with payload:
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const response = await publicRequest.post("/auth/register", user);
    // return with payload:
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};
