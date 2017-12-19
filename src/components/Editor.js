import React, { Component } from "react";
import { ContainerApp } from "./StyleComponents/Config";
import { Segment, Icon, Popup, Button } from "semantic-ui-react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { stateToMarkdown } from "draft-js-export-markdown";
import { stateFromMarkdown } from "draft-js-import-markdown";
import {
  Title,
  Body,
  Date,
  BarButton,
  ToolButton
} from "./StyleComponents/Editor";
import { Markdown } from "./Markdown";

import "semantic-ui-css/semantic.min.css";

// From markdown to ContentState
//let contentState = stateFromMarkdown(markdown);

class EditorWysywig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: "Jesuisuntitle",
      isPreview: false
    };
  }

  onChangeEditor(e) {
    this.setState({
      editorState: e
    });
  }

  _onBold() {
    this.onChangeEditor(
      RichUtils.toggleInlineStyle(this.state.editorState, "BOLD")
    );
  }

  _onItalic() {
    this.onChangeEditor(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  }

  _onUnderline() {
    this.onChangeEditor(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  }

  _onCode() {
    this.onChangeEditor(
      RichUtils.toggleInlineStyle(this.state.editorState, "CODE")
    );
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
    console.log(e.target.value);
  }

  _onPreview() {
    this.setState(prevState => ({
      isPreview: !prevState.isPreview
    }));
  }

  render() {
    console.log(this.state.isPreview);
    console.log(stateToMarkdown(this.state.editorState.getCurrentContent()));
    console.log(stateToHTML(this.state.editorState.getCurrentContent()));
    return (
      <ContainerApp>
        <Segment>
          <h2>Editor</h2>
          <p>You can edit the content of your light entry, right here:</p>
          <Title
            onChange={e => this.onChangeTitle(e)}
            value={this.state.title}
          />
          {!this.state.isPreview ? (
            <Body>
              <BarButton>
                <Popup
                  trigger={
                    <ToolButton specialLeft onClick={this._onBold.bind(this)}>
                      <Icon name="bold" />
                    </ToolButton>
                  }
                  content="Bold"
                />
                <Popup
                  trigger={
                    <ToolButton onClick={this._onItalic.bind(this)}>
                      <Icon name="italic" />
                    </ToolButton>
                  }
                  content="Italic"
                />
                <Popup
                  trigger={
                    <ToolButton onClick={this._onUnderline.bind(this)}>
                      <Icon name="underline" />
                    </ToolButton>
                  }
                  content="Underline"
                />

                <Popup
                  trigger={
                    <ToolButton onClick={this._onCode.bind(this)}>
                      <Icon name="code" />
                    </ToolButton>
                  }
                  content="Code"
                />

                <Popup
                  inverted
                  trigger={
                    <ToolButton
                      specialRight
                      floated="right"
                      onClick={this._onPreview.bind(this)}
                    >
                      <Icon name="wordpress forms" />
                    </ToolButton>
                  }
                  content="Preview Markdown ✔"
                />
              </BarButton>
              <Editor
                editorState={this.state.editorState}
                onChange={e => this.onChangeEditor(e)}
                placeholder="Write the story that you love."
              />
            </Body>
          ) : (
            <Markdown
              input={stateToMarkdown(
                this.state.editorState.getCurrentContent()
              )}
            >
              {" "}
              <Popup
                inverted
                trigger={
                  <ToolButton
                    specialRight
                    floated="right"
                    onClick={this._onPreview.bind(this)}
                  >
                    <Icon name="edit" style={{ margin: 0 }} />
                  </ToolButton>
                }
                content="Preview Editor ✎"
              />
            </Markdown>
          )}
          <Date value="12/07/1990 10:20:10" />
          <Button>
            <Icon style={{ margin: 0 }} name="checkmark" color="green" />
          </Button>
          <Button>
            <Icon style={{ margin: 0 }} name="delete" color="red" />
          </Button>
        </Segment>
      </ContainerApp>
    );
  }
}

export default EditorWysywig;
