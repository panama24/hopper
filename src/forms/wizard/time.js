import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTime } from '../../actions';

const mapDispatchToProps = dispatch => ({
  dispatchAddTime: time => dispatch(addTime(time)),
});

const TimeForm = ({ dispatchAddTime, transition }) => {
  const [input, setInput] = useState('');
  const handleChange = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    dispatchAddTime(input);
    transition({ type: 'INPUT', time: input });
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>For how long would you like to workout?</label>
      <input type='number' onChange={e => handleChange(e)}></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default connect(null, mapDispatchToProps)(TimeForm);