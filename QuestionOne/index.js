function fizzBuzz(text1, text2){
    textLength = text1.length + text2.length;
    if(textLength % 5 === 0 && textLength % 3 === 0){
        return "FizzBuzz";
    }else if(textLength % 5 === 0){
        return "Buzz";
    }else if(textLength % 3 === 0){
        return "Fizz";
    }else{
        return "Enter correct values";
    }
}