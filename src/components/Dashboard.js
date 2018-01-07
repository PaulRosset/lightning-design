import React, { Component, Fragment } from "react";
import { ContainerApp } from "./StyleComponents/Config";
import { DashTable } from "./Table";
import HeaderMain from "./Header";
import { connect } from "react-redux";
import { getDataDashBoard, editVisibility } from "./../store/actions/Data";
import { getGroup, createGroup, deleteGroup } from "./../store/actions/Group";
import { deleteEntry } from "./../store/actions/Entry";
import { Loader, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Alert } from "./StyleComponents/Settings";
import { GroupsManager } from "./GroupsManager";

import "semantic-ui-css/semantic.min.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      deleted: false,
      show: false,
      groupName: "",
      showIsExistingGroup: false,
      isExistGroup: false,
      alert: {}
    };
  }

  componentDidMount() {
    this.user = JSON.parse(localStorage.getItem("userData"));
    this.props.dispatch(getDataDashBoard(this.user.login));
    this.props.dispatch(getGroup(this.user.login));
  }

  deleteGroup(group) {
    this.props.dispatch(
      deleteGroup({ ...group, login: this.user.login, uid: this.user.id })
    );
    this.setState({
      alert: {
        message: (
          <Alert color="green">
            Group <b>{group.name}</b> Deleted
          </Alert>
        )
      }
    });
    this.timeDelete = setTimeout(() => {
      this.setState({ alert: {} }, () => {
        clearTimeout(this.timeDelete);
      });
    }, 2000);
  }

  onEdit(id) {}

  onView(id) {}

  onDelete(id) {
    this.setState({ open: true });
    this.id = id;
  }

  cancelDelete() {
    this.setState({ open: false });
  }

  confirmDelete() {
    this.props.dispatch(
      deleteEntry({ id: this.id, uid: this.user.id, login: this.user.login })
    );
    this.setState({ open: false });
  }

  onVisible(id, visible) {
    this.props.dispatch(
      editVisibility(id, !visible, this.user.id, this.user.login)
    );
  }

  addGroup(e) {
    e.preventDefault();
    this.setState(previousState => ({
      show: !previousState.show
    }));
  }

  onChangeGroup(e) {
    this.setState(
      {
        groupName: e.target.value,
        showIsExistingGroup: true
      },
      () => {
        const isExist = this.props.groups.filter(
          value => value.name === this.state.groupName
        );
        if (isExist.length === 1) {
          this.setState({
            isExistGroup: true
          });
        } else {
          this.setState({
            isExistGroup: false
          });
        }
      }
    );
  }

  addGroupToDataBase() {
    this.props.dispatch(
      createGroup(this.state.groupName, this.user.id, this.user.login)
    );
    this.setState({
      alert: {
        message: (
          <Alert color="green">
            Group <b>{this.state.groupName}</b> added
          </Alert>
        )
      },
      groupName: ""
    });
    this.timeAdd = setTimeout(() => {
      this.setState({
        alert: {}
      });
    }, 2000);
    this.props.dispatch(getGroup(this.user.login));
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
          <Link
            to="#"
            style={{ float: "right" }}
            onClick={e => this.addGroup(e)}
          >
            <Icon
              name="group"
              link
              bordered
              circular
              size="large"
              color="yellow"
            />{" "}
            Create a new group!
          </Link>
          <GroupsManager
            show={this.state.show}
            groupName={this.state.groupName}
            onChangeGroup={e => this.onChangeGroup(e)}
            showIsExistingGroup={this.state.showIsExistingGroup}
            isExistGroup={this.state.isExistGroup}
            groups={this.props.groups}
            exitGroup={() => this.setState({ show: false })}
            deleteGroup={group => this.deleteGroup(group)}
            alert={this.state.alert}
          />
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

  componentWillUnmount() {
    clearTimeout(this.timeAdd);
    clearTimeout(this.timeDelete);
  }
}

const mapStateToProps = state => ({
  user: state.user,
  data: state.data,
  groups: state.groupsData
});

export default connect(mapStateToProps)(Dashboard);
