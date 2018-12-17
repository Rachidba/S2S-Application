import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TSpaceComponent } from './t-space.component';

describe('TSpaceComponent', () => {
  let component: TSpaceComponent;
  let fixture: ComponentFixture<TSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
