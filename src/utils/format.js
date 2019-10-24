import { getDuration } from './duration';
import { generateWeightedList } from './lists';
import { random } from './random';

import WORKOUT_BUILDER from '../data';

const getFormat = time => {
  const duration = getDuration(time);
  const keys = Object.keys(WORKOUT_BUILDER(time));
  const formats = WORKOUT_BUILDER(time)[random(keys)][duration];
  const subformats = formats[random(Object.keys(formats))];
  const weightedList = generateWeightedList(subformats);

  return subformats.filter(key => key.name === random(weightedList))[0];
};

export {
  getFormat,
}