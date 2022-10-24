function bottles()
{	let lyrics=""
	let firstsent=" bottles of milk on the wall, "
	let secondsent=" bottles of milk."
	let lastsent="Take one down and pass it around, "
	for(let i=99; i>=0; i--)
	{	if(i===99){
			lyrics=lyrics.concat( i+ firstsent + i + secondsent +"\n"+ lastsent)
		}else if(i<99 && i>1){
			lyrics=lyrics.concat(i + firstsent +"\n"+ i + firstsent + i + secondsent +"\n"+ lastsent)
		}else if(i===1){
			lyrics=lyrics.concat(i + " bottle of milk on the wall, "+"\n"+ i + " bottle of milk on the wall" + i + " bottle of milk." + "\n" + "No more bottles of milk on the wall"+"\n")
		}else{
			lyrics=lyrics.concat("No more bottles of milk on the wall, no more bottles of milk. " +"\n"+"Go to the store and buy some more, 99 bottles of milk on the wall.")
		}
	}console.log(lyrics)
}
bottles();