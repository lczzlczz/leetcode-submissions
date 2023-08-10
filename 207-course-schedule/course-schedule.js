/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const edges = new Array(numCourses + 1).fill().map(() => new Array());
  const inDegrees = new Array(numCourses + 1).fill(0);

  prerequisites.forEach(([course, preCourse]) => {
    addEdge(preCourse, course, edges);
    addDegree(course, inDegrees);
  })

  const starts = [];
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      starts.push(i);
    }
  }

  for (let start of starts) {
    dfs(start, edges, inDegrees);
  }

  return numCourses + 1 === inDegrees.filter(degree => degree === 0).length;
};

const addEdge = (u, v, edges) => {
  edges[u].push(v);
}

const addDegree = (course, inDegrees) => {
  inDegrees[course]++;
}

const dfs = (course, edges, inDegrees) => {
  for (const edge of edges[course]) {
    inDegrees[edge]--; 
    if (inDegrees[edge] === 0) {
      dfs(edge, edges, inDegrees)
    }
  }
}