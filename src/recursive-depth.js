const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(array){
    let i=1;
    let accum=[];
    let accum2=[];
    function calc(ally){
            ally.forEach(function(item){
            if(item.constructor===Array){accum.push(item)}
          })
       if(accum.length>0){
            i++;
        }
      }
    calc(array)
    function last(){
      accum2=[];
      if(accum.length>0){
        accum.forEach(function(item){
          if(item.constructor===Array){   
            item.forEach(function(items){
              if(items.constructor===Array){accum2.push(items)}
            })
          }
              });
          accum=[];
    
    if(accum2.length>0){
           accum=accum2.slice()
           i++;
           return last()
           
         }     
         
     
      }
     
    }
    last();
    
    return i;
    }
}