import { downgradeComponent } from '@angular/upgrade/static';
import { RoutedViewComponent } from './routed-view/routed-view.component';

declare var angular: angular.IAngularStatic;
const AJS_MODULE_NAME: string = 'app';

export default angular
  .module(AJS_MODULE_NAME)
  .directive('pocRoutedViewComponent', downgradeComponent({ component: RoutedViewComponent }))
  .name;
