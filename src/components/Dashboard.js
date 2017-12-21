import React, { Component, Fragment } from "react";
import { ContainerApp } from "./StyleComponents/Config";
import { DashTable } from "./Table";
import HeaderMain from "./Header";
import { connect } from "react-redux";

import "semantic-ui-css/semantic.min.css";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <HeaderMain />
        <ContainerApp>
          <DashTable />
        </ContainerApp>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Dashboard);
