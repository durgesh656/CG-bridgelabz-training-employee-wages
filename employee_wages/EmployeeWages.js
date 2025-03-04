// UC 1 to check if the employee is present or not
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2; // This gives either true or false
if(empCheck == IS_ABSENT){
    console.log("Employee is Absent");
    return;
}else{
    console.log("Employee is present");
}

// UC2 Ability to check daily employee wage based on the work
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;

switch(empCheck){
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default : empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage: " + empWage);