import styled from "styled-components";
import { ConfigColor as color } from "./Config";

export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
  border: 1px solid ${color.greyClear};
  font-size: 13px;
  font-family: "Russo One", sans-serif;
  color: ${color.greyVeryClear};
  float: ${prop => prop.floated};
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: white;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    color: ${color.greyBlack};
    transition: 0.5s;
  }
`;

export const Linked = styled.a`
  color: ${color.greyVeryClear};
  cursor: pointer;
  font-family: "Russo One", sans-serif;
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    color: ${color.greyBlack};
    transition: 0.3s;
  }
`;
