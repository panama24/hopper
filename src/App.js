import React, { useState } from 'react';
import './App.css';

const initialState = 'time';
const wizardStateMachine = {
  time: {
    INPUT: 'equipment',
  },
  equipment: {
    DUMBBELL: 'trainingType',
    BARBELL: 'trainingType',
    KETTLEBELL: 'trainingType',
    NONE: 'bodyweightMovementType',
  },
  bodyweightMovementType: {
    TYPE: 'trainingType',
  },
  trainingType: {
    TYPE: 'fitnessLevel',
  },
  fitnessLevel: {
    LEVEL: 'createWorkout',
  },
};

const TrainingTypeForm = ({ transition }) => {
  const [input, setInput] = useState('');
  const handleSelect = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
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

const MovementTypeForm = ({ transition }) => {
  const [input, setInput] = useState('');
  const handleSelect = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
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

const EquipmentForm = ({ transition }) => {
  const [input, setInput] = useState('');
  const handleSelect = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    transition({ type: input });
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

const FitnessLevelForm = ({ transition }) => {
  const [input, setInput] = useState('');
  const handleSelect = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
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

const TimeForm = ({ transition }) => {
  const [input, setInput] = useState('');
  const handleChange = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    transition({ type: 'INPUT', payload: input });
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>For how long would you like to workout?</label>
      <input type='number' onChange={e => handleChange(e)}></input>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const [wizardState, setWizardState] = useState(initialState);

  const command = (nextState, action) => {
    switch (nextState) {
      case 'equipment':
        return 'equipment';
      case 'bodyweightMovementType':
        return 'bodyweightMovementType';
      case 'trainingType':
        return 'trainingType';
      case 'fitnessLevel':
        return 'fitnessLevel';
      default:
        break;
    }
  }

  const transition = action => {
    const currentWizardState = wizardState;
    console.log('action:', action, 'curr:', currentWizardState)
    const nextWizardState = wizardStateMachine[currentWizardState][action.type];
    console.log(wizardStateMachine[currentWizardState][action.type])

    if (nextWizardState) {
      const nextState = command(nextWizardState, action);
      setWizardState(nextState);
    }
  };

  const renderWizard = state => {
    console.log('state', state)
    if (state === 'time') {
      return (
        <TimeForm transition={transition} />
      )
    }
    if (state === 'equipment') {
      console.log('here')
      return (
        <EquipmentForm transition={transition} />
      )
    }
    if (state === 'bodyweightMovementType') {
      return (
        <MovementTypeForm transition={transition} />
      )
    }
    if (state === 'trainingType') {
      return (
        <TrainingTypeForm transition={transition} />
      )
    }

    if (state === 'fitnessLevel') {
      return <FitnessLevelForm transition={transition} />
    }
  }

  return (
    <div className="App">
      {renderWizard(wizardState)}
    </div>
  );
}

export default App;
