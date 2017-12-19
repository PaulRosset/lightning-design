import React from "react";
import { ContainerMarkdown } from "./StyleComponents/Editor";
import ReactMarkdown from "react-markdown";
import { Segment } from "semantic-ui-react";

export const Markdown = props => (
  <ContainerMarkdown className="markdown-body">
    <Segment style={{ minHeight: 100 }}>
      {props.children}
      <ReactMarkdown source={props.input} />
    </Segment>
  </ContainerMarkdown>
);
