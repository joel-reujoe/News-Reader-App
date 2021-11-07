import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'General', url: '/folder/general' },
    { title: 'Business', url: '/folder/business' },
    { title: 'Sports', url: '/folder/sports' },
    { title: 'Entertainment', url: '/folder/entertainment' },
    { title: 'Science', url: '/folder/science' },
    { title: 'Technology', url: '/folder/technology' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
