const { interfaces } = require("mocha");

module.exports = function reverse (n) {
  if(n < 0)
  n = n*-1;
  let str = String(n);
  result =0;
  for( let i = 0 ; i < str.length ; i++)
  {
    result += str[i] * (10**i);
  }
  return result;
}
