import { LONG, MOD, SHORT } from '../constants/types';
import MOVEMENTS from './movements';

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const generateWeightedList = arr => {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    let multiple = arr[i].weight * 100;
    for (let j = 0; j < multiple; j++) {
      list.push(arr[i].name);
    }
  }
  return list;
};

const getRange = (multiple, end) => {
  let sum = 0, res = [];
  for (let i = 0; i < end; i++) {
    sum += multiple;
    res.push(sum);
  }

  return res;
}

const EQUIPMENT_MAP = [
  { name: 'BW', weight: 0.25 },
  { name: 'PLYOMETRIC', weight: 0.25 },
  { name: 'BARBELL', weight: 0.25 },
  { name: 'KETTLEBELL', weight: 0.1 },
  { name: 'DUMBBELL', weight: 0.15 },
];

const getMovementSequence = (list, count) => {
  const types = EQUIPMENT_MAP.filter(e => list.includes(e.name));
  const weightedList = generateWeightedList(types);
  let i = 0, res = [];
  while (i < count) {
    res.push(random(weightedList));
    i++;
  }
  return res;
}


// calculate amount based on duration/time
const addConstantTask = () => ({ movement: 'run', task: 'distance', amount: '400m' });
const getMovements = (list, sequence) => {
  let i = 0, movements = [];
  while (i < sequence.length) {
    movements.push(random(list[sequence[i]]));
    i++;
  }
  return movements;
}

const generateAscLadder = (duration, equipment) => {
  let constantTask, count, movements, repScheme, sequence;
  switch (duration) {
    case SHORT:
      count = random([1, 2, 3]);
      constantTask = count === 1 ? addConstantTask() : null;
      sequence = getMovementSequence(equipment, count);
      movements = getMovements(MOVEMENTS, sequence);
      repScheme = getRange(random([1, 2, 3, 4, 5], 3));
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

const generateChipper = () => {
  const repScheme = '30-30-30';
  // choose number of movements
  // choose movements
  const movements = [];
  return {
    repScheme,
    movements,
  };
};

const generateMaxDistance = (duration) => {
  // choose number of movements
  // choose movement(s)
  const units = 'calories' // meters
  return {
    units,
    movements: [],
  }
};

const generateMaxReps = (duration, level, equipment) => {
  // choose number of movements
  // choose movement(s) based on skill level and equipment
  const load = { M: 135, F: 95 };
  return {
    load,
    movements: [],
  }
};
const generateClassic = () => { };
const generateIncentive = () => { };
const generatePartition = () => {
  // outlaw type
  // buy-in
  // cash-out
  // buy-in && cash-out
};
const generateEmom = () => { };

const generateTabata = (time) => {
  if (time === 8) {
    return 1;
  }
  if (time === 17) {
    return 2;
  }
  return 'something went wrong.'
};

const generateFGB = () => {
  // interval + rest
}

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
    case LONG:
      repScheme = ['5-10-15...'];
      break;
    default:
      repScheme = 'something went wrong.'
      break;
  }
  return {
    repScheme,
    movements,
  }

};
const generateBookEnds = () => {
  // choose # movements (m)
  // pattern: ['m1, m2, m3, m2, m1', 'm1, m2, m3, m2, m3, m1']
  const repScheme = '';
  const movements = [];
  return {
    repScheme,
    movements,
  }
};

const generateIncMovements = () => { };
const generateIncReps = () => { };
const generateAccumDistance = (duration, level, equipment) => {
  // choose number of movements
  // choose movement(s) based on skill level and equipment
  const total = { M: 10000, F: 5000 };
  return {
    total,
    movements: [],
  }

};
const generateAccumLoad = (duration, level, equipment) => {
  // choose number of movements
  // choose movement(s) based on skill level and equipment
  const total = { M: 10000, F: 5000 };
  return {
    total,
    movements: [],
  }
};
const generateMixedAccum = () => { };
const generateRepsForTime = () => { };

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

const getDuration = time => {
  if (time >= 5 && time < 16) {
    return SHORT;
  } else if (time >= 16 && time < 31) {
    return MOD;
  } else if (time >= 31) {
    return LONG;
  } else {
    return 'no time given';
  }
};

const getFormat = time => {
  const duration = getDuration(time);
  const keys = Object.keys(WORKOUT_BUILDER(time));
  const formats = WORKOUT_BUILDER(time)[random(keys)][duration];
  const subformats = formats[random(Object.keys(formats))];
  const weightedList = generateWeightedList(subformats);

  return subformats.filter(key => key.name === random(weightedList))[0];
};

export {
  generateAscLadder,
  getFormat,
};