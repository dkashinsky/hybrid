import { Component, Inject } from '@angular/core';
import { $stateInjectionToken } from 'src/app/upgraded-providers';

@Component({
  selector: 'poc-test-component',
  template: `
    <p>test-component from feature-2 works!</p>
    <button type="button" (click)="goAngularJs()">Navigate back to angular.js from Angular 10</button>
  `,
})
export class TestComponentComponent {
  constructor(@Inject($stateInjectionToken) private $state: angular.ui.IStateService) {}

  goAngularJs(): void {
    this.$state.go('angularjs');
  }
}
