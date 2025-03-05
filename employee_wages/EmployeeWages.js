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
empHrs = getWorkingHours(empCheck);
console.log("total working hours are: ",empHrs);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage: " + empWage);

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


// UC 5 -> Calculating wages till number of working days and total working hours is reached
const MAX_WORKING_HOURS = 160;
const MAX_WORKING_DAYS = 20;

let totalWorkingDays = 0;
let totalWorkingHours = 0;
let dailyWages = []; // Array to store daily wages

// Loop until either max working days or max working hours is reached
while (totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHours < MAX_WORKING_HOURS) {
    let empCheck = Math.floor(Math.random() * 10) % 3; // Get random work type
    let empHrs = getWorkingHours(empCheck);

    let dailyWage = empHrs * WAGE_PER_HOUR; // Calculate daily wage
    dailyWages.push(dailyWage); // Store daily wage in array

    // Update total hours and days
    totalWorkingHours += empHrs;
    totalWorkingDays++;
}

// Calculate total wage
let totalEmpWage = totalWorkingHours * WAGE_PER_HOUR;

// Print the result
console.log("Total Working Days:", totalWorkingDays);
console.log("Total Working Hours:", totalWorkingHours);
console.log("Total Employee Wage:", totalEmpWage);
console.log("Daily Wages:", dailyWages);