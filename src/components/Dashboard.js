import React, { Component, Fragment } from "react";
import { ContainerApp } from "./StyleComponents/Config";
import { DashTable } from "./Table";
import HeaderMain from "./Header";
import { connect } from "react-redux";
import { getDataDashBoard, editVisibility } from "./../store/actions/Data";
import { deleteEntry } from "./../store/actions/Entry";
import { Loader, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      deleted: false
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("userData"));
    this.props.dispatch(getDataDashBoard(user.login));
  }

  onEdit(id) {}

  onView(id) {}

  onDelete(id) {
    console.log(id);
    this.setState({ open: true });
    this.id = id;
  }

  cancelDelete() {
    this.setState({ open: false });
  }

  confirmDelete() {
    const user = JSON.parse(localStorage.getItem("userData"));
    this.props.dispatch(
      deleteEntry({ id: this.id, uid: user.id, login: user.login })
    );
    this.setState({ open: false });
  }

  onVisible(id, visible) {
    const user = JSON.parse(localStorage.getItem("userData"));
    this.props.dispatch(editVisibility(id, !visible, user.id, user.login));
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
              OnView={id => this.onView(id)}
              open={this.state.open}
              cancelDelete={() => this.cancelDelete()}
              confirmDelete={() => this.confirmDelete()}
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
