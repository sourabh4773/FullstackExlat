package com.springP.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springP.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
