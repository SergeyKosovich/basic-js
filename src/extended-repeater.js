const CustomError = require("../extensions/custom-error");

module.exports = function repeater(string,options) {
  let accum=[];
  string=String(string);
  
  let { repeatTimes=1, separator='+', addition='', additionRepeatTimes=1, additionSeparator="|" }=options;
 
    addition=String(addition);
  
  let rez=[];
  for(let i=0;i<additionRepeatTimes; i++){
   rez.push(addition)
   }
   rez=rez.join(additionSeparator)

  for(let i=0; i<repeatTimes; i++){
    accum.push(string+rez);
  }
  accum=accum.join(separator)
  
  return accum;
  
};
  