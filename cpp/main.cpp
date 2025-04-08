#include <iostream>
#include "/FullTime Employee.h"
#include "PartTimeEmployee.h"

int main() {
    // Create Full-Time Employee
    FullTimeEmployee fullTimeEmp("Alice Johnson", 101, 60000.0f);
    
    // Create Part-Time Employee
    PartTimeEmployee partTimeEmp("Bob Smith", 202, 20.0f, 25);

    std::cout << "=== Full-Time Employee ===" << std::endl;
    fullTimeEmp.displayDetails();

    std::cout << "\n=== Part-Time Employee ===" << std::endl;
    partTimeEmp.displayDetails();

    return 0;
}
