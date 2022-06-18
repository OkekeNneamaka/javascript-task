// complete the function
function prime (num) {
  // code goes here
  if (num<=1) return false 
  if (num===2) return true
  var sqrt = Math.sqrt(num);
  for (var i =2; i<= sqrt; i++){
    if (num % i === 0) return false;
    return true;
  }
  
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
