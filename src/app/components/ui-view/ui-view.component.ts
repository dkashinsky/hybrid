import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'poc-ui-view',
})
export class UiViewComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) { 
    super('pocUiView', elementRef, injector);
  }
}
