
 function addNumber(num1 , num2) {
     var sum = 0;
     for (let i = 0; i< arguments.length; i++) {
       const num = arguments[i];
    sum = sum +num ;
        
     }
     function logInfo(massage) {
       console.log(massage);
     }
     logInfo('Good morning');
     return sum;
 }

 var result = addNumber(3 ,5 ,8 ,15);
console.log(result);


 


