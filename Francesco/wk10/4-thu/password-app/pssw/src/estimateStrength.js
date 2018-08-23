function estimateStrength(word) {
  let result = {};
  if (word.length > 0) {
    if (word.match(/[a-z]/)) {
      result.hasLowerCase = true;
      result.score = result.hasLowerCase === true ? 1 : 0;
    }
    if (word.match(/[^\w\s]/)) {
      result.hasSpecialChar = true;
      result.score = result.score || 0;
      result.score = result.hasSpecialChar === true ? (result.score += 1) : 0;
    }
    if (word.match(/[A-Z]/)) {
      result.hasUpperCase = true;
      result.score = result.score || 0;
      result.score = result.hasUpperCase === true ? (result.score += 1) : 0;
    }
    if (word.match(/[0-9]/)) {
      result.hasNumber = true;
      result.score = result.score || 0;
      result.score = result.hasNumber === true ? (result.score += 1) : 0;
    }
    if (word.length > 8) {
      result.isOver8Char = true;
      result.score = result.score || 0;
      result.score = result.isOver8Char === true ? (result.score += 1) : 0;
    }
  }
  return result;
}

module.exports = estimateStrength;
