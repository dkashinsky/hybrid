import template from './lazy-feature.component.html';

export class LazyFeatureComponentController {
  constructor() {
    this.wow = "Wow!";
  }

  sayHi() {
    alert('Hey!');
  }
}

export const lazyFeatureComponent = {
  template: template,
  controller: LazyFeatureComponentController
};
