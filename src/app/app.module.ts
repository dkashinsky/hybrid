import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import AJS_MODULE_NAME from './app.module.ajs';
import { RoutedViewComponent } from './routed-view/routed-view.component';

@NgModule({
  declarations: [
    RoutedViewComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
})
export class AppModule { 
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap(): void {
    this.upgrade.bootstrap(document.body, [AJS_MODULE_NAME]);
  }
}
