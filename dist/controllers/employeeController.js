"use strict";
// src/controllers/employeeController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPartTimeEmployee = exports.addFullTimeEmployee = void 0;
const FullTimeEmployee_1 = require("../models/FullTimeEmployee");
const PartTimeEmployee_1 = require("../models/PartTimeEmployee");
const db_1 = __importDefault(require("../db/db")); // Importing pool from db.ts
// Add FullTimeEmployee
const addFullTimeEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, annualSalary } = req.body;
    // Create a FullTimeEmployee instance
    const fullTimeEmployee = new FullTimeEmployee_1.FullTimeEmployee(name, Math.floor(Math.random() * 1000), annualSalary);
    try {
        // SQL query to insert employee into the database
        const query = 'INSERT INTO employees (employee_name, id, employee_type, annual_salary) VALUES ($1, $2, $3, $4)';
        // Insert the full-time employee data into the employees table
        yield db_1.default.query(query, [fullTimeEmployee.name, fullTimeEmployee.id, 'F', fullTimeEmployee.annualSalary]);
        res.status(200).json({ message: "Full-time employee added successfully." });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding full-time employee." });
    }
});
exports.addFullTimeEmployee = addFullTimeEmployee;
// Add PartTimeEmployee
const addPartTimeEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, hourlyRate, hoursWorked } = req.body;
    // Create a PartTimeEmployee instance
    const partTimeEmployee = new PartTimeEmployee_1.PartTimeEmployee(name, Math.floor(Math.random() * 1000), hourlyRate, hoursWorked);
    try {
        // SQL query to insert employee into the database
        const query = 'INSERT INTO employees (employee_name, id, employee_type, hourly_rate, hours_worked) VALUES ($1, $2, $3, $4, $5)';
        // Insert the part-time employee data into the employees table
        yield db_1.default.query(query, [partTimeEmployee.name, partTimeEmployee.id, 'P', partTimeEmployee.hourlyRate, partTimeEmployee.hoursWorked]);
        res.status(200).json({ message: "Part-time employee added successfully." });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding part-time employee." });
    }
});
exports.addPartTimeEmployee = addPartTimeEmployee;
