import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPasswordComponent } from './back-password.component';

describe('BackPasswordComponent', () => {
  let component: BackPasswordComponent;
  let fixture: ComponentFixture<BackPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
