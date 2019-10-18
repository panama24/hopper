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
    <form onSubmit={e => handleSubmit(e)}>
      <label>Enter a time domain</label>
      <input type='number' onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default connect(null, mapDispatchToProps)(TimeForm);