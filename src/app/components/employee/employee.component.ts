import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../models/Person';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  selectedEmployee: Person;
  @Input() myList: Array<Person>;

  constructor() { }

  ngOnInit() {
  }
  
  onViewClick(empDetails: Person){
    this.selectedEmployee =  empDetails;
  }

}
