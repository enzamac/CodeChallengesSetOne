let enteredYear = prompt("Enter your year of birth");
let currentYear = new Date().getFullYear();
let age = currentYear - enteredYear;
  
  
if(age < 18){
    console.log("Minor");
}else if (age >= 18 && age < 36){
    console.log("Youth");
}else{
    console.log("Elder");
    }
