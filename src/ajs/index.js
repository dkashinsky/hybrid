import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

function MainCtrl($scope, $state, angularRouter) {
  $scope.title = 'I am angular.js app!';

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
    url: '/angularjs',
    template: '<div>Hi! I`am angular.js routed view</div>'
  });

  $stateProvider.state({
    name: 'sink',
    url: '/{path:.*}',
    template: ''
  });
};

angular
  .module('app', [uiRouter])
  .controller('MainCtrl', ['$scope', '$state', 'angularRouter', MainCtrl])
  .config(['$stateProvider', '$locationProvider', stateConfigFunction]);
