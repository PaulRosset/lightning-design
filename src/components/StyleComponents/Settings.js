import styled from "styled-components";
import { Link } from "react-router-dom";

export const AdditionalInfos = styled.div`
  display: ${props => props.display};
  position: absolute;
  right: 10px;
  top: ${props => props.top}px;
  z-index: 100;
  padding: 10px;
  width: ${props => props.width};
  margin-top: 2px;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 4px;
  box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15);
  animation: ${props => props.anim} 0.8s;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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

export const Alert = styled.span`
  color: ${props => props.color};
`;

export const ContainerGroup = styled.div`
  margin: 5px;
`;

export const Title6 = styled.h6`
  margin: 5px 0;
  font-size: 14px !important;
`;

export const ContainerButton = styled.div`
  float: ${props => props.floated};
  margin-right: ${props => props.space}px;
`;

export const ContainerListGroups = styled.div`
  overflow-y: auto;
  max-height: 125px;
`;

export const Linked = styled(Link)`
  color: #000;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export const AdditionalInfosExport = styled(AdditionalInfos)`
  left: 150px;
  right: auto;
`;
