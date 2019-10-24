
export const generateWeightedList = arr => {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    let multiple = arr[i].weight * 100;
    for (let j = 0; j < multiple; j++) {
      list.push(arr[i].name);
    }
  }
  return list;
};