import {
  GETINFOSGITHUB,
  ISLOGGED,
  LOADING,
  ISLOADED,
  GETDASHBOARD,
  VISIBILITY,
  EDITDATA,
  NEWENTRY,
  DELETEENTRY,
  GETGROUPS,
  NEWGROUP,
  DELETEGROUP
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
    case DELETEENTRY:
      return state.filter(value => value.id !== actions.id);
    default:
      return state;
  }
};

export const editorData = (state = { isLoading: true }, actions) => {
  switch (actions.type) {
    case EDITDATA:
      return { ...state, ...actions.payload, isLoading: false };
    case NEWENTRY:
      return {
        ...state,
        ...actions.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export const groupsData = (state = [], actions) => {
  switch (actions.type) {
    case GETGROUPS:
      return actions.payload;
    case DELETEGROUP:
      return state.filter(value => value.id !== actions.payload.id);
    default:
      return state;
  }
};

export const error = (state = {}, actions) => {
  switch (actions.type) {
    case NEWGROUP:
      if (actions.payload) {
        return { ...state, isErrorOnNewGroup: true, message: actions.payload };
      }
      return { ...state, isErrorOnNewGroup: false };
    default:
      return state;
  }
};
