import { ADD_TIME, ADD_MOVEMENT, ADD_LEVEL, ADD_EQUIPMENT, ADD_TRAINING_TYPE } from '../constants/action-types';

const initialState = {
  wizardValues: {
    time: 18,
    equipment: null,
    movement: null,
    level: null,
    trainingType: null,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EQUIPMENT:
      return {
        ...state,
        wizardValues: {
          ...state.wizardValues,
          equipment: action.payload,
        },
      };
    case ADD_MOVEMENT:
      return {
        ...state,
        wizardValues: {
          ...state.wizardValues,
          movement: action.payload,
        },
      };
    case ADD_LEVEL:
      return {
        ...state,
        wizardValues: {
          ...state.wizardValues,
          level: action.payload,
        },
      };
    case ADD_TIME:
      return {
        ...state,
        wizardValues: {
          ...state.wizardValues,
          time: action.payload,
        },
      };
    case ADD_TRAINING_TYPE:
      return {
        ...state,
        wizardValues: {
          ...state.wizardValues,
          trainingType: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;