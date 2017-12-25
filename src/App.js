import React, { Fragment, Component } from "react";

import HeaderMain from "./components/Header";
import Dashboard from "./components/Dashboard";
import EditorWysywig from "./components/Editor";
import { connect } from "react-redux";
import { getSimpleEntry } from "./store/actions/Data";

import "draft-js/dist/Draft.css";

class Editor extends Component {
  componentDidMount() {
    const url = new URL(window.location.href);
    if (url.searchParams.get("id")) {
      const id = url.searchParams.get("id");
      this.props.dispatch(getSimpleEntry(id));
      console.log(id);
    }
  }

  render() {
    return (
      <Fragment>
        <HeaderMain />
        <EditorWysywig data={this.props.editorData} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  editorData: state.editorData
});

export default connect(mapStateToProps)(Editor);
