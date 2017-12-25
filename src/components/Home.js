import React, { Component, Fragment } from "react";
import HeaderMain from "./Header";
import { getCodeAsync } from "./../store/actions/Login";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "semantic-ui-react";

class Home extends Component {
  onSignIn() {
    const w = window.open(
      "http://github.com/login/oauth/authorize?client_id=3132b8f936e031819b70&redirect_uri=http://localhost:3000/&state=azerty",
      "_parent"
    );
  }

  componentDidMount() {
    if (this.props.location.search) {
      let code = this.props.location.search.split("=");
      const state = code;
      code = code[1].split("&");
      this.props.dispatch(getCodeAsync(code[0], state[2]));
    }
  }

  render() {
    return (
      <Fragment>
        <HeaderMain signIn={() => this.onSignIn()} />
        <Link to="/dashboard">Dash</Link>
        <Link to="/editor">Editor</Link>
        <Loader active={this.props.user.isLoading} />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Home);
