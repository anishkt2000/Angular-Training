import { Component } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.scss'
})
export class ComponentAComponent {

  constructor(public abcService: DataService) {

  }

  count = 0;
  increment1() {

    this.count = this.abcService.increment();

  }
  decrement1() {
    if (this.count > 0) {
      this.count = this.abcService.decrement();
    }

  }
  reset1() {
    this.count = this.abcService.reset();
  }

}
