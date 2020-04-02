import React, { useState, useEffect, useRef } from 'react';
import PromotionButtons from './PromotionButtons';
import PromotionItem from './PromotionItem';
import styled from 'styled-components';

const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerPromotion = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

// Hook
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

function Promotions() {
  const [hasError, setErrors] = useState(false);
  const [promotions, setPromotions] = useState([]);
  const [disabled, setDisabled] = useState(true);

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

  const prevPromos = usePrevious(promotions);

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
      buttonDisabled(disabled);
      setPromotions(prevPromos);
    } else {
      buttonDisabled(disabled);
      setPromotions(promotionsNewUsers());
    }
  }

  function buttonDisabled(state) {
    state = !state;
    setDisabled(state);
  }

  return (
    <>
      <WrapperButtons>
        <PromotionButtons
          disabled={disabled}
          value={'all-promotions'}
          buttonTitle={'All Promotions'}
          refetchData={refetchData}
        ></PromotionButtons>
        <PromotionButtons
          disabled={!disabled}
          value={'new-users'}
          buttonTitle={'New Users'}
          refetchData={refetchData}
        ></PromotionButtons>
      </WrapperButtons>
      <ContainerPromotion>
        {promotions.map(promotion => (
          <PromotionItem
            key={promotion.id}
            name={promotion.name}
            description={promotion.description}
            heroImageUrl={promotion.heroImageUrl}
            onlyNewCustomers={promotion.onlyNewCustomers}
            termsAndConditionsButtonText={
              promotion.termsAndConditionsButtonText
            }
            joinNowButtonText={promotion.joinNowButtonText}
            sequence={promotion.sequence}
          ></PromotionItem>
        ))}
      </ContainerPromotion>
    </>
  );
}

export default Promotions;
