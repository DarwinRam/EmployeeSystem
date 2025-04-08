#include "PartTimeEmployee.h"

PartTimeEmployee::PartTimeEmployee(const std::string& name, int id, float hourlyRate, int hoursWorked)
    : Employee(name, id), hourlyRate(hourlyRate), hoursWorked(hoursWorked) {}

float PartTimeEmployee::calculateSalary() const {
    return hourlyRate * hoursWorked;
}
