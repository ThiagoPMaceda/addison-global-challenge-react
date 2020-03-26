import React from 'react';
import styled from 'styled-components';

const ContainerPromotion = styled.div`
  margin-top: 25px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const ImgPromotion = styled.img`
  max-width: 100%;
`;

const ContainerContent = styled.div`
  background: #0477bf;
`;

const TitlePromotion = styled.h2`
  padding-top: 20px;
  text-align: center;
  font-size: 25px;
  color: #024059;
`;

const DescriptionPromotion = styled.p`
  padding: 20px;
  text-align: justify;
  font-size: 13px;
  color: #024059;
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
`;

const ButtonPromotion = styled.button`
  outline: none;
  text-align: center;
  background: #024059;
  border: 1px solid #024059;
  border-radius: 15px;
  padding: 8px;
  width: 140px;
  color: #ffffff;
`;

function Promotions() {
  return (
    <ContainerPromotion>
      <ImgPromotion src='https://via.placeholder.com/600x300'></ImgPromotion>
      <ContainerContent>
        <TitlePromotion>Promotion Ten</TitlePromotion>
        <DescriptionPromotion>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </DescriptionPromotion>
        <ContainerButtons>
          <ButtonPromotion>Terms & Conditions</ButtonPromotion>
          <ButtonPromotion>Join Now</ButtonPromotion>
        </ContainerButtons>
      </ContainerContent>
    </ContainerPromotion>
  );
}

export default Promotions;
