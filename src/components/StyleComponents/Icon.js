import React from "react";
import styled from "styled-components";
import { ConfigColor as color } from "./Config";

const Iconed = styled.i`
  padding: ${prop => (prop.rounded || prop.bordered ? "0.8em" : "0")};
  font-size: 9px;
  border-radius: ${prop => (prop.rounded ? "50%" : "0")};
  line-height: 1;
  width: 2em !important;
  height: 2em;
  border: ${prop => (prop.bordered ? `2px solid ${color.greyClear}` : "0")};
  color: ${prop => prop.color || "#000"};
  cursor: ${prop => (prop.link ? "pointer" : "auto")};
  opacity: 0.7;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    transition: 0.2s;
  }
`;

export const Icon = ({ name, color, rounded, bordered, link }) => (
  <Iconed
    link={link}
    color={color}
    bordered={bordered}
    rounded={rounded}
    className={`fas fa-${name}`}
  />
);
