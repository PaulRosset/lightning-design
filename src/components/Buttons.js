import React, { Fragment } from "react";
import { Confirm, Icon, Button } from "semantic-ui-react";

export const ButtonConfirm = props => (
  <Fragment>
    <Button onClick={() => props.showConfirm()}>
      <Icon style={{ margin: 0 }} name="checkmark" color="green" />
    </Button>
    <Confirm
      open={props.openConfirm}
      onCancel={() => props.onCancel()}
      onConfirm={() => props.onConfirm()}
    />
  </Fragment>
);

export const ButtonCancel = props => (
  <Fragment>
    <Button onClick={() => props.showConfirmCancel()}>
      <Icon style={{ margin: 0 }} name="delete" color="red" />
    </Button>
    <Confirm
      open={props.openDelete}
      onCancel={() => props.onCancelDelete()}
      onConfirm={() => props.onConfirmDelete()}
    />
  </Fragment>
);
