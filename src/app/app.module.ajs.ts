import { Router } from '@angular/router';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import { AppComponent } from './components/app/app.component';

declare var angular: angular.IAngularStatic;
const AJS_MODULE_NAME: string = 'app';

export default angular
  .module(AJS_MODULE_NAME)
  .component('pocUiView', { template: '<ui-view></ui-view>' })
  .directive('pocApp', downgradeComponent({ component: AppComponent }))
  .factory('angularRouter', downgradeInjectable(Router))
  .name;
