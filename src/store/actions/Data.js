import axios from "axios";
import Rx from "rxjs";
import UtilityGraph from "./Utility";
import { GETDASHBOARD, VISIBILITY, EDITDATA, NEWENTRY } from "./../types";
import moment from "moment";
import { config } from "./../../config";

const dataU = new UtilityGraph(config.url);

export const getDataDashBoard = login => {
  const root$ = Rx.Observable.create(observer => {
    const child$ = Rx.Observable.fromPromise(
      axios(dataU.getDataRelatedToUser(login))
    );
    child$.subscribe({
      next: res => observer.next(res.data.data.getDataRelatedUserEntry),
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
  });

  return dispatch => {
    root$.subscribe(
      res => dispatch({ type: GETDASHBOARD, payload: res }),
      err => console.log(err),
      () => console.log("done") // mettre un loader
    );
  };
};

const changeVisibility = (id, visible) => ({
  type: VISIBILITY,
  payload: { id, visible }
});

export const editVisibility = (id, visible, uid, login) => {
  const root$ = Rx.Observable.create(observer => {
    const child$ = Rx.Observable.fromPromise(
      axios(dataU.editVisibility({ id, visible, uid, login }))
    );
    child$.subscribe({
      next: res => observer.next(res.data.data.editVisible),
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
  });
  return dispatch => {
    root$.subscribe(
      res => dispatch(changeVisibility(id, visible)),
      err => console.log(err),
      () => console.log("AZ done") // mettre un loader
    );
  };
};

const editorData = lightEntryData => ({
  type: EDITDATA,
  payload: lightEntryData
});

export const getSimpleEntry = id => {
  const root$ = Rx.Observable.create(observer => {
    const child$ = Rx.Observable.fromPromise(axios(dataU.getSimpleEntry(id)));
    child$.subscribe({
      next: res => observer.next(res.data.data.getSimpleEntryBack),
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
  });
  return dispatch => {
    root$.subscribe(
      res => dispatch(editorData(res)),
      err => console.log(err),
      () => console.log("AZ done") // mettre un loader
    );
  };
};

const newSimpleEntryActions = dataNewEntry => ({
  type: NEWENTRY,
  payload: dataNewEntry
});

export const newSimpleEntry = idUser => {
  const dataNewEntry = {
    title: "",
    id: "",
    content: "",
    date: moment(),
    visible: false,
    uid: idUser
  };
  return dispatch => {
    dispatch(newSimpleEntryActions(dataNewEntry));
  };
};
