import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seguros';  
  showTopToast = false;

  onClose(reason: string) {
    console.log(`Closed by ${reason}`);
  }
}
