export const getRange = (multiple, end) => {
  let sum = 0, res = [];
  for (let i = 0; i < end; i++) {
    sum += multiple;
    res.push(sum);
  }
  return res;
};