import React, { Children } from "react";
import styled from "styled-components";
import { ConfigColor as color } from "./Config";

const HeaderC = styled.div`
  width: 100%;
  background-color: ${color.greyClear};
  height: 4em;
  font-family: "Russo One", sans-serif;
  position: relative;
  box-shadow: 0px 1px 4px #828c99;
`;

export const VerticalAlign = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${prop => prop.right};
  left: ${prop => prop.left};
`;

export const Header = ({ children }) => <HeaderC>{children}</HeaderC>;
