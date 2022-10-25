let person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    /*significant_other: person2   //Object, yes the same variable/object defined after*/
};

let person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};
//2-CREATE A NEW PERSON
let person3 = {
    name:"Jimmy",
    lastname:"Doe",
    age:13,
    gender: "male",
    lucky_numbers: [1,2,3,4],
    significant_other: null
};

let family = {
    lastname: "Doe",
    members: [person, person2, person3]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
//1-CHANGE 4º LUCKY NUMBER OF JOHN DOE
person.lucky_numbers[3]=33;
console.log(person)

//3-THE SUM OF ALL LUCKY NUMBERS
let sumperson1=0
let sumperson2=0
let sumperson3=0

for(let i=0;i<person.lucky_numbers.length;i++){
        sumperson1+=person.lucky_numbers[i]
    }
for(let k=0;k<person2.lucky_numbers.length;k++){
        sumperson2+=person2.lucky_numbers[k]
    }
for(let n=0;n<person3.lucky_numbers.length;n++){
        sumperson3+=person3.lucky_numbers[n]
    }
console.log(sumperson1+sumperson2+sumperson3);

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 