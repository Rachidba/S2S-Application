import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardCoursComponent } from './list-card-cours.component';


describe('ListCardCoursComponent', () => {
  let component: ListCardCoursComponent;
  let fixture: ComponentFixture<ListCardCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCardCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
