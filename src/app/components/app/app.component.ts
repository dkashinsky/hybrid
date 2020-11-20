import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'poc-app',
  template: `
    <div *ngIf="isHybridApp; then hybridNavigation; else standaloneNavigation"></div>
    <ng-template #hybridNavigation><poc-ui-view></poc-ui-view></ng-template>
    <ng-template #standaloneNavigation><poc-navigation></poc-navigation></ng-template>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  isHybridApp: boolean = !environment.standalone;
}
