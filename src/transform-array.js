const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error();
  }
  let acc=arr.slice();
 let accum=[];
 let ind=['--discard-next','--discard-prev','--double-next','--double-prev', '--prop']
 acc.forEach(function(item,index){
    if(ind.includes(item)){
      if(item==='--discard-next'){if(index!=acc.length-1&&!(ind.includes(acc[index+1]))){acc[index+1]='--prop'}};
      if(item==='--discard-prev'){if(index!=0&&!(ind.includes(acc[index-1]))){accum.pop()}};
      if(item==='--double-next'){ if( (index!=acc.length-1)&&!(ind.includes(acc[index+1])) ){
        accum.push(acc[index+1])
      }  };
      if(item==='--double-prev'){ if( (index!=0)&&!(ind.includes(acc[index-1])) ){
        accum.push(acc[index-1])
      }  };

    }else{accum.push(item)}




 })
 
 return accum;
    
 };
