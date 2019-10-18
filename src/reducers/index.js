import { ADD_TIME, ADD_MOVEMENT, ADD_LEVEL, ADD_EQUIPMENT, ADD_TRAINING_TYPE } from '../constants/action-types';

const initialState = {
  wizard: {
    currentStep: 'time',
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
        DUMBBELL: 'trainingType',
        BARBELL: 'trainingType',
        KETTLEBELL: 'trainingType',
        NONE: 'movement',
      },
      ADD_MOVEMENT: {
        TYPE: 'trainingType',
      },
      ADD_TRAINING_TYPE: {
        TYPE: 'level',
      },
      ADD_LEVEL: {
        LEVEL: 'createWorkout',
      },
    },
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EQUIPMENT:
      return {
        ...state,
        wizard: {
          ...state.wizard,
          values: {
            ...state.wizard.values,
            equipment: action.payload,
          },
          currentStep: state.wizard.wizardState[action.type][action.payload],
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
        },
      };
    case ADD_TIME:
      return {
        ...state,
        wizard: {
          ...state.wizard,
          values: {
            ...state.wizard.values,
            time: action.payload,
          },
          currentStep: state.wizard.wizardState[action.type]['NEXT']
        },
      };
    case ADD_TRAINING_TYPE:
      return {
        ...state,
        wizard: {
          ...state.wizard,
          values: {
            ...state.wizard.values,
            trainingType: action.payload,
          },
          currentStep: state.wizard.wizardState[action.type]['TYPE']
        },
      };
    default:
      return state;
  }
};

export default rootReducer;