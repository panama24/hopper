
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEquipment } from '../../actions';

const mapDispatchToProps = dispatch => ({
  dispatchAddEquipment: equipment => dispatch(addEquipment(equipment)),
});

const EquipmentForm = ({ dispatchAddEquipment }) => {
  const [checkedItems, setCheckedItems] = useState(new Map());
  const handleChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems(checkedItems.set(item, isChecked));
  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatchAddEquipment(Array.from(checkedItems.keys()));
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div>
        <label>
          <input
            type="checkbox"
            value="DUMBBELL"
            name="DUMBBELL"
            key="DUMBBELL"
            onChange={e => handleChange(e)}
            checked={checkedItems.get('DUMBBELL')}
          />
          Dumbbell
        </label>
        <label>
          <input
            type="checkbox"
            value="BARBELL"
            name="BARBELL"
            key="BARBELL"
            onChange={e => handleChange(e)}
            checked={checkedItems.get('BARBELL')}
          />
          Barbell
        </label>
        <label>
          <input
            type="checkbox"
            value="KETTLEBELL"
            name="KETTLEBELL"
            key="KETTLEBELL"
            onChange={e => handleChange(e)}
            checked={checkedItems.get('KETTLEBELL')}
          />
          Kettlebell
        </label>
        <label>
          <input
            type="checkbox"
            value="ODD_OBJECT"
            name="ODD_OBJECT"
            key="ODD_OBJECT"
            onChange={e => handleChange(e)}
            checked={checkedItems.get('ODD_OBJECT')}
          />
          Odd Object
        </label>
        <label>
          <input
            type="checkbox"
            value="NONE"
            name="NONE"
            key="NONE"
            onChange={e => handleChange(e)}
            checked={checkedItems.get('NONE')}
          />
          None
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default connect(null, mapDispatchToProps)(EquipmentForm);