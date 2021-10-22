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
    margin: 0 6rem 10px 6rem;
    height: 25vh;
    background: #e7feff;
    border-radius: 2px;
  }
  div {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    margin: 0 6rem 0 6rem;
    height: 30vh;
    div {
      h2 {
        width: 20rem;
      }
      width: 100%;
      margin: 0;
      display: flex;
      justify-content: flex-start;
    }
  }
`;

export const ContainerPatients = styled.section`
  margin-left: 5rem;

  div {
    background: #e7feff;
    display: flex;
    align-items: flex-start;
    justify-content: space-between !important;
    text-align: center;
    height: 4rem;
    width: 40rem !important;
    border-bottom: 1px solid #d3d3d3;
    border-top: 1px solid #d3d3d3;
    h4 {
      width: 5rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p {
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 5rem;
    }
  }
  span {
    height: 3rem !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
  }
`;
