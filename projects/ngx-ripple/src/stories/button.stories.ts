import {Component, NgModule, ViewChild} from '@angular/core';
import {MatRipple, MatRippleModule} from '@angular/material/core';
import {NgxRippleService} from '../lib/ngx-ripple.service';
import {RouterTestingModule} from '@angular/router/testing';

@Component({
  selector: 'lib-button',
  template: '<button #btn matRipple (mouseenter)="rippleService.show(btnRef)" (mouseleave)="rippleService.hide(btnRef)">Hover Me</button>',
  styles: ['button {display:inline-block; padding:10px; cursor:pointer;}']
})
class ButtonComponent {
  @ViewChild('btn', {read: MatRipple}) btnRef: MatRipple;

  constructor(public rippleService: NgxRippleService) {
  }
}

@NgModule({
  declarations: [ButtonComponent],
  imports: [MatRippleModule],
  exports: [ButtonComponent]
})
class ButtonModule {
}

export default {title: 'Stories'};

export const Button = () => ({
  component: ButtonComponent,
  props: {},
  moduleMetadata: {
    imports: [RouterTestingModule, MatRippleModule, ButtonModule]
  }
});
