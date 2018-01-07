import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Header, VerticalAlign } from "./StyleComponents/Header";
import { Button } from "./StyleComponents/Button";
import {
  Image,
  FlexContainer,
  FlexChildrenName
} from "./StyleComponents/Config";
import { AdditionalInfos, Linked } from "./StyleComponents/Settings";
import { connect } from "react-redux";
import logo from "./../imgs/flash.png";
import { Loader, Icon, Divider } from "semantic-ui-react";
import User from "./User";

const ProfileUser = props => (
  <FlexContainer
    direction="row"
    onMouseEnter={() => props.onMouseEnter()}
    onMouseLeave={() => props.onMouseLeave()}
  >
    <FlexChildrenName>{props.children}</FlexChildrenName>
    <Image
      src={props.img}
      link="pointer"
      height="35px"
      radius="50%"
      shadow="0px 1px 4px #828c99"
    />
  </FlexContainer>
);

class HeaderMain extends Component {
  state = {
    openMenu: false
  };

  onHover() {
    this.setState({
      openMenu: true
    });
  }

  onLeave() {
    this.setState({
      openMenu: false
    });
  }

  disconnect() {
    localStorage.removeItem("userData");
    localStorage.removeItem("groups");
  }

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
                  <ProfileUser
                    img={user.avatar_url}
                    onMouseEnter={() => this.onHover()}
                    onMouseLeave={() => this.onLeave()}
                  >
                    <Icon name="dropdown" />
                  </ProfileUser>
                  <AdditionalInfos
                    onMouseEnter={() => this.onHover()}
                    onMouseLeave={() => this.onLeave()}
                    display={this.state.openMenu ? "block" : "none"}
                    top="33"
                    width="15rem"
                    anim="fade"
                    innerRef={ref => (this.ref = ref)}
                  >
                    <h5
                      style={{
                        marginBottom: 0,
                        borderBottom: "2px solid",
                        paddingBottom: 5
                      }}
                    >
                      @{user.login}
                    </h5>
                    <div style={{ padding: 8 }}>
                      <Linked to="/dashboard" style={{ color: "#000" }}>
                        <Icon name="dashboard" color="yellow" /> Dashboard
                      </Linked>
                      <Divider />
                      <Linked
                        to="/"
                        style={{ color: "#000" }}
                        onClick={() => this.disconnect()}
                      >
                        <Icon name="sign out" color="yellow" /> Disconnect
                      </Linked>
                    </div>
                  </AdditionalInfos>
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
