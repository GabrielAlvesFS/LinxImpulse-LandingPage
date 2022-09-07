import styled from 'styled-components';

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
`;
