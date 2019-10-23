// step func() -> increment by 5, 10, 20

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

const SHORT_AMRAPS = [
  { name: 'ascLadder', weight: 0.3 },
  { name: 'chipper', weight: 0.2 },
  { name: 'maxDistance', weight: 0.1 },
  { name: 'maxReps', weight: 0.1 },
  { name: 'shortClassic', weight: 0.5 },
];
const weightedShortAmraps = generateWeightedList(SHORT_AMRAPS);

const MOD_AMRAPS = [
  { name: 'ascLadder', weight: 0.2 },
  { name: 'chipper', weight: 0.2 },
  { name: 'incentive', weight: 0.05 },
  { name: 'maxDistance', weight: 0.05 },
  { name: 'maxReps', weight: 0.05 },
  { name: 'shortClassic', weight: 0.45 },
];
const weightedModAmraps = generateWeightedList(MOD_AMRAPS);

const LONG_AMRAPS = [
  { name: 'ascLadder', weight: 0.4 },
  { name: 'chipper', weight: 0.4 },
  { name: 'partition', weight: 0.2 },
];
const weightedLongAmraps = generateWeightedList(LONG_AMRAPS);

const SHORT_INTS = [
  { name: 'emom', weight: 0.8 },
  { name: 'tabata', weight: 0.2 },
];
const weightedShortInts = generateWeightedList(SHORT_INTS);
const weightedShortInts2 = generateWeightedList(SHORT_INTS[0]);

const MOD_INTS = [
  { name: 'fgb', weight: 0.2 },
  { name: 'modEmom', weight: 0.5 },
  { name: 'partition', weight: 0.2 },
  { name: 'doubleTabata', weight: 0.1 },
];
const weightedModInts = generateWeightedList(MOD_INTS);
const weightedModInts2 = generateWeightedList(MOD_INTS.slice(0, 3));

const LONG_INTS = [
  { name: 'longEmom', weight: 0.25 },
  { name: 'partition', weight: 0.5 },
  { name: 'fgb', weight: 0.25 },
];
const weightedLongInts = generateWeightedList(LONG_INTS);

const SHORT_ROUNDS = [
  { name: 'ascLadder', weight: 0.2 },
  { name: 'chipper', weight: 0.05 },
  { name: 'classic', weight: 0.5 },
  { name: 'descLadder', weight: 0.2 },
  { name: 'incentive', weight: 0.05 },
];
const weightedShortRounds = generateWeightedList(SHORT_ROUNDS);

const MOD_ROUNDS = [
  { name: 'ascLadder', weight: 0.1 },
  { name: 'bookEnds', weight: 0.1 },
  { name: 'chipper', weight: 0.3 },
  { name: 'classic', weight: 0.3 },
  { name: 'descLadder', weight: 0.05 },
  { name: 'incentive', weight: 0.05 },
  { name: 'partition', weight: 0.05 },
  { name: 'increasingMovements', weight: 0.05 },
  { name: 'increasingReps', weight: 0.05 },
];
const weightedModRounds = generateWeightedList(MOD_ROUNDS);

const LONG_ROUNDS = [
  { name: 'ascLadder', weight: 0.1 },
  { name: 'bookEnds', weight: 0.1 },
  { name: 'chipper', weight: 0.3 },
  { name: 'descLadder', weight: 0.1 },
  { name: 'incentive', weight: 0.05 },
  { name: 'partition', weight: 0.1 },
  { name: 'increasingMovements', weight: 0.15 },
  { name: 'increasingReps', weight: 0.1 },
];
const weightedLongRounds = generateWeightedList(LONG_ROUNDS);

const SHORT_ACCUM = [
  { name: 'repsForTime', weight: 0.5 },
  { name: 'load', weight: 0.25 },
  { name: 'distance', weight: 0.25 },
];
const weightedShortAccums = generateWeightedList(SHORT_ACCUM);

const MOD_ACCUM = [
  { name: 'repsForTime', weight: 0.3 },
  { name: 'load', weight: 0.1 },
  { name: 'distance', weight: 0.1 },
  { name: 'mixed', weight: 0.50 },
];
const weightedModAccums = generateWeightedList(MOD_ACCUM);

const LONG_ACCUM = [
  { name: 'repsForTime', weight: 0.3 },
  { name: 'load', weight: 0.1 },
  { name: 'distance', weight: 0.1 },
  { name: 'mixed', weight: 0.50 },
];
const weightedLongAccums = generateWeightedList(LONG_ACCUM);

const WORKOUT_BUILDER = time => ({
  TIME_PRIORITY: {
    SHORT: {
      AMRAP: weightedShortAmraps,
      INTERVAL: time === 8 ? weightedShortInts : weightedShortInts2,
    },
    MOD: {
      AMRAP: weightedModAmraps,
      INTERVAL: time === 17 ? weightedModInts : weightedModInts2,
    },
    LONG: {
      AMRAP: weightedLongAmraps,
      INTERVAL: weightedLongInts,
    },
  },
  TASK_PRIORITY: {
    SHORT: {
      ROUND: weightedShortRounds,
      ACCUMULATE: weightedShortAccums,
    },
    MOD: {
      ROUND: weightedModRounds,
      ACCUMULATE: weightedModAccums,
    },
    LONG: {
      ROUND: weightedLongRounds,
      ACCUMULATE: weightedLongAccums,
    },
  },
});

const getDuration = time => {
  if (time >= 5 && time < 16) {
    return 'SHORT';
  } else if (time >= 16 && time < 31) {
    return 'MOD';
  } else if (time >= 31) {
    return 'LONG';
  } else {
    return 'no time given';
  }
};

const getFormat = time => {
  const duration = getDuration(time);
  const keys = Object.keys(WORKOUT_BUILDER(time));
  const formats = WORKOUT_BUILDER(time)[random(keys)][duration];
  const randomformat = formats[random(Object.keys(formats))];

  return random(randomformat);
};

export {
  getFormat,
};