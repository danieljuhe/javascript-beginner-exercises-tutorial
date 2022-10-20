function fizzBuzz() {  
    
	for(let i = 1; i <=100; i++)
	{
        let tres="Fizz"
        let cinco="Buzz"
        let multiplos="FizzBuzz"

        if(i%3===0 && i%5===0){
            console.log(multiplos);

        }else if(i%3===0){
            console.log(tres);

        }else if(i%5===0){            
            console.log(cinco);

        }else { 
            console.log(i);
        };
       
	};
	
};
var resultado = fizzBuzz()
console.log(resultado)