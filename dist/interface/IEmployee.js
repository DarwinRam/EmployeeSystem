"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Salary: ${this.calculateSalary()}`);
    }
}
exports.Employee = Employee;
