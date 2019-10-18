import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addTime } from '../../actions';
import Button from '../../components/Button';
import Input from '../../components/Input';

const mapDispatchToProps = dispatch => ({
  dispatchAddTime: time => dispatch(addTime(time)),
});

const TimeForm = ({ dispatchAddTime }) => {
  const [input, setInput] = useState('');
  const handleChange = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    dispatchAddTime(input);
  }

  return (
    <StyledForm onSubmit={e => handleSubmit(e)}>
      <Input type='number' label='Enter a time domain' handleChange={handleChange} />
      <Button copy='Submit' type='submit' />
    </StyledForm>
  )
}

export default connect(null, mapDispatchToProps)(TimeForm);

const LIME = '#A4C639';
const ORANGE = '#EA4335';
const TURQUOISE = '#08e8de';

const StyledForm = styled.form`
  border: 1px solid ${TURQUOISE};
  border-radius: 3px;
  display: flex;
  align-items: flex-end;
`;