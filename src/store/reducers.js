import {
  GETINFOSGITHUB,
  ISLOGGED,
  LOADING,
  ISLOADED,
  GETDASHBOARD,
  VISIBILITY,
  EDITDATA
} from "./types";

export const user = (state = { isConnected: false }, actions) => {
  switch (actions.type) {
    case LOADING:
      return { ...state, isLoading: true };
    case ISLOADED:
      return { ...state, isLoading: false };
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

export const data = (state = [], actions) => {
  switch (actions.type) {
    case GETDASHBOARD:
      return actions.payload.map(entry => entry);
    case VISIBILITY:
      return state.map(
        data =>
          data.id === actions.payload.id
            ? { ...data, visible: actions.payload.visible }
            : data
      );
    default:
      return state;
  }
};

export const editorData = (state = { isLoading: true }, actions) => {
  switch (actions.type) {
    case EDITDATA:
      return { ...actions.payload, isLoading: false };
    default:
      return state;
  }
};
