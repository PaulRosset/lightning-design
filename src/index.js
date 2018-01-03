import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import { user, data, editorData, groupsData, error } from "./store/reducers";
import Dashboard from "./components/Dashboard";
import Editor from "./App";
import Home from "./components/Home";
import Viewer from "./components/Viewer/Viewer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    user,
    data,
    editorData,
    groupsData,
    error,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(middleware, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/viewer" component={Viewer} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/editor" component={Editor} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
