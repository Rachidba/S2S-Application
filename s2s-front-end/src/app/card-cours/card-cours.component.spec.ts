import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoursComponent } from './card-cours.component';

describe('CardCoursComponent', () => {
  let component: CardCoursComponent;
  let fixture: ComponentFixture<CardCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
