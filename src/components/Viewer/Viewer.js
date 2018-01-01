import React, { Component, Fragment } from "react";
import { ContainerApp } from "./../StyleComponents/Config";
import HeaderMain from "./../Header";
import { connect } from "react-redux";
import ViewerEdit from "../Viewer/ViewerEdit";
import ViewerQuery from "../Viewer/ViewerQuery";
import { getSimpleEntry } from "./../../store/actions/Data";
import { push } from "react-router-redux";

class Viewer extends Component {
  componentDidMount() {
    const url = new URL(window.location.href);
    if (url.searchParams.get("id")) {
      const id = url.searchParams.get("id");
      this.props.dispatch(getSimpleEntry(id));
    } else {
      this.props.dispatch(push("/dashboard"));
    }
  }

  render() {
    return (
      <Fragment>
        <HeaderMain />
        <ContainerApp>
          <ViewerEdit data={this.props.editData} />
          <ViewerQuery data={this.props.editData} />
        </ContainerApp>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  editData: state.editorData
});

export default connect(mapStateToProps)(Viewer);
