import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { NestedComponent } from './components/nested/nested.component';



@NgModule({
  declarations: [
    TestComponentComponent, 
    NestedComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TestComponentComponent
  ]
})
export class Feature2Module { }
