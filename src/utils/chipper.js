import { getMovements, getMovementSequence } from './movements';
import { getRange } from './range';
import { random } from './random';
import MOVEMENTS from '../data/movements';
import { MOD, SHORT } from '../constants/types';

export const generateChipper = (duration, equipment, isAmrap) => {
  // each rep element maps to a different movement
  // const schemes = ['10-10-10', '10-20-30-40-50-60', '20-20-20', '30-30-30'];

  // !isAmrap = choosing reps has to take time into consideration
  let count, movements, repScheme, sequence;
  switch (duration) {
    case SHORT:
      count = random([1, 2, 3]);
      sequence = getMovementSequence(equipment, count);
      movements = getMovements(MOVEMENTS, sequence);
      repScheme = getRange(random([1, 2, 3, 4, 5]), 3);
      break;
    case MOD:
      count = random([1, 2, 3]);
      sequence = getMovementSequence(equipment, count);
      movements = getMovements(MOVEMENTS, sequence);
      repScheme = getRange(random([3, 4, 5, 6, 10], 3));
      break;
    default:
      count = random([2, 3, 4]);
      sequence = getMovementSequence(equipment, count);
      movements = getMovements(MOVEMENTS, sequence);
      repScheme = getRange(random([4, 5, 6, 7, 8, 9, 10, 12, 20], 3));
      break;
  }
  return {
    movements,
    repScheme,
  }
};