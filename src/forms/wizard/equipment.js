
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
            value="dumbbell"
            name="dumbbell"
            key="dumbbell"
            onChange={e => handleChange(e)}
            checked={checkedItems.get('dumbbell')}
          />
          Dumbbell
        </label>
        <label>
          <input
            type="checkbox"
            value="barbell"
            name="barbell"
            key="barbell"
            onChange={e => handleChange(e)}
            checked={checkedItems.get('barbell')}
          />
          Barbell
        </label>
        <label>
          <input
            type="checkbox"
            value="kettlebell"
            name="kettlebell"
            key="kettlebell"
            onChange={e => handleChange(e)}
            checked={checkedItems.get('kettlebell')}
          />
          Kettlebell
        </label>
        <label>
          <input
            type="checkbox"
            value="oddObject"
            name="oddObject"
            key="oddObject"
            onChange={e => handleChange(e)}
            checked={checkedItems.get('oddObject')}
          />
          Odd Object
        </label>
        <label>
          <input
            type="checkbox"
            value="all"
            name="all"
            key="all"
            onChange={e => handleChange(e)}
            checked={checkedItems.get('all')}
          />
          All
        </label>
        <label>
          <input
            type="checkbox"
            value="none"
            name="none"
            key="none"
            onChange={e => handleChange(e)}
            checked={checkedItems.get('none')}
          />
          None
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default connect(null, mapDispatchToProps)(EquipmentForm);