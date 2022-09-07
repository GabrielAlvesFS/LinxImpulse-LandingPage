import styled from 'styled-components';
import { device } from '../../style/device';

export const HeaderContainer = styled.header`
  width: 100%;
  height: fit-content;
`;

export const HeaderPolign = styled.div`
  width: 100%;
  height: 500px;
  background-color: #707070;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 48%);
`;

export const HeaderBox = styled.div`
  width: 100%;
  height: 400px;
  padding: 60px 14px 0px 14px;

  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 3rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeaderTitulos = styled.div`
  width: 100%;
  height: fit-content;
  color: #FFFFFF;
  opacity: 1;
  text-align: left;

  h2{
    font-size: 20px;
    line-height: 16px;
    font-weight: 400;
  }

  h1{
    font-size: 40px;
    line-height: 45px;
    font-weight: 500;
  }

  h3{
    font-size: 14px;
    margin-top: 10px;
    font-weight: 400;
  }

  @media ${device.tablet} {
    text-align: center;
  }
`;

export const HeaderButtonsContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.3rem;
`;
