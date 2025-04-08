// src/controllers/employeeController.ts

import { Request, Response } from 'express';
import { FullTimeEmployee } from '../models/FullTimeEmployee';
import { PartTimeEmployee } from '../models/PartTimeEmployee';
import pool from '../db/db';  // Importing pool from db.ts

// Add FullTimeEmployee
export const addFullTimeEmployee = async (req: Request, res: Response) => {
    const { name, annualSalary } = req.body;

    // Create a FullTimeEmployee instance
    const fullTimeEmployee = new FullTimeEmployee(name, Math.floor(Math.random() * 1000), annualSalary);

    try {
        // SQL query to insert employee into the database
         const query = 'INSERT INTO employees (employee_name, id, employee_type, annual_salary) VALUES ($1, $2, $3, $4)';
        // Insert the full-time employee data into the employees table
        await pool.query(query, [fullTimeEmployee.name, fullTimeEmployee.id, 'F', fullTimeEmployee.annualSalary]);

        res.status(200).json({ message: "Full-time employee added successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding full-time employee." });
    }
};

// Add PartTimeEmployee
export const addPartTimeEmployee = async (req: Request, res: Response) => {
    const { name, hourlyRate, hoursWorked } = req.body;

    // Create a PartTimeEmployee instance
    const partTimeEmployee = new PartTimeEmployee(name, Math.floor(Math.random() * 1000), hourlyRate, hoursWorked);

    try {
        // SQL query to insert employee into the database
          const query = 'INSERT INTO employees (employee_name, id, employee_type, hourly_rate, hours_worked) VALUES ($1, $2, $3, $4, $5)';
        // Insert the part-time employee data into the employees table
        await pool.query(query, [partTimeEmployee.name, partTimeEmployee.id, 'P', partTimeEmployee.hourlyRate, partTimeEmployee.hoursWorked]);

        res.status(200).json({ message: "Part-time employee added successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding part-time employee." });
    }
};