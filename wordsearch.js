const transpose = function(matrix) {
  let newArr = [];
  const length = matrix[0].length;
  // Put your solution here
  for (let i = 0; i < length; i++) {
    let tempArr = [];
    for (let j = 0; j < matrix.length; j++) {
      tempArr.push(matrix[j][i]);
    }
    newArr.push(tempArr);
  }
  return newArr;
};
  
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};
  
module.exports = wordSearch;