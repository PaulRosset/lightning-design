import React from "react";
import styled from "styled-components";
import _map from "lodash/map";

export const ConfigColor = {
  greyBlack: "#353535",
  greyVeryClear: "#828c99",
  greyClear: "#dfe7ef",
  red: "#f44336",
  activeRed: "#d32f2f"
};

export const Container = styled.div`
  width: ${prop => prop.width};
  display: flex;
`;

const Color = styled.div`
  font-family: "Inconsolata", monospace;
  padding: 1em;
  background-color: ${prop => prop.color};
  display: flex;
`;

export const ShowColor = () => (
  <Container>
    {Object.keys(ConfigColor).map((key, index) => (
      <Color key={index} color={ConfigColor[key]}>
        {ConfigColor[key]}
      </Color>
    ))}
  </Container>
);

export const Image = styled.img`
  height: ${prop => prop.height};
`;

export const ContainerApp = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2em 0;
`;
