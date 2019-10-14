import { ADD_TIME, ADD_MOVEMENT, ADD_LEVEL, ADD_EQUIPMENT, ADD_TRAINING_TYPE } from '../constants/action-types';

const addEquipment = payload => {
  return {
    type: ADD_EQUIPMENT,
    payload,
  }
};

const addLevel = payload => {
  return {
    type: ADD_LEVEL,
    payload,
  }
};

const addMovement = payload => {
  return {
    type: ADD_MOVEMENT,
    payload,
  }
};

const addTime = payload => {
  return {
    type: ADD_TIME,
    payload,
  }
};

const addTrainingType = payload => {
  return {
    type: ADD_TRAINING_TYPE,
    payload,
  }
};

export {
  addEquipment,
  addLevel,
  addMovement,
  addTime,
  addTrainingType,
}