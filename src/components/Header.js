import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Header, VerticalAlign } from "./StyleComponents/Header";
import { Button } from "./StyleComponents/Button";
import {
  Image,
  FlexContainer,
  FlexChildrenName
} from "./StyleComponents/Config";
import { connect } from "react-redux";
import logo from "./../imgs/flash.png";
import { Loader, Icon } from "semantic-ui-react";
import User from "./User";

const ProfileUser = props => (
  <FlexContainer direction="row">
    <FlexChildrenName>{props.children}</FlexChildrenName>
    <Image
      src={props.img}
      height="35px"
      radius="50%"
      shadow="0px 1px 4px #828c99"
    />
  </FlexContainer>
);

class HeaderMain extends Component {
  render() {
    return (
      <Header>
        <VerticalAlign left="10px">
          <Link to="/">
            <Image src={logo} height="40px" />
          </Link>
        </VerticalAlign>
        <VerticalAlign right="10px">
          <User>
            {user =>
              this.props.user.isLoading ? (
                <Loader active inline size="small" />
              ) : this.props.user.isConnected && user ? (
                <Fragment>
                  <VerticalAlign right="160px">
                    <Link
                      to="/dashboard"
                      style={{
                        display: "inline-flex",
                        margin: "0 5px",
                        color: "black"
                      }}
                    >
                      <Icon name="dashboard" /> Dash
                    </Link>
                  </VerticalAlign>
                  <ProfileUser img={user.avatar_url}>{user.name}</ProfileUser>
                </Fragment>
              ) : (
                <Button onClick={() => this.props.signIn()}>
                  <i className="fab fa-github" /> Sign with github
                </Button>
              )
            }
          </User>
        </VerticalAlign>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(HeaderMain);
