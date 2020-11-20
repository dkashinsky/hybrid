import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import AJS_MODULE_NAME from './app.module.ajs';
import { AppRoutingModule } from './app-routing.module';
import { Feature1Module } from './feature-1/feature-1.module';
import { AppComponent } from './components/app/app.component';
import { UiViewComponent } from './components/ui-view/ui-view.component';
import { setUpLocationSync } from '@angular/router/upgrade';
import { Router } from '@angular/router';
import { $stateServiceProvider } from './upgraded-providers';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UiViewComponent,
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule,
    Feature1Module,
  ],
  providers: [
    $stateServiceProvider
  ]
})
export class AppModule { 
  constructor(private upgrade: UpgradeModule, private router: Router) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    if (environment.standalone) {
      appRef.bootstrap(AppComponent);
    } else {
      this.upgrade.bootstrap(document.body, [AJS_MODULE_NAME]);
      setUpLocationSync(this.upgrade, 'hash');
      this.router.initialNavigation();
    }
  }
}
