const CustomError = require("../extensions/custom-error");

const chainMaker={
  accum:[],
  finishChain(){
    let s=chainMaker.accum.slice(0);
    chainMaker.accum=[];
    return s.join('~~');  },
  addLink(a){
    if (!arguments.length){
      chainMaker.accum.push('(  )'); return chainMaker;
    }else{
      chainMaker.accum.push(`( ${a} )`); return chainMaker;
    }
  },
  getLength(){
    return chainMaker.accum.length
    },
  removeLink(a){
    if(Number.isNaN(a)||chainMaker.accum[a-1]===undefined){
      chainMaker.accum=[];
      throw new Error();
     

    }else{  chainMaker.accum.splice(a-1,1); return chainMaker; }
    },
  reverseChain(){ chainMaker.accum.reverse(); return chainMaker},
}



module.exports = chainMaker;
