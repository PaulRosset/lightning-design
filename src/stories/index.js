import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import { Button, Linked } from "../components/StyleComponents/Button";
import { Segment } from "../components/StyleComponents/Segment";
import { ShowColor } from "../components/StyleComponents/Config";
import { Icon } from "../components/StyleComponents/Icon";

const Fragment = React.Fragment;

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

storiesOf("Segment, Data Display", module).add("Segment", () => (
  <Segment size="14px">Test</Segment>
));
