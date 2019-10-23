// step func() -> increment by 5, 10, 20

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const SHORT_AMRAPS = ['ascLadder', 'maxDistance', 'maxReps', 'shortClassic', 'chipper'];
const MOD_AMRAPS = ['ascLadder', 'maxDistance', 'maxReps', 'classic', 'incentive', 'chipper'];
const LONG_AMRAPS = ['ascLadder', 'incentive', 'chipper', 'partition'];

const SHORT_INTS = ['emom', 'tabata'];
const MOD_INTS = ['fgb', 'modEmom', 'partition', 'doubleTabata'];
const LONG_INTS = ['longEmom', 'partition', 'fgb'];

const SHORT_ROUNDS = ['ascLadder', 'descLadder', 'classic', 'incentive', 'chipper'];
const MOD_ROUNDS = ['ascLadder', 'descLadder', 'bookEnds', 'classic', 'incentive', 'chipper', 'partition', 'increasingMovements', 'increasingReps'];
const LONG_ROUNDS = ['ascLadder', 'descLadder', 'bookEnds', 'incentive', 'chipper', 'partition'];

const SHORT_ACCUM = ['repsForTime', 'load', 'distance'];
const MOD_ACCUM = ['repsForTime', 'load', 'distance', 'mixed'];
const LONG_ACCUM = ['repsForTime', 'load', 'distance', 'mixed'];

const WORKOUT_BUILDER = time => ({
  TIME_PRIORITY: {
    SHORT: {
      AMRAP: SHORT_AMRAPS,
      INTERVAL: time === 8 ? SHORT_INTS : SHORT_INTS[0],
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
  console.log('formats', formats)
  return formats[random(Object.keys(formats))];
};

export {
  getFormat,
};