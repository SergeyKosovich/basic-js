const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(a) {
  if(!Array.isArray(a)){return false};
  let names=[];
  a.forEach(item => {
    if(typeof(item)==='string'){
      names.push(
      item.split('').find(
        function(item2) {
       if(item2!=0){return item2} }
       ).toUpperCase()
    )}
    });
   if(names.length===0){return false}else{return names.sort().join('')}
};
