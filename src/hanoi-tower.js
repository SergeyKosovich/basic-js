const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(a,b) {
  let turns=2**a-1;
  let turnSec=b/3600;
  let seconds=Math.floor(turns/turnSec);
  return{
    turns:turns, seconds:seconds
  }

};
