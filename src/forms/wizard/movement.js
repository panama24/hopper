import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovement } from '../../actions';

const mapDispatchToProps = dispatch => ({
  dispatchAddMovement: movement => dispatch(addMovement(movement)),
});

const MovementTypeForm = ({ dispatchAddMovement, transition }) => {
  const [input, setInput] = useState('');
  const handleSelect = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    dispatchAddMovement(input);
    transition({ type: 'TYPE', payload: input });
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <select onChange={handleSelect} value={input}>
        <option value='BODYWEIGHT'>BODYWEIGHT</option>
        <option value='CARDIO'>CARDIO</option>
        <option value='MIX'>MIX</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default connect(null, mapDispatchToProps)(MovementTypeForm);