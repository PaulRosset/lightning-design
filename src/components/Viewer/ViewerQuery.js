import React from "react";
import { config } from "./../../config";
import { ContainerViewer, Image, Span } from "./../StyleComponents/Config";
import { Divider } from "semantic-ui-react";
import { Input, InputContainer } from "./../StyleComponents/Settings";
import MultipleCube from "./../../imgs/cubes.png";
import SingleCube from "./../../imgs/single-cube.png";
import Graphql from "./../../imgs/graphql.png";
import Entry from "./Entry";

import "../../../node_modules/highlight.js/styles/atom-one-dark.css";

class ViewerQuery extends React.Component {
  state = {
    copied: false,
    copied2: false
  };

  componentDidMount() {
    window.hl.initHighlighting();
    window.hl.highlightBlock(this.simpleEntry);
    window.hl.highlightBlock(this.getAllSimpleEntry);
  }

  onCopy() {
    this.setState({
      copied: true
    });
    this.idTime = setTimeout(() => {
      this.setState({
        copied: false
      });
      clearTimeout(this.idTime);
    }, 1500);
  }

  onCopyTwo() {
    this.setState({
      copied2: true
    });
    this.idTime2 = setTimeout(() => {
      this.setState({
        copied2: false
      });
      clearTimeout(this.idTime2);
    }, 1500);
  }

  render() {
    return (
      <ContainerViewer>
        <h1>Query Mechanisms</h1>
        <InputContainer>
          <Input value={config.url} type="text" readOnly size="35" />
        </InputContainer>
        <Span floated="right">
          Powered by{" "}
          <Image
            height="2rem"
            src={Graphql}
            verticalAlign="middle"
            title="Graphql"
          />
        </Span>
        <Entry
          text={`{
    getSimpleEntry(id: "${this.props.data.id}") {
      title
      id
      content
      date
      visible
      login
    }
}`}
          onCopy={() => this.onCopy()}
          img={SingleCube}
          title="Single Entry"
          reference={ref => (this.simpleEntry = ref)}
          copied={this.state.copied}
        />
        <Divider />
        <Entry
          text={
            !this.props.data.group
              ? `
{
    getDataRelatedUserEntry(login: "${this.props.data.login}") {
      title
      id
      content
      date
      visible
      login
      group
    }
}
          `
              : `{
    getDataRelatedGroup(group: "${this.props.data.group}") {
      title
      id
      content
      date
      visible
      login
      group
      }
}`
          }
          onCopy={() => this.onCopyTwo()}
          img={MultipleCube}
          title="Multiple Entrys"
          reference={ref => (this.getAllSimpleEntry = ref)}
          copied={this.state.copied2}
        />
      </ContainerViewer>
    );
  }

  componentWillUnmount() {
    clearTimeout(this.idTime);
    clearTimeout(this.idTime2);
  }
}

export default ViewerQuery;
