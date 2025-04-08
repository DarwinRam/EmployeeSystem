"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartTimeEmployee = void 0;
const IEmployee_1 = require("../interface/IEmployee");
class PartTimeEmployee extends IEmployee_1.Employee {
    constructor(name, id, hourlyRate, hoursWorked) {
        super(name, id);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    calculateSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}
exports.PartTimeEmployee = PartTimeEmployee;
