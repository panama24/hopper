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
    <Layout>
      <FormWrapper>
        {renderWizard(currentStep)}
      </FormWrapper>
    </Layout>
  );
}

export default connect(mapStateToProps, null)(App);
const LIME = '#A4C639';
const ORANGE = '#EA4335';
const TURQUOISE = '#08e8de';

const Layout = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  background: black;
  height: 364px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${LIME};
`;