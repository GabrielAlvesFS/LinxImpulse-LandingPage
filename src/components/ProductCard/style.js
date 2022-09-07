import styled from 'styled-components';
import { device } from '../../style/device';

export const Card = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  .imageContainer{
    width: 170px;
    height: 130px;
  }

  .imageContainer img{
    width: 100%;
    height: 100%;
  }

  .infoContainer{
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .infoContainer .productName{
    font-size: 14px;
    text-align: left;
    color: #888888;
  }

  .infoContainer .desc{
    display: none;
    font-size: 12px;
    text-align: left;
    color: #888888;
  }

  .infoContainer .price, .oldPrice{
    font-size: 12px;
    text-align: left;
    color: #888888;
  }

  .infoContainer .newPrice{
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: #888888;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;

    .imageContainer{
      width: 200px;
      height: 150px;
    }

    .infoContainer .desc{
      display: inline;
    }
  }
`;
