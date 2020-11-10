import styled from "styled-components";

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 24px;
  margin-left: 16px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 80px;
  background-color: #DADFEA;
  -webkit-transition: .4s;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    right: 62.5%;
    left: 5.36%;
    top: 12.5%;
    bottom: 12.5%;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14);
    -webkit-transition: .4s;
    transition: .4s;
  }
`;

export const InputCheck = styled.input`

  &:checked + ${Slider} {
    background-color: #0036AD;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14);
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(32px);
    -ms-transform: translateX(32px);
    transform: translateX(32px);
  }
`;