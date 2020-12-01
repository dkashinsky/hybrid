import template from './lazy-feature.component.html';

export class LazyFeatureComponentController {
  sayHi() {
    alert('Hey!');
  }
}

export const lazyFeatureComponent = {
  template: template,
  controller: LazyFeatureComponentController
};
