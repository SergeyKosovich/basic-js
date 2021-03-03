const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(our) {
  if(typeof(our)!='string'||our>15||our<=0){return false}
  let top=Math.log(15/our);
  let k=Math.log(2)/(5730);
  return isNaN(our/0)? false: Math.ceil(top/k);
  
};
