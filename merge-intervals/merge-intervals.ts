type Interval = number[];

function merge(intervals: number[][]): number[][] {
  if (intervals.length === 1) return intervals; 

  let res = [];
  const comp = (a: Interval, b: Interval): number => a[0] - b[0]
  const sortedIntervals = intervals.sort(comp)

  let firstInterval = sortedIntervals[0];

  for (let i = 1; i < sortedIntervals.length; i++) {
    if (firstInterval[1] >= sortedIntervals[i][0]) {
      firstInterval = [firstInterval[0], Math.max(firstInterval[1], sortedIntervals[i][1])];
    } else {
      res.push(firstInterval);
      firstInterval = sortedIntervals[i];
    }
  }

  res.push(firstInterval);

  return res;
};