abstract class Employee {
     name: string;
     id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    abstract calculateSalary(): number;

    displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Salary: ${this.calculateSalary()}`);
    }
}

export {Employee};
