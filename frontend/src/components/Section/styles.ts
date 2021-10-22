import styled from "styled-components";

export const Container = styled.section`
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
    justify-content: space-between;
    align-items: center;
  }
`;
