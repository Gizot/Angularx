import { Component } from '@angular/core';

@Component({
  selector: 'app-eventclick',
  templateUrl: './eventclick.component.html',
  styleUrls: ['./eventclick.component.css']
})
export class EventclickComponent {

  WriteToConsole():void {
    console.log("click");
  }

}
