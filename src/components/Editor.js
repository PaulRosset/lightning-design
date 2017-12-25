import React, { Component } from "react";
import { ContainerApp } from "./StyleComponents/Config";
import { Segment, Icon, Popup, Button, Confirm } from "semantic-ui-react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
  ContentState
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
import { ButtonConfirm, ButtonCancel } from "./Buttons";
import { connect } from "react-redux";

import "semantic-ui-css/semantic.min.css";

// From markdown to ContentState
//let contentState = stateFromMarkdown(markdown);

class EditorWysywig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      isPreview: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data.content) {
      const initialState = ContentState.createFromText(this.props.data.content);
      this.setState({
        editorState: EditorState.createWithContent(initialState)
      });
    }
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

  onConfirm() {
    console.log("Confirmed");
  }

  onCancel() {
    this.setState({
      openConfirm: false
    });
    return;
  }

  showConfirm() {
    this.setState({
      openConfirm: true
    });
  }

  onConfirmDelete() {
    console.log("Deleted");
  }

  onCancelDelete() {
    this.setState({
      openDelete: false
    });
    return;
  }

  showConfirmCancel() {
    this.setState({
      openDelete: true
    });
  }

  render() {
    console.log(this.state.isPreview);
    console.log(stateToMarkdown(this.state.editorState.getCurrentContent()));
    console.log(stateToHTML(this.state.editorState.getCurrentContent()));
    return (
      <ContainerApp>
        <Segment loading={this.props.data.isLoading}>
          <h2>Editor</h2>
          <p>You can edit the content of your light entry, right here:</p>
          <Title
            onChange={e => this.onChangeTitle(e)}
            value={this.props.data.title}
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
          <Date value={this.props.data.date} />
          <ButtonConfirm
            openConfirm={this.state.openConfirm}
            showConfirm={() => this.showConfirm()}
            onCancel={() => this.onCancel()}
            onConfirm={() => this.onConfirm()}
          />
          <ButtonCancel
            openDelete={this.state.openDelete}
            showConfirmCancel={() => this.showConfirmCancel()}
            onCancelDelete={() => this.onCancelDelete()}
            onConfirmDelete={() => this.onConfirmDelete()}
          />
        </Segment>
      </ContainerApp>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  editorData: state.editorData
});

export default connect(mapStateToProps)(EditorWysywig);
