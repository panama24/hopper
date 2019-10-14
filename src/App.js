import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import TimeForm from './forms/wizard/time';
import EquipmentForm from './forms/wizard/equipment';
import FitnessLevelForm from './forms/wizard/level';
import MovementTypeForm from './forms/wizard/movement';
import TrainingTypeForm from './forms/wizard/training';

const mapStateToProps = (state) => {
  return {
    wizard: state.wizard
  };
};

const App = (props) => {
  const renderWizard = step => {
    if (step === 'time') {
      return (
        <TimeForm />
      )
    }
    if (step === 'equipment') {
      return (
        <EquipmentForm />
      )
    }
    if (step === 'bodyweightMovementType') {
      return (
        <MovementTypeForm />
      )
    }
    if (step === 'trainingType') {
      return (
        <TrainingTypeForm />
      )
    }

    if (step === 'fitnessLevel') {
      return <FitnessLevelForm />
    }
    return (
      <div>NO MORE FORMS</div>
    )
  }

  console.log(props)
  const { wizard: { currentStep } } = props;
  return (
    <div className="App">
      {renderWizard(currentStep)}
    </div>
  );
}

export default connect(mapStateToProps, null)(App);