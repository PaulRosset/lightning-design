import React, { Component } from "react";

import { Header, VerticalAlign } from "./StyleComponents/Header";
import { Button } from "./StyleComponents/Button";
import { Image } from "./StyleComponents/Config";
import logo from "../flash.png";

class HeaderMain extends Component {
  render() {
    return (
      <Header>
        <VerticalAlign left="10px">
          <Image src={logo} height="40px" />
        </VerticalAlign>
        <VerticalAlign right="10px">
          <Button onClick={() => console.log("clicker")}>
            <i className="fab fa-github" /> Sign with github
          </Button>
        </VerticalAlign>
      </Header>
    );
  }
}

export default HeaderMain;
