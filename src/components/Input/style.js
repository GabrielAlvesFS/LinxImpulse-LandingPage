import styled from "styled-components";

export const Input = styled.input`
  width: ${(props) => (props?.width ? `${props?.width}px` : '340px')};
  height: ${(props) => (props?.height ? `${props?.height}px` : '30px')};
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  padding-left: 10px;
`
