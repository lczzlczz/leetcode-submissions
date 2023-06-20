/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let acc = init; 
  const increment = () => ++acc;
  const decrement = () => --acc;
  const reset = () => { acc = init; return acc; }
  return {
    increment,
    reset,
    decrement
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */