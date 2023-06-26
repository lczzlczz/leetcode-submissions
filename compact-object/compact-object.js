/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
  let res = obj;

  if (isObject(obj)) {
    res = {};
    for (let [key, value] of Object.entries(obj)) {
      if (value) res[key] = compactObject(value);
    }
  }

  if (Array.isArray(obj)) {
    res = [];
    for (let item of obj) {
      if (item) res.push(compactObject(item));
    }
  }

  return res ?? undefined;
};

const isObject = obj => {
  return typeof obj === 'object' &&
          obj !== null &&
          !Array.isArray(obj);
}
