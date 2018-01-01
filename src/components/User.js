import React, { Component, Fragment } from "react";
import { isLogged } from "../store/actions/Login";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";

class User extends Component {
  componentDidMount() {
    this.user = JSON.parse(localStorage.getItem("userData"));
    if (this.user) {
      this.props.dispatch(isLogged(this.user.token));
    } else {
      this.props.dispatch(push("/"));
    }
  }

  render() {
    return <Fragment>{this.props.children(this.user)}</Fragment>;
  }
}

User.propTypes = {
  children: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(User);
