import React, { Component } from "react";
import { ContainerApp } from "./StyleComponents/Config";
import { Segment, Icon, Popup, Select } from "semantic-ui-react";
import {
  Editor,
  EditorState,
  RichUtils,
  /* convertFromRaw,
  convertToRaw, */
  ContentState
} from "draft-js";
// import { stateToHTML } from "draft-js-export-html";
import { stateToMarkdown } from "draft-js-export-markdown";
// import { stateFromMarkdown } from "draft-js-import-markdown";
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
import { submitNewEntry, updateEntry } from "./../store/actions/Entry";
import moment from "moment";
import { push } from "react-router-redux";

import "semantic-ui-css/semantic.min.css";

// From markdown to ContentState
//let contentState = stateFromMarkdown(markdown);

class EditorWysywig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      isPreview: false,
      title: ""
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
    const user = JSON.parse(localStorage.getItem("userData"));
    if (this.props.isNewEntry) {
      this.props.dispatch(
        submitNewEntry({
          title: this.state.title,
          content: this.state.editorState.getCurrentContent().getPlainText(),
          date: moment(),
          uid: user.id,
          login: user.login,
          visible: false,
          group: this.state.group
        })
      );
    } else {
      this.props.dispatch(
        updateEntry({
          id: this.props.id,
          title: this.state.title || this.props.data.title,
          content: this.state.editorState.getCurrentContent().getPlainText(),
          uid: user.id,
          login: user.login,
          group: this.state.group || this.props.data.group
        })
      );
    }
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
    this.props.dispatch(push("/dashboard"));
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

  groupChange(e, { value }) {
    this.setState({
      group: value
    });
  }

  render() {
    //console.log(this.state.isPreview);
    console.log(stateToMarkdown(this.state.editorState.getCurrentContent()));
    //console.log(stateToHTML(this.state.editorState.getCurrentContent()));
    console.log(this.state.editorState.getCurrentContent().getPlainText());
    return (
      <ContainerApp>
        <Segment loading={this.props.data.isLoading}>
          <h2>Editor</h2>
          <p>You can edit the content of your light entry, right here:</p>
          <Title
            onChange={e => this.onChangeTitle(e)}
            value={this.props.data.title || this.state.title}
          />
          <div style={{ margin: "0 10px" }}>
            {/* <div>Group:</div> */}
            <Select
              placeholder={
                this.state.isNewEntry || !this.props.data.group
                  ? "Enter a group"
                  : this.props.data.group
              }
              options={this.props.options}
              onChange={(e, values) => this.groupChange(e, values)}
            />
          </div>
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
