function singleDigit(intNum){
    let strNum = intNum.toString();
    let strNumLength = strNum.length;
    if(strNumLength === 1){
        return strNum;
    } else if(strNumLength === 2){
      let newNum = Number(strNum[0]) + Number(strNum[1]);
      return singleDigit(newNum);
    } else if(strNumLength === 3){
      let newNum = Number(strNum[0]) + Number(strNum[1]) + Number(strNum[2]);
      return singleDigit(newNum);
    }
    
    else{
      return "4 digits or higher not yet possible";
    }
  }
  