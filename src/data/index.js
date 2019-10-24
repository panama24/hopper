import { generateChipper } from '../utils/chipper';
import { generateAccumDistance, generateAccumLoad, generateMixedAccum } from '../utils/accumulate';
import { generateBookEnds } from '../utils/book-ends';
import { generateClassic } from '../utils/classic';
import { generateIncentive } from '../utils/incentive';
import { generateIncMovements, generateIncReps } from '../utils/increment';
import { generateEmom, generateFGB, generateTabata } from '../utils/intervals';
import { generateAscLadder, generateDescLadder } from '../utils/ladder';
import { generateMaxDistance, generateMaxReps } from '../utils/max';
import { generatePartition } from '../utils/partition';
import { generateRepsForTime } from '../utils/reps-for-time';

const SHORT_AMRAPS = [
  { name: 'ascLadder', weight: 0.3, method: generateAscLadder },
  { name: 'chipper', weight: 0.2, method: generateChipper },
  { name: 'maxDistance', weight: 0.1, method: generateMaxDistance },
  { name: 'maxReps', weight: 0.1, method: generateMaxReps },
  { name: 'classic', weight: 0.5, method: generateClassic },
];

const MOD_AMRAPS = [
  { name: 'ascLadder', weight: 0.2, method: generateAscLadder },
  { name: 'chipper', weight: 0.2, method: generateChipper },
  { name: 'incentive', weight: 0.05, method: generateIncentive },
  { name: 'maxDistance', weight: 0.05, method: generateMaxDistance },
  { name: 'maxReps', weight: 0.05, method: generateMaxReps },
  { name: 'classic', weight: 0.45, method: generateClassic },
];

const LONG_AMRAPS = [
  { name: 'ascLadder', weight: 0.4, method: generateAscLadder },
  { name: 'chipper', weight: 0.4, method: generateChipper },
  { name: 'partition', weight: 0.2, method: generatePartition },
];

const SHORT_INTS = [
  { name: 'emom', weight: 0.8, method: generateEmom },
  { name: 'tabata', weight: 0.2, method: generateTabata },
];

const MOD_INTS = [
  { name: 'fgb', weight: 0.2, method: generateFGB },
  { name: 'emom', weight: 0.5, method: generateEmom },
  { name: 'partition', weight: 0.2, method: generatePartition },
  { name: 'tabata', weight: 0.1, method: generateTabata },
];

const LONG_INTS = [
  { name: 'emom', weight: 0.25, method: generateEmom },
  { name: 'partition', weight: 0.5, method: generatePartition },
  { name: 'fgb', weight: 0.25, method: generateFGB },
];

const SHORT_ROUNDS = [
  { name: 'ascLadder', weight: 0.2, method: generateAscLadder },
  { name: 'chipper', weight: 0.05, method: generateChipper },
  { name: 'classic', weight: 0.5, method: generateClassic },
  { name: 'descLadder', weight: 0.2, method: generateDescLadder },
  { name: 'incentive', weight: 0.05, method: generateIncentive },
];

const MOD_ROUNDS = [
  { name: 'ascLadder', weight: 0.1, method: generateAscLadder },
  { name: 'bookEnds', weight: 0.1, method: generateBookEnds },
  { name: 'chipper', weight: 0.3, method: generateChipper },
  { name: 'classic', weight: 0.3, method: generateClassic },
  { name: 'descLadder', weight: 0.05, method: generateDescLadder },
  { name: 'incentive', weight: 0.05, method: generateIncentive },
  { name: 'partition', weight: 0.05, method: generatePartition },
  { name: 'increasingMovements', weight: 0.05, method: generateIncMovements },
  { name: 'increasingReps', weight: 0.05, method: generateIncReps },
];

const LONG_ROUNDS = [
  { name: 'ascLadder', weight: 0.1, method: generateAscLadder },
  { name: 'bookEnds', weight: 0.1, method: generateBookEnds },
  { name: 'chipper', weight: 0.3, method: generateChipper },
  { name: 'descLadder', weight: 0.1, method: generateDescLadder },
  { name: 'incentive', weight: 0.05, method: generateIncentive },
  { name: 'partition', weight: 0.1, method: generatePartition },
  { name: 'increasingMovements', weight: 0.15, method: generateIncMovements },
  { name: 'increasingReps', weight: 0.1, method: generateIncReps },
];

const SHORT_ACCUM = [
  { name: 'repsForTime', weight: 0.5, method: generateRepsForTime },
  { name: 'accumLoad', weight: 0.25, method: generateAccumLoad },
  { name: 'accumDistance', weight: 0.25, method: generateAccumDistance },
];

const MOD_ACCUM = [
  { name: 'repsForTime', weight: 0.3, method: generateRepsForTime },
  { name: 'accumLoad', weight: 0.1, method: generateAccumLoad },
  { name: 'accumDistance', weight: 0.1, method: generateAccumDistance },
  { name: 'mixedAccum', weight: 0.50, method: generateMixedAccum },
];

const LONG_ACCUM = [
  { name: 'repsForTime', weight: 0.3, method: generateRepsForTime },
  { name: 'accumLoad', weight: 0.1, method: generateAccumLoad },
  { name: 'accumDistance', weight: 0.1, method: generateAccumDistance },
  { name: 'mixedAccum', weight: 0.50, method: generateMixedAccum },
];

const WORKOUT_BUILDER = time => ({
  TIME_PRIORITY: {
    SHORT: {
      AMRAP: SHORT_AMRAPS,
      INTERVAL: time === 8 ? SHORT_INTS : ['emom'],
    },
    MOD: {
      AMRAP: MOD_AMRAPS,
      INTERVAL: time === 17 ? MOD_INTS : MOD_INTS.slice(0, 3),
    },
    LONG: {
      AMRAP: LONG_AMRAPS,
      INTERVAL: LONG_INTS,
    },
  },
  TASK_PRIORITY: {
    SHORT: {
      ROUND: SHORT_ROUNDS,
      ACCUMULATE: SHORT_ACCUM,
    },
    MOD: {
      ROUND: MOD_ROUNDS,
      ACCUMULATE: MOD_ACCUM,
    },
    LONG: {
      ROUND: LONG_ROUNDS,
      ACCUMULATE: LONG_ACCUM,
    },
  },
});

export {
  WORKOUT_BUILDER,
};