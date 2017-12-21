import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealElementsComponent } from './meal-elements.component';

describe('MealElementsComponent', () => {
  let component: MealElementsComponent;
  let fixture: ComponentFixture<MealElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
