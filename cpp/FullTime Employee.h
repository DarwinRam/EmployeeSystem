#ifndef FULLTIMEEMPLOYEE_H
#define FULLTIMEEMPLOYEE_H

#include "Employee.h"

class FullTimeEmployee : public Employee {
private:
    float annualSalary;

public:
    FullTimeEmployee(const std::string& name, int id, float annualSalary);
    float calculateSalary() const override;
};

#endif
