import styled from 'styled-components';
import { device } from '../../style/device';

export const HelpSectionContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    padding: 15px;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;

    form {
      margin: 0;
      width: fit-content;
    }
  }

  @media ${device.laptop} {
    /* padding: 0; */
    gap: 8rem;
  }
`;

export const HelpTextContainer = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0px 20px;

  h2{
    font-size: 20px;
    color: #888888;
  }

  p{
    font-size: 12px;
    color: #888888;
  }

  .paragraphs{
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  @media ${device.tablet} {
    padding: 0;
  }
`;

export const HelpFormContainer = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;


  .radioContainer {
    width: 340px;
    color: #888888;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .radioContainer input{
    width: 15px;
    height: 15px;
  }

  .radioContainer :nth-child(2){
    margin-right: 50px;
  }
`;

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
