import { Component, NgModule, ViewChild } from "@angular/core";
import { MatRipple, MatRippleModule } from "@angular/material/core";
import { NgxRippleService } from "../lib/ngx-ripple.service";
import { Meta, moduleMetadata, Story } from "@storybook/angular";

@Component({
  selector: "lib-button",
  template: "<button #btn matRipple (mouseenter)=\"rippleService.show(btnRef)\" (mouseleave)=\"rippleService.hide(btnRef)\">Hover Me</button>",
  styles: ["button {display:inline-block; padding:10px; cursor:pointer;}"]
})
class ExampleComponent {
  @ViewChild("btn", { read: MatRipple }) btnRef: MatRipple;

  constructor(public rippleService: NgxRippleService) {
  }
}

@NgModule({
  declarations: [ExampleComponent],
  imports: [MatRippleModule],
  exports: [ExampleComponent]
})
class ExampleModule {
}

export default {
  title: "Example/Ripple",
  component: ExampleComponent,
  decorators: [moduleMetadata({
    imports: [ExampleModule]
  })]
} as Meta;

const Template: Story<ExampleComponent> = (args: ExampleComponent) => ({
  component: ExampleComponent,
  props: args
});

export const Demo = Template.bind({});
Demo.args = {};
