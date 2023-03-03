import styled from 'styled-components';

const CardContainer = styled.div`
  padding: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Card = () => {
  return <CardContainer>Card</CardContainer>;
};

export default Card;
