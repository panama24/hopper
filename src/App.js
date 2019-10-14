import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';

import TimeForm from './forms/wizard/time';
import EquipmentForm from './forms/wizard/equipment';
import FitnessLevelForm from './forms/wizard/level';
import MovementTypeForm from './forms/wizard/movement';
import TrainingTypeForm from './forms/wizard/training';

const mapStateToProps = state => {
  console.log('STATE:', state)
  return state;
};

const initialState = 'equipment';
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

const App = (props) => {
  const [wizardState, setWizardState] = useState(initialState);
  const [userData, setUserData] = useState({});

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
    const nextWizardState = wizardStateMachine[currentWizardState][action.type];

    if (nextWizardState) {
      const nextState = command(nextWizardState, action);
      setWizardState(nextState);
    }
  };

  const renderWizard = state => {
    if (state === 'time') {
      return (
        <TimeForm transition={transition} />
      )
    }
    if (state === 'equipment') {
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
    return (
      <div>NO MORE FORMS</div>
    )
  }

  console.log(props)
  return (
    <div className="App">
      {renderWizard(wizardState)}
    </div>
  );
}

export default connect(mapStateToProps, null)(App);