import {Component, ViewChild} from '@angular/core';
import {LibNgxRippleService} from '../../projects/lib-ngx-ripple/src/lib/lib-ngx-ripple.service';
import {MatRipple} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('btnExample', { read: MatRipple }) btnExampleRef: MatRipple;

  constructor(public rippleService: LibNgxRippleService) {}

}
