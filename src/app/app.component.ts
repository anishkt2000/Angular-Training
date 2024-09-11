import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  parentMessage :string ="Message from Parent";
  Message:string="";
constructor(public dataService:DataService){
}  
  receiveMessage($event:any){
    this.Message=$event;
  }
  // counter =this.dataService.counter;

  

}
