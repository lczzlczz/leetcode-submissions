/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
  return new Promise(async (resolve, reject) => {
    const res = new Array(functions.length);
    let count = 0;
    functions.forEach(async (fn, i) => {
      try {
        res[i] = await fn()
        if (++count === functions.length) resolve(res);
      } catch(err) {
        reject(err);
      }
    });
  })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */