import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import AJS_MODULE_NAME from './app.module.ajs';
import { RoutedViewComponent } from './routed-view/routed-view.component';
import { AppRoutingModule } from './app-routing.module';
import { Feature1Module } from './feature-1/feature-1.module';
import { Feature2Module } from './feature-2/feature-2.module';

@NgModule({
  declarations: [
    RoutedViewComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule,
    Feature1Module,
    Feature2Module
  ],
})
export class AppModule { 
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap(): void {
    this.upgrade.bootstrap(document.body, [AJS_MODULE_NAME]);
  }
}
