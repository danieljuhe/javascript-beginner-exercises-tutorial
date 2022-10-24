let sing = () =>{
    let lyrics=""
    for(let i=0; i<=11; i++){
        if (i===10){
           lyrics = lyrics.concat("there will be an answer, ");
        }
        else if (i===4){
            lyrics = lyrics.concat("whisper words of wisdom, ");
        
        }else if (i===11){
            lyrics = lyrics.concat("let it be");
        
        }
        else{
            lyrics = lyrics.concat("let it be, ");
        }
    }
    console.log(lyrics)
}
sing()
