import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
    if (step === 'movement') {
      return (
        <MovementTypeForm />
      )
    }
    if (step === 'trainingType') {
      return (
        <TrainingTypeForm />
      )
    }

    if (step === 'level') {
      return <FitnessLevelForm />
    }
    return (
      <div>NO MORE FORMS</div>
    )
  }

  console.log(props)
  const { wizard: { currentStep } } = props;
  return (
    <div>
      <div>
        {renderWizard(currentStep)}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(App);