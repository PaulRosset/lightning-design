import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import { Button, Linked } from "../components/StyleComponents/Button";
import { Segment } from "../components/StyleComponents/Segment";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Clickable", module)
  .add("Simple Button", () => (
    <Button onClick={action("clicker")}>
      <i class="fas fa-tachometer-alt" /> Home
    </Button>
  ))
  .add("Simple Link", () => (
    <Linked onClick={action("clicker")}>
      <i class="fas fa-bolt" /> Apps
    </Linked>
  ));

storiesOf("Segment, Data Display", module).add("Segment", () => (
  <Segment>Polo</Segment>
));
