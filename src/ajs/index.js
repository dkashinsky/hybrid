import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

function MainCtrl($scope, $state) {
  $scope.title = 'I am angular.js app!';

  $scope.sayHi = function() {
    alert('Hi!');
  };

  $scope.navigateAjs = function() {
    $state.go('angularjs');
  };

  $scope.navigateA10 = function() {
    $state.go('angular10');
  };
}

function stateConfigFunction($stateProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $stateProvider.state({
    name: 'angularjs',
    url: '/angularjs',
    template: '<div>Hi! I`am angular.js rendered view</div>'
  });

  $stateProvider.state({
    name: 'angular10',
    url: '/angular10',
    template: '<div>Hi! I`am angular10 rendered view</div>'
  });
};

angular
  .module('app', [uiRouter])
  .controller('MainCtrl', ['$scope', '$state', MainCtrl])
  .config(['$stateProvider', '$locationProvider', stateConfigFunction]);