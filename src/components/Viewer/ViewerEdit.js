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
    show: false
  };

  onShow() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { visible, id, title, content, date } = this.props.data;
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
        <AdditionalInfos display={this.state.show ? "block" : "none"}>
          <p>Additional Informations:</p>
          <InputContainer>
            <b>ID Entry:</b> <Input value={id} type="text" readOnly size="85" />
          </InputContainer>
          <InputContainer>
            Visible:{" "}
            <Icon
              name={visible ? "checkmark" : "remove"}
              color={visible ? "green" : "red"}
            />
          </InputContainer>
        </AdditionalInfos>
        <Label style={{ marginBottom: 20 }}>
          Title:
          <h2>{title}</h2>
        </Label>

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
