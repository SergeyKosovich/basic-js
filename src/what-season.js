const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if(!date){return 'Unable to determine the time of year!'};
    if(!date.getTime()){throw new Error()};
        let a;
    if(2<=date.getMonth()&&date.getMonth()<=4){a='spring'};
    if(5<=date.getMonth()&&date.getMonth()<=7){a='summer'};
    if(8<=date.getMonth()&&date.getMonth()<=10){a='autumn'};
    if(date.getMonth()===11||0===date.getMonth()||date.getMonth()===1){a='winter'};
    return a;  
};
