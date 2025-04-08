#include "Employee.h"
#include <iostream>

Employee::Employee(const std::string& name, int id)
    : name(name), id(id) {}

void Employee::displayDetails() const {
    std::cout << "Name: " << name << std::endl;
    std::cout << "ID: " << id << std::endl;
    std::cout << "Salary: " << calculateSalary() << std::endl;
}
