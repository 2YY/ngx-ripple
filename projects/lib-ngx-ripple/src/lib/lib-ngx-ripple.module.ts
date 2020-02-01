import { NgModule } from '@angular/core';
import { LibNgxRippleComponent } from './lib-ngx-ripple.component';
import {MatRippleModule} from '@angular/material/core';



@NgModule({
  declarations: [LibNgxRippleComponent],
  imports: [
    MatRippleModule
  ],
  exports: [LibNgxRippleComponent]
})
export class LibNgxRippleModule { }
