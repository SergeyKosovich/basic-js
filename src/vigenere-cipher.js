const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(prop){
    this.prop=prop}
    
  decrypt(string,keys){
    
    let stringarray=string.split('');
    let bigstring=string.toUpperCase().split('')
    let rezalph='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    
    let alphbet='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let word2=[]
    
    let tranword=string.toUpperCase().split('').forEach(item=>{
      if(alphbet.includes(item)){word2.push(item)}
    })
    
    word2=word2.join('')
    let word3=word2.split('')
    
    let wordUp=word2.toUpperCase().split('');
    let keyUp=keys.toUpperCase().split('')
    
    let keyunder='';
    let keyunderWord=[]
    for(let i=0; i<=Math.ceil(wordUp.length/keyUp.length);i++){
      keyunder+=keyUp.join('')
    }
    for(let i=0; i<wordUp.length;i++){
     keyunderWord[i]=keyunder[i]
    }
    
   
    let arg=[]
    
    keyunderWord.forEach(function(item,index){
      if(keyunderWord[index]<=word3[index]){
       let a=rezalph.indexOf(item)
       for(let i=0; i<26; i++ ){
         if(rezalph[a]===word3[index]){}else{ rezalph.shift()}
        }
        arg.push(rezalph[0]);
        rezalph.length=0;
        rezalph=alphbet.slice()
      }else{
       
       let a=rezalph.indexOf(item);
       for(let i=26; i>0; i-- ){
         if(rezalph[a]===word3[index]){}else{
           let a=rezalph.pop();
           rezalph.unshift(a)
         }
        }
        arg.push(rezalph[0]);
        rezalph.length=0;
        rezalph=alphbet.slice()
  
   }
  
           
   })
    
  
   bigstring.forEach(function(item,index){
    
    if(alphbet.includes(item)){
      stringarray[index]=arg.shift()
    }
    
    })
    if(this.prop===false){return stringarray.reverse().join('')}
    return stringarray.join('')
    
    }
  encrypt(string,keys){

      let stringarray=string.split('');
      let bigstring=string.toUpperCase().split('')
      
      
      let alphbet='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      let word2=[]
      
      let tranword=string.toUpperCase().split('').forEach(item=>{
        if(alphbet.includes(item)){word2.push(item)}
      })
      
      word2=word2.join('')
      
      
      let wordUp=word2.toUpperCase().split('');
      let keyUp=keys.toUpperCase().split('')
      
      let keyunder='';
      let keyunderWord=[]
      for(let i=0; i<=Math.ceil(wordUp.length/keyUp.length);i++){
        keyunder+=keyUp.join('')
      }
      for(let i=0; i<wordUp.length;i++){
       keyunderWord[i]=keyunder[i]
      }
      
      
      function poisk(word,key){
        let stroka=alphbet.indexOf(word);
        let stolbec=alphbet.indexOf(key);
        let iskomi=stroka+stolbec;
        if(iskomi>25){
          iskomi=iskomi-26;
        }
        itogo.push(alphbet[iskomi])
      }
      let itogo=[];
      
      
      for(let i=0; i<wordUp.length;i++){
        poisk(wordUp[i],keyunderWord[i])
      }
      
      
      bigstring.forEach(function(item,index){
        
      if(alphbet.includes(item)){
        stringarray[index]=itogo.shift()
      }
      
      })
      if(this.prop===false){return stringarray.reverse().join('')}
     return stringarray.join('')
      
      
      
    }
}

module.exports = VigenereCipheringMachine;
