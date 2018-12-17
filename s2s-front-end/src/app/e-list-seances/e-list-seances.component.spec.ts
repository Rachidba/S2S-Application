import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EListSeancesComponent } from './e-list-seances.component';

describe('EListSeancesComponent', () => {
  let component: EListSeancesComponent;
  let fixture: ComponentFixture<EListSeancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EListSeancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EListSeancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
