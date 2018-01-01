import React from "react";
import { Table, Icon, Checkbox, Popup, Confirm } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const takeFirstSentence = entry => entry.split("\n")[0];

export const DashTable = props => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Visible</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Content</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
    </Table.Header>
    <Table.Body id="polo">
      {props.data.map((entry, key) => (
        <Table.Row key={key}>
          <Table.Cell collapsing>
            <Checkbox
              slider
              checked={entry.visible}
              onClick={() => props.OnVisible(entry.id, entry.visible)}
            />
          </Table.Cell>
          <Table.Cell>{entry.title}</Table.Cell>
          <Table.Cell>
            <ReactMarkdown
              className="markdown"
              source={takeFirstSentence(entry.content)}
            />
          </Table.Cell>
          <Table.Cell>{entry.date}</Table.Cell>
          <Table.Cell>
            <Popup
              trigger={
                <Link to={`/viewer?id=${entry.id}`} style={{ color: "#000" }}>
                  <Icon
                    onClick={() => props.OnView(entry.id)}
                    name="settings"
                    link
                    bordered
                    circular
                  />
                </Link>
              }
              content="View the input"
            />
            <Popup
              trigger={
                <Link to={`/editor?id=${entry.id}`} style={{ color: "#000" }}>
                  <Icon
                    onClick={() => props.OnEdit(entry.id)}
                    name="edit"
                    link
                    bordered
                    circular
                  />
                </Link>
              }
              content="Edit the input"
            />
            <Confirm
              open={props.open}
              onCancel={() => props.cancelDelete()}
              onConfirm={() => props.confirmDelete()}
            />
            <Popup
              trigger={
                <Icon
                  onClick={() => props.OnDelete(entry.id)}
                  name="delete"
                  link
                  bordered
                  circular
                />
              }
              content="Delete the input"
            />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

DashTable.propTypes = {
  OnDelete: PropTypes.func,
  OnEdit: PropTypes.func
};
