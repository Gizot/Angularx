import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventclick',
  templateUrl: './eventclick.component.html',
  styleUrls: ['./eventclick.component.css']
})
export class EventclickComponent {
  count:number=1;
  constructor(){

    console.log("constructor çalıştı" );
    this.count;
  }
  ngOnInit(){
    console.log("ngOnInıt Running");
  }
  

  increaseCount():void{
    this.count++;
  }
  WriteToConsole(){
    console.log("click");
  }

}
