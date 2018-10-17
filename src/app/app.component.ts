import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userNameStatus = 'Make a username';
  userName = '';
  allowClick = false;

  onCreateUser() {
    this.userNameStatus = 'Your new username is: ' + this.userName;
    this.userName = '';
  }
  onInputChange(event: any) {
    this.allowClick = true;
  }
}
