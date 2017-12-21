import { GETINFOSGITHUB, ISLOGGED, LOADING } from "./types";

export const user = (state = { isConnected: false }, actions) => {
  switch (actions.type) {
    case LOADING:
      return { ...state, isLoading: true };
    case GETINFOSGITHUB:
      return {
        ...state,
        data: actions.user,
        isConnected: true,
        isLoading: false
      };
    case ISLOGGED:
      return { ...state, isConnected: actions.isLogged, isLoading: false };
    default:
      return state;
  }
};
