
function searchBST(node, target) {
  if (node === null) return false;
  else if (node.value === target) return true;
  else if (target > node.value) return searchBST(node.right, target);
  else if (target < node.value) return searchBST(node.left, target);
}
function findSmallest(node) {
  return node.left === null ? node : findSmallest(node.left);
}
function insertNode(node, value) {
  if (node === null) {
    return new BST(value);
  }
  if (value >= node.value) {
    node.right = insertNode(node.right, value);
  } else if (value < node.value) {
    node.left = insertNode(node.left, value);
  }
  return node;
}

function validate(root, max, min) {
  if (root === null) {
    return true;
  }
  if (root.value < min  || root.value >= max){
    return false;
  }
  return validate(root.right, max , root.value) && validate(root.left, root.value, min);
}
function validateBst(tree) {
  return validate(tree, Number.MAX_VALUE, Number.MIN_VALUE);
}

function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

function preOrderTraverse(tree, array) {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}

function removeNode(node, value, rootValue) {
  if (node === null) {
    return null;
  }
  if (value > node.value ) {
    node.right = removeNode(node.right, value);
  } else if (value < node.value) {
    node.left = removeNode(node.left, value);
  } else {
    if (node.left !== null && node.right !== null) {
      // successor (smallest in the right subtree)
      let smallestNode = findSmallest(node.right);
      node.value = smallestNode.value;
      node.right = removeNode(node.right, smallestNode.value);
      return node;
    } else if (node.right !== null) {
      let temp = node.right
      if (node.value === rootValue) {
        node.value = temp.value;
        node.right = temp.right;
        node.left = temp.left
        return;
      }
      return node.right
    } else if (node.left !== null) {
      let temp = node.left
      if (node.value === rootValue) {
        node.value = temp.value;
        node.right = temp.right;
        node.left = temp.left
        return;
      }
      return node.left
    } else {
      return null;
    }
  }
  return node;
}

function minHeightBst(array) {
  return constructBST(array, 0, array.length);;
}

function constructBST(array, start, end) {
  if(end < start) return null;
  let mid = Math.floor((start + end) / 2);
  let node = new BST(array[mid]);
  node.left = constructBST(array, start, mid - 1)
  node.right = constructBST(array, mid + 1, end)
  return node;
}

function branchSums(tree, sum = 0, array = []) {
  if (tree === null) {
    return;
  }
  sum +=tree.value;
  if (tree.left == null && tree.right == null) {
    array.push(sum);
  }
  branchSums(tree.left, sum, array);
  branchSums(tree.right, sum, array);
  return array;
}

function nodeDepths(tree, depth = 0) {
  if (tree === null) {
    return 0;
  }
  depth = depth + nodeDepths(tree.left, depth + 1) + nodeDepths(tree.right, depth + 1);
  return depth;
}

function nodeDepths(tree, sum = 0) {
  if (tree === null) {
    return 0;
  }
  sum++;
  nodeDepths(tree.left,sum)
  nodeDepths(tree.right, sum);
  return sum;
}

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    insertNode(this, value);
    return this;
  }

  contains(value) {
    return searchBST(this, value);
  }

  remove(value) {
    removeNode(this, value, this.value);
    return this;
  }

}

// const root = new BST(10);
// root.insert(5);
// root.insert(15);
// root.insert(2);
// root.insert(5);
// root.insert(13);
// root.insert(22);
// root.insert(1);
// root.insert(14);
// root.insert(12);
// root.display(root);
// console.log(root.contains(13));
// console.log(root.contains(44));
// console.log(root.remove(13));
// console.log(root);
// const root = new BST(1);
// root.insert(2);
// root.insert(3);
// root.insert(4);
// root.remove(1);
// console.log(root);


// const root = new BST(10);

// root.left = new BST(5);

// root.left.left = new BST(2);
// root.left.left.left = new BST(1);

// root.left.right = new BST(11);

// root.right = new BST(15);
// root.right.right = new BST(22);

// console.log(validateBst(root));
// const root = new BST(10);
// root.left = new BST(5);
// root.left.left = new BST(2);
// root.left.left.left = new BST(1);
// root.left.right = new BST(5);
// root.right = new BST(15);
// root.right.right = new BST(22);
// let array = [];
// console.log(inOrderTraverse(root, array))
// let array1 = [];
// console.log(preOrderTraverse(root, array1))
// let array2 = [];
// console.log(postOrderTraverse(root, array2))
// const tree = new BST(1).insert([2, 5, 7, 10, 13, 14, 15, 22]);
 let array =[1, 2, 5, 7, 10, 13, 14, 15, 22];
console.log(minHeightBst(array));

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}
// const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(branchSums(tree));
// console.log(nodeDepths(tree));