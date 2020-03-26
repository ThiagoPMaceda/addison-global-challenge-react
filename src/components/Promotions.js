import React, { useState, useEffect } from 'react';
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
  const [hasError, setErrors] = useState(false);
  const [promotions, setPromotions] = useState([]);

  async function fetchPromotions() {
    const res = await fetch('http://www.mocky.io/v2/5bc3b9cc30000012007586b7');
    res
      .json()
      .then(res => setPromotions(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchPromotions();
  }, []);

  return (
    <>
      {promotions.map(promotion => (
        <ContainerPromotion>
          <ImgPromotion src={promotion.heroImageUrl}></ImgPromotion>
          <ContainerContent>
            <TitlePromotion>{promotion.name}</TitlePromotion>
            <DescriptionPromotion>{promotion.description}</DescriptionPromotion>
            <ContainerButtons>
              <ButtonPromotion>
                {promotion.termsAndConditionsButtonText}
              </ButtonPromotion>
              <ButtonPromotion> {promotion.joinNowButtonText}</ButtonPromotion>
            </ContainerButtons>
          </ContainerContent>
        </ContainerPromotion>
      ))}
    </>
  );
}

export default Promotions;
