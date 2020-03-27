import React, { useState, useEffect } from 'react';
import PromotionButtons from './PromotionButtons';
import PromotionItem from './PromotionItem';
import styled from 'styled-components';

const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
`;

function Promotions() {
  const [hasError, setErrors] = useState(false);
  const [promotions, setPromotions] = useState([]);

  async function fetchAllPromotions() {
    const res = await fetch('http://www.mocky.io/v2/5bc3b9cc30000012007586b7');
    res
      .json()
      .then(res => setPromotions(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchAllPromotions();
  }, []);

  //Order by promotion sequence
  promotions.sort((a, b) =>
    a.sequence > b.sequence ? 1 : b.sequence > a.sequence ? -1 : 0
  );

  function promotionsNewUsers() {
    const newUsers = promotions.filter(promotion => {
      return promotion.onlyNewCustomers === true;
    });
    return newUsers;
  }

  function refetchData(event) {
    if (event.target.value === 'all-promotions') {
      fetchAllPromotions();
    } else {
      setPromotions(promotionsNewUsers());
    }
  }

  return (
    <>
      <WrapperButtons>
        <PromotionButtons
          value={'all-promotions'}
          buttonTitle={'All Promotions'}
          refetchData={refetchData}
        ></PromotionButtons>
        <PromotionButtons
          value={'new-users'}
          buttonTitle={'New Users'}
          refetchData={refetchData}
        ></PromotionButtons>
      </WrapperButtons>
      {promotions.map(promotion => (
        <PromotionItem
          key={promotion.id}
          name={promotion.name}
          description={promotion.description}
          heroImageUrl={promotion.heroImageUrl}
          onlyNewCustomers={promotion.onlyNewCustomers}
          termsAndConditionsButtonText={promotion.termsAndConditionsButtonText}
          joinNowButtonText={promotion.joinNowButtonText}
          sequence={promotion.sequence}
        ></PromotionItem>
      ))}
    </>
  );
}

export default Promotions;
