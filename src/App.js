import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './App.css';

import TimeForm from './forms/wizard/time';
import EquipmentForm from './forms/wizard/equipment';
import FitnessLevelForm from './forms/wizard/level';
import MovementTypeForm from './forms/wizard/movement';
import { getFormat } from './data';
import { goBack } from './actions';

const mapStateToProps = (state) => {
  return {
    wizard: state.wizard
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchGoBack: () => dispatch(goBack()),
})

const Back = ({ goBack }) => (
  <span onClick={() => goBack()}>{'<'}</span>
)

const renderWizard = step => {
  switch (step) {
    case 'time': return (
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

const App = (props) => {
  const { dispatchGoBack, wizard: { currentStep, prevStep, steps, values } } = props;
  const backTrackable = prevStep && steps.length > 1 && currentStep !== 'createWorkout';

  const subformat = values.time && getFormat(values.time);
  console.log(subformat);

  return (
    <Layout>
      <Wrapper>
        {backTrackable && <Back goBack={dispatchGoBack} />}
        {renderWizard(currentStep)}
      </Wrapper>
    </Layout>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

const Layout = styled.div`
      border: 1px solid red;
      display: flex;
      justify-content: center;
      padding: 12px;
    `;

const Wrapper = styled.div`
      border: 1px solid blue;
`;