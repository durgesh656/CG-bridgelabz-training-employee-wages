class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate}`;
}

const emp1 = new EmployeePayroll(101, "Durgesh", 35000, "Male", "2025-01-06");
const emp2 = new EmployeePayroll(102, "Janny", 9000, "FeMale", "2025-01-06");

console.log(emp1.getDetails());
console.log(emp2.getDetails());