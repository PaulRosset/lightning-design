import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import { user } from "./store/reducers";
import Dashboard from "./components/Dashboard";
import Editor from "./App";
import Home from "./components/Home";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    user,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(middleware, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/editor" component={Editor} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
