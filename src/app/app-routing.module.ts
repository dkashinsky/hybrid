import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TestComponentComponent as TC1 } from './feature-1/components/test-component/test-component.component';
import { $stateInjectionToken } from './upgraded-providers';

@Component({ template: '' })
class FallbackRouteComponent implements OnInit {
  constructor(
    @Inject($stateInjectionToken) private $state: angular.ui.IStateService
  ) {}
  
  ngOnInit(): void {
    const { $current: ajsState } = this.$state;

    if ((ajsState as angular.ui.IState).name === 'sink') {
      this.$state.go('angularjs');
    }
  }
}

const fallbackRoute: Route = { path: '**', component: FallbackRouteComponent };

const routes: Routes = [
  { path: '', redirectTo: 'feature-1', pathMatch: 'full' },
  { path: 'feature-1', component: TC1 },
  { path: 'feature-2', loadChildren: () => import('./feature-2/feature-2.module').then(m => m.Feature2Module) },
  fallbackRoute
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: environment.standalone
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
