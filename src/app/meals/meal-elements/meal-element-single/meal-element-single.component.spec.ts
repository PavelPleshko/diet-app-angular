import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealElementSingleComponent } from './meal-element-single.component';

describe('MealElementSingleComponent', () => {
  let component: MealElementSingleComponent;
  let fixture: ComponentFixture<MealElementSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealElementSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealElementSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
