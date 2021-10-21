import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    p {
      font-weight: 100;
      font-size: 30px;
    }
    padding-left: 10px;
    margin: 0 6rem 0 6rem;
    height: 25vh;
    background: #e7feff;
    border-radius: 2px;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    margin: 0 6rem 0 6rem;
    height: 30vh;
    div {
      h2 {
        width: 16rem;
      }
      width: 100%;
      margin: 0;
      display: flex;
      justify-content: flex-start;
    }
  }
`;
