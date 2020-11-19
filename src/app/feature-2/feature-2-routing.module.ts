import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedComponent } from './components/nested/nested.component';
import { TestComponentComponent } from './components/test-component/test-component.component';

const routes: Routes = [{
  path: '',
  component: TestComponentComponent,
  children: [
    { path: 'nested', component: NestedComponent }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Feature2RoutingModule { }
