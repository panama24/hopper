import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTime } from '../../actions';

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