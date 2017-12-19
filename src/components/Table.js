import React from "react";
import { Table, Icon, Checkbox, Popup } from "semantic-ui-react";

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
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Je Suis un titre</Table.Cell>
        <Table.Cell>Je suis un contenu...</Table.Cell>
        <Table.Cell>14 Decembre 2018</Table.Cell>
        <Table.Cell>
          <Popup
            trigger={<Icon name="edit" link bordered circular />}
            content="Edit the input"
          />
          <Popup
            trigger={<Icon name="delete" link bordered circular />}
            content="Delete the input"
          />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
