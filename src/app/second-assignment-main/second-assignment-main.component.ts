import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-assignment-main',
  templateUrl: './second-assignment-main.component.html',
  styleUrls: ['./second-assignment-main.component.css']
})
export class SecondAssignmentMainComponent implements OnInit {
  countlist:any=[];
  counter=0;
  constructor() { }
  ngOnInit(): void {
  }

  Count(){
    this.counter=this.counter+1;
    this.countlist.push(this.counter)  
  }
 
}
