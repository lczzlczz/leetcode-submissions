/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  let [i, j, id] = [0, 0, 0];
  let res = [];
  while (i < arr1.length || j < arr2.length) {
    while (id !== arr1[i]?.id && id !== arr2[j]?.id) id++;
    let value = {};
    if (arr1[i] && arr1[i].id === id) value = {...arr1[i++]};
    if (arr2[j] && arr2[j].id === id) value = {...value, ...arr2[j++]};
    res.push(value);
  }

  return res;
};