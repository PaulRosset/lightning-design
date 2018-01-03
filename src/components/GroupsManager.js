import React, { Fragment } from "react";
import { Loader, Icon, Button, Divider } from "semantic-ui-react";
import {
  AdditionalInfos,
  Input,
  InputContainer,
  ContainerGroup,
  Alert,
  Title6,
  ContainerButton,
  ContainerListGroups
} from "./StyleComponents/Settings";

export const GroupsManager = props => (
  <AdditionalInfos display={props.show ? "block" : "none"}>
    <p>
      Enter the group name:
      <Icon
        name="remove"
        link
        style={{ float: "right" }}
        onClick={() => props.exitGroup()}
      />
    </p>
    <InputContainer>
      <b>Group Name:</b>{" "}
      <Input
        value={props.groupName}
        onChange={e => props.onChangeGroup(e)}
        type="text"
        size="85"
      />
      {props.showIsExistingGroup || props.groupName ? (
        <Icon
          name={props.isExistGroup ? "remove" : "checkmark"}
          color={props.isExistGroup ? "red" : "green"}
        />
      ) : null}
    </InputContainer>
    <Button
      disabled={!!props.isExistGroup || !props.groupName}
      onClick={() => this.addGroupToDataBase()}
    >
      Add
    </Button>
    <Title6>Group manager:</Title6>
    <ContainerListGroups>
      {props.groups.map((value, index) => (
        <Fragment key={index}>
          {index === 0 || index === props.groups.length ? null : <Divider />}
          <ContainerGroup>
            <Icon name="linkify" />
            {value.name}
            <ContainerButton floated="right">
              <Icon
                name="remove"
                link
                color="red"
                onClick={() =>
                  props.deleteGroup({ id: value.id, name: value.name })
                }
              />
            </ContainerButton>
          </ContainerGroup>
        </Fragment>
      ))}
    </ContainerListGroups>
  </AdditionalInfos>
);
