import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'poc-app',
  template: `
    <poc-ui-view *ngIf="isHybridApp"></poc-ui-view>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  isHybridApp: boolean = !environment.standalone;
}
