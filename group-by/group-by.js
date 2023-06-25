/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  const res = {};
  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);
    if (res[key] === undefined) res[key] = [];
    res[key].push(this[i]);
  } 
  return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */