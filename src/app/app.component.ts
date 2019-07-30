import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-comp-temp';

  newMessage: string;

  messageHandler(message) {
    console.log('AppComponent:$event', message);
    this.newMessage = message.message;
  }
}
