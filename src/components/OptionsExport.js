import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { FlexContainer } from "./StyleComponents/Config";

class OptionsExport extends Component {
  state = {
    format: "md"
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.format !== this.props.data.format && !this.props.isNewEntry) {
      this.setState({
        format: this.props.data.format
      });
    }
  }

  /* componentDidUpdate(prevState, prevProps) {
    if (prevState.format !== this.props.data.format) {
      this.setState({
        format: this.props.data.format
      });
    }
  } */

  changeFormat(e, { value }) {
    this.setState(
      {
        format: value
      },
      () => this.props.formatExport(this.state.format)
    );
  }

  render() {
    return (
      <FlexContainer direction="column">
        <Form.Radio
          label="Markdown"
          value="md"
          checked={this.state.format === "md"}
          onChange={(e, values) => this.changeFormat(e, values)}
        />
        <Form.Radio
          label="HTML"
          value="html"
          checked={this.state.format === "html"}
          onChange={(e, values) => this.changeFormat(e, values)}
        />
        <Form.Radio
          label="Plain-Text"
          value="text"
          checked={this.state.format === "text"}
          onChange={(e, values) => this.changeFormat(e, values)}
        />
      </FlexContainer>
    );
  }
}

export default OptionsExport;
