#ifndef EMPLOYEE_H
#define EMPLOYEE_H

#include <string>

class Employee {
protected:
    std::string name;
    int id;

public:
    Employee(const std::string& name, int id);
    virtual ~Employee() {}

    virtual float calculateSalary() const = 0; // Pure virtual function
    virtual void displayDetails() const;
};

#endif
