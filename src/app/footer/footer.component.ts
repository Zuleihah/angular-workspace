import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Input() childMessage!: string;

  //child to parent
  @Output() childToParent = new EventEmitter<string>();

  sendMessageToParent(){
    this.childToParent.emit("This is from child to parent. Let's go!");
  }
}
