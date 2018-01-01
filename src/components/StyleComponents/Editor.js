import React from "react";
import styled from "styled-components";
import { Input } from "semantic-ui-react";
import { ConfigColor as color } from "./Config";

const InputContainer = styled.div`
  margin: 30px 10px;
`;

export const ContainerMarkdown = styled.div`
  width: 100%;
  padding: 0;
`;

const ContainerWysiwig = styled.div`
  margin: 30px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px 1px rgba(0, 0, 0, 0.16);
  border-top: solid 5px ${color.greyBlack};
  border-radius: 5px;
`;

const Bar = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px 1px rgba(0, 0, 0, 0.16);
`;

export const ToolButton = styled.button`
  width: 38px;
  height: 38px;
  background: transparent;
  color: ${color.greyBlack};
  cursor: pointer;
  border: 0;
  outline: 0;
  margin-left: ${prop => (prop.specialLeft ? "5px" : "0")};
  margin-right: ${prop => (prop.specialRight ? "5px" : "0")};
  float: ${prop => prop.floated};

  &:hover {
    background-color: ${color.greyClear};
  }
`;

export const Title = props => (
  <InputContainer>
    <Input
      placeholder="Title"
      label="Title"
      onChange={e => props.onChange(e)}
      value={props.value}
    />
  </InputContainer>
);

export const BarButton = ({ children }) => <Bar>{children}</Bar>;

export const Body = props => (
  <ContainerWysiwig>{props.children}</ContainerWysiwig>
);

export const Date = props => (
  <InputContainer>
    <Input disabled label="Date" value={props.value} />
  </InputContainer>
);
