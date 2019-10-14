
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEquipment } from '../../actions';

const mapDispatchToProps = dispatch => ({
  dispatchAddEquipment: equipment => dispatch(addEquipment(equipment)),
});

const EquipmentForm = ({ dispatchAddEquipment }) => {
  const [input, setInput] = useState('');
  const handleSelect = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    dispatchAddEquipment(input);
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <select onChange={handleSelect} value={input}>
        <option value='DUMBBELL'>DUMBBELL</option>
        <option value='BARBELL'>BARBELL</option>
        <option value='NONE'>NONE</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default connect(null, mapDispatchToProps)(EquipmentForm);