import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlHandlingStrategy, UrlTree } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TestComponentComponent as TC1 } from './feature-1/components/test-component/test-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'feature-1', pathMatch: 'full' },
  { path: 'feature-1', component: TC1 },
  { path: 'feature-2', loadChildren: () => import('./feature-2/feature-2.module').then(m => m.Feature2Module) },
];

class HandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree): boolean { 
    return url.toString().startsWith("/feature") || url.toString() === "/"; 
  }

  extract(url: UrlTree): UrlTree { 
    return url; 
  }

  merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree {
    return newUrlPart; 
  }
}

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: environment.standalone
    }),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: UrlHandlingStrategy, useClass: HandlingStrategy },
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
