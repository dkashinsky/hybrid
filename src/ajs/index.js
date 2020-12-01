// NOTE: angular, uiRouter, and ocLazyLoad are bundled via scripts angular configuration section
import { navigationComponent } from './components/navigation.component';

function MainCtrl($scope, $state, angularRouter) {
  $scope.title = 'Hey, I am angular.js + Angular 10 hybrid app!';

  $scope.navigateAjs = function() {
    $state.go('angularjs');
  };

  $scope.navigateA10 = function() {
    angularRouter.navigate(['/feature-1']);
  };
}

function stateConfigFunction($stateProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $stateProvider.state({
    name: 'angularjs',
    url: '/ajs-feature-1',
    template: '<div>Hi! I`am angular.js routed view</div>'
  });

  $stateProvider.state({
    name: 'ajs',
    url: '/ajs-feature-2',
    template: '<div>Hi! I`am <b>another</b> angular.js routed view</div>'
  });

  $stateProvider.state({
    name: 'ajs-lazy.**',
    url: '/ajs-lazy-feature',
    lazyLoad: function ($transition$) {
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return import('./lazy/lazy.module.js').then(mod => $ocLazyLoad.load(mod.LAZY_MODULE));
    }
  });

  $stateProvider.state({
    name: 'sink',
    url: '/{path:.*}',
    template: ''
  });
};

angular
  .module('app', ['ui.router', 'oc.lazyLoad'])
  .component('ajsNavigation', navigationComponent)
  .controller('MainCtrl', ['$scope', '$state', 'angularRouter', MainCtrl])
  .config(['$stateProvider', '$locationProvider', stateConfigFunction]);
