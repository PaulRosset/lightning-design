import { GETINFOSGITHUB, ISLOGGED, LOADING } from "./../types";
import axios from "axios";
import agent from "superagent";
import { push } from "react-router-redux";

const getInfosForAuthGitHub = user => ({
  type: GETINFOSGITHUB,
  user
});

const isLoggedIn = isLogged => ({
  type: ISLOGGED,
  isLogged
});

// Thunk
export const isLogged = access_token => {
  const request = axios.get(
    `https://api.github.com/user?access_token=${access_token}`
  );
  return dispatch => {
    dispatch({ type: LOADING });
    request.then(res => dispatch(isLoggedIn(true))).catch(err => {
      dispatch(isLoggedIn(false));
      dispatch(push("/"));
    });
  };
};

export const getCodeAsync = (code, scope) => {
  const request = axios({
    method: "post",
    url:
      "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",
    data: {
      client_id: "3132b8f936e031819b70",
      client_secret: "778f7c99477c49a8f87f6ed6746444a8c3be5015",
      code,
      state: scope
    }
  });
  return dispatch => {
    request
      .then(res => {
        let access_token = res.data.split("=");
        access_token = access_token[1].split("&");
        const request = axios.get(
          `https://api.github.com/user?access_token=${access_token[0]}`
        );
        request
          .then(user => {
            const { name, avatar_url, id, email, login } = user.data;
            const userData = {
              name,
              avatar_url,
              id,
              email,
              login,
              token: access_token[0]
            };
            localStorage.setItem("userData", JSON.stringify(userData));
            dispatch(getInfosForAuthGitHub(userData));
            dispatch(push("/dashboard"));
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        if (err) throw err;
      });
  };
};
