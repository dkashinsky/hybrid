import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

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
    name: 'sink',
    url: '/{path:.*}',
    template: ''
  });
};

angular
  .module('app', [uiRouter])
  .component('ajsNavigation', {
    template: `
    <div ng-controller="MainCtrl">
      <h1>{{ title }}</h1>
      <p>You can navigate around via links and buttons. Try them out!</p>
      <ul>
        <li>
          <button ng-click="navigateAjs()">Navigate Angular.JS</button>
        </li>
        <li>
          <button ng-click="navigateA10()">Navigate Angular 10</button>
        </li>
        <li>
          <a href="#/feature-2">Regular link</a>
        </li>
        <li>
          <a ui-sref="ajs">UI Router state link</a>
        </li>
      </ul>
    </div>
    `
  })
  .controller('MainCtrl', ['$scope', '$state', 'angularRouter', MainCtrl])
  .config(['$stateProvider', '$locationProvider', stateConfigFunction]);
