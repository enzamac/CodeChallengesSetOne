function firstPalindrome(wordArray){

        for(let n = 0; n < wordArray.length; n++){
            let word = wordArray[n];
            let wordLength = word.length;

            if(wordLength % 2 == 0){
                let stopPoint = Math.floor(wordLength/2);
                let score = 0;
                for(let i = 0; i < stopPoint; i++){
                    if(word[i] === word[word.length-(i+1)]){
                        score++;
                    } else {
                        score--;
                    }
                }
        
                if(score < 2){
                    
                } else {
                    return wordArray[n];
                }
            } 
            else {
                let stopPoint = Math.floor(wordLength/2) + 1;
                let score = 0;
                for(let i = 0; i < stopPoint; i++){
                    if(word[i] === word[word.length-(i+1)]){
                    score++;
                    } else {
                        score--;
                    }
                }
                
                if(score < 2){
                    
                } else {
                    return wordArray[n];
                }
            }
        }}