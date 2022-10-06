import React, { useReducer } from "react";
import { useNavigate } from "react-router";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user_id,
        token: action.payload.token,
        role: action.payload.role,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "Logout",
    });
    window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const checkToken = async () => {
    if (role !== null) {
      try {
        const response = await sdk.check(role);
        console.log({ response });
        tokenExpireError(dispatch, response.message);
      } catch (error) {
        console.log(error);
      }
    }
  };

  React.useEffect(() => {
    //TODO
    const data = {
      ...state,
      token,
      role,
    };

    // dispatch({ type: "LOGIN", payload: data });
    // checkToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
