import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLevel } from '../../actions';

const mapDispatchToProps = dispatch => ({
  dispatchAddLevel: level => dispatch(addLevel(level)),
});

const FitnessLevelForm = ({ dispatchAddLevel, transition }) => {
  const [input, setInput] = useState('');
  const handleSelect = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    dispatchAddLevel(input);
    transition({ type: 'LEVEL', payload: input });
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <select onChange={handleSelect} value={input}>
        <option value='BEGINNER'>BEGINNER</option>
        <option value='INTERMEDIATE'>INTERMEDIATE</option>
        <option value='ADVANCED'>ADVANCED</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default connect(null, mapDispatchToProps)(FitnessLevelForm);