import { lazyFeatureComponent } from "./components/lazy-feature.component";

export const lazyState = {
  name: "ajs-lazy",
  url: "/ajs-lazy-feature",
  component: 'lazyFeature'
};

export const LAZY_MODULE = angular.module('lazy', [])
  .component('lazyFeature', lazyFeatureComponent)
  .config(['$stateRegistryProvider', function($stateRegistry) {
    $stateRegistry.register(lazyState);
  }]);
