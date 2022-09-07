import styled from 'styled-components';
import { device } from '../../style/device';

export const ShareSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2.5rem;

  p{
    font-size: 14px;
    text-align: center;
    color: #888888;
    padding: 0 10px;
  }

  .shareForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .inputsContainer{
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .inputsContainer div{
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .btn{
    margin-top: 1rem;
  }

  @media ${device.tablet} {
    .inputsContainer{
      flex-direction: row
    }
  }
`;
