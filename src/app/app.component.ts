import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild2';

  childItems: string[] = []; 

  childEvent(childItem: string) {
    this.childItems.push(childItem); 
  }
}
