import React, { Fragment } from "react";

import HeaderMain from "./components/Header";
import Dashboard from "./components/Dashboard";
import EditorWysywig from "./components/Editor";

import "draft-js/dist/Draft.css";

export default () => (
  <Fragment>
    <HeaderMain />
    <EditorWysywig />
  </Fragment>
);
