import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-1';
  person = {
    name: "",
    lastName: "",
    age: 0
  }
  onRegister=() => {
    console.log("onRegister", this.person)
  }
}
