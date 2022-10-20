let total = 54;

function kilometros(){
    if(total>100){
        return ("We still have a bit of driving left to go");
    }else if (total>50){
        return ("We'll be there in 5 minutes");
    }else 
        return ("I'm parking. I'll see you right now");
    };
    
    let answer=kilometros(total);
    console.log(answer);