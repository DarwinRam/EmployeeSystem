#include "FullTimeEmployee.h"

FullTimeEmployee::FullTimeEmployee(const std::string& name, int id, float annualSalary)
    : Employee(name, id), annualSalary(annualSalary) {}

float FullTimeEmployee::calculateSalary() const {
    return annualSalary;
}
