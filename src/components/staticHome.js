import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";
import { ContainerStatic } from "./StyleComponents/Config";
import logo from "./../imgs/flash.png";
import dollar from "./../imgs/dollar-symbol.png";
import writer from "./../imgs/writer.png";
import save from "./../imgs/save.png";
import Link from "react-router-dom/Link";

export const Initial = () => (
  <Grid
    columns={2}
    container
    textAlign="center"
    style={{
      margin: "130px 0"
    }}
  >
    <Grid.Row>
      <Grid.Column verticalAlign="middle">
        <h1>Light Back-Office portable</h1>
        <p>
          Save your entry thanks to a lightweight and simple user interface.
          Then, use the registered entry in a other website such as your blog.
          <br />
          <b>A back-office everywhere !</b>
        </p>
      </Grid.Column>
      <Grid.Column>
        <Image src={logo} size="tiny" inline />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export const Content = () => (
  <ContainerStatic color="#353535">
    <h3>Made to simplify the life!</h3>
    <p>Spread it!</p>
    <a href="https://twitter.com/intent/tweet?text=Discover Lightning App!&url=https://google.com">
      <Icon name="twitter" size="large" />
    </a>
  </ContainerStatic>
);

export const Plus = () => (
  <Grid columns={3} container style={{ margin: "130px 0" }}>
    <Grid.Row>
      <Grid.Column textAlign="center">
        <h1>
          <Image src={save} size="tiny" inline={true} />
        </h1>
        <h3>Save it!</h3>
        <p>
          Every entry that you create is saved and can be accessed anywhere!
        </p>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <h1>
          <Image src={writer} size="tiny" inline={true} />
        </h1>
        <h3>Edit it!</h3>
        <p>
          Every content come from you and can be changed everywhere at anytime!
        </p>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <h1>
          <Image src={dollar} size="tiny" inline={true} />
        </h1>
        <h3>It's Free!</h3>
        <p>A big part of it is Free, you can start write content now!</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export const Footer = () => (
  <ContainerStatic color="#353535">
    <Grid columns={3} container style={{ marginBottom: "20px" }}>
      <Grid.Row>
        <Grid.Column inline>
          <Grid.Row>
            <Link to="/">Link 1</Link>
          </Grid.Row>
          <Grid.Row>
            <Link to="/">Link 1</Link>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column inline>
          <Grid.Row>
            <Link to="/">Link 1</Link>
          </Grid.Row>
          <Grid.Row>
            <Link to="/">Link 1</Link>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column inline>
          <Grid.Row>
            <Link to="/">Link 1</Link>
          </Grid.Row>
          <Grid.Row>
            <Link to="/">Link 1</Link>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <span style={{ float: "right" }}>
      Made with <Icon name="heart" /> from Nice by{" "}
      <Link to="/">Paul Rosset</Link>
    </span>
  </ContainerStatic>
);
