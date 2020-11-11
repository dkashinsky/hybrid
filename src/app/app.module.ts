import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
})
export class AppModule { 
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap(): void {
    this.upgrade.bootstrap(document.body, ['app']);
  }
}
