import axios from "axios";
import Rx from "rxjs";
import UtilityGraph from "./Utility";
import { SENDNEWENTRY, UPDATEENTRY, DELETEENTRY } from "./../types";
import { push } from "react-router-redux";
import { config } from "./../../config";

const dataU = new UtilityGraph(config.url);

const sendNewEntry = () => ({
  type: SENDNEWENTRY
});

const updatedEntry = () => ({
  type: UPDATEENTRY
});

const deletedEntry = id => ({
  type: DELETEENTRY,
  id
});

export const submitNewEntry = entry => {
  const root$ = Rx.Observable.create(obs => {
    const child$ = Rx.Observable.fromPromise(axios(dataU.addNewEntry(entry)));
    child$.subscribe({
      next: res => obs.next(res),
      error: err => obs.error(err),
      complete: () => obs.complete()
    });
  });
  return dispatch => {
    root$.subscribe({
      next: res => dispatch(sendNewEntry()),
      error: err => err,
      complete: () => dispatch(push("/dashboard"))
    });
  };
};

export const updateEntry = entry => {
  const root$ = Rx.Observable.create(obs => {
    const child$ = Rx.Observable.fromPromise(axios(dataU.updateEntry(entry)));
    child$.subscribe({
      next: res => obs.next(res),
      error: err => obs.error(err),
      complete: () => obs.complete()
    });
  });
  return dispatch => {
    root$.subscribe({
      next: res => dispatch(updatedEntry()),
      error: err => err,
      complete: () => dispatch(push("/dashboard"))
    });
  };
};

export const deleteEntry = entry => {
  const root$ = Rx.Observable.create(obs => {
    const child$ = Rx.Observable.fromPromise(axios(dataU.deleteEntry(entry)));
    child$.subscribe({
      next: res => obs.next(res),
      error: err => obs.error(err),
      complete: () => obs.complete()
    });
  });
  return dispatch => {
    root$.subscribe({
      next: res => dispatch(deletedEntry(entry.id)),
      error: err => err,
      complete: () => "done"
    });
  };
};
