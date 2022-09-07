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

  @media ${device.laptop}{
    .box{
      grid-template-columns: repeat(3, 200px);
    }
  }

  @media ${device.laptopL}{
    .boxi{
      grid-template-columns: repeat(4, 200px);
    }
  }
`;
