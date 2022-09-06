import styled from 'styled-components';

export const Button = styled.button`
  width: ${(props) => (props?.width ? `${props?.width}px` : '160px')};
  height: ${(props) => (props?.height ? `${props?.height}px` : '40px')};
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 6px #00000029;
  border: 1px solid #707070;
  border-radius: 4px;
  opacity: 1;
  cursor: pointer;

  color: #888888;
  font-size: ${(props) => (props?.fontSize ? `${props?.fontSize}px` : '14px')};
`;
