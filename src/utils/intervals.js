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
};

export {
  generateEmom,
  generateFGB,
  generateTabata,
}
