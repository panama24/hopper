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

const Back = () => (
  <span>{'<'}</span>
)

const Forward = () => (
  <span>{'>'}</span>
)

const App = (props) => {
  const renderWizard = step => {
    switch (step) {
      case 'time':
        return (
          <TimeForm />
        );
      case 'movement':
        return (
          <MovementTypeForm />
        );
      case 'equipment':
        return (
          <EquipmentForm />
        );
      case 'trainingType':
        return (
          <TrainingTypeForm />
        );
      case 'level':
        return (
          <FitnessLevelForm />
        );
      default:
        return (
          <div>NO MORE FORMS</div>
        )
    }
  }

  const { wizard: { currentStep } } = props;
  return (
    <Layout>
      <Wrapper>
        {renderWizard(currentStep)}
      </Wrapper>
    </Layout>
  );
}

export default connect(mapStateToProps, null)(App);

const Layout = styled.div`
      border: 1px solid red;
      display: flex;
      justify-content: center;
      padding: 12px;
    `;

const Wrapper = styled.div`
      border: 1px solid blue;
`;