import { GETINFOSGITHUB, ISLOGGED, LOADING, ISLOADED } from "./../types";
import axios from "axios";
import { push } from "react-router-redux";
import Rx from "rxjs";
import UtilityGraph from "./Utility";
import { config } from "./../../config";

const utils = new UtilityGraph(config.url);

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
  const obs$ = Rx.Observable.fromPromise(
    axios.get(`https://api.github.com/user?access_token=${access_token}`)
  );
  return dispatch => {
    dispatch({ type: LOADING });
    obs$.subscribe({
      error: err => {
        if (err) {
          dispatch(isLoggedIn(false));
          dispatch(push("/"));
        }
      },
      complete: () => dispatch(isLoggedIn(true))
    });
  };
};

export const getCodeAsync = (code, scope) => {
  const request = axios({
    method: "post",
    url:
      "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",
    data: {
      client_id: config.client_id,
      client_secret: config.token_secret,
      code,
      state: scope
    }
  });
  return dispatch => {
    dispatch({ type: LOADING });
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
            const user$ = Rx.Observable.fromPromise(
              axios(utils.addUser({ name, login, mail: email, uid: id }))
            );
            user$.subscribe(
              res => console.log(res),
              err => console.log(err),
              () => {
                console.log("DONE ADDED USER" + id);
                dispatch({ type: ISLOADED });
                dispatch(getInfosForAuthGitHub(userData));
                dispatch(push("/dashboard"));
              }
            );
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        if (err) throw err;
      });
  };
};
