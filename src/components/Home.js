import React, { Component, Fragment } from "react";
import HeaderMain from "./Header";
import { getCodeAsync } from "./../store/actions/Login";
import { connect } from "react-redux";
import { Loader } from "semantic-ui-react";
import { Initial, Content, Plus, Footer } from "./staticHome";

class Home extends Component {
  onSignIn() {
    window.open(
      "http://github.com/login/oauth/authorize?client_id=3132b8f936e031819b70&redirect_uri=http://localhost:3000/&state=azerty",
      "_parent"
    );
  }

  componentDidMount() {
    if (this.props.location.search) {
      const uri = new URL(window.location.href);
      this.props.dispatch(
        getCodeAsync(
          uri.searchParams.get("code"),
          uri.searchParams.get("state")
        )
      );
    }
  }

  render() {
    const homePage = [
      <Initial key="1" />,
      <Content key="2" />,
      <Plus key="3" />,
      <Footer key="4" />
    ];
    return (
      <Fragment>
        <HeaderMain signIn={() => this.onSignIn()} />
        {this.props.user.isLoading ? (
          <Loader active={this.props.user.isLoading} />
        ) : (
          homePage
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Home);
