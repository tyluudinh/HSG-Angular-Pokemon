# HSGAngularPokemon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Tech stack

- [Angular 10][angular]
- [ngrx][ngrx] 
- [ngx-bootstrap][ngx-bootstrap] UI component: `modal`, `dropdown` and more.

[angular]: https://angular.io/
[ngrx]: https://ngrx.io/
[ngx-bootstrap]: https://valor-software.com/ngx-bootstrap/#/

## Structure
```angular2html
└── src
    └── assets (store images, scss ...)
    └── environments
    └── app
        └── core (core module: service call api)
        └── layout (layout module: header, footer)
        └── store (State management)
            ├── actions (all actions defined here.)
            ├── effects (all effects defined here.)
            ├── reducers (all reducers defined here.)
            ├── repositories (inject store repository to dispatch action and get state )
        └── share (share module: components, pipe, ...)
        └── modules (features module: homepage and pokemon module)
            ├── homepage (module)
            ├── pokemon (module)

```
