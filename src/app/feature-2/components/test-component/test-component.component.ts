import { Component, Inject } from '@angular/core';
import { $stateInjectionToken } from 'src/app/upgraded-providers';

@Component({
  selector: 'poc-test-component',
  templateUrl: './test-component.component.html',
})
export class TestComponentComponent {
  constructor(@Inject($stateInjectionToken) private $state: angular.ui.IStateService) {}

  goAngularJs(): void {
    this.$state.go('angularjs');
  }
}
