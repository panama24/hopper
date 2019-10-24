import { getMovements, getMovementSequence, getRange } from ''
import { random } from './random';
import MOVEMENTS from '../data/movements';
import { MOD, SHORT } from '../constants/types';

// calculate amount based on duration/time
const addConstantTask = () => ({ movement: 'run', task: 'distance', amount: '400m' });

const generateAscLadder = (duration, equipment) => {
  let constantTask, count, movements, repScheme, sequence;
  switch (duration) {
    case SHORT:
      count = random([1, 2, 3]);
      constantTask = count === 1 ? addConstantTask() : null;
      sequence = getMovementSequence(equipment, count);
      movements = getMovements(MOVEMENTS, sequence);
      repScheme = getRange(random([1, 2, 3, 4, 5]), 3);
      break;
    case MOD:
      count = random([1, 2, 3]);
      constantTask = count === 1 ? addConstantTask() : null;
      sequence = getMovementSequence(equipment, count);
      movements = getMovements(MOVEMENTS, sequence);
      repScheme = getRange(random([3, 4, 5, 6, 10], 3));
      break;
    default:
      count = random([2, 3, 4]);
      constantTask = null;
      sequence = getMovementSequence(equipment, count);
      movements = getMovements(MOVEMENTS, sequence);
      repScheme = getRange(random([4, 5, 6, 7, 8, 9, 10, 12, 20], 3));
      break;
  }
  return {
    constantTask,
    movements,
    repScheme,
  }
};

const generateDescLadder = (duration) => {
  // choose number of movements
  // choose movements
  const movements = [];

  let repScheme;
  switch (duration) {
    case SHORT:
      repScheme = ['1-2-3...', '2-4-6-8...', '3-6-9...', '5-7-9...'];
      break;
    case MOD:
      repScheme = ['1-2-3...', '2-4-6-8...', '3-6-9...', '5-7-9...'];
      break;
    default:
      repScheme = ['5-10-15...'];
      break;
  }
  return {
    repScheme,
    movements,
  }
};

export {
  generateAscLadder,
  generateDescLadder,
}