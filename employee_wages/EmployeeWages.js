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

// Loop until either max working days or max working hours is reached
while (totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHours < MAX_WORKING_HOURS) {
    let empCheck = Math.floor(Math.random() * 10) % 3; // Get random work type
    let empHrs = getWorkingHours(empCheck);

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

// UC6 Storing daily wages in an array
function calcDailyWage(empHrs) { 
    return empHrs * WAGE_PER_HOUR; 
}

totalEmplHrs = 0;
totalWorkingDays = 0;

let empDailyWageArr = new Array();

while (totalEmplHrs <= MAX_WORKING_HOURS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3; 
    let empHrs = getWorkingHours(empCheck); 
    totalEmplHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empwage = calcDailyWage(totalEmplHrs);
console.log(empDailyWageArr);
console.log("UC6 Total Days: " + totalWorkingDays + ", Total Hrs: " + totalEmplHrs + ", Emp Wage: " + empwage);

// UC7 - Perform Operations Using Array Helper Functions

// (a) Calculate Total Wage using Reduce
let totalWage = empDailyWageArr.reduce((total, wage) => total + wage, 0);
console.log("UC7A Total Employee Wage with reduce: ", totalWage);

// (b) Show Day along with Daily Wage using Map
let dayWithWages = empDailyWageArr.map((wage, index) => `Day ${index + 1}: Wage = ${wage}`);
console.log("UC7B Daily Wages Map):");
console.log(dayWithWages);

// (c) Show Days when Full-Time Wage of 160 was Earned using Filter
let fullTimeWageDays = empDailyWageArr
    .map((wage, index) => ({ day: index + 1, wage }))
    .filter((dayObj) => dayObj.wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("UC7C Days with Full Time Wage earned:", fullTimeWageDays);

// (d) Find First Occurrence When Full Time Wage was Earned using Find
let firstFullTimeWageDay = empDailyWageArr.findIndex((wage) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("UC7D First Full Time Wage Earned On Day:", firstFullTimeWageDay+1);

// (e) Check if Every Element of Full Time Wage is Truly Holding Full Time Wage
let isEveryFullTimeWage = empDailyWageArr.every((wage) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("UC7E check all element have  Full Time Wage :", isEveryFullTimeWage);

// (f) Check if There is Any Part Time Wage
let hasPartTimeWage = empDailyWageArr.some((wage) => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("UC7F check if Any Part Time Wage :", hasPartTimeWage);

// (g) Find the Number of Days the Employee Worked
let numOfDaysWorked = empDailyWageArr.reduce((count, wage) => (wage > 0 ? count + 1 : count), 0);
console.log("UC7G Number of Days Employee Worked :", numOfDaysWorked);

// UC8: Store Day-wise Wage and Compute Total Wage using Map
let empDailyWageMap = new Map();

totalEmplHrs = 0;
totalWorkingDays = 0;

while (totalEmplHrs <= MAX_WORKING_HOURS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmplHrs += empHrs;
    
    let dailyWage = calcDailyWage(empHrs);
    empDailyWageArr.push(dailyWage);
    
    // Storing Day and Daily Wage in Map
    empDailyWageMap.set(totalWorkingDays, dailyWage);
}

// Display Day-wise Wage
console.log("UC8A - Day-wise Wage: ", empDailyWageMap);

// Compute Total Wage using Map
let totalWageFromMap = Array.from(empDailyWageMap.values()).reduce((total, wage) => total + wage, 0);
console.log("UC8B - Total Wage Computed from Map: ", totalWageFromMap);

// UC9: Use Daily Wage Map & Daily Hour Map for computations using Arrow Functions
let empDailyHoursMap = new Map();
empDailyWageMap = new Map();

totalEmplHrs = 0;
totalWorkingDays = 0;

while (totalEmplHrs <= MAX_WORKING_HOURS && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmplHrs += empHrs;
    
    let dailyWage = calcDailyWage(empHrs);
    empDailyWageArr.push(dailyWage);
    
    // Store Day-wise Hours and Wages in Maps
    empDailyHoursMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, dailyWage);
}

// (a) Calculate Total Wage and Total Hours Worked using Reduce and Arrow Function
totalWage = Array.from(empDailyWageMap.values()).reduce((total, wage) => total + wage, 0);
let totalHours = Array.from(empDailyHoursMap.values()).reduce((total, hours) => total + hours, 0);
console.log("UC9A - Total Wage :", totalWage);
console.log("UC9A - Total Hours Worked :", totalHours);

// (b) Show Full Working Days, Part Working Days, and No Working Days
let fullWorkingDays = [...empDailyHoursMap.entries()]
    .filter(([day, hours]) => hours === FULL_TIME_HOURS)
    .map(([day, hours]) => day);

let partWorkingDays = [...empDailyHoursMap.entries()]
    .filter(([day, hours]) => hours === PART_TIME_HOURS)
    .map(([day, hours]) => day);

let noWorkingDays = [...empDailyHoursMap.entries()]
    .filter(([day, hours]) => hours === 0)
    .map(([day, hours]) => day);

console.log("UC9B - Full Working Days:", fullWorkingDays);
console.log("UC9B - Part Working Days:", partWorkingDays);
console.log("UC9B - No Working Days:", noWorkingDays);
