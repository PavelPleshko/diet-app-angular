import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSliderComponent } from './meal-slider.component';

describe('MealSliderComponent', () => {
  let component: MealSliderComponent;
  let fixture: ComponentFixture<MealSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
