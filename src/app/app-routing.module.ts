import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent as TC1 } from './feature-1/components/test-component/test-component.component';
import { TestComponentComponent as TC2 } from './feature-2/components/test-component/test-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'feature-1', pathMatch: 'full' },
  { path: 'feature-1', component: TC1 },
  { path: 'feature-2', component: TC2 },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/angular10' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
