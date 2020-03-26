import React from 'react';
import styled from 'styled-components';

const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
`;

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

function Button() {
  return (
    <WrapperButtons>
      <Buttons>All Promotions</Buttons>
      <Buttons>New Customers</Buttons>
    </WrapperButtons>
  );
}

export default Button;
