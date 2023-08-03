
// let person = {
//     name : "faezeh" ,
//     fNumber : 1 ,
//     age : 21 
 
// };

// for (let pkey in person){
//  console.log(`${pkey} : ${person[pkey]}`);
// } 

// let numbers = [0, 1, 4, 2];
// let result;
// result = numbers.sort((x , y) => x-y);
// result = numbers.filter((numbers) => numbers > 0);
// console.log(result);
// console.log(result);


// // constractor
// function Person(fName, lName){
//     // this اشاره مسکنه به آخرین شی مورد استفاده
//     this.firstName = fName;
//     this.lastName = lName;
//     // this.getFullName = function(){
//     //     return `${this.firstName} ${this.lastName}`
//     // }
// }
// Person.prototype.getFullName = function(){  
//         return `${this.firstName} ${this.lastName}` 
// }

// let fafa = new Person("fa" ,"k");
// let a = new Person("s" , "m");

// console.log(fafa.getFullName());
// console.log(a.getFullName());



// class user {
//     constructor(firstName , lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     signIn(){
//         console.log(`im ${this.firstName} ${this.lastName} and sign in`);
//     }

// }
// class human extends user{
//     constructor(firstName , lastName , age , address){
//         super(firstName,lastName);
//         this.age = age;
//         this.address = address;
    

//     }
//     working(){
//         console.log(`im ${this.firstName} ${this.lastName} and working`); 
//     }
// }

// let h = new human("fafa", "kha" , 21 ,"teb");
// console.log(h.working());
// console.log(h.signIn());



// ************ old method *************

// function formatDate(dataObject){
//     const parts = {
//         year : dataObject.getFullYear() ,
//         month : dataObject.getMonth() + 1,
//         date : dataObject.getDate(),
//         hour : (dataObject.getHours() % 12) || 12,
//         mitute : dataObject.getMinutes().toString().padStart(2 , "0"),
//         amOrpm : dataObject.getHours() < 12 ? "AM" : "PM"
//     }
//     return `${parts.year}/${parts.month}/${
//         parts.date} ${parts.hour}:${parts.mitute}${parts.amOrpm}`
// }


// let myDate = new Date(2002, 6 , 2 ,33,2);
// let myDateFormated = formatDate(myDate);

// console.log(myDateFormated);

function formatDate(dateObject) {

}
const myDate = dayjs("1999-3-6 3:4");
console.log(myDate.format("YYYY/M/D h:mm A"));
