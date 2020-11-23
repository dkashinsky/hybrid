# PoC: angular.js + Angular 10

The purpose of this project is to prove the concept of running legacy angular.js application along with the app built with the use of the modern Angular framework. The PoC may serve as a starting point to the migration process from the potentially huge legacy codebase to the new one utilizing all the tooling of the modern frontend development.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

Small adjustments were made to configure separate build for angular.js application located under `src/ajs`. Following packages were added:
 - `webpack-cli` to bundle angular.js application
 - `html-loader` to import `html` templates so that they are part of the bundle
 - `concurrently` to run `webpack` and `ng serve` concurrently as we need them both in hybrid mode

## Development

Run `npm run start:standalone` for a development server running in `standalone` mode where you only develop Angular application. The app will automatically reload if you change any of the source files.

Run `npm run start:hybrid` for a development server running in `hybrid` mode where you work on both Angular and angular.js codebase. The app will automatically reload if you change any of the source files.

## Proven points:

 - application is built utilizing both angular.js and Angular frameworks so that they run along with each other and shareing each other's dependencies (services)
 - components can be used interchangeably, i.e. Angular 10 components rendered under angular.js controlled templates and vice versa
 - the app implements single ownership outlet routing strategy where each route is controlled either by angular.js or Angular 10 router. nested routing is included
 - features accessible under different routes still can navigate to each other's routes utilizing `state` service for angular.js and `router` for Angular
 - feature modules can be lazy loaded (Angular 10 part of the app)
 - app can be developed in 2 modes which is a great convenience when feature only relates to the new codebase and the legacy part of the app (angular.js) is developed using different toolset

## Further things to prove:

 - lazy loading for angular.js modules
