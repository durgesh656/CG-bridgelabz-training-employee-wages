class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        //this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
        this.setName(name);
    }
    setName(name) {
        try {
            const nameRegex = /^[A-Z][a-zA-Z]{2,}(?: [A-Z][a-zA-Z]{1,})*$/;
            if (!nameRegex.test(name)) {
                throw new Error("Invalid Name! Name must start with a capital letter and have at least 3 characters.");
            }
            this.name = name;
        } catch (error) {
            console.error(error.message);
        }
    }

    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate}`;
}

const emp1 = new EmployeePayroll(101, "Durgesh", 35000, "Male", "2025-01-06");
const emp2 = new EmployeePayroll(102, "Janny", 9000, "FeMale", "2025-01-06");
const emp3 = new EmployeePayroll(103, "rohan", 5000, "Male", "2025-01-01");
console.log(emp1.getDetails());
console.log(emp2.getDetails());
console.log(emp3.getDetails());