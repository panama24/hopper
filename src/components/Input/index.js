import React from 'react';
import styled from 'styled-components';

const Input = ({ handleChange, label, type }) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    <StyledInput type={type} onChange={e => handleChange(e)}></StyledInput>
  </Wrapper>
)

export default Input;

const LIME = '#A4C639';
const ORANGE = '#EA4335';
const TURQUOISE = '#08e8de';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const Label = styled.label`
  font-size: 24px;
  color: ${TURQUOISE};
  margin-bottom: 12px;
`;

const StyledInput = styled.input`
  height: 42px;
  font-size: 24px;
  padding-left: 12px;

  &:focus {
    outline: 0;
  }

  ::-webkit-inner-spin-button{
      -webkit-appearance: none;
      margin: 0;
  }
  ::-webkit-outer-spin-button{
      -webkit-appearance: none;
      margin: 0;
  }
`;