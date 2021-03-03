const CustomError = require("../extensions/custom-error");

module.exports = function countCats(a) {
  let e=0;
  a.forEach(item => {
    item.forEach( item2=>{  if(item2==='^^'){  e++ }else{
           if(Array.isArray(item2)){
             item2.forEach(item3=>{ if(item3==='^^'){e++}})
           }
    }} )         
  } ) 
return e===0? 0 : e;
};
