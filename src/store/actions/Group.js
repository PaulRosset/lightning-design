import axios from "axios";
import Rx from "rxjs";
import UtilityGraph from "./Utility";
import { NEWGROUP, GETGROUPS, DELETEGROUP } from "./../types";
import { config } from "./../../config";

const dataU = new UtilityGraph(config.url);

const getGroups = groups => ({
  type: GETGROUPS,
  payload: groups
});

const addGroup = error => ({
  type: NEWGROUP,
  payload: error
});

const deleteGroupAction = group => ({
  type: DELETEGROUP,
  payload: group
});

export const getGroup = login => {
  const source$ = Rx.Observable.create(observer => {
    const request$ = Rx.Observable.fromPromise(axios(dataU.getGroup(login)));
    request$.subscribe({
      next: res => observer.next(res.data.data.getGroupRelatedUser),
      error: err => observer.err(),
      complete: () => observer.complete()
    });
  });

  return dispatch => {
    source$.subscribe({
      next: groups => dispatch(getGroups(groups)),
      error: err => err,
      complete: () => "complete"
    });
  };
};

export const createGroup = (groupName, uid, login) => {
  const source$ = Rx.Observable.create(observer => {
    const request$ = Rx.Observable.fromPromise(
      axios(dataU.createNewGroup({ name: groupName, uid, login }))
    );
    request$.subscribe({
      next: res => observer.next(res.data.data.createGroup),
      error: err => observer.err(),
      complete: () => observer.complete()
    });
  });

  return dispatch => {
    source$.subscribe({
      next: res => dispatch(addGroup()),
      error: err => dispatch(addGroup(err)),
      complete: () => "complete"
    });
  };
};

export const deleteGroup = group => {
  const source$ = Rx.Observable.create(observer => {
    const request$ = Rx.Observable.fromPromise(axios(dataU.deleteGroup(group)));
    request$.subscribe({
      next: res => observer.next(res.data.data.deleteGroup),
      error: err => observer.err(),
      complete: () => observer.complete()
    });
  });

  return dispatch => {
    source$.subscribe({
      next: res => dispatch(deleteGroupAction(group)),
      error: err => err,
      complete: () => "complete"
    });
  };
};
