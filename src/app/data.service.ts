import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  counter: number =0;

  increment(){
    return ++this.counter;
  }
  decrement(){
    return --this.counter;
  } 
  reset(){
    this.counter=0;
    return 0;
  }
  sum(a: number , b:number){
    return a+b;
  }
}
