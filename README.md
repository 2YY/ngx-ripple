# NgxRipple

![CI](https://github.com/2YY/ngx-ripple/workflows/CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/5a1a3a8851b0c322b628/maintainability)](https://codeclimate.com/github/2YY/ngx-ripple/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5a1a3a8851b0c322b628/test_coverage)](https://codeclimate.com/github/2YY/ngx-ripple/test_coverage)

## Motivation

By default, [Ripples](https://material.angular.io/components/ripple/overview) triggered by click event.

But, if you want trigger Ripples by mouseenter event, you can achieve it with `NgxRippleService`.

## Usage

In your `foo.component.ts`:

    @ViewChild('btn', {read: MatRipple}) btnRef: MatRipple;
    
    constructor(public rippleService: NgxRippleService) {}

Then, in your `foo.component.html`:

`<button #btn matRipple (mouseenter)="rippleService.show(btnRef)" (mouseleave)="rippleService.hide(btnRef)">My Button</button>`

## License

[MIT License](./LICENSE)

