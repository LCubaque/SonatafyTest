import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayShareComponent } from './tray-share.component';

describe('TrayShareComponent', () => {
  let component: TrayShareComponent;
  let fixture: ComponentFixture<TrayShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrayShareComponent]
    });
    fixture = TestBed.createComponent(TrayShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
