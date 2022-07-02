import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swichcase',
  templateUrl: './swichcase.component.html',
  styleUrls: ['./swichcase.component.css']
})
export class SwichcaseComponent implements OnInit {

  constructor() { }
  public day= new Date().getDay();

  //getday method returns a digit corresponding 
  //to the days of week - 0 for sunday,1 for monday and so on

  ngOnInit(): void {
  }

}
