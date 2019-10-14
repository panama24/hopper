import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTrainingType } from '../../actions';

const mapDispatchToProps = dispatch => ({
  dispatchAddTrainingType: type => dispatch(addTrainingType(type)),
});

const TrainingTypeForm = ({ dispatchAddTrainingType, transition }) => {
  const [input, setInput] = useState('');
  const handleSelect = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    dispatchAddTrainingType(input);
    transition({ type: 'TYPE', payload: input });
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <select onChange={handleSelect} value={input}>
        <option value='ENDURANCE'>ENDURANCE</option>
        <option value='STRENGTH'>STRENGTH</option>
        <option value='POWER'>POWER</option>
        <option value='SPEED'>SPEED</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default connect(null, mapDispatchToProps)(TrainingTypeForm);