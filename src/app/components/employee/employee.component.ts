import { Component, OnInit } from '@angular/core';

interface Employee {
  name: string;
  age: number;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  selectedEmployee: Employee;
  employees: Array<Employee> = [
    {
      name: 'Arjun',
      age: 20
    },
    {
      name: 'Kishore',
      age: 21
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  
  onViewClick(empDetails: Employee){
    this.selectedEmployee =  empDetails;
  }

}
