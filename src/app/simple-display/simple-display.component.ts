import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-display',
  templateUrl: './simple-display.component.html',
  styleUrls: ['./simple-display.component.css']
})
export class SimpleDisplayComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
