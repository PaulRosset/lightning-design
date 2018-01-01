import React from "react";
import styled from "styled-components";

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
  border-radius: ${prop => prop.radius};
  box-shadow: ${prop => prop.shadow};
  float: ${prop => prop.floated};
  vertical-align: ${prop => prop.verticalAlign};
`;

export const Span = styled.span`
  float: ${prop => prop.floated};
`;

export const SpanToolTip = styled.div`
  display: inline-block;
  color: green;
  margin-left: 5px;
`;

export const ContainerApp = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2em 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${prop => prop.direction};
`;

export const FlexChildrenName = styled.span`
  align-self: center;
  margin: 0 10px;
`;

export const ContainerStatic = styled.div`
  width: 100%;
  padding: 75px;
  margin-top: 60px;
  text-align: center;
  color: white;
  background-color: ${props => props.color};
`;

export const ContainerViewer = styled.div`
  margin: 15px 0;
  padding: 50px;
  border: 2 solid ${ConfigColor.greyClear};
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
`;
