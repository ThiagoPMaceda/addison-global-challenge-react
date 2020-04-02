import React from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
  padding: 10px;
  outline: none;
  background: ${props => (props.disabled === true ? '#adc5d9' : '#ffffff')};
  border: 1px solid #adc5d9;
  color: ${props => (props.disabled === true ? '#ffffff' : '#adc5d9')};
  width: 125px;
  text-align: center;
  margin-top: 15px;
  border-radius: 15px;
  &:hover {
    background: #adc5d9;
    color: #ffffff;
  }
`;

const PromotionButtons = ({ disabled, value, refetchData, buttonTitle }) => {
  return (
    <Buttons disabled={disabled} value={value} onClick={refetchData}>
      {buttonTitle}
    </Buttons>
  );
};

export default PromotionButtons;
