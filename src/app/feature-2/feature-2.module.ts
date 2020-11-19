import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { NestedComponent } from './components/nested/nested.component';
import { Feature2RoutingModule } from './feature-2-routing.module';

@NgModule({
  declarations: [
    TestComponentComponent, 
    NestedComponent
  ],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ],
})
export class Feature2Module { }
