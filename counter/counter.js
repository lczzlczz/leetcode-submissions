/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = n => {
  let counter = n;
  return function() {
    return counter++;
  };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */