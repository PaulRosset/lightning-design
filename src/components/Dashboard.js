import React, { Component, Fragment } from "react";
import { ContainerApp } from "./StyleComponents/Config";
import { DashTable } from "./Table";
import HeaderMain from "./Header";
import { connect } from "react-redux";
import { getDataDashBoard, editVisibility } from "./../store/actions/Data";
import { Loader, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";

class Dashboard extends Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("userData"));
    this.props.dispatch(getDataDashBoard(user.id));
  }

  onEdit(id) {}

  onDelete(id) {
    console.log(id);
  }

  onVisible(id, visible) {
    this.props.dispatch(editVisibility(id, !visible));
  }

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <HeaderMain />
        <ContainerApp>
          <Link to="/editor">
            <Icon
              name="plus"
              link
              bordered
              circular
              size="large"
              color="yellow"
            />{" "}
            Add a new entry!
          </Link>
          {data ? (
            <DashTable
              data={data}
              OnEdit={id => this.onEdit(id)}
              OnDelete={id => this.onDelete(id)}
              OnVisible={(id, visible) => this.onVisible(id, visible)}
            />
          ) : (
            <Loader active />
          )}
        </ContainerApp>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  data: state.data
});

export default connect(mapStateToProps)(Dashboard);
