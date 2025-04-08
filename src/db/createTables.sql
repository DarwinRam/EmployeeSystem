DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    id INTEGER PRIMARY KEY NOT NULL,
    employee_name VARCHAR(100) NOT NULL,
    employee_type VARCHAR(20) NOT NULL, 
    annual_salary NUMERIC,      
    hourly_rate NUMERIC,        
    hours_worked INTEGER        
);