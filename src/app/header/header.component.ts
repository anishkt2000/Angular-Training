import { Component, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: '.app-header , app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  // standalone: true,
})

export class HeaderComponent {
  constructor() { }

 @Input() childMessage! :string;
 @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit("Message from child");
  }
  
}
