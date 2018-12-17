import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESideMenuComponent } from './e-side-menu.component';

describe('ESideMenuComponent', () => {
  let component: ESideMenuComponent;
  let fixture: ComponentFixture<ESideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
