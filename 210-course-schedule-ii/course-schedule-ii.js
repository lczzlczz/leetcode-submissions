/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const edges = new Array(numCourses).fill().map(() => new Array());
  const inDegrees = new Array(numCourses).fill(0);

  prerequisites.forEach(([course, preCourse]) => {
    addEdge(preCourse, course, edges);
    inDegrees[course]++;
  })

  return topSort(edges, inDegrees, numCourses);
};

const addEdge = (u, v, edges) => {
  edges[u].push(v);
}

const topSort = (edges, inDegrees, n) => {
  const nodeQ = [];
  inDegrees.forEach((degree, i) => {
    if (degree === 0) {
      nodeQ.push(i);
    }
  })
  
  const result = Array.from(nodeQ);
  while (nodeQ.length > 0) {
    const node = nodeQ.shift();

    for (const course of edges[node]) {
      inDegrees[course]--;
      if (inDegrees[course] === 0) {
        nodeQ.push(course);
        result.push(course);
      }
    }
  }
  
  return result.length === n ? result: [];
}
