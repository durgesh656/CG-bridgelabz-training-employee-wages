class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.setId(id);
        this.setName(name);
        this.setSalary(salary);
        this.setGender(gender);
        this.setStartDate(startDate);
    }

    setId(id) {
        try {
            if (id <= 0 || isNaN(id)) {
                throw new Error("Invalid Employee ID! ID must be a positive non-zero number.");
            }
            this.id = id;
        } catch (error) {
            console.error(error.message);
        }
    }


    setSalary(salary) {
        try {
            if (salary <= 0 || isNaN(salary)) {
                throw new Error("Invalid Salary! Salary must be a positive non-zero number.");
            }
            this.salary = salary;
        } catch (error) {
            console.error(error.message);
        }
    }


    setGender(gender) {
        try {
            const genderRegex = /^[MF]$/;
            if (!genderRegex.test(gender)) {
                throw new Error("Invalid Gender! Gender must be 'M' or 'F'.");
            }
            this.gender = gender;
        } catch (error) {
            console.error(error.message);
        }
    }


    setStartDate(startDate) {
        try {
            const date = new Date(startDate);
            const today = new Date();
            if (date > today) {
                throw new Error("Invalid Start Date! Start Date cannot be a future date.");
            }
            this.startDate = date;
        } catch (error) {
            console.error(error.message);
        }
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

const emp1 = new EmployeePayroll(101, "Durgesh", 35000, "M", "2025-01-06");
const emp2 = new EmployeePayroll(102, "Janny", 9000, "F", "2025-01-06");
const emp3 = new EmployeePayroll(103, "Rohan", 5000, "M", "2025-01-01");
const emp4 = new EmployeePayroll(101, "HarshVeer", 15000, "M", "2023-05-10");
const emp5 = new EmployeePayroll(103, "Bipin", 6000, "M", "2024-01-20"); 
console.log(emp1.getDetails());
console.log(emp2.getDetails());
console.log(emp3.getDetails());
console.log(emp4.getDetails());
console.log(emp5.getDetails());