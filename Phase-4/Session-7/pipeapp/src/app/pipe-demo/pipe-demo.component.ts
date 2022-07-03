import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string="My Name is Nikunj And i am a JAVA FSD Trainer";
  pi:number=3.1415927;
  a=0.12345;
  b=9876.5432;
  today=new Date();
  object={name:"nikunj",email:"nikunj@gamil.com",address:"mumbai"};

  //custome pipes
  cust:string ="Welcome to the Wolrd of CustomPipes"
}
