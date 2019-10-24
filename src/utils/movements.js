import { generateWeightedList } from './lists';
import { random } from './random';

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


const getMovements = (list, sequence) => {
  let i = 0, movements = [];
  while (i < sequence.length) {
    movements.push(random(list[sequence[i]]));
    i++;
  }
  return movements;
}

export {
  getMovements,
  getMovementSequence,
}