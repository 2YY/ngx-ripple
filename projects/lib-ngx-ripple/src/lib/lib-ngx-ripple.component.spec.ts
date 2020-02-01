import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibNgxRippleComponent } from './lib-ngx-ripple.component';

describe('LibNgxRippleComponent', () => {
  let component: LibNgxRippleComponent;
  let fixture: ComponentFixture<LibNgxRippleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibNgxRippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibNgxRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
