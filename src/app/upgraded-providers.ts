import { InjectionToken, Provider } from '@angular/core';

export const $stateInjectionToken: InjectionToken<angular.ui.IStateService> = new InjectionToken('$state');

export const $stateProviderFactory = (i: any) => i.get('$state');

export const $stateServiceProvider: Provider = {
  provide: $stateInjectionToken,
  useFactory: $stateProviderFactory,
  deps: ['$injector']
};
