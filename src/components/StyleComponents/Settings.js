import styled from "styled-components";

export const AdditionalInfos = styled.div`
  display: ${props => props.display};
  position: absolute;
  right: 10px;
  top: 180px;
  z-index: 100;
  width: 160px;
  padding: 10px;
  width: 45%;
  margin-top: 2px;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 4px;
  box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15);
`;

export const VisibleInfos = styled.div`
  color: ${props => props.color};
`;

export const ToolTip = styled.div``;

export const Input = styled.input`
  width: ${prop => prop.size}%;
  padding: 6px 8px;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  outline: none;
  border: 1px solid #d1d5da;
`;

export const InputContainer = styled.div`
  margin: 10px 0;
`;
