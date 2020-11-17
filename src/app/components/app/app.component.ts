import { Component } from '@angular/core';

@Component({
  selector: 'poc-app',
  template: `
    <poc-ui-view></poc-ui-view>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
