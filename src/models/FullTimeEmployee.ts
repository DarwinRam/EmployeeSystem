import {Employee} from "../interface/IEmployee";

class FullTimeEmployee extends Employee {
     annualSalary: number;

    constructor(name: string, id: number, annualSalary: number) {
        super(name, id);
        this.annualSalary = annualSalary;
    }

    calculateSalary(): number {
        return this.annualSalary;
    }
}

export {FullTimeEmployee};
