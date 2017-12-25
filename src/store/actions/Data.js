import axios from "axios";
import Rx from "rxjs";
import UtilityGraph from "./Utility";
import { GETDASHBOARD, VISIBILITY, EDITDATA } from "./../types";
import { race } from "rxjs/observable/race";

const dataU = new UtilityGraph("http://localhost:8081/graphql");

export const getDataDashBoard = uid => {
  const root$ = Rx.Observable.create(observer => {
    const child$ = Rx.Observable.fromPromise(
      axios(dataU.getDataRelatedToUser(uid))
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

export const editVisibility = (id, visible) => {
  const root$ = Rx.Observable.create(observer => {
    const child$ = Rx.Observable.fromPromise(
      axios(dataU.editVisibility({ id, visible }))
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
      next: res => observer.next(res.data.data.getSimpleEntry),
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
