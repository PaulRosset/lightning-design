import React, { Component } from "react";
import { ContainerApp } from "./StyleComponents/Config";
import { DashTable } from "./Table";

import "semantic-ui-css/semantic.min.css";

class Dashboard extends Component {
  render() {
    return (
      <ContainerApp>
        <DashTable />
      </ContainerApp>
    );
  }
}

export default Dashboard;
