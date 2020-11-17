import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'poc-routed-view',
  templateUrl: './routed-view.template.html'
})
export class RoutedViewComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('A10 Routed View initialized');
  }

  ngOnDestroy(): void {
    console.log('A10 Routed View destroyed');
  }
}
