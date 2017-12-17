import React from "react";
import styled from "styled-components";

import { ConfigColor as color } from "./Config";

export const Segment = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid ${color.greyClear};
  border-radius: 5px;
  font-family: "Inconsolata", monospace;
  font-size: ${prop => prop.size};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
`;
