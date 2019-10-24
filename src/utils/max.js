
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

export {
  generateMaxDistance,
  generateMaxReps,
}