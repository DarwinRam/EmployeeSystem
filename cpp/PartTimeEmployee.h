#ifndef PARTTIMEEMPLOYEE_H
#define PARTTIMEEMPLOYEE_H

#include "Employee.h"

class PartTimeEmployee : public Employee {
private:
    float hourlyRate;
    int hoursWorked;

public:
    PartTimeEmployee(const std::string& name, int id, float hourlyRate, int hoursWorked);
    float calculateSalary() const override;
};

#endif
