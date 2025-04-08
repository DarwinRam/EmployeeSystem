import {Employee} from "../interface/IEmployee";

class PartTimeEmployee extends Employee {
     hourlyRate: number;
     hoursWorked: number;

    constructor(name: string, id: number, hourlyRate: number, hoursWorked: number) {
        super(name, id);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

export {PartTimeEmployee};
