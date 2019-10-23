import { ADD_TIME, ADD_MOVEMENT, ADD_LEVEL, ADD_EQUIPMENT, GO_BACK } from '../constants/action-types';

const initialStep = 'time';
const initialState = {
  wizard: {
    currentStep: initialStep,
    prevStep: null,
    steps: [initialStep],
    values: {
      time: null,
      equipment: null,
      movement: null,
      level: null,
      trainingType: null,
    },
    wizardState: {
      ADD_TIME: {
        NEXT: 'equipment',
      },
      ADD_EQUIPMENT: {
        WEIGHTED: 'level',
        BW: 'movement',
      },
      ADD_MOVEMENT: {
        TYPE: 'level',
      },
      ADD_LEVEL: {
        LEVEL: 'createWorkout',
      },
    },
  }
};

const rootReducer = (state = initialState, action) => {
  const prevStep = state.wizard.steps.length > 0 ? state.wizard.steps[state.wizard.steps.length - 1] : null;
  switch (action.type) {
    case ADD_EQUIPMENT:
      const key = action.payload === 'none' ? 'BW' : 'WEIGHTED';
      return {
        ...state,
        wizard: {
          ...state.wizard,
          values: {
            ...state.wizard.values,
            equipment: action.payload,
          },
          currentStep: state.wizard.wizardState[action.type][key],
          prevStep,
          steps: [
            ...state.wizard.steps,
            state.wizard.wizardState[action.type][key],
          ]
        },
      };
    case ADD_MOVEMENT:
      return {
        ...state,
        wizard: {
          ...state.wizard,
          values: {
            ...state.wizard.values,
            movement: action.payload,
          },
          currentStep: state.wizard.wizardState[action.type]['TYPE'],
          prevStep,
          steps: [
            ...state.wizard.steps,
            state.wizard.wizardState[action.type]['TYPE'],
          ]
        },
      };
    case ADD_LEVEL:
      return {
        ...state,
        wizard: {
          ...state.wizard,
          values: {
            ...state.wizard.values,
            level: action.payload,
          },
          currentStep: state.wizard.wizardState[action.type]['LEVEL'],
          prevStep,
          steps: [
            ...state.wizard.steps,
            state.wizard.wizardState[action.type]['LEVEL'],
          ]
        },
      };
    case ADD_TIME:
      return {
        ...state,
        wizard: {
          ...state.wizard,
          values: {
            ...state.wizard.values,
            time: Number(action.payload),
          },
          currentStep: state.wizard.wizardState[action.type]['NEXT'],
          prevStep,
          steps: [
            ...state.wizard.steps,
            state.wizard.wizardState[action.type]['NEXT'],
          ]
        },
      };
    case GO_BACK:
      const back = state.wizard.steps.slice(0, state.wizard.steps.length - 1);
      return {
        ...state,
        wizard: {
          ...state.wizard,
          currentStep: back[back.length - 1],
          prevStep,
          steps: back
        },
      };
    default:
      return state;
  }
};

export default rootReducer;