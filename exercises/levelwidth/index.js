// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// his solution which is I think better in term of Runtime complexity
function levelWidth(root) {
  const STOPPER = "stop";
  const nodes = [root, STOPPER];
  const result = [0];

  while (nodes.length > 1) {
    const currentNode = nodes.shift(nodes);
    if (currentNode === STOPPER && nodes.length) {
      nodes.push(STOPPER);
      result.push(0);
    } else {
      nodes.push(...currentNode.children);
      result[result.length - 1]++;
    }
  }

  return result;
}

module.exports = levelWidth;

// my personal solution
/* function flatten(array) {
  return array.reduce((acc, current) => acc.concat(current), []);
}

function levelWidth(root) {
  let nodes = [root];
  let result = [1];

  while (nodes.length) {
    const allChildrenLevel = flatten(nodes.map(node => node.children));
    nodes.splice(0);
    nodes.push(...allChildrenLevel);
    if (allChildrenLevel.length > 0) {
      result.push(allChildrenLevel.length);
    }
  }

  return result;
} */
