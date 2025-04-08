"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTimeEmployee = void 0;
const IEmployee_1 = require("../interface/IEmployee");
class FullTimeEmployee extends IEmployee_1.Employee {
    constructor(name, id, annualSalary) {
        super(name, id);
        this.annualSalary = annualSalary;
    }
    calculateSalary() {
        return this.annualSalary;
    }
}
exports.FullTimeEmployee = FullTimeEmployee;
