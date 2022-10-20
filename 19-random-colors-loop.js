function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
	
};

function getAllStudentColors(){
	var students=0
	while(students<10){
		students++;
		var randomloop=Math.floor(Math.random()*4)+1;
		let exampleColor = getColor(randomloop);
		console.log(exampleColor);
	}
};

var result=getAllStudentColors();
console.log(result);


