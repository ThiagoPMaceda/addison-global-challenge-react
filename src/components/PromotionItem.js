import React from 'react';
import styled from 'styled-components';

const PromotionWrapper = styled.div`
  margin-top: 25px;
  padding: 20px 35px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
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
  padding: 5px;
  width: 120px;
  font-size: 12px;
  color: #ffffff;
`;

function PromotionItem(props) {
  return (
    <PromotionWrapper key={props.id}>
      <ImgPromotion src={props.heroImageUrl}></ImgPromotion>
      <ContainerContent>
        <TitlePromotion>{props.name}</TitlePromotion>
        <DescriptionPromotion>{props.description}</DescriptionPromotion>
        <ContainerButtons>
          <ButtonPromotion>
            {props.termsAndConditionsButtonText}
          </ButtonPromotion>
          <ButtonPromotion> {props.joinNowButtonText}</ButtonPromotion>
        </ContainerButtons>
      </ContainerContent>
    </PromotionWrapper>
  );
}

export default PromotionItem;
