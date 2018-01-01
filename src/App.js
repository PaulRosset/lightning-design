import React, { Fragment, Component } from "react";

import HeaderMain from "./components/Header";
import EditorWysywig from "./components/Editor";
import { connect } from "react-redux";
import { getSimpleEntry } from "./store/actions/Data";

import "draft-js/dist/Draft.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewEntry: true
    };
    this.newEntry = {
      title: "",
      content: "",
      date: ""
    };
  }

  componentDidMount() {
    const url = new URL(window.location.href);
    if (url.searchParams.get("id")) {
      this.setState({ isNewEntry: false }, () => {
        this.id = url.searchParams.get("id");
        this.props.dispatch(getSimpleEntry(this.id));
      });
    } else {
      this.setState({ isNewEntry: true });
    }
  }

  render() {
    return (
      <Fragment>
        <HeaderMain />
        <EditorWysywig
          data={this.state.isNewEntry ? this.newEntry : this.props.editorData}
          isNewEntry={this.state.isNewEntry}
          id={this.state.isNewEntry ? "" : this.id}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  editorData: state.editorData
});

export default connect(mapStateToProps)(Editor);
