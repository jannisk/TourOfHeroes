import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  template: '<dx-button text="Press me" (onClick)="helloWorld()"></dx-button>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  helloWorld() {
    alert('Hello world!');
}
}
