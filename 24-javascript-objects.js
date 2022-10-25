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
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
//1-CHANGE 4º LUCKY NUMBER OF JOHN DOE
let newlucky_numbers= 33
person.lucky_numbers[3]=newlucky_numbers;
console.log(person)

//3-THE SUM OF ALL LUCKY NUMBERS
let sum=0
for(i=0;i<person.lucky_numbers.length;i++){
    for(k=0; k<person2.lucky_numbers.length;k++){
        for(n=0; n<person3.lucky_numbers.length;n++){
        sum+=person.lucky_numbers[i],person2.lucky_numbers[k],person3.lucky_numbers[n]
        }
    }
}
console.log(sum)

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 