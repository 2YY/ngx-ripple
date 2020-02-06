import { Injectable } from '@angular/core';
import {MatRipple, RippleConfig, RippleRef} from '@angular/material/core';

interface ActiveRipple {
  matRipple: MatRipple;
  rippleRef: RippleRef;
}

@Injectable({
  providedIn: 'root'
})
export class LibNgxRippleService {

  private activeRippleReferences: ActiveRipple[] = [];

  show(matRipple: MatRipple, config?: RippleConfig) {
    const rippleRef = matRipple.launch(config || {
      persistent: true,
      centered: true
    });
    this.activeRippleReferences.push({matRipple, rippleRef} as ActiveRipple);
  }

  hide(matRipple) {
    const activeRipple = this.activeRippleReferences.find(v => v.matRipple === matRipple);
    if (activeRipple) {
      activeRipple.rippleRef.fadeOut();
      this.activeRippleReferences = this.activeRippleReferences.filter(v => v.matRipple !== matRipple);
    }
  }
}
