import styled from "styled-components";

export const Container = styled.form`
  margin-right: 10rem;
  h3 {
    margin-bottom: 15px;
  }
  svg {
    border-radius: 8px;
    height: 20px;
    width: 30px;
    background: #d3d3d3;
  }
  input {
    border-radius: 4px;
    height: 20px;
    background: #e7feff;
    margin-left: 5px;
    transition: all ease 0.3s;
  }
  button {
    border-radius: 4px;
    background: #d3d3d3;
    font-weight: bold;
    height: 30px;
    width: 100px;
    cursor: pointer;
  }
`;

export const ContainerInputs = styled.div`
  height: 40px !important;
`;
