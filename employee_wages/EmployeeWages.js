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

// let empHrs = 0;
// empCheck = Math.floor(Math.random() * 10) % 3;

// switch(empCheck){
//     case IS_PART_TIME:
//         empHrs = PART_TIME_HOURS;
//         break;
//     case IS_FULL_TIME:
//         empHrs = FULL_TIME_HOURS;
//         break;
//     default : empHrs = 0;
// }

// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("Employee Wage: " + empWage);

// UC3 to get working hours
function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            return empHrs;
        case IS_FULL_TIME: 
            empHrs = FULL_TIME_HOURS;
            return empHrs;
        default : empHrs = 0;
            return empHrs;
    }
}

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
//empHrs = getWorkingHours(empCheck);
//console.log("total working hours are: ",empHrs);
let empWage = empHrs * WAGE_PER_HOUR;
//console.log("Employee Wage: " + empWage);

// UC 4 Calculating wages for a month
const NUM_OF_WORKING_DAYS = 20;
empHrs = 0;

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

empWage = empHrs * WAGE_PER_HOUR;
console.log("total working hours are: ",empHrs);
console.log("Total hours: " + empHrs + " Employee Wage: " + empWage);