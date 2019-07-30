import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simple-editor',
  templateUrl: './simple-editor.component.html',
  styleUrls: ['./simple-editor.component.css']
})
export class SimpleEditorComponent implements OnInit {

  @Output() onChangeMessage = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onInputChange(element: HTMLElement) {
    const value = element.value;
    const myObject = {
      message: value,
      messageTest: 'test'
    }
    this.onChangeMessage.emit(myObject);
  }

}
