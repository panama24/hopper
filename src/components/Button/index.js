import React from 'react';
import styled from 'styled-components';

const Button = ({ copy, type }) => (
  <Wrapper>
    <StyledButton type={type}>{copy}</StyledButton>
  </Wrapper>
);

export default Button;

const LIME = '#A4C639';
const Wrapper = styled.div`
  height: 42px;
  width: 100px;
  padding-bottom: 24px;
`;

const StyledButton = styled.button`
  background: ${LIME};
  height: 48px;
  width: 100%;
  color: white;
  font-size: 16px;
`;