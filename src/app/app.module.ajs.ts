import { Router } from '@angular/router';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import { environment } from 'src/environments/environment';
import { AppComponent } from './components/app/app.component';

declare var angular: angular.IAngularStatic;
const AJS_MODULE_NAME: string = 'app';

console.log('Is Standalone:', environment.standalone);

export default environment.standalone ? AJS_MODULE_NAME : angular
  .module(AJS_MODULE_NAME)
  .component('pocUiView', { template: '<ui-view></ui-view>' })
  .directive('pocApp', downgradeComponent({ component: AppComponent }))
  .factory('angularRouter', downgradeInjectable(Router))
  .name;
