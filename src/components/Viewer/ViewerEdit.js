import React from "react";
import { ContainerViewer } from "./../StyleComponents/Config";
import { Markdown } from "./../Markdown";
import { Icon, Label } from "semantic-ui-react";
import {
  AdditionalInfos,
  Input,
  InputContainer
} from "./../StyleComponents/Settings";

class ViewerEdit extends React.Component {
  state = {
    show: false,
    id: this.props.data.id
  };

  onShow() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { visible, title, content, date, group } = this.props.data;
    return (
      <ContainerViewer>
        <Icon
          name="settings"
          onClick={() => this.onShow()}
          bordered
          circular
          link
          style={{ float: "right" }}
        />
        <AdditionalInfos
          display={this.state.show ? "block" : "none"}
          top="180"
          width="45%"
        >
          <p>Additional Informations:</p>
          <InputContainer>
            <b>ID Entry:</b>{" "}
            <Input value={this.state.id} type="text" readOnly size="85" />
          </InputContainer>
          <InputContainer>
            Visible:{" "}
            <Icon
              name={visible ? "checkmark" : "remove"}
              color={visible ? "green" : "red"}
            />
          </InputContainer>
        </AdditionalInfos>
        <Label style={{ marginBottom: 20 }} color="yellow">
          Title:
          <h2>{title}</h2>
        </Label>

        {group ? (
          <Label style={{ marginBottom: 20 }} color="blue">
            Group:
            <h2>{group}</h2>
          </Label>
        ) : null}

        <Markdown input={content}>
          <Label as="a" color="blue" ribbon="right">
            Overview Markdown
          </Label>
        </Markdown>
        <Label style={{ marginTop: 20 }}>
          <Icon name="calendar" /> {date}
        </Label>
      </ContainerViewer>
    );
  }
}

export default ViewerEdit;
