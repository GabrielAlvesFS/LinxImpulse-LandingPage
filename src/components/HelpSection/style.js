import styled from "styled-components";

export const HelpSectionContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

export const HelpTextContainer = styled.div`
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
`
export const HelpFormContainer = styled.form`
  width: 100%;
  height: 500px;
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
`

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

