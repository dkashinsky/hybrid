import { InjectionToken, Provider } from '@angular/core';
import { environment } from 'src/environments/environment';

export const $stateInjectionToken: InjectionToken<angular.ui.IStateService> = new InjectionToken('$state');

const hybridStateServiceProvider: Provider = {
  provide: $stateInjectionToken,
  useFactory: (i: any) => i.get('$state'),
  deps: ['$injector']
};

const standaloneStateServiceProvider: Provider = {
  provide: $stateInjectionToken,
  useValue: {
    go: (state: string) => alert(`Should navigate away from Angular app: ${state}`)
  }
}

export const $stateServiceProvider = environment.standalone
  ? standaloneStateServiceProvider
  : hybridStateServiceProvider;
