import { MOD, LONG, SHORT } from '../constants/types';

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

export {
  getDuration,
}