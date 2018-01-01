import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import { Button, Linked } from "../components/StyleComponents/Button";
import { Segment, Input } from "../components/StyleComponents/Segment";
import { ShowColor, Image } from "../components/StyleComponents/Config";
import { Icon } from "../components/StyleComponents/Icon";
import { Header, VerticalAlign } from "../components/StyleComponents/Header";

import logo from "../imgs/flash.png";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Color Used", module).add("Color", () => <ShowColor />);

storiesOf("Clickable", module)
  .add("Simple Button", () => (
    <Button onClick={action("clicker")}>
      <i className="fas fa-tachometer-alt" /> Home
    </Button>
  ))
  .add("Simple Link", () => (
    <Linked onClick={action("clicker")}>
      <i className="fas fa-bolt" /> Apps
    </Linked>
  ))
  .add("Button with Icon", () => (
    <Fragment>
      <Icon rounded bordered color="#f44336" name="trash" />
      <Icon rounded bordered link name="minus-circle" />
    </Fragment>
  ));

storiesOf("Header", module).add("Header only", () => (
  <Header>
    <VerticalAlign left="10px">
      <Image src={logo} height="40px" />
    </VerticalAlign>
    <VerticalAlign right="10px">
      <Button onClick={action("clicker")}>
        <i className="fab fa-github" /> Sign with github
      </Button>
    </VerticalAlign>
  </Header>
));

storiesOf("Segment, Data Display, Dashboard", module).add("Segment", () => (
  <Segment size="14px">Test</Segment>
));
