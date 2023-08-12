function canFinish(numCourses: number, prerequisites: number[][]): boolean {

// let array N be N[0...n-1]
// let array P = P[]
  const edges = new Array(numCourses).fill(0).map(() => new Array());
  const inDegrees = new Array(numCourses).fill(0);

  prerequisites.forEach(([course, preCourse]) => {
    addEdge(preCourse, course, edges);
    inDegrees[course]++;
  })

  return numCourses === topSort(edges, inDegrees);
};

const addEdge = (u: number, v: number, edges: number[][]): void => {
  edges[u].push(v);
}

const topSort = (edges:number[][], inDegrees: number[]): number => {
  const queue= [];
  inDegrees.forEach((degree, i) => {
    if (degree === 0) queue.push(i);
  })

  while (queue.length > 0) {
    const u = queue.shift();
    for (let v of edges[u]) {
      inDegrees[v]--;
      if (inDegrees[v] === 0) queue.push(v);
    }
  }

  return inDegrees.filter(degree => degree === 0).length;
}