import styled from 'styled-components';
import { device } from '../../style/device';

export const ProductStyle = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  .box{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  @media ${device.tablet} {
    .box{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 200px);
      justify-content: center;
    }
  }
`;
