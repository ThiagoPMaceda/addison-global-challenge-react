import React from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
  padding: 10px;
  outline: none;
  background: #adc5d9;
  border: 1px solid #adc5d9;
  color: white;
  width: 125px;
  text-align: center;
  margin-top: 15px;
  border-radius: 15px;
`;

function PromotionButtons(props) {
  return (
    <Buttons value={props.value} onClick={props.refetchData}>
      {props.buttonTitle}
    </Buttons>
  );
}

export default PromotionButtons;
