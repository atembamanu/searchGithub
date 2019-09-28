import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtprofileComponent } from './gtprofile.component';

describe('GtprofileComponent', () => {
  let component: GtprofileComponent;
  let fixture: ComponentFixture<GtprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
