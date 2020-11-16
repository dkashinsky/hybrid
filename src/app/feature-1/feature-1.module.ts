import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './components/test-component/test-component.component';



@NgModule({
  declarations: [TestComponentComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    TestComponentComponent
  ]
})
export class Feature1Module { }
