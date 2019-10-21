// step func() -> increment by 5, 10, 20
/*
  AMRAP: {
    LADDER: ['asc', 'desc'],
    MAX: ['reps', 'rounds'],
    CLASSIC: ['21-15-9', '9-6-3', '3-6-9'],
    INCENTIVE: ['buyIn', 'cashOut'],
  }
  INTERVAL: {
    TABATA: [],
    FGB: [],
    EMOM: ['repsPlusMax', 'alternating'],
  }

  ROUNDS: {
    LADDER: ['asc', 'desc', 'bookEnds'],
    CLASSIC: ['21-15-9', '9-6-3', '3-6-9', '5-7-9', '9-7-5'],
    INCENTIVE: ['buyIn', 'cashOut'],
    CHIPPER: ['asc', 'desc', 'constant', 'random'],
  },
*/

// also return number of emoms that fit in time domain
// maybe should include fgb + variations thereof
const modEmom = (time) => {
  // divisible by 1,2,3,5,7?
};

const tabata = () => {
  // returns if should be same movements or alternating, etc.
}

const WORKOUT_FORMAT_MAP = {
  SHORT: {
    TIME_PRIORITY: {
      AMRAP: ['ascLadder', 'maxDistance', 'maxReps', 'classic', 'incentive', 'chipper'],
      // calculate how many rounds fits in time? how many minutes?
      INTERVAL: ['tabata', 'emom'],
    },
    TASK_PRIORITY: {
      ROUND: ['ascLadder', 'descLadder', 'classic', 'incentive', 'chipper'],
      // 30 reps for time, accumulate 1000#, row 100cal
      ACCUMULATE: ['repsForTime', 'load', 'distance'],
    },
  },
  MODERATE: {
    TIME_PRIORITY: {
      AMRAP: ['ascLadder', 'maxDistance', 'maxReps', 'classic', 'incentive', 'chipper'],
      INTERVAL: ['fgb', 'modEmom', 'partition'],
    },
    TASK_PRIORITY: {
      ROUND: ['ascLadder', 'descLadder', 'bookEnds', 'classic', 'incentive', 'chipper', 'partition', 'increasingMovements', 'increasingReps'],
      ACCUMULATE: ['repsForTime', 'load', 'distance', 'mixed'],
    },
  },
  LONG: {
    TIME_PRIORITY: {
      AMRAP: ['ascLadder', 'incentive', 'chipper', 'partition'],
      INTERVAL: ['longEmom', 'partition', 'fgb'],
    },
    TASK_PRIORITY: {
      ROUND: ['ascLadder', 'descLadder', 'bookEnds', 'incentive', 'chipper', 'partition'],
      ACCUMULATE: ['repsForTime', 'load', 'distance', 'mixed'],
    },
  },
};
//                        [DURATION][PRIORITY][SUB_FORMAT][REP_SCHEME]
export default WORKOUT_FORMAT_MAP;